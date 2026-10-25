import * as T from 'three';
import { referenceBuildings, referencePlaces, referenceRoutes, terrainHeight, courtyard, pitch } from './reference-layout.js';
import { alpineRidge } from './landscape.js';
import { batchStaticMeshes } from './batch.js';

// Geometry-only authoring module: it can also be inspected/exported in Node.
// No campus photographs, videos, camera-facing cards or external model services.
export function buildReferenceCampus({ vegetation = true } = {}) {
  const root = new T.Group(); root.name = 'Serenity reference campus';
  const objects = {}, roofs = [], pickVolumes = [], textures = [];
  let seed = 241026;
  const random = () => ((seed = (1664525 * seed + 1013904223) >>> 0) / 4294967296);
  const boxGeo = new T.BoxGeometry(1,1,1), cylGeo = new T.CylinderGeometry(1,1,1,12);
  const leafGeo = new T.IcosahedronGeometry(1,1), rockGeo = new T.IcosahedronGeometry(1,1);
  for(const geo of [leafGeo,rockGeo]){
    const p=geo.attributes.position;
    for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i),z=p.getZ(i),v=1+Math.sin(x*41+y*17+z*31)*.16;p.setXYZ(i,x*v,y*v,z*v);}
    geo.computeVertexNormals();
  }
  const coneGeo = new T.ConeGeometry(1,1,14,3);
  {const p=coneGeo.attributes.position;for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i),z=p.getZ(i),a=Math.atan2(z,x),v=1+Math.sin(a*7+y*18)*.18+Math.cos(a*13+y*11)*.09;p.setXYZ(i,x*v,y+Math.sin(a*7)*.035,z*v);}coneGeo.computeVertexNormals();}
  function texture(kind) {
    const size=128, bytes=new Uint8Array(size*size*4);
    for(let y=0;y<size;y++)for(let x=0;x<size;x++) {
      let v=.9+random()*.1;
      if(kind==='stone') { const row=Math.floor(y/24); if(y%24<2 || (x+(row%2)*32)%64<2)v=.67; }
      if(kind==='wood') v=.82+.09*Math.sin(x*.7+Math.sin(y*.07)*.7)+random()*.09;
      if(kind==='grass') v=.72+random()*.28;
      const i=(y*size+x)*4;bytes[i]=bytes[i+1]=bytes[i+2]=Math.round(v*255);bytes[i+3]=255;
    }
    const map=new T.DataTexture(bytes,size,size,T.RGBAFormat);map.needsUpdate=true;
    map.wrapS=map.wrapT=T.RepeatWrapping;map.repeat.set(kind==='grass'?28:3,kind==='grass'?28:2);
    map.colorSpace=T.SRGBColorSpace; textures.push(map); return map;
  }
  const standard=(color,extra={})=>new T.MeshStandardMaterial({color,roughness:.83,...extra});
  const m={
    stone: standard('#ddd1b8',{map:texture('stone')}), pale:standard('#d8cfb8'),
    oak:standard('#aa783e',{map:texture('wood')}), oakLight:standard('#c69858'),
    darkWood:standard('#664e32'), roof:standard('#303e4b',{roughness:.48,metalness:.32}),
    seam:standard('#68777e',{roughness:.42,metalness:.4}), trim:standard('#36493e'),
    glass:standard('#b9bcb0',{roughness:.19,metalness:.28,transparent:true,opacity:.34,depthWrite:false}),
    window:standard('#818c87',{roughness:.2,metalness:.42,emissive:'#d0a04d',emissiveIntensity:.15}),
    warm:standard('#dbbc79',{emissive:'#ad7428',emissiveIntensity:.16}),
    floor:standard('#b7aa8e'), path:standard('#d5cab1'), pathEdge:standard('#b6ac92'),
    grass:standard('#596e39',{map:texture('grass')}), turf:standard('#496c36'), turf2:standard('#587a40'),
    leaves:[standard('#4c6a2f'),standard('#748341'),standard('#3e5e32'),standard('#8b8e49')],
    pines:[standard('#294937'),standard('#385e3b'),standard('#4d6a3b'),standard('#6b7c42')],
    rock:[standard('#7e8171'),standard('#a4a391'),standard('#c0bba7')],
    water:standard('#4c92aa',{metalness:.45,roughness:.27}), waterLine:standard('#9bc4c4',{metalness:.3,roughness:.3}),
    white:standard('#eeeadd'), metal:standard('#5e6b62',{metalness:.55,roughness:.45}),
    soil:standard('#6a6248'), skin:standard('#b48b65'),
    clothes:[standard('#344e62'),standard('#c0b691'),standard('#687a88'),standard('#975c3f'),standard('#405d4c')],
    flowers:[standard('#d5c580'),standard('#b896b2'),standard('#d6d8bd')],
  };
  function mesh(geo,material,pos,scale=[1,1,1],parent=root) {
    const o=new T.Mesh(geo,material);o.position.set(...pos);o.scale.set(...scale);
    o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;
  }
  const box=(material,pos,scale,parent=root)=>mesh(boxGeo,material,pos,scale,parent);
  const cylinder=(material,pos,radius,height,parent=root)=>mesh(cylGeo,material,pos,[radius,height,radius],parent);
  function beam(a,b,width,material=m.oak,parent=root,depth=width) {
    const av=new T.Vector3(...a),bv=new T.Vector3(...b),mid=av.clone().add(bv).multiplyScalar(.5);
    const o=box(material,mid.toArray(),[width,av.distanceTo(bv),depth],parent);
    o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),bv.sub(av).normalize());return o;
  }
  function rail(a,b,parent=root,height=1.05) {
    const d=Math.hypot(b[0]-a[0],b[2]-a[2]),n=Math.max(1,Math.ceil(d/1.8));
    beam([a[0],a[1]+height,a[2]],[b[0],b[1]+height,b[2]],.09,m.metal,parent);
    beam([a[0],a[1]+.5,a[2]],[b[0],b[1]+.5,b[2]],.045,m.metal,parent);
    for(let i=0;i<=n;i++){const f=i/n,x=a[0]+(b[0]-a[0])*f,y=a[1]+(b[1]-a[1])*f,z=a[2]+(b[2]-a[2])*f;box(m.metal,[x,y+height/2,z],[.065,height,.065],parent);}
  }
  function strip(a,b,width=2.4,parent=root,material=m.path) {
    const o=beam(a,b,width,material,parent,.13);o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),new T.Vector3(b[0]-a[0],b[1]-a[1],b[2]-a[2]).normalize());
    // A rectangular ribbon with the short axis normal to the walking surface.
    const length=Math.hypot(b[0]-a[0],b[2]-a[2]);
    o.removeFromParent();
    const g=new T.BufferGeometry(),v=[a[0],a[1],a[2],b[0],b[1],b[2]],dx=(b[0]-a[0])/length,dz=(b[2]-a[2])/length;
    const p=[a[0]-dz*width/2,a[1],a[2]+dx*width/2,a[0]+dz*width/2,a[1],a[2]-dx*width/2,b[0]+dz*width/2,b[1],b[2]-dx*width/2,b[0]-dz*width/2,b[1],b[2]+dx*width/2];
    g.setAttribute('position',new T.Float32BufferAttribute(p,3));g.setIndex([0,2,1,0,3,2]);g.computeVertexNormals();
    const surface=mesh(g,material,[0,0,0],[1,1,1],parent);surface.material.side=T.DoubleSide;surface.castShadow=false;return surface;
  }
  // Closed solid roof volumes. Every face, including the underside, is present.
  function roofGeometry(hip=false) {
    const a=hip?.29:.5, points=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[-a,1,0],[a,1,0]];
    const faces=[[0,1,5,4],[3,4,5,2],[0,4,3],[1,2,5],[0,3,2,1]],verts=[],uv=[];
    for(const face of faces)for(let i=1;i<face.length-1;i++){
      let tri=[face[0],face[i],face[i+1]];
      const v=tri.map(k=>new T.Vector3(...points[k])),normal=v[1].clone().sub(v[0]).cross(v[2].clone().sub(v[0]));
      const c=v[0].clone().add(v[1]).add(v[2]).multiplyScalar(1/3).sub(new T.Vector3(0,.25,0));
      if(normal.dot(c)<0)tri=[tri[0],tri[2],tri[1]];
      for(const k of tri){verts.push(...points[k]);uv.push(points[k][0]+.5,points[k][2]+.5);}
    }
    const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(verts,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.computeVertexNormals();return g;
  }
  const gableGeo=roofGeometry(),hipGeo=roofGeometry(true);
  const seamPoints=[];
  function roof(x,y,z,w,d,h,type,parent,id) {
    const alongZ=type==='gable-z',a=alongZ?d:w,b=alongZ?w:d;
    const surface=mesh(type==='hip'?hipGeo:gableGeo,m.roof,[x,y,z],[a,h,b],parent);
    if(alongZ)surface.rotation.y=Math.PI/2;
    surface.name=`Closed roof · ${id}`;surface.userData={roof:true,closed:true,place:id};roofs.push(surface);
    box(m.roof,[x,y-.09,z],[w,.22,d],parent);
    for(const side of [-1,1]){
      box(m.trim,[x,y-.18,z+side*d/2],[w+.08,.19,.16],parent);
      box(m.trim,[x+side*w/2,y-.18,z],[.16,.19,d+.08],parent);
    }
    const add=(p,q)=>{for(const v of [p,q])seamPoints.push(alongZ?x+v[2]:x+v[0],y+v[1]+.035,alongZ?z-v[0]:z+v[2]);};
    for(let xx=-a/2+.2;xx<a/2;xx+=.58){
      const hipHeight=type==='hip'?Math.min(1,(a/2-Math.abs(xx))/(a*.21)):1;
      const rr=type==='hip'?Math.min(a*.29,Math.max(-a*.29,xx)):xx;
      for(const side of [-1,1])add([xx,0,side*b/2],[rr,h*hipHeight,0]);
    }
    box(m.seam,[x,y+h+.05,z],alongZ?[.15,.12,d*(type==='hip'?.58:1)]:[w*(type==='hip'?.58:1),.12,.15],parent);
    return surface;
  }
  function window(x,y,z,w,h,parent,side=false) {
    const p=(a,b,c)=>side?[z+c,y+b,x+a]:[x+a,y+b,z+c];
    const size=(a,b,c)=>side?[c,b,a]:[a,b,c];
    box(m.window,p(0,0,.035),size(w,h,.08),parent);
    for(const dx of [-w/2,0,w/2])box(m.darkWood,p(dx,0,.12),size(.085,h+.15,.13),parent);
    for(const dy of [-h/2,0,h/2])box(m.oak,p(0,dy,.13),size(w+.15,.08,.14),parent);
    box(m.pale,p(0,-h/2-.12,.1),size(w+.35,.16,.45),parent);
  }
  function gallery(b,parent) {
    const {x,y,z,w,d}=b,front=z+d/2+1.3;
    box(m.floor,[x,y+3.4,front],[w+.6,.28,2.7],parent);
    for(let xx=x-w/2;xx<=x+w/2+.1;xx+=3.1){
      box(m.oak,[xx,y+3.6,front+1.1],[.23,7.1,.23],parent);
      box(m.oakLight,[xx,y+6.65,front+.75],[.75,.18,.7],parent);
    }
    rail([x-w/2,y+3.55,front+1.3],[x+w/2,y+3.55,front+1.3],parent);
    box(m.oak,[x,y+6.9,front+1.1],[w+.7,.24,.27],parent);
  }
  function pick(id,pos,size,parent=root) {
    const volume=box(new T.MeshBasicMaterial({visible:false}),pos,size,parent);
    volume.name=`Pick volume · ${id}`;volume.visible=false;volume.userData.place=id;pickVolumes.push(volume);
  }
  function building(b) {
    const {id,x,y,z,w,d,h}=b,parent=new T.Group();parent.name=b.key;parent.userData={place:id,architecturalVolume:true,...b};root.add(parent);
    (objects[id] ||= []).push(parent);
    box(m.stone,[x,y-.25,z],[w+.6,.5,d+.6],parent);
    const open=b.glass||b.dining;
    if(open){
      box(m.pale,[x,y+h/2,z-d/2],[w,h,.45],parent);
      box(m.floor,[x,y+.15,z],[w,.3,d],parent);
      box(m.oak,[x,y+h-.12,z],[w,.25,d],parent);
      for(const side of [-1,1]){
        box(m.glass,[x+side*w/2,y+h/2,z],[.07,h-.3,d],parent);
        for(let zz=z-d/2;zz<=z+d/2+.01;zz+=2)box(m.oak,[x+side*w/2,y+h/2,zz],[.15,h,.15],parent);
      }
      box(m.glass,[x,y+h/2,z+d/2],[w,h-.25,.08],parent);
      for(let xx=x-w/2;xx<=x+w/2+.01;xx+=2){
        box(m.oak,[xx,y+h/2,z+d/2],[.16,h,.18],parent);
        if(b.dining)box(m.oak,[xx,y+h/2,z+d/2+1.5],[.19,h,.19],parent);
      }
      for(const yy of [.25,h*.66,h-.05])box(m.oak,[x,y+yy,z+d/2],[w,.13,.18],parent);
      for(let xx=x-w/2+2;xx<x+w/2-1;xx+=4)for(let zz=z-d/2+3;zz<z+d/2-1;zz+=3.8){
        box(m.oakLight,[xx,y+1,zz],[2.1,.13,1.15],parent);
        for(const dx of [-.8,.8]){box(m.darkWood,[xx+dx,y+.5,zz],[.1,1,.1],parent);for(const dz of [-1,1]){box(m.oak,[xx+dx,y+.54,zz+dz],[.5,.12,.5],parent);box(m.oak,[xx+dx,y+.87,zz+dz*1.2],[.5,.7,.1],parent);}}
      }
      for(let xx=x-w/2+2;xx<x+w/2;xx+=4)box(m.warm,[xx,y+h-.5,z],[1.4,.08,.35],parent);
    }else{
      box(m.stone,[x,y+h/2,z],[w,h,d],parent);
      for(const sign of [-1,1]){
        box(m.oak,[x,y+h*.75,z+sign*(d/2+.02)],[w,h*.42,.12],parent);
        for(let xx=x-w/2+1.8;xx<x+w/2-1;xx+=2.8)for(let f=0;f<2;f++)window(xx,y+1.85+f*3.35,z+sign*(d/2+.14),1.65,2.1,parent);
        for(let zz=z-d/2+2;zz<z+d/2-1;zz+=3)for(let f=0;f<2;f++)window(zz,y+1.85+f*3.35,x+sign*(w/2+.14),1.6,2.1,parent,true);
        box(m.pale,[x,y+3.35,z+sign*(d/2+.09)],[w+.2,.22,.3],parent);
      }
      for(let xx=x-w/2+.6;xx<x+w/2;xx+=1.4)box(m.pale,[xx,y+.35,z+d/2+.12],[1.2,.5,.3],parent);
    }
    if(b.gallery)gallery(b,parent);
    if(b.roof==='planted'){
      box(m.pale,[x,y+h+.18,z],[w+1,.4,d+1],parent);
      box(m.grass,[x,y+h+.43,z-1],[w+.4,.16,d-1],parent);
      const roofMesh=parent.children.at(-2);roofMesh.userData={roof:true,closed:true,place:id};roofs.push(roofMesh);
      for(const side of [-1,1])box(m.stone,[x+side*(w/2+.1),y+h/2,z],[.8,h+1,d+1],parent);
      for(let xx=x-w/2+1;xx<x+w/2;xx+=2){
        box(m.oak,[xx,y+2.35,z-2],[1.3,4,.35],parent);
        for(let yy=.6;yy<4.3;yy+=.65){box(m.oakLight,[xx,y+yy,z-1.8],[1.3,.09,.75],parent);for(let i=0;i<6;i++)box(m.clothes[i%5],[xx-.5+i*.17,y+yy+.22,z-1.7],[.12,.35,.3],parent);}
      }
    }else roof(x,y+h,z,w+1.7,d+1.8,b.roof==='hip'?3:2.8,b.roof,parent,id);
    pick(id,[x,y+h/2+1,z],[w,h+3,d],parent);
    return parent;
  }
  // Continuous terrain with a separate tall rock hillside; never a photograph.
  const groundGeo=new T.PlaneGeometry(340,245,180,140);groundGeo.rotateX(-Math.PI/2);
  const groundColors=[],green=new T.Color('#596e39'),grey=new T.Color('#8a8b78');
  for(let i=0;i<groundGeo.attributes.position.count;i++){
    const p=groundGeo.attributes.position,x=p.getX(i)+25,z=p.getZ(i)+5;
    const y=terrainHeight(x,z);p.setXYZ(i,x,y,z);
    const exposed=x>42&&z<-33&&y>10?Math.max(0,Math.min(1,.45+Math.sin(x*.41+z*.23)*.4+Math.cos(z*.62)*.35)):0;
    groundColors.push(...green.clone().lerp(grey,exposed).toArray());
  }
  groundGeo.setAttribute('color',new T.Float32BufferAttribute(groundColors,3));groundGeo.computeVertexNormals();const ground=mesh(groundGeo,standard('#ffffff',{vertexColors:true,map:texture('grass')}),[0,0,0]);ground.name='Sculpted campus terraces and hillside';ground.castShadow=false;
  const lake=box(m.water,[-140,-2.6,-165],[560,.15,215]);lake.name='Lake';lake.castShadow=false;
  for(let i=0;i<95;i++){
    const x=-230+random()*420,z=-66-random()*160;
    box(m.waterLine,[x,-2.49,z],[2+random()*9,.012,.025]).castShadow=false;
  }
  for(let i=0;i<4;i++){
    const ridge=alpineRidge({width:1100,depth:125,height:85+i*30,seed:8+i*7});
    ridge.position.set(-70+i*40,-5,-350-i*55);ridge.name='Distant alpine ridgeline';root.add(ridge);
  }
  // A stone plinth and steps make the campus level changes readable.
  box(m.stone,[-22,3,0],[76,6,43]);box(m.grass,[-22,6.03,0],[75,.12,42]);
  for(const x of [16,44])box(m.stone,[x,3.5,-3],[.5,5,22]);
  box(m.stone,[30,3.5,-13.8],[28,5,.5]);box(m.floor,[30,1.1,-3],[28,.2,22]);
  const terrace=(x,z,w,d,y)=>{box(m.stone,[x,y-1.1,z],[w,2.2,d]);box(m.path,[x,y+.025,z],[w-.25,.15,d-.25]);rail([x-w/2,y+.12,z+d/2],[x+w/2,y+.12,z+d/2]);};
  terrace(-40,35,31,29,1.85);terrace(-6,52,33,30,.02);terrace(42,47,39,21,.02);
  function steps(a,b,width) {
    const count=Math.max(3,Math.ceil(Math.abs(b[1]-a[1])/.21)),dx=(b[0]-a[0])/count,dz=(b[2]-a[2])/count,dy=(b[1]-a[1])/count;
    for(let i=0;i<count;i++){
      const x=a[0]+dx*(i+.5),z=a[2]+dz*(i+.5),top=a[1]+dy*(i+.5),base=Math.min(top-.25,terrainHeight(x,z));
      const o=box(m.path,[x,(top+base)/2,z],[width,top-base,Math.hypot(dx,dz)+.04]);o.rotation.y=Math.atan2(dx,dz);
    }
    const len=Math.hypot(b[0]-a[0],b[2]-a[2]),nx=-(b[2]-a[2])/len,nz=(b[0]-a[0])/len;
    for(const s of [-1,1])rail([a[0]+s*nx*width/2,a[1],a[2]+s*nz*width/2],[b[0]+s*nx*width/2,b[1],b[2]+s*nz*width/2]);
  }
  steps([-26,6.1,18],[-26,2,26],4.2);steps([11,6.1,20],[15,0,33],5);
  steps([-21,2,38],[-21,0,45],3.5);steps([-6,0,67],[-6,-1.4,72],5);
  // Garden paths share the explicitly elevated walking graph used by selection.
  const drawn=new Set();for(const path of Object.values(referenceRoutes))for(let i=1;i<path.length;i++){
    const a=path[i-1],b=path[i],key=[a,b].sort().join('|');if(drawn.has(key))continue;drawn.add(key);
    strip(a,b,2.3);if(Math.abs(a[1]-b[1])>1)steps(a,b,2.8);
  }
  referenceBuildings.forEach(building);
  // Visible lower-ground games lounge is part of the technology building.
  const tech=objects['tech-lab'][0];
  box(m.glass,[30,3.4,9.14],[25,4.4,.1],tech);
  for(let x=18;x<=42;x+=2)box(m.oak,[x,3.4,9.22],[.15,4.5,.2],tech);
  for(let x=19;x<=40;x+=3)box(m.warm,[x,2.2,8.3],[1.5,.13,.8],tech);
  box(m.path,[30,6.08,10],[31,.2,3]);rail([14.5,6.2,11.5],[45.5,6.2,11.5]);
  roof(30,15,-5,18,13,1.7,'hip',tech,'tech-lab');
  // Tower: limestone square shaft, two clock faces, louvres and a hipped cap.
  const main=objects['main-building'][0],towerX=-28,towerZ=-3;
  box(m.stone,[towerX,17.1,towerZ],[5.2,22.2,5.2],main);
  for(const side of [-1,1]){box(m.pale,[towerX,27.4,towerZ+side*2.65],[5.6,.3,.3],main);window(towerX,17,towerZ+side*2.65,1,5.4,main);}
  box(m.darkWood,[towerX,27.8,towerZ],[5.25,.8,5.25],main);
  for(let i=-4;i<=4;i++)for(const side of [-1,1])box(m.oakLight,[towerX+i*.52,27.85,towerZ+side*2.65],[.14,.7,.12],main);
  roof(towerX,28.3,towerZ,6.7,6.7,1.65,'hip',main,'main-building');
  pick('main-building',[towerX,18,towerZ],[5.5,24,5.5],main);
  modelTowerMetadata();
  function modelTowerMetadata(){const v=pickVolumes.at(-1);v.name='Clock tower pick volume';v.userData.tower=true;}
  function clock(x,y,z,rotation) {
    const g=new T.Group();g.position.set(x,y,z);g.rotation.y=rotation;main.add(g);
    const disk=mesh(new T.CircleGeometry(1.17,48),m.white,[0,0,0],[1,1,1],g);disk.castShadow=false;
    for(let i=0;i<12;i++){const a=i*Math.PI/6;const o=box(m.trim,[Math.sin(a)*.95,Math.cos(a)*.95,.04],[.055,.16,.035],g);o.rotation.z=-a;}
    beam([0,0,.075],[-.38,.53,.075],.055,m.trim,g);beam([0,0,.09],[.7,.14,.09],.045,m.trim,g);
  }
  clock(towerX,25.4,towerZ+2.64,0);clock(towerX+2.64,25.4,towerZ,Math.PI/2);
  // Entrance porch, timber truss and fully closed gable.
  roof(-23,9.8,4.3,7.4,5.8,1.8,'gable-z',main,'main-building');
  for(const x of [-25.7,-20.3])box(m.oak,[x,7.9,6.5],[.26,3.8,.26],main);
  beam([-25.7,9.65,6.8],[-23,11.2,6.8],.18,m.oak,main);beam([-23,11.2,6.8],[-20.3,9.65,6.8],.18,m.oak,main);
  // Central paved circle, concentric curved benches and one mature deciduous tree.
  cylinder(m.path,[courtyard.x,6.08,courtyard.z],14,.16);
  cylinder(m.pale,[courtyard.x,6.2,courtyard.z],5.2,.3);
  cylinder(m.grass,[courtyard.x,6.4,courtyard.z],4.8,.2);
  const circularLine=(radius,material,y,start=0,length=Math.PI*2,width=.09)=>{
    const geometry=new T.TorusGeometry(radius,width,6,96,length),o=mesh(geometry,material,[courtyard.x,y,courtyard.z]);o.rotation.x=Math.PI/2;o.rotation.z=start;return o;
  };
  circularLine(13.5,m.pathEdge,6.19,0,Math.PI*2,.08);
  for(let k=0;k<4;k++){
    const start=k*Math.PI/2+.12;
    for(const radius of [5.45,5.65,5.85])circularLine(radius,m.oakLight,6.85,start,1.22,.085);
    circularLine(6.03,m.oak,7.4,start,1.22,.09);
    for(let j=0;j<4;j++){const a=start+j*.38,x=courtyard.x+Math.cos(a)*5.8,z=courtyard.z-Math.sin(a)*5.8;box(m.metal,[x,6.57,z],[.14,.8,.14]);}
  }
  function broadleaf(x,y,z,height=7,radius=3.5,parent=root) {
    const trunk=mesh(new T.CylinderGeometry(.22,.4,1,8),m.darkWood,[x,y+height*.35,z],[height/7,height*.7,height/7],parent);
    for(let k=0;k<7;k++){
      const a=k*2.3999,dx=Math.cos(a)*radius*.6,dz=Math.sin(a)*radius*.6;
      beam([x,y+height*.38,z],[x+dx,y+height*(.7+(k%2)*.1),z+dz],.18*height/8,m.darkWood,parent);
    }
    const count=height>11?185:32;
    for(let k=0;k<count;k++){
      const a=random()*Math.PI*2,r=Math.sqrt(random())*radius;
      const sx=.7+random()*.65;
      mesh(leafGeo,m.leaves[k%4],[x+Math.cos(a)*r,y+height*(.62+.24*Math.sqrt(1-r/radius))+random()*height*.12,z+Math.sin(a)*r],[radius*.2*sx,height*.085*sx,radius*.2*sx],parent);
    }
  }
  broadleaf(-6,6.5,8,14,7.8);
  pick('courtyard',[-6,7.4,8],[25,2.5,25]);
  // Two separate dining terraces with seating and cream umbrellas.
  function table(x,y,z,parent=root,umbrella=false) {
    cylinder(m.oakLight,[x,y+.84,z],.74,.12,parent);cylinder(m.metal,[x,y+.4,z],.065,.8,parent);
    for(let i=0;i<4;i++){const a=i*Math.PI/2,xx=x+Math.cos(a)*1.05,zz=z+Math.sin(a)*1.05;box(m.oak,[xx,y+.48,zz],[.46,.12,.46],parent);box(m.darkWood,[xx,y+.24,zz],[.07,.48,.07],parent);const back=box(m.oak,[xx+Math.cos(a)*.2,y+.75,zz+Math.sin(a)*.2],[.49,.6,.08],parent);back.rotation.y=Math.PI/2-a;}
    if(umbrella){cylinder(m.oak,[x,y+1.55,z],.055,3.1,parent);mesh(new T.ConeGeometry(1.55,.4,8,1,false),m.white,[x,y+3.12,z],[1,1,1],parent);}
  }
  for(const [cx,z,y] of [[-40,43,2],[-6,61,.05]])for(let i=-2;i<=2;i++){
    table(cx+i*4.8,y,z,root,i%2===0);if(i%2)table(cx+i*4.8,y,z-3.4);
  }
  // Workshop pergola: posts, beams, open slats and planted trellis.
  for(const z of [40,52])for(let x=41;x<=60;x+=4.75)box(m.oak,[x,1.8,z],[.22,3.6,.22]);
  for(const z of [40,52])box(m.oak,[50.5,3.55,z],[20,.27,.27]);
  for(let x=40.5;x<=60.5;x+=.9)box(m.oakLight,[x,3.78,46],[.16,.24,12.8]);
  for(let i=0;i<12;i++)mesh(leafGeo,m.leaves[i%4],[42+random()*17,3.95,40+random()*11],[1.2,.3,.7]);
  for(let x=43;x<=58;x+=5)table(x,.05,47);
  // Full pitch, touchlines, penalty boxes, centre circle, two goals and stand.
  const beforePitch=new Set(root.children);
  const {x:fx,z:fz,y:fy,w:fw,d:fd}=pitch;
  box(m.stone,[fx,fy-.6,fz],[fw+5,1.15,fd+5]);box(m.turf,[fx,fy,fz],[fw,.15,fd]);
  for(let i=0;i<10;i++)box(i%2?m.turf:m.turf2,[fx,fy+.09,fz-fd/2+(i+.5)*fd/10],[fw,.02,fd/10]);
  const line=(a,b,width=.13)=>strip([a[0],fy+.13,a[1]],[b[0],fy+.13,b[1]],width,root,m.white);
  const rect=(x,z,w,d)=>{line([x-w/2,z-d/2],[x+w/2,z-d/2]);line([x+w/2,z-d/2],[x+w/2,z+d/2]);line([x+w/2,z+d/2],[x-w/2,z+d/2]);line([x-w/2,z+d/2],[x-w/2,z-d/2]);};
  rect(fx,fz,fw-.8,fd-.8);line([fx-fw/2+.4,fz],[fx+fw/2-.4,fz]);
  const circle=mesh(new T.RingGeometry(6,6.13,64),m.white,[fx,fy+.14,fz]);circle.rotation.x=-Math.PI/2;circle.castShadow=false;
  for(const sign of [-1,1]){
    const z=fz+sign*(fd/2-.4);rect(fx,z-sign*6.5,22,13);rect(fx,z-sign*2.5,10,5);
    cylinder(m.white,[fx,fy+.15,z-sign*9],.16,.015);
    for(const dx of [-3.66,3.66])beam([fx+dx,fy,z],[fx+dx,fy+2.44,z],.1,m.white);
    beam([fx-3.66,fy+2.44,z],[fx+3.66,fy+2.44,z],.1,m.white);
    for(let k=0;k<=15;k++){const xx=fx-3.66+k*7.32/15;beam([xx,fy,z+sign*1.8],[xx,fy+2.44,z],.016,m.white);}
    for(let k=0;k<=6;k++)beam([fx-3.66,fy+k*.4,z+sign*(1.8-k*.3)],[fx+3.66,fy+k*.4,z+sign*(1.8-k*.3)],.016,m.white);
    for(const side of [-1,1]){beam([fx+side*(fw/2-.45),fy,z],[fx+side*(fw/2-.45),fy+1.4,z],.035,m.white);box(m.warm,[fx+side*(fw/2-.45)+.2,fy+1.2,z],[.4,.32,.02]);}
  }
  for(const side of [-1,1])rail([fx+side*(fw/2+1.2),fy-.1,fz-fd/2],[fx+side*(fw/2+1.2),fy-.1,fz+fd/2],root,.85);
  for(let row=0;row<5;row++){
    box(m.pale,[fx,2.4+row*.42,-24-row*.75],[37,.4,1]);
    box(m.oak,[fx,2.8+row*.42,-24-row*.75],[36,.12,.4]);
  }
  for(let xx=fx-18;xx<=fx+18;xx+=6)box(m.oak,[xx,5,-28],[.18,5,.18]);
  box(m.oak,[fx,7.4,-27],[38,.25,3.4]);
  pick('football-field',[fx,fy+.3,fz],[fw,1,fd]);
  const stadium=new T.Group();stadium.name='Complete rotated stadium';stadium.userData={place:'football-field',yaw:pitch.yaw};
  for(const child of [...root.children])if(!beforePitch.has(child)){child.position.x-=fx;child.position.z-=fz;stadium.add(child);}
  stadium.position.set(fx,0,fz);stadium.rotation.y=pitch.yaw;root.add(stadium);
  // Mountain library is cut into an actual rock shoulder, with exposed front.
  for(let i=0;i<160;i++){
    const x=44+random()*55,z=-58-random()*52;
    if(x>48&&x<84&&z>-73&&z<-58)continue;
    const y=Math.max(terrainHeight(x,z),z<-72&&x>47&&x<88?28.7:0);
    const s=1+random()*2.5;const rock=mesh(rockGeo,m.rock[i%3],[x,y-.3,z],[s*1.25,s*.65,s]);rock.rotation.set(random(),random()*3,random());
  }
  for(const [x,z,s] of [[45,-65,5],[87,-67,7],[54,-77,6],[63,-79,7],[76,-78,6],[84,-77,5]]){
    const y=terrainHeight(x,z);mesh(rockGeo,m.rock[0],[x,y-1,z],[s,s*.65,s*.8]);
  }
  box(m.stone,[66,23.4,-59.5],[37,1.5,4]);
  box(m.grass,[66,29.4,-74],[35,1,6]);
  for(let x=51;x<82;x+=3.7)mesh(leafGeo,m.leaves[Math.floor(x)%4],[x,29.7,-70],[1,.5,.8]);
  const covered=[[39,14,-45],[47,19,-51],[49,24,-58]];
  for(let i=1;i<covered.length;i++){
    const a=covered[i-1],b=covered[i],length=Math.hypot(b[0]-a[0],b[2]-a[2]);
    strip(a,b,3);strip([a[0],a[1]+3,a[2]],[b[0],b[1]+3,b[2]],3.7,root,m.roof);
    for(let j=0;j<=4;j++){const f=j/4,x=a[0]+(b[0]-a[0])*f,y=a[1]+(b[1]-a[1])*f,z=a[2]+(b[2]-a[2])*f;for(const s of [-1,1])box(m.oak,[x+s*1.2,y+1.5,z],[.14,3,.14]);}
  }
  strip([48,24.15,-58],[82,24.15,-59],3.3);rail([48,24.15,-56.5],[82,24.15,-57.5]);
  // Foreground ideas garden, planted beds, paths and a shaded working table.
  box(m.grass,[20,.08,66],[31,.15,20]);strip([4,.2,74],[35,.2,74],2.5);strip([20,.2,56],[20,.2,76],2);
  for(let x=8;x<35;x+=8){box(m.stone,[x,.3,62],[4,.6,3]);box(m.soil,[x,.63,62],[3.7,.07,2.7]);}
  pick('ideas-garden',[20,1.5,66],[30,3,20]);
  function shrub(x,y,z,s=1) {mesh(leafGeo,m.leaves[Math.floor(random()*4)],[x,y+.5*s,z],[s,.65*s,s*.75]);}
  for(let i=0;i<210;i++){
    const x=-58+random()*110,z=19+random()*56;
    const inTerrace=referenceBuildings.some(b=>Math.abs(x-b.x)<b.w/2+3&&Math.abs(z-b.z)<b.d/2+5);
    if(inTerrace||Math.abs(x-15)<3||Math.abs(x+21)<3||z>58&&x<9)continue;
    const y=terrainHeight(x,z);shrub(x,y,z,.5+random()*.8);
    if(i%4===0)mesh(leafGeo,m.flowers[i%3],[x,y+.65,z],[.3,.25,.3]);
  }
  for(let i=0;i<18;i++){
    const angle=i/18*Math.PI*2;shrub(-6+Math.cos(angle)*15.5,6.1,8+Math.sin(angle)*15.5,.7);
  }
  for(const [x,z,y,h] of [[-59,17,3,7],[-20,28,2,6],[11,29,1,6],[47,22,2,8],[47,-27,8,7],[-17,-11,6,7],[18,63,0,7],[28,69,0,6],[-54,38,2,5]])broadleaf(x,y,z,h,h*.38);
  // Repeated forest parts are instanced below, not thousands of draw calls.
  function pine(x,z,h) {
    const y=terrainHeight(x,z);
    cylinder(m.darkWood,[x,y+h*.44,z],h*.021,h*.88);
    const colour=m.pines[Math.abs(Math.floor(x+z))%4];
    for(let tier=0;tier<6;tier++){
      const f=tier/6,r=h*(.2-f*.15),yy=y+h*(.28+f*.65),o=mesh(coneGeo,colour,[x,yy,z],[r,h*.43,r]);o.rotation.y=random()*6;
    }
  }
  if(vegetation)for(let i=0;i<1900;i++){
    const x=-135+random()*290,z=-111+random()*220;
    if(x>-65&&x<100&&z>-29&&z<80)continue;
    if(x>35&&x<49&&z>-61&&z<-29)continue;
    if(x>48&&x<88&&z>-78&&z<-51)continue;
    if(x>47&&x<92&&z>-49&&z<-30)continue;
    if(z<-48&&x<32)continue;
    pine(x,z,5+random()*9);
  }
  // Human scale: 1.65–1.8 m, restrained colours, no oversized toy figures.
  function person(x,y,z,i) {
    const jacket=m.clothes[i%5];cylinder(jacket,[x,y+.97,z],.17,.62);
    mesh(leafGeo,m.skin,[x,y+1.49,z],[.14,.17,.14]);
    for(const s of [-1,1]){beam([x+s*.08,y+.65,z],[x+s*.1,y+.12,z+(s<0?.12:-.1)],.09,m.trim);beam([x+s*.19,y+1.18,z],[x+s*.22,y+.73,z+.04],.075,jacket);}
  }
  for(let i=0;i<48;i++){
    const routes=Object.values(referenceRoutes),p=routes[i%routes.length],k=Math.floor(random()*(p.length-1)),a=p[k],b=p[k+1],f=random();
    person(a[0]+(b[0]-a[0])*f+(random()-.5),a[1]+(b[1]-a[1])*f,a[2]+(b[2]-a[2])*f,i);
  }
  for(let i=0;i<10;i++)person(fx-15+random()*30,fy+.15,fz-24+random()*48,i);
  for(const [x,z,y] of [[-22,14,6],[13,15,6],[-23,32,2],[18,36,0],[48,-29,8],[45,25,2],[12,72,0]]){
    cylinder(m.metal,[x,y+1.8,z],.055,3.6);box(m.metal,[x,y+3.65,z],[.45,.08,.45]);box(m.warm,[x,y+3.45,z],[.23,.32,.23]);
  }
  if(seamPoints.length){const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(seamPoints,3));const o=new T.LineSegments(g,new T.LineBasicMaterial({color:'#879093',transparent:true,opacity:.45}));o.name='Standing roof seams';root.add(o);}
  root.updateMatrixWorld(true);
  const geometryBefore={meshes:0,triangles:0};root.traverse(o=>{if(o.isMesh&&o.visible){geometryBefore.meshes++;geometryBefore.triangles+=(o.geometry.index?.count||o.geometry.attributes.position.count)/3;}});
  // Keep named roof solids and hit volumes inspectable; batch repeated details.
  batchStaticMeshes(root,o=>o.userData.roof||!o.visible);
  root.updateMatrixWorld(true);
  root.userData={reference:'User supplied aerial image, October 2026',approximateHiddenSides:true,units:'metres',geometryBefore,canonicalPlaces:13,externalPlaces:11,closedRoofs:true};
  return {root,objects,roofs,pickVolumes,materials:m,textures,referencePlaces};
}
