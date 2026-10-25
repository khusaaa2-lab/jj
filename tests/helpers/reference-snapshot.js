import {createHash} from 'node:crypto';
import * as T from 'three';
export const hash=value=>createHash('sha256').update(JSON.stringify(value)).digest('hex');
export function volumeHashes(model){
  model.root.updateMatrixWorld(true);const result={},geometryCache=new Map(),textureCache=new Map();
  for(const volumes of Object.values(model.objects))for(const group of volumes){
    const entries=[];group.traverse(o=>{if(!o.isMesh)return;const g=o.geometry,m=o.material;
      if(!geometryCache.has(g))geometryCache.set(g,hash({index:g.index?Array.from(g.index.array):null,attributes:Object.fromEntries(Object.entries(g.attributes).map(([key,a])=>[key,Array.from(a.array)]))}));
      if(m.map&&!textureCache.has(m.map))textureCache.set(m.map,hash(Array.from(m.map.image.data)));
      entries.push({matrix:o.matrixWorld.toArray(),visible:o.visible,geometry:geometryCache.get(g),material:{type:m.type,color:m.color.toArray(),roughness:m.roughness,metalness:m.metalness,opacity:m.opacity,map:m.map?textureCache.get(m.map):null}});
    });result[group.name]=hash(entries);
  }return result;
}
export function pineParts(model){
  const result=[],matrix=new T.Matrix4(),p=new T.Vector3();model.root.updateMatrixWorld(true);
  model.root.traverse(o=>{if(!o.isMesh||!model.materials.pines.includes(o.material))return;
    for(let i=0;i<(o.count||1);i++){
      if(o.isInstancedMesh){o.getMatrixAt(i,matrix);matrix.premultiply(o.matrixWorld);}else matrix.copy(o.matrixWorld);
      p.setFromMatrixPosition(matrix);result.push({material:model.materials.pines.indexOf(o.material),position:p.toArray()});
    }
  });return result.sort((a,b)=>a.position[0]-b.position[0]||a.position[2]-b.position[2]||a.position[1]-b.position[1]||a.material-b.material);
}
