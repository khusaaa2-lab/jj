import { test, expect } from "@playwright/test";
import { noGL, readyCampus, shot, noOverflow } from "./helpers.js";

test("approved image-first home, reversible scroll, and progressively loaded real 3D campus", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  const failed = [];
  page.on("response", (r) => {
    if (r.status() >= 400) failed.push(r.url());
  });
  await page.goto("/");
  await expect(page.locator(".hero-image")).toHaveAttribute(
    "src",
    "/media/campus/approved.webp",
  );
  await expect(page.locator("canvas")).toHaveCount(0);
  await expect(page.locator("h1")).toContainText("Room to learn");
  await shot(page, "home-en");
  const first = await page
    .locator(".home-hero")
    .evaluate((el) => el.style.getPropertyValue("--scroll"));
  await page.evaluate(() => scrollTo(0, 500));
  await page.waitForTimeout(100);
  const second = await page
    .locator(".home-hero")
    .evaluate((el) => el.style.getPropertyValue("--scroll"));
  expect(Number(second)).toBeGreaterThan(Number(first));
  await page.evaluate(() => scrollTo(0, 0));
  await page.waitForTimeout(100);
  expect(
    Number(
      await page
        .locator(".home-hero")
        .evaluate((el) => el.style.getPropertyValue("--scroll")),
    ),
  ).toBeCloseTo(Number(first), 2);
  await page.locator(".home-model-wrap").scrollIntoViewIfNeeded();
  await readyCampus(page);
  expect(await page.locator("#campus-scene").evaluate(e=>e.serenity.diagnostics().triangles)).toBeGreaterThan(10000);
  await expect(page.locator("#hero-mode-label")).toContainText("3D CAMPUS");
  await shot(page, "home-live-campus");
  expect(errors).toEqual([]);
  expect(failed).toEqual([]);
});
test("all six routes render and refresh in both complete languages", async ({
  page,
}) => {
  await noGL(page);
  for (const lang of ["ru", "en"]) {
    await page.goto("/");
    await page.locator(`[data-language=${lang}]`).click();
    for (const route of [
      "/",
      "/campus",
      "/learning",
      "/life",
      "/events",
      "/project",
    ]) {
      await page.goto(route);
      await expect(page.locator("html")).toHaveAttribute("lang", lang);
      await expect(page.locator("h1")).toBeVisible();
      const heading = await page.locator("h1").innerText();
      if (lang === "ru") expect(heading).toMatch(/[а-яё]/i);
      else expect(heading).not.toMatch(/[а-яё]/i);
      await page.reload();
      await expect(page.locator("h1"))
        .toHaveText(heading.replace(/\n/g, " "), { useInnerText: true })
        .catch(async () =>
          expect(await page.locator("h1").innerText()).toBe(heading),
        );
      if (route === "/campus")
        await expect(page.locator(".place-row")).toHaveCount(13);
    }
  }
});
test("Russian browser default, language persistence and unsaved form values survive switching", async ({
  browser,
}) => {
  const context = await browser.newContext({ locale: "ru-RU" });
  const page = await context.newPage();
  await page.goto("/project");
  await expect(page.locator("html")).toHaveAttribute("lang", "ru");
  await page.locator("[name=title]").fill("Новый школьный сад");
  await page
    .locator("textarea[name=description]")
    .fill("Место для совместных растений и полезных исследований.");
  await page.locator("[data-language=en]").click();
  await expect(page.locator("[name=title]")).toHaveValue("Новый школьный сад");
  await expect(page.locator("#idea-form label").first()).toContainText(
    "Give your idea",
  );
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await context.close();
});
test("deep link, keyboard map selection, route, favourites, filters and reset", async ({
  page,
}) => {
  await page.goto("/campus?view=map&place=library");
  await expect(page.locator("#place-panel h2")).toContainText("Library");
  await page.locator("[data-show-route]").click();
  await expect(page.locator("#map-route polyline")).toHaveCount(1);
  await expect(page.locator("#route-description")).toContainText(
    "Main Building",
  );
  await page.locator("[data-favourite]").click();
  await page.locator("[data-close-place]").click();
  await expect(page.locator("[data-select=library]")).toBeFocused();
  await page.locator("[data-saved-filter]").click();
  await expect(page.locator(".place-row")).toHaveCount(1);
  await page.reload();
  await page.locator("[data-saved-filter]").click();
  await expect(page.locator(".place-row")).toHaveCount(1);
  await page.locator("[data-saved-filter]").click();
  await page.locator("#level-filter").selectOption("Lower");
  await expect(page.locator(".place-row")).toHaveCount(1);
  await expect(page.locator(".place-row")).toContainText("Games Lounge");
  await page.locator("#level-filter").selectOption("Upper");
  await expect(page.locator(".place-row")).toContainText("Quiet Room");
  await page.locator("#place-search").fill("not-a-place");
  await expect(page.locator(".empty-state")).toBeVisible();
  await page.locator("[data-clear-filters]").click();
  await expect(page.locator(".place-row")).toHaveCount(13);
  const marker = page.locator(".map-place[data-place=workshop]");
  await marker.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("#place-panel h2")).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(page.locator("[data-select=workshop]")).toBeFocused();
});
test("tour is one focused state; next, previous, exit, explicit resume and finish work", async ({
  page,
}) => {
  await page.goto("/campus?view=map");
  await page.locator("[data-tour-start]").click();
  await expect(page.locator(".explorer")).toHaveAttribute("data-mode", "tour");
  await expect(page.locator(".place-directory")).toBeHidden();
  await expect(page.locator("#place-panel")).toBeHidden();
  await page.locator("[data-tour-next]").click();
  await expect(page.locator(".tour-location")).toContainText("Learning");
  await page.locator("[data-tour-back]").click();
  await expect(page.locator(".tour-location")).toContainText("Courtyard");
  await page.locator("[data-tour-next]").click();
  await page.locator("[data-tour-next]").click();
  await page.locator("[data-tour-exit]").click();
  await expect(page.locator(".explorer")).toHaveAttribute(
    "data-mode",
    "selected",
  );
  await page.locator("[data-close-place]").click();
  await page.locator("[data-tour-resume]").click();
  await expect(page.locator(".tour-location")).toContainText("Technology");
  await page.locator("[data-tour-exit]").click();
  await page.reload();
  await expect(page.locator("#tour-panel")).toBeHidden();
  await page.locator("[data-close-place]").click();
  await page.locator("[data-tour-resume]").click();
  await expect(page.locator(".tour-location")).toContainText("Technology");
  for (let i = 2; i < 8; i++) await page.locator("[data-tour-next]").click();
  await expect(page.locator("#tour-panel")).toBeHidden();
  expect(
    await page.evaluate(
      () => JSON.parse(localStorage.getItem("serenity:v1")).tour,
    ),
  ).toBe(0);
});
test("legacy saved vote is preserved, changeable and persistent without invented totals", async ({
  page,
}) => {
  await page.addInitScript(() => {
    if (!localStorage.getItem("seeded")) {
      localStorage.setItem(
        "serenity:v1",
        JSON.stringify({
          version: 1,
          vote: "Makers Challenge",
          favourites: ["library"],
        }),
      );
      localStorage.setItem("seeded", "yes");
    }
  });
  await page.goto("/events");
  await expect(page.locator('[data-vote="Makers Challenge"]')).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  await page.locator('[data-vote="Nature and Discovery"]').click();
  await page.reload();
  await expect(
    page.locator('[data-vote="Nature and Discovery"]'),
  ).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".chosen")).toHaveCount(1);
  await page.locator("[data-language=ru]").click();
  await expect(page.locator(".chosen")).toContainText("Природа и открытия");
  expect(
    await page.evaluate(
      () => JSON.parse(localStorage.getItem("serenity:v1")).favourites,
    ),
  ).toEqual(["library"]);
});
test("one cancellable booking per day, multiple dates, translated feedback and persistence", async ({
  page,
}) => {
  await page.goto("/life");
  await page.locator("#booking-day").fill("2026-11-10");
  await page.locator("[name=device]").selectOption("PC 02");
  await page.locator("#booking-form button[type=submit]").click();
  await expect(page.locator("#booking-status")).toContainText("PC 02");
  await expect(
    page.locator("#booking-form button[type=submit]"),
  ).toBeDisabled();
  await page.locator("#booking-day").fill("2026-11-11");
  await expect(page.locator("#booking-form button[type=submit]")).toBeEnabled();
  await page.locator("[data-language=ru]").click();
  await expect(page.locator("#booking-day")).toHaveValue("2026-11-11");
  await page.locator("#booking-form button[type=submit]").click();
  await expect(page.locator("#booking-status")).toContainText(
    "На этом устройстве",
  );
  await page.reload();
  await page.locator("#booking-day").fill("2026-11-10");
  await expect(page.locator("#booking-status")).toContainText("PC 02");
  await page.locator("[data-cancel-booking]").click();
  await expect(page.locator("#booking-form button[type=submit]")).toBeEnabled();
  await page.locator("#booking-day").fill("2026-11-11");
  await expect(
    page.locator("#booking-form button[type=submit]"),
  ).toBeDisabled();
});
test("idea validation, escaped persistence, copy and clipboard failure are honest", async ({
  page,
}) => {
  await page.goto("/project");
  await page.locator("#idea-form button[type=submit]").click();
  await expect(page.locator("#idea-status")).toContainText("3–80");
  await expect(page.locator("[name=title]")).toBeFocused();
  await page.locator("[name=title]").fill("<img src=x onerror=alert(1)>");
  await page.locator("textarea[name=description]").fill("Short");
  await page.locator("#idea-form button[type=submit]").click();
  await expect(page.locator("#idea-status")).toContainText("20–1500");
  await page
    .locator("textarea[name=description]")
    .fill("A garden where students can learn about plants together.");
  await page.locator("#idea-form button[type=submit]").click();
  await page.reload();
  await expect(page.locator("[name=title]")).toHaveValue(
    "<img src=x onerror=alert(1)>",
  );
  await page.evaluate(() =>
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: async (value) => {
          window.copied = value;
        },
      },
    }),
  );
  await page.locator("[data-copy-idea]").click();
  expect(await page.evaluate(() => window.copied)).toContain("A garden");
  await expect(page.locator("#idea-status")).toContainText("Nothing was sent");
  await page.evaluate(() =>
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: async () => {
          throw Error("blocked");
        },
      },
    }),
  );
  await page.locator("[data-copy-idea]").click();
  await expect(page.locator("#idea-status")).toContainText(
    "Clipboard is unavailable",
  );
  await page.locator("[data-language=ru]").click();
  await page.locator("[data-copy-idea]").click();
  await expect(page.locator("#idea-status")).toContainText(
    "Буфер обмена недоступен",
  );
});
test("blocked storage retains in-memory state and both languages remain usable", async ({
  page,
}) => {
  await page.addInitScript(() =>
    Object.defineProperty(window, "localStorage", {
      get() {
        throw Error("blocked");
      },
    }),
  );
  await page.goto("/events");
  await page.locator('[data-vote="Culture Festival"]').click();
  await expect(page.locator(".chosen")).toHaveCount(1);
  await expect(page.locator(".form-status")).toContainText(
    "Storage is unavailable",
  );
  await page.locator("[data-language=ru]").click();
  await expect(page.locator(".chosen")).toContainText("Фестиваль культур");
  await expect(page.locator(".form-status")).toContainText(
    "Хранилище недоступно",
  );
});
test("corrupt and stale local state safely recover", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("serenity:v1", "{bad"));
  await page.goto("/events");
  await expect(page.locator(".vote-option")).toHaveCount(3);
  await page.locator('[data-vote="Makers Challenge"]').click();
  await expect(page.locator(".chosen")).toHaveCount(1);
});
test("rapid view switches cancel stale scene loads and retain one renderer", async ({page}) => {
  await page.goto('/campus?view=map');
  for(let i=0;i<3;i++) { await page.locator('[data-view=3d]').click(); await page.locator('[data-view=map]').click(); }
  await expect(page.locator('.reference-viewport')).toHaveCount(0);
  await page.locator('[data-view=3d]').click();await readyCampus(page);
  await expect(page.locator('.reference-viewport')).toHaveCount(1);
});
test("audio is strictly opt-in, volume and mute work, hidden tabs suspend it", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute(
    "data-audio",
    "uninitialised",
  );
  await page.locator(".sound-menu summary").click();
  await expect(page.locator("[data-sound]")).toHaveAttribute(
    "aria-pressed",
    "false",
  );
  await page.locator("[data-sound]").click();
  await expect(page.locator("[data-sound]")).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  await expect(page.locator("html")).toHaveAttribute("data-audio", "running");
  await page.locator("[data-volume]").fill("0");
  await expect(page.locator("[data-volume]")).toHaveValue("0");
  await page.locator("[data-volume]").fill("17");
  await page.evaluate(() => {
    Object.defineProperty(document, "hidden", {
      configurable: true,
      value: true,
    });
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await expect(page.locator("html")).toHaveAttribute("data-audio", "suspended");
  await page.evaluate(() => {
    Object.defineProperty(document, "hidden", {
      configurable: true,
      value: false,
    });
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await expect(page.locator("html")).toHaveAttribute("data-audio", "running");
  await page.locator("[data-sound]").click();
  await expect(page.locator("html")).toHaveAttribute("data-audio", "suspended");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute(
    "data-audio",
    "uninitialised",
  );
});
test("mobile menu, coming-soon dialog and keyboard focus restoration", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/project");
  await page.locator(".menu-button").click();
  await expect(page.locator("#navigation")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator(".menu-button")).toBeFocused();
  await page.locator("[data-telegram]").click();
  await expect(page.locator("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator("[data-telegram]")).toBeFocused();
});
test("all pages fit 360, 390, 768, 1280 and 1440 widths without horizontal overflow", async ({
  page,
}) => {
  test.setTimeout(90000);
  await noGL(page);
  await page.goto("/");
  await page.locator("[data-language=ru]").click();
  for (const width of [360, 390, 768, 1280, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of [
      "/",
      "/campus",
      "/learning",
      "/life",
      "/events",
      "/project",
    ]) {
      await page.goto(route);
      await expect(page.locator("h1")).toBeVisible();
      await noOverflow(page);
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await shot(page, "home-ru-mobile");
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  await shot(page, "home-ru");
  await page.goto("/learning");
  await shot(page, "learning-ru", true);
  await page.goto("/life");
  await shot(page, "life-ru", true);
  await page.goto("/events");
  await shot(page, "events-ru", true);
  await page.goto("/project");
  await shot(page, "project-ru", true);
});
test("reduced motion keeps content and navigation available without constant exterior motion", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  expect(
    await page
      .locator(".chapter-frame")
      .first()
      .evaluate((el) => getComputedStyle(el).position),
  ).toBe("relative");
  await page.goto("/campus");
  await readyCampus(page);
  await page.waitForTimeout(200);
  const camera = await page.locator("#campus-scene").getAttribute("data-camera");
  await page.waitForTimeout(850);
  await expect(page.locator("#campus-scene")).toHaveAttribute("data-camera",camera);
  await page.locator("[data-select=library]").click();
  await expect(page.locator("#place-panel")).toContainText("Library");
});
