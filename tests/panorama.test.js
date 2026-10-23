import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { panoramaLayout } from "../src/panorama.js";
import {
  panoramaAssets,
  interiorForPlace,
  roomContent,
} from "../src/content.js";
test("ten distinct room panoramas have three correctly placed meaningful details", async () => {
  assert.equal(Object.keys(panoramaAssets).length, 10);
  assert.equal(new Set(Object.values(interiorForPlace)).size, 10);
  assert.notEqual(interiorForPlace["dining-a"], interiorForPlace["dining-b"]);
  for (const id of Object.keys(panoramaAssets)) {
    const room = roomContent(id);
    assert.equal(room.hotspots.length, 3);
    assert.equal(new Set(room.hotspots.map((h) => h.id)).size, 3);
    for (const h of room.hotspots) {
      assert.ok(h.x > 0 && h.x < 1 && h.y > 0 && h.y < 1);
      assert.ok(h.label && h.text.length > 70);
    }
    const bytes = await readFile(
      new URL(`../public/media/${room.image}.webp`, import.meta.url),
    );
    assert.equal(bytes.toString("ascii", 0, 4), "RIFF");
    assert.ok(bytes.length > 100000);
  }
  assert.equal(interiorForPlace["football-field"], undefined);
  assert.equal(interiorForPlace["courtyard"], undefined);
});
test("bounded perspective layouts never expose borders at extremes, on resizing or zooming", () => {
  for (const w of [320, 360, 390, 768, 1280, 1440])
    for (const h of [320, 360, 590])
      for (const zoom of [1, 1.2, 2.4])
        for (const x of [-1e5, -400, 0, 400, 1e5])
          for (const y of [-1e5, 0, 1e5]) {
            const p = panoramaLayout(w, h, 3, zoom, x, y),
              left = (w - p.imageWidth) / 2 + p.x,
              top = (h - p.imageHeight) / 2 + p.y;
            assert.ok(left <= 1e-8 && top <= 1e-8);
            assert.ok(
              left + p.imageWidth >= w - 1e-8 &&
                top + p.imageHeight >= h - 1e-8,
            );
            assert.ok(Math.abs(p.imageWidth / p.imageHeight - 3) < 1e-8);
          }
});
test("the asset manifest accounts for the master and every supplied interior", async () => {
  const manifest = JSON.parse(
    await readFile(
      new URL("../public/media/asset-map.json", import.meta.url),
      "utf8",
    ),
  );
  assert.equal(manifest.assets.length, 11);
  for (const a of manifest.assets) {
    assert.equal(a.originalSHA256.length, 64);
    assert.ok(a.consumers.length);
    assert.ok(
      (await readFile(new URL("../public" + a.src, import.meta.url))).length ===
        a.bytes,
    );
  }
});
