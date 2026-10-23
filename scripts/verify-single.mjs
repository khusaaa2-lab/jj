import { chromium, expect } from '@playwright/test';
import { createServer } from 'node:http';
import { readFile, writeFile } from 'node:fs/promises';
const root='/workspace/outputs/serenity-upgrade/recheck';
const html=await readFile(root+'/Serenity.html');
const base='http://127.0.0.1:4332/';
const server=createServer((req,res)=>{if(req.url==='/'){res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});res.end(html)}else{res.writeHead(404);res.end()}});
await new Promise(r=>server.listen(4332,'127.0.0.1',r));
let b;const errors=[],failed=[],network=[];
try{
 b=await chromium.launch({executablePath:'/usr/bin/chromium',chromiumSandbox: true});
 const c=await b.newContext({viewport:{width:1440,height:900},reducedMotion:'reduce'});
 const observe=p=>{p.on('pageerror',e=>errors.push(e.message));p.on('requestfailed',r=>failed.push(r.url().slice(0,160)));p.on('request',r=>{if(/^https?:/.test(r.url())&&r.url()!==base)network.push(r.url())})};
 const p=await c.newPage();observe(p);
 await p.goto(base);await expect(p.locator('canvas[data-room="campus"]')).toBeVisible();
 await p.locator('.story-index a[href="#look-inside"]').click();
 await expect(p.locator('main h1')).toContainText('Room to learn.');
 for(const [route,title] of [['Learning','Good questions.'],['School Life','A little time to play.'],['Events','Different stories.'],['Our Project','A school imagined.'],['Campus','Find your place.']]){
  await p.getByRole('navigation').getByRole('link',{name:route,exact:true}).click();await expect(p.locator('main h1')).toContainText(title);
 }
 for(const [place,room] of [['main-building','main-hall'],['library','library'],['learning-wing','learning-studio'],['tech-lab','technology-lab'],['dining-a','dining-hall'],['gaming-zone','games-lounge']]){
  await p.goto(base+'#/campus?place='+place);await p.getByRole('button',{name:'Enter building'}).click();
  await expect(p.locator(`canvas[data-room="${room}"]`)).toBeVisible();await p.locator('[data-room-hotspot]').first().click();
  await p.getByRole('button',{name:'Back to campus'}).click();await expect(p.locator('canvas[data-room="campus"]')).toBeVisible();
  console.log('Room passed:',room);
 }
 await p.goto(base+'#/campus?place=library&interior=library');await expect(p.locator('canvas[data-room="library"]')).toBeVisible();
 await p.reload();await expect(p.locator('canvas[data-room="library"]')).toBeVisible();
 await p.getByRole('button',{name:'Back to campus'}).click();await expect(p.locator('#place-panel h2')).toHaveText('Hillside Library');
 await p.getByRole('button',{name:'Enter building'}).click();await p.goBack();await expect(p.locator('canvas[data-room="campus"]')).toBeVisible();
 await p.goForward();await expect(p.locator('canvas[data-room="library"]')).toBeVisible();
 await p.goto(base+'#/events');await p.getByRole('button',{name:/Makers Challenge/}).click();await p.reload();await expect(p.getByRole('button',{name:/Makers Challenge/})).toHaveAttribute('aria-pressed','true');
 await p.goto(base);await p.locator('canvas[data-room="campus"]').waitFor();await p.evaluate(()=>scrollTo(0,0));await p.screenshot({path:root+'/single-home.png'});
 const fallback=await c.newPage();observe(fallback);
 await fallback.addInitScript(()=>{const orig=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(t,...args){return t.includes('webgl')?null:orig.call(this,t,...args)}});
 await fallback.goto(base+'#/campus?place=library&interior=library');await expect(fallback.locator('.interior-gallery')).toBeVisible();
 await fallback.locator('[data-gallery-angle="2"]').click();await expect(fallback.locator('.interior-gallery img')).toHaveJSProperty('naturalWidth',1440);
 for(const width of [360,390,768,1280,1440]){await p.setViewportSize({width,height:844});await p.goto(base+'#/campus?place=library');await expect(p.locator('#place-panel h2')).toHaveText('Hillside Library');expect(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBe(true);}
 await writeFile(root+'/single-verification.json',JSON.stringify({selfContained:true,allSixPages:true,allSixRooms:true,refreshAndHistory:true,gallery:true,widths:[360,390,768,1280,1440],votePersistence:true,errors,failedRequests:failed,additionalHttpRequests:network,fileProtocolTest:'Blocked by browser administrator policy; identical standalone bytes tested via an isolated one-file HTTP server.'},null,2));
 if(errors.length||failed.length||network.length)throw Error(JSON.stringify({errors,failed,network}));
 console.log('Standalone passed: six pages, six rooms, hotspots, refresh, history, local vote, fallback, five widths. Zero extra HTTP requests or errors.');
}finally{await b?.close();server.close();}
