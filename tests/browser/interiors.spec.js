import { test, expect } from "@playwright/test";
import {
  noGL,
  readyCampus,
  shot,
  covered,
  noOverflow,
  roomEntries,
} from "./helpers.js";

for (const width of [390, 1440])
  test(`all ten distinct panoramas: entry, details, pan, zoom, bounds, exit at ${width}px`, async ({
    page,
  }) => {
    test.setTimeout(120000);
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("/campus?view=map");
    for (const [place, room, image] of roomEntries) {
      await page.locator(`[data-select="${place}"]`).click();
      await page.locator(`[data-enter-interior="${room}"]`).click();
      await expect(page.locator(".panorama-container")).toHaveAttribute(
        "data-loaded",
        "true",
      );
      await expect(page.locator(".panorama-plane img")).toHaveAttribute(
        "src",
        `/media/${image}.webp`,
      );
      await expect(page.locator(".room-hotspots button")).toHaveCount(3);
      for (const b of await page.locator(".room-hotspots button").all()) {
        await b.click();
        await expect(b).toHaveAttribute("aria-pressed", "true");
        await expect(page.locator("#hotspot-description p")).not.toBeEmpty();
        await covered(page);
      }
      await page.locator(".panorama-viewport").focus();
      for (let i = 0; i < 10; i++) await page.keyboard.press("+");
      await expect(page.locator(".panorama-viewport")).toHaveAttribute(
        "data-zoom",
        "2.4",
      );
      for (let i = 0; i < 15; i++) await page.keyboard.press("ArrowRight");
      await covered(page);
      await page.keyboard.press("Home");
      await covered(page);
      await noOverflow(page);
      await shot(page, `${room}-${width}`);
      await page.keyboard.press("Escape");
      await expect(page.locator(".explorer")).toHaveAttribute(
        "data-mode",
        "selected",
      );
      await expect(page.locator("[data-enter-interior]")).toBeFocused();
      await page.locator("[data-close-place]").click();
    }
  });
