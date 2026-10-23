import { Vector3, TOUCH } from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// The camera stays above the terrain and outside the buildings in normal use.
export function createCameraController(
  camera,
  canvas,
  { mobile, home, onChange },
) {
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = false;
  controls.enablePan = false;
  controls.enableZoom = !home;
  controls.minDistance = 36;
  controls.maxDistance = 185;
  controls.minPolarAngle = 0.25;
  controls.maxPolarAngle = Math.PI / 2.18;
  controls.touches.ONE = mobile ? TOUCH.PAN : TOUCH.ROTATE;
  controls.touches.TWO = TOUCH.DOLLY_ROTATE;
  controls.mouseButtons.RIGHT = null;
  controls.target.set(5, 7, -3);
  camera.position.set(...(mobile ? [70, 68, 137] : [35, 34, 104]));
  controls.update();
  const overviewPosition = camera.position.clone();
  const overviewTarget = controls.target.clone();
  let flight = null;
  const changed = () => {
    flight = null;
    onChange();
  };
  controls.addEventListener("change", changed);
  function fly(position, target) {
    if (reducedMotion) {
      camera.position.copy(position);
      controls.target.copy(target);
      camera.lookAt(target);
      onChange();
    } else {
      flight = {
        positionFrom: camera.position.clone(),
        positionTo: position,
        targetFrom: controls.target.clone(),
        targetTo: target,
        time: performance.now(),
      };
    }
  }
  return {
    snapshot() {
      return {
        position: camera.position.toArray(),
        target: controls.target.toArray(),
      };
    },
    restore(saved) {
      if (!saved) return;
      flight = null;
      camera.position.fromArray(saved.position);
      controls.target.fromArray(saved.target);
      controls.update();
      onChange();
    },
    setEnabled(enabled) {
      controls.enabled = enabled;
    },
    update(time) {
      if (!flight) return false;
      const fraction = Math.min(1, (time - flight.time) / 750);
      const ease = 1 - (1 - fraction) ** 3;
      camera.position.lerpVectors(flight.positionFrom, flight.positionTo, ease);
      controls.target.lerpVectors(flight.targetFrom, flight.targetTo, ease);
      if (fraction === 1) {
        camera.position.copy(flight.positionTo);
        controls.target.copy(flight.targetTo);
        flight = null;
      }
      camera.lookAt(controls.target);
      return true;
    },
    focus(place) {
      const target = new Vector3(
        place.position[0],
        place.level === "Upper" ? 4 : 1,
        place.position[1],
      );
      if (place.id === "library") {
        target.set(38, 1, -24);
        fly(target.clone().add(new Vector3(22, 16, -30)), target);
      } else fly(target.clone().add(new Vector3(32, 31, 37)), target);
    },
    reset() {
      fly(overviewPosition, overviewTarget);
    },
    zoom(direction) {
      flight = null;
      camera.position
        .sub(controls.target)
        .multiplyScalar(direction > 0 ? 0.85 : 1.18)
        .clampLength(controls.minDistance, controls.maxDistance)
        .add(controls.target);
      camera.lookAt(controls.target);
      onChange();
    },
    dispose() {
      controls.removeEventListener("change", changed);
      controls.dispose();
    },
  };
}
