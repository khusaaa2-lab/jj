import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { buildReferenceCampus } from './reference-model.js';
import { referencePlace, referencePlaces, referenceParents, referenceRoute } from './reference-layout.js';
import { t } from './i18n.js';

export function overviewCamera(aspect=16/9) {
  const target=new T.Vector3(11,12,4),scale=Math.max(1,1.5/aspect);
  return {position:target.clone().add(new T.Vector3(70,72,177).multiplyScalar(scale)),target};
}
export function focusCamera(id,aspect,direction) {
  const place=referencePlace(id),target=new T.Vector3(...place.focus);
  const distance=place.radius*2.05*Math.max(1,1/aspect);
  return {position:target.clone().add(direction.clone().normalize().multiplyScalar(distance)),target};
}

export function createCampus(host,{places,onSelect,onError=()=>{},home=false}) {
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mobile=matchMedia('(max-width: 900px)').matches;
  const renderer=new T.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance'});
  renderer.outputColorSpace=T.SRGBColorSpace;
  renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;
  renderer.setPixelRatio(Math.min(devicePixelRatio,mobile?1.25:1.65));
  renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;renderer.shadowMap.autoUpdate=false;
  const canvas=renderer.domElement;canvas.className='reference-viewport';canvas.tabIndex=0;
  canvas.setAttribute('role','group');
  canvas.setAttribute('aria-label',t('Пространственная модель кампуса. Перетаскивание — ракурс, правая кнопка — перемещение, колесо — масштаб. Стрелки меняют ракурс, Shift со стрелками перемещает, Home возвращает обзор.','Spatial campus model. Drag to orbit, right-drag to pan, wheel to zoom. Arrow keys orbit, Shift with arrows pans, Home restores the overview.'));
  host.querySelectorAll('canvas,.reference-labels,.reference-badge').forEach(el=>el.remove());
  host.classList.remove('video-campus');host.classList.add('reference-campus');
  host.dataset.engine='three-reference';host.dataset.webgl='webgl2';host.append(canvas);
  const scene=new T.Scene();scene.background=new T.Color('#c5ddeb');scene.fog=new T.Fog('#c5d9df',420,1150);
  const camera=new T.PerspectiveCamera(40,1,.5,1300);
  const controls=new OrbitControls(camera,canvas);
  controls.enableDamping=false;controls.enablePan=true;controls.screenSpacePanning=false;
  controls.minDistance=35;controls.maxDistance=390;controls.minPolarAngle=.48;controls.maxPolarAngle=1.28;
  controls.minAzimuthAngle=-.72;controls.maxAzimuthAngle=1.18;controls.rotateSpeed=.46;
  controls.zoomSpeed=.8;controls.panSpeed=.55;controls.touches.ONE=T.TOUCH.ROTATE;controls.touches.TWO=T.TOUCH.DOLLY_PAN;
  canvas.style.touchAction='none';
  scene.add(new T.HemisphereLight('#dbeaff','#6f7045',2.15));
  const sun=new T.DirectionalLight('#fff1d4',3.5);sun.position.set(-80,135,90);sun.target.position.set(12,0,-4);
  sun.castShadow=true;sun.shadow.mapSize.set(mobile?1024:2048,mobile?1024:2048);
  Object.assign(sun.shadow.camera,{left:-115,right:115,top:115,bottom:-115,near:5,far:330});
  sun.shadow.bias=-.00018;sun.shadow.normalBias=.1;sun.shadow.radius=3;scene.add(sun,sun.target);
  const environment=new RoomEnvironment(),pmrem=new T.PMREMGenerator(renderer),env=pmrem.fromScene(environment,.08);
  scene.environment=env.texture;scene.environmentIntensity=.24;environment.dispose();pmrem.dispose();
  const model=buildReferenceCampus();scene.add(model.root);
  for(const map of model.textures)map.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());
  const labels=document.createElement('div');labels.className='reference-labels';host.append(labels);
  const markers=Object.entries(referencePlaces).map(([id,place])=>{
    const button=document.createElement('button');button.className='reference-marker';button.dataset.campusPlace=id;
    const index=places.findIndex(p=>p.id===id),name=places[index]?.name||id;
    const number=document.createElement('span');number.className='reference-number';number.textContent=String(index+1).padStart(2,'0');
    const text=document.createElement('span');text.className='reference-name';text.textContent=name;
    button.append(number,text);button.setAttribute('aria-label',name);button.setAttribute('aria-pressed','false');
    button.onclick=()=>onSelect(id);labels.append(button);return {id,button,point:new T.Vector3(...place.point)};
  });
  const badge=document.createElement('div');badge.className='reference-badge';badge.textContent=t('3D · по архитектурному референсу','3D · reference-based architecture');host.append(badge);
  const raycaster=new T.Raycaster(),pointer=new T.Vector2();
  const routeMaterial=new T.MeshBasicMaterial({color:'#f5d28b',depthTest:true}),routeGroup=new T.Group();scene.add(routeGroup);
  const selection=new T.Box3Helper(new T.Box3(),0xc5a767);selection.visible=false;scene.add(selection);
  let width=1,height=1,frame=0,disposed=false,paused=false,visible=true,selected=null,flight=null,dragStart=null,hasInitialCamera=false;
  const abort=new AbortController(),signal=abort.signal;
  function snapshot(){return {engine:'reference-3d',position:camera.position.toArray(),target:controls.target.toArray()};}
  function updateLabels(){
    for(const marker of markers){
      const p=marker.point.clone().project(camera),x=(p.x*.5+.5)*width,y=(-p.y*.5+.5)*height;
      marker.button.hidden=p.z>1||p.z<0||x<14||x>width-14||y<14||y>height-14;
      marker.button.style.left=x+'px';marker.button.style.top=y+'px';
      marker.button.classList.toggle('label-left',x>width*.68);
      marker.button.classList.toggle('selected',marker.id===(referenceParents[selected]||selected));
      marker.button.setAttribute('aria-pressed',String(marker.id===(referenceParents[selected]||selected)));
    }
    host.dataset.camera=JSON.stringify(snapshot());
    host.dataset.zoom=String(overviewCamera(width/height).position.distanceTo(overviewCamera(width/height).target)/camera.position.distanceTo(controls.target));
  }
  function render(now=performance.now()) {
    frame=0;if(disposed||paused||!visible||document.hidden)return;
    if(flight){
      const f=Math.min(1,(now-flight.start)/820),ease=1-(1-f)**3;
      camera.position.lerpVectors(flight.fromPosition,flight.position,ease);controls.target.lerpVectors(flight.fromTarget,flight.target,ease);
      camera.lookAt(controls.target);if(f===1){flight=null;controls.update();}
    }
    renderer.render(scene,camera);updateLabels();host.dataset.drawCalls=String(renderer.info.render.calls);
    if(flight)invalidate();
  }
  function invalidate(){if(!frame&&!disposed&&!paused&&visible&&!document.hidden)frame=requestAnimationFrame(render);}
  function change(){
    controls.target.x=T.MathUtils.clamp(controls.target.x,-65,100);controls.target.y=T.MathUtils.clamp(controls.target.y,0,30);controls.target.z=T.MathUtils.clamp(controls.target.z,-80,78);
    invalidate();
  }
  controls.addEventListener('change',change);controls.addEventListener('start',()=>{flight=null;});
  function resize(){
    if(disposed)return;width=Math.max(1,host.clientWidth);height=Math.max(1,host.clientHeight-(mobile&&!home?54:0));
    renderer.setSize(width,height,false);canvas.style.height=height+'px';labels.style.height=height+'px';
    camera.aspect=width/height;camera.updateProjectionMatrix();
    controls.maxDistance=Math.max(390,overviewCamera(camera.aspect).position.distanceTo(overviewCamera(camera.aspect).target)*1.1);
    if(!hasInitialCamera){const o=overviewCamera(camera.aspect);camera.position.copy(o.position);controls.target.copy(o.target);controls.update();hasInitialCamera=true;}
    renderer.shadowMap.needsUpdate=true;invalidate();
  }
  function fly(position,target){
    if(reduced){camera.position.copy(position);controls.target.copy(target);controls.update();invalidate();return;}
    flight={fromPosition:camera.position.clone(),fromTarget:controls.target.clone(),position,target,start:performance.now()};invalidate();
  }
  function select(id,focus=true){
    selected=id;host.dataset.selected=id||'';
    const place=referencePlace(id);selection.visible=!!place;
    if(place){
      const volumes=model.pickVolumes.filter(v=>v.userData.place===(referenceParents[id]||id));
      const bounds=new T.Box3();for(const volume of volumes)bounds.union(new T.Box3().setFromObject(volume));
      selection.box.copy(bounds);selection.updateMatrixWorld(true);
      if(focus){const next=focusCamera(id,camera.aspect,camera.position.clone().sub(controls.target));fly(next.position,next.target);}
    }
    invalidate();
  }
  function clearRoute(){while(routeGroup.children.length){const child=routeGroup.children[0];child.geometry.dispose();routeGroup.remove(child);}}
  function route(ids){clearRoute();if(!ids.length)return;const points=referenceRoute(ids.at(-1));
    for(let i=1;i<points.length;i++){
      const a=new T.Vector3(...points[i-1]).add(new T.Vector3(0,.18,0)),b=new T.Vector3(...points[i]).add(new T.Vector3(0,.18,0));
      const mesh=new T.Mesh(new T.CylinderGeometry(.16,.16,a.distanceTo(b),8),routeMaterial);mesh.position.copy(a).add(b).multiplyScalar(.5);mesh.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),b.sub(a).normalize());routeGroup.add(mesh);
    }invalidate();
  }
  canvas.addEventListener('pointerdown',e=>{dragStart={x:e.clientX,y:e.clientY,button:e.button};},{signal});
  canvas.addEventListener('pointerup',e=>{
    if(!dragStart||dragStart.button!==0||Math.hypot(e.clientX-dragStart.x,e.clientY-dragStart.y)>6)return;
    const rect=canvas.getBoundingClientRect();pointer.set((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1);
    raycaster.setFromCamera(pointer,camera);const hit=raycaster.intersectObjects(model.pickVolumes,false)[0];if(hit)onSelect(hit.object.userData.place);
  },{signal});
  canvas.addEventListener('keydown',e=>{
    if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','+','=','-'].includes(e.key))return;
    e.preventDefault();flight=null;
    if(e.key==='Home'){api.reset();return;}if(['+','=','-'].includes(e.key)){api.zoom(e.key==='-'?-1:1);return;}
    const sign=['ArrowLeft','ArrowDown'].includes(e.key)?-1:1;
    if(e.shiftKey){const delta=new T.Vector3(['ArrowLeft','ArrowRight'].includes(e.key)?sign*3:0,0,['ArrowUp','ArrowDown'].includes(e.key)?-sign*3:0);camera.position.add(delta);controls.target.add(delta);}
    else {const offset=camera.position.clone().sub(controls.target),spherical=new T.Spherical().setFromVector3(offset);if(['ArrowLeft','ArrowRight'].includes(e.key))spherical.theta+=sign*.09;else spherical.phi-=sign*.065;spherical.theta=T.MathUtils.clamp(spherical.theta,controls.minAzimuthAngle,controls.maxAzimuthAngle);spherical.phi=T.MathUtils.clamp(spherical.phi,controls.minPolarAngle,controls.maxPolarAngle);camera.position.copy(controls.target).add(new T.Vector3().setFromSpherical(spherical));}
    controls.update();invalidate();
  },{signal});
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();onError(new Error('WebGL context lost'));},{signal});
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)invalidate();},{signal});
  const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(host);
  const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)invalidate();});observer.observe(host);
  const api={select,route,snapshot,
    project(point){const p=new T.Vector3(...point).project(camera);return {x:(p.x*.5+.5)*width,y:(-p.y*.5+.5)*height,depth:p.z};},
    reset(){const o=overviewCamera(width/height);fly(o.position,o.target);},
    zoom(direction){flight=null;const offset=camera.position.clone().sub(controls.target).multiplyScalar(direction>0?.84:1.19).clampLength(controls.minDistance,controls.maxDistance);camera.position.copy(controls.target).add(offset);controls.update();invalidate();},
    pause(value){paused=value;controls.enabled=!value;if(!value)invalidate();},
    restore(s){if(s?.engine!=='reference-3d'||s.position?.length!==3||s.target?.length!==3||![...s.position,...s.target].every(Number.isFinite))return;flight=null;camera.position.fromArray(s.position);controls.target.fromArray(s.target);controls.update();invalidate();},
    diagnostics(){const gl=renderer.getContext(),ext=gl.getExtension('WEBGL_debug_renderer_info');return {engine:'Three.js WebGL2',renderer:ext?gl.getParameter(ext.UNMASKED_RENDERER_WEBGL):gl.getParameter(gl.RENDERER),camera:snapshot(),roofs:model.roofs.map(r=>({place:r.userData.place,visible:r.visible,position:r.position.toArray()})),calls:renderer.info.render.calls,triangles:renderer.info.render.triangles,geometries:renderer.info.memory.geometries,places:Object.keys(referencePlaces),imagePlanes:0,videoPlanes:0};},
    dispose(){disposed=true;cancelAnimationFrame(frame);abort.abort();controls.dispose();resizeObserver.disconnect();observer.disconnect();clearRoute();const geometries=new Set(),materials=new Set(),textures=new Set();scene.traverse(o=>{if(o.geometry)geometries.add(o.geometry);for(const mat of Array.isArray(o.material)?o.material:o.material?[o.material]:[]){materials.add(mat);for(const v of Object.values(mat))if(v?.isTexture)textures.add(v);}});for(const g of geometries)g.dispose();for(const m of materials)m.dispose();for(const t of textures)t.dispose();env.dispose();renderer.dispose();canvas.remove();labels.remove();badge.remove();host.classList.remove('reference-campus','scene-ready');delete host.serenity;},
  };
  host.serenity=api;resize();renderer.shadowMap.needsUpdate=true;render();host.classList.add('scene-ready');return api;
}
