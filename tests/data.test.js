import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  details,
  enrichPlaces,
  nodes,
  edges,
  routeTo,
  tourStops,
  campusBuildings,
} from "../src/data.js";
import { createStore, sanitise, validateIdea } from "../src/state.js";
const canonical = JSON.parse(
  await readFile(new URL("../public/data/places.json", import.meta.url)),
);
const ids = canonical.map((p) => p.id);
test("all thirteen canonical identities retain complete selectable place content", () => {
  assert.deepEqual(ids.sort(), Object.keys(details).sort());
  assert.equal(new Set(ids).size, 13);
  for (const p of enrichPlaces(canonical)) {
    assert.ok(
      p.name && p.description && p.rule && p.position && p.activities.length,
    );
    assert.ok(["Ground", "Upper", "Lower"].includes(p.level));
  }
});
test("every place is connected to the main entrance through actual graph edges", () => {
  for (const id of ids) {
    const route = routeTo(id);
    assert.equal(route[0], "main-building");
    assert.equal(route.at(-1), id);
    for (let i = 1; i < route.length; i++)
      assert.ok(
        edges.some((e) => e.includes(route[i - 1]) && e.includes(route[i])),
      );
  }
  assert.deepEqual(routeTo("not-a-place"), []);
  for (const [a, b] of edges) {
    assert.ok(nodes[a]);
    assert.ok(nodes[b]);
  }
});
test("interior routes enter the correct parent building and explain the level change", () => {
  assert.equal(routeTo("quiet-room").at(-2), "learning-wing");
  assert.equal(routeTo("gaming-zone").at(-2), "tech-lab");
  assert.match(details["quiet-room"].transition, /upstairs/);
  assert.match(details["gaming-zone"].transition, /lower-ground/);
  assert.deepEqual(
    details["quiet-room"].position,
    details["learning-wing"].position,
  );
});
test("eight tour stops follow the agreed sequence and return to the courtyard", () => {
  assert.deepEqual(
    tourStops.map((s) => s[0]),
    [
      "courtyard",
      "learning-wing",
      "tech-lab",
      "ideas-garden",
      "library",
      "gaming-zone",
      "football-field",
      "courtyard",
    ],
  );
  for (const [id, title, text] of tourStops) {
    assert.ok(ids.includes(id) && title && text);
  }
});
test("local state persists, sanitises stale fields and retains only valid demo records", () => {
  const memory = new Map();
  const storage = {
    getItem: (k) => memory.get(k) ?? null,
    setItem: (k, v) => memory.set(k, v),
  };
  const a = createStore(ids, storage);
  a.update((s) => {
    s.vote = "Makers Challenge";
    s.favourites = ["library", "library", "invalid"];
    s.bookings = {
      "2026-10-22": { device: "PC 01", slot: "12:00–12:20" },
      bad: { device: "unknown" },
    };
    s.tour = 4;
  });
  const b = createStore(ids, storage);
  assert.deepEqual(b.data.favourites, ["library"]);
  assert.equal(b.data.vote, "Makers Challenge");
  assert.equal(b.data.tour, 4);
  assert.deepEqual(Object.keys(b.data.bookings), ["2026-10-22"]);
  assert.equal(
    sanitise({ version: 0, vote: "Makers Challenge" }, ids).vote,
    null,
  );
  assert.deepEqual(
    sanitise({ version: 1, favourites: "wrong", draft: { title: {} } }, ids)
      .favourites,
    [],
  );
});
test("unavailable and corrupted storage do not prevent in-memory interactions", () => {
  const a = createStore(ids, {
    getItem() {
      throw Error("Blocked");
    },
    setItem() {
      throw Error("Blocked");
    },
  });
  a.update((s) => {
    s.vote = "Culture Festival";
  });
  assert.equal(a.data.vote, "Culture Festival");
  assert.equal(a.persistent, false);
  const b = createStore(ids, { getItem: () => "{bad", setItem() {} });
  b.update((s) => {
    s.favourites = ["library"];
  });
  assert.deepEqual(b.data.favourites, ["library"]);
});
test("idea validation enforces both boundaries and a known category", () => {
  assert.match(
    validateIdea({
      title: "Hi",
      category: "Campus",
      description: "A".repeat(30),
    }),
    /title/,
  );
  assert.match(
    validateIdea({
      title: "New idea",
      category: "Campus",
      description: "Too short",
    }),
    /20–1500/,
  );
  assert.match(
    validateIdea({
      title: "A".repeat(81),
      category: "Campus",
      description: "A".repeat(30),
    }),
    /title/,
  );
  assert.equal(
    validateIdea({
      title: "New idea",
      category: "Campus",
      description: "A".repeat(20),
    }),
    "",
  );
});

test("outdoor graph segments remain outside physical building footprints and the lake", () => {
  for (const [from, to] of edges) {
    const a = nodes[from],
      b = nodes[to];
    for (let step = 0; step <= 100; step++) {
      const t = step / 100,
        x = a[0] + (b[0] - a[0]) * t,
        z = a[1] + (b[1] - a[1]) * t;
      assert.ok(z > -37, `${from} → ${to} enters the lake`);
      for (const building of campusBuildings) {
        const inside =
          x > building.x - building.w / 2 &&
          x < building.x + building.w / 2 &&
          z > building.z - building.d / 2 &&
          z < building.z + building.d / 2;
        assert.equal(inside, false, `${from} → ${to} crosses ${building.id}`);
      }
    }
  }
});

test("six distinct interior scenes map only to their actual campus buildings", async () => {
  const { rooms, interiorForPlace } = await import("../src/interior-data.js");
  assert.equal(Object.keys(rooms).length, 6);
  assert.equal(interiorForPlace.library, "library");
  assert.equal(interiorForPlace["gaming-zone"], "games-lounge");
  assert.equal(interiorForPlace["dining-a"], interiorForPlace["dining-b"]);
  assert.equal(interiorForPlace["football-field"], undefined);
  for (const [id, room] of Object.entries(rooms)) {
    assert.equal(room.hotspots.length, 3);
    assert.equal(new Set(room.hotspots.map((h) => h.id)).size, 3);
    for (const h of room.hotspots) {
      assert.ok(h.point.length === 3 && h.text.length > 70);
    }
    assert.ok(room.size.every((n) => n > 0));
    assert.ok(Object.values(interiorForPlace).includes(id));
  }
});
test("all rendered editorial and fallback images exist and contain actual image bytes", async () => {
  const { rooms } = await import("../src/interior-data.js");
  const names = [
    "campus",
    "culture-festival",
    ...ids,
    ...Object.keys(rooms).flatMap((id) => [
      "interior-" + id,
      "interior-" + id + "-detail",
    ]),
  ];
  for (const name of names) {
    const bytes = await readFile(
      new URL("../public/images/" + name + ".webp", import.meta.url),
    );
    assert.equal(bytes.toString("ascii", 0, 4), "RIFF");
    assert.equal(bytes.toString("ascii", 8, 12), "WEBP");
    assert.ok(bytes.length > 5000, name + " must not be a tiny placeholder");
  }
});
