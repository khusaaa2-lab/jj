// Byte/MIME/SPA checks of the committed production folder; not browser QA.
import {readdir,readFile,writeFile,mkdir} from 'node:fs/promises';
import {resolve,join,extname} from 'node:path';
import {spawn} from 'node:child_process';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
const root=resolve('dist'),output=resolve('docs/qa'),port='4328',base=`http://127.0.0.1:${port}`;
const server=spawn(process.execPath,['scripts/serve-production.mjs'],{env:{...process.env,SITE_ROOT:root,HOST:'127.0.0.1',PORT:port},stdio:['ignore','pipe','pipe']});
let error='';server.stderr.on('data',d=>error+=d);
async function list(dir,prefix=''){const result=[];for(const entry of await readdir(dir,{withFileTypes:true})){const name=prefix+entry.name;if(entry.isDirectory())result.push(...await list(join(dir,entry.name),name+'/'));else result.push(name);}return result.sort();}
try {
  let ready=false;
  for(let i=0;i<40;i++){try{if((await fetch(base)).ok){ready=true;break;}}catch{}await new Promise(r=>setTimeout(r,100));}
  assert.ok(ready,error||'production server did not start');assert.equal(server.exitCode,null);
  const files=await list(root),records=[];
  const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.webp':'image/webp','.woff2':'font/woff2','.mp4':'video/mp4','.txt':'text/plain'};
  for(const file of files){const response=await fetch(`${base}/${file}`);assert.equal(response.status,200,file);const bytes=await readFile(join(root,file));assert.ok(Buffer.from(await response.arrayBuffer()).equals(bytes),file);if(mime[extname(file)])assert.ok(response.headers.get('content-type').startsWith(mime[extname(file)]),file);records.push({path:file,bytes:bytes.length,sha256:createHash('sha256').update(bytes).digest('hex')});}
  const index=await readFile(join(root,'index.html'),'utf8');assert.ok(!index.includes('/src/main.js')&&!index.includes('/src/styles.css'),'production index must not load Vite source');
  const routes=['/','/campus?place=library&interior=library','/learning','/life','/events','/project'];
  for(const route of routes){const response=await fetch(base+route);assert.equal(response.status,200);assert.equal(await response.text(),index);}
  const scene=records.find(f=>/^assets\/reference-campus-.*\.js$/.test(f.path));assert.ok(scene,'actual mesh renderer is bundled');
  const canonical=JSON.parse(await readFile(join(root,'data/places.json')));assert.equal(canonical.length,13);
  const manifest=JSON.parse(await readFile(join(root,'media/asset-map.json')));assert.equal(manifest.assets.length,11);
  for(const asset of manifest.assets)assert.ok(records.some(r=>r.path===asset.src.replace(/^\//,'')),asset.src);
  const report={method:'HTTP byte-for-byte, MIME and SPA checks; no browser execution',distFiles:records.length,indexSHA256:records.find(f=>f.path==='index.html').sha256,sourceIndexReferences:false,sceneBundle:scene.path,routes,records};
  await mkdir(output,{recursive:true});await writeFile(join(output,'dist-verification.json'),JSON.stringify(report,null,2)+'\n');
  console.log(JSON.stringify({distFiles:report.distFiles,indexSHA256:report.indexSHA256,routes:routes.length,sceneBundle:report.sceneBundle},null,2));
} finally {server.kill('SIGTERM');}
