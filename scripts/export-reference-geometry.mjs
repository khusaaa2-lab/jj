// Inspect/export the exact geometry builder without requiring a browser or WebGL.
// The GLB is a review artifact, not a replacement renderer or a flat image model.
import * as T from 'three';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { deflateSync } from 'node:zlib';
import { createHash } from 'node:crypto';
import { buildReferenceCampus } from '../src/reference-model.js';
import { overviewCamera } from '../src/reference-campus.js';
import { referenceBuildings, referencePlaces, referencePlace } from '../src/reference-layout.js';

const output=resolve(process.env.SERENITY_3D_OUTPUT||'/workspace/outputs/serenity-reference-3d/geometry');
await mkdir(output,{recursive:true});
const model=buildReferenceCampus();model.root.updateMatrixWorld(true);
const gltf={asset:{version:'2.0',generator:'Serenity exact geometry review exporter'},scene:0,scenes:[{nodes:[]}],nodes:[],meshes:[],materials:[],accessors:[],bufferViews:[],buffers:[{byteLength:0}],images:[],textures:[],samplers:[{magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497}],extensionsUsed:['KHR_texture_transform']};
const chunks=[],materialMap=new Map(),meshMap=new Map(),textureMap=new Map();let byteLength=0;
function view(bytes,target){const b=Buffer.from(bytes.buffer||bytes,bytes.byteOffset||0,bytes.byteLength||bytes.length),pad=(4-b.length%4)%4,index=gltf.bufferViews.length;gltf.bufferViews.push({buffer:0,byteOffset:byteLength,byteLength:b.length,...(target?{target}:{})});chunks.push(b,Buffer.alloc(pad));byteLength+=b.length+pad;return index;}
function accessor(attribute,type,target){const a=attribute.array,componentType=a instanceof Float32Array?5126:a instanceof Uint16Array?5123:5125;const item={bufferView:view(a,target),componentType,count:attribute.count,type};if(type==='VEC3'&&attribute===attribute.geometryPosition){item.min=[0,0,0];}gltf.accessors.push(item);return gltf.accessors.length-1;}
function crc32(b){let c=0xffffffff;for(const v of b){c^=v;for(let i=0;i<8;i++)c=(c>>>1)^((c&1)?0xedb88320:0);}return (c^0xffffffff)>>>0;}
function png(map){const {width,height,data}=map.image,rows=Buffer.alloc(height*(width*4+1));for(let y=0;y<height;y++)Buffer.from(data.buffer,data.byteOffset+y*width*4,width*4).copy(rows,y*(width*4+1)+1);const header=Buffer.alloc(13);header.writeUInt32BE(width,0);header.writeUInt32BE(height,4);header[8]=8;header[9]=6;const parts=[Buffer.from([137,80,78,71,13,10,26,10])];for(const [name,data]of [['IHDR',header],['IDAT',deflateSync(rows)],['IEND',Buffer.alloc(0)]]){const type=Buffer.from(name),len=Buffer.alloc(4),crc=Buffer.alloc(4);len.writeUInt32BE(data.length);crc.writeUInt32BE(crc32(Buffer.concat([type,data])));parts.push(len,type,data,crc);}return Buffer.concat(parts);}
function material(mat){if(materialMap.has(mat.uuid))return materialMap.get(mat.uuid);
  const pbr={baseColorFactor:[...mat.color.toArray(),mat.opacity],metallicFactor:mat.metalness||0,roughnessFactor:mat.roughness??1};
  if(mat.map?.isDataTexture){let index=textureMap.get(mat.map.uuid);if(index===undefined){const image=gltf.images.length;gltf.images.push({bufferView:view(png(mat.map)),mimeType:'image/png'});index=gltf.textures.length;gltf.textures.push({source:image,sampler:0});textureMap.set(mat.map.uuid,index);}pbr.baseColorTexture={index,extensions:{KHR_texture_transform:{scale:mat.map.repeat.toArray()}}};}
  const index=gltf.materials.length;gltf.materials.push({name:mat.name||mat.type,pbrMetallicRoughness:pbr,doubleSided:mat.side===T.DoubleSide,...(mat.transparent?{alphaMode:'BLEND'}:{}),...(mat.emissive?{emissiveFactor:mat.emissive.clone().multiplyScalar(mat.emissiveIntensity).toArray()}:{})});materialMap.set(mat.uuid,index);return index;
}
let triangleCount=0,meshCount=0,instanceCount=0,opaqueCount=0,transparentCount=0,lineCount=0;
model.root.traverse(o=>{if(!o.visible)return;if(o.isMesh){const n=(o.geometry.index?.count||o.geometry.attributes.position.count)*(o.count||1);triangleCount+=n/3;meshCount++;instanceCount+=o.count||1;if(o.material.transparent)transparentCount+=n;else opaqueCount+=n;}else if(o.isLineSegments)lineCount+=o.geometry.attributes.position.count;});
const opaque=new Float32Array(opaqueCount*12),transparent=new Float32Array(transparentCount*12),lines=new Float32Array(lineCount*12);let oi=0,ti=0,li=0;
const point=new T.Vector3(),normal=new T.Vector3(),mat4=new T.Matrix4(),normalMatrix=new T.Matrix3(),colour=new T.Color();
model.root.traverse(o=>{
 if(!o.visible||(!o.isMesh&&!o.isLineSegments))return;
 const geo=o.geometry,mat=o.material,key=geo.uuid+mat.uuid,isLine=!!o.isLineSegments;
 if(!meshMap.has(key)){
   const attributes={POSITION:accessor(geo.attributes.position,'VEC3',34962)};
   geo.computeBoundingBox();Object.assign(gltf.accessors[attributes.POSITION],{min:geo.boundingBox.min.toArray(),max:geo.boundingBox.max.toArray()});
   for(const [name,k,type]of [['normal','NORMAL','VEC3'],['uv','TEXCOORD_0','VEC2'],['color','COLOR_0','VEC3']])if(geo.attributes[name])attributes[k]=accessor(geo.attributes[name],type,34962);
   const primitive={attributes,material:material(mat),mode:isLine?1:4};if(geo.index)primitive.indices=accessor(geo.index,'SCALAR',34963);
   meshMap.set(key,gltf.meshes.length);gltf.meshes.push({name:o.name||'Architectural detail',primitives:[primitive]});
 }
 for(let instance=0;instance<(o.count||1);instance++){
   if(o.isInstancedMesh){o.getMatrixAt(instance,mat4);mat4.premultiply(o.matrixWorld);}else mat4.copy(o.matrixWorld);
   const id=gltf.nodes.length;gltf.scenes[0].nodes.push(id);gltf.nodes.push({name:o.name||'Instanced architectural detail',mesh:meshMap.get(key),matrix:mat4.toArray(),...(o.userData.roof?{extras:o.userData}:{})});
   normalMatrix.getNormalMatrix(mat4);
   const data=isLine?lines:mat.transparent?transparent:opaque;
   for(let i=0;i<(geo.index?.count||geo.attributes.position.count);i++){
     const k=geo.index?geo.index.getX(i):i;
     point.fromBufferAttribute(geo.attributes.position,k).applyMatrix4(mat4);
     if(geo.attributes.normal)normal.fromBufferAttribute(geo.attributes.normal,k).applyMatrix3(normalMatrix).normalize();else normal.set(0,1,0);
     colour.copy(mat.color);if(mat.vertexColors&&geo.attributes.color)colour.multiply(new T.Color().fromBufferAttribute(geo.attributes.color,k));
     const at=isLine?li:mat.transparent?ti:oi;
     data.set([...point.toArray(),...normal.toArray(),...colour.toArray(),mat.roughness??1,mat.metalness||0,mat.opacity],at);
     if(isLine)li+=12;else if(mat.transparent)ti+=12;else oi+=12;
   }
 }
});
gltf.buffers[0].byteLength=byteLength;
const json=Buffer.from(JSON.stringify(gltf)),jsonPad=Buffer.alloc((4-json.length%4)%4,32),jsonChunk=Buffer.concat([json,jsonPad]),binary=Buffer.concat(chunks),header=Buffer.alloc(12),jh=Buffer.alloc(8),bh=Buffer.alloc(8);
header.writeUInt32LE(0x46546c67);header.writeUInt32LE(2,4);header.writeUInt32LE(12+8+jsonChunk.length+8+binary.length,8);jh.writeUInt32LE(jsonChunk.length);jh.writeUInt32LE(0x4e4f534a,4);bh.writeUInt32LE(binary.length);bh.writeUInt32LE(0x004e4942,4);
const glb=Buffer.concat([header,jh,jsonChunk,bh,binary]);await writeFile(output+'/Serenity-reference-model.glb',glb);
for(const [name,data]of Object.entries({opaque,transparent,lines}))await writeFile(output+'/'+name+'.bin',Buffer.from(data.buffer));
function camera(name,position,target,width=1672,height=941){const camera=new T.PerspectiveCamera(36,width/height,.5,1100);camera.position.copy(position);camera.lookAt(target);camera.updateMatrixWorld(true);return {name,width,height,position:position.toArray(),target:target.toArray(),view:camera.matrixWorldInverse.toArray(),projection:camera.projectionMatrix.toArray()};}
const front=overviewCamera(1672/941),library=referencePlace('library');
const cameras=[camera('01-reference-angle',front.position,front.target),camera('02-second-angle',new T.Vector3(-115,106,176),front.target),camera('03-mountain-library',new T.Vector3(99,53,-18),new T.Vector3(...library.focus)),camera('04-technology-and-courtyard',new T.Vector3(69,51,81),new T.Vector3(12,9,5))];
const light=new T.OrthographicCamera(-115,115,115,-115,5,330);light.position.set(-80,135,90);light.lookAt(12,0,-4);light.updateMatrixWorld(true);
const report={method:'Exact Three.js mesh export; offline EGL geometry views are not browser/WebGL screenshots',source:'src/reference-model.js',meshes:meshCount,instances:instanceCount,triangles:triangleCount,closedRoofSolids:model.roofs.length,hitVolumes:model.pickVolumes.length,canonicalPlaces:13,panoramas:10,imagePlanes:0,videoPlanes:0,glb:{bytes:glb.length,sha256:createHash('sha256').update(glb).digest('hex')},vertices:{opaque:opaqueCount,transparent:transparentCount,lines:lineCount},buildings:referenceBuildings,placeAnchors:referencePlaces,cameras,light:{view:light.matrixWorldInverse.toArray(),projection:light.projectionMatrix.toArray()}};
await writeFile(output+'/geometry-manifest.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({output,meshes:meshCount,instances:instanceCount,triangles:triangleCount,glb:report.glb},null,2));
