import { chromium } from "@playwright/test";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { rooms, interiorForPlace } from "../src/interior-data.js";
const output =
  process.env.SERENITY_OUTPUT || "/workspace/outputs/serenity-upgrade";
const base = process.env.SERENITY_URL || "http://127.0.0.1:5173";
const captureOnly = process.env.SERENITY_CAPTURE?.split(",").filter(Boolean);
await mkdir(`${output}/renders`, { recursive: true });
await mkdir("public/images", { recursive: true });
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || "/usr/bin/chromium",
  args: ["--no-sandbox", "--enable-unsafe-swiftshader"],
});
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  reducedMotion: "reduce",
});
const errors = [];
const sceneStats = captureOnly
  ? JSON.parse(await readFile(`${output}/scene-stats.json`, "utf8").catch(() => "{}"))
  : {};
page.on("pageerror", (e) => errors.push(e.message));
const captureStyle = `.site-header,.campus-heading,.campus-note{display:none!important}.explorer{height:900px!important;min-height:900px!important;max-height:900px!important;padding:0!important}.explorer-stage{inset:0!important;height:100%!important;transition:none!important}.place-directory,.place-panel,.tour-panel,.tour-launch,.camera-tools,.explorer-help,.map-legend,.scene-markers,.room-markers,#interior-shell{visibility:hidden!important}`;
async function capture(name, url, room = "campus", detail = false) {
  if (captureOnly && !captureOnly.some((key) => name === key || name === key + "-detail")) return;
  if (url) {
    await page.goto(base + url);
    await page.locator(`canvas[data-room="${room}"]`).waitFor();
    await page.addStyleTag({ content: captureStyle });
    await page.waitForTimeout(200);
  }
  if (detail) {
    await page.mouse.move(850, 420);
    await page.mouse.down();
    await page.mouse.move(1010, 450, { steps: 12 });
    await page.mouse.up();
    await page.waitForTimeout(150);
  }
  await page
    .locator("canvas")
    .screenshot({ path: `${output}/renders/${name}.png` });
  sceneStats[name] = await page.locator("canvas").evaluate((c) => ({
    geometries: Number(c.dataset.geometries), textures: Number(c.dataset.textures),
    drawCalls: Number(c.dataset.drawCalls),
  }));
  console.log("Captured", name);
}
await capture("campus", "/campus");
const canonical = JSON.parse(await readFile("public/data/places.json", "utf8"));
for (const p of canonical) await capture(p.id, `/campus?place=${p.id}`);
for (const id of Object.keys(rooms)) {
  const place = Object.keys(interiorForPlace).find(
    (p) => interiorForPlace[p] === id,
  );
  await capture("interior-" + id, `/campus?place=${place}&interior=${id}`, id);
  await capture("interior-" + id + "-detail", null, id, true);
}
await capture("culture-festival", "/campus?place=courtyard&festival=1");
await browser.close();
if (errors.length) throw Error(errors.join("\n"));
await writeFile(`${output}/scene-stats.json`, JSON.stringify(sceneStats, null, 2));
execFileSync(
  "python3",
  [
    "-c",
    `from PIL import Image\nfrom pathlib import Path\nfor p in Path(${JSON.stringify(output + "/renders")}).glob('*.png'):\n im=Image.open(p);im.save(Path('public/images')/(p.stem+'.webp'),quality=86,method=6)\n`,
  ],
  { stdio: "inherit" },
);
await writeFile(
  "public/images/README.txt",
  "These images are actual captures from the procedural Serenity campus and its six 3D rooms. They are not the approved original reference attachments. Regenerate with npm run capture:scenes while the dev server runs.\n",
);
await writeFile(
  `${output}/image-provenance.json`,
  JSON.stringify(
    {
      source: "Actual procedural Three.js scenes",
      referenceAttachmentsAvailable: false,
      images: [
        "campus",
        ...canonical.map((p) => p.id),
        ...Object.keys(rooms).flatMap((id) => [
          "interior-" + id,
          "interior-" + id + "-detail",
        ]),
        "culture-festival",
      ],
    },
    null,
    2,
  ),
);
console.log(
  "All scene captures verified; WebP assets and durable PNG originals saved.",
);
