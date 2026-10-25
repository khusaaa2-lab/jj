import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import { buildReferenceCampus } from '../src/reference-model.js';
import { referenceBuildings, referencePlaces, referencePlace, referenceParents, referenceRoute, pitch, terrainHeight } from '../src/reference-layout.js';
import { overviewCamera, focusCamera } from '../src/reference-campus.js';
import { readFile } from 'node:fs/promises';
import {volumeHashes,pineParts,hash} from './helpers/reference-snapshot.js';

const model=buildReferenceCampus();
const canonical=JSON.parse(await readFile(new URL('../public/data/places.json',import.meta.url)));
function cameraFor(view,aspect){const camera=new T.PerspectiveCamera(40,aspect,.5,1300);camera.position.copy(view.position);camera.lookAt(view.target);camera.updateMatrixWorld(true);return camera;}
function corners(bounds){return [-1,1].flatMap(x=>[-1,1].flatMap(y=>[-1,1].map(z=>new T.Vector3(x<0?bounds.min.x:bounds.max.x,y<0?bounds.min.y:bounds.max.y,z<0?bounds.min.z:bounds.max.z))));}

test('reference campus maps all 13 places to 11 exterior locations and 10 distinct architectural volumes',()=>{
  assert.equal(canonical.length,13);assert.equal(Object.keys(referencePlaces).length,11);
  assert.equal(referenceBuildings.length,10);
  for(const {id} of canonical){assert.ok(referencePlace(id),id);assert.ok(referenceRoute(id).length>=2,id);}
  assert.equal(referenceParents['gaming-zone'],'tech-lab');assert.equal(referenceParents['quiet-room'],'learning-wing');
  assert.notDeepEqual(referencePlace('dining-a').focus,referencePlace('dining-b').focus);
  for(const id of Object.keys(referencePlaces))assert.ok(model.pickVolumes.some(v=>v.userData.place===id),id);
});
test('clock face, side face, upper shaft and cap have their own main-building ray target',()=>{
  const tower=model.pickVolumes.find(v=>v.userData.tower),bounds=new T.Box3().setFromObject(tower);
  assert.equal(tower.userData.place,'main-building');assert.equal(tower.visible,false);
  const west=model.pickVolumes.find(v=>v.parent.name==='west-hall'&&!v.userData.tower);
  assert.ok(bounds.max.y>new T.Box3().setFromObject(west).max.y+10);
  const rays=[[[ -28,25.4,30],[0,0,-1]],[[0,25.4,-3],[-1,0,0]],[[-28,27.8,30],[0,0,-1]],[[-28,40,-3],[0,-1,0]]];
  for(const [origin,direction] of rays){const hits=new T.Raycaster(new T.Vector3(...origin),new T.Vector3(...direction)).intersectObjects(model.pickVolumes,false);assert.equal(hits[0]?.object,tower);}
  assert.ok(referencePlaces['main-building'].point[1]>bounds.max.y);
});
test('tower and main-building bounds remain in overview/focus frusta at desktop and mobile proportions',()=>{
  const bounds=new T.Box3();for(const v of model.pickVolumes.filter(v=>v.userData.place==='main-building'))bounds.union(new T.Box3().setFromObject(v));
  for(const aspect of [1672/941,1440/900,768/750,390/600,360/600]){
    const overview=overviewCamera(aspect);
    for(const view of [overview,focusCamera('main-building',aspect,overview.position.clone().sub(overview.target))]){
      const camera=cameraFor(view,aspect);
      for(const point of [...corners(bounds),new T.Vector3(...referencePlaces['main-building'].point)]){
        const p=point.project(camera);assert.ok(Math.abs(p.x)<.96&&Math.abs(p.y)<.96&&p.z>0&&p.z<1,`${aspect}: tower/main volume outside frame ${p.toArray()}`);
      }
    }
  }
});
test('all primary roofs are closed watertight solids; no open or cutaway state',()=>{
  assert.ok(model.roofs.length>=12);
  for(const roof of model.roofs){
    assert.equal(roof.userData.closed,true);assert.equal(roof.visible,true);
    const g=roof.geometry,p=g.attributes.position,edges=new Map(),n=g.index?.count||p.count;
    const vertex=i=>new T.Vector3().fromBufferAttribute(p,g.index?g.index.getX(i):i).toArray().map(v=>v.toFixed(5)).join(',');
    for(let i=0;i<n;i+=3){const tri=[vertex(i),vertex(i+1),vertex(i+2)];for(let j=0;j<3;j++){const key=[tri[j],tri[(j+1)%3]].sort().join('|');edges.set(key,(edges.get(key)||0)+1);}}
    for(const [edge,count] of edges)assert.equal(count,2,`${roof.name}: open edge ${edge}`);
  }
});
test('library is high on the right, recessed in rock, with a rising pedestrian route',()=>{
  const library=referenceBuildings.find(b=>b.id==='library');assert.ok(library.x>50&&library.z<-60&&library.y>=24);
  assert.ok(terrainHeight(80,-79)>library.y);
  const path=referenceRoute('library');assert.ok(path.at(-1)[1]>path[0][1]+15);
  assert.ok(model.materials.rock.every(m=>m.isMeshStandardMaterial));
  const bounds=new T.Box3().setFromObject(model.pickVolumes.find(v=>v.userData.place==='library'));
  assert.ok(bounds.max.y>28&&bounds.min.x>40);
});
test('entire stadium is axis-aligned and shifted clear of the retained buildings, including goals, players and picking',()=>{
  const authored=buildReferenceCampus({batched:false}),stadium=authored.root.getObjectByName('Complete rotated stadium');
  assert.equal(pitch.yaw,0);assert.equal(stadium.rotation.y,0);assert.deepEqual(stadium.position.toArray(),[87.1,0,11]);
  const volume=model.pickVolumes.find(v=>v.userData.place==='football-field');assert.equal(volume.parent.name,stadium.name);
  const bounds=new T.Box3().setFromObject(volume);
  assert.deepEqual([bounds.min.x,bounds.max.x,bounds.min.z,bounds.max.z],[65.6,108.6,-21,43]);
  for(const [name,z] of [['far',-20.6],['near',42.6]]){
    const crossbar=stadium.getObjectByName('Goal crossbar '+name),p=crossbar.getWorldPosition(new T.Vector3());
    assert.ok(Math.abs(p.x-87.1)<1e-6&&Math.abs(p.z-z)<1e-6);
    const b=new T.Box3().setFromObject(crossbar);assert.ok(b.max.x-b.min.x>7.3&&b.max.z-b.min.z<.11);
  }
  for(let i=1;i<=10;i++){
    const player=stadium.getObjectByName('Field player '+i);assert.equal(player.parent,stadium);
    const b=new T.Box3().setFromObject(player);assert.ok(b.min.x>65.6&&b.max.x<108.6&&b.min.z>-21&&b.max.z<43);
  }
  // Real selection bounds accept each inside corner and reject a point beyond each edge.
  for(const x of [65.61,108.59])for(const z of [-20.99,42.99])assert.ok(new T.Raycaster(new T.Vector3(x,100,z),new T.Vector3(0,-1,0)).intersectObject(volume,false).length);
  for(const [x,z] of [[65.5,11],[108.7,11],[87.1,-21.1],[87.1,43.1]])assert.equal(new T.Raycaster(new T.Vector3(x,100,z),new T.Vector3(0,-1,0)).intersectObject(volume,false).length,0);
  assert.deepEqual(referenceRoute('football-field').at(-1),[64.9,2.2,15]);
  assert.deepEqual(referencePlace('football-field').point,[87.1,3,13]);
  assert.deepEqual(referencePlace('football-field').focus,[87.1,3,10]);
  const sports=authored.siteBounds.stadium;
  for(const key of ['workshop-terrace','workshop-pergola','tech','residence']){
    const b=authored.siteBounds[key];assert.ok(sports.min[0]>b.max[0]||sports.max[0]<b.min[0]||sports.min[2]>b.max[2]||sports.max[2]<b.min[2],`stadium overlaps ${key}`);
  }
  assert.ok(sports.min[0]-authored.siteBounds['workshop-terrace'].max[0]>=1.5,'at least 1.5 m terrace clearance');
});
test('accepted architecture and remaining forest positions are unchanged; terrain is a separate exterior layer',async()=>{
  const baseline=JSON.parse(await readFile(new URL('./fixtures/reference-f239496.json',import.meta.url)));
  const acceptedPines=JSON.parse(await readFile(new URL('./fixtures/reference-limited-pines.json',import.meta.url)));
  const authored=buildReferenceCampus({batched:false});
  assert.deepEqual(volumeHashes(authored),baseline.volumes);
  for(const [id,anchor] of Object.entries(baseline.placeAnchors))if(id!=='football-field')assert.deepEqual(referencePlace(id),anchor);
  for(const [id,path] of Object.entries(baseline.routes))if(id!=='football-field')assert.deepEqual(referenceRoute(id),path);
  assert.equal(pineParts(model).length,acceptedPines.pineParts);assert.equal(hash(pineParts(model)),acceptedPines.pinesSHA256);
  assert.deepEqual(model.forest.filter(p=>p.removed),acceptedPines.removedTrees);
  assert.equal(model.forest.length*6,baseline.pineParts);
  const layer=model.root.getObjectByName('Peripheral mountain terrain');assert.ok(layer.userData.independent);
  const p=layer.children[0].geometry.attributes.position;let maxY=0;
  for(let i=0;i<p.count;i++){
    const x=p.getX(i),z=p.getZ(i);maxY=Math.max(maxY,p.getY(i));
    assert.ok(x<=-164.9||x>=194.9||z>=169.9||z<=-129.9,'new relief must stay beyond the accepted forest/campus');
    if(x<35)assert.ok(z>=-44.01,'the open lake must remain clear');
  }
  assert.ok(maxY>80,'actual peripheral rock relief, not a flat green extension');
});
test('actual geometry uses PBR materials and instanced details without video/photo planes',()=>{
  let instances=0,solidTriangles=0;
  model.root.traverse(o=>{if(o.isInstancedMesh)instances+=o.count;if(o.isMesh&&o.visible){assert.ok(o.material.isMeshStandardMaterial);solidTriangles+=(o.geometry.index?.count||o.geometry.attributes.position.count)/3;for(const value of Object.values(o.material))if(value?.isTexture)assert.ok(value.isDataTexture,'only procedural surface textures');}});
  assert.ok(instances>1000,'repeated forest/facade parts are batched');assert.ok(solidTriangles>50000);
  assert.equal(model.root.userData.approximateHiddenSides,true);
});
