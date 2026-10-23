import * as THREE from "three";
import { createCameraController } from "./camera.js";
import { nodes, edges, campusBuildings } from "./data.js";
import { surfaceTexture } from "./materials.js";
import { buildInterior } from "./interiors.js";
import { alpineRidge } from "./landscape.js";
import { batchStaticMeshes } from "./batch.js";

export function createCampus(
  container,
  {
    places,
    onSelect,
    home = false,
    festival = false,
    onError = () => {},
    onHotspot = () => {},
  },
) {
  let activeRoom = null,
    campusSnapshot = null,
    inView = true;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mobile = matchMedia("(max-width: 760px)").matches;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#e9ede6");
  scene.fog = new THREE.Fog("#e9ede6", 145, 430);
  const camera = new THREE.PerspectiveCamera(mobile ? 40 : 34, 1, 0.5, 550);
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: false,
    powerPreference: "low-power",
  });
  const gl = renderer.getContext();
  const rendererInfo = gl.getExtension("WEBGL_debug_renderer_info");
  const softwareRendering = rendererInfo && /swiftshader|llvmpipe|software/i.test(
    gl.getParameter(rendererInfo.UNMASKED_RENDERER_WEBGL),
  );
  const environmentInterval = softwareRendering ? 750 : mobile ? 200 : 125;
  renderer.setPixelRatio(Math.min(devicePixelRatio, mobile ? 1.35 : 1.7));
  renderer.shadowMap.enabled = !mobile;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.shadowMap.autoUpdate = false;
  renderer.shadowMap.needsUpdate = true;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;
  renderer.domElement.setAttribute(
    "aria-label",
    "Interactive 3D model of the Serenity campus. Use the place list for keyboard selection.",
  );
  renderer.domElement.setAttribute("role", "img");
  renderer.domElement.style.touchAction = "pan-y";
  container.append(renderer.domElement);
  const cameraController = createCameraController(camera, renderer.domElement, {
    mobile,
    home,
    onChange: () => invalidate(),
  });
  // OrbitControls sets touch-action on connect; restore one-finger page scrolling afterwards.
  renderer.domElement.style.touchAction = mobile ? "pan-y" : "none";
  scene.add(new THREE.HemisphereLight("#fffbea", "#859d7c", 2.1));
  const sun = new THREE.DirectionalLight("#fff0d2", 3.0);
  sun.position.set(-35, 75, 25);
  sun.castShadow = !mobile;
  const shadowResolution = softwareRendering ? 1024 : 2048;
  sun.shadow.mapSize.set(shadowResolution, shadowResolution);
  Object.assign(sun.shadow.camera, {
    left: -70,
    right: 70,
    top: 65,
    bottom: -65,
    far: 180,
  });
  sun.shadow.bias = -0.001;
  sun.shadow.normalBias = 0.08;
  scene.add(sun);
  const materials = {};
  const mat = (color, extra = {}) => {
    const key =
      color +
      (extra.map?.uuid || "") +
      JSON.stringify({ ...extra, map: undefined });
    return (materials[key] ||= new THREE.MeshStandardMaterial({
      color,
      roughness: 0.88,
      ...extra,
    }));
  };
  const cream = mat("#fff6e3", { map: surfaceTexture("stone", 2) }),
    timber = mat("#ffddb0", { map: surfaceTexture("wood", 2) }),
    teal = mat("#315b50"),
    roofMat = mat("#bcc4c3", { map: surfaceTexture("roof", 3) }),
    glass = mat("#96b7b4", {
      roughness: 0.16,
      metalness: 0.1,
      transparent: true,
      opacity: 0.38,
    }),
    pathMat = mat("#d4c8a9"),
    grass = mat("#edf1d7", { map: surfaceTexture("grass", 35) });
  const geometries = new Set();
  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  geometries.add(boxGeometry);
  const cylinder = new THREE.CylinderGeometry(1, 1, 1, 16);
  geometries.add(cylinder);
  const sphere = new THREE.IcosahedronGeometry(1, 2);
  geometries.add(sphere);
  function mesh(
    geometry,
    material,
    position,
    scale = [1, 1, 1],
    parent = scene,
  ) {
    const m = new THREE.Mesh(geometry, material);
    m.position.set(...position);
    m.scale.set(...scale);
    m.castShadow = true;
    m.receiveShadow = true;
    parent.add(m);
    return m;
  }
  const box = (material, pos, scale, parent) =>
    mesh(boxGeometry, material, pos, scale, parent);
  const round = (material, pos, scale, parent) =>
    mesh(cylinder, material, pos, scale, parent);
  // Cut a real lightcourt out of the terrain for the lower-ground games room.
  const groundShape = new THREE.Shape();
  groundShape.moveTo(-110, -123);
  groundShape.lineTo(110, -123);
  groundShape.lineTo(110, 37);
  groundShape.lineTo(-110, 37);
  groundShape.closePath();
  const lightcourtHole = new THREE.Path();
  lightcourtHole.moveTo(16, -8.05);
  lightcourtHole.lineTo(28, -8.05);
  lightcourtHole.lineTo(28, -12.7);
  lightcourtHole.lineTo(16, -12.7);
  lightcourtHole.closePath();
  groundShape.holes.push(lightcourtHole);
  const groundGeometry = new THREE.ShapeGeometry(groundShape);
  groundGeometry.rotateX(-Math.PI / 2);
  geometries.add(groundGeometry);
  const ground = mesh(groundGeometry, grass, [0, 0, 0]);
  ground.castShadow = false;

  // A calm lake and layered continuous ridges, rather than separate cone mountains.
  const lake = box(
    mat("#82afae", { roughness: 0.3, metalness: 0.12 }),
    [0, -0.34, -90],
    [380, 0.2, 106],
  );
  lake.castShadow = false;
  for (let i = 0; i < 21; i++)
    box(
      mat(i % 2 ? "#a7c4b9" : "#c0d1c4"),
      [-100 + i * 10, -0.18, -48 - (i % 4) * 8],
      [6 + (i % 5), 0.04, 0.12],
    );
  for (let i = 0; i < 3; i++) {
    const ridge = alpineRidge({ width: 430, height: 56 + i * 12, depth: 90, seed: 2 + i * 3 });
    ridge.position.set(i * 14 - 20, -2, -128 - i * 47);
    scene.add(ridge);
    geometries.add(ridge.geometry);
  }
  // Paths are derived from the same connected graph as the route engine.
  function strip(a, b, width = 1.7, material = pathMat, y = 0.055) {
    const dx = b[0] - a[0],
      dz = b[1] - a[1],
      length = Math.hypot(dx, dz);
    if (length < 0.1) return;
    const m = box(
      material,
      [(a[0] + b[0]) / 2, y, (a[1] + b[1]) / 2],
      [width, 0.1, length],
    );
    m.rotation.y = Math.atan2(dx, dz);
    m.castShadow = false;
    return m;
  }
  edges.forEach(([a, b]) => strip(nodes[a], nodes[b]));
  round(pathMat, [0, 0.04, 8], [9, 0.1, 9]);
  round(mat("#879a6d"), [0, 0.13, 8], [3.4, 0.2, 3.4]);
  // A single custom gable geometry is reused by every roof.
  const roofGeometry = new THREE.BufferGeometry();
  const vertices = [
    -0.5, 0, -0.5, 0.5, 0, -0.5, 0, 1, -0.5, 0.5, 0, 0.5, -0.5, 0, 0.5, 0, 1,
    0.5, -0.5, 0, 0.5, -0.5, 0, -0.5, 0, 1, -0.5, -0.5, 0, 0.5, 0, 1, -0.5, 0,
    1, 0.5, 0.5, 0, -0.5, 0.5, 0, 0.5, 0, 1, 0.5, 0.5, 0, -0.5, 0, 1, 0.5, 0, 1,
    -0.5, -0.5, 0, -0.5, -0.5, 0, 0.5, 0.5, 0, 0.5, -0.5, 0, -0.5, 0.5, 0, 0.5,
    0.5, 0, -0.5,
  ];
  // Outward winding keeps both gable slopes visible with ordinary face culling.
  for (let i = 0; i < vertices.length; i += 9) {
    for (let j = 0; j < 3; j++) {
      const v = vertices[i + 3 + j];
      vertices[i + 3 + j] = vertices[i + 6 + j];
      vertices[i + 6 + j] = v;
    }
  }
  roofGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices, 3),
  );
  const uv = [];
  for (let i = 0; i < vertices.length; i += 3)
    uv.push(
      (vertices[i] + 0.5) * 2,
      (vertices[i + 2] + 0.5) * 2 + vertices[i + 1],
    );
  roofGeometry.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  roofGeometry.computeVertexNormals();
  geometries.add(roofGeometry);
  function roof(x, z, w, d, y, h, parent = scene) {
    return mesh(roofGeometry, roofMat, [x, y, z], [w, h, d], parent);
  }
  function windows(x, z, w, d, h, group, glazed = false) {
    for (let floor = 0; floor < 2; floor++) {
      const y = 1.7 + floor * 2.9;
      if (y > h - 1) continue;
      for (let i = 0; i < Math.floor(w / 2.5); i++) {
        const wx = x - w / 2 + 1.55 + i * 2.5;
        for (const face of [-1, 1]) {
          // Four frame members leave the actual opening clear.
          for (const dx of [-0.66, 0.66])
            box(teal, [wx + dx, y, z + face * (d / 2 + 0.08)], [0.09, 1.85, 0.14], group);
          for (const dy of [-0.88, 0.88])
            box(teal, [wx, y + dy, z + face * (d / 2 + 0.08)], [1.4, 0.09, 0.14], group);
          box(
            glass,
            [wx, y, z + face * (d / 2 + 0.17)],
            [1.17, 1.6, 0.08],
            group,
          );
          box(
            timber,
            [wx, y, z + face * (d / 2 + 0.23)],
            [0.065, 1.65, 0.05],
            group,
          );
          box(cream, [wx, y - 1, z + face * (d / 2 + 0.16)], [1.65, 0.12, 0.44], group);
          box(
            timber,
            [wx, y - 0.2, z + face * (d / 2 + 0.24)],
            [1.2, 0.065, 0.05],
            group,
          );
        }
      }
    }
    for (const side of [-1, 1])
      for (let j = 0; j < Math.floor(d / 2.5); j++) {
        box(
          teal,
          [x + side * (w / 2 + 0.05), 2.4, z - d / 2 + 1.5 + j * 2.5],
          [0.14, 2.7, 1.35],
          group,
        );
        box(
          glass,
          [x + side * (w / 2 + 0.14), 2.4, z - d / 2 + 1.5 + j * 2.5],
          [0.1, 2.45, 1.1],
          group,
        );
      }
    if (glazed) {
      box(
        glass,
        [x, yFor(h), z + d / 2 + 0.3],
        [w * 0.64, h * 0.8, 0.15],
        group,
      );
      for (let i = -2; i <= 2; i++)
        box(
          teal,
          [x + i * w * 0.13, yFor(h), z + d / 2 + 0.4],
          [0.14, h * 0.82, 0.13],
          group,
        );
      box(teal, [x, h * 0.53, z + d / 2 + 0.43], [w * 0.67, 0.16, 0.14], group);
    }
  }
  function yFor(h) {
    return h * 0.48;
  }
  const pickables = [];
  function building(id, x, z, w, d, h = 6.4, glazed = false) {
    const g = new THREE.Group();
    scene.add(g);
    // Open facades: real window openings reveal warm floor plates and furniture hints.
    const wall = (xx, width, zz) => {
      if (width <= 0.02) return;
      box(cream, [xx, h * 0.28, zz], [width, h * 0.56, 0.3], g);
      box(timber, [xx, h * 0.78, zz], [width, h * 0.44, 0.3], g);
    };
    for (const face of [-1, 1]) {
      const zz = z + (face * d) / 2;
      const cols = Math.floor(w / 2.5);
      let cursor = x - w / 2;
      for (let i = 0; i < cols; i++) {
        const centre = x - w / 2 + 1.55 + i * 2.5;
        wall((cursor + centre - 0.78) / 2, centre - 0.78 - cursor, zz);
        cursor = centre + 0.78;
      }
      wall((cursor + x + w / 2) / 2, x + w / 2 - cursor, zz);
      for (let floor = 0; floor < 2; floor++) {
        const yy = 1.7 + floor * 2.9;
        if (yy > h - 1) continue;
        box(floor ? timber : cream, [x, yy - 1.14, zz], [w, 0.43, 0.3], g);
        box(floor ? timber : cream, [x, yy + 1.15, zz], [w, 0.43, 0.3], g);
      }
    }
    for (const side of [-1, 1])
      box(cream, [x + (side * w) / 2, h / 2, z], [0.3, h, d], g);
    for (const y of [0.15, 3.1, h - 0.1])
      if (y < h + 0.1) box(mat("#d6c6aa"), [x, y, z], [w, 0.18, d], g);
    box(mat("#dfcba6"), [x, h / 2, z - 0.5], [w - 0.4, h - 0.3, 0.16], g);
    for (let i = 0; i < Math.floor(w / 3); i++) {
      box(
        timber,
        [x - w / 2 + 1.7 + i * 3, 1.1, z + d / 2 - 1.1],
        [1.5, 0.12, 0.7],
        g,
      );
      box(
        teal,
        [x - w / 2 + 1.7 + i * 3, 0.7, z + d / 2 - 1.7],
        [0.6, 0.8, 0.12],
        g,
      );
    }
    for (const side of [-1, 1])
      box(
        teal,
        [x + side * (w / 2 + 0.24), h + 0.02, z],
        [0.1, 0.16, d + 1.3],
        g,
      );
    box(timber, [x, h + 0.05, z + d / 2 + 0.5], [w + 0.8, 0.12, 0.16], g);
    box(cream, [x, 0.26, z], [w + 0.4, 0.52, d + 0.4], g);
    roof(x, z, w + 1.25, d + 1.3, h, 3, g);
    // Ridge caps, gutters, verge boards and downpipes give each roof a readable edge.
    box(roofMat, [x, h + 3, z], [0.2, 0.14, d + 1.4], g);
    for (const side of [-1, 1]) {
      box(teal, [x + side * (w / 2 + 0.55), h - 0.08, z], [0.16, 0.18, d + 1.4], g);
      box(teal, [x + side * (w / 2 + 0.17), h / 2, z + d / 2 + 0.22], [0.08, h, 0.08], g);
      for (let i = 0; i < Math.floor(d / 2); i++)
        box(timber, [x + side * (w / 2 + 0.18), h - 0.23, z - d / 2 + 0.7 + i * 2], [0.65, 0.2, 0.13], g);
    }
    windows(x, z, w, d, h, g, glazed);
    // Recessed sills and warm door surrounds, rather than opaque strips over glazing.
    for (const face of [-1, 1])
      box(
        cream,
        [x, 3.05, z + face * (d / 2 + 0.18)],
        [w + 0.25, 0.13, 0.32],
        g,
      );
    box(teal, [x, 1.25, z + d / 2 + 0.2], [1.55, 2.5, 0.3], g);
    box(glass, [x, 1.38, z + d / 2 + 0.38], [1.25, 2, 0.05], g);
    box(timber, [x, 2.85, z + d / 2 + 1.1], [2.6, 0.18, 2.25], g);
    for (const dx of [-1.08, 1.08])
      box(timber, [x + dx, 1.4, z + d / 2 + 1.9], [0.13, 2.8, 0.13], g);
    if (["main-building", "learning-wing"].includes(id)) {
      // Projecting, glazed gables echo the repeated courtyard bays in the reference.
      for (const dx of [-w * 0.29, w * 0.29]) {
        const bay = new THREE.Group();
        bay.position.set(x + dx, 0, z + d / 2 + 0.55);
        bay.rotation.y = Math.PI / 2;
        g.add(bay);
        box(cream, [0, h / 2, 0], [1.5, h, 2.8], bay);
        box(glass, [0.8, h * 0.52, 0], [0.05, h * 0.78, 2.45], bay);
        for (const zz of [-1.2, 0, 1.2]) box(teal, [0.86, h * 0.52, zz], [0.1, h * 0.8, 0.09], bay);
        box(teal, [0.86, 3.05, 0], [0.1, 0.14, 2.5], bay);
        roof(0, 0, 2.2, 3.5, h, 1.8, bay);
      }
    }
    g.traverse((o) => {
      if (o.isMesh) {
        o.userData.place = id;
        pickables.push(o);
      }
    });
    return g;
  }
  campusBuildings
    .filter((b) => !b.special)
    .forEach((b) => building(b.id, b.x, b.z, b.w, b.d, b.h, b.glazed));
  box(cream, [0, 1.65, -14], [3.5, 3.3, 7]);
  roof(0, -14, 4.3, 7.8, 3.3, 1.8);
  // Modest clock tower, with two readable clock faces.
  box(cream, [-16, 7.4, 20], [3.5, 14.8, 3.5]);
  box(timber, [-16, 13.3, 20], [3.6, 2.2, 3.6]);
  roof(-16, 20, 4.7, 4.7, 14.5, 2.2);
  const clockCanvas = document.createElement("canvas");
  clockCanvas.width = 128;
  clockCanvas.height = 128;
  const ctx = clockCanvas.getContext("2d");
  ctx.fillStyle = "#e9dfbb";
  ctx.beginPath();
  ctx.arc(64, 64, 60, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#31594f";
  ctx.lineWidth = 5;
  for (let i = 0; i < 12; i++) {
    const a = (i * Math.PI) / 6;
    ctx.beginPath();
    ctx.moveTo(64 + Math.sin(a) * 47, 64 - Math.cos(a) * 47);
    ctx.lineTo(64 + Math.sin(a) * 53, 64 - Math.cos(a) * 53);
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.moveTo(64, 30);
  ctx.lineTo(64, 64);
  ctx.lineTo(88, 76);
  ctx.stroke();
  const clockTexture = new THREE.CanvasTexture(clockCanvas),
    clockMat = new THREE.MeshStandardMaterial({
      map: clockTexture,
      transparent: true,
    });
  const faceGeo = new THREE.PlaneGeometry(2.5, 2.5);
  geometries.add(faceGeo);
  mesh(faceGeo, clockMat, [-16, 13.3, 21.82]);
  const sideClock = mesh(faceGeo, clockMat, [-14.18, 13.3, 20]);
  sideClock.rotation.y = Math.PI / 2;
  // Hillside library: retaining wall, planted roof, warm shelves and a broad front window.
  const hill = mesh(sphere, mat("#8f9f72"), [-28, 0, -19], [11, 3.8, 7]);
  hill.castShadow = false;
  box(cream, [-24, 0.2, -24], [13, 0.4, 8]);
  box(timber, [-24, 1.8, -23], [12, 3.4, 0.18]);
  for (const x of [-30.4, -17.6]) box(cream, [x, 1.8, -24], [0.3, 3.6, 8]);
  box(cream, [-24, 3.5, -24], [13, 0.2, 8]);
  for (let x = -29.2; x < -18; x += 2.2) {
    box(timber, [x, 0.85, -26.7], [1.6, 0.1, 0.7]);
    box(teal, [x, 0.5, -25.8], [0.6, 0.7, 0.18]);
  }

  box(glass, [-24, 1.9, -19.95], [11.8, 2.9, 0.16]);
  box(glass, [-24, 1.9, -28.05], [11.8, 2.9, 0.16]);
  for (let i = 0; i < 8; i++)
    box(timber, [-29.5 + i * 1.55, 1.9, -28.2], [0.14, 3, 0.18]);
  // Low retaining stones frame the lake-facing glazing.
  box(mat("#aaa58f"), [-31, 1.6, -24], [0.8, 3.2, 8.5]);
  for (let i = 0; i < 8; i++)
    box(timber, [-29.5 + i * 1.55, 1.9, -19.75], [0.14, 3, 0.18]);
  box(mat("#90a478"), [-24, 3.75, -24], [13.6, 0.5, 8.5]);
  for (let i = 0; i < 62; i++)
    mesh(sphere, mat(i % 2 ? "#7d9070" : "#a2ac82"),
      [-30 + (i % 13), 4.05 + (i % 3) * 0.05, -27.5 + Math.floor(i / 13) * 1.45],
      [0.55, 0.12 + (i % 4) * 0.045, 0.6]);
  const slopeGeometry = new THREE.BufferGeometry();
  slopeGeometry.setAttribute("position", new THREE.Float32BufferAttribute([
    -30.7, 3.9, -20, -17.3, 3.9, -20, -17.3, 0.05, -12,
    -30.7, 3.9, -20, -17.3, 0.05, -12, -30.7, 0.05, -12,
  ], 3));
  slopeGeometry.computeVertexNormals();
  geometries.add(slopeGeometry);
  mesh(slopeGeometry, mat("#98a47a", { side: THREE.DoubleSide }), [0, 0, 0]);
  // Covered walkway to the library, entirely along the west path.
  for (let z = -1; z >= -16; z -= 3)
    for (const x of [-14, -12]) box(timber, [x, 1.35, z], [0.14, 2.7, 0.14]);
  box(mat("#667568"), [-13, 2.85, -8.5], [2.5, 0.2, 17]);
  strip([-13, -17], [-22, -18], 2.2);
  // Daylit lower-ground games exit on the technology building.
  box(pathMat, [22, -1.55, 10.3], [12, 0.16, 4.7]);
  box(cream, [22, -0.75, 12.7], [12.3, 1.5, 0.25]);
  for (const x of [16, 28]) box(cream, [x, -0.75, 10.3], [0.25, 1.5, 4.7]);
  for (let i = 0; i < 5; i++) {
    box(glass, [18 + i * 2, -0.55, 8.12], [1.4, 1.8, 0.15]);
    for (const dx of [-0.74, 0.74]) box(teal, [18 + i * 2 + dx, -0.55, 8.23], [0.09, 1.85, 0.1]);
    box(teal, [18 + i * 2, 0.38, 8.23], [1.5, 0.12, 0.12]);
  }
  for (let i = 0; i < 6; i++) box(cream, [26.7, -1.4 + i * 0.25, 9.5 + i * 0.48], [1.8, 0.25, 0.5]);
  box(timber, [19.8, -1.04, 11.7], [3.3, 0.14, 0.6]);
  for (const x of [16, 28]) {
    box(teal, [x, 0.52, 10.4], [0.06, 1.1, 0.06]);
    box(teal, [x, 1.02, 10.4], [0.07, 0.07, 4.7]);
  }
  // Garden pavilion, making table, raised beds and a sheltered quiet corner.
  for (const x of [6.5, 11.5])
    for (const z of [-17, -21]) box(timber, [x, 1.6, z], [0.18, 3.2, 0.18]);
  roof(9, -19, 6.4, 5.5, 3.2, 1.4);
  box(timber, [9, 1, -19], [3.7, 0.2, 1.5]);
  for (const x of [5, 13, 17]) {
    box(cream, [x, 0.35, -18], [1.2, 0.7, 4]);
    box(mat("#809462"), [x, 0.8, -18], [1.1, 0.3, 3.8]);
  }
  // Football pitch and simple spectator stand.
  box(mat("#6f9462"), [44, 0.08, 0], [19, 0.1, 29]);
  const white = mat("#eee9d7");
  function fieldLine(a, b) {
    strip(a, b, 0.14, white, 0.16);
  }
  fieldLine([35, -13], [53, -13]);
  fieldLine([35, 13], [53, 13]);
  fieldLine([35, -13], [35, 13]);
  fieldLine([53, -13], [53, 13]);
  fieldLine([35, 0], [53, 0]);
  const ringGeo = new THREE.TorusGeometry(2.8, 0.07, 5, 48);
  geometries.add(ringGeo);
  const circle = mesh(ringGeo, white, [44, 0.17, 0]);
  circle.rotation.x = -Math.PI / 2;
  for (const z of [-13, 13]) {
    for (const x of [41.5, 46.5]) box(white, [x, 1, z], [0.12, 2, 0.12]);
    box(white, [44, 2, z], [5.2, 0.12, 0.12]);
    fieldLine([39, z], [39, z - Math.sign(z) * 4]);
    fieldLine([49, z], [49, z - Math.sign(z) * 4]);
    fieldLine([39, z - Math.sign(z) * 4], [49, z - Math.sign(z) * 4]);
    for (let i = 0; i < 7; i++)
      box(
        mat("#b4c3ae"),
        [41.6 + i * 0.8, 1, z + Math.sign(z) * 0.7],
        [0.025, 2, 0.025],
      );
  }
  for (let i = 0; i < 3; i++)
    box(timber, [57, 0.45 + i * 0.4, 1 + i * 0.8], [2, 0.25, 10]);
  // Shared tree geometries and materials; deterministic placement avoids changing layouts.
  const treeTrunk = mat("#78634b"),
    leaves = [mat("#77945a"), mat("#5c7c4e"), mat("#99a76a")];
  function tree(x, z, size = 1) {
    round(
      treeTrunk,
      [x, 1.6 * size, z],
      [0.23 * size, 3.2 * size, 0.23 * size],
    );
    mesh(
      sphere,
      leaves[Math.abs(Math.floor(x + z)) % 3],
      [x, 3.5 * size, z],
      [1.65 * size, 2 * size, 1.6 * size],
    );
    mesh(
      sphere,
      leaves[1],
      [x - size, 3 * size, z + 0.2 * size],
      [1.2 * size, 1.3 * size, 1.2 * size],
    );
  }
  tree(0, 8, 2.35);
  for (let i = 0; i < 13; i++) {
    const angle = i * 2.4;
    mesh(
      sphere,
      leaves[i % 3],
      [Math.cos(angle) * 3.4, 8 + (i % 3) * 0.7, 8 + Math.sin(angle) * 3],
      [2.8, 2.3, 2.7],
    );
  }
  // Curved slatted benches follow the central tree instead of unrelated straight seats.
  for (let section = 0; section < 4; section++)
    for (let i = 0; i < 15; i++) {
      const angle = (section * Math.PI) / 2 + 0.24 + i * 0.055,
        x = Math.sin(angle) * 5.2,
        z = 8 + Math.cos(angle) * 5.2;
      const seat = box(timber, [x, 0.67, z], [0.3, 0.14, 1]);
      seat.rotation.y = angle;
      const back = box(
        timber,
        [Math.sin(angle) * 5.7, 1.05, 8 + Math.cos(angle) * 5.7],
        [0.29, 0.6, 0.11],
      );
      back.rotation.y = angle;
      if (i % 5 === 0) {
        const leg = box(teal, [x, 0.3, z], [0.1, 0.6, 0.75]);
        leg.rotation.y = angle;
      }
    }
  // Glazed covered connection between the academic wings.
  for (let z = 5; z < 16; z += 2.5)
    for (const x of [-23.3, -20.7]) box(timber, [x, 1.6, z], [0.13, 3.2, 0.13]);
  // Courtyard-side glazed gallery continues around the connected west wing.
  box(roofMat, [-18.6, 3.25, 10.3], [2.5, 0.18, 11.7]);
  for (const z of [5, 8, 11, 14, 16]) box(timber, [-17.5, 1.6, z], [0.12, 3.2, 0.12]);
  box(glass, [-17.5, 1.7, 10.3], [0.07, 2.8, 11.7]);
  // Covered route between the eastern learning wing and the two dining rooms.
  box(glass, [12, 2.95, -5.5], [8, 0.08, 2.4]);
  for (const x of [9, 12, 15])
    for (const z of [-6.5, -4.5]) box(timber, [x, 1.45, z], [0.13, 2.9, 0.13]);

  const trees = [
    [-33, 23],
    [-33, 12],
    [-35, 1],
    [-33, -13],
    [-42, -25],
    [-13, -32],
    [-6, -30],
    [1, -31],
    [9, -35],
    [28, -33],
    [35, -26],
    [43, -24],
    [50, -24],
    [57, -21],
    [59, 17],
    [48, 23],
    [33, 23],
    [21, 20],
    [8, 25],
    [-2, 28],
    [-19, 34],
    [-31, 32],
    [-43, 26],
    [-45, 14],
    [-43, -6],
    [-45, -16],
    [26, -9],
    [6, -25],
    [-5, 21],
    [-10, 12],
    [7, 16],
  ];
  trees.forEach(([x, z], i) => tree(x, z, 0.9 + (i % 4) * 0.15));
  const pineGeometry = new THREE.ConeGeometry(1, 1, 7);
  geometries.add(pineGeometry);
  const pines = new THREE.InstancedMesh(pineGeometry, mat("#426e59"), 76 * 3);
  const dummy = new THREE.Object3D();
  for (let i = 0; i < 76; i++) {
    const x = -80 + (i % 38) * 4.7,
      z = -39 - Math.floor(i / 38) * 7 - ((i * 7) % 5),
      h = 4 + (i % 4);
    for (let tier = 0; tier < 3; tier++) {
      const factor = 1 - tier * 0.23;
      dummy.position.set(x, h * (0.36 + tier * 0.23), z);
      dummy.scale.set((1.9 + (i % 3) * 0.25) * factor, h * 0.66, 1.9 * factor);
      dummy.updateMatrix();
      pines.setMatrixAt(i * 3 + tier, dummy.matrix);
    }
  }
  pines.castShadow = true;
  scene.add(pines);
  // Low planting beds and stones break up the lawn without obscuring route entrances.
  for (const [x, z, length] of [[-29, 26, 8], [-30, -8, 7], [29, 7, 8], [7, -24, 6], [0, -18, 7], [29, -29, 6]]) {
    box(cream, [x, 0.18, z], [length, 0.36, 1.6]);
    for (let i = 0; i < Math.floor(length * 1.3); i++) {
      const xx = x - length / 2 + 0.5 + i * 0.7;
      mesh(sphere, leaves[i % 3], [xx, 0.65, z], [0.6, 0.55 + (i % 2) * 0.15, 0.65]);
      if (i % 3 === 0) mesh(sphere, mat("#c9ba8e"), [xx, 0.95, z + 0.12], [0.12, 0.17, 0.12]);
    }
  }
  for (let i = 0; i < 56; i++) {
    const x = -100 + i * 3.8, z = -37.6 + Math.sin(i * 0.73) * 1.3;
    const rock = mesh(sphere, mat(i % 2 ? "#a5ac94" : "#bbc0a9"), [x, 0.07, z], [1.8, 0.48, 1.2]);
    rock.rotation.y = i * 1.9;
  }
  function bench(x, z, rotation = 0) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rotation;
    scene.add(g);
    box(timber, [0, 0.65, 0], [2.6, 0.16, 0.65], g);
    box(timber, [0, 1, -0.3], [2.6, 0.6, 0.12], g);
    for (const a of [-0.95, 0.95]) box(teal, [a, 0.3, 0], [0.13, 0.6, 0.6], g);
  }

  bench(14, -22);
  bench(-18, -17);
  bench(28, 16);
  // A handful of abstract figures provides scale without invented portraits.
  for (const [i, [x, z]] of [
    [-8, 15],
    [5, 11],
    [-11, 4],
    [12, 2],
    [17, -15],
    [0, 18],
    [-19, -17],
  ].entries()) {
    round(mat(i % 2 ? "#456c79" : "#ae8056"), [x, 0.85, z], [0.18, 0.65, 0.18]);
    mesh(sphere, mat("#c9a47b"), [x, 1.35, z], [0.15, 0.18, 0.15]);
    for (const dx of [-0.09, 0.09])
      box(teal, [x + dx, 0.32, z], [0.1, 0.58, 0.13]);
  }
  // Invisible, non-rendering pick surfaces also cover landscape and custom buildings.
  const hitMaterial = new THREE.MeshBasicMaterial({
    colorWrite: false,
    depthWrite: false,
  });
  for (const [id, pos, size] of [
    ["library", [-24, 1.8, -24], [13, 3.6, 8]],
    ["courtyard", [0, 0.12, 8], [15, 0.2, 15]],
    ["ideas-garden", [9, 0.1, -15], [8, 0.2, 7]],
    ["football-field", [44, 0.16, 0], [19, 0.1, 29]],
  ]) {
    const hit = box(hitMaterial, pos, size);
    hit.castShadow = false;
    hit.receiveShadow = false;
    hit.userData.place = id;
    pickables.push(hit);
  }
  if (festival) {
    for (const z of [1, 17]) {
      for (const x of [-8, 8]) box(timber, [x, 2.1, z], [0.12, 4.2, 0.12]);
      const points = [];
      for (let i = 0; i <= 20; i++)
        points.push(
          new THREE.Vector3(
            -8 + i * 0.8,
            4.2 - Math.sin((i / 20) * Math.PI) * 0.7,
            z,
          ),
        );
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      geometries.add(lineGeometry);
      scene.add(
        new THREE.Line(
          lineGeometry,
          new THREE.LineBasicMaterial({ color: "#8b795c" }),
        ),
      );
      for (let i = 0; i < 15; i++) {
        const x = -7 + i,
          y = 4.1 - Math.sin(((x + 8) / 16) * Math.PI) * 0.7;
        const flag = new THREE.BufferGeometry();
        flag.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(
            [-0.3, 0, 0, 0.3, 0, 0, 0, -0.75, 0.08],
            3,
          ),
        );
        flag.computeVertexNormals();
        geometries.add(flag);
        mesh(
          flag,
          mat(["#b99b58", "#728d79", "#d9bf94", "#547b79"][i % 4], {
            side: THREE.DoubleSide,
          }),
          [x, y, z],
        );
      }
    }
    for (const x of [-7, 7]) {
      box(timber, [x, 0.9, 9], [2.2, 0.16, 1.3]);
      for (const z of [8.55, 9.45])
        for (const dx of [-0.8, 0.8])
          box(teal, [x + dx, 0.43, z], [0.12, 0.86, 0.12]);
      for (let i = 0; i < 3; i++)
        box(
          mat(["#d8b476", "#7a9985", "#e0d7b5"][i]),
          [x - 0.6 + i * 0.6, 1.12, 9],
          [0.4, 0.25, 0.4],
        );
    }
    const c = document.createElement("canvas");
    c.width = 512;
    c.height = 384;
    const ctx = c.getContext("2d");
    ctx.fillStyle = "#164f48";
    ctx.fillRect(0, 0, 512, 384);
    ctx.fillStyle = "#f6f2e8";
    ctx.textAlign = "center";
    ctx.font = "50px Georgia";
    ctx.fillText("Culture", 256, 140);
    ctx.fillText("Festival", 256, 205);
    ctx.font = "17px Arial";
    ctx.fillStyle = "#d5bb7a";
    ctx.fillText("MANY STORIES. ONE COMMUNITY.", 256, 275);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    const m = new THREE.MeshStandardMaterial({ map: t });
    mesh(new THREE.PlaneGeometry(2.7, 2), m, [6, 2.2, 16]);
    box(timber, [6, 1.2, 15.95], [0.1, 2.4, 0.1]);
  }
  batchStaticMeshes(scene, (o) =>
    o.parent === scene && ((o.geometry === sphere && o.position.y > 5 && o.position.z < 18) ||
      (o.position.y === -0.18 && o.scale.z === 0.12)));
  // Selection halo and route use shared data and are never mixed into picking.
  const haloGeo = new THREE.TorusGeometry(2, 0.09, 6, 48);
  geometries.add(haloGeo);
  const halo = mesh(
    haloGeo,
    mat("#c19343", { emissive: "#a67d36", emissiveIntensity: 0.3 }),
    [0, 0.28, 8],
  );
  halo.rotation.x = -Math.PI / 2;
  halo.visible = false;
  let routeGroup = new THREE.Group();
  scene.add(routeGroup);
  let selected = null,
    disposed = false,
    frame = 0,
    needsRender = true;
  const markers = document.createElement("div");
  markers.className = "scene-markers";
  container.append(markers);
  const markerPlaces = home
    ? places.filter((p) => ["courtyard", "library", "tech-lab"].includes(p.id))
    : places;
  const markerElements = markerPlaces.map((p) => {
    const button = document.createElement("button");
    button.className = "place-marker";
    button.innerHTML = `<span class="marker-dot"></span><span>${p.name}</span>`;
    button.setAttribute("aria-label", `Explore ${p.name}`);
    button.dataset.place = p.id;
    button.addEventListener("click", () => onSelect(p.id));
    markers.append(button);
    return { p, button };
  });
  const project = new THREE.Vector3();
  function positionMarkers() {
    const occupied = [];
    for (const { p, button } of markerElements) {
      let [x, z] = p.position;
      const y = p.id === "quiet-room" ? 10 : p.id === "gaming-zone" ? 1.6 : 5;
      project.set(x, y, z).project(camera);
      let sx = (project.x * 0.5 + 0.5) * container.clientWidth,
        sy = (-project.y * 0.5 + 0.5) * container.clientHeight;
      if (p.id === "gaming-zone") {
        sx += 27;
        sy += 20;
      }
      if (p.id === "quiet-room") {
        sx -= 20;
        sy -= 20;
      }
      const hidden =
        project.z > 1 ||
        sx < 15 ||
        sx > container.clientWidth - 20 ||
        sy < 10 ||
        sy > container.clientHeight - 10;
      button.style.display = hidden ? "none" : "";
      // Labels are anchored above architecture; colliding labels collapse to accessible dots.
      const collision = occupied.some(
        ([a, b]) => Math.abs(a - sx) < 105 && Math.abs(b - sy) < 31,
      );
      button.classList.toggle("compact", collision && p.id !== selected);
      if (!collision) occupied.push([sx, sy]);
      button.style.transform = `translate(${sx}px,${sy}px) translate(-50%,-50%)`;
      button.classList.toggle("selected", p.id === selected);
    }
  }
  function invalidate() {
    needsRender = true;
  }
  const resize = new ResizeObserver(() => {
    const w = container.clientWidth,
      h = container.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    activeRoom?.resize(w / h);
    invalidate();
  });
  resize.observe(container);
  let lastEnvironmentFrame = 0;
  function animate(time) {
    if (disposed) return;
    frame = requestAnimationFrame(animate);
    if (document.hidden || !inView) return;
    if (!activeRoom && cameraController.update(time)) needsRender = true;
    if (
      !activeRoom &&
      !reduced &&
      time - lastEnvironmentFrame > environmentInterval
    ) {
      lastEnvironmentFrame = time;
      lake.material.opacity = 0.94 + Math.sin(time * 0.00045) * 0.035;
      lake.material.transparent = true;
      scene.children
        .filter(
          (o) => o.geometry === sphere && o.position.y > 5 && o.position.z < 18,
        )
        .forEach(
          (o, i) => (o.rotation.z = Math.sin(time * 0.0004 + i) * 0.008),
        );
      scene.children
        .filter((o) => o.position.y === -0.18 && o.scale.z === 0.12)
        .forEach((o, i) => {
          o.userData.waveBase ??= o.position.x;
          o.position.x =
            o.userData.waveBase + Math.sin(time * 0.00035 + i) * 0.7;
        });
      needsRender = true;
    }
    if (needsRender) {
      renderer.render(activeRoom?.scene || scene, activeRoom?.camera || camera);
      if (activeRoom)
        activeRoom.positionMarkers(
          container.clientWidth,
          container.clientHeight,
        );
      else positionMarkers();
      renderer.domElement.dataset.room = activeRoom?.id || "campus";
      renderer.domElement.dataset.geometries = renderer.info.memory.geometries;
      renderer.domElement.dataset.textures = renderer.info.memory.textures;
      renderer.domElement.dataset.drawCalls = renderer.info.render.calls;
      needsRender = false;
    }
  }
  frame = requestAnimationFrame(animate);
  const visibilityObserver = new IntersectionObserver((entries) => {
    inView = entries[0].isIntersecting;
    if (inView) invalidate();
  });
  visibilityObserver.observe(container);
  let down = null;
  const activePointers = new Set();
  const raycaster = new THREE.Raycaster(),
    pointer = new THREE.Vector2();
  const pointerDown = (e) => {
    activePointers.add(e.pointerId);
    down = activeRoom || activePointers.size > 1 ? null : { x: e.clientX, y: e.clientY, id: e.pointerId };
  };
  const pointerMove = (e) => {
    if (down && Math.hypot(e.clientX - down.x, e.clientY - down.y) > 6) down = null;
  };
  const pointerCancel = (e) => {
    activePointers.delete(e.pointerId);
    down = null;
  };
  const pointerUp = (e) => {
    activePointers.delete(e.pointerId);
    const start = down;
    down = null;
    if (activeRoom) return;
    if (!start || start.id !== e.pointerId || Math.hypot(e.clientX - start.x, e.clientY - start.y) > 6)
      return;
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.set(
      ((e.clientX - rect.left) / rect.width) * 2 - 1,
      (-(e.clientY - rect.top) / rect.height) * 2 + 1,
    );
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObjects(pickables, false)[0];
    if (hit) onSelect(hit.object.userData.place);
    down = null;
  };
  renderer.domElement.addEventListener("pointerdown", pointerDown);
  renderer.domElement.addEventListener("pointermove", pointerMove);
  renderer.domElement.addEventListener("pointercancel", pointerCancel);
  renderer.domElement.addEventListener("pointerup", pointerUp);
  const contextLost = (e) => {
    e.preventDefault();
    onError("The 3D view was interrupted. Map view is still available.");
  };
  renderer.domElement.addEventListener("webglcontextlost", contextLost);
  const visibility = () => invalidate();
  document.addEventListener("visibilitychange", visibility);
  return {
    snapshot() {
      return cameraController.snapshot();
    },
    restore(saved) {
      cameraController.restore(saved);
    },
    enterInterior(id) {
      if (!activeRoom) campusSnapshot = cameraController.snapshot();
      activeRoom?.dispose();
      cameraController.setEnabled(false);
      markers.hidden = true;
      renderer.shadowMap.needsUpdate = true;
      activeRoom = buildInterior(id, renderer.domElement, {
        aspect: container.clientWidth / container.clientHeight,
        mobile,
        onChange: invalidate,
        onHotspot,
      });
      renderer.domElement.setAttribute("aria-label", `Interactive 3D ${activeRoom.name}. Choose a room detail or use Another view for keyboard exploration.`);
      invalidate();
    },
    exitInterior() {
      activeRoom?.dispose();
      renderer.renderLists.dispose();
      renderer.resetState();
      activeRoom = null;
      renderer.domElement.setAttribute("aria-label", "Interactive 3D model of the Serenity campus. Use the place list for keyboard selection.");
      renderer.shadowMap.needsUpdate = true;
      markers.hidden = false;
      cameraController.setEnabled(true);
      renderer.domElement.style.touchAction = mobile ? "pan-y" : "none";
      cameraController.restore(campusSnapshot);
      invalidate();
    },
    hotspot(id) {
      activeRoom?.selectHotspot(id);
    },
    roomView() {
      activeRoom?.view();
    },
    select(id, focus = true) {
      selected = id;
      const p = places.find((p) => p.id === id);
      halo.visible = !!p;
      if (p) {
        halo.position.set(p.position[0], 0.25, p.position[1]);
        if (focus) cameraController.focus(p);
      }
      invalidate();
    },
    route(ids) {
      scene.remove(routeGroup);
      routeGroup.traverse((o) => {
        if (o.isLine) {
          o.geometry.dispose();
          o.material.dispose();
        }
      });
      routeGroup = new THREE.Group();
      scene.add(routeGroup);
      if (ids?.length > 1) {
        const points = ids.map(
          (id) => new THREE.Vector3(nodes[id][0], 0.24, nodes[id][1]),
        );
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({ color: "#ba792c" });
        const line = new THREE.Line(geometry, material);
        routeGroup.add(line);
        for (let i = 1; i < points.length; i++) {
          const a = points[i - 1],
            b = points[i],
            length = a.distanceTo(b);
          if (length < 0.1) continue;
          const m = box(
            mat("#bc8e47"),
            [(a.x + b.x) / 2, 0.18, (a.z + b.z) / 2],
            [0.5, 0.08, length],
            routeGroup,
          );
          m.rotation.y = Math.atan2(b.x - a.x, b.z - a.z);
        }
      }
      invalidate();
    },
    reset() {
      selected = null;
      halo.visible = false;
      cameraController.reset();
      invalidate();
    },
    zoom(direction) {
      cameraController.zoom(direction);
    },
    dispose() {
      disposed = true;
      cancelAnimationFrame(frame);
      resize.disconnect();
      visibilityObserver.disconnect();
      activeRoom?.dispose();
      activeRoom = null;
      cameraController.dispose();
      renderer.domElement.removeEventListener("webglcontextlost", contextLost);
      renderer.domElement.removeEventListener("pointerdown", pointerDown);
      renderer.domElement.removeEventListener("pointermove", pointerMove);
      renderer.domElement.removeEventListener("pointercancel", pointerCancel);
      renderer.domElement.removeEventListener("pointerup", pointerUp);
      document.removeEventListener("visibilitychange", visibility);
      const usedGeometry = new Set(geometries),
        usedMaterials = new Set(Object.values(materials));
      scene.traverse((o) => {
        if (o.isInstancedMesh) o.dispose();
        if (o.geometry) usedGeometry.add(o.geometry);
        if (o.material) usedMaterials.add(o.material);
      });
      usedGeometry.forEach((g) => g.dispose());
      usedMaterials.forEach((m) => {
        m.map?.dispose();
        m.dispose();
      });
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
      markers.remove();
    },
  };
}
