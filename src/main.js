import { rooms, interiorForPlace, imageForPlace } from "./interior-data.js";
import {
  enrichPlaces,
  nodes,
  edges,
  routeTo,
  tourStops,
  voteOptions,
  devices,
  slots,
  campusBuildings,
} from "./data.js";
import { createStore, validateIdea } from "./state.js";

const app = document.querySelector("#app");
const esc = (s) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const icon = (name, size = 20) => {
  const paths = {
    arrow: '<path d="M5 12h14m-5-5 5 5-5 5"/>',
    diagonal: '<path d="M6 18 18 6M6 6h12v12"/>',
    heart:
      '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
    search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
    map: '<path d="m9 3-7 4v14l7-4 6 4 7-4V3l-7 4-6-4Z M9 3v14m6-10v14"/>',
    cube: '<path d="m12 2 9 5v10l-9 5-9-5V7l9-5Z M3 7l9 5 9-5M12 12v10"/>',
    leaf: '<path d="M20 3C6 2 2 7 5 15c8 4 14 0 15-12ZM4 21l10-11"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    close: '<path d="m6 6 12 12M6 18 18 6"/>',
    play: '<path d="m9 5 11 7-11 7V5Z"/>',
    reset: '<path d="M3 10a9 9 0 1 1 1 7M3 4v6h6"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    globe:
      '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>',
  };
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.arrow}</svg>`;
};
let places = [],
  store,
  scene = null,
  routeGeneration = 0,
  sceneLoadToken = 0,
  interiorId = null,
  interiorHistoryEntry = false,
  webglAvailable = true,
  revealObserver = null,
  selected = null,
  view = "3d",
  routeVisible = false,
  tourActive = false,
  tourIndex = 0,
  lastFocus = null,
  lastFocusPlace = null;
const filters = { query: "", category: "All", level: "All", saved: false };
const navItems = [
  ["/", "Home"],
  ["/campus", "Campus"],
  ["/learning", "Learning"],
  ["/life", "School Life"],
  ["/events", "Events"],
  ["/project", "Our Project"],
];
const buttonLink = (href, text, cls = "button") =>
  `<a href="${href}" data-link class="${cls}">${text} ${icon("diagonal", 17)}</a>`;
function header(path) {
  return `<header class="site-header"><a href="/" data-link class="brand" aria-label="Serenity International School home"><img src="/assets/emblem.svg" width="39" height="44" alt=""><span>SERENITY<small>INTERNATIONAL SCHOOL</small></span></a><nav id="navigation" aria-label="Main navigation">${navItems.map(([href, label]) => `<a href="${href}" data-link ${path === href ? 'aria-current="page"' : ""}>${label}</a>`).join("")}</nav><button class="header-action" data-telegram>Let’s connect ${icon("diagonal", 16)}</button><button class="menu-button icon-button" aria-label="Open navigation" aria-controls="navigation" aria-expanded="false">${icon("menu")}</button></header>`;
}
function footer() {
  return `<footer class="site-footer"><div class="footer-top"><a class="brand" data-link href="/"><img src="/assets/emblem.svg" alt="" width="37" height="42"><span>SERENITY<small>INTERNATIONAL SCHOOL</small></span></a><p>A little curiosity.<br>A world of possibility.</p><button class="text-link" data-telegram>Keep in touch ${icon("diagonal")}</button></div><div class="footer-bottom"><span>My Dream School · A fictional school concept by Khusan</span><span>Imagined with care. Made for discovery.</span><a href="/project" data-link>About this project ${icon("diagonal", 13)}</a></div></footer>`;
}
function storyArt(type) {
  const key =
    {
      library: "interior-library",
      garden: "ideas-garden",
      tech: "interior-technology-lab",
      life: "interior-dining-hall",
      campus: "campus",
    }[type] || type;
  return `<img src="/images/${key}.webp" alt="${key.startsWith("interior") ? "Rendered interior" : "Rendered campus view"} of Serenity International School" width="1200" height="800" loading="lazy">`;
}
function imageStory(
  eyebrow,
  title,
  text,
  image,
  href,
  action,
  reverse = false,
) {
  return `<section class="chapter section ${reverse ? "chapter-reverse" : ""}" data-reveal><div class="chapter-image"><img src="/images/${image}.webp" width="1400" height="900" loading="lazy" alt="Rendered Serenity ${eyebrow.toLowerCase()} scene"><span>IMAGINED WITH CARE · EXPLORE IN 3D</span></div><div class="chapter-copy"><span class="eyebrow">${eyebrow}</span><h2>${title}</h2><p>${text}</p>${buttonLink(href, action, "text-link")}</div></section>`;
}
function homePage() {
  return `<main id="main">
<section class="home-hero"><div class="hero-landscape" aria-hidden="true"></div><div id="campus-scene" class="home-scene scene-host"><div class="scene-loading"><span class="loading-ring"></span>Making room for discovery…</div></div><div class="hero-copy"><div class="concept-label"><span></span>A DREAM SCHOOL CONCEPT</div><h1>Room to learn.<br>Space to <em>become.</em></h1><p>A dream school shaped around curiosity, creativity and belonging.</p><div class="hero-actions">${buttonLink("/campus", "Explore campus")}<button class="button button-ghost" data-tour-start>${icon("play", 16)} Start the tour</button></div><div class="hero-footnote">${icon("leaf", 17)} ROOTED IN NATURE. OPEN TO THE WORLD.</div></div><div class="scene-caption"><span class="live-dot"></span><span>A school with a different point of view.<small id="hero-mode-label">LIVE 3D CAMPUS · DRAG TO EXPLORE</small></span><button class="icon-button" data-home-reset aria-label="Reset campus view">${icon("reset", 18)}</button></div><div class="hero-coordinate" aria-hidden="true">N <span>↟</span></div></section>
<div class="story-index"><span>A LITTLE JOURNEY THROUGH SERENITY</span><a href="#belonging">01 Belong</a><a href="#look-inside">02 Look inside</a><a href="#making">03 Make</a><a href="#living">04 Live</a><a href="#participate">05 Participate</a></div>
<div id="belonging">${imageStory("01 / A PLACE TO BELONG", "One tree.<br>A thousand <em>beginnings.</em>", "A compact school gathers around a generous courtyard. A student buddy, a familiar face and a place on the curved wooden bench make an international community feel a little more like home.", "courtyard", "/campus?place=courtyard", "Meet in the courtyard")}</div>
<section id="look-inside" class="inside-story" data-reveal><img src="/images/interior-library.webp" alt="The actual 3D hillside library interior with timber shelves and a lake-facing window" width="1600" height="1000" loading="lazy"><div class="inside-story-copy"><span class="eyebrow">02 / A DIFFERENT KIND OF DISCOVERY</span><h2>A little quieter.<br>A little <em>closer to wonder.</em></h2><p>Step into the hillside library. Run your eyes along the shelves, find a reading chair and look out towards the lake.</p>${buttonLink("/campus?place=library&interior=library", "Look inside the library", "button button-ivory")}<span class="small-note">A furnished, explorable 3D room — not a photograph.</span></div></section>
<div id="making">${imageStory("03 / HEAD, HANDS & HEART", "What if?<br><em>Let’s find out.</em>", "Code a small robot, test a smart-house model or carry an unfinished idea out to the garden. Core learning gives us a foundation; practical projects give it somewhere to go.", "interior-technology-lab", "/campus?place=tech-lab&interior=technology-lab", "Step into the Technology Lab", true)}</div>
<section class="making-links section" data-reveal>${[
    ["learning-wing", "Learning Studios", "A place to ask a better question."],
    ["ideas-garden", "Garden of Ideas", "Fresh air for an unfinished thought."],
  ]
    .map(
      ([id, title, text]) =>
        `<a href="/campus?place=${id}" data-link><img src="${imageForPlace(id)}" alt="Rendered ${title}" width="1000" height="650" loading="lazy"><div><span class="eyebrow">KEEP EXPLORING</span><h3>${title}</h3><p>${text}</p></div>${icon("diagonal", 20)}</a>`,
    )
    .join("")}</section>
