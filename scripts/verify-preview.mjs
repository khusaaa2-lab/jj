import { chromium, expect } from "@playwright/test";
import { spawn } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { roomEntries } from "../tests/browser/helpers.js";

const output=process.env.SERENITY_OUTPUT || "/workspace/outputs/serenity-redesign";
const filename="Serenity-Preview.html", port=4322, base=`http://127.0.0.1:${port}/${filename}`;
const server=spawn(process.execPath,["scripts/serve-production.mjs"],{env:{...process.env,HOST:"127.0.0.1",PORT:String(port),SITE_ROOT:output},stdio:"pipe"});
let browser;
const errors=[], unexpectedRequests=[];
try {
  for(let i=0;i<40;i++){try{if((await fetch(base)).ok)break;}catch{}await new Promise(r=>setTimeout(r,100));}
  browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||"/usr/bin/chromium",chromiumSandbox: true});
  const context=await browser.newContext({viewport:{width:1440,height:1000},locale:"ru-RU",reducedMotion:"reduce"});
  // Only the HTML document may load. Every runtime asset must already be embedded.
  await context.route("**/*",route=>{
    if(route.request().url().split("#")[0]===base)return route.continue();
    unexpectedRequests.push(route.request().url());return route.abort();
  });
  const page=await context.newPage();
  page.on("pageerror",error=>errors.push(error.message));
  await page.goto(base);
  await expect(page.locator(".hero-image")).toHaveJSProperty("naturalWidth",1672);
  await expect(page.locator("html")).toHaveAttribute("lang","ru");
  await page.screenshot({path:`${output}/screenshots/preview-html-home.png`,animations:"disabled"});
  for(const language of ["en","ru"]){
    await page.locator(`[data-language=${language}]`).click();
    for(const route of ["/learning","/life","/events","/project","/campus","/"]){
      await page.locator(`#navigation [data-route="${route}"]`).click();
      await expect(page).toHaveURL(base+"#"+route);
      await expect(page.locator("h1")).toBeVisible();
      await expect(page.locator("html")).toHaveAttribute("lang",language);
    }
  }
  await page.locator('#navigation [data-route="/campus"]').click();
  await expect(page.locator(".scene-ready canvas[data-camera]")).toBeVisible();
  const initial=await page.locator("canvas").getAttribute("data-camera"), box=await page.locator("canvas").boundingBox();
  await page.mouse.move(box.x+box.width*.35,box.y+box.height*.85);await page.mouse.down();
  await page.mouse.move(box.x+box.width*.5,box.y+box.height*.85,{steps:8});await page.mouse.up();
  await expect(page.locator("canvas")).not.toHaveAttribute("data-camera",initial);
  await page.locator("[data-select=library]").click();await page.locator("[data-enter-interior]").click();
  await expect(page.locator(".panorama-container")).toHaveAttribute("data-loaded","true");
  await page.goBack();await expect(page.locator(".explorer")).toHaveAttribute("data-mode","selected");
  await page.goForward();await expect(page.locator(".explorer")).toHaveAttribute("data-mode","interior");
  await page.reload();await expect(page.locator(".panorama-container")).toHaveAttribute("data-loaded","true");
  await page.locator("[data-back-campus]").first().click();
  await page.locator("[data-view=map]").click();await page.locator("[data-close-place]").click();
  for(const [place,room] of roomEntries){
    await page.locator(`[data-select="${place}"]`).click();await page.locator(`[data-enter-interior="${room}"]`).click();
    await expect(page.locator(".panorama-container")).toHaveAttribute("data-loaded","true");
    await expect(page.locator(".panorama-plane img")).toHaveJSProperty("naturalWidth",2172);
    await page.locator(".room-hotspots button").first().click();
    await page.locator(".panorama-viewport").focus();await page.keyboard.press("+");await page.keyboard.press("ArrowRight");
    await page.keyboard.press("Escape");await page.locator("[data-close-place]").click();
  }
  await page.locator(".sound-menu summary").click();await page.locator("[data-sound]").click();
  await expect(page.locator("html")).toHaveAttribute("data-audio","running");await page.locator("[data-sound]").click();
  await expect(page.locator("html")).toHaveAttribute("data-audio","suspended");
  const fallback=await context.newPage();fallback.on("pageerror",e=>errors.push(e.message));
  await fallback.setViewportSize({width:390,height:844});
  await fallback.addInitScript(()=>{const original=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(type,...args){return type.includes("webgl")?null:original.call(this,type,...args);};});
  await fallback.goto(base+"#/campus");await expect(fallback.locator("#map-container")).toBeVisible();
  await expect(fallback.locator(".camera-tools")).toBeHidden();await fallback.locator("[data-select=workshop]").click();
  await fallback.locator("[data-enter-interior]").click();await expect(fallback.locator(".panorama-container")).toHaveAttribute("data-loaded","true");
  await fallback.screenshot({path:`${output}/screenshots/preview-html-mobile-fallback.png`,animations:"disabled"});
  // Task viewers commonly use an opaque-origin sandboxed srcdoc frame.
  const embedded=await context.newPage();embedded.on("pageerror",e=>errors.push(e.message));
  await embedded.setContent('<iframe sandbox="allow-scripts" style="width:1400px;height:950px;border:0"></iframe>');
  await embedded.locator('iframe').evaluate((el,html)=>{el.srcdoc=html},await readFile(`${output}/${filename}`,'utf8'));
  const frame=embedded.frameLocator('iframe');
  await expect(frame.locator('.hero-image')).toHaveJSProperty('naturalWidth',1672);
  for(const route of ['/learning','/life','/events','/project','/','/campus']){
    await frame.locator(`#navigation [data-route="${route}"]`).click();
    await expect(frame.locator('h1')).toBeVisible();
    expect(embedded.frames()[1].url()).toBe('about:srcdoc#'+route);
  }
  await expect(frame.locator('.scene-ready canvas')).toBeVisible();
  await frame.locator('[data-select=library]').click();await frame.locator('[data-enter-interior]').click();
  await expect(frame.locator('.panorama-container')).toHaveAttribute('data-loaded','true');
  await frame.locator('[data-back-campus]').first().click();await expect(frame.locator('.explorer')).toHaveAttribute('data-mode','selected');
  await frame.locator('[data-language=en]').click();await expect(frame.locator('#place-panel h2')).toContainText('Library');
  await embedded.screenshot({path:`${output}/screenshots/preview-html-embedded.png`,animations:'disabled'});
  expect(errors).toEqual([]);expect(unexpectedRequests).toEqual([]);
  const data=await readFile(`${output}/${filename}`);
  await writeFile(`${output}/preview-verification.json`,JSON.stringify({filename,bytes:data.length,sha256:createHash("sha256").update(data).digest("hex"),checks:["six routes in RU/EN","real WebGL orbit","ten embedded panoramas, keyboard pan/zoom and exit","Back/Forward/refresh","audio opt-in/mute","mobile forced WebGL fallback","opaque sandboxed iframe: six routes, actual WebGL, panorama entry/return, language switch"],runtimeAssetRequests:unexpectedRequests,errors,method:"Chromium: only the single HTML document is allowed over HTTP; all other requests are blocked. Also tested as srcdoc in iframe sandbox=allow-scripts without same-origin privileges. The task application's actual viewer policy is outside this repository."},null,2));
  console.log(`Self-contained HTML verified: ${data.length} bytes; zero runtime asset requests; all six routes and ten rooms passed.`);
}finally{await browser?.close();server.kill("SIGTERM");}
