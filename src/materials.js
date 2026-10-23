import * as THREE from "three";

// Small, deterministic, locally generated surface textures; no texture downloads.
export function surfaceTexture(kind, repeat = 1) {
  const canvas = document.createElement("canvas");
  canvas.dataset.surface = kind;
  canvas.width = canvas.height = 256;
  const c = canvas.getContext("2d");
  let seed = 73;
  const random = () =>
    (seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296;
  const palettes = {
    stone: ["#e3dbc9", "#dfd6c4", "#e5ddcb"],
    wood: ["#b98e60", "#bd9569", "#b48a5f"],
    roof: ["#465253", "#455152", "#435051"],
    floor: ["#bda17f", "#c1a583", "#baa080"],
    grass: ["#91a379", "#8fa077", "#96a780"],
    felt: ["#819585", "#7d9181", "#879988"],
    tile: ["#d5d0be", "#d9d4c4", "#d1ccba"],
  };
  const colours = palettes[kind] || palettes.stone;
  c.fillStyle = colours[0];
  c.fillRect(0, 0, 256, 256);
  if (kind === "grass" || kind === "felt") {
    for (let i = 0; i < 9000; i++) {
      c.fillStyle = colours[Math.floor(random() * 3)];
      c.fillRect(random() * 256, random() * 256, 1, 1 + random() * 3);
    }
  } else if (kind === "wood" || kind === "floor") {
    for (let x = 0; x < 256; x += 32) {
      c.fillStyle = colours[Math.floor(random() * 3)];
      c.fillRect(x, 0, 31, 256);
      for (let j = 0; j < 16; j++) {
        c.strokeStyle = `rgba(75,46,22,${random() * 0.12})`;
        c.beginPath();
        c.moveTo(x + random() * 30, 0);
        c.bezierCurveTo(
          x + random() * 32,
          65,
          x + random() * 32,
          180,
          x + random() * 32,
          256,
        );
        c.stroke();
      }
    }
  } else {
    const height = kind === "roof" ? 23 : 39;
    for (let y = 0; y < 256; y += height)
      for (let x = -64; x < 256; x += kind === "roof" ? 42 : 75) {
        c.fillStyle = colours[Math.floor(random() * 3)];
        const offset = (Math.floor(y / height) % 2) * 21;
        c.fillRect(x + offset, y, kind === "roof" ? 40 : 73, height - 1);
      }
    for (let i = 0; i < 2600; i++) {
      c.fillStyle = `rgba(45,47,35,${random() * 0.055})`;
      c.fillRect(random() * 256, random() * 256, 1 + random() * 2, 1);
    }
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(repeat, repeat);
  texture.anisotropy = 4;
  return texture;
}
export function disposeScene(root) {
  const geometry = new Set(),
    materials = new Set(),
    textures = new Set();
  root.traverse((o) => {
    if (o.isInstancedMesh) o.dispose();
    if (o.shadow) o.shadow.dispose();
    if (o.geometry) geometry.add(o.geometry);
    if (o.material)
      (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) =>
        materials.add(m),
      );
  });
  materials.forEach((m) => {
    for (const value of Object.values(m))
      if (value?.isTexture) textures.add(value);
  });
  textures.forEach((t) => t.dispose());
  materials.forEach((m) => m.dispose());
  geometry.forEach((g) => g.dispose());
  root.clear();
}
