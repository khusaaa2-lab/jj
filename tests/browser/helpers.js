import { expect, test } from "@playwright/test";
import { mkdir } from "node:fs/promises";
export const output = "/workspace/outputs/serenity-reference-3d/screenshots";
export const roomEntries = [
  ["main-building", "main-hall", "main-hall-panorama"],
  ["library", "library", "library-panorama"],
  ["learning-wing", "learning-studio", "classroom-panorama"],
  ["tech-lab", "technology-lab", "tech-lab-panorama"],
  ["dining-a", "dining-hall", "dining-panorama"],
  ["gaming-zone", "games-lounge", "games-panorama"],
  ["workshop", "workshop", "workshop-panorama"],
  ["dining-b", "garden-dining", "garden-dining-panorama"],
  ["quiet-room", "quiet-room", "quiet-room-panorama"],
  ["residence", "residence", "residence-panorama"],
];
export async function noGL(page) {
  await page.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (kind, ...args) {
      if (kind.includes("webgl")) return null;
      return original.call(this, kind, ...args);
    };
  });
}
export async function readyCampus(page) {
  await expect.poll(() => page.evaluate(() => !!document.querySelector('.scene-ready .reference-viewport') || !!document.querySelector('#campus-render-status:not([hidden])') || document.querySelector('#hero-mode-label')?.textContent.includes('CAMPUS IMAGE'))).toBe(true);
  test.skip(await page.locator('.scene-ready .reference-viewport').count() === 0, 'WebGL unavailable: actual 3D browser QA cannot run; use fallback suite.');
  await expect(page.locator('.reference-viewport')).toHaveCount(1);
}
export async function shot(page, name, fullPage = false) {
  await mkdir(output, { recursive: true });
  await page.evaluate(async (full) => {
    await document.fonts.ready;
    const images = [...document.images].filter(img => {
      const r = img.getBoundingClientRect();
      return r.width > 0 && r.height > 0 && (full || (r.bottom > 0 && r.top < innerHeight));
    });
    if (full) images.forEach(img => { img.loading = "eager"; });
    await Promise.all(images.map(img => img.decode().catch(() => {})));
  }, fullPage);
  await page.screenshot({
    path: `${output}/${name}.png`,
    fullPage,
    animations: "disabled",
  });
}
export async function covered(page) {
  const bounds = await page.locator(".panorama-viewport").evaluate((view) => {
    const v = view.getBoundingClientRect(),
      i = view.querySelector("img").getBoundingClientRect();
    return {
      left: i.left - v.left,
      top: i.top - v.top,
      right: i.right - v.right,
      bottom: i.bottom - v.bottom,
      ratio: i.width / i.height,
    };
  });
  expect(bounds.left).toBeLessThanOrEqual(1);
  expect(bounds.top).toBeLessThanOrEqual(1);
  expect(bounds.right).toBeGreaterThanOrEqual(-1);
  expect(bounds.bottom).toBeGreaterThanOrEqual(-1);
  expect(bounds.ratio).toBeCloseTo(3, 4);
}
export async function noOverflow(page) {
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth + 1,
    ),
  ).toBe(true);
}
