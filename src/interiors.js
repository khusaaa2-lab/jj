import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { rooms } from "./interior-data.js";
import { surfaceTexture, disposeScene } from "./materials.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { alpineRidge } from "./landscape.js";
import { batchStaticMeshes } from "./batch.js";

export function buildInterior(
  id,
  canvas,
  { aspect, mobile, onChange, onHotspot },
) {
  const data = rooms[id];
  if (!data) throw Error("Unknown room");
  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#dae4df");
  const [w, h, d] = data.size;
  const camera = new THREE.PerspectiveCamera(
    mobile ? 67 : 58,
    aspect,
    0.08,
    180,
  );
  camera.position.set(w * 0.37, Math.min(h - 0.7, 3.5), d * 0.39);
  const controls = new OrbitControls(camera, canvas);
  controls.target.set(-0.7, 1.25, -1.8);
  controls.enablePan = false;
  controls.enableDamping = false;
  controls.minDistance = 5;
  controls.maxDistance = 13;
  controls.minPolarAngle = 0.65;
  controls.maxPolarAngle = 1.58;
  controls.touches.ONE = mobile ? THREE.TOUCH.PAN : THREE.TOUCH.ROTATE;
  controls.touches.TWO = THREE.TOUCH.DOLLY_ROTATE;
  controls.update();
  canvas.style.touchAction = mobile ? "pan-y" : "none";
  function constrain() {
    camera.position.x = THREE.MathUtils.clamp(
      camera.position.x,
      -w / 2 + 0.5,
      w / 2 - 0.5,
    );
    camera.position.z = THREE.MathUtils.clamp(
      camera.position.z,
      -d / 2 + 0.6,
      d / 2 - 0.6,
    );
    camera.position.y = THREE.MathUtils.clamp(camera.position.y, 0.9, h - 0.5);
    camera.lookAt(controls.target);
    onChange();
  }
  controls.addEventListener("change", constrain);
  const materials = new Map();
  const mat = (color, extra = {}) => {
    const key =
      color + JSON.stringify(extra, (_, v) => (v?.isTexture ? v.uuid : v));
    if (!materials.has(key))
      materials.set(
        key,
        new THREE.MeshStandardMaterial({ color, roughness: 0.75, ...extra }),
      );
    return materials.get(key);
  };
  const stone = mat("#fffdf4", { map: surfaceTexture("stone", 2) }),
    wood = mat("#fff3df", { map: surfaceTexture("wood", 2) }),
    floor = mat("#fff7e8", { map: surfaceTexture(["main-hall", "dining-hall", "technology-lab"].includes(id) ? "tile" : "floor", 4) }),
    teal = mat("#28584e"),
    dark = mat("#354745"),
    ivory = mat("#e9e3d1"),
    gold = mat("#c4a26c"),
    green = mat("#6f8059");
  const boxGeo = new THREE.BoxGeometry(1, 1, 1),
    softGeo = new RoundedBoxGeometry(1, 1, 1, 2, 0.07),
    cylGeo = new THREE.CylinderGeometry(1, 1, 1, 20),
    sphereGeo = new THREE.IcosahedronGeometry(1, 2);
  const depthMaterial = new THREE.MeshDepthMaterial({
    depthPacking: THREE.RGBADepthPacking,
  });
  const add = (geo, material, pos, scale, parent = scene) => {
    const m = new THREE.Mesh(geo, material);
    m.position.set(...pos);
    m.scale.set(...scale);
    m.castShadow = true;
    m.receiveShadow = true;
    m.customDepthMaterial = depthMaterial;
    parent.add(m);
    return m;
  };
  const box = (m, p, s, parent) => add(boxGeo, m, p, s, parent),
    soft = (m, p, s, parent) => add(softGeo, m, p, s, parent),
    round = (m, p, s, parent) => add(cylGeo, m, p, s, parent);
  function rod(a, b, material = dark, radius = 0.025, parent = scene) {
    const start = new THREE.Vector3(...a), end = new THREE.Vector3(...b);
    const v = end.clone().sub(start);
    const m = round(material, start.add(end).multiplyScalar(0.5).toArray(), [radius, v.length(), radius], parent);
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), v.normalize());
    return m;
  }
  function notebook(x, z, colour = teal, y = 0.95) {
    soft(colour, [x, y, z], [0.47, 0.055, 0.33]);
    box(ivory, [x + 0.015, y + 0.025, z], [0.41, 0.015, 0.29]);
    rod([x - 0.05, y + 0.06, z - 0.1], [x + 0.13, y + 0.06, z + 0.08], gold, 0.012);
  }
  function rug(x, z, width, depth, colour = "#a6b2a0") {
    const material = mat(colour, { map: surfaceTexture("felt", 3) });
    soft(material, [x, 0.018, z], [width, 0.035, depth]);
    for (const side of [-1, 1]) box(mat("#c5c4ab"), [x + side * (width / 2 - 0.12), 0.038, z], [0.04, 0.008, depth - 0.12]);
  }
  function label(
    text,
    pos,
    width = 3,
    height = 0.75,
    background = "#164f48",
    rotation = 0,
  ) {
    const c = document.createElement("canvas");
    c.width = 768;
    c.height = 160;
    const ctx = c.getContext("2d");
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, 768, 160);
    ctx.fillStyle = "#f8f1df";
    ctx.font = "36px Georgia";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, 384, 80, 700);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    const m = new THREE.MeshStandardMaterial({ map: t, roughness: 0.8 });
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(width, height), m);
    plane.position.set(...pos);
    plane.rotation.y = rotation;
    scene.add(plane);
    return plane;
  }
  function plant(x, z, size = 1) {
    round(
      mat("#c1ad8a"),
      [x, 0.28 * size, z],
      [0.32 * size, 0.55 * size, 0.32 * size],
    );
    round(wood, [x, 0.85 * size, z], [0.04 * size, 1.25 * size, 0.04 * size]);
    for (let i = 0; i < 7; i++) {
      const a = i * 2.4;
      add(
        sphereGeo,
        green,
        [
          x + Math.cos(a) * 0.25 * size,
          (1.1 + i * 0.065) * size,
          z + Math.sin(a) * 0.25 * size,
        ],
        [0.34 * size, 0.19 * size, 0.23 * size],
      );
    }
  }
  function table(x, z, width = 2.8, depth = 1.6, roundTop = false) {
    if (roundTop) round(wood, [x, 0.83, z], [width / 2, 0.12, width / 2]);
    else box(wood, [x, 0.83, z], [width, 0.13, depth]);
    for (const dx of [-width * 0.37, width * 0.37])
      for (const dz of [-depth * 0.34, depth * 0.34])
        box(teal, [x + dx, 0.4, z + dz], [0.09, 0.8, 0.09]);
  }
  function chair(x, z, rotation = 0, colour = teal) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rotation;
    scene.add(g);
    soft(colour, [0, 0.48, 0], [0.58, 0.12, 0.58], g);
    soft(colour, [0, 0.91, -0.28], [0.59, 0.73, 0.1], g);
    for (const a of [-0.23, 0.23])
      for (const b of [-0.23, 0.23])
        box(wood, [a, 0.23, b], [0.06, 0.46, 0.06], g);
    if (id === "learning-studio")
      for (const a of [-0.23, 0.23])
        for (const b of [-0.23, 0.23]) round(dark, [a, 0.055, b], [0.045, 0.05, 0.045], g);
  }
  function armchair(x, z, rotation = 0) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rotation;
    scene.add(g);
    const fabric = mat("#d3cfb4", { roughness: 1, map: surfaceTexture("felt", 2) });
    soft(fabric, [0, 0.45, 0], [1.15, 0.38, 1.05], g);
    soft(fabric, [0, 1, -0.45], [1.15, 0.9, 0.18], g);
    soft(mat("#d3bd91"), [0.23, 0.88, -0.22], [0.42, 0.4, 0.15], g).rotation.z = -0.12;
    for (const dx of [-0.53, 0.53])
      box(wood, [dx, 0.7, 0], [0.16, 0.55, 1.1], g);
    for (const dx of [-0.4, 0.4])
      for (const dz of [-0.35, 0.35])
        box(wood, [dx, 0.15, dz], [0.1, 0.3, 0.1], g);
  }
  function shelf(x, z, width = 3.2, height = 3, rotation = 0) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rotation;
    scene.add(g);
    box(wood, [0, height / 2, -0.27], [width, height, 0.12], g);
    for (const dx of [-width / 2, width / 2])
      box(wood, [dx, height / 2, 0], [0.12, height, 0.7], g);
    for (let y = 0.25; y < height; y += 0.65) {
      box(wood, [0, y, 0], [width, 0.09, 0.7], g);
      for (let i = 0; i < Math.floor(width / 0.17); i++) {
        const bookHeight = 0.29 + ((i * 7 + Math.floor(y * 10)) % 5) * 0.045;
        const book = mat(
          ["#647b70", "#b19064", "#d0be92", "#7b8f9a", "#946c53"][i % 5],
        );
        const m = box(
          book,
          [-width / 2 + 0.16 + i * 0.17, y + bookHeight / 2 + 0.05, 0.02],
          [0.12, bookHeight, 0.43],
          g,
        );
        if (i % 7 === 0) m.rotation.z = 0.12;
      }
    }
  }
  function computer(x, z, rotation = 0) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rotation;
    scene.add(g);
    box(dark, [0, 1.26, 0], [0.82, 0.55, 0.07], g);
    box(
      mat("#648b89", { emissive: "#486a65", emissiveIntensity: 0.25 }),
      [0, 1.26, 0.045],
      [0.73, 0.44, 0.015],
      g,
    );
    box(dark, [0, 0.96, 0], [0.08, 0.19, 0.08], g);
    box(dark, [0, 0.88, 0.1], [0.35, 0.03, 0.28], g);
    box(mat("#e0ddd0"), [0, 0.92, 0.38], [0.62, 0.04, 0.22], g);
    soft(dark, [0.48, 0.93, 0.4], [0.1, 0.04, 0.17], g);
    // Monitor cable descends into a covered under-desk channel.
    rod([0, 1.18, -0.065], [0, 0.72, -0.15], dark, 0.015, g);
    rod([0, 0.72, -0.15], [-0.75, 0.72, -0.15], dark, 0.015, g);
    box(dark, [0, 0.69, -0.15], [1.65, 0.09, 0.12], g);
    for (let row = 0; row < 3; row++)
      for (let key = 0; key < 10; key++) box(mat("#b3b9ad"), [-0.26 + key * 0.057, 0.945, 0.32 + row * 0.06], [0.04, 0.012, 0.035], g);
    for (let j = 0; j < 4; j++)
      box(
        mat("#a4c2b0"),
        [-0.19, 1.35 - j * 0.065, 0.06],
        [0.26 + j * 0.05, 0.017, 0.006],
        g,
      );
  }
  function door(x, z, text, rotation = 0) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rotation;
    scene.add(g);
    box(teal, [0, 1.23, 0], [1.35, 2.46, 0.12], g);
    box(
      mat("#d3e1d5", { transparent: true, opacity: 0.45 }),
      [0, 1.5, 0.08],
      [1.02, 1.4, 0.04],
      g,
    );
    box(gold, [0.47, 1.05, 0.12], [0.08, 0.12, 0.07], g);
    label(text, [x, 2.9, z + 0.08], 2.2, 0.43, "#65745e", rotation);
  }
  scene.add(new THREE.HemisphereLight("#fff3dc", "#a0ae9a", 2.25));
  const sunlight = new THREE.DirectionalLight("#fff2d6", 3.3);
  sunlight.position.set(-5, 9, -9);
  sunlight.castShadow = !mobile;
  sunlight.shadow.mapSize.set(1024, 1024);
  Object.assign(sunlight.shadow.camera, {
    left: -12,
    right: 12,
    top: 12,
    bottom: -12,
    near: 0.5,
    far: 45,
  });
  sunlight.shadow.normalBias = 0.035;
  scene.add(sunlight);
  box(floor, [0, -0.13, 0], [w, 0.26, d]);
  // The north elevation is actually open; glazing frames a dimensional landscape.
  box(stone, [0, 0.4, -d / 2], [w, 0.8, 0.28]);
  box(stone, [0, h - 0.25, -d / 2], [w, 0.5, 0.28]);
  for (let x = -w / 2; x <= w / 2 + 0.1; x += w / 6) {
    box(wood, [x, h / 2, -d / 2], [0.16, h, 0.24]);
    box(wood, [x, h - 0.1, 0], [0.16, 0.25, d]);
  }
  box(wood, [0, h * 0.5, -d / 2], [w, 0.09, 0.12]);
  for (const side of [-1, 1]) {
    box(stone, [(side * w) / 2, h / 2, 0], [0.23, h, d]);
    box(wood, [side * (w / 2 - 0.14), 0.3, 0], [0.07, 0.6, d]);
    box(ivory, [side * (w / 2 - 0.14), 0.08, 0], [0.06, 0.13, d]);
    box(wood, [side * (w / 2 - 0.14), h - 0.24, 0], [0.09, 0.12, d]);
  }
  // Back wall is below the viewing eye line; the room remains explorable without wall clipping.
  box(stone, [0, 0.42, d / 2], [w, 0.84, 0.2]);
  box(mat("#f0ead9"), [0, h + 0.1, 0], [w, 0.2, d]);
  const landscape = new THREE.Group();
  scene.add(landscape);
  box(mat("#9eb39a"), [0, -0.3, -d / 2 - 18], [100, 0.2, 35], landscape);
  if (["library", "dining-hall"].includes(id))
    box(mat("#7fa8a7", { roughness: 0.28, metalness: 0.1 }), [0, -0.18, -d / 2 - 20], [100, 0.1, 24], landscape);
  else box(mat("#d9d0b6"), [0, -0.15, -d / 2 - 12], [35, 0.1, 3], landscape);
  for (let i = 0; i < 2; i++) {
    const ridge = alpineRidge({ width: 150, depth: 30, height: 24 + i * 5, seed: 2 + i * 3 });
    ridge.position.set(i * 8, -1, -d / 2 - 54 - i * 20);
    landscape.add(ridge);
  }
  for (let i = 0; i < 12; i++) {
    const x = -26 + i * 4.5;
    add(
      sphereGeo,
      green,
      [x, 1.4, -d / 2 - 34 - (i % 3)],
      [0.9, 1.7, 0.9],
      landscape,
    );
  }
  // Warm pendants and luminous diffusers are modelled fixtures, not an exposure shortcut.
  for (const x of [-3, 3])
    for (const z of [-2, 3]) {
      round(dark, [x, h - 0.5, z], [0.025, 0.8, 0.025]);
      round(gold, [x, h - 0.95, z], [0.45, 0.12, 0.45]);
      round(
        mat("#fff1c7", { emissive: "#ffdfa7", emissiveIntensity: 0.65 }),
        [x, h - 1.02, z],
        [0.39, 0.03, 0.39],
      );
    }
  if (id === "main-hall") {
    box(wood, [-4, 0.65, -2], [4.4, 1.3, 1.4]);
    box(ivory, [-4, 1.34, -2], [4.7, 0.13, 1.6]);
    computer(-4, -2);
    label("SERENITY INTERNATIONAL SCHOOL", [-3, 3.1, -d / 2 + 0.25], 7, 0.9);
    for (let i = 0; i < 13; i++) {
      box(wood, [6.2, 0.13 + i * 0.26, 4 - i * 0.48], [1.8, 0.26, 0.49]);
      box(ivory, [6.2, 0.27 + i * 0.26, 4.2 - i * 0.48], [1.8, 0.025, 0.04]);
      for (const side of [-1, 1])
        rod([6.2 + side * 0.86, 0.27 + i * 0.26, 4 - i * 0.48], [6.2 + side * 0.86, 1.22 + i * 0.26, 4 - i * 0.48], teal, 0.022);
    }
    for (const side of [-1, 1])
      rod([6.2 + side * 0.86, 1.22, 4], [6.2 + side * 0.86, 4.34, -1.76], wood, 0.055);
    for (const side of [-1, 1])
      rod([6.2 + side * 0.7, -0.12, 4.2], [6.2 + side * 0.7, 3.2, -2], teal, 0.09);
    box(wood, [5.3, 3.65, -4.5], [4.9, 0.22, 6]);
    for (let z = -6; z < 0; z += 0.7)
      box(teal, [2.3, 4.15, z], [0.045, 1, 0.045]);
    box(wood, [2.3, 4.65, -3], [0.1, 0.1, 6.2]);
    box(ivory, [7, 1.55, -6.5], [1.5, 3.1, 1.3]);
    box(teal, [6.9, 1.35, -5.81], [1.05, 2.6, 0.06]);
    label("LIFT", [6.9, 2.9, -5.75], 0.8, 0.25);
    door(5.7, -7.75, "LEARNING STUDIOS");
    door(-0.7, -7.75, "COURTYARD");
    for (const x of [-3, -1, 1]) armchair(x, 3, Math.PI);
    table(-1, 1.9, 1.4, 0.8);
    rug(-1, 2.8, 6.1, 3.2, "#d2c9ac");
    notebook(-1, 1.9);
    for (let i = 0; i < 25; i++) box(wood, [-6.1 + i * 0.175, 0.65, -1.25], [0.055, 1.16, 0.06]);
    label("WELCOME / ASK US ANYTHING", [-4, 0.72, -1.18], 3.6, 0.4);
    for (const x of [-5.4, 0.5]) rod([x, 0.2, -4.8], [x, 2.9, -4.8], wood, 0.08);
    label("A PLACE TO BELONG", [-3, 4.5, -7.72], 5.5, 0.65, "#6d7f67");
    plant(-6, -5, 1.9);
    plant(6, -5, 1.5);
    const display = box(wood, [-7.78, 2, 1], [0.08, 2.2, 4.5]);
    for (let i = 0; i < 6; i++)
      box(
        mat(["#d5c6a0", "#7c9a87", "#a88a60"][i % 3]),
        [-7.7, 1.5 + (i % 2), -0.4 + Math.floor(i / 2) * 1.3],
        [0.025, 0.65, 0.95],
      );
    label("WELCOME, EVERYONE", [0, 1.9, 7.72], 4.7, 0.6, "#164f48", Math.PI);
  } else if (id === "library") {
    const rock = mat("#c6c2b2", { map: surfaceTexture("stone", 3) });
    box(rock, [-w / 2 + 0.15, 2.1, -1], [0.32, 4.2, 11]);
    shelf(-6.85, 1, 5.6, 2.8, Math.PI / 2);
    shelf(-6.85, -4, 3, 2.8, Math.PI / 2);
    shelf(6.85, 0, 4.2, 2.8, -Math.PI / 2);
    shelf(-1, 5.8, 5, 1.35);
    armchair(-4, -3, 0.35);
    armchair(-1.8, -3, -0.3);
    rug(-3, -2.8, 4.8, 3.6);
    table(-2.9, -2.3, 1.05, 0.6, true);
    table(2, 0.5, 3.2, 1.6);
    notebook(1.4, 0.5);
    notebook(2.6, 0.65, gold);
    for (const x of [0.9, 3.1]) {
      chair(x, 1.6);
      chair(x, -0.6, Math.PI);
    }
    for (const x of [-4, 0, 4]) {
      table(x, -5, 1.7, 0.8);
      chair(x, -3.95);
      box(ivory, [x, 0.95, -5], [0.5, 0.08, 0.35]);
      rod([x + 0.5, 0.9, -5.2], [x + 0.5, 1.5, -5.2], dark, 0.018);
      rod([x + 0.5, 1.5, -5.2], [x + 0.25, 1.57, -5.2], dark, 0.018);
      round(gold, [x + 0.25, 1.56, -5.2], [0.16, 0.04, 0.16]);
      notebook(x, -5, teal, 0.99);
    }
    plant(-6, -5, 1.4);
    plant(6, -5, 1.4);
    label("A QUIETER KIND OF DISCOVERY", [0, 3.8, -6.78], 6, 0.45, "#65715c");
    // Exposed, irregular hillside stones distinguish this room from the timber studios.
    for (let row = 0; row < 7; row++)
      for (let col = 0; col < 14; col++) {
        const rockBlock = soft(mat(["#b0b1a0", "#c0bead", "#aaa997"][(row + col) % 3]), [-7.28, 0.4 + row * 0.52, -6 + col * 0.85 + (row % 2) * 0.2], [0.18, 0.47, 0.77]);
        rockBlock.rotation.x = Math.sin(row * 7 + col) * 0.07;
      }
    for (let i = 0; i < 7; i++) box(wood, [-4.2 + i * 1.4, 0.55, -6.6], [1.3, 0.12, 0.65]);
  } else if (id === "learning-studio") {
    for (const [x, z] of [
      [-2, -1],
      [2, 2],
      [-3, 4],
    ]) {
      table(x, z, 2.8, 1.5);
      for (const dx of [-0.8, 0.8]) {
        chair(x + dx, z + 1);
        chair(x + dx, z - 1, Math.PI);
      }
      box(ivory, [x, 0.94, z], [0.6, 0.07, 0.42]);
      notebook(x - 0.6, z + 0.1, gold);
      notebook(x + 0.65, z - 0.2);
      round(mat("#c7b58e"), [x + 0.8, 1.03, z + 0.2], [0.075, 0.25, 0.075]);
      for (let i = 0; i < 5; i++) rod([x + 0.77 + i * 0.015, 0.96, z + 0.2], [x + 0.74 + i * 0.03, 1.26 + (i % 2) * 0.04, z + 0.2], i % 2 ? gold : teal, 0.009);
    }
    box(teal, [0, 2, -7.32], [5.3, 2, 0.16]);
    label("What could we make better?", [0, 2, -7.21], 4.8, 1.1);
    shelf(6, 3, 3, 2.6, -Math.PI / 2);
    table(5, -4, 1.9, 0.9);
    chair(5, -2.9);
    plant(6, -6, 1.3);
    box(wood, [-7.2, 2, -2], [0.1, 2.4, 5]);
    for (let i = 0; i < 6; i++)
      box(
        mat(["#e4d3a3", "#80998b", "#ba8e6c"][i % 3]),
        [-7.12, 1.45 + (i % 2), -3.5 + Math.floor(i / 2) * 1.4],
        [0.04, 0.8, 1],
      );
    label("LEARNING STUDIO", [0, 3.65, 7.3], 4.5, 0.55, "#164f48", Math.PI);
    // Project shelf: a bridge, architectural study and work-in-progress sheets.
    box(wood, [-6.65, 1.05, -1.5], [0.8, 0.12, 4.5]);
    for (const z of [-3, -2.6, -2.2, -1.8, -1.4]) {
      box(wood, [-6.65, 1.15, z], [0.65, 0.09, 0.15]);
      rod([-6.95, 1.2, z], [-6.95, 1.7, z], teal, 0.018);
      rod([-6.35, 1.2, z], [-6.35, 1.7, z], teal, 0.018);
    }
    for (const x of [-6.95, -6.35]) rod([x, 1.7, -3], [x, 1.7, -1.4], gold, 0.025);
    label("SKETCH / BUILD / REFLECT", [-7.05, 3.35, -1.5], 4, 0.4, "#65715c", Math.PI / 2);
    for (let i = 0; i < 5; i++) box(ivory, [-7.04, 1.6 + (i % 2) * 0.9, -3.5 + i * 0.8], [0.015, 0.15, 0.55]);
    notebook(5, -4);
  } else if (id === "technology-lab") {
    for (const z of [-4, 0, 4]) {
      table(-5.8, z, 2.4, 1.1);
      computer(-5.8, z);
      chair(-5.8, z + 1);
      box(dark, [-6.5, 0.55, z], [0.35, 0.6, 0.6]);
    }
    table(-1, -1, 3.6, 2);
    table(3.5, -4, 3, 1.9);
    table(4, 3, 3, 1.7);
    for (const [x, z] of [
      [-1, 1],
      [1, -1],
      [4, 4.1],
    ])
      chair(x, z);
    const robot = box(ivory, [-1, 1.08, -1], [0.8, 0.32, 0.85]);
    for (const dx of [-0.47, 0.47])
      for (const z of [-1.25, -0.75]) {
        const wheel = round(dark, [-1 + dx, 1, z], [0.15, 0.12, 0.15]);
        wheel.rotation.z = Math.PI / 2;
      }
    box(teal, [-1, 1.4, -1], [0.5, 0.3, 0.5]);
    box(dark, [-0.86, 1.43, -0.73], [0.1, 0.1, 0.05]);
    box(dark, [-1.14, 1.43, -0.73], [0.1, 0.1, 0.05]);
    box(creamMaterial(), [3.5, 1.35, -4], [1.2, 0.85, 1]);
    const roofShape = new THREE.ConeGeometry(1, 0.6, 4);
    const roof = add(roofShape, teal, [3.5, 2.05, -4], [1, 0.7, 0.85]);
    roof.rotation.y = Math.PI / 4;
    box(mat("#66868a"), [3.5, 2.21, -4], [0.6, 0.035, 0.6]);
    box(teal, [3.5, 1.33, -3.48], [0.3, 0.55, 0.03]);
    // Visible sensor board, house wiring, photovoltaic grid and robotic arm.
    for (const x of [3.13, 3.85]) box(mat("#91b1ac"), [x, 1.43, -3.48], [0.24, 0.25, 0.035]);
    for (let i = 0; i < 4; i++) box(ivory, [3.25 + i * 0.16, 2.233, -4], [0.008, 0.01, 0.55]);
    box(teal, [4.35, 0.96, -3.65], [0.35, 0.09, 0.48]);
    rod([4.35, 0.99, -3.85], [4.05, 0.99, -4.2], gold, 0.012);
    rod([4.05, 0.99, -4.2], [3.95, 1.55, -4.2], gold, 0.012);
    round(teal, [-1.9, 0.96, -1.3], [0.25, 0.16, 0.25]);
    rod([-1.9, 1.02, -1.3], [-1.9, 1.7, -1.3], gold, 0.07);
    rod([-1.9, 1.7, -1.3], [-1.45, 1.95, -1.1], gold, 0.065);
    rod([-1.45, 1.95, -1.1], [-1.1, 1.58, -0.9], dark, 0.035);
    for (const x of [-1.18, -1.02]) rod([x, 1.6, -0.9], [x, 1.45, -0.9], dark, 0.018);
    shelf(6.8, 0, 4.5, 2.8, -Math.PI / 2);
    label("MAKE / TEST / LEARN", [0, 3.6, -7.8], 5.5, 0.6);
    plant(6, -6, 1.4);
    box(mat("#93a194"), [7.72, 2, 2.3], [0.12, 2.2, 4.3]);
    for (let i = 0; i < 7; i++) {
      rod([7.62, 1.8, 0.7 + i * 0.5], [7.62, 2.4, 0.7 + i * 0.5], dark, 0.025);
      box(gold, [7.6, 1.76, 0.7 + i * 0.5], [0.1, 0.25, 0.1]);
    }
    label("SUPERVISED MAKING", [4, 2.6, 6.9], 3.4, 0.4, "#65715c", Math.PI);
    for (let i = 0; i < 4; i++) {
      box(teal, [4, 0.73 - i * 0.16, 3.65], [2.65, 0.12, 0.12]);
      box(gold, [4, 0.73 - i * 0.16, 3.73], [0.35, 0.04, 0.06]);
    }
    for (const z of [-3, 2]) box(mat("#a7afa1"), [0, h - 0.3, z], [10, 0.18, 1.1]);
    for (let i = 0; i < 6; i++)
      box(
        mat(["#d4b66f", "#6e9b8d", "#b58667"][i % 3]),
        [3.2 + i * 0.28, 0.96, 3],
        [0.17, 0.1, 0.5],
      );
  } else if (id === "dining-hall") {
    box(wood, [-3, 0.65, -5.5], [7, 1.3, 1.5]);
    box(ivory, [-3, 1.35, -5.5], [7.2, 0.13, 1.65]);
    for (let i = 0; i < 5; i++) {
      box(dark, [-5.5 + i * 1.3, 1.45, -5.5], [0.9, 0.06, 0.65]);
      round(
        mat(["#a1ac6c", "#b88c58", "#e3d7b0"][i % 3]),
        [-5.5 + i * 1.3, 1.52, -5.5],
        [0.26, 0.12, 0.26],
      );
    }
    label("LUNCH / 12:00—13:00", [-3, 3.5, -7.8], 5, 0.6);
    // Glazed sneeze guard, support posts and a tray return make the serving area legible.
    box(mat("#c1ddd2", { transparent: true, opacity: 0.22, roughness: 0.18 }), [-3, 1.93, -5.1], [6.9, 0.7, 0.045]);
    for (const x of [-6.3, 0.3]) rod([x, 1.4, -5.1], [x, 2.36, -5.1], dark, 0.025);
    box(wood, [-3, 2.36, -5.1], [7, 0.08, 0.36]);
    box(wood, [6.5, 0.6, 2.8], [1.1, 1.2, 2.2]);
    for (let i = 0; i < 8; i++) box(dark, [6.5, 1.25 + i * 0.035, 2.8], [0.8, 0.025, 0.6]);
    label("TRAY RETURN", [6.5, 1.75, 3.95], 1.35, 0.3);
    door(5, -7.75, "SHARED SERVICE KITCHEN");
    for (const [x, z, ww] of [
      [-4, 0, 3.3],
      [2, 1, 3.8],
      [-3, 4.7, 2.3],
      [4, -2, 2.8],
    ]) {
      table(x, z, ww, 1.5);
      for (const dz of [-1.05, 1.05]) {
        box(wood, [x, 0.48, z + dz], [ww, 0.14, 0.48]);
        for (const dx of [-ww * 0.35, ww * 0.35])
          box(teal, [x + dx, 0.22, z + dz], [0.09, 0.44, 0.35]);
      }
      for (let i = 0; i < 2; i++) {
        round(ivory, [x - 0.7 + i * 1.3, 0.93, z], [0.2, 0.035, 0.2]);
        round(
          mat("#bcd0c0"),
          [x - 0.4 + i * 1.3, 1, z + 0.3],
          [0.075, 0.2, 0.075],
        );
      }
    }
    plant(-7, -5, 1.7);
    plant(7, -5, 1.6);
    plant(6, 5, 1.2);
    for (let i = 0; i < 18; i++) box(wood, [-8.3, 2, -6.5 + i * 0.74], [0.11, 2.7, 0.045]);
    door(7.9, 4.5, "COURTYARD", -Math.PI / 2);
  } else if (id === "games-lounge") {
    // Raised lightwell and exit agree with the lower-ground exterior.
    box(mat("#c7c7af"), [0, 0.15, -d / 2 - 3], [w, 0.4, 6]);
    for (let i = 0; i < 4; i++)
      box(
        stone,
        [5, 0.2 + i * 0.25, -d / 2 - 1.5 - i * 0.65],
        [2.8, 0.25, 0.8],
      );
    door(5, -7.25, "OUTDOOR COURT");
    rug(-4, -2.4, 5.6, 4.3, "#c5c8ae");
    for (let i = 0; i < 3; i++) {
      soft(teal, [-5.35 + i * 1.35, 0.52, -1], [1.3, 0.5, 1.25]);
      soft(teal, [-5.35 + i * 1.35, 1.02, -0.42], [1.3, 0.9, 0.27]);
      soft(mat("#c5b68f"), [-5.35 + i * 1.35, 0.85, -0.55], [0.42, 0.4, 0.14]);
    }
    for (const x of [-6.02, -1.98]) soft(wood, [x, 0.72, -1], [0.18, 0.8, 1.3]);
    box(wood, [-4, 0.55, -4.7], [3.2, 0.9, 0.6]);
    box(dark, [-4, 1.65, -4.8], [2.5, 1.4, 0.1]);
    box(
      mat("#769d95", { emissive: "#4e7c70", emissiveIntensity: 0.3 }),
      [-4, 1.65, -4.73],
      [2.3, 1.2, 0.02],
    );
    label("PLAY TOGETHER", [-4, 2, -4.65], 1.9, 0.55);
    soft(ivory, [-5, 0.74, -4.3], [0.38, 0.44, 0.25]);
    box(dark, [-4.98, 0.74, -4.15], [0.04, 0.38, 0.025]);
    soft(dark, [-3.3, 0.79, -4.3], [0.65, 0.16, 0.4]);
    table(-4, -2.8, 1.9, 0.8);
    for (const x of [-4.5, -3.5]) {
      soft(dark, [x, 0.97, -2.8], [0.4, 0.1, 0.23]);
      for (const dx of [-0.13, 0.13]) round(gold, [x + dx, 1.035, -2.8], [0.035, 0.025, 0.035]);
    }
    armchair(-0.3, -1.4, -Math.PI / 3);
    table(2, 2, 2.5, 2);
    for (const [x, z, r] of [
      [0.4, 2, -Math.PI / 2],
      [3.6, 2, Math.PI / 2],
      [2, 3.4, 0],
      [2, 0.6, Math.PI],
    ])
      chair(x, z, r);
    const board = mat("#c1b58a");
    box(board, [2, 0.94, 2], [1.15, 0.05, 1.15]);
    for (let i = 0; i < 16; i++) {
      if ((i + Math.floor(i / 4)) % 2 === 0)
        box(
          teal,
          [1.57 + (i % 4) * 0.28, 0.973, 1.57 + Math.floor(i / 4) * 0.28],
          [0.27, 0.015, 0.27],
        );
    }
    for (let i = 0; i < 6; i++)
      round(
        gold,
        [1.7 + (i % 3) * 0.28, 1.04, 1.7 + Math.floor(i / 3) * 0.56],
        [0.07, 0.1, 0.07],
      );
    for (const z of [-3, 1, 4.5]) {
      table(-6.6, z, 1.7, 0.8);
      computer(-6.6, z);
      chair(-6.6, z + 1);
    }
    for (let i = 0; i < 8; i++)
      box(
        mat(i % 2 ? "#809482" : "#c3b58e"),
        [7.78, 2.2, -4 + i],
        [0.1, 2.3, 0.65],
      );
    plant(6, 5, 1.3);
    shelf(5.8, 5.8, 2.2, 1.6);
    for (const x of [-3.6, 0, 3.6]) box(mat("#819187"), [x, h - 0.22, 1], [1.6, 0.15, 8]);
    for (const x of [-6, 0, 6]) plant(x, -9.5, 0.8);
    box(stone, [0, 0.9, -12.3], [w + 2, 1.8, 0.3]);
  }
  function creamMaterial() {
    return mat("#ede0c5");
  }
  batchStaticMeshes(scene);
  const markerRoot = document.createElement("div");
  markerRoot.className = "room-markers";
  canvas.parentElement.append(markerRoot);
  const markerEntries = data.hotspots.map((hotspot, i) => {
    const b = document.createElement("button");
    b.className = "room-marker";
    b.dataset.hotspot = hotspot.id;
    b.setAttribute("aria-label", hotspot.label);
    b.innerHTML = `<span>${i + 1}</span>${hotspot.label}`;
    b.onclick = () => onHotspot(hotspot.id);
    markerRoot.append(b);
    return { b, hotspot };
  });
  const projected = new THREE.Vector3();
  let activeHotspot = null;
  function positionMarkers(width, height) {
    for (const { b, hotspot } of markerEntries) {
      projected.set(...hotspot.point).project(camera);
      const x = (projected.x * 0.5 + 0.5) * width,
        y = (-projected.y * 0.5 + 0.5) * height;
      b.hidden =
        projected.z > 1 ||
        x < 20 ||
        x > width - 20 ||
        y < 70 ||
        y > height - 70;
      b.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
      b.classList.toggle("active", activeHotspot === hotspot.id);
    }
  }
  let alternateView = false;
  return {
    scene,
    camera,
    controls,
    id,
    name: data.name,
    positionMarkers,
    view() {
      alternateView = !alternateView;
      camera.position.set(
        (alternateView ? -1 : 1) * w * 0.37,
        Math.min(h - 0.7, 3.5),
        d * 0.39,
      );
      controls.target.set(-0.7, 1.25, -1.8);
      controls.update();
      onChange();
    },
    selectHotspot(id) {
      activeHotspot = id;
      const hotspot = data.hotspots.find((h) => h.id === id);
      if (hotspot) {
        const [x, y, z] = hotspot.point;
        controls.target.set(x, Math.max(1, y), z);
        camera.position.set(
          THREE.MathUtils.clamp(x + 3.4, -w / 2 + 0.6, w / 2 - 0.6),
          Math.min(h - 0.6, Math.max(2.4, y + 1.8)),
          THREE.MathUtils.clamp(z + 5, -d / 2 + 0.6, d / 2 - 0.6),
        );
        controls.update();
      }
      onChange();
    },
    resize(aspect) {
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
    },
    dispose() {
      controls.removeEventListener("change", constrain);
      controls.dispose();
      markerRoot.remove();
      disposeScene(scene);
      depthMaterial.dispose();
      boxGeo.dispose();
      cylGeo.dispose();
      sphereGeo.dispose();
    },
  };
}