test("room visits retain exact 3D camera and keep a single renderer", async ({page}) => {
  await page.goto('/campus');await readyCampus(page);
  await page.locator('[data-select=library]').click();await page.waitForTimeout(950);
  const before=await page.locator('#campus-scene').getAttribute('data-camera');
  for(let i=0;i<5;i++) {
    await page.locator('[data-enter-interior]').click();
    await expect(page.locator('.panorama-container')).toHaveAttribute('data-loaded','true');
    await expect(page.locator('#campus-mode-note')).toContainText('Room panorama');
    await page.locator('[data-back-campus]').first().click();
    await expect(page.locator('.explorer')).toHaveAttribute('data-mode','selected');
    await expect(page.locator('#campus-scene')).toHaveAttribute('data-camera',before);
  }
  await expect(page.locator('.reference-viewport')).toHaveCount(1);await shot(page,'campus-3d-return');
});
test("interior deep links, refresh, Back, Forward and language switch preserve context", async ({
  page,
}) => {
  await page.goto("/campus?view=map&place=workshop&interior=workshop");
  await expect(page.locator(".panorama-container")).toHaveAttribute(
    "data-loaded",
    "true",
  );
  await page.reload();
  await expect(page.locator(".interior-header h2")).toContainText("Workshop");
  await page.locator("[data-language=ru]").click();
  await expect(page.locator(".interior-header h2")).toContainText("мастерская");
  await page.locator("[data-back-campus]").first().click();
  await expect(page.locator(".explorer")).toHaveAttribute(
    "data-mode",
    "selected",
  );
  await page.locator("[data-enter-interior]").click();
  await page.goBack();
  await expect(page.locator(".explorer")).toHaveAttribute(
    "data-mode",
    "selected",
  );
  await page.goForward();
  await expect(page.locator(".explorer")).toHaveAttribute(
    "data-mode",
    "interior",
  );
  await page.locator("[data-back-campus]").first().click();
  await expect(page).not.toHaveURL(/interior=/);
});
test("tour room excursions return to the same stop and single focused panel", async ({
  page,
}) => {
  await page.goto("/campus?view=map&tour=start");
  await page.locator("[data-tour-next]").click();
  await page.locator("#tour-panel [data-enter-interior]").click();
  await expect(page.locator("#tour-panel")).toBeHidden();
  await expect(page.locator(".place-directory")).toBeHidden();
  await page.locator("[data-back-campus]").first().click();
  await expect(page.locator(".tour-location")).toContainText("Learning");
  await expect(page.locator("#place-panel")).toBeHidden();
  await page.locator("[data-tour-next]").click();
  await expect(page.locator(".tour-location")).toContainText("Technology");
});
test("WebGL failure leaves an explicit fallback and every HTML panorama stays usable", async ({
  page,
}) => {
  test.setTimeout(90000);
  await noGL(page);
  await page.goto("/campus");
  await expect(page.locator("#campus-render-status")).toBeVisible();
  await expect(page.locator(".photo-map")).toBeVisible();
  await expect(page.locator(".scene-loading")).toBeHidden();
  await expect(page.locator(".camera-tools")).toBeHidden();
  await shot(page, "webgl-fallback");
  for (const [place, room, image] of roomEntries) {
    await page.locator(`[data-select="${place}"]`).click();
    await page.locator("[data-enter-interior]").click();
    await expect(page.locator(".panorama-container")).toHaveAttribute(
      "data-loaded",
      "true",
    );
    await expect(page.locator(".panorama-plane img")).toHaveAttribute(
      "src",
      `/media/${image}.webp`,
    );
    await page.locator(".room-hotspots button").first().click();
    await page.locator("[data-back-campus]").first().click();
    await expect(page.locator(".photo-map")).toBeVisible();
    await page.locator("[data-close-place]").click();
  }
});
test("image failure offers retry and keeps room descriptions and exit usable", async ({
  page,
}) => {
  await page.route("**/library-panorama.webp", (route) => route.abort());
  await page.goto("/campus?view=map&place=library&interior=library");
  await expect(page.locator("[data-pan-retry]")).toBeVisible();
  await page.locator(".room-hotspots button").first().click();
  await expect(page.locator("#hotspot-description")).toContainText("quiet");
  await page.unroute("**/library-panorama.webp");
  await page.locator("[data-pan-retry]").click();
  await expect(page.locator(".panorama-container")).toHaveAttribute(
    "data-loaded",
    "true",
  );
  await page.keyboard.press("Escape");
  await expect(page.locator(".explorer")).toHaveAttribute(
    "data-mode",
    "selected",
  );
});
test("panorama hotspots stay anchored through resizing and real touch panning", async ({
  browser,
}) => {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    hasTouch: true,
    isMobile: true,
  });
  const page = await context.newPage();
  await page.goto("/campus?view=map&place=quiet-room&interior=quiet-room");
  await expect(page.locator(".panorama-container")).toHaveAttribute(
    "data-loaded",
    "true",
  );
  await page.locator(".panorama-viewport").scrollIntoViewIfNeeded();
  const rect = await page.locator(".panorama-viewport").boundingBox(),
    session = await context.newCDPSession(page);
  const start = {
    x: rect.x + rect.width * 0.7,
    y: rect.y + rect.height * 0.65,
  };
  await session.send("Input.dispatchTouchEvent", {
    type: "touchStart",
    touchPoints: [start],
  });
  for (let i = 1; i <= 8; i++)
    await session.send("Input.dispatchTouchEvent", {
      type: "touchMove",
      touchPoints: [{ x: start.x - i * 20, y: start.y }],
    });
  await session.send("Input.dispatchTouchEvent", {
    type: "touchEnd",
    touchPoints: [],
  });
  expect(
    Math.abs(
      Number(await page.locator(".panorama-viewport").getAttribute("data-x")),
    ),
  ).toBeGreaterThan(30);
  await covered(page);
  await page.setViewportSize({ width: 768, height: 1000 });
  await covered(page);
  const alignment = await page.locator(".panorama-plane").evaluate((el) => {
    const r = el.getBoundingClientRect(),
      m = el
        .querySelector("[data-room-hotspot=reading]")
        .getBoundingClientRect();
    return (m.left + m.width / 2 - r.left) / r.width;
  });
  expect(alignment).toBeCloseTo(0.17, 3);
  await context.close();
});
