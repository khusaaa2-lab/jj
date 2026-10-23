import { chromium, expect } from "@playwright/test";
import { readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";

const output = "/workspace/outputs/serenity-redesign";
const source = await readFile("/workspace/Serenity-Preview.html");
const entry = await readFile("index.html");
expect(entry.equals(source)).toBe(true);
expect((await readFile("/workspace/index.html")).equals(source)).toBe(true);
const errors = [], requests = [];
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || "/usr/bin/chromium",
  args: ["--no-sandbox", "--enable-unsafe-swiftshader"],
});
try {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 }, locale: "ru-RU", reducedMotion: "reduce",
  });
  await context.route("**/*", route => { requests.push(route.request().url()); return route.abort(); });
  async function openEntry() {
    const page = await context.newPage();
    page.on("pageerror", error => errors.push(error.message));
    await page.setContent('<iframe id="root" sandbox="allow-scripts" style="width:1400px;height:950px;border:0"></iframe>');
    await page.locator("iframe#root").evaluate((el, html) => { el.srcdoc = html; }, entry.toString("utf8"));
    const frame = page.frameLocator("iframe#root");
    await expect(frame.locator(".hero-image")).toHaveJSProperty("naturalWidth",1672);
    await expect(frame.locator("script[src]")).toHaveCount(0);
    await expect(frame.locator('link[rel="stylesheet"]')).toHaveCount(0);
    await expect(frame.locator("h1")).toContainText("Место, где");
    return {page,frame};
  }
  const {page,frame} = await openEntry();
  await page.screenshot({path:`${output}/screenshots/task-index-home.png`,animations:"disabled"});
  await frame.locator('#navigation [data-route="/campus"]').click();
  await expect(frame.locator(".scene-ready canvas")).toBeVisible();
  await frame.locator("[data-select=workshop]").click();
  await frame.locator("[data-enter-interior]").click();
  await expect(frame.locator(".panorama-container")).toHaveAttribute("data-loaded","true");
  await expect(frame.locator(".panorama-plane img")).toHaveJSProperty("naturalWidth",2172);
  await frame.locator("[data-back-campus]").first().click();
  await expect(frame.locator(".explorer")).toHaveAttribute("data-mode","selected");
  await frame.locator("[data-language=en]").click();
  await expect(frame.locator("#place-panel h2")).toContainText("Workshop");
  await context.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function(type, ...args) {
      return type.includes("webgl") ? null : original.call(this,type,...args);
    };
  });
  const fallback = await openEntry();
  await fallback.frame.locator('#navigation [data-route="/campus"]').click();
  await expect(fallback.frame.locator("#map-container")).toBeVisible();
  await expect(fallback.frame.locator(".place-row")).toHaveCount(13);
  await fallback.frame.locator("[data-select=residence]").click();
  await fallback.frame.locator("[data-enter-interior]").click();
  await expect(fallback.frame.locator(".panorama-container")).toHaveAttribute("data-loaded","true");
  await fallback.page.screenshot({path:`${output}/screenshots/task-index-fallback.png`,animations:"disabled"});
  expect(errors).toEqual([]);expect(requests).toEqual([]);
  const delivery=JSON.parse(await readFile(`${output}/task-preview-delivery.json`,"utf8"));
  const zip=await readFile("/workspace/Serenity-production.zip");
  expect(createHash("sha256").update(zip).digest("hex")).toBe(delivery.productionZipSHA256);
  await writeFile(`${output}/task-preview-verification.json`,JSON.stringify({
    entrypoint:"/workspace/jj/index.html", identicalTo:"/workspace/Serenity-Preview.html",
    htmlSHA256:createHash("sha256").update(entry).digest("hex"), productionZipUnchanged:true,
    externalScripts:0, externalStylesheets:0, requests, errors,
    checks:["iframe#root actual index bytes", "hero renders", "real 3D campus", "room entry/return", "RU/EN", "forced WebGL fallback and room"],
    taskInterfaceVerified:false,
    limitation:"Only the file entry and a local iframe reproduction were verified. No tool for registering or inspecting the actual task preview card is available.",
  },null,2));
  console.log("Task index verified: exact standalone HTML; no external scripts/styles/requests; 3D, panorama, language and fallback passed. Production ZIP unchanged.");
} finally { await browser.close(); }
