import { test, expect } from "@playwright/test";
test("home renders genuine 3D without page errors or failed resources", async ({
  page,
}) => {
  const errors = [],
    failed = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("requestfailed", (r) => failed.push(r.url()));
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Room to learn. Space to become." }),
  ).toBeVisible();
  await expect(page.locator("#campus-scene canvas")).toBeVisible();
  await expect(page.locator(".scene-loading")).toHaveCount(0);
  await page.waitForTimeout(500);
  expect(
    await page.locator("canvas").evaluate((c) => !!c.getContext("webgl2")),
  ).toBe(true);
  await page.screenshot({ path: "/tmp/serenity-artifacts/home-desktop.png" });
  expect(errors).toEqual([]);
  expect(failed).toEqual([]);
});
test("all six pages open directly, refresh and expose their real content", async ({
  page,
}) => {
  for (const [path, heading] of [
    ["/", "Room to learn."],
    ["/campus?view=map", "Find your place."],
    ["/learning", "Good questions."],
    ["/life", "A little time to play."],
    ["/events", "Different stories."],
    ["/project", "A school imagined."],
  ]) {
    await page.goto(path);
    await expect(page.locator("main h1")).toContainText(heading);
    await page.reload();
    await expect(page.locator("main h1")).toContainText(heading);
  }
});
test("deep selection, map/list sync, filtering, route, favourites and reset", async ({
  page,
}) => {
  await page.goto("/campus?place=library&view=map");
  await expect(page.locator("#place-panel h2")).toHaveText("Hillside Library");
  await expect(page.locator(".map-place.active")).toHaveAttribute(
    "data-place",
    "library",
  );
  await page.getByRole("button", { name: "Show route", exact: true }).click();
  await expect(page.locator("#route-description")).toContainText(
    "Learning Studios",
  );
  await expect(page.locator("#map-route polyline")).toBeVisible();
  await page.getByRole("button", { name: "Save place", exact: true }).click();
  await page.reload();
  await expect(page.locator("[data-favourite]")).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  await page.getByRole("button", { name: "Close place details" }).click();
  await page.getByRole("button", { name: "Show saved places" }).click();
  await expect(page.locator(".place-row")).toHaveCount(1);
  await page.getByRole("button", { name: "Show saved places" }).click();
  await page.getByLabel("Search campus places").fill("games");
  await expect(page.locator(".place-row")).toHaveCount(1);
  await page.locator(".place-row").click();
  await expect(page).toHaveURL(/place=gaming-zone/);
  await expect(page.locator("#place-panel h2")).toHaveText("Games Lounge");
  await page.getByRole("button", { name: "Show route", exact: true }).click();
  await expect(page.locator("#route-description")).toContainText(
    "internal stairs or lift",
  );
  await expect(page.locator(".camera-tools")).toBeHidden();
  await page.getByRole("button", { name: "Close place details" }).click();
  await expect(page.locator("#place-panel")).toBeHidden();
  expect(page.url()).not.toContain("place=");
});
test("level filters expose both interior places and empty results recover", async ({
  page,
}) => {
  await page.goto("/campus?view=map");
  await page.getByLabel("Level", { exact: true }).selectOption("Upper");
  await expect(page.locator(".place-row")).toHaveCount(1);
  await expect(page.locator(".place-row")).toContainText("Quiet Room");
  await page.getByLabel("Search campus places").fill("not a room");
  await expect(page.locator(".empty-state")).toBeVisible();
  await page.getByRole("button", { name: /Clear filters/ }).click();
  await expect(page.locator(".place-row")).toHaveCount(13);
});
test("guided tour advances only by action, goes back, exits and completes", async ({
  page,
}) => {
  await page.goto("/campus?view=map");
  await page.getByRole("button", { name: /Take a little tour/ }).click();
  await expect(page.locator("#tour-panel")).toContainText("1 OF 8");
  await page.waitForTimeout(300);
  await expect(page.locator("#tour-panel")).toContainText("1 OF 8");
  await page.getByRole("button", { name: /Next stop/ }).click();
  await expect(page.locator("#tour-panel")).toContainText("2 OF 8");
  await page.getByRole("button", { name: "Previous tour stop" }).click();
  await expect(page.locator("#tour-panel")).toContainText("1 OF 8");
  for (let i = 0; i < 7; i++)
    await page.getByRole("button", { name: /Next stop/ }).click();
  await expect(page.locator("#tour-panel")).toContainText("8 OF 8");
  await page.getByRole("button", { name: /Finish tour/ }).click();
  await expect(page.locator("#tour-panel")).toBeHidden();
});
test("local voting changes one active selection and persists it", async ({
  page,
}) => {
  await page.goto("/events");
  await page.locator('[data-vote="Culture Festival"]').click();
  await page.locator('[data-vote="Makers Challenge"]').click();
  await expect(page.locator("[data-vote][aria-pressed=true]")).toHaveCount(1);
  await page.reload();
  await expect(page.locator('[data-vote="Makers Challenge"]')).toHaveAttribute(
    "aria-pressed",
    "true",
  );
});
test("booking confirmation, one booking per day, persistence and cancellation", async ({
  page,
}) => {
  await page.goto("/life");
  await page.getByRole("button", { name: /Save demo booking/ }).click();
  await expect(page.locator(".booking-confirmation")).toContainText("PC 01");
  await expect(
    page.getByRole("button", { name: /Save demo booking/ }),
  ).toBeDisabled();
  await page.reload();
  await expect(page.locator(".booking-confirmation")).toBeVisible();
  await page.getByRole("button", { name: "Cancel demo booking" }).click();
  await expect(page.locator(".booking-confirmation")).toHaveCount(0);
  await expect(
    page.getByRole("button", { name: /Save demo booking/ }),
  ).toBeEnabled();
});
test("idea validation, safe draft persistence and accessible FAQ", async ({
  page,
}) => {
  await page.goto("/project");
  await page.getByRole("button", { name: /Save draft/ }).click();
  await expect(page.locator("#idea-status")).toContainText("3–80");
  await page
    .getByLabel("Give your idea a title")
    .fill("A rainy day making club");
  await page
    .getByLabel("Tell us a little more")
    .fill(
      "A supervised indoor space where students can make and repair small things together.",
    );
  await page.getByRole("button", { name: /Save draft/ }).click();
  await expect(page.locator("#idea-status")).toContainText("Nothing was sent");
  await page.reload();
  await expect(page.getByLabel("Give your idea a title")).toHaveValue(
    "A rainy day making club",
  );
  await page.getByText("Is Serenity a real school?").click();
  await expect(page.locator("details[open]")).toContainText("fictional");
});
test("blocked storage retains a usable in-memory vote", async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(window, "localStorage", {
      get() {
        throw new DOMException("Blocked", "SecurityError");
      },
    });
  });
  await page.goto("/events");
  await page.locator('[data-vote="Culture Festival"]').click();
  await expect(page.locator('[data-vote="Culture Festival"]')).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  await expect(page.locator("#notice")).toContainText("this visit only");
});
test("corrupted and stale saved state safely recover", async ({ page }) => {
  await page.addInitScript(() =>
    localStorage.setItem("serenity:v1", "{broken"),
  );
  await page.goto("/events");
  await expect(page.locator("[data-vote]")).toHaveCount(3);
  await page.locator('[data-vote="Nature and Discovery"]').click();
  await expect(
    page.locator('[data-vote="Nature and Discovery"]'),
  ).toHaveAttribute("aria-pressed", "true");
});
test("no WebGL falls back to the complete functional map and list", async ({
  page,
}) => {
  await page.addInitScript(() => {
    const get = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (t, ...args) {
      return t.includes("webgl") ? null : get.call(this, t, ...args);
    };
  });
  await page.goto("/campus?place=quiet-room");
  await expect(page.locator("#map-container")).toBeVisible();
  await expect(page.locator(".place-row")).toHaveCount(13);
  await expect(page.locator("#place-panel h2")).toHaveText("Quiet Room");
});
test("mobile navigation, details, Escape and focus restoration", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(page.locator("canvas")).toBeVisible();
  await page.screenshot({ path: "/tmp/serenity-artifacts/home-mobile.png" });
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page.getByRole("link", { name: "Campus", exact: true }).click();
  await expect(page.locator("main h1")).toHaveText("Find your place.");
  await page.locator('[data-select="library"]').click();
  await expect(page.locator("#place-panel")).toBeVisible();
  const bounds = await page.locator("#place-panel").boundingBox();
  expect(bounds.y).toBeGreaterThan(250);
  await page.keyboard.press("Escape");
  await expect(page.locator("#place-panel")).toBeHidden();
});
test("all target widths have no horizontal overflow on every page", async ({
  page,
}) => {
  for (const width of [360, 390, 768, 1280, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of [
      "/",
      "/campus?view=map",
      "/learning",
      "/life",
      "/events",
      "/project",
    ]) {
      await page.goto(path);
      await expect(page.locator("main h1")).toBeVisible();
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth + 1,
        ),
        `${path} at ${width}`,
      ).toBe(true);
    }
  }
});
test("3D camera selection changes the view, reset restores it, and context loss recovers", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("/campus");
  await expect(page.locator("canvas")).toBeVisible();
  await expect(page.locator(".scene-loading")).toHaveCount(0);
  await page.waitForTimeout(150);
  const capture = {
    style:
      ".toast,.place-directory,.scene-markers,.place-panel,.camera-tools,.tour-launch,.explorer-help,.map-legend{visibility:hidden!important}",
  };
  const initial = await page.locator("canvas").screenshot(capture);
  await page.locator('[data-select="library"]').click();
  await page.waitForTimeout(850);
  const framed = await page.locator("canvas").screenshot(capture);
  expect(initial.equals(framed)).toBe(false);
  await page.screenshot({ path: "/tmp/serenity-artifacts/campus-desktop.png" });
  await page.getByRole("button", { name: "Reset view", exact: true }).click();
  await page.waitForTimeout(850);
  const reset = await page.locator("canvas").screenshot(capture);
  expect(initial.equals(reset)).toBe(true);
  await page
    .locator("canvas")
    .evaluate((c) =>
      c.getContext("webgl2").getExtension("WEBGL_lose_context").loseContext(),
    );
  await expect(page.locator("#map-container")).toBeVisible();
  await expect(page.locator(".place-row")).toHaveCount(13);
  expect(errors).toEqual([]);
});
test("tour resume, keyboard map selection and details focus restoration", async ({
  page,
}) => {
  await page.goto("/campus?view=map");
  await page.locator('.map-place[data-place="library"]').focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("#place-panel h2")).toHaveText("Hillside Library");
  await page.keyboard.press("Escape");
  await expect(page.locator('.map-place[data-place="library"]')).toBeFocused();
  await page.getByRole("button", { name: /Take a little tour/ }).click();
  await page.getByRole("button", { name: /Next stop/ }).click();
  await page.getByRole("button", { name: /Next stop/ }).click();
  await page.getByRole("button", { name: "Exit tour" }).click();
  await page.reload();
  await page.getByRole("button", { name: /Resume your tour/ }).click();
  await expect(page.locator("#tour-panel")).toContainText("3 OF 8");
});
test("coming-soon dialog supports keyboard dismissal and returns focus", async ({
  page,
}) => {
  await page.goto("/project");
  const connect = page.getByRole("button", { name: "Let’s connect" });
  await connect.click();
  await expect(page.locator("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator("dialog")).toBeHidden();
  await expect(connect).toBeFocused();
});

test("rapid view changes cancel stale loads and keep a single WebGL renderer", async ({
  page,
}) => {
  await page.goto("/campus?view=map");
  await page.locator('[data-view="3d"]').evaluate((b) => {
    b.click();
    document.querySelector('[data-view="map"]').click();
  });
  await expect(page.locator("#map-container")).toBeVisible();
  await page.waitForTimeout(200);
  await expect(page.locator("canvas")).toHaveCount(0);
  await page.locator('[data-view="3d"]').evaluate((b) => {
    b.click();
    b.click();
  });
  await expect(page.locator("canvas")).toHaveCount(1);
  await expect(page.locator("canvas")).toBeVisible();
});

test("touch canvas allows page scrolling and reduced motion selects immediately", async ({
  browser,
}) => {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:4173/");
  await expect(page.locator("canvas")).toBeVisible();
  await expect(page.locator("canvas")).toHaveCSS("touch-action", "pan-y");
  const client = await context.newCDPSession(page);
  await client.send("Input.dispatchTouchEvent", {
    type: "touchStart",
    touchPoints: [{ x: 195, y: 730 }],
  });
  for (const y of [690, 650, 610, 570, 530]) {
    await client.send("Input.dispatchTouchEvent", {
      type: "touchMove",
      touchPoints: [{ x: 195, y }],
    });
    await page.waitForTimeout(20);
  }
  await client.send("Input.dispatchTouchEvent", {
    type: "touchEnd",
    touchPoints: [],
  });
  await expect.poll(() => page.evaluate(() => scrollY)).toBeGreaterThan(50);
  await page.goto("http://127.0.0.1:4173/campus");
  await expect(page.locator("canvas")).toBeVisible();
  await page.locator('[data-select="library"]').click();
  await expect(page.locator("#place-panel h2")).toHaveText("Hillside Library");
  await expect(page.locator(".place-marker.selected")).toContainText(
    "Hillside Library",
  );
  await page.screenshot({ path: "/tmp/serenity-artifacts/campus-mobile.png" });
  await context.close();
});
