import canonical from "../public/data/places.json";
import { t, language, setLanguage, category, level, voteName } from "./i18n.js";
import {
  getPlaces,
  roomContent,
  interiorForPlace,
  placeImage,
  getTourStops,
} from "./content.js";
import { nodes, routeTo, voteOptions, devices, slots } from "./data.js";
import { createStore, validateIdea } from "./state.js";
import { bindIdeaForm } from "./idea-form.js";
import {
  header,
  footer,
  navItems,
  homePage,
  campusPage,
  learningPage,
  lifePage,
  eventsPage,
  projectPage,
  notFound,
} from "./pages.js";
import { esc, icon, link } from "./ui.js";
import { mountPanorama } from "./panorama.js";
import { createAmbience } from "./audio.js";
import { setupMotion } from "./motion.js";
import { internalPlaces, pathFor } from "./campus-media.js";

const app = document.querySelector("#app");
let storage;
try {
  storage = localStorage;
} catch {
  storage = {
    getItem() {
      throw Error("unavailable");
    },
    setItem() {
      throw Error("unavailable");
    },
  };
}
const store = createStore(
  canonical.map((p) => p.id),
  storage,
);
const audio = createAmbience();
let places = getPlaces(canonical),
  scene = null,
  panorama = null,
  selected = null,
  interiorId = null,
  view = "3d",
  routeVisible = false,
  tourActive = false,
  tourIndex = store.data.tour;
let sceneLoadToken = 0,
  cameraSnapshot = null,
  lastFocusPlace = null,
  interiorFocus = null,
  motionCleanup = null,
  homeObserver = null;
let sceneReady = false;
let sceneFailure = false;
const filters = { query: "", category: "All", level: "All", saved: false };
const dialog = document.querySelector("#message-dialog");
let dialogFocus;
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
function toast(message) {
  const el = $("#notice");
  el.textContent = message;
  el.classList.add("visible");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("visible"), 4800);
}
const saved = (message) =>
  store.persistent
    ? message
    : `${message} ${t("Хранилище недоступно: изменения сохранятся только на время визита.", "Storage is unavailable: changes last only for this visit.")}`;
function campusURL(updates, push = false) {
  const params = new URLSearchParams(location.search);
  for (const [k, v] of Object.entries(updates)) {
    if (v === null) params.delete(k);
    else params.set(k, v);
  }
  history[push ? "pushState" : "replaceState"](
    push ? { serenityInterior: true } : history.state,
    "",
    `/campus${params.size ? "?" + params : ""}`,
  );
}
function navigate(url) {
  history.pushState({}, "", url);
  cameraSnapshot = null;
  renderRoute();
  $("#main")?.setAttribute("tabindex", "-1");
  $("#main")?.focus({ preventScroll: true });
  scrollTo({ top: 0, behavior: "instant" });
}

