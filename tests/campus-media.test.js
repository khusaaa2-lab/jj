import {test} from 'node:test';
import assert from 'node:assert/strict';
import {campusLayout,campusAnchors,internalPlaces,pathFor} from '../src/campus-media.js';
import {readFileSync} from 'node:fs';
test('chosen-frame anchors cover all thirteen canonical places, with internal functions sharing real buildings',()=>{
  const places=JSON.parse(readFileSync(new URL('../public/data/places.json',import.meta.url)));
  assert.equal(Object.keys(campusAnchors).length,11);
  assert.equal(internalPlaces['gaming-zone'],'tech-lab');assert.equal(internalPlaces['quiet-room'],'learning-wing');
  for(const p of places){const a=campusAnchors[internalPlaces[p.id]||p.id];assert.ok(a);assert.ok(pathFor(p.id).length);for(const xy of [a.point,...a.polygon])for(const n of xy)assert.ok(n>=0&&n<=1);}
  assert.ok(campusAnchors.library.point[0]>.7&&campusAnchors.library.point[1]<.25);
});
test('overview contains the source; pan clamps without empty edges beyond intentional fit margins',()=>{
  for(const [w,h] of [[360,280],[390,280],[728,451],[900,635],[1007,764]])for(const z of [1,1.4,1.6,2])for(const x of [-20,.5,20])for(const y of [-20,.5,20]){
    const r=campusLayout(w,h,z,x,y);
    assert.ok(Math.abs(r.width/r.height-16/9)<1e-8);
    if(r.width>w){assert.ok(r.left<=1e-7);assert.ok(r.left+r.width>=w-1e-7);}else assert.ok(Math.abs(r.left-(w-r.width)/2)<1e-7);
    if(r.height>h){assert.ok(r.top<=1e-7);assert.ok(r.top+r.height>=h-1e-7);}else assert.ok(Math.abs(r.top-(h-r.height)/2)<1e-7);
  }
});
