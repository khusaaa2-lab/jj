import * as T from 'three';

// Static peripheral relief. No calls into the accepted campus/forest RNG.
// The inner boundary sits beyond the existing forest; the lake remains open.
export function buildPeripheralTerrain() {
  const root=new T.Group();root.name='Peripheral mountain terrain';
  root.userData={layer:'periphery',seed:251026,independent:true};
  const along=200,across=52,positions=[],colors=[],indices=[];
  const grass=new T.Color('#596e39'),rock=new T.Color('#778175'),dark=new T.Color('#4b6251'),snow=new T.Color('#cad1cc');
  const sample=(a,d)=>{
    const c=Math.cos(a),s=Math.sin(a),inner=Math.min(180/Math.max(.0001,Math.abs(c)),150/Math.max(.0001,Math.abs(s)));
    const x=15+c*(inner+d),z=Math.max(x<35?-44:-1000,20+s*(inner+d));
    const transition=T.MathUtils.smoothstep(d,0,65),ridge=.55+.22*Math.sin(a*8+1.9)+.16*Math.sin(a*17-2.2);
    const peak=Math.max(0,1-Math.abs(d-185-30*Math.sin(a*7))/145);
    const outer=Math.max(0,1-Math.abs(d-365-40*Math.sin(a*11))/140)*.68;
    const spurs=Math.abs(Math.sin(a*33+d*.018))*Math.sin(Math.PI*Math.min(1,d/110))*.1;
    const foothills=T.MathUtils.smoothstep(d,0,20)*Math.max(0,1-d/140)*(3+9*Math.abs(Math.sin(a*29+d*.045)));
    return {x,z,height:transition*(155*ridge*Math.max(peak,outer)+16*spurs)+foothills};
  };
  for(let i=0;i<=along;i++){
    const a=-1.12+(Math.PI+.35+1.12)*i/along;
    for(let j=0;j<=across;j++){
      const d=j/across*480,{x,z,height}=sample(a,d);
      const y=-.63+height;
      positions.push(x,y,z);
      const colour=grass.clone().lerp(dark,T.MathUtils.smoothstep(d,0,45)*.6).lerp(rock,T.MathUtils.smoothstep(height,4,28));
      colour.lerp(snow,T.MathUtils.smoothstep(height+Math.sin(a*45)*7,85,120)*.65);colors.push(...colour.toArray());
      if(i<along&&j<across){const k=i*(across+1)+j;indices.push(k,k+across+1,k+1,k+1,k+across+1,k+across+2);}
    }
  }
  const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(positions,3));geo.setAttribute('color',new T.Float32BufferAttribute(colors,3));geo.setIndex(indices);geo.computeVertexNormals();
  const terrain=new T.Mesh(geo,new T.MeshStandardMaterial({vertexColors:true,roughness:1,side:T.DoubleSide}));
  terrain.name='Forest-to-rock peripheral slopes';terrain.receiveShadow=true;terrain.castShadow=false;root.add(terrain);
  // Instanced outcrops break up the near slopes; independent deterministic samples.
  const rockGeo=new T.IcosahedronGeometry(1,1),matrix=new T.Matrix4(),q=new T.Quaternion(),e=new T.Euler();
  const fraction=n=>{const v=Math.sin(n*127.1+251026)*43758.5453;return v-Math.floor(v);};
  for(let shade=0;shade<3;shade++){
    const rocks=new T.InstancedMesh(rockGeo,new T.MeshStandardMaterial({color:['#737b6c','#939584','#a4a491'][shade],roughness:1}),95);
    rocks.name='Peripheral rock outcrops';rocks.castShadow=false;rocks.receiveShadow=true;
    for(let i=0;i<95;i++){
      const n=i*3+shade,a=-1.1+(Math.PI+.32+1.1)*fraction(n+1),d=12+fraction(n+401)*115,{x,z,height}=sample(a,d);
      const size=2+fraction(n+803)*5;e.set(fraction(n+5),fraction(n+97)*6,fraction(n+12));q.setFromEuler(e);
      matrix.compose(new T.Vector3(x,height-.5,z),q,new T.Vector3(size*1.4,size*.6,size));rocks.setMatrixAt(i,matrix);
    }
    rocks.computeBoundingSphere();root.add(rocks);
  }
  return root;
}
