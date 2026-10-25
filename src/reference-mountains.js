import * as T from 'three';

// Unequal sharp ridges and branching rock spurs, reconstructed as geometry.
// Separate from the historical scene/room backdrop so those assets stay intact.
export function referenceRidge({width,depth,height,seed}) {
  const geo=new T.PlaneGeometry(width,depth,260,38);geo.rotateX(-Math.PI/2);
  const p=geo.attributes.position,colours=[],rock=new T.Color('#667f8b'),forest=new T.Color('#38574f'),snow=new T.Color('#e6edf0');
  const peaks=Array.from({length:19},(_,i)=>({x:-width/2+i*width/18,w:38+22*(1+Math.sin(i*3.7+seed)),h:.48+.5*(.5+.5*Math.sin(i*2.31+seed))}));
  for(let i=0;i<p.count;i++){
    const x=p.getX(i),z=p.getZ(i),ridgeZ=Math.sin(x*.018+seed)*13;
    const along=Math.max(...peaks.map(k=>Math.max(0,1-Math.abs(x-k.x)/k.w)*k.h));
    const profile=Math.max(0,1-Math.abs((z-ridgeZ)/(depth*.6)));
    const spur=(Math.abs(Math.sin(x*.087+z*.065+seed))-.5)*.12*profile;
    const level=Math.max(0,along*profile+spur),y=level*height-3;
    p.setY(i,y);
    const c=forest.clone().lerp(rock,T.MathUtils.smoothstep(level,.14,.48));
    const snowLine=.57+Math.sin(x*.12+z*.08)*.07;
    c.lerp(snow,T.MathUtils.smoothstep(level,snowLine,snowLine+.09));colours.push(...c.toArray());
  }
  geo.setAttribute('color',new T.Float32BufferAttribute(colours,3));geo.computeVertexNormals();
  return new T.Mesh(geo,new T.MeshStandardMaterial({vertexColors:true,roughness:1}));
}
