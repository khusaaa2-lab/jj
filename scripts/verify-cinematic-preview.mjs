import {chromium,expect} from '@playwright/test';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {spawn} from 'node:child_process';
import {resolve} from 'node:path';
const output=process.env.SERENITY_OUTPUT||'/workspace/outputs/serenity-cinematic';
const file=output+'/preview/Serenity-Preview.html';
const html=await readFile(file,'utf8');
const base='http://127.0.0.1:4322';
const server=spawn(process.execPath,[resolve('scripts/serve-production.mjs')],{env:{...process.env,HOST:'127.0.0.1',PORT:'4322',SITE_ROOT:resolve(output+'/preview')},stdio:'ignore'});
for(let i=0;i<30;i++){try{if((await fetch(base+'/Serenity-Preview.html')).ok)break;}catch{}await new Promise(r=>setTimeout(r,100));}
expect(html.includes('data:video/mp4')).toBe(false);
expect(html.includes('src="/src/main.js"')).toBe(false);
const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
const errors=[],remote=[];
try{
  const page=await browser.newPage({viewport:{width:1440,height:1000},locale:'ru-RU'});
  page.on('pageerror',e=>errors.push(e.message));
  page.on('request',r=>{if(/^https?:/.test(r.url())&&!r.url().startsWith(base))remote.push(r.url());});
  expect(await (await fetch(base+'/Serenity-Preview.html')).text()).toBe(html);
  await page.goto(base+'/Serenity-Preview.html');await expect(page.locator('.hero-image')).toHaveJSProperty('naturalWidth',1672);
  await expect(page.locator('script[src]')).toHaveCount(0);await expect(page.locator('link[rel=stylesheet]')).toHaveCount(0);
  await page.locator('#navigation [data-route="/campus"]').click();
  await expect(page.locator('.campus-viewport')).toBeVisible();
  await expect.poll(()=>page.locator('video').evaluate(v=>v.currentTime)).toBeGreaterThan(.1);
  await page.locator('[data-select=library]').click();await page.locator('[data-enter-interior]').click();
  await expect(page.locator('.panorama-container')).toHaveAttribute('data-loaded','true');
  await page.keyboard.press('Escape');await expect(page.locator('.explorer')).toHaveAttribute('data-mode','selected');
  await page.locator('[data-language=en]').click();await expect(page.locator('#place-panel h2')).toContainText('Mountain Library');
  await page.reload();await expect(page.locator('#place-panel h2')).toContainText('Mountain Library');
  await mkdir(output+'/screenshots',{recursive:true});await page.screenshot({path:output+'/screenshots/portable-browser-preview.png'});
  // Reproduce an opaque task iframe with all external requests blocked. This is
  // an iframe test, not a claim to have registered or inspected the actual Site card.
  const context=await browser.newContext({reducedMotion:'reduce',locale:'ru-RU'});
  await context.route('**/*',route=>route.abort());const wrapper=await context.newPage();
  wrapper.on('pageerror',e=>errors.push(e.message));
  await wrapper.setContent('<iframe id="root" sandbox="allow-scripts" style="width:1100px;height:850px"></iframe>');
  await wrapper.locator('iframe').evaluate((el,markup)=>el.srcdoc=markup,html);
  const frame=wrapper.frameLocator('iframe');await expect(frame.locator('.hero-image')).toHaveJSProperty('naturalWidth',1672);
  await frame.locator('#navigation [data-route="/campus"]').click();
  await frame.locator('[data-select=workshop]').click();await frame.locator('[data-enter-interior]').click();
  await expect(frame.locator('.panorama-container')).toHaveAttribute('data-loaded','true');
  await frame.locator('[data-back-campus]').first().click();await expect(frame.locator('.explorer')).toHaveAttribute('data-mode','selected');
  await frame.locator('[data-view=map]').click();await expect(frame.locator('.photo-map image')).toHaveAttribute('href',/^data:image/);
  expect(errors).toEqual([]);expect(remote).toEqual([]);
  await writeFile(output+'/preview-verification.json',JSON.stringify({file,htmlBytes:Buffer.byteLength(html),video:'separate local media/campus/campus-A.mp4',checks:['exact generated HTML served and rendered in Chromium','inline UI and images','actual MP4 playback','library entry/return','RU/EN','hash refresh','opaque iframe with network blocked: image, rooms, still map'],errors,remote,actualTaskCardVerified:false,fileProtocol:'Blocked by managed Chromium policy; used byte-identical HTTP preview.'},null,2));
  console.log('Portable browser preview passed: video sidecar, room return, RU/EN, refresh and opaque iframe fallback.');
}finally{await browser.close();server.kill('SIGTERM');}