<div id="living">${imageStory("04 / 12:00—13:00, YOUR CHOICE", "Good food.<br>Better <em>company.</em>", "Two dining halls, a game with a friend, a walk or a quiet pause. One genuinely free-choice hour belongs in a thoughtful school day. Lessons begin at 09:00; projects, clubs and support carry us to 17:00.", "interior-dining-hall", "/life", "Find your rhythm")}</div>
<section id="participate" class="event-story section" data-reveal><div><span class="eyebrow">05 / BRING A LITTLE OF YOUR WORLD</span><h2>Different stories.<br>One shared <em>celebration.</em></h2><p>Two weeks of preparation, workshops and different student roles lead to a Culture Festival finale. Regular lessons continue — the celebration grows in part of the afternoon programme.</p>${buttonLink("/events", "Meet the Culture Festival", "text-link")}</div><img src="/images/culture-festival.webp" alt="A rendered Culture Festival setup around the courtyard tree" width="1200" height="850" loading="lazy"></section>
<section class="closing-banner"><span class="eyebrow">THIRTEEN PLACES. SIX ROOMS TO STEP INSIDE.</span><h2>Your next discovery is just around the corner.</h2>${buttonLink("/campus", "Find your place", "button button-ivory")}</section></main>`;
}
function mapMarkup() {
  const buildings = campusBuildings.map((b) => [
    b.x - b.w / 2,
    b.z - b.d / 2,
    b.w,
    b.d,
  ]);
  return `<svg class="flat-map" viewBox="-49 -44 117 91" aria-labelledby="map-title"><title id="map-title">Schematic Serenity campus map. Use Tab to choose a place.</title><rect x="-49" y="-44" width="117" height="91" fill="#dce3cd"/><path d="M-49-44H68v7Q0-31-49-35Z" fill="#b1c9c2"/><text x="-3" y="-37" class="map-water">THE LAKE</text>${edges.map(([a, b]) => `<path d="M${nodes[a].join(" ")} ${nodes[b].join(" ")}" fill="none" stroke="#f5edda" stroke-width="1.7"/>`).join("")}${buildings.map(([x, z, w, d]) => `<g class="map-building"><rect x="${x - 0.6}" y="${z - 0.6}" width="${w + 1.2}" height="${d + 1.2}" rx=".5" fill="#ede1c4" stroke="#847c62" stroke-width=".25"/><rect x="${x}" y="${z}" width="${w}" height="${d}" fill="#52645b"/><path d="M${x + w / 2} ${z}v${d}" stroke="#94a28a" stroke-width=".3"/>${Array.from({ length: Math.floor(w / 2) }, (_, i) => `<rect x="${x + 0.6 + i * 2}" y="${z + d - 0.15}" width="1.2" height=".4" fill="#d9c393"/>`).join("")}</g>`).join("")}<circle cx="0" cy="8" r="6.5" fill="#efe5cb"/><circle cx="0" cy="8" r="2.7" fill="#81986d"/><rect x="35" y="-13" width="18" height="26" fill="#9db28a" stroke="#f8f5e7" stroke-width=".4"/><path d="M35 0h18" stroke="#f8f5e7" stroke-width=".3"/><circle cx="44" cy="0" r="2.5" stroke="#f8f5e7" fill="none" stroke-width=".3"/>${[
    [-34, 12],
    [-34, -9],
    [-37, -25],
    [-10, -31],
    [1, -31],
    [29, -31],
    [28, 21],
    [8, 26],
    [-22, 32],
    [57, 19],
  ]
    .map(
      ([x, z]) =>
        `<g><circle cx="${x + 0.5}" cy="${z + 0.6}" r="2.3" fill="#7b8e6a" opacity=".25"/><circle cx="${x}" cy="${z}" r="2" fill="#7e986d"/></g>`,
    )
    .join(
      "",
    )}<path d="M-23 5v11M-13 0v-17" stroke="#9bab94" stroke-width="2.2"/><text x="-31" y="-29" class="map-building-label">HILLSIDE LIBRARY</text><text x="34" y="17" class="map-building-label">FOOTBALL FIELD</text><g id="map-route"></g>${places
    .map((p, i) => {
      let [x, z] = p.position;
      if (p.id === "gaming-zone") {
        x += 7;
        z += 8;
      }
      if (p.id === "quiet-room") {
        x -= 8;
        z -= 5;
      }
      return `<g class="map-place" data-place="${p.id}" tabindex="0" role="button" aria-label="Explore ${p.name}" transform="translate(${x},${z})"><circle r="2.7" fill="#164f48"/><text y=".9" text-anchor="middle" fill="white">${String(i + 1).padStart(2, "0")}</text><title>${p.name} · ${p.level}</title></g>`;
    })
    .join(
      "",
    )}<text x="-43" y="39" class="map-water">SCHEMATIC · NOT TO SCALE</text></svg>`;
}
function campusPage() {
  return `<main id="main" class="campus-page"><div class="campus-heading"><div><span class="eyebrow">COME ON IN</span><h1>Find your place.</h1></div><p>Thirteen places. One connected community.</p><div class="view-toggle" aria-label="Campus view"><button data-view="3d" aria-pressed="${view === "3d"}">${icon("cube", 16)} 3D view</button><button data-view="map" aria-pressed="${view === "map"}">${icon("map", 16)} Map view</button></div></div><div class="explorer" data-mode="overview"><div class="explorer-stage"><div id="campus-scene" class="scene-host campus-scene" ${view === "map" ? "hidden" : ""}><div class="scene-loading"><span class="loading-ring"></span>Building your view…</div></div><div id="map-container" ${view !== "map" ? "hidden" : ""}>${mapMarkup()}</div><div class="explorer-help">${icon("cube", 16)} <span id="scene-help">Drag to orbit · Scroll to zoom<span class="mobile-hint"> · Two fingers to rotate</span></span></div><div class="camera-tools"><button class="icon-button" data-reset aria-label="Reset view" title="Reset view">${icon("reset", 18)}</button><span></span><button class="icon-button" data-zoom="1" aria-label="Zoom in">+</button><button class="icon-button" data-zoom="-1" aria-label="Zoom out">−</button></div><div class="map-legend"><span></span> Learning & living <span></span> Shared paths</div></div><aside class="place-directory" aria-label="Find a campus place"><div class="directory-top"><span class="eyebrow">A LITTLE LOOK AROUND</span><button class="saved-toggle icon-button" data-saved-filter aria-label="Show saved places" aria-pressed="false">${icon("heart", 18)}</button></div><label class="search-box">${icon("search", 18)}<input id="place-search" type="search" placeholder="Find a place…" aria-label="Search campus places"></label><div class="filter-row"><label><span class="sr-only">Category</span><select id="category-filter" aria-label="Category"><option value="All">All categories</option>${[...new Set(places.map((p) => p.category))].map((c) => `<option>${c}</option>`).join("")}</select></label><label><span class="sr-only">Level</span><select id="level-filter" aria-label="Level"><option value="All">All levels</option><option>Ground</option><option>Upper</option><option>Lower</option></select></label></div><p id="place-count" class="list-caption"></p><div id="place-list" class="place-list"></div></aside><aside id="place-panel" class="place-panel" aria-label="Selected campus place" hidden></aside><div id="tour-panel" class="tour-panel" hidden></div><section id="interior-shell" class="interior-shell" aria-label="Interior exploration" hidden></section><button class="tour-launch button button-small" ${store.data.tour > 0 ? "data-tour-resume" : "data-tour-start"}>${icon("play", 14)} ${store.data.tour > 0 ? "Resume your tour" : "Take a little tour"} <span>${store.data.tour > 0 ? `${store.data.tour + 1} / 8` : "8 stops"}</span></button></div><div class="campus-note"><span>${icon("leaf", 16)} An imagined campus, thoughtfully connected.</span><span>Illustrative routes from the main entrance · Not surveyed navigation</span></div></main>`;
}
function pageIntro(eyebrow, title, body) {
  return `<div class="page-intro"><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${body}</p></div>`;
}
function learningPage() {
  return `<main id="main">${pageIntro("LEARNING AT SERENITY", "Good questions.<br><em>Great possibilities.</em>", "A strong foundation, an open mind and the confidence to try. Learning connects what we know with what we could make next.")}<section class="learning-layout section"><div class="learning-principles"><span class="eyebrow">HEAD, HANDS & HEART</span><h2>Knowledge to build on.<br>Room to make it <em>your own.</em></h2><p>Morning core subjects give every student a foundation in languages, mathematics, science and the humanities. Afternoon projects turn understanding into something you can see, test and share.</p><div class="principle"><span>01</span><div><h3>Ask, investigate, connect.</h3><p>Explore a question across subjects. Research in the library, test in the lab and explain your thinking.</p></div></div><div class="principle"><span>02</span><div><h3>Make something meaningful.</h3><p>Design a rainwater model, code a useful tool or tell a story in a new language.</p></div></div><div class="principle"><span>03</span><div><h3>Get support along the way.</h3><p>Small-group practice, teacher check-ins and a quiet room make space for different learning needs.</p></div></div>${buttonLink("/campus?place=learning-wing", "Explore the learning studios", "text-link")}</div><div class="timetable"><div class="timetable-heading">${icon("clock", 21)}<span>A DAY AT SERENITY<small>An illustrative timetable</small></span><strong>09—17</strong></div>${[
    [
      "09:00",
      "A curious beginning",
      "Core subjects, conversation and a morning check-in.",
    ],
    [
      "10:30",
      "A moment to reset",
      "A break, then more focused learning and practice.",
    ],
    [
      "12:00",
      "An hour that’s yours",
      "Lunch and free choice. Rest, talk, play or take a walk.",
    ],
    [
      "13:00",
      "Ideas into action",
      "Projects, experiments and hands-on learning.",
    ],
    [
      "14:30",
      "Find your next thing",
      "A break, then clubs, learning support or practice.",
    ],
    [
      "17:00",
      "Take a little learning home",
      "The school day ends. Tomorrow is another question.",
    ],
  ]
    .map(
      ([time, title, text]) =>
        `<div class="time-row ${time === "12:00" ? "time-highlight" : ""}"><time>${time}</time><div><h3>${title}</h3><p>${text}</p></div></div>`,
    )
    .join(
      "",
    )}</div></section><section class="week-section section"><span class="eyebrow">FIVE DAYS. FIVE WAYS TO WONDER.</span><h2>A week with <em>possibility.</em></h2><p>Themes enrich the day alongside core learning.</p><div class="weekday-grid">${[
    ["MON", "Discover", "Follow a question. Find a new perspective."],
    ["TUE", "Make", "Try, test, improve. Let your hands think."],
    ["WED", "Explore", "Connect a classroom idea to the wider world."],
    ["THU", "Life Skills", "Practise the everyday things that matter."],
    ["FRI", "Together", "Share your work. Celebrate each other."],
  ]
    .map(
      ([day, title, text], i) =>
        `<div><span class="weekday">${day}</span><span class="weekday-icon">${icon(["sun", "cube", "map", "leaf", "globe"][i], 28)}</span><h3>${title}</h3><p>${text}</p></div>`,
    )
    .join("")}</div></section></main>`;
}
function localDay() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function lifePage() {
  return `<main id="main">${pageIntro("LIFE BETWEEN THE LESSONS", "A little time to play.<br><em>A little room to be.</em>", "The best part of a school day might be a shared table, a new teammate or a moment of quiet under a tree.")}<section class="free-hour section"><div><span class="eyebrow">12:00 — 13:00</span><h2>One hour.<br><em>Your choice.</em></h2><p>Have lunch. Find a board game. Walk with a friend, join a kickabout or do absolutely nothing for a while. Rest belongs in the school day.</p><span class="small-note">A fictional school concept · Example daily rhythm</span></div><div class="free-hour-art">${storyArt("life")}<span class="art-caption">A place for the small, good moments.</span></div></section><section class="section life-places"><div class="section-heading"><h2>Find your kind<br>of <em>free time.</em></h2><p>A warm international community, with student buddies,<br>language exchange and plenty of ways to join in.</p></div><div class="life-grid">${[
    [
      "dining-a",
      "Two halls. A shared table.",
      "Lakeside Dining and Garden Dining have separate serving approaches and a shared kitchen. A choice of room, a chance for conversation.",
    ],
    [
      "ideas-garden",
      "Outside, at your own pace.",
      "A covered making table, sociable benches and a quieter corner. Head to the supervised workshop when the rain arrives.",
    ],
    [
      "football-field",
      "Come for the game. Stay for the team.",
      "One large field, a small spectator stand and space for afternoon clubs. Everyone has a way to take part.",
    ],
    [
      "residence",
      "A home away from home.",
      "A small residence in a quieter corner, shared study spaces and a student-buddy welcome for the international community.",
    ],
  ]
    .map(
      ([id, title, text], i) =>
        `<article><span class="life-number">0${i + 1}</span><div><h3>${title}</h3><p>${text}</p>${buttonLink("/campus?place=" + id, "Find it on campus", "text-link")}</div></article>`,
    )
    .join(
      "",
    )}</div></section><section class="booking-section section" id="games"><div><span class="eyebrow">THE GAMES LOUNGE</span><h2>Good games.<br><em>Better company.</em></h2><p>Computers, tablets, consoles and board games in a daylit lower-ground space, with its own outdoor exit.</p>${buttonLink("/campus?place=gaming-zone", "Visit the games lounge", "text-link")}<div class="demo-explainer">${icon("cube", 23)}<div><strong>Try a little demonstration.</strong><p>This local demo does not reserve a real device or synchronise with other visitors. One active booking per chosen day.</p></div></div></div><form id="booking-form" class="booking-form"><span class="eyebrow">MAKE TIME FOR PLAY</span><h3>Your free-hour plan.</h3><p class="demo-label">Demo booking — saved on this device.</p><label>Choose a day<input id="booking-day" name="day" type="date" value="${localDay()}" required></label><label>Pick a device<select name="device">${devices.map((d) => `<option>${d}</option>`).join("")}</select></label><fieldset><legend>A twenty-minute pause</legend><div class="slot-options">${slots.map((s, i) => `<label><input type="radio" name="slot" value="${s}" ${i === 0 ? "checked" : ""}><span>${s}</span></label>`).join("")}</div></fieldset><button class="button" type="submit">Save demo booking ${icon("arrow", 17)}</button><div id="booking-status" class="form-status" aria-live="polite"></div></form></section></main>`;
}
function eventsPage() {
  const days = [
    ["Meet & imagine", "Share a tradition, a language or a story."],
    ["Choose your role", "Become a storyteller, maker, host or organiser."],
    ["Gather stories", "Ask, listen and build a shared collection."],
    ["Make together", "Create displays, recipes, music or small crafts."],
    ["Share a first look", "Try ideas with a buddy and reflect."],
    ["Open the workshops", "Explore another group’s culture and craft."],
    ["Practise & prepare", "Rehearse, build and support each other."],
    ["Connect the pieces", "Bring the stories into one shared programme."],
    ["Welcome everyone", "Prepare the courtyard and invite classmates."],
    [
      "Celebrate & reflect",
      "An afternoon finale, then a thoughtful look back.",
    ],
  ];
  return `<main id="main">${pageIntro("MORE THAN A DATE ON THE CALENDAR", "Different stories.<br><em>One shared celebration.</em>", "Two weeks to prepare, participate and bring something of yourself. Events grow through small moments of making together.")}<section class="festival-visual" data-reveal><img src="/images/culture-festival.webp" alt="The procedural Serenity courtyard dressed for a Culture Festival" width="1600" height="900"><div><span class="eyebrow">MANY CULTURES. ONE COURTYARD.</span><h2>Bring your world<br>to <em>our table.</em></h2><p>A festival of stories, making and belonging.</p></div></section><section class="festival-section section"><div class="festival-title"><span class="eyebrow">AN ILLUSTRATIVE TWO-WEEK EVENT</span><h2>The Culture<br><em>Festival.</em></h2><p>Languages, food, music and the stories that make us who we are. Different roles mean different ways to belong.</p><div class="event-tags"><span>Storytellers</span><span>Makers</span><span>Hosts</span><span>Organisers</span></div><p class="small-note">Regular lessons continue. Activities use part of the afternoon programme; this is an example, not a live event calendar.</p>${buttonLink("/campus?place=courtyard", "Meet in the courtyard", "text-link")}</div><div class="festival-schedule">${[
    0, 1,
  ]
    .map(
      (w) =>
        `<div class="festival-week"><h3><span>0${w + 1}</span> ${w === 0 ? "Imagine & prepare" : "Make & celebrate"}</h3>${days
          .slice(w * 5, w * 5 + 5)
          .map(
            ([title, text], i) =>
              `<div class="festival-day"><span>DAY ${w * 5 + i + 1}</span><div><h4>${title}</h4><p>${text}</p></div></div>`,
          )
          .join("")}</div>`,
    )
    .join(
      "",
    )}</div></section><section class="vote-section section"><div><span class="eyebrow">WHAT SHOULD WE TRY NEXT?</span><h2>Your voice.<br><em>Your next adventure.</em></h2><p>Choose the idea you would love to see come to life. You can change your mind — curiosity works that way.</p><span class="demo-label">Demo vote — saved on this device.</span><p class="small-note">Only your selection is saved. No public totals or votes from other visitors are shown.</p></div><div id="vote-options" class="vote-options"></div></section></main>`;
}
function projectPage() {
  return `<main id="main">${pageIntro("OUR PROJECT", "A school imagined.<br><em>A possibility shared.</em>", "Serenity International School is a fictional concept for My Dream School — a place to ask what a thoughtful school could feel like.")}<section class="project-story section"><div class="project-emblem"><img src="/assets/emblem.svg" width="150" height="170" alt="Serenity open doorway, mountains, water and gold sun"><span>SERENITY<small>INTERNATIONAL SCHOOL</small></span></div><div><span class="eyebrow">IMAGINED BY KHUSAN</span><h2>What if school made<br>more room for <em>you?</em></h2><p>This project began with a simple idea: a school could be ambitious about learning and thoughtful about the people doing it.</p><p>Khusan’s dream school brings together a compact lakeside campus, practical projects, a genuinely free hour and an international community that welcomes different perspectives.</p><p>This website is a working exploration of that idea. The buildings are procedural 3D geometry; the routes are schematic. There is no real admissions service or operating school behind the concept.</p></div></section><section class="project-conversation section"><div class="faq"><span class="eyebrow">A FEW GOOD QUESTIONS</span><h2>Wondering about<br><em>something?</em></h2>${[
    [
      "Is Serenity a real school?",
      "No. Serenity International School is a fictional My Dream School project. It does not offer admissions, accreditations or real school services.",
    ],
    [
      "How does the campus tour work?",
      "Explore the 3D model, choose Map view or use the complete place list. The eight-stop tour moves only when you choose Next or Back. No interior first-person experience is included.",
    ],
    [
      "Are bookings and votes real?",
      "They are local demonstrations. They stay on this device when storage is available and do not reserve real devices, submit requests or synchronise with other people.",
    ],
    [
      "Can I contact a Telegram bot?",
      "Not yet. The proposed domain and Telegram username are unverified and inactive in this site. The connect button explains what is planned.",
    ],
    [
      "What happens to my idea?",
      "Save draft keeps it locally in this browser. Copy idea copies text for you to share yourself. Nothing is sent to a server.",
    ],
    [
      "What if 3D or storage is unavailable?",
      "Map view and the place list work independently of WebGL. If local storage is blocked or damaged, you can keep exploring and use demo features in memory for the current visit.",
    ],
  ]
    .map(
      ([q, a]) =>
        `<details><summary>${q}<span>+</span></summary><p>${a}</p></details>`,
    )
    .join(
      "",
    )}</div><form id="idea-form" class="idea-form" novalidate><span class="eyebrow">A GOOD IDEA CAN START ANYWHERE</span><h3>What would you add?</h3><p>Leave a little thought for your future self.</p><label>Give your idea a title<input name="title" minlength="3" maxlength="80" required placeholder="A little more room for…" aria-describedby="idea-status"></label><label>Choose a category<select name="category">${["Campus", "Learning", "School life", "Events", "Other"].map((c) => `<option>${c}</option>`).join("")}</select></label><label>Tell us a little more<textarea name="description" minlength="20" maxlength="1500" rows="5" required placeholder="What would it look like? Who could it help?" aria-describedby="idea-status"></textarea></label><span class="small-note">Title: 3–80 characters · Description: 20–1500 characters</span><div class="form-actions"><button class="button" type="submit">Save draft ${icon("arrow", 16)}</button><button class="button button-outline" type="button" data-copy-idea>Copy idea</button></div><div id="idea-status" class="form-status" aria-live="polite"></div><p class="small-note">A local draft, never a server submission. You decide where to share it.</p></form></section></main>`;
}
function notFound() {
  return `<main id="main" class="empty-page section"><span class="eyebrow">A LITTLE OFF THE PATH</span><h1>Let’s find your<br><em>way back.</em></h1><p>This page is not part of the campus.</p>${buttonLink("/", "Back to Serenity")}</main>`;
}
function toast(message) {
  const el = document.querySelector("#notice");
  el.textContent = message;
  el.classList.add("visible");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("visible"), 4800);
}
function savedMessage(base) {
  return store.persistent
    ? base
    : `${base.replace(/saved on this device|saved locally|saved/gi, "kept for this visit")} Storage is unavailable; this change will last for this visit only.`;
}
function navigate(url) {
  history.pushState({}, "", url);
  renderRoute();
  document.querySelector("main")?.setAttribute("tabindex", "-1");
  document.querySelector("main")?.focus({ preventScroll: true });
  scrollTo({ top: 0, behavior: "instant" });
}
async function mountScene(home = false) {
  const loadToken = ++sceneLoadToken;
  const gen = routeGeneration,
    host = document.querySelector("#campus-scene");
  if (!host || (!home && view === "map")) return;
  try {
    const { createCampus } = await import("./scene.js");
    if (
      gen !== routeGeneration ||
      loadToken !== sceneLoadToken ||
      !host.isConnected ||
      (!home && view !== "3d")
    )
      return;
    scene = createCampus(host, {
      places,
      home,
      festival: new URLSearchParams(location.search).has("festival"),
      onHotspot: showHotspot,
      onSelect: (id) =>
        home ? navigate("/campus?place=" + id) : selectPlace(id),
      onError: (message) => {
        if (gen === routeGeneration) {
          webglAvailable = false;
          if (home) showHomeFallback(host);
          else if (interiorId) showInteriorGallery();
          else setView("map");
          toast(message);
        }
      },
    });
    host.querySelector(".scene-loading")?.remove();
    webglAvailable = true;
    if (selected && !home) scene.select(selected);
    if (interiorId && !home) scene.enterInterior(interiorId);
    if (routeVisible && !home) scene.route(routeTo(selected));
  } catch (error) {
    if (gen !== routeGeneration || loadToken !== sceneLoadToken) return;
    webglAvailable = false;
    if (home) showHomeFallback(host);
    else if (interiorId) showInteriorGallery();
    else {
      setView("map");
      toast(
        "3D is unavailable here. Map view and interior galleries are ready to explore.",
      );
    }
    console.info(
      "Serenity: using the non-WebGL campus fallback.",
      error.message,
    );
  }
}
function renderRoute() {
  scene?.dispose();
  scene = null;
  routeGeneration++;
  sceneLoadToken++;
  selected = null;
  interiorId = null;
  interiorHistoryEntry = false;
  routeVisible = false;
  tourActive = false;
  const path = location.pathname.replace(/\/$/, "") || "/";
  const pages = {
    "/": homePage,
    "/campus": campusPage,
    "/learning": learningPage,
    "/life": lifePage,
    "/events": eventsPage,
    "/project": projectPage,
  };
  const page = pages[path] || notFound;
  document.title = `${navItems.find((n) => n[0] === path)?.[1] || "Page not found"} · Serenity International School`;
  if (
    path === "/campus" &&
    new URLSearchParams(location.search).get("view") === "map"
  )
    view = "map";
  app.innerHTML = header(path) + page() + (path === "/campus" ? "" : footer());
  if (path === "/") {
    mountScene(true);
    document.querySelector("[data-home-reset]").onclick = () => scene?.reset();
  }
  if (path === "/campus") {
    renderDirectory();
    if (view === "map") setView("map");
    else mountScene();
    const query = new URLSearchParams(location.search);
    if (query.get("place")) {
      if (places.some((p) => p.id === query.get("place")))
        selectPlace(query.get("place"), false);
      else
        toast("That campus place was not found. Choose a place from the list.");
    }
    if (query.has("tour")) startTour(query.get("tour") === "resume");
    if (
      query.get("interior") &&
      rooms[query.get("interior")] &&
      interiorForPlace[selected] === query.get("interior")
    )
      enterInterior(query.get("interior"), false);
    document.querySelector("#place-search").oninput = (e) => {
      filters.query = e.target.value;
      renderDirectory();
    };
    document.querySelector("#category-filter").onchange = (e) => {
      filters.category = e.target.value;
      renderDirectory();
    };
    document.querySelector("#level-filter").onchange = (e) => {
      filters.level = e.target.value;
      renderDirectory();
    };
    document.querySelector("#place-search").value = filters.query;
    document.querySelector("#category-filter").value = filters.category;
    document.querySelector("#level-filter").value = filters.level;
  }
  if (path === "/events") renderVotes();
  if (path === "/life") setupBooking();
  if (path === "/project") setupIdea();
  setupReveals();
}
function renderDirectory() {
  const matches = places.filter(
    (p) =>
      `${p.name} ${p.description} ${p.category}`
        .toLowerCase()
        .includes(filters.query.toLowerCase()) &&
      (filters.category === "All" || p.category === filters.category) &&
      (filters.level === "All" || p.level === filters.level) &&
      (!filters.saved || store.data.favourites.includes(p.id)),
  );
  const list = document.querySelector("#place-list");
  if (!list) return;
  document.querySelector("#place-count").textContent =
    `${matches.length} ${matches.length === 1 ? "place" : "places"} to discover${filters.saved ? " · Saved" : ""}`;
  document
    .querySelector("[data-saved-filter]")
    .setAttribute("aria-pressed", filters.saved);
  list.innerHTML = matches.length
    ? matches
        .map(
          (p) =>
            `<button class="place-row ${selected === p.id ? "active" : ""}" data-select="${p.id}" aria-pressed="${selected === p.id}"><span class="place-index">${String(places.indexOf(p) + 1).padStart(2, "0")}</span><span>${p.name}<small>${p.category} · ${p.level === "Lower" ? "Lower ground" : p.level === "Upper" ? "Upstairs" : "Ground level"}</small></span><span class="row-arrow">${store.data.favourites.includes(p.id) ? icon("heart", 13) : icon("diagonal", 13)}</span></button>`,
        )
        .join("")
    : `<div class="empty-state">${icon("search", 28)}<h3>A little more exploring?</h3><p>${filters.saved ? "No saved places match. Save a place with the heart button or clear your filters." : "No places match. Try another search or clear your filters."}</p><button class="text-link" data-clear-filters>Clear filters ${icon("arrow", 15)}</button></div>`;
}
function selectPlace(id, updateURL = true) {
  const p = places.find((p) => p.id === id);
  if (!p) return;
  lastFocus = document.activeElement;
  lastFocusPlace =
    lastFocus?.dataset?.select || lastFocus?.dataset?.place || null;
  selected = id;
  routeVisible = false;
  scene?.select(id);
  scene?.route([]);
  if (updateURL) {
    const params = new URLSearchParams(location.search);
    params.set("place", id);
    history.replaceState({}, "", `/campus?${params}`);
  }
  const panel = document.querySelector("#place-panel");
  panel.hidden = false;
  panel.classList.remove("collapsed");
  document.querySelector(".explorer").dataset.mode = tourActive
    ? "tour"
    : "selected";
  panel.innerHTML = `<button class="text-link all-places-button" data-close-place>← All places</button><div class="panel-top"><span class="eyebrow">${p.category.toUpperCase()} · ${p.level === "Lower" ? "LOWER GROUND" : p.level === "Upper" ? "UPSTAIRS" : "GROUND LEVEL"}</span><button class="icon-button sheet-collapse" data-collapse-place aria-expanded="true" aria-label="Collapse place details">⌄</button><button class="icon-button" data-close-place aria-label="Close place details">${icon("close", 18)}</button></div><div class="place-panel-art"><img src="${imageForPlace(p.id)}" width="1000" height="650" alt="Rendered exterior of ${p.name}"><span class="place-index">${String(places.indexOf(p) + 1).padStart(2, "0")} / 13</span></div><h2 tabindex="-1">${p.name}</h2><p class="place-tag">${p.tag}</p><p>${p.description}</p><ul class="activity-list">${p.activities.map((a) => `<li>${a}</li>`).join("")}</ul><div class="practical-rule">${icon("leaf", 17)}<p>${p.rule}</p></div>${interiorForPlace[id] ? `<button class="button enter-building" data-enter-interior="${interiorForPlace[id]}">${icon("diagonal", 17)} Enter building</button>` : `<span class="small-note outdoor-note">An outdoor viewpoint · Choose a marker and look around.</span>`}<div class="panel-actions"><button class="button button-small" data-show-route>${icon("map", 16)} Show route</button><button class="button button-outline button-small" data-favourite aria-pressed="${store.data.favourites.includes(id)}">${icon("heart", 16)} <span>${store.data.favourites.includes(id) ? "Saved" : "Save place"}</span></button></div><div id="route-description" class="route-description" aria-live="polite"></div>${["gaming-zone", "quiet-room"].includes(id) ? `<p class="small-note">${p.transition}</p>` : ""}`;
  document.querySelectorAll(".map-place").forEach((g) => {
    g.classList.toggle("active", g.dataset.place === id);
    g.setAttribute("aria-pressed", g.dataset.place === id);
  });
  document.querySelector("#map-route").innerHTML = "";
  renderDirectory();
  // Keyboard selection moves into the details; pointer selection keeps camera controls stable.
  if (lastFocus?.matches(".place-row, .map-place"))
    panel.querySelector("h2").focus({ preventScroll: true });
}
function closePlace() {
  document.querySelector("#place-panel").hidden = true;
  document.querySelector(".explorer").dataset.mode = tourActive
    ? "tour"
    : "overview";
  selected = null;
  routeVisible = false;
  scene?.select(null, false);
  scene?.route([]);
  const params = new URLSearchParams(location.search);
  params.delete("place");
  history.replaceState({}, "", `/campus${params.size ? "?" + params : ""}`);
  document.querySelector("#map-route").innerHTML = "";
  document
    .querySelectorAll(".map-place")
    .forEach((g) => g.classList.remove("active"));
  renderDirectory();
  if (lastFocus?.isConnected) lastFocus.focus({ preventScroll: true });
  else if (lastFocusPlace)
    document
      .querySelector(`[data-select="${lastFocusPlace}"]`)
      ?.focus({ preventScroll: true });
}
function setView(next) {
  view = next;
  const host = document.querySelector("#campus-scene");
  if (!host) return;
  document
    .querySelectorAll("[data-view]")
    .forEach((b) => b.setAttribute("aria-pressed", b.dataset.view === next));
  host.hidden = next !== "3d";
  document.querySelector("#map-container").hidden = next !== "map";
  document.querySelector("#scene-help").textContent =
    next === "map"
      ? "Choose a numbered place · Or use the place list"
      : "Drag to orbit · Scroll to zoom";
  document
    .querySelectorAll("[data-zoom]")
    .forEach((b) => (b.disabled = next === "map"));
  document.querySelector(".camera-tools").hidden = next === "map";
  document
    .querySelector(".explorer")
    .classList.toggle("map-mode", next === "map");
  if (next === "map") {
    sceneLoadToken++;
    scene?.dispose();
    scene = null;
  } else if (!scene) mountScene();
  const params = new URLSearchParams(location.search);
  params.set("view", next);
  history.replaceState({}, "", `/campus?${params}`);
}
function showRoute() {
  if (!selected) return;
  const route = routeTo(selected);
  routeVisible = true;
  scene?.route(route);
  document.querySelector("#map-route").innerHTML =
    `<polyline points="${route.map((id) => nodes[id].join(",")).join(" ")}" fill="none" stroke="#b58030" stroke-width=".8" stroke-linejoin="round"/>`;
  const p = places.find((p) => p.id === selected),
    names = route
      .filter((id) => places.some((p) => p.id === id))
      .map((id) => places.find((p) => p.id === id).name);
  document.querySelector("#route-description").innerHTML =
    `<strong>From the main entrance</strong><p>${names.map(esc).join(" → ")}</p>${p.transition ? `<p>${p.transition}</p>` : ""}<small>Illustrative route · Not surveyed navigation</small>`;
}
function startTour(resume = false) {
  if (location.pathname !== "/campus") {
    navigate("/campus?tour=" + (resume ? "resume" : "start"));
    return;
  }
  tourIndex = resume ? store.data.tour : 0;
  tourActive = true;
  document.querySelector(".explorer").dataset.mode = "tour";
  const params = new URLSearchParams(location.search);
  params.set("tour", "resume");
  history.replaceState({}, "", `/campus?${params}`);
  showTourStop();
}
function showTourStop() {
  store.update((s) => {
    s.tour = tourIndex;
  });
  const [id, title, text] = tourStops[tourIndex];
  selectPlace(id);
  const panel = document.querySelector("#tour-panel");
  panel.hidden = false;
  panel.innerHTML = `<div class="tour-progress" style="--progress:${((tourIndex + 1) / 8) * 100}%"></div><div class="tour-text"><span class="eyebrow">THE SERENITY TOUR · ${tourIndex + 1} OF 8</span><h3>${title}</h3><p>${text}</p></div>${interiorForPlace[id] ? `<button class="text-link tour-inside" data-enter-interior="${interiorForPlace[id]}">Look inside ${icon("diagonal", 14)}</button>` : ""}<div class="tour-controls"><button class="icon-button" data-tour-back aria-label="Previous tour stop" ${tourIndex === 0 ? "disabled" : ""}>←</button><button class="button button-small" data-tour-next>${tourIndex === 7 ? "Finish tour" : "Next stop"} ${icon("arrow", 15)}</button><button class="text-link" data-tour-exit>Exit tour</button></div>`;
  document.querySelector(".tour-launch").hidden = true;
}
function exitTour() {
  tourActive = false;
  document.querySelector(".explorer").dataset.mode = selected
    ? "selected"
    : "overview";
  document.querySelector("#tour-panel").hidden = true;
  document.querySelector(".tour-launch").hidden = false;
  const launch = document.querySelector(".tour-launch");
  launch.removeAttribute("data-tour-start");
  launch.removeAttribute("data-tour-resume");
  launch.setAttribute(
    store.data.tour > 0 ? "data-tour-resume" : "data-tour-start",
    "",
  );
  launch.innerHTML = `${icon("play", 14)} ${store.data.tour > 0 ? "Resume your tour" : "Take a little tour"} <span>${store.data.tour > 0 ? `${store.data.tour + 1} / 8` : "8 stops"}</span>`;
  const params = new URLSearchParams(location.search);
  params.delete("tour");
  history.replaceState({}, "", `/campus?${params}`);
  toast("Tour paused. Your progress is kept for a later visit.");
}
function renderVotes() {
  document.querySelector("#vote-options").innerHTML =
    voteOptions
      .map(
        (v, i) =>
          `<button class="vote-option ${store.data.vote === v ? "chosen" : ""}" data-vote="${v}" aria-pressed="${store.data.vote === v}"><span class="vote-symbol">${icon(["globe", "cube", "leaf"][i], 27)}</span><span><strong>${v}</strong><small>${["Share cultures, stories and a little of yourself.", "Create, solve and see what you can make.", "Step outside and follow your curiosity."][i]}</small></span><span class="vote-check">${store.data.vote === v ? icon("check", 18) : icon("arrow", 18)}</span></button>`,
      )
      .join("") +
    `<p class="form-status" aria-live="polite">${store.data.vote ? esc(savedMessage(`Your choice: ${store.data.vote}. You can change it at any time.`)) : "Choose an idea to save your demo vote."}</p>`;
}
function setupBooking() {
  const form = document.querySelector("#booking-form");
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
      toast("Choose a day, device and time slot.");
      return;
    }
    if (store.data.bookings[day]) {
      toast(
        "You already have a demo booking for this day. Cancel it before making another.",
      );
      return;
    }
    store.update((s) => {
      s.bookings[day] = { device, slot };
    });
    renderBooking();
    toast(savedMessage("Demo booking saved on this device."));
  };
  document.querySelector("#booking-day").onchange = renderBooking;
  renderBooking();
}
function renderBooking() {
  const day = document.querySelector("#booking-day").value,
    b = store.data.bookings[day],
    status = document.querySelector("#booking-status");
  status.innerHTML = b
    ? `<div class="booking-confirmation">${icon("check", 20)}<div><strong>${esc(b.device)} · ${esc(b.slot)}</strong><p>${esc(day)} · ${store.persistent ? "Saved on this device" : "Kept for this visit only"}</p><button type="button" class="text-link" data-cancel-booking>Cancel demo booking</button></div></div>`
    : "<p>No demo booking for this day. Choose a device and a slot.</p>";
  document.querySelector('#booking-form button[type="submit"]').disabled = !!b;
}
function setupIdea() {
  const form = document.querySelector("#idea-form");
  for (const [k, v] of Object.entries(store.data.draft))
    form.elements[k].value = v;
  form.onsubmit = (e) => {
    e.preventDefault();
    saveIdea(false);
  };
  document.querySelector("[data-copy-idea]").onclick = () => saveIdea(true);
}
async function saveIdea(copy) {
  const form = document.querySelector("#idea-form"),
    draft = Object.fromEntries(new FormData(form)),
    error = validateIdea(draft),
    status = document.querySelector("#idea-status");
  if (error) {
    status.textContent = error;
    status.classList.add("error");
    form.elements[
      draft.title.trim().length < 3 ? "title" : "description"
    ].focus();
    return;
  }
  status.classList.remove("error");
  store.update((s) => {
    s.draft = draft;
  });
  if (copy) {
    const text = `${draft.title}\nCategory: ${draft.category}\n\n${draft.description}`;
    try {
      await navigator.clipboard.writeText(text);
      status.textContent = savedMessage(
        "Idea copied. A draft is also saved locally. Nothing was sent.",
      );
    } catch {
      status.textContent =
        "Clipboard is unavailable. Your draft is kept; select and copy the text from the fields.";
    }
  } else
    status.textContent = savedMessage("Draft saved locally. Nothing was sent.");
}

const dialog = document.querySelector("#message-dialog");
let dialogFocus;
document.addEventListener("click", (e) => {
  const link = e.target.closest("a[data-link]");
  if (link && !e.metaKey && !e.ctrlKey && !e.shiftKey && e.button === 0) {
    e.preventDefault();
    navigate(link.getAttribute("href"));
    return;
  }
  const b = e.target.closest("button,[data-place]");
  if (!b) return;
  if (b.matches("[data-telegram]")) {
    dialogFocus = b;
    dialog.showModal();
  } else if (b.matches(".dialog-close")) dialog.close();
  else if (b.matches(".menu-button")) {
    const open = b.getAttribute("aria-expanded") !== "true";
    b.setAttribute("aria-expanded", open);
    document.querySelector("#navigation").classList.toggle("open", open);
  } else if (b.dataset.select) selectPlace(b.dataset.select);
  else if (b.dataset.place) selectPlace(b.dataset.place);
  else if (b.dataset.view) setView(b.dataset.view);
  else if (b.dataset.enterInterior) enterInterior(b.dataset.enterInterior);
  else if (b.matches("[data-back-campus]")) leaveInterior();
  else if (b.dataset.roomHotspot) showHotspot(b.dataset.roomHotspot);
  else if (b.dataset.galleryAngle) {
    const img = document.querySelector(".interior-gallery img");
    img.src = `/images/interior-${interiorId}${b.dataset.galleryAngle === "2" ? "-detail" : ""}.webp`;
  } else if (b.matches("[data-room-angle]")) {
    scene?.roomView();
  } else if (b.matches("[data-collapse-place]")) {
    const panel = document.querySelector("#place-panel");
    const collapsed = panel.classList.toggle("collapsed");
    b.setAttribute("aria-expanded", !collapsed);
    b.setAttribute(
      "aria-label",
      collapsed ? "Expand place details" : "Collapse place details",
    );
    b.textContent = collapsed ? "⌃" : "⌄";
  } else if (b.matches("[data-close-place]")) closePlace();
  else if (b.matches("[data-show-route]")) showRoute();
  else if (b.matches("[data-favourite]")) {
    const id = selected;
    store.update((s) => {
      s.favourites = s.favourites.includes(id)
        ? s.favourites.filter((x) => x !== id)
        : [...s.favourites, id];
    });
    b.setAttribute("aria-pressed", store.data.favourites.includes(id));
    b.querySelector("span").textContent = store.data.favourites.includes(id)
      ? "Saved"
      : "Save place";
    renderDirectory();
    toast(
      savedMessage(
        store.data.favourites.includes(id)
          ? "Place saved on this device."
          : "Place removed from your saved places.",
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
    document.querySelector("#place-search").value = "";
    document.querySelector("#category-filter").value = "All";
    document.querySelector("#level-filter").value = "All";
    renderDirectory();
  } else if (b.matches("[data-reset]")) {
    scene?.reset();
    if (selected) closePlace();
    if (interiorId) leaveInterior();
    else if (tourActive) exitTour();
    toast("Campus view reset.");
  } else if (b.dataset.zoom) scene?.zoom(Number(b.dataset.zoom));
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
      exitTour();
      toast(
        "You’ve explored all eight stops. There is always more to discover.",
      );
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
    toast(savedMessage("Demo vote saved on this device."));
    document
      .querySelector(`[data-vote="${b.dataset.vote}"]`)
      ?.focus({ preventScroll: true });
  } else if (b.matches("[data-cancel-booking]")) {
    const day = document.querySelector("#booking-day").value;
    store.update((s) => {
      delete s.bookings[day];
    });
    renderBooking();
    toast("Demo booking cancelled.");
  }
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
    const menu = document.querySelector(".menu-button");
    if (menu?.getAttribute("aria-expanded") === "true") {
      menu.setAttribute("aria-expanded", "false");
      document.querySelector("#navigation").classList.remove("open");
      menu.focus();
    }
  }
});
dialog.addEventListener("close", () => dialogFocus?.focus());
window.addEventListener("popstate", () => {
  if (location.pathname === "/campus" && document.querySelector(".explorer")) {
    const next = new URLSearchParams(location.search).get("interior");
    if (interiorId && !next) {
      leaveInterior(false);
      return;
    }
    if (next && rooms[next]) {
      enterInterior(next, false);
      return;
    }
  }
  renderRoute();
});
async function init() {
  try {
    const response = await fetch("/data/places.json");
    if (!response.ok) throw new Error("Campus data unavailable");
    places = enrichPlaces(await response.json());
    let storage;
    try {
      storage = localStorage;
    } catch {
      storage = {
        getItem() {
          throw new Error("Unavailable");
        },
        setItem() {
          throw new Error("Unavailable");
        },
      };
    }
    store = createStore(
      places.map((p) => p.id),
      storage,
    );
    tourIndex = store.data.tour;
    renderRoute();
    if (!store.persistent)
      toast(
        "Local storage is unavailable or was reset. You can still explore and use demos for this visit.",
      );
  } catch (error) {
    app.innerHTML =
      header("/") +
      `<main id="main" class="section empty-page"><h1>A little pause.</h1><p>Campus information could not load. Please check your connection and try again.</p><button class="button" onclick="location.reload()">Try again</button></main>`;
    console.error(error);
  }
}
init();

function setupReveals() {
  revealObserver?.disconnect();
  if (
    matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !("IntersectionObserver" in window)
  )
    return;
  revealObserver = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("revealed");
          revealObserver.unobserve(e.target);
        }
      }),
    { threshold: 0.08 },
  );
  document
    .querySelectorAll("[data-reveal]")
    .forEach((el) => revealObserver.observe(el));
}
function showHomeFallback(host) {
  scene?.dispose();
  scene = null;
  host.classList.add("image-mode");
  host.innerHTML =
    '<img class="fallback-campus-image" src="/images/campus.webp" alt="Rendered overview of the Serenity campus, lake and mountains"><span class="fallback-explanation">Image view · Explore the map and interior galleries below.</span>';
  document.querySelector("#hero-mode-label").textContent =
    "CAMPUS IMAGE · MAP & INTERIOR GALLERIES AVAILABLE";
  document.querySelector("[data-home-reset]").hidden = true;
  document.querySelector(".hero-coordinate").hidden = true;
}
function enterInterior(id, push = true) {
  if (!rooms[id] || !document.querySelector(".explorer")) return;
  interiorId = id;
  document.querySelector(".explorer").dataset.mode = "interior";
  const params = new URLSearchParams(location.search);
  params.set("interior", id);
  if (push) {
    history.pushState({ serenityInterior: true }, "", `/campus?${params}`);
    interiorHistoryEntry = true;
  }
  interiorHistoryEntry = Boolean(history.state?.serenityInterior);
  const room = rooms[id],
    shell = document.querySelector("#interior-shell");
  shell.hidden = false;
  shell.innerHTML = `<div class="interior-header"><button class="button button-ivory button-small" data-back-campus>← ${tourActive ? "Back to tour" : "Back to campus"}</button><div><span class="eyebrow">STEP INSIDE SERENITY</span><h2 tabindex="-1">${room.name}</h2><p>${room.subtitle}</p></div><span id="room-mode-label" class="room-mode-label">3D ROOM · DRAG TO LOOK AROUND</span><span class="room-touch-hint">Two fingers to look around · One finger to scroll</span><button class="button button-ivory button-small room-angle" data-room-angle>Another view ↺</button></div><div class="interior-gallery" hidden><img src="/images/interior-${id}.webp" alt="Rendered ${room.name} interior" width="1400" height="900"><div><button data-gallery-angle="1">Room overview</button><button data-gallery-angle="2">Another perspective</button></div></div><div class="interior-bottom"><div class="room-hotspots" aria-label="Explore room details">${room.hotspots.map((h, i) => `<button data-room-hotspot="${h.id}" aria-pressed="false"><span>0${i + 1}</span>${h.label}</button>`).join("")}</div><div id="hotspot-description" class="hotspot-description" aria-live="polite"><span class="eyebrow">TAKE A CLOSER LOOK</span><p>Choose a numbered detail to discover how this room works.</p></div></div>`;
  shell.querySelector("h2").focus({ preventScroll: true });
  if (scene && webglAvailable) {
    try {
      document.querySelector("#campus-scene").hidden = false;
      document.querySelector("#map-container").hidden = true;
      scene.enterInterior(id);
    } catch (error) {
      showInteriorGallery();
      toast("This room could not render. Explore its image gallery instead.");
    }
  } else if (!webglAvailable || view === "map") showInteriorGallery();
}
function leaveInterior(updateURL = true) {
  if (!interiorId) return;
  if (updateURL && interiorHistoryEntry && history.state?.serenityInterior) {
    history.back();
    return;
  }
  scene?.exitInterior();
  interiorId = null;
  interiorHistoryEntry = false;
  document.querySelector("#interior-shell").hidden = true;
  document.querySelector(".explorer").dataset.mode = tourActive
    ? "tour"
    : selected
      ? "selected"
      : "overview";
  document.querySelector(".explorer").classList.remove("gallery-mode");
  document.querySelector("#campus-scene").hidden = view !== "3d";
  document.querySelector("#map-container").hidden = view !== "map";
  if (!webglAvailable) setView("map");
  const params = new URLSearchParams(location.search);
  params.delete("interior");
  history.replaceState({}, "", `/campus?${params}`);
  document
    .querySelector(tourActive ? "#tour-panel [data-enter-interior]" : "#place-panel [data-enter-interior]")
    ?.focus({ preventScroll: true });
}
function showInteriorGallery() {
  if (!interiorId) return;
  scene?.exitInterior();
  document.querySelector(".explorer").classList.add("gallery-mode");
  document.querySelector("#campus-scene").hidden = true;
  document.querySelector("#map-container").hidden = true;
  document.querySelector(".interior-gallery").hidden = false;
  document.querySelector("[data-room-angle]").hidden = true;
  document.querySelector("#room-mode-label").textContent =
    "INTERIOR GALLERY · RENDERED FROM THE 3D ROOM";
}
function showHotspot(id) {
  const hotspot = rooms[interiorId]?.hotspots.find((h) => h.id === id);
  if (!hotspot) return;
  scene?.hotspot(id);
  document
    .querySelectorAll("[data-room-hotspot]")
    .forEach((b) =>
      b.setAttribute("aria-pressed", b.dataset.roomHotspot === id),
    );
  document.querySelector("#hotspot-description").innerHTML =
    `<span class="eyebrow">${hotspot.label}</span><p>${hotspot.text}</p>`;
}
