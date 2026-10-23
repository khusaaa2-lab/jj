import { t } from './i18n.js';
import { esc } from './ui.js';
import { campusMedia, campusAnchors, internalPlaces, anchorFor, pathFor, campusLayout } from './campus-media.js';

/** One source plane owns media, hit polygons, routes and anchors. No WebGL. */
export function createCampus(host, { places, onSelect, home = false }) {
  const name = id => places.find(p => p.id === id)?.name || id;
  const number = id => String(places.findIndex(p => p.id === id) + 1).padStart(2,'0');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const abort = new AbortController(), {signal} = abort;
  let disposed = false, selected = null, held = false, visible = false;
  let userPlaying = !reduced.matches, failed = false, frame = 0, tween = 0;
  let state = {zoom:1,x:.5,y:.5}, layout;
  let previousWidth = 0, previousHeight = 0, pointerStart, moved = false, pinch;
  const pointers = new Map();
  host.classList.add('video-campus');
  host.dataset.engine = 'supplied-video';
  host.innerHTML = `<div class="campus-viewport" tabindex="0" role="group" aria-label="${t('Видеокарта кампуса: перетаскивание, масштаб кнопками или колесом. Стрелки — перемещение, Home — весь кампус.','Campus video map: drag to pan, wheel or buttons to zoom. Arrow keys move, Home shows the whole campus.')}">
    <div class="campus-plane"><img class="campus-poster" src="${campusMedia.poster}" width="1280" height="720" alt="${t('Кампус у озера. Библиотека встроена в гору справа сверху.','Lakeside campus. The library is built into the mountain at upper right.')}" draggable="false">
    <video class="campus-video" src="${campusMedia.video}" poster="${campusMedia.poster}" width="1280" height="720" muted playsinline loop preload="${reduced.matches ? 'none' : 'metadata'}" ${userPlaying ? 'autoplay' : ''} aria-hidden="true" tabindex="-1"></video>
    <img class="campus-seam" src="${campusMedia.poster}" width="1280" height="720" alt="" aria-hidden="true" draggable="false">
    <svg class="campus-hitareas" viewBox="0 0 1280 720" aria-hidden="true">${Object.entries(campusAnchors).map(([id,a])=>`<polygon data-hit="${id}" points="${a.polygon.map(([x,y])=>`${x*1280},${y*720}`).join(' ')}"/>`).join('')}<polyline class="campus-walk" points=""/></svg>
    ${Object.entries(campusAnchors).map(([id,a])=>`<div class="campus-anchor" style="left:${a.point[0]*100}%;top:${a.point[1]*100}%" data-anchor="${id}"><button class="campus-pin" data-campus-place="${id}" aria-label="${esc(name(id))}" aria-pressed="false"><span class="pin-number">${number(id)}</span><span class="pin-name">${esc(name(id))}${id === 'tech-lab' || id === 'learning-wing' ? '<small>+ 1</small>' : ''}</span></button></div>`).join('')}</div></div>
    <div class="campus-playback"><button data-video-play aria-pressed="false"></button><span class="video-status" role="status"></span></div>`;
  const viewport = host.querySelector('.campus-viewport'), plane = host.querySelector('.campus-plane');
  const fit = Math.min(viewport.clientWidth/1280, viewport.clientHeight/720);
  const cover = Math.max(viewport.clientWidth/1280, viewport.clientHeight/720);
  state.zoom = Math.min(1.4, Math.max(1.06, cover/fit));
  const video = host.querySelector('video'), play = host.querySelector('[data-video-play]'), status = host.querySelector('.video-status');
  const anchors = [...host.querySelectorAll('.campus-anchor')];
  const seam = host.querySelector('.campus-seam');
  // A 0.35 s dissolve back to the matching first frame softens water/light reset.
  // Architecture has no measurable translation; no invented environmental motion.
  let videoFrame = 0;
  const seamFrame = () => {
    if (disposed) return;
    const end = Number.isFinite(video.duration) ? video.duration : 8;
    seam.style.opacity = failed ? '0' : String(Math.max(0, Math.min(1,(video.currentTime-(end-.35))/.35)));
    if (!video.paused) {
      if (video.requestVideoFrameCallback) videoFrame=video.requestVideoFrameCallback(seamFrame);
      else frame=requestAnimationFrame(seamFrame);
    }
  };
  video.muted = true; video.defaultMuted = true;
  function render() {
    if (disposed) return;
    const width = viewport.clientWidth, height = viewport.clientHeight;
    if (!width || !height) return;
    previousWidth = width; previousHeight = height;
    layout = campusLayout(width,height,state.zoom,state.x,state.y);
    state.x = layout.x; state.y = layout.y;
    plane.style.transform = `translate(${layout.left}px,${layout.top}px) scale(${layout.scale})`;
    plane.style.setProperty('--pin-scale',String(1/layout.scale));
    host.dataset.camera = JSON.stringify(state);
    host.dataset.zoom = String(state.zoom);
    host.dataset.selected = selected || '';
    // Keep labels readable without expanding their hit point or shifting anchors.
    const occupied = [];
    const ranked = [...anchors].sort((a,b) => (b.dataset.anchor === (internalPlaces[selected] || selected)) - (a.dataset.anchor === (internalPlaces[selected] || selected)) || (b.dataset.anchor === 'library') - (a.dataset.anchor === 'library'));
    for (const el of ranked) {
      const id = el.dataset.anchor, a = campusAnchors[id].point, pin = el.firstElementChild;
      const x = layout.left+a[0]*layout.width, y = layout.top+a[1]*layout.height;
      const off = x<8 || x>width-8 || y<8 || y>height-8;
      pin.tabIndex = off ? -1 : 0;
      el.classList.toggle('offscreen',off);
      el.classList.remove('compact','label-left');
      const labelWidth = pin.offsetWidth;
      const flip = x+labelWidth>width-12;
      el.classList.toggle('label-left',flip);
      const box={l:flip?x-labelWidth+16:x-16,r:flip?x+16:x+labelWidth-16,t:y-38,b:y+7};
      const isSelected = id === (internalPlaces[selected] || selected);
      if (!isSelected && (width<600 && id!=='library' || occupied.some(b=>box.l<b.r+7 && box.r>b.l-7 && box.t<b.b+5 && box.b>b.t-5))) el.classList.add('compact');
      else if (!off) occupied.push(box);
    }
  }
  function cancelTween() { cancelAnimationFrame(tween); tween=0; }
  function move(next, animate=false) {
    cancelTween();
    if (!animate || reduced.matches) { state={...state,...next};render();return; }
    const from={...state}, to={...state,...next}, start=performance.now();
    const step=now=>{
      const p=Math.min(1,(now-start)/650), eased=1-Math.pow(1-p,3);
      for(const k of ['x','y','zoom']) state[k]=from[k]+(to[k]-from[k])*eased;
      render();if(p<1 && !disposed)tween=requestAnimationFrame(step);
    };tween=requestAnimationFrame(step);
  }
  function zoomAt(delta, px=viewport.clientWidth/2, py=viewport.clientHeight/2) {
    if (!layout) return;
    const zx=(px-layout.left)/layout.width, zy=(py-layout.top)/layout.height;
    const zoom=Math.min(2,Math.max(1,state.zoom*delta)), ratio=zoom/state.zoom;
    const w=layout.width*ratio,h=layout.height*ratio;
    move({zoom,x:zx+(viewport.clientWidth/2-px)/w,y:zy+(viewport.clientHeight/2-py)/h});
  }
  function playbackUI() {
    play.textContent = failed ? t('Повторить видео','Retry video') : userPlaying ? t('Ⅱ Пауза','Ⅱ Pause') : t('▶ Включить видео','▶ Play video');
    play.setAttribute('aria-pressed',String(userPlaying && !failed));
    status.textContent = failed ? t('Статичный вид · все места доступны','Still view · all places available') : !userPlaying ? t('Статичный вид','Still view') : t('Видеокампус','Video campus');
    host.dataset.playback = failed ? 'fallback' : video.paused ? 'paused' : 'playing';
  }
  async function syncPlayback() {
    if (disposed) return;
    if (!userPlaying || held || !visible || document.hidden || failed) video.pause();
    else {
      try { await video.play(); }
      catch(error) { if (!disposed && error.name !== 'AbortError') {userPlaying=false; playbackUI();} }
    }
    playbackUI();
  }
  function failure() { failed=true;video.pause();video.classList.remove('video-ready');playbackUI(); }
  video.addEventListener('error',failure,{signal});
  video.addEventListener('loadeddata',()=>{video.classList.add('video-ready');syncPlayback();},{signal});
  video.addEventListener('playing',()=>{playbackUI();if(video.cancelVideoFrameCallback)video.cancelVideoFrameCallback(videoFrame);cancelAnimationFrame(frame);seamFrame();},{signal});
  video.addEventListener('pause',playbackUI,{signal});
  play.addEventListener('click',()=>{if(failed){failed=false;video.load();userPlaying=true;}else userPlaying=!userPlaying;syncPlayback();},{signal});
  document.addEventListener('visibilitychange',syncPlayback,{signal});
  reduced.addEventListener('change',()=>{userPlaying=!reduced.matches;cancelTween();syncPlayback();},{signal});
  const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;syncPlayback();},{threshold:.02});observer.observe(host);
  const resize=new ResizeObserver(()=>{
    if(viewport.clientWidth!==previousWidth || viewport.clientHeight!==previousHeight){cancelTween();render();}
  });resize.observe(viewport);
  viewport.addEventListener('pointerdown',e=>{
    if(e.button!==0) return;
    cancelTween();viewport.setPointerCapture(e.pointerId);
    pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
    if(pointers.size===1){pointerStart={x:e.clientX,y:e.clientY,target:e.target.closest('[data-campus-place],[data-hit]')};moved=false;}
    if(pointers.size===2){moved=true;pinch=[...pointers.values()];}
  },{signal});
  viewport.addEventListener('pointermove',e=>{
    const old=pointers.get(e.pointerId);if(!old || !layout)return;
    pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
    if(pointers.size===2){
      const pair=[...pointers.values()], dist=p=>Math.hypot(p[1].x-p[0].x,p[1].y-p[0].y);
      const mid=p=>({x:(p[0].x+p[1].x)/2,y:(p[0].y+p[1].y)/2}),a=mid(pinch),b=mid(pair),r=viewport.getBoundingClientRect();
      zoomAt(dist(pair)/Math.max(1,dist(pinch)),a.x-r.left,a.y-r.top);
      move({x:state.x-(b.x-a.x)/layout.width,y:state.y-(b.y-a.y)/layout.height});pinch=pair;
    }else{
      if(Math.hypot(e.clientX-pointerStart.x,e.clientY-pointerStart.y)>6)moved=true;
      if(moved)move({x:state.x-(e.clientX-old.x)/layout.width,y:state.y-(e.clientY-old.y)/layout.height});
    }
    viewport.classList.toggle('dragging',moved);
  },{signal});
  const up=e=>{
    if(!pointers.has(e.pointerId))return;
    const target=pointerStart?.target;
    pointers.delete(e.pointerId);
    if(!pointers.size){viewport.classList.remove('dragging');if(!moved && e.type==='pointerup' && target)onSelect(target.dataset.campusPlace||target.dataset.hit);pointerStart=null;}
    else moved=true;
  };
  viewport.addEventListener('pointerup',up,{signal});viewport.addEventListener('pointercancel',up,{signal});
  viewport.addEventListener('click',e=>{const b=e.target.closest('[data-campus-place]');if(e.detail===0 && b)onSelect(b.dataset.campusPlace);},{signal});
  viewport.addEventListener('wheel',e=>{e.preventDefault();const r=viewport.getBoundingClientRect();zoomAt(Math.exp(-e.deltaY*.0015),e.clientX-r.left,e.clientY-r.top);},{passive:false,signal});
  viewport.addEventListener('keydown',e=>{
    if(e.target!==viewport)return;
    if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','+','=','-','Home'].includes(e.key))e.preventDefault();
    if(e.key==='Home')api.reset();
    if(e.key==='+'||e.key==='=')api.zoom(1);if(e.key==='-')api.zoom(-1);
    if(e.key==='ArrowLeft')move({x:state.x-.06});if(e.key==='ArrowRight')move({x:state.x+.06});
    if(e.key==='ArrowUp')move({y:state.y-.06});if(e.key==='ArrowDown')move({y:state.y+.06});
  },{signal});
  const api={
    select(id,focus=true){selected=id;const parent=internalPlaces[id]||id;
      for(const el of anchors){const active=el.dataset.anchor===parent;el.classList.toggle('selected',active);el.firstElementChild.setAttribute('aria-pressed',String(active));}
      for(const p of host.querySelectorAll('[data-hit]'))p.classList.toggle('active',p.dataset.hit===parent);
      if(focus && anchorFor(id)){const [x,y]=anchorFor(id).point;move({x,y,zoom:1.6},true);}else render();
    },
    route(ids){const points=ids.length?pathFor(selected):[];host.querySelector('.campus-walk').setAttribute('points',points.map(([x,y])=>`${x*1280},${y*720}`).join(' '));},
    reset(){move({zoom:1,x:.5,y:.5},true);},
    zoom(direction){zoomAt(direction>0?1.18:1/1.18);},
    pause(value){held=value;syncPlayback();},
    snapshot(){return {...state,playing:userPlaying,time:video.currentTime};},
    restore(s){if(!s || !Number.isFinite(s.zoom))return;move({zoom:s.zoom,x:s.x,y:s.y});if(typeof s.playing==='boolean')userPlaying=s.playing;if(Number.isFinite(s.time)){try{video.currentTime=s.time;}catch{}}syncPlayback();},
    dispose(){disposed=true;cancelTween();cancelAnimationFrame(frame);if(video.cancelVideoFrameCallback)video.cancelVideoFrameCallback(videoFrame);abort.abort();observer.disconnect();resize.disconnect();video.pause();video.removeAttribute('src');video.load();host.innerHTML='';host.classList.remove('video-campus','scene-ready');},
  };
  host.classList.add('scene-ready');render();playbackUI();
  document.fonts.ready.then(()=>{if(!disposed)render();});
  return api;
}