function updateAudioUI() {
  const b = $("[data-sound]");
  if (b) {
    b.setAttribute("aria-pressed", String(audio.enabled));
    b.textContent = audio.enabled
      ? t("Выключить звук", "Mute sound")
      : t("Включить звук", "Enable sound");
  }
  const input = $("[data-volume]");
  if (input) input.value = String(Math.round(audio.volume * 100));
  $(".sound-menu")?.classList.toggle("sound-on", audio.enabled);
  document.documentElement.dataset.audio = audio.state;
}
audio.onChange(updateAudioUI);
function updateGlobalCopy() {
  document.documentElement.lang = language();
  $(".skip-link").textContent = t("Перейти к содержимому", "Skip to content");
  $('meta[name="description"]').content = t(
    "Serenity International School: кампус у озера, обучение, школьная жизнь и интерактивные панорамы помещений.",
    "Serenity International School: a lakeside campus, learning, school life and interactive room panoramas.",
  );
  dialog.innerHTML = `<button class="icon-button dialog-close" aria-label="${t("Закрыть окно", "Close dialog")}">${icon("close")}</button><span class="eyebrow">${t("ОСТАЁМСЯ НА СВЯЗИ", "STAY CONNECTED")}</span><h2 id="dialog-title">${t("Скоро будет<br>больше связи.", "A conversation,<br>coming soon.")}</h2><p>${t("Telegram-помощник и отдельный домен ещё не подключены. Пока исследуйте кампус, попробуйте демо или сохраните свою идею. Сообщения никуда не отправляются.", "The Telegram companion and dedicated domain are not connected yet. Explore the campus, try a local demo or save an idea for now. No messages are sent.")}</p><button class="button dialog-close">${t("Продолжить знакомство", "Keep exploring")}</button>`;
  updateAudioUI();
}
async function mountScene(home = false) {
  const token = ++sceneLoadToken,
    host = $("#campus-scene");
  if (!host || (!home && view !== "3d")) return;
  try {
    const { createCampus } = await import("./reference-campus.js");
    if (
      token !== sceneLoadToken ||
      !host.isConnected ||
      (!home && view !== "3d")
    )
      return;
    scene = createCampus(host, {
      places,
      home,
      onSelect: (id) =>
        home ? navigate("/campus?place=" + id) : selectPlace(id),
      onError: () => {
        if (token === sceneLoadToken) sceneFallback(home);
      },
    });
    sceneReady = true;
    sceneFailure = false;
    updateCampusModeCopy();
    if (selected && !home) scene.select(selected, !cameraSnapshot);
    if (cameraSnapshot && !home) scene.restore(cameraSnapshot);
    if (routeVisible && !home) scene.route(routeTo(selected));
    if (interiorId) scene.pause(true);
    // Reveal only after Three.js has created and rendered real mesh geometry.
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        if (token !== sceneLoadToken) return;
        host.classList.add("scene-ready");
        host.querySelector(".scene-loading")?.remove();
      }),
    );
    if (home) {
      $("#hero-mode-label").textContent = t(
        "3D-КАМПУС · ВЫБЕРИТЕ ЗДАНИЕ",
        "3D CAMPUS · CHOOSE A BUILDING",
      );
      $("[data-home-reset]").hidden = false;
    }
  } catch (error) {
    if (token !== sceneLoadToken) return;
    sceneFallback(home);
    console.info("Serenity: campus image and map available.", error.message);
  }
}
function sceneFallback(home) {
  sceneReady = false;
  sceneLoadToken++;
  scene?.dispose();
  scene = null;
  if (home) {
    $("#campus-scene")?.classList.remove("scene-ready");
    $("#hero-mode-label").textContent = t(
      "ВИД КАМПУСА · КАРТА И ПАНОРАМЫ ДОСТУПНЫ",
      "CAMPUS IMAGE · MAP & PANORAMAS AVAILABLE",
    );
    $("[data-home-reset]").hidden = true;
  } else {
    setView("map", true);
    toast(
      t(
        "WebGL недоступен. Показана резервная 2D-карта; все панорамы работают.",
        "WebGL is unavailable. This is the fallback 2D map; all panoramas work.",
      ),
    );
  }
}
function renderRoute() {
  ++sceneLoadToken;
  scene?.dispose();
  scene = null;
  sceneReady = false;
  panorama?.dispose();
  panorama = null;
  motionCleanup?.();
  homeObserver?.disconnect();
  selected = null;
  interiorId = null;
  tourActive = false;
  routeVisible = false;
  places = getPlaces(canonical);
  const path = location.pathname.replace(/\/$/, "") || "/",
    query = new URLSearchParams(location.search);
  if (query.get("view") === "map") view = "map";
  else if (["3d", "video"].includes(query.get("view"))) view = "3d";
  const pages = {
    "/": homePage,
    "/campus": () => campusPage(places, view, store),
    "/learning": learningPage,
    "/life": lifePage,
    "/events": eventsPage,
    "/project": projectPage,
  };
  app.innerHTML =
    header(path) +
    (pages[path] || notFound)() +
    (path === "/campus" ? "" : footer());
  document.title = `${navItems().find(([href]) => href === path)?.[1] || t("Страница не найдена", "Page not found")} · Serenity International School`;
  updateGlobalCopy();
  if (path === "/") {
    homeObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          homeObserver.disconnect();
          mountScene(true);
        }
      },
      { rootMargin: "200px" },
    );
    homeObserver.observe($("#campus-scene"));
  }
  if (path === "/campus") {
    $("#place-search").value = filters.query;
    $("#category-filter").value = filters.category;
    $("#level-filter").value = filters.level;
    $("#place-search").oninput = (e) => {
      filters.query = e.target.value;
      renderDirectory();
    };
    $("#category-filter").onchange = (e) => {
      filters.category = e.target.value;
      renderDirectory();
    };
    $("#level-filter").onchange = (e) => {
      filters.level = e.target.value;
      renderDirectory();
    };
    renderDirectory();
    if (query.has("tour")) {
      tourIndex = query.get("tour") === "start" ? 0 : store.data.tour;
      tourActive = true;
      showTourStop();
    } else if (query.has("place")) {
      if (places.some((p) => p.id === query.get("place")))
        selectPlace(query.get("place"), false);
      else
        toast(
          t(
            "Такого места нет. Выберите место из списка.",
            "That place was not found. Choose a place from the list.",
          ),
        );
    }
    if (
      query.get("interior") &&
      interiorForPlace[selected] === query.get("interior")
    )
      enterInterior(query.get("interior"), false);
    if (view === "map") setView("map", sceneFailure);
    else mountScene();
  }
  if (path === "/events") renderVotes();
  if (path === "/life") setupBooking();
  if (path === "/project") setupIdea();
  updateCampusModeCopy();
  motionCleanup = setupMotion();
}
function renderDirectory() {
  if (!$("#place-list")) return;
  const matches = places.filter(
    (p) =>
      `${p.name} ${p.description} ${category(p.category)}`
        .toLowerCase()
        .includes(filters.query.toLowerCase()) &&
      (filters.category === "All" || p.category === filters.category) &&
      (filters.level === "All" || p.level === filters.level) &&
      (!filters.saved || store.data.favourites.includes(p.id)),
  );
  $("#place-count").textContent =
    `${t("Найдено мест:", "Places found:")} ${matches.length}${filters.saved ? " · " + t("Избранное", "Saved") : ""}`;
  $("[data-saved-filter]").setAttribute("aria-pressed", String(filters.saved));
  $("#place-list").innerHTML = matches.length
    ? matches
        .map(
          (p) =>
            `<button class="place-row ${p.id === selected ? "active" : ""}" data-select="${p.id}" aria-pressed="${p.id === selected}"><span class="place-index">${String(places.indexOf(p) + 1).padStart(2, "0")}</span><span>${p.name}<small>${category(p.category)} · ${level(p.level)}</small></span>${icon(store.data.favourites.includes(p.id) ? "heart" : "diagonal", 15)}</button>`,
        )
        .join("")
    : `<div class="empty-state"><h3>${t("Здесь пока пусто.", "Nothing here yet.")}</h3><p>${filters.saved ? t("Сохраните место сердечком или очистите фильтры.", "Save a place with the heart, or clear the filters.") : t("Попробуйте другой запрос или очистите фильтры.", "Try another search, or clear the filters.")}</p><button class="text-link" data-clear-filters>${t("Очистить фильтры", "Clear filters")}</button></div>`;
}
function selectPlace(id, updateURL = true, focus = true) {
  const p = places.find((p) => p.id === id);
  if (!p) return;
  lastFocusPlace = id;
  selected = id;
  routeVisible = false;
  scene?.select(id, focus);
  scene?.route([]);
  if (updateURL) campusURL({ place: id });
  const panel = $("#place-panel");
  panel.hidden = tourActive;
  panel.classList.remove("collapsed");
  $(".explorer").dataset.mode = tourActive ? "tour" : "selected";
  panel.innerHTML = `<button class="text-link all-places-button" data-close-place>← ${t("Все места", "All places")}</button><div class="place-panel-art"><img src="${placeImage(id)}" width="1000" height="600" alt="${esc(p.name)}"><span>${String(places.indexOf(p) + 1).padStart(2, "0")} / 13</span></div><div class="panel-top"><span class="eyebrow">${category(p.category)} · ${level(p.level)}</span><button class="icon-button sheet-collapse" data-collapse-place aria-expanded="true" aria-label="${t("Свернуть описание", "Collapse place details")}">⌄</button></div><h2 tabindex="-1">${p.name}</h2><p class="place-tag">${p.tag}</p><div class="place-detail-body"><p>${p.description}</p><ul class="activity-list">${p.activities.map((a) => `<li>${a}</li>`).join("")}</ul><p class="practical-rule">${p.rule}</p>${interiorForPlace[id] ? `<button class="button enter-building" data-enter-interior="${interiorForPlace[id]}">${t("Войти в здание", "Enter building")}${icon("diagonal", 17)}</button>` : `<span class="small-note">${t("Вид снаружи · рассмотрите место на кампусе.", "Exterior viewpoint · explore this place on campus.")}</span>`}<div class="panel-actions"><button class="button button-small button-outline" data-show-route>${icon("map", 16)} ${t("Маршрут", "Show route")}</button><button class="button button-small button-outline" data-favourite aria-pressed="${store.data.favourites.includes(id)}">${icon("heart", 16)}<span>${store.data.favourites.includes(id) ? t("Сохранено", "Saved") : t("Сохранить", "Save place")}</span></button></div><div id="route-description" class="route-description" aria-live="polite"></div>${p.transition ? `<p class="small-note">${p.transition}</p>` : ""}</div>`;
  $$(".map-place").forEach((g) => {
    g.classList.toggle("active", g.dataset.place === id);
    g.setAttribute("aria-pressed", String(g.dataset.place === id));
  });
  $("#map-route").innerHTML = "";
  renderDirectory();
  const siblings = Object.entries(internalPlaces).filter(([child, parent]) => parent === id || child === id);
  if (siblings.length) {
    const related = siblings.map(([child, parent]) => child === id ? parent : child);
    panel.querySelector(".place-detail-body").insertAdjacentHTML("beforeend", `<div class="building-rooms"><span class="eyebrow">${t("В ЭТОМ ЖЕ КОРПУСЕ", "IN THE SAME BUILDING")}</span>${related.map(key => `<button class="text-link" data-select="${key}">${esc(places.find(p=>p.id===key).name)} ${icon("arrow",14)}</button>`).join("")}</div>`);
  }
  if (!tourActive && focus)
    panel.querySelector("h2").focus({ preventScroll: true });
}
function closePlace() {
  $("#place-panel").hidden = true;
  $(".explorer").dataset.mode = "overview";
  selected = null;
  routeVisible = false;
  scene?.select(null, false);
  scene?.route([]);
  campusURL({ place: null });
  $("#map-route").innerHTML = "";
  $$(".map-place").forEach((g) => {
    g.classList.remove("active");
    g.setAttribute("aria-pressed", "false");
  });
  renderDirectory();
  ($(`[data-campus-place="${internalPlaces[lastFocusPlace] || lastFocusPlace}"]`) || $(`[data-select="${lastFocusPlace}"]`))?.focus({ preventScroll: true });
}
function updateCampusModeCopy() {
  const status = $("#campus-render-status"), mode = $("#campus-mode-note");
  if (status) {
    status.hidden = !sceneFailure;
    status.textContent = sceneFailure ? t("3D недоступно в этом браузере. Резервная 2D-карта и все помещения доступны.", "3D is unavailable in this browser. The fallback 2D map and all interiors remain available.") : "";
  }
  if (mode) mode.textContent = interiorId
    ? t("Панорама помещения · ограниченное перемещение", "Room panorama · bounded panning")
    : view === "map"
      ? t("2D-карта по референсу · 10 панорам помещений", "Reference-based 2D map · 10 room panoramas")
      : sceneReady
        ? t("Объёмная модель по референсу · 10 панорам помещений", "Reference-based spatial model · 10 room panoramas")
        : t("Подготовка 3D-модели · список мест доступен", "Preparing the 3D model · the directory is available");
}
function setView(next, failed = false) {
  view = next;
  sceneFailure = failed;
  const host = $("#campus-scene");
  if (!host) return;
  $$("[data-view]").forEach((b) =>
    b.setAttribute("aria-pressed", String(b.dataset.view === next)),
  );
  host.hidden = next !== "3d";
  $("#map-container").hidden = next !== "map";
  $(".camera-tools").hidden = next === "map";
  $(".explorer-help").hidden = next === "map";
  $(".explorer").classList.toggle("map-mode", next === "map");
  if (next === "map") {
    sceneLoadToken++;
    if (scene) {
      cameraSnapshot = scene.snapshot();
      scene.dispose();
      scene = null;
    }
    sceneReady = false;
  } else if (!scene) mountScene();
  campusURL({ view: next });
  updateCampusModeCopy();
}
function showRoute() {
  if (!selected) return;
  routeVisible = true;
  const route = routeTo(selected);
  scene?.route(route);
  $("#map-route").innerHTML =
    `<polyline points="${pathFor(selected).map(([x,y]) => `${x*1280},${y*720}`).join(" ")}" fill="none" stroke="#f7d68b" stroke-width="5" stroke-linejoin="round"/>`;
  const names = route
    .map((id) => places.find((p) => p.id === id)?.name)
    .filter(Boolean);
  $("#route-description").innerHTML =
    `<strong>${t("От главного входа", "From the main entrance")}</strong><p>${names.map(esc).join(" → ")}</p><small>${t("Условный маршрут по дорожкам кампуса", "Illustrative route along campus paths")}</small>`;
}
function startTour(resume = false) {
  if (location.pathname !== "/campus") {
    navigate("/campus?tour=" + (resume ? "resume" : "start"));
    return;
  }
  tourIndex = resume ? store.data.tour : 0;
  tourActive = true;
  campusURL({ tour: "resume" });
  showTourStop();
}
function showTourStop() {
  store.update((s) => {
    s.tour = tourIndex;
  });
  const [id, title, text] = getTourStops()[tourIndex];
  selectPlace(id);
  const p = places.find((p) => p.id === id);
  const panel = $("#tour-panel");
  panel.hidden = false;
  panel.innerHTML = `<div class="tour-progress" style="--progress:${((tourIndex + 1) / 8) * 100}%"></div><span class="eyebrow">${t("ЭКСКУРСИЯ ПО SERENITY", "THE SERENITY TOUR")} · ${tourIndex + 1} / 8</span><span class="tour-location">${p.name}</span><h3 tabindex="-1">${title}</h3><p>${text}</p><img src="${placeImage(id)}" width="700" height="400" alt="${p.name}">${interiorForPlace[id] ? `<button class="button button-outline" data-enter-interior="${interiorForPlace[id]}">${t("Заглянуть внутрь", "Look inside")}${icon("diagonal", 16)}</button>` : ""}<div class="tour-controls"><button class="icon-button" data-tour-back aria-label="${t("Предыдущая остановка", "Previous tour stop")}" ${tourIndex === 0 ? "disabled" : ""}>←</button><button class="button button-small" data-tour-next>${tourIndex === 7 ? t("Завершить", "Finish tour") : t("Далее", "Next stop")}${icon("arrow", 15)}</button></div><button class="text-link" data-tour-exit>${t("Выйти из экскурсии", "Exit tour")}</button>`;
}
function exitTour(finished = false) {
  tourActive = false;
  $("#tour-panel").hidden = true;
  campusURL({ tour: null });
  if (selected) selectPlace(selected, false, false);
  else closePlace();
  const launch = $(".tour-launch");
  launch.removeAttribute("data-tour-start");
  launch.removeAttribute("data-tour-resume");
  launch.setAttribute(
    store.data.tour > 0 ? "data-tour-resume" : "data-tour-start",
    "",
  );
  launch.innerHTML =
    icon("play", 14) +
    (store.data.tour > 0
      ? t("Продолжить экскурсию", "Resume tour")
      : t("Экскурсия: 8 остановок", "Tour: 8 stops"));
  toast(
    finished
      ? t(
          "Все восемь остановок пройдены. Продолжайте исследовать!",
          "You have explored all eight stops. Keep discovering!",
        )
      : saved(
          t(
            "Экскурсия приостановлена. Можно продолжить позже.",
            "Tour paused. You can resume later.",
          ),
        ),
  );
}
function enterInterior(id, push = true) {
  if (!roomContent(id) || interiorForPlace[selected] !== id) return;
  interiorFocus = document.activeElement;
  cameraSnapshot = scene?.snapshot() || cameraSnapshot;
  scene?.pause(true);
  panorama?.dispose();
  interiorId = id;
  updateCampusModeCopy();
  $(".explorer").dataset.mode = "interior";
  if (push) campusURL({ interior: id }, true);
  const room = roomContent(id),
    shell = $("#interior-shell");
  shell.hidden = false;
  shell.innerHTML = `<div class="interior-header"><button class="button button-outline button-small" data-back-campus>← ${tourActive ? t("К экскурсии", "Back to tour") : t("К кампусу", "Back to campus")}</button><div><span class="eyebrow">${t("ПАНОРАМА ПОМЕЩЕНИЯ", "ROOM PANORAMA")}</span><h2 tabindex="-1">${room.name}</h2><p>${room.subtitle}</p></div><button class="icon-button" data-back-campus aria-label="${t("Закрыть помещение", "Close room")}">${icon("close")}</button></div><div class="panorama-container"></div><div class="interior-bottom"><div class="room-hotspots" aria-label="${t("Подробности комнаты", "Room details")}">${room.hotspots.map((h, i) => `<button data-room-hotspot="${h.id}" aria-pressed="false"><span>0${i + 1}</span>${h.label}${icon("diagonal", 14)}</button>`).join("")}</div><div id="hotspot-description" class="hotspot-description" aria-live="polite"><span class="eyebrow">${t("РАССМОТРИТЕ БЛИЖЕ", "TAKE A CLOSER LOOK")}</span><p>${room.description}</p><small>${t("Широкий перспективный вид с ограниченным перемещением.", "A wide perspective view with bounded panning.")}</small></div></div>`;
  panorama = mountPanorama(
    shell.querySelector(".panorama-container"),
    room,
    showHotspot,
  );
  shell.querySelector("h2").focus({ preventScroll: true });
}
function leaveInterior(updateURL = true) {
  if (!interiorId) return;
  if (updateURL && history.state?.serenityInterior) {
    history.back();
    return;
  }
  panorama?.dispose();
  panorama = null;
  interiorId = null;
  updateCampusModeCopy();
  $("#interior-shell").hidden = true;
  $(".explorer").dataset.mode = tourActive
    ? "tour"
    : selected
      ? "selected"
      : "overview";
  scene?.pause(false);
  scene?.restore(cameraSnapshot);
  campusURL({ interior: null });
  const button = $(
    tourActive
      ? "#tour-panel [data-enter-interior]"
      : "#place-panel [data-enter-interior]",
  );
  (button || interiorFocus)?.focus({ preventScroll: true });
}
function showHotspot(id) {
  const hotspot = roomContent(interiorId)?.hotspots.find((h) => h.id === id);
  if (!hotspot) return;
  panorama?.focus(id);
  $$("[data-room-hotspot]").forEach((b) =>
    b.setAttribute("aria-pressed", String(b.dataset.roomHotspot === id)),
  );
  $("#hotspot-description").innerHTML =
    `<span class="eyebrow">${hotspot.label}</span><p>${hotspot.text}</p>${interiorId === "games-lounge" && id === "console" ? link("/life#games", t("Попробовать демо-бронирование", "Try the demo booking"), "text-link") : ""}`;
}
function renderVotes() {
  $("#vote-options").innerHTML =
    voteOptions
      .map(
        (v, i) =>
          `<button class="vote-option ${store.data.vote === v ? "chosen" : ""}" data-vote="${v}" aria-pressed="${store.data.vote === v}"><span class="vote-symbol">${icon(["globe", "cube", "leaf"][i], 25)}</span><span><strong>${voteName(v)}</strong><small>${[t("Культуры, истории и немного себя.", "Cultures, stories and a little of yourself."), t("Создавать, проверять и решать.", "Create, test and solve."), t("Выйти навстречу новым открытиям.", "Step outside and follow your curiosity.")][i]}</small></span>${icon(store.data.vote === v ? "check" : "arrow", 18)}</button>`,
      )
      .join("") +
    `<p class="form-status" aria-live="polite">${store.data.vote ? esc(saved(t("Ваш выбор: ", "Your choice: ") + voteName(store.data.vote) + t(". Его можно изменить.", ". You can change it."))) : t("Выберите идею, чтобы сохранить демо-голос.", "Choose an idea to save your demo vote.")}</p>`;
}
function setupBooking() {
  const form = $("#booking-form");
  form.onsubmit = (e) => {
    e.preventDefault();
    const data = new FormData(form),
      day = data.get("day"),
      device = data.get("device"),
      slot = data.get("slot");
    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(day) ||
      !devices.includes(device) ||
      !slots.includes(slot)
    ) {
      toast(
        t(
          "Выберите день, устройство и время.",
          "Choose a day, device and time slot.",
        ),
      );
      return;
    }
    if (store.data.bookings[day]) {
      toast(
        t(
          "На этот день уже есть демо-бронь. Сначала отмените её.",
          "You already have a demo booking for this day. Cancel it first.",
        ),
      );
      return;
    }
    store.update((s) => {
      s.bookings[day] = { device, slot };
    });
    renderBooking();
    toast(saved(t("Демо-бронь сохранена.", "Demo booking saved.")));
  };
  $("#booking-day").onchange = renderBooking;
  renderBooking();
}
function renderBooking() {
  const day = $("#booking-day").value,
    b = store.data.bookings[day];
  $("#booking-status").innerHTML = b
    ? `<div class="booking-confirmation">${icon("check", 20)}<div><strong>${esc(b.device)} · ${esc(b.slot)}</strong><p>${esc(day)} · ${store.persistent ? t("На этом устройстве", "Saved on this device") : t("Только на время визита", "For this visit only")}</p><button type="button" class="text-link" data-cancel-booking>${t("Отменить демо-бронь", "Cancel demo booking")}</button></div></div>`
    : `<p>${t("На этот день демо-брони нет. Выберите устройство и время.", "No demo booking for this day. Choose a device and a slot.")}</p>`;
  $('#booking-form button[type="submit"]').disabled = !!b;
}
function setupIdea() {
  const form = $("#idea-form");
  for (const [k, v] of Object.entries(store.data.draft))
    form.elements[k].value = v;
  bindIdeaForm(form, () => saveIdea(true));
}
async function saveIdea(copy) {
  const form = $("#idea-form"),
    draft = Object.fromEntries(new FormData(form)),
    error = validateIdea(draft),
    status = $("#idea-status");
  if (error) {
    const invalid =
      draft.title.trim().length < 3 || draft.title.trim().length > 80
        ? "title"
        : !["Campus", "Learning", "School life", "Events", "Other"].includes(
              draft.category,
            )
          ? "category"
          : "description";
    status.textContent =
      invalid === "title"
        ? t("Название должно содержать 3–80 символов.", error)
        : invalid === "category"
          ? t("Выберите категорию идеи.", error)
          : t("Опишите идею в 20–1500 символах.", error);
    status.classList.add("error");
    form.elements[invalid].setAttribute("aria-invalid", "true");
    form.elements[invalid].focus();
    return;
  }
  status.classList.remove("error");
  form
    .querySelectorAll("[aria-invalid]")
    .forEach((el) => el.removeAttribute("aria-invalid"));
  store.update((s) => {
    s.draft = draft;
  });
  if (copy) {
    try {
      await navigator.clipboard.writeText(
        `${draft.title}\n${t("Категория", "Category")}: ${category(draft.category)}\n\n${draft.description}`,
      );
      status.textContent = saved(
        t(
          "Идея скопирована, черновик сохранён. Ничего не отправлено.",
          "Idea copied and draft saved. Nothing was sent.",
        ),
      );
    } catch {
      status.textContent = t(
        "Буфер обмена недоступен. Черновик сохранён; выделите и скопируйте текст в полях.",
        "Clipboard is unavailable. Your draft is kept; select and copy the text from the fields.",
      );
    }
  } else
    status.textContent = saved(
      t(
        "Черновик сохранён. Ничего не отправлено.",
        "Draft saved locally. Nothing was sent.",
      ),
    );
}

