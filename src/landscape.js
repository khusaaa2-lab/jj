import * as THREE from "three";

// Continuous ridgelines, shared by the exterior and the lake-facing rooms.
// Vertex colour supplies distant forest, exposed rock and irregular snow caps.
export function alpineRidge({
  width = 400,
  depth = 75,
  height = 48,
  seed = 0,
} = {}) {
  const geometry = new THREE.PlaneGeometry(width, depth, 112, 22);
  geometry.rotateX(-Math.PI / 2);
  const positions = geometry.attributes.position;
  const colours = [];
  const forest = new THREE.Color("#274b3c");
  const rock = new THREE.Color("#6a7975");
  const snow = new THREE.Color("#e5ebe8");
  const colour = new THREE.Color();
  for (let i = 0; i < positions.count; i++) {
    const x = positions.getX(i),
      z = positions.getZ(i);
    const along = x / width;
    const ridge =
      0.46 +
      0.17 * Math.sin(along * 21 + seed) +
      0.12 * Math.sin(along * 43 + seed * 1.7) +
      0.065 * Math.sin(along * 81 + seed);
    const profile = Math.pow(
      Math.max(0, 1 - Math.abs(z / (depth * 0.56))),
      0.85,
    );
    const detail =
      Math.sin(x * 0.27 + z * 0.33 + seed) * 2.2 +
      Math.sin(x * 0.61 - z * 0.22) * 1.2 +
      Math.sin(x * 1.7 + z * 0.75) * 0.45;
    const y = Math.max(-2, height * ridge * profile + detail * profile - 1);
    positions.setY(i, y);
    const level = y / height;
    colour
      .copy(forest)
      .lerp(
        rock,
        THREE.MathUtils.smoothstep(
          level + Math.sin(x * 0.61 + z * 0.9) * 0.04,
          0.24,
          0.53,
        ),
      );
    colour.lerp(
      snow,
      THREE.MathUtils.smoothstep(
        level + Math.sin(x * 0.21) * 0.025,
        0.55,
        0.65,
      ),
    );
    colours.push(colour.r, colour.g, colour.b);
  }
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colours, 3));
  geometry.computeVertexNormals();
  return new THREE.Mesh(
    geometry,
    new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 1,
    }),
  );
}
