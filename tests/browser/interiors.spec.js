import { test, expect } from "@playwright/test";
const entries = [
  ["main-building", "main-hall", "The Main Hall"],
  ["library", "library", "Hillside Library"],
  ["learning-wing", "learning-studio", "Learning Studio"],
  ["tech-lab", "technology-lab", "Technology Lab"],
  ["dining-a", "dining-hall", "The Dining Hall"],
  ["gaming-zone", "games-lounge", "Games Lounge"],
];
test("all six furnished rooms open explicitly, expose three useful hotspots and return", async ({
  page,
}) => {
  test.setTimeout(60000); // Six complete WebGL scene builds on software-rendered Chromium.
  const errors = [],
    failed = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("response", (r) => {
    if (r.status() >= 400) failed.push(r.url());
  });
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const [place, room, name] of entries) {
    await page.goto("/campus?place=" + place);
    await expect(page.locator('canvas[data-room="campus"]')).toBeVisible();
    await page.getByRole("button", { name: "Enter building" }).click();
    await expect(page.locator(`canvas[data-room="${room}"]`)).toBeVisible();
    await expect(page.locator("#interior-shell h2")).toHaveText(name);
    await expect(page.locator("[data-room-hotspot]")).toHaveCount(3);
    for (const button of await page.locator("[data-room-hotspot]").all()) {
      await button.click();
      await expect(button).toHaveAttribute("aria-pressed", "true");
      expect(
        (await page.locator("#hotspot-description p").textContent()).length,
      ).toBeGreaterThan(70);
    }
    await expect(page.locator("canvas")).toHaveCount(1);
    await page.getByRole("button", { name: /Another view/ }).click();
    await page.getByRole("button", { name: "Back to campus" }).click();
    await expect(page.locator('canvas[data-room="campus"]')).toBeVisible();
    await expect(page.locator("#place-panel h2")).toBeVisible();
  }
  expect(errors).toEqual([]);
  expect(failed).toEqual([]);
});
test("interior deep link refresh, browser Back and tour resume preserve the selected stop", async ({
  page,
}) => {
  test.setTimeout(60000); // Refresh and tour transitions construct several software-rendered scenes.
  await page.goto("/campus?place=library&interior=library");
  await expect(page.locator('canvas[data-room="library"]')).toBeVisible();
  await page.reload();
  await expect(page.locator("#interior-shell h2")).toHaveText(
    "Hillside Library",
  );
  await page.getByRole("button", { name: "Back to campus" }).click();
  await expect(page.locator("#place-panel h2")).toHaveText("Hillside Library");
  await page.getByRole("button", { name: /Take a little tour/ }).click();
  await page.getByRole("button", { name: /Next stop/ }).click();
  await expect(page.locator("#tour-panel")).toContainText("2 OF 8");
  await expect(page.locator(".place-directory")).toBeHidden();
  await expect(page.locator("#place-panel")).toBeHidden();
  await page.getByRole("button", { name: /Look inside/ }).click();
  await expect(
    page.locator('canvas[data-room="learning-studio"]'),
  ).toBeVisible();
  await page.goBack();
  await expect(page.locator("#tour-panel")).toContainText("2 OF 8");
  await expect(page.getByRole("button", { name: /Look inside/ })).toBeFocused();
  await expect(page.locator('canvas[data-room="campus"]')).toBeVisible();
  await page.getByRole("button", { name: /Next stop/ }).click();
  await expect(page.locator("#tour-panel")).toContainText("3 OF 8");
});
test("returning restores the exact campus viewpoint after looking around a room", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/campus?place=library");
  await expect(page.locator('canvas[data-room="campus"]')).toBeVisible();
  await page.waitForTimeout(150);
  const capture = {
    style:
      ".place-directory,.place-panel,.scene-markers,.camera-tools,.tour-launch,.explorer-help,.map-legend,.toast{visibility:hidden!important}",
  };
  const before = await page.locator("canvas").screenshot(capture);
  await page.getByRole("button", { name: "Enter building" }).click();
  await expect(page.locator('canvas[data-room="library"]')).toBeVisible();
  await page.getByRole("button", { name: /Another view/ }).click();
  await page.getByRole("button", { name: "Back to campus" }).click();
  await expect(page.locator('canvas[data-room="campus"]')).toBeVisible();
  await page.waitForTimeout(150);
  const after = await page.locator("canvas").screenshot(capture);
  expect(before.equals(after)).toBe(true);
});
test("room switches release geometry and textures and keep one renderer", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/campus?place=library");
  const canvas = page.locator("canvas");
  await expect(canvas).toHaveAttribute("data-room", "campus");
  const baseline = {
    g: Number(await canvas.getAttribute("data-geometries")),
    t: Number(await canvas.getAttribute("data-textures")),
  };
  for (let i = 0; i < 8; i++) {
    await page.getByRole("button", { name: "Enter building" }).click();
    await expect(canvas).toHaveAttribute("data-room", "library");
    await page.getByRole("button", { name: "Back to campus" }).click();
    await expect(canvas).toHaveAttribute("data-room", "campus");
  }
  await expect(canvas).toHaveCount(1);
  expect(
    Number(await canvas.getAttribute("data-geometries")),
  ).toBeLessThanOrEqual(baseline.g + 1);
  expect(
    Number(await canvas.getAttribute("data-textures")),
  ).toBeLessThanOrEqual(baseline.t + 1);
});
test("non-WebGL Home hides live controls and all six room galleries remain functional", async ({
  page,
}) => {
  await page.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (type, ...args) {
      return type.includes("webgl") ? null : original.call(this, type, ...args);
    };
  });
  await page.goto("/");
  await expect(page.locator(".fallback-campus-image")).toBeVisible();
  await expect(page.locator("#hero-mode-label")).not.toContainText("LIVE 3D");
  await expect(page.locator("[data-home-reset]")).toBeHidden();
  await expect(page.locator(".hero-coordinate")).toBeHidden();
  for (const [place, room, name] of entries) {
    await page.goto("/campus?place=" + place);
    await expect(page.locator("#map-container")).toBeVisible();
    await expect(page.locator(".camera-tools")).toBeHidden();
    await page.getByRole("button", { name: "Enter building" }).click();
    await expect(page.locator(".interior-gallery")).toBeVisible();
    await expect(page.locator("#interior-shell h2")).toHaveText(name);
    await page.locator('[data-gallery-angle="2"]').click();
    await expect(page.locator(".interior-gallery img")).toHaveAttribute(
      "src",
      `/images/interior-${room}-detail.webp`,
    );
    await page.locator("[data-room-hotspot]").first().click();
    await expect(page.locator("#hotspot-description p")).not.toContainText(
      "Choose a numbered",
    );
    await page.getByRole("button", { name: "Back to campus" }).click();
    await expect(page.locator("#map-container")).toBeVisible();
  }
});
test("desktop panels reserve canvas space; mobile sheet collapses and room remains usable", async ({
  page,
}) => {
  await page.goto("/campus?place=library");
  await expect(page.locator("canvas")).toBeVisible();
  await expect(page.locator(".place-directory")).toBeHidden();
  const stage = await page.locator(".explorer-stage").boundingBox(),
    details = await page.locator("#place-panel").boundingBox();
  expect(stage.width).toBeGreaterThan(900);
  expect(stage.x + stage.width).toBeLessThanOrEqual(details.x);
  await page.getByRole("button", { name: "All places" }).click();
  await expect(page.locator(".place-directory")).toBeVisible();
  await page.locator('[data-select="library"]').click();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload();
  await page.getByRole("button", { name: "Collapse place details" }).click();
  await expect(page.locator("#place-panel")).toHaveClass(/collapsed/);
  await page.getByRole("button", { name: "Enter building" }).click();
  await expect(page.locator('canvas[data-room="library"]')).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Back to campus" }),
  ).toBeVisible();
  await page.screenshot({
    path: "/workspace/outputs/serenity-upgrade/after/mobile-library.png",
  });
  await page.keyboard.press("Escape");
  await expect(page.locator("#interior-shell")).toBeHidden();
});
test("browser Forward restores a room and its return action uses browser history", async ({ page }) => {
  await page.goto("/campus?place=library");
  await page.getByRole("button", { name: "Enter building" }).click();
  await expect(page.locator('canvas[data-room="library"]')).toBeVisible();
  await page.goBack();
  await expect(page.locator('canvas[data-room="campus"]')).toBeVisible();
  await page.goForward();
  await expect(page.locator('canvas[data-room="library"]')).toBeVisible();
  await page.getByRole("button", { name: "Back to campus" }).click();
  await expect(page.locator('canvas[data-room="campus"]')).toBeVisible();
  await page.goForward();
  await expect(page.locator('canvas[data-room="library"]')).toBeVisible();
});
test("losing a room WebGL context opens its gallery and allows a fresh 3D retry", async ({ page }) => {
  await page.goto("/campus?place=library&interior=library");
  const canvas = page.locator('canvas[data-room="library"]');
  await expect(canvas).toBeVisible();
  await canvas.evaluate((c) => c.getContext("webgl2").getExtension("WEBGL_lose_context").loseContext());
  await expect(page.locator(".interior-gallery")).toBeVisible();
  await expect(page.locator("#room-mode-label")).toContainText("INTERIOR GALLERY");
  await page.locator("[data-room-hotspot]").first().click();
  await expect(page.locator("#hotspot-description p")).toContainText("reading chairs");
  await page.getByRole("button", { name: "Back to campus" }).click();
  await expect(page.locator("#map-container")).toBeVisible();
  await page.getByRole("button", { name: "3D view", exact: true }).click();
  await expect(page.locator('canvas[data-room="campus"]')).toBeVisible();
  await expect(page.locator("#place-panel h2")).toHaveText("Hillside Library");
});
test("two-finger touch rotates an interior while one-finger vertical touch scrolls the page", async ({ browser }) => {
  const context = await browser.newContext({ baseURL: "http://127.0.0.1:4173", viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.goto("/campus?place=tech-lab&interior=technology-lab");
  const canvas = page.locator('canvas[data-room="technology-lab"]');
  await expect(canvas).toBeVisible();
  const capture = { style: "#interior-shell,.room-markers{visibility:hidden!important}" };
  const before = await canvas.screenshot(capture);
  const bounds = await canvas.boundingBox();
  const session = await context.newCDPSession(page);
  // Find a free part of the actual canvas, avoiding the projected hotspot buttons.
  const origin = await page.evaluate((b) => {
    for (const fy of [0.4, 0.5, 0.6, 0.3])
      for (const fx of [0.1, 0.2, 0.3]) {
        const x = b.x + b.width * fx, y = b.y + b.height * fy;
        if ([x, x + 100, x + 140].every((px) => document.elementFromPoint(px, y)?.tagName === "CANVAS")) return {x,y};
      }
    throw Error("No unobstructed touch area");
  }, bounds);
  const points = (dx) => [
    { x: origin.x + dx, y: origin.y, id: 1 },
    { x: origin.x + 100 + dx, y: origin.y, id: 2 },
  ];
  await session.send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: points(0) });
  for (let i = 1; i <= 8; i++) await session.send("Input.dispatchTouchEvent", { type: "touchMove", touchPoints: points(i * 5) });
  await session.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
  await page.waitForTimeout(80);
  expect(before.equals(await canvas.screenshot(capture))).toBe(false);
  const scrollBefore = await page.evaluate(() => scrollY);
  const startY = Math.min(640, bounds.y + bounds.height * 0.6);
  await session.send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [{ x: 190, y: startY, id: 1 }] });
  for (let i = 1; i <= 8; i++) await session.send("Input.dispatchTouchEvent", { type: "touchMove", touchPoints: [{ x: 190, y: startY - i * 15, id: 1 }] });
  await session.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
  await expect.poll(() => page.evaluate(() => scrollY)).toBeGreaterThan(scrollBefore);
  await context.close();
});
test("keyboard presets and mouse orbit both change the interior view without leaving the room", async ({
  page,
}) => {
  await page.goto("/campus?place=tech-lab&interior=technology-lab");
  await expect(
    page.locator('canvas[data-room="technology-lab"]'),
  ).toBeVisible();
  const capture = {
    style: "#interior-shell,.room-markers{visibility:hidden!important}",
  };
  const before = await page.locator("canvas").screenshot(capture);
  await page.getByRole("button", { name: /Another view/ }).click();
  const preset = await page.locator("canvas").screenshot(capture);
  expect(before.equals(preset)).toBe(false);
  const bounds = await page.locator("canvas").boundingBox();
  await page.mouse.move(
    bounds.x + bounds.width * 0.5,
    bounds.y + bounds.height * 0.42,
  );
  await page.mouse.down();
  await page.mouse.move(
    bounds.x + bounds.width * 0.6,
    bounds.y + bounds.height * 0.45,
    { steps: 8 },
  );
  await page.mouse.up();
  const orbited = await page.locator("canvas").screenshot(capture);
  expect(orbited.equals(preset)).toBe(false);
  await expect(page.locator("canvas")).toHaveAttribute(
    "data-room",
    "technology-lab",
  );
});
