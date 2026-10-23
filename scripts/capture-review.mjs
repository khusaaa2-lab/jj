import { chromium, expect } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
const output =
  process.env.SERENITY_OUTPUT || "/workspace/outputs/serenity-upgrade";
const base = process.env.SERENITY_URL || "http://127.0.0.1:5173";
await mkdir(`${output}/after`, { recursive: true });
const b = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || "/usr/bin/chromium",
  args: ["--no-sandbox", "--enable-unsafe-swiftshader"],
});
const context = await b.newContext({
  viewport: { width: 1440, height: 900 },
  reducedMotion: "reduce",
});
const p = await context.newPage();
const errors = [],
  failed = [];
p.on("pageerror", (e) => errors.push(e.message));
p.on("response", (r) => {
  if (r.status() >= 400) failed.push(r.url());
});
const cases = [
  ["home", "/"],
  ["campus", "/campus"],
  ["library", "/campus?place=library"],
  ["tour", "/campus?tour=start"],
  ["learning", "/learning"],
  ["life", "/life"],
  ["events", "/events"],
  ["project", "/project"],
  ["main-hall", "/campus?place=main-building&interior=main-hall"],
  ["library-room", "/campus?place=library&interior=library"],
  ["learning-studio", "/campus?place=learning-wing&interior=learning-studio"],
  ["technology-lab", "/campus?place=tech-lab&interior=technology-lab"],
  ["dining-hall", "/campus?place=dining-a&interior=dining-hall"],
  ["games-lounge", "/campus?place=gaming-zone&interior=games-lounge"],
];
async function ready(page) {
  await page.locator("img[loading=lazy]").evaluateAll((images) => images.forEach((img) => { img.loading = "eager"; }));
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all([...document.images].map((img) => img.decode().catch(() => {})));
  });
}
for (const [name, url] of cases) {
  await p.goto(base + url);
  await p.locator("main").waitFor();
  if (url.includes("/campus")) await p.locator("canvas[data-room]").waitFor();
  else await p.waitForTimeout(300);
  await ready(p);
  await p.screenshot({
    path: `${output}/after/${name}.png`,
    fullPage: ["home", "learning", "life", "events", "project"].includes(name),
  });
}
for (const width of [360, 390, 768, 1280, 1440]) {
  await p.setViewportSize({ width, height: width < 600 ? 844 : 900 });
  for (const url of [
    "/",
    "/campus?place=library",
    "/campus?place=library&interior=library",
    "/events",
  ]) {
    await p.goto(base + url);
    await p.locator("main").waitFor();
    expect(
      await p.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth + 1,
      ),
      `${url} at ${width}`,
    ).toBe(true);
  }
  if (width === 390) {
    await p.screenshot({
      path: `${output}/after/mobile-events.png`,
      fullPage: true,
    });
    await p.goto(base + "/");
    await p.waitForTimeout(600);
    await ready(p);
    await p.screenshot({
      path: `${output}/after/mobile-home.png`,
      fullPage: true,
    });
    await p.goto(base + "/campus?place=library&interior=library");
    await p.locator('canvas[data-room="library"]').waitFor();
    await p.screenshot({ path: `${output}/after/mobile-library.png` });
    await p.goto(base + "/campus?place=gaming-zone&interior=games-lounge");
    await p.locator('canvas[data-room="games-lounge"]').waitFor();
    await p.screenshot({ path: `${output}/after/mobile-games.png` });
    await p.goto(base + "/campus?place=library");
    await p.locator('canvas[data-room="campus"]').waitFor();
    await p.screenshot({ path: `${output}/after/mobile-library-panel.png`, fullPage: true });
  }
}
const fallback = await context.newPage();
fallback.on("pageerror", (e) => errors.push(e.message));
fallback.on("response", (r) => { if (r.status() >= 400) failed.push(r.url()); });
await fallback.addInitScript(() => {
  const original = HTMLCanvasElement.prototype.getContext;
  HTMLCanvasElement.prototype.getContext = function (t, ...args) {
    return t.includes("webgl") ? null : original.call(this, t, ...args);
  };
});
for (const [name, url] of [
  ["fallback-home", "/"],
  ["fallback-map", "/campus?place=library"],
  ["fallback-interior", "/campus?place=library&interior=library"],
]) {
  await fallback.goto(base + url);
  await fallback.waitForTimeout(400);
  await fallback.screenshot({ path: `${output}/after/${name}.png` });
}
await b.close();
await writeFile(
  `${output}/browser-review.json`,
  JSON.stringify(
    {
      errors,
      failedAssets: failed,
      widths: [360, 390, 768, 1280, 1440],
      screenshots: cases.map((c) => c[0]),
      fallbackTested: true,
    },
    null,
    2,
  ),
);
if (errors.length || failed.length)
  throw Error(JSON.stringify({ errors, failed }));
console.log(
  "Review images saved. No JavaScript errors or failed assets; five widths passed.",
);
