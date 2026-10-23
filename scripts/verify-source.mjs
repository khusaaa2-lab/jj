import {mkdtemp,readdir,readFile,symlink,writeFile} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {tmpdir} from 'node:os';
import {join,resolve} from 'node:path';
const output=process.env.SERENITY_OUTPUT||'/workspace/outputs/serenity-cinematic';
const folder=await mkdtemp(join(tmpdir(),'serenity-editable-'));
execFileSync('python3',['-c','from zipfile import ZipFile;import sys;z=ZipFile(sys.argv[1]);assert z.testzip() is None;z.extractall(sys.argv[2])',output+'/Serenity-source.zip',folder]);
const source=join(folder,'serenity-source');
// Reuse the installed lockfile dependencies; this checks archive completeness,
// not a fresh network installation or a different operating system.
await symlink(resolve('node_modules'),join(source,'node_modules'),'dir');
execFileSync('npm',['run','build'],{cwd:source,stdio:'inherit'});
async function files(dir,prefix=''){
 const result=[];for(const e of await readdir(dir,{withFileTypes:true})){
  if(e.isDirectory())result.push(...await files(join(dir,e.name),prefix+e.name+'/'));
  else result.push(prefix+e.name);
 }return result.sort();
}
const built=await files(join(source,'dist')),original=await files('dist');
if(JSON.stringify(built)!==JSON.stringify(original))throw Error('Archive build file list differs');
for(const f of built)if(!(await readFile(join(source,'dist',f))).equals(await readFile(join('dist',f))))throw Error('Build bytes differ: '+f);
const report={archive:output+'/Serenity-source.zip',extracted:source,build:'passed',byteIdenticalBuildFiles:built.length,dependencies:'Reused existing installed lockfile dependencies through a temporary symlink; no new network installation.'};
await writeFile(output+'/source-verification.json',JSON.stringify(report,null,2));
console.log('Editable source ZIP rebuilt successfully: '+built.length+' production files match byte-for-byte.');
