import { InstancedMesh } from "three";

// Repeated furniture and facade parts share a draw call. Transparent panes remain
// separate for depth sorting; callers can retain animated meshes as ordinary objects.
export function batchStaticMeshes(root, exclude = () => false) {
  root.updateMatrixWorld(true);
  const groups = new Map();
  root.traverse((mesh) => {
    if (!mesh.isMesh || mesh.isInstancedMesh || mesh.material.transparent ||
        Array.isArray(mesh.material) || exclude(mesh)) return;
    const key = [mesh.geometry.uuid, mesh.material.uuid, mesh.castShadow,
      mesh.receiveShadow, mesh.customDepthMaterial?.uuid].join(":");
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(mesh);
  });
  for (const meshes of groups.values()) {
    if (meshes.length < 4) continue;
    const first = meshes[0];
    const batch = new InstancedMesh(first.geometry, first.material, meshes.length);
    batch.castShadow = first.castShadow;
    batch.receiveShadow = first.receiveShadow;
    batch.customDepthMaterial = first.customDepthMaterial;
    meshes.forEach((mesh, i) => {
      batch.setMatrixAt(i, mesh.matrixWorld);
      mesh.removeFromParent();
    });
    batch.computeBoundingSphere();
    root.add(batch);
  }
}
