import {chromium,expect} from '@playwright/test';
import {mkdir,writeFile} from 'node:fs/promises';
const output=process.env.SERENITY_OUTPUT||'/workspace/outputs/serenity-reference-3d';
const base=process.env.SERENITY_BASE||'http://127.0.0.1:4173';
await mkdir(output+'/review',{recursive:true});
const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',chromiumSandbox: true});
const errors=[],files=[],modes=[];
try{
 const page=await browser.newPage({viewport:{width:1440,height:1000},locale:'ru-RU',reducedMotion:'reduce'});
 page.on('pageerror',e=>errors.push(e.message));
 async function shot(name,fullPage=false){
  await page.evaluate(async(full)=>{await document.fonts.ready;const images=[...document.images].filter(i=>{const r=i.getBoundingClientRect();return r.width>0&&(full||r.bottom>0&&r.top<innerHeight);});if(full)images.forEach(i=>i.loading='eager');await Promise.all(images.map(i=>i.decode().catch(()=>{})));},fullPage);
  await page.screenshot({path:output+'/review/'+name+'.png',fullPage,animations:'disabled'});files.push(name+'.png');modes.push({name,engine:await page.locator('#campus-scene').getAttribute('data-engine').catch(()=>null),fallback:await page.locator('#campus-render-status:not([hidden])').count()});
 }
 for(const lang of ['ru','en']){
  await page.goto(base+'/');await page.locator('[data-language='+lang+']').click();await shot('home-'+lang);
  for(const width of [390,1440]){
   await page.setViewportSize({width,height:1000});await page.goto(base+'/campus');
   await expect(page.locator('.scene-ready .reference-viewport, #map-container:not([hidden]) .photo-map')).toBeVisible();await shot('campus-'+lang+'-'+width);
   await page.locator('[data-select=library]').click();await shot('mountain-library-'+lang+'-'+width,true);
   await page.locator('[data-enter-interior]').click();await expect(page.locator('.panorama-container')).toHaveAttribute('data-loaded','true');await shot('library-room-'+lang+'-'+width);
  }
  await page.setViewportSize({width:1440,height:1000});
 }
 await page.goto(base+'/campus?place=football-field');await shot('football-field');
 await page.goto(base+'/campus?place=main-building');await shot('main-building');
 expect(errors).toEqual([]);
 await writeFile(output+'/review/README.md','# Проверенные экраны Serenity\n\n'+files.map(f=>'- ['+f+']('+f+')').join('\n')+'\n');
 await writeFile(output+'/review/capture-result.json',JSON.stringify({base,files,modes,errors,mode:'Production browser captures; record actual WebGL or fallback state per image.'},null,2));
 console.log('Captured '+files.length+' reviewed production screenshots.');
}finally{await browser.close();}
