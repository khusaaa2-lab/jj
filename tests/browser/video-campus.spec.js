import {test,expect} from '@playwright/test';
import {readyCampus,shot,noOverflow} from './helpers.js';

async function aligned(page) {
  // ResizeObserver updates before the next painted frame, not synchronously with setViewportSize.
  await page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
  const data=await page.locator('.campus-plane').evaluate(plane=>{
    const r=plane.getBoundingClientRect(),v=plane.parentElement.getBoundingClientRect();
    const points={};for(const id of ['main-building','football-field','library']){const p=plane.querySelector(`[data-anchor="${id}"]`).getBoundingClientRect();points[id]=[(p.x-r.x)/r.width,(p.y-r.y)/r.height];}
    return {points,ratio:r.width/r.height,l:r.left-v.left,t:r.top-v.top,r:r.right-v.right,b:r.bottom-v.bottom,w:r.width,vw:v.width,h:r.height,vh:v.height};
  });
  expect(data.ratio).toBeCloseTo(16/9,5);
  for(const [id,xy] of Object.entries({'main-building':[.247,.380],'football-field':[.788,.641],library:[.796,.193]}))xy.forEach((n,i)=>expect(data.points[id][i]).toBeCloseTo(n,4));
  if(data.w>=data.vw){expect(data.l).toBeLessThanOrEqual(1);expect(data.r).toBeGreaterThanOrEqual(-1);}
  if(data.h>=data.vh){expect(data.t).toBeLessThanOrEqual(1);expect(data.b).toBeGreaterThanOrEqual(-1);}
}
test('actual muted MP4 advances, pauses, loops through the short dissolve and resumes after hidden-tab suspension',async({page})=>{
  await page.goto('/campus');await readyCampus(page);const v=page.locator('video');
  await expect.poll(()=>v.evaluate(v=>v.currentTime)).toBeGreaterThan(.2);
  expect(await v.evaluate(v=>({width:v.videoWidth,height:v.videoHeight,muted:v.muted,loop:v.loop,duration:v.duration}))).toEqual({width:1280,height:720,muted:true,loop:true,duration:8});
  await page.locator('[data-video-play]').click();const t=await v.evaluate(v=>v.currentTime);await page.waitForTimeout(350);expect(await v.evaluate(v=>v.currentTime)).toBeCloseTo(t,2);
  await page.locator('[data-video-play]').click();await expect.poll(()=>v.evaluate(v=>v.currentTime)).toBeGreaterThan(t+.1);
  await v.evaluate(v=>v.currentTime=7.72);await expect.poll(()=>page.locator('.campus-seam').evaluate(e=>Number(e.style.opacity)),{intervals:[20],timeout:5000}).toBeGreaterThan(.1);
  await expect.poll(()=>v.evaluate(v=>v.currentTime)).toBeLessThan(1);
  await expect.poll(()=>page.locator('.campus-seam').evaluate(e=>Number(e.style.opacity))).toBe(0);
  await page.evaluate(()=>{Object.defineProperty(document,'hidden',{configurable:true,value:true});document.dispatchEvent(new Event('visibilitychange'));});
  expect(await v.evaluate(v=>v.paused)).toBe(true);
  await page.evaluate(()=>{Object.defineProperty(document,'hidden',{configurable:true,value:false});document.dispatchEvent(new Event('visibilitychange'));});
  await expect.poll(()=>v.evaluate(v=>v.paused)).toBe(false);
});
test('source-space pins remain anchored through wheel zoom, drag, clamp, keyboard, focus and resize',async({page})=>{
  await page.goto('/campus');await readyCampus(page);await aligned(page);
  const viewport=page.locator('.campus-viewport');let box=await viewport.boundingBox();
  await page.mouse.move(box.x+box.width*.48,box.y+box.height*.7);await page.mouse.wheel(0,-650);await aligned(page);
  for(const dx of [-950,950]){await page.mouse.move(box.x+box.width*.5,box.y+box.height*.65);await page.mouse.down();await page.mouse.move(box.x+box.width*.5+dx,box.y+box.height*.65,{steps:8});await page.mouse.up();await aligned(page);}
  await expect(page.locator('.explorer')).toHaveAttribute('data-mode','overview');
  await viewport.focus();for(let i=0;i<8;i++)await page.keyboard.press('+');expect(Number(await page.locator('#campus-scene').getAttribute('data-zoom'))).toBe(2);
  await page.keyboard.press('Home');await page.waitForTimeout(700);await aligned(page);
  for(const id of ['main-building','football-field','library']){
    await page.locator(`[data-campus-place=${id}]`).focus();await page.keyboard.press('Enter');await page.waitForTimeout(700);
    await expect(page.locator('#place-panel h2')).toBeFocused();await aligned(page);
    const a=await page.locator('.explorer-stage').boundingBox(),b=await page.locator('#place-panel').boundingBox();expect(a.x+a.width).toBeLessThanOrEqual(b.x+1);
    await shot(page,`video-${id}-desktop`);await page.keyboard.press('Escape');
    await page.locator('[data-reset]').click();await page.waitForTimeout(700);
  }
  await page.locator('[data-select=library]').click();await page.waitForTimeout(700);
  for(const width of [360,390,768,1280,1440]){await page.setViewportSize({width,height:900});await aligned(page);await noOverflow(page);await expect(page.locator('#place-panel h2')).toContainText('Mountain Library');await shot(page,`library-${width}`);}
});
test('mountain library starts reachable and internal rooms share their building with direct room entries',async({page})=>{
  for(const width of [390,1440]){
    await page.setViewportSize({width,height:900});await page.goto('/campus');await readyCampus(page);
    await expect(page.locator('[data-anchor=library]')).not.toHaveClass(/offscreen/);
    if(width===390){
      const pin=await page.locator('[data-campus-place=library]').boundingBox();
      for(const selector of ['.campus-playback','.camera-tools']) {
        const c=await page.locator(selector).boundingBox();
        expect(pin.x+pin.width<=c.x || c.x+c.width<=pin.x || pin.y+pin.height<=c.y || c.y+c.height<=pin.y).toBe(true);
      }
    }
    await page.locator('[data-campus-place=library]').click();await expect(page.locator('#place-panel h2')).toContainText('Mountain Library');
    await page.locator('[data-enter-interior]').click();await expect(page.locator('.panorama-container')).toHaveAttribute('data-loaded','true');
    await page.keyboard.press('Escape');await expect(page.locator('[data-enter-interior]')).toBeFocused();
    await page.locator('[data-close-place]').click();await page.locator('[data-select=tech-lab]').click();
    await page.locator('.building-rooms [data-select=gaming-zone]').click();await expect(page.locator('[data-enter-interior]')).toHaveAttribute('data-enter-interior','games-lounge');
    await expect(page.locator('[data-anchor=tech-lab]')).toHaveClass(/selected/);await expect(page.locator('[data-anchor=gaming-zone]')).toHaveCount(0);
    await page.locator('[data-close-place]').click();await page.locator('[data-select=learning-wing]').click();
    await page.locator('.building-rooms [data-select=quiet-room]').click();await expect(page.locator('[data-enter-interior]')).toHaveAttribute('data-enter-interior','quiet-room');
    await expect(page.locator('[data-anchor=learning-wing]')).toHaveClass(/selected/);
  }
});
test('network failure has working poster pins, explicit retry and independent still map',async({page})=>{
  await page.route('**/campus-A.mp4',r=>r.abort());await page.goto('/campus');await readyCampus(page);
  await expect(page.locator('#campus-scene')).toHaveAttribute('data-playback','fallback');
  await page.locator('[data-select=library]').click();await expect(page.locator('[data-enter-interior]')).toBeVisible();
  await page.unroute('**/campus-A.mp4');await page.locator('[data-video-play]').click();await expect.poll(()=>page.locator('video').evaluate(v=>v.currentTime)).toBeGreaterThan(0);
  await page.locator('[data-view=map]').click();await expect(page.locator('video')).toHaveCount(0);
  await expect(page.locator('.photo-map')).toBeVisible();await page.locator('[data-show-route]').click();await expect(page.locator('#map-route polyline')).toHaveCount(1);
});
test('reduced motion keeps a poster until explicit play; homepage video pauses offscreen',async({page})=>{
  await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/campus');await readyCampus(page);
  expect(await page.locator('video').evaluate(v=>v.paused)).toBe(true);
  await page.locator('[data-video-play]').click();await expect.poll(()=>page.locator('video').evaluate(v=>v.currentTime)).toBeGreaterThan(.1);
  await page.goto('/');await page.locator('.home-model-wrap').scrollIntoViewIfNeeded();await readyCampus(page);
  await page.locator('[data-video-play]').click();await expect.poll(()=>page.locator('video').evaluate(v=>v.paused)).toBe(false);
  await page.evaluate(()=>scrollTo(0,0));await expect.poll(()=>page.locator('video').evaluate(v=>v.paused)).toBe(true);
});