function changeLanguage(value) {
  if (value === language()) return;
  const snapshot = scene?.snapshot(),
    pan = panorama?.snapshot(),
    scroll = scrollY;
  const draft = $("#idea-form")
    ? Object.fromEntries(new FormData($("#idea-form")))
    : null;
  const booking = $("#booking-form")
    ? Object.fromEntries(new FormData($("#booking-form")))
    : null;
  const activeHotspot = $('.room-hotspots [aria-pressed="true"]')?.dataset
    .roomHotspot;
  setLanguage(value);
  if (snapshot) cameraSnapshot = snapshot;
  renderRoute();
  if (pan) panorama?.restore(pan);
  if (activeHotspot) showHotspot(activeHotspot);
  if (draft)
    for (const [k, v] of Object.entries(draft))
      $("#idea-form").elements[k].value = v;
  if (booking) {
    for (const [k, v] of Object.entries(booking))
      $("#booking-form").elements[k].value = v;
    renderBooking();
  }
  scrollTo({ top: scroll, behavior: "instant" });
  $(`[data-language="${value}"]`)?.focus({ preventScroll: true });
}
document.addEventListener("click", async (e) => {
  const anchor = e.target.closest("a[data-link]");
  if (anchor && !e.metaKey && !e.ctrlKey && !e.shiftKey && e.button === 0) {
    e.preventDefault();
    navigate(anchor.getAttribute("href"));
    if (location.hash) $(location.hash)?.scrollIntoView();
    return;
  }
  const b = e.target.closest("button,[data-place]");
  if (!b) return;
  if (b.dataset.language) {
    changeLanguage(b.dataset.language);
    return;
  }
  if (b.hasAttribute("data-sound")) {
    try {
      await audio.toggle();
    } catch {
      toast(
        t(
          "Звук недоступен в этом браузере. Сайт работает без него.",
          "Sound is unavailable in this browser. The site works without it.",
        ),
      );
    }
    return;
  }
  if (b.matches("[data-telegram]")) {
    dialogFocus = b;
    dialog.showModal();
  } else if (b.matches(".dialog-close")) dialog.close();
  else if (b.matches(".menu-button")) {
    const open = b.getAttribute("aria-expanded") !== "true";
    b.setAttribute("aria-expanded", String(open));
    $("#navigation").classList.toggle("open", open);
  } else if (b.dataset.select) selectPlace(b.dataset.select);
  else if (b.dataset.place) selectPlace(b.dataset.place);
  else if (b.dataset.view) setView(b.dataset.view);
  else if (b.dataset.enterInterior) enterInterior(b.dataset.enterInterior);
  else if (b.matches("[data-back-campus]")) leaveInterior();
  else if (b.dataset.roomHotspot) showHotspot(b.dataset.roomHotspot);
  else if (b.matches("[data-close-place]")) closePlace();
  else if (b.matches("[data-collapse-place]")) {
    const collapsed = $("#place-panel").classList.toggle("collapsed");
    b.setAttribute("aria-expanded", String(!collapsed));
    b.setAttribute(
      "aria-label",
      collapsed
        ? t("Развернуть описание", "Expand place details")
        : t("Свернуть описание", "Collapse place details"),
    );
  } else if (b.matches("[data-show-route]")) showRoute();
  else if (b.matches("[data-favourite]")) {
    store.update((s) => {
      s.favourites = s.favourites.includes(selected)
        ? s.favourites.filter((x) => x !== selected)
        : [...s.favourites, selected];
    });
    b.setAttribute(
      "aria-pressed",
      String(store.data.favourites.includes(selected)),
    );
    b.querySelector("span").textContent = store.data.favourites.includes(
      selected,
    )
      ? t("Сохранено", "Saved")
      : t("Сохранить", "Save place");
    renderDirectory();
    toast(
      saved(
        store.data.favourites.includes(selected)
          ? t("Место сохранено в избранном.", "Place saved to favourites.")
          : t("Место удалено из избранного.", "Place removed from favourites."),
      ),
    );
  } else if (b.matches("[data-saved-filter]")) {
    filters.saved = !filters.saved;
    renderDirectory();
  } else if (b.matches("[data-clear-filters]")) {
    Object.assign(filters, {
      query: "",
      category: "All",
      level: "All",
      saved: false,
    });
    $("#place-search").value = "";
    $("#category-filter").value = "All";
    $("#level-filter").value = "All";
    renderDirectory();
  } else if (b.matches("[data-reset]")) {
    if (tourActive) exitTour();
    if (selected) closePlace();
    scene?.reset();
    cameraSnapshot = null;
    toast(t("Общий вид восстановлен.", "Campus view reset."));
  } else if (b.matches("[data-home-reset]")) scene?.reset();
  else if (b.dataset.zoom) scene?.zoom(Number(b.dataset.zoom));
  else if (b.matches("[data-tour-start]")) startTour(false);
  else if (b.matches("[data-tour-resume]")) startTour(true);
  else if (b.matches("[data-tour-back]") && tourIndex > 0) {
    tourIndex--;
    showTourStop();
  } else if (b.matches("[data-tour-next]")) {
    if (tourIndex === 7) {
      store.update((s) => {
        s.tour = 0;
      });
      exitTour(true);
    } else {
      tourIndex++;
      showTourStop();
    }
  } else if (b.matches("[data-tour-exit]")) exitTour();
  else if (b.dataset.vote) {
    store.update((s) => {
      s.vote = b.dataset.vote;
    });
    renderVotes();
    toast(saved(t("Демо-голос сохранён.", "Demo vote saved.")));
    $(`[data-vote="${b.dataset.vote}"]`)?.focus({ preventScroll: true });
  } else if (b.matches("[data-cancel-booking]")) {
    store.update((s) => {
      delete s.bookings[$("#booking-day").value];
    });
    renderBooking();
    toast(t("Демо-бронь отменена.", "Demo booking cancelled."));
  }
});
document.addEventListener("input", (e) => {
  if (e.target.matches("[data-volume]"))
    audio.setVolume(Number(e.target.value) / 100);
});
document.addEventListener("keydown", (e) => {
  if (e.target.matches(".map-place") && ["Enter", " "].includes(e.key)) {
    e.preventDefault();
    selectPlace(e.target.dataset.place);
  }
  if (e.key === "Escape" && !dialog.open) {
    if (interiorId) leaveInterior();
    else if (tourActive) exitTour();
    else if (selected) closePlace();
    const menu = $(".menu-button");
    if (menu?.getAttribute("aria-expanded") === "true") {
      menu.setAttribute("aria-expanded", "false");
      $("#navigation").classList.remove("open");
      menu.focus();
    }
    $$(".sound-menu[open]").forEach((el) => {
      el.open = false;
      el.querySelector("summary").focus();
    });
  }
});
dialog.addEventListener("close", () => dialogFocus?.focus());
window.addEventListener("popstate", () => {
  const q = new URLSearchParams(location.search);
  if (
    location.pathname === "/campus" &&
    $(".explorer") &&
    q.get("place") === selected
  ) {
    const next = q.get("interior");
    if (interiorId && !next) {
      leaveInterior(false);
      return;
    }
    if (next && interiorForPlace[selected] === next) {
      enterInterior(next, false);
      return;
    }
  }
  cameraSnapshot = null;
  renderRoute();
});
renderRoute();
if (!store.persistent)
  toast(
    t(
      "Хранилище недоступно или повреждено. Исследуйте сайт и используйте демо на время этого визита.",
      "Storage is unavailable or damaged. You can explore and use demos for this visit.",
    ),
  );
