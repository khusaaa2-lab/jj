import { chromium, expect } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";

// Room images are supplied panoramas, never replacements made from scene captures.
const output = process.env.SERENITY_OUTPUT || "/workspace/outputs/serenity-redesign";
const base = process.env.SERENITY_URL || "http://127.0.0.1:5173";
await mkdir(`${output}/renders`, { recursive: true });
const browser = await chromium.launch({executablePath: process.env.CHROMIUM_PATH || "/usr/bin/chromium", args: ["--no-sandbox", "--enable-unsafe-swiftshader"]});
const page = await browser.newPage({viewport: {width:1440,height:960}, reducedMotion:"reduce"});
const stats = {}, errors = [];
page.on("pageerror", error => errors.push(error.message));
try {
  for (const id of ["campus", "courtyard", "ideas-garden", "football-field"]) {
    await page.goto(`${base}/campus${id === "campus" ? "" : "?place="+id}`);
    await expect(page.locator(".scene-ready canvas")).toBeVisible();
    await page.addStyleTag({content: `.site-header,.campus-heading,.campus-note,.site-footer{display:none!important}.campus-page{padding:0!important}.explorer{display:block!important;height:960px!important;min-height:960px!important}.explorer-stage{height:960px!important;width:100%!important}.place-directory,.place-panel,.tour-panel,.camera-tools,.explorer-help,.scene-markers{display:none!important}`});
    await page.waitForTimeout(250);
    await page.locator("canvas").screenshot({path:`${output}/renders/${id}.png`});
    stats[id] = await page.locator("canvas").evaluate(c => ({geometries:Number(c.dataset.geometries), textures:Number(c.dataset.textures), drawCalls:Number(c.dataset.drawCalls)}));
    console.log("Captured actual geometry:", id);
  }
} finally { await browser.close(); }
if (errors.length) throw Error(errors.join("\n"));
execFileSync("python3", ["-c", "from PIL import Image; from pathlib import Path; import sys\nfor name in ['courtyard','ideas-garden','football-field']:\n im=Image.open(Path(sys.argv[1])/'renders'/(name+'.png')); im.thumbnail((1200,800)); im.save(Path('public/images')/(name+'.webp'),quality=84,method=6)", output], {stdio:"inherit"});
await writeFile(`${output}/scene-stats.json`, JSON.stringify(stats,null,2));
await writeFile("public/images/README.txt", "courtyard.webp, ideas-garden.webp and football-field.webp are current actual Three.js scene captures used for outdoor place cards. Regenerate with npm run capture:scenes while dev runs. Other images here are retained historical captures; current room views use supplied images in public/media. See public/media/asset-map.json for all eleven original references.\n");
