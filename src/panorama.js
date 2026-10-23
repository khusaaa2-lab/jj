import { t } from "./i18n.js";
import { esc, icon } from "./ui.js";
export const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
export function panoramaLayout(width, height, ratio, zoom, x, y) {
  const base = Math.max(width / ratio, height);
  const imageHeight = base * zoom,
    imageWidth = imageHeight * ratio;
  return {
    imageWidth,
    imageHeight,
    x: clamp(x, -(imageWidth - width) / 2, (imageWidth - width) / 2),
    y: clamp(y, -(imageHeight - height) / 2, (imageHeight - height) / 2),
  };
}
export function mountPanorama(host, room, onHotspot) {
  host.innerHTML = `<div class="panorama-viewport" tabindex="0" role="group" aria-label="${esc(t("Панорама: стрелки для перемещения, плюс и минус для масштаба, Home для сброса.", "Panorama: arrow keys to pan, plus and minus to zoom, Home to reset."))}" aria-describedby="panorama-description"><div class="panorama-plane"><img src="/media/${room.image}.webp" width="2172" height="724" alt="${esc(room.description)}" draggable="false">${room.hotspots.map((h, i) => `<button class="panorama-point" data-room-hotspot="${h.id}" style="left:${h.x * 100}%;top:${h.y * 100}%" aria-label="${esc(h.label)}" aria-pressed="false"><span>${i + 1}</span><span class="point-label">${h.label}</span></button>`).join("")}</div><div class="panorama-loading" role="status">${t("Загружаем панораму…", "Loading the panorama…")}</div></div><p class="sr-only" id="panorama-description">${room.description}</p><div class="panorama-tools" aria-label="${t("Управление панорамой", "Panorama controls")}"><button class="icon-button" data-pan="-1" aria-label="${t("Посмотреть левее", "Pan left")}">←</button><button class="icon-button" data-pan="1" aria-label="${t("Посмотреть правее", "Pan right")}">→</button><span></span><button class="icon-button" data-pan-zoom="-1" aria-label="${t("Уменьшить панораму", "Zoom panorama out")}">−</button><output class="panorama-scale">100%</output><button class="icon-button" data-pan-zoom="1" aria-label="${t("Увеличить панораму", "Zoom panorama in")}">+</button><button class="icon-button" data-pan-reset aria-label="${t("Сбросить панораму", "Reset panorama")}">${icon("reset", 18)}</button></div><p class="panorama-hint">${t("Проведите влево или вправо · точки расскажут о комнате", "Drag left or right · choose a detail to discover the room")}</p>`;
  const viewport = host.querySelector(".panorama-viewport"),
    plane = host.querySelector(".panorama-plane"),
    img = plane.querySelector("img");
  let x = 0,
    y = 0,
    zoom = 1,
    disposed = false,
    drag = null,
    moved = false;
  function render() {
    const w = viewport.clientWidth,
      h = viewport.clientHeight;
    if (!w || !h) return;
    const result = panoramaLayout(w, h, 3, zoom, x, y);
    ({ x, y } = result);
    plane.style.width = `${result.imageWidth}px`;
    plane.style.height = `${result.imageHeight}px`;
    plane.style.transform = `translate(${(w - result.imageWidth) / 2 + x}px,${(h - result.imageHeight) / 2 + y}px)`;
    viewport.dataset.x = x.toFixed(2);
    viewport.dataset.y = y.toFixed(2);
    viewport.dataset.zoom = String(zoom);
    host.querySelector(".panorama-scale").value = `${Math.round(zoom * 100)}%`;
    host.querySelector('[data-pan-zoom="-1"]').disabled = zoom <= 1;
    host.querySelector('[data-pan-zoom="1"]').disabled = zoom >= 2.4;
    host.querySelector('[data-pan="-1"]').disabled =
      x >= (result.imageWidth - w) / 2 - 1;
    host.querySelector('[data-pan="1"]').disabled =
      x <= -(result.imageWidth - w) / 2 + 1;
  }
  function changeZoom(delta) {
    const next = clamp(zoom + delta * 0.2, 1, 2.4);
    x *= next / zoom;
    y *= next / zoom;
    zoom = next;
    render();
  }
  function reset() {
    x = 0;
    y = 0;
    zoom = 1;
    render();
  }
  const pointerdown = (e) => {
    if (e.target.closest("button") || e.button > 0) return;
    drag = { id: e.pointerId, x: e.clientX, y: e.clientY };
    moved = false;
    viewport.setPointerCapture(e.pointerId);
  };
  const pointermove = (e) => {
    if (!drag || drag.id !== e.pointerId) return;
    const dx = e.clientX - drag.x,
      dy = e.clientY - drag.y;
    if (Math.abs(dx) + Math.abs(dy) > 2) moved = true;
    x += dx;
    if (e.pointerType !== "touch") y += dy;
    drag.x = e.clientX;
    drag.y = e.clientY;
    render();
  };
  const pointerup = () => {
    drag = null;
  };
  const click = (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    if (b.dataset.pan) x -= Number(b.dataset.pan) * viewport.clientWidth * 0.2;
    else if (b.dataset.panZoom) changeZoom(Number(b.dataset.panZoom));
    else if (b.hasAttribute("data-pan-reset")) reset();
    render();
  };
  const preventDraggedClick = (e) => {
    if (moved && !e.target.closest("button")) {
      e.preventDefault();
      e.stopPropagation();
    }
    moved = false;
  };
  const keydown = (e) => {
    if (e.target !== viewport) return;
    if (
      ![
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
        "+",
        "=",
        "-",
        "Home",
      ].includes(e.key)
    )
      return;
    e.preventDefault();
    if (e.key === "ArrowLeft") x += 90;
    if (e.key === "ArrowRight") x -= 90;
    if (e.key === "ArrowUp") y += 70;
    if (e.key === "ArrowDown") y -= 70;
    if (["+", "="].includes(e.key)) changeZoom(1);
    if (e.key === "-") changeZoom(-1);
    if (e.key === "Home") reset();
    render();
  };
  const wheel = (e) => {
    if (!e.altKey) return;
    e.preventDefault();
    changeZoom(e.deltaY > 0 ? -1 : 1);
  };
  viewport.addEventListener("pointerdown", pointerdown);
  viewport.addEventListener("pointermove", pointermove);
  viewport.addEventListener("pointerup", pointerup);
  viewport.addEventListener("pointercancel", pointerup);
  viewport.addEventListener("click", preventDraggedClick, true);
  viewport.addEventListener("keydown", keydown);
  viewport.addEventListener("wheel", wheel, { passive: false });
  host.addEventListener("click", click);
  const observer = new ResizeObserver(render);
  observer.observe(viewport);
  img.onload = () => {
    if (disposed) return;
    host.querySelector(".panorama-loading")?.remove();
    host.dataset.loaded = "true";
    render();
  };
  img.onerror = () => {
    if (disposed) return;
    host.querySelector(".panorama-loading").innerHTML =
      `${t("Не удалось загрузить изображение. Описания комнаты доступны ниже.", "The image could not load. Room descriptions are available below.")} <button class="button button-small" data-pan-retry>${t("Повторить", "Retry")}</button>`;
    host.querySelector("[data-pan-retry]").onclick = () => {
      img.src = `/media/${room.image}.webp?retry=${Date.now()}`;
    };
  };
  if (img.complete && img.naturalWidth) img.onload();
  render();
  return {
    focus(id) {
      const h = room.hotspots.find((h) => h.id === id);
      if (!h) return;
      const { imageWidth, imageHeight } = panoramaLayout(
        viewport.clientWidth,
        viewport.clientHeight,
        3,
        zoom,
        x,
        y,
      );
      x = (0.5 - h.x) * imageWidth;
      y = (0.5 - h.y) * imageHeight;
      render();
    },
    snapshot() {
      return { x, y, zoom };
    },
    restore(s) {
      if (s) {
        ({ x, y, zoom } = s);
        render();
      }
    },
    dispose() {
      disposed = true;
      observer.disconnect();
      img.onload = null;
      img.onerror = null;
      viewport.removeEventListener("pointerdown", pointerdown);
      viewport.removeEventListener("pointermove", pointermove);
      viewport.removeEventListener("pointerup", pointerup);
      viewport.removeEventListener("pointercancel", pointerup);
      viewport.removeEventListener("click", preventDraggedClick, true);
      viewport.removeEventListener("keydown", keydown);
      viewport.removeEventListener("wheel", wheel);
      host.removeEventListener("click", click);
    },
  };
}
