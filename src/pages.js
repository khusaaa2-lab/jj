import { t, language, category } from "./i18n.js";
import { icon, link, photo, esc } from "./ui.js";
import { devices, slots } from "./data.js";
import { campusMedia, campusAnchors } from "./campus-media.js";

export const navItems = () => [
  ["/", t("Главная", "Home")],
  ["/campus", t("Кампус", "Campus")],
  ["/learning", t("Обучение", "Learning")],
  ["/life", t("Школьная жизнь", "School life")],
  ["/events", t("События", "Events")],
  ["/project", t("О проекте", "Our project")],
];
const brand = () =>
  `<img src="/assets/emblem.svg" width="34" height="43" alt=""><span>SERENITY<small>INTERNATIONAL SCHOOL</small></span>`;
export function header(path) {
  return `<header class="site-header"><a href="/" data-link class="brand" aria-label="${t("Serenity — на главную", "Serenity — home")}">${brand()}</a><nav id="navigation" aria-label="${t("Главная навигация", "Main navigation")}">${navItems()
    .map(
      ([href, label]) =>
        `<a href="${href}" data-link ${path === href ? 'aria-current="page"' : ""}>${label}</a>`,
    )
    .join(
      "",
    )}</nav><div class="header-tools"><div class="language-switch" role="group" aria-label="${t("Язык сайта", "Site language")}"><button data-language="ru" lang="ru" aria-pressed="${language() === "ru"}" aria-label="Русский">RU</button><span>/</span><button data-language="en" lang="en" aria-pressed="${language() === "en"}" aria-label="English">EN</button></div><details class="sound-menu"><summary aria-label="${t("Настройки звука", "Sound settings")}" title="${t("Настройки звука", "Sound settings")}">${icon("sound", 18)}<span class="sound-indicator"></span></summary><div class="sound-popover"><span class="eyebrow">${t("Звучание Serenity", "The sound of Serenity")}</span><p>${t("Тихая музыка и звуки воды. Только по вашему желанию.", "A quiet score and water ambience. Only when you choose.")}</p><button class="button button-small" data-sound aria-pressed="false">${t("Включить звук", "Enable sound")}</button><label>${t("Громкость", "Volume")}<input data-volume type="range" min="0" max="100" value="24"></label><small>${t("Оригинальная процедурная композиция", "An original procedural composition")}</small></div></details><button class="menu-button icon-button" aria-label="${t("Открыть меню", "Open navigation")}" aria-controls="navigation" aria-expanded="false">${icon("menu")}</button></div></header>`;
}
export function footer() {
  return `<footer class="site-footer"><div class="footer-top"><a class="brand" href="/" data-link>${brand()}</a><p>${t("Любознательность открывает двери.", "Curiosity opens doors.")}</p><button data-telegram class="text-link">${t("Остаёмся на связи", "Stay connected")} ${icon("diagonal", 17)}</button></div><div class="footer-bottom"><span>${t("My Dream School · Автор концепции — Хусан", "My Dream School · A concept by Khusan")}</span><span>${t("Учебный проект международной школы", "An international school concept")}</span>${link("/project", t("О проекте и данных", "About the project & data"), "text-link")}</div></footer>`;
}
const chapter = (
  number,
  eyebrow,
  title,
  text,
  image,
  href,
  action,
  variant = "",
) =>
  `<section class="cinematic-chapter ${variant}" data-cinematic><div class="chapter-frame">${photo(image, t("Пространства Serenity: ", "Serenity spaces: ") + eyebrow, "chapter-photo")}<div class="chapter-shade"></div><div class="chapter-number" aria-hidden="true">${number}</div><div class="chapter-copy"><span class="eyebrow">${eyebrow}</span><h2>${title}</h2><p>${text}</p>${link(href, action, "button button-ivory")}</div><span class="chapter-end">SERENITY / ${number}</span></div></section>`;
export function homePage() {
  return `<main id="main">
<section class="home-hero" data-cinematic>${photo("campus/approved", t("Кампус Serenity у альпийского озера: каменные корпуса, деревянные фасады, центральный двор и горы.", "Serenity beside an alpine lake: stone and timber buildings, a central courtyard and mountains."), "hero-image", true)}<div class="hero-shade"></div><div class="hero-copy"><span class="eyebrow"><i></i> SERENITY INTERNATIONAL SCHOOL</span><h1>${t("Место, где<br>хочется <em>расти.</em>", "Room to learn. <br>Space to <em>become.</em>")}</h1><p>${t("Открытый миру кампус. Близость к природе. <br>Образование, в центре которого — человек.", "An open-minded campus. A little closer to nature. <br>Learning with people at its heart.")}</p><div class="hero-actions">${link("/campus", t("Исследовать кампус", "Explore the campus"), "button button-ivory")}<button class="text-link" data-tour-start>${icon("play", 15)} ${t("Начать экскурсию", "Take the tour")}</button></div></div><div class="hero-bottom"><a href="#welcome">${t("Почувствуйте Serenity", "Discover the Serenity way")} <span>↓</span></a><span>${t("ОЗЕРО · ГОРЫ · НОВЫЕ ВОЗМОЖНОСТИ", "LAKE · MOUNTAINS · POSSIBILITY")}</span></div></section>
<section class="arrival-note section" id="welcome"><span class="eyebrow">${t("УЧИТЬСЯ. СОЗДАВАТЬ. БЫТЬ СОБОЙ.", "LEARN. CREATE. BELONG.")}</span><h2>${t("Большой мир начинается<br>с <em>открытой двери.</em>", "A wider world begins<br>with <em>an open door.</em>")}</h2><div><p>${t("Serenity объединяет любознательность, практику и заботу друг о друге. От первого знакомства под деревом во дворе до проекта, который хочется продолжить завтра.", "Serenity brings curiosity, practical learning and care for one another together. From a first hello under the courtyard tree to a project you cannot wait to continue tomorrow.")}</p>${link("/learning", t("Наш подход к обучению", "Our approach to learning"), "text-link")}</div></section>
<div class="day-strip"><span><b>09:00—17:00</b>${t("Школьный день", "The school day")}</span><span><b>12:00—13:00</b>${t("Свободный час", "An hour that’s yours")}</span><span><b>${t("Вместе", "Together")}</b>${t("Международное сообщество", "An international community")}</span><span><b>${t("Рядом с природой", "Close to nature")}</b>${t("Место для новых идей", "Room for new ideas")}</span></div>
${chapter("01", t("ЧУВСТВО ПРИНАДЛЕЖНОСТИ", "A SENSE OF BELONGING"), t("Здесь начинается<br><em>«мы».</em>", "This is where<br><em>“we” begins.</em>"), t("Тёплый холл, общий двор и ученик-наставник рядом. Здесь у каждой культуры есть голос, а у каждого нового человека — место.", "A welcoming hall, a shared courtyard and a student buddy at your side. Every culture has a voice. Every newcomer has a place."), "main-hall-panorama", "/campus?place=main-building&interior=main-hall", t("Войти в главный холл", "Step into the main hall"))}
${chapter("02", t("ОТ ХОРОШЕГО ВОПРОСА К ОТКРЫТИЮ", "FROM A GOOD QUESTION TO A DISCOVERY"), t("А что, если?<br><em>Давайте проверим.</em>", "What if?<br><em>Let’s find out.</em>"), t("Основные предметы дают опору. Робототехника, программирование и совместные проекты помогают применить знания.", "Core subjects give us a foundation. Robotics, creative coding and shared projects give knowledge somewhere to go."), "tech-lab-panorama", "/campus?place=tech-lab&interior=technology-lab", t("Открыть лабораторию", "Explore the technology lab"), "chapter-right")}
<section class="nature-story section" data-cinematic><div class="nature-heading"><span class="eyebrow">${t("03 / ПРОСТРАНСТВО ДЛЯ МЫСЛИ", "03 / ROOM FOR A THOUGHT")}</span><h2>${t("Чуть тише. <br><em>Чуть ближе к себе.</em>", "A little quieter. <br><em>A little closer to wonder.</em>")}</h2></div><div class="nature-image">${photo("library-panorama", t("Читальные кресла, деревянные полки и озеро за окном библиотеки", "Reading chairs, timber shelves and the lake beyond the library windows"))}</div><div class="nature-caption"><p>${t("Книга, вид на озеро, время разобраться. Библиотека в скале и сад идей дают место и для разговора, и для сосредоточенности.", "A book, a lake view, time to think. The mountain library and Garden of Ideas make space for both conversation and concentration.")}</p>${link("/campus?place=library&interior=library", t("Осмотреть библиотеку", "Look inside the library"), "text-link")}</div></section>
${chapter("04", t("ХОРОШИЙ ДЕНЬ — ЭТО БАЛАНС", "A GOOD DAY HAS BALANCE"), t("Учиться вместе. <br><em>Жить в своём ритме.</em>", "Learning together. <br><em>Time to be yourself.</em>"), t("С 12:00 до 13:00 выбираете вы: обед, игра, прогулка или спокойная пауза. После — проекты, кружки и поддержка.", "From 12:00 to 13:00, the choice is yours: lunch, a game, a walk or a quiet pause. Projects, clubs and support follow in the afternoon."), "dining-panorama", "/life", t("Школьная жизнь", "Life at Serenity"))}
<section class="explore-invitation section"><div><span class="eyebrow">${t("05 / ВАШ СЛЕДУЮЩИЙ ШАГ", "05 / YOUR NEXT DISCOVERY")}</span><h2>${t("Не просто увидеть. <br><em>Исследовать.</em>", "Don’t just look. <br><em>Explore.</em>")}</h2><p>${t("Приблизьте кампус, выберите здание и загляните внутрь. Тринадцать мест, десять панорам, множество поводов задержаться.", "Explore the moving campus, choose a building and step inside. Thirteen places, ten panoramas and plenty of reasons to linger.")}</p>${link("/campus", t("Открыть интерактивный кампус", "Open the interactive campus"))}</div><div class="home-model-wrap"><div id="campus-scene" class="scene-host home-scene">${photo("campus/approved", t("Обзор кампуса Serenity", "Serenity campus overview"), "scene-poster")}</div><div class="model-caption"><span id="hero-mode-label">${t("3D-кампус · исследуйте в своём темпе", "3D campus · explore at your own pace")}</span><button class="icon-button" data-home-reset aria-label="${t("Сбросить вид кампуса", "Reset campus view")}" hidden>${icon("reset", 16)}</button></div></div></section>
<section class="closing-banner"><span class="eyebrow">${t("РАЗНЫЕ КУЛЬТУРЫ. ОБЩАЯ ИСТОРИЯ.", "MANY CULTURES. A SHARED STORY.")}</span><h2>${t("Принесите частичку<br><em>своего мира.</em>", "Bring a little<br>of <em>your world.</em>")}</h2>${link("/events", t("Фестиваль культур", "The Culture Festival"), "button button-ivory")}</section></main>`;
}

export function mapMarkup(places) {
  return `<svg class="flat-map photo-map" viewBox="0 0 1280 720" aria-labelledby="map-title" role="group"><title id="map-title">${t("Карта Serenity. Используйте Tab для выбора здания. Все 13 мест — в списке.", "Serenity map. Tab to choose a building. All 13 places are in the directory.")}</title><image href="${campusMedia.poster}" width="1280" height="720"/><g id="map-route"></g>${Object.entries(campusAnchors).map(([id,a])=>{const p=places.find(p=>p.id===id);return `<g class="map-place" data-place="${id}" tabindex="0" role="button" aria-pressed="false" aria-label="${esc(p.name)}" transform="translate(${a.point[0]*1280},${a.point[1]*720})"><circle r="19"/><text y="5" text-anchor="middle">${String(places.indexOf(p)+1).padStart(2,"0")}</text><title>${p.name}</title></g>`;}).join("")}</svg>`;
}
export function campusPage(places, view, store) {
  return `<main id="main" class="campus-page"><div class="campus-heading"><div><span class="eyebrow">${t("ЗДЕСЬ ЕСТЬ ВАШЕ МЕСТО", "THERE IS A PLACE FOR YOU")}</span><h1>${t("Исследуйте Serenity.", "Explore Serenity.")}</h1></div><div class="view-toggle" role="group" aria-label="${t("Вид кампуса", "Campus view")}"><button data-view="3d" aria-pressed="${view === "3d"}">${icon("cube", 16)} ${t("3D-кампус", "3D campus")}</button><button data-view="map" aria-pressed="${view === "map"}">${icon("map", 16)} ${t("2D-карта", "2D map")}</button></div></div><div class="explorer" data-mode="overview"><div class="explorer-stage"><div id="campus-scene" class="scene-host campus-scene" ${view === "map" ? "hidden" : ""}><img class="scene-poster" src="${campusMedia.poster}" width="1280" height="720" alt="${t("Весь кампус Serenity", "The whole Serenity campus")}"><span class="scene-loading" role="status">${t("Строим пространственную модель · места уже доступны в списке", "Loading the spatial model · explore the directory meanwhile")}</span></div><div id="map-container" ${view !== "map" ? "hidden" : ""}><div class="map-photo">${photo("campus/approved", t("Архитектурный вид кампуса Serenity", "Architectural view of Serenity campus"))}<span>${t("Вид кампуса", "Campus view")}</span></div>${mapMarkup(places)}</div><div class="explorer-help"><span id="scene-help">${t("Перетащите для вращения · правая кнопка для перемещения · колесо для масштаба", "Drag to orbit · right-drag to pan · scroll to zoom")}</span><span class="mobile-hint">${t("Один палец — ракурс · два — перемещение и масштаб", "One finger orbits · two fingers pan and zoom")}</span></div><div class="camera-tools"><button class="icon-button" data-reset aria-label="${t("Весь кампус", "Full campus overview")}">${icon("reset", 18)}</button><button class="icon-button" data-zoom="1" aria-label="${t("Приблизить", "Zoom in")}">+</button><button class="icon-button" data-zoom="-1" aria-label="${t("Отдалить", "Zoom out")}">−</button></div></div><aside class="place-directory" aria-label="${t("Все места кампуса", "All campus places")}"><div class="directory-top"><span class="eyebrow">${t("13 МЕСТ ДЛЯ ОТКРЫТИЙ", "13 PLACES TO DISCOVER")}</span><button class="icon-button" data-saved-filter aria-label="${t("Показать избранное", "Show saved places")}" aria-pressed="false">${icon("heart", 18)}</button></div><label class="search-box">${icon("search", 17)}<input id="place-search" type="search" placeholder="${t("Найти место…", "Find a place…")}" aria-label="${t("Поиск по кампусу", "Search campus places")}"></label><div class="filter-row"><select id="category-filter" aria-label="${t("Категория", "Category")}"><option value="All">${t("Все категории", "All categories")}</option>${[...new Set(places.map((p) => p.category))].map((c) => `<option value="${c}">${category(c)}</option>`).join("")}</select><select id="level-filter" aria-label="${t("Уровень", "Level")}"><option value="All">${t("Все уровни", "All levels")}</option><option value="Ground">${t("Территория / 1 этаж", "Ground")}</option><option value="Upper">${t("Верхний", "Upper")}</option><option value="Lower">${t("Нижний", "Lower")}</option></select></div><p id="place-count" class="list-caption"></p><div id="place-list" class="place-list"></div><button class="tour-launch button button-small" ${store.data.tour > 0 ? "data-tour-resume" : "data-tour-start"}>${icon("play", 14)}${store.data.tour > 0 ? t("Продолжить экскурсию", "Resume tour") : t("Экскурсия: 8 остановок", "Tour: 8 stops")}</button></aside><aside id="place-panel" class="place-panel" aria-label="${t("Выбранное место", "Selected place")}" hidden></aside><aside id="tour-panel" class="tour-panel" aria-label="${t("Экскурсия", "Guided tour")}" hidden></aside><section id="interior-shell" class="interior-shell" aria-label="${t("Панорама помещения", "Room panorama")}" hidden></section></div><div class="campus-note"><span>${icon("leaf", 15)}${t("Объёмная модель по референсу · 10 панорам помещений", "Reference-based spatial model · 10 interior panoramas")}</span><span>${t("Невидимые стороны восстановлены приблизительно; маршруты условные", "Unseen sides are approximate; routes are illustrative")}</span></div></main>`;
}

const intro = (label, title, text) =>
  `<div class="page-intro section"><span class="eyebrow">${label}</span><h1>${title}</h1><p>${text}</p></div>`;
export function learningPage() {
  const day = [
    [
      "09:00",
      t("Начать с вопроса", "Begin with a question"),
      t(
        "Языки, математика, естественные и гуманитарные науки.",
        "Languages, mathematics, science and humanities.",
      ),
    ],
    [
      "10:30",
      t("Сделать паузу", "A moment to reset"),
      t(
        "Перемена, затем практика и основные предметы.",
        "A break, then focused practice and core subjects.",
      ),
    ],
    [
      "12:00",
      t("Час, который принадлежит вам", "An hour that is yours"),
      t(
        "Обед, отдых, игры или прогулка до 13:00.",
        "Lunch, rest, games or a walk until 13:00.",
      ),
    ],
    [
      "13:00",
      t("От идеи к действию", "Ideas into action"),
      t(
        "Проекты, эксперименты и работа руками.",
        "Projects, experiments and hands-on learning.",
      ),
    ],
    [
      "14:30",
      t("Выбрать своё направление", "Find your next thing"),
      t(
        "Перемена, кружки, поддержка и практика.",
        "A break, then clubs, support and practice.",
      ),
    ],
    [
      "17:00",
      t("До новых открытий", "Until the next discovery"),
      t("Школьный день заканчивается.", "The school day ends."),
    ],
  ];
  return `<main id="main">${intro(t("ОБУЧЕНИЕ В SERENITY", "LEARNING AT SERENITY"), t("Хорошие вопросы. <br><em>Большие возможности.</em>", "Good questions. <br><em>Great possibilities.</em>"), t("Прочная основа, открытый ум и смелость пробовать. Знания становятся частью того, что мы создаём вместе.", "A strong foundation, an open mind and the confidence to try. Knowledge becomes part of what we make together."))}<div class="page-panorama">${photo("classroom-panorama", t("Ученики вместе работают в светлой учебной студии", "Students working together in a bright learning studio"))}${link("/campus?place=learning-wing&interior=learning-studio", t("Осмотреть учебную студию", "Explore the learning studio"), "button button-ivory")}</div><section class="learning-layout section"><div><span class="eyebrow">${t("ЗНАНИЯ, ПРАКТИКА И ПОДДЕРЖКА", "KNOWLEDGE, PRACTICE & SUPPORT")}</span><h2>${t("Понять. <br>Попробовать. <br><em>Сделать своим.</em>", "Understand. <br>Try it. <br><em>Make it your own.</em>")}</h2>${[
    [
      t("Связывать предметы", "Connect the subjects"),
      t(
        "Исследуйте вопрос в библиотеке, проверьте в лаборатории и объясните результат своими словами.",
        "Research a question in the library, test it in the lab and explain the result in your own words.",
      ),
    ],
    [
      t("Создавать полезное", "Make something meaningful"),
      t(
        "Спроектируйте сбор дождевой воды, напишите программу или расскажите историю на новом языке.",
        "Design a rainwater model, code a useful tool or tell a story in a new language.",
      ),
    ],
    [
      t("Получать помощь", "Find support"),
      t(
        "Работа в небольших группах, внимание преподавателя и тихая комната учитывают разные потребности.",
        "Small-group practice, teacher check-ins and a quiet room make space for different learning needs.",
      ),
    ],
  ]
    .map(
      ([a, b], i) =>
        `<div class="principle"><span>0${i + 1}</span><div><h3>${a}</h3><p>${b}</p></div></div>`,
    )
    .join(
      "",
    )}</div><div class="timetable"><div class="timetable-heading"><span class="eyebrow">${t("ПРИМЕР ШКОЛЬНОГО ДНЯ", "AN EXAMPLE SCHOOL DAY")}</span><strong>09—17</strong></div>${day.map(([time, title, text]) => `<div class="time-row ${time === "12:00" ? "time-highlight" : ""}"><time>${time}</time><div><h3>${title}</h3><p>${text}</p></div></div>`).join("")}</div></section><section class="week-section section"><span class="eyebrow">${t("ПЯТЬ ДНЕЙ — ПЯТЬ НАПРАВЛЕНИЙ", "FIVE DAYS, FIVE WAYS TO WONDER")}</span><h2>${t("Неделя с <em>возможностями.</em>", "A week with <em>possibility.</em>")}</h2><p>${t("Темы дополняют основные предметы.", "Themes enrich the day alongside core learning.")}</p><div class="weekday-grid">${[
    [
      t("ПН", "MON"),
      t("Открывать", "Discover"),
      t("Следовать за вопросом.", "Follow a question."),
    ],
    [
      t("ВТ", "TUE"),
      t("Создавать", "Make"),
      t("Пробовать и улучшать.", "Try, test and improve."),
    ],
    [
      t("СР", "WED"),
      t("Исследовать", "Explore"),
      t("Выходить за рамки класса.", "Look beyond the classroom."),
    ],
    [
      t("ЧТ", "THU"),
      t("Навыки жизни", "Life Skills"),
      t("Учиться повседневному.", "Practise everyday skills."),
    ],
    [
      t("ПТ", "FRI"),
      t("Вместе", "Together"),
      t("Делиться и поддерживать.", "Share and celebrate."),
    ],
  ]
    .map(
      ([a, b, c]) =>
        `<div><span class="eyebrow">${a}</span><h3>${b}</h3><p>${c}</p></div>`,
    )
    .join("")}</div></section></main>`;
}
export function localDay() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
export function lifePage() {
  return `<main id="main">${intro(t("ЖИЗНЬ МЕЖДУ УРОКАМИ", "LIFE BETWEEN THE LESSONS"), t("Время для друзей. <br><em>Пространство для себя.</em>", "Time for friends. <br><em>Room to be yourself.</em>"), t("Общий стол, новая команда или несколько минут тишины. Отдых — часть хорошего школьного дня.", "A shared table, a new team or a few quiet minutes. Rest belongs in a thoughtful school day."))}<div class="page-panorama">${photo("dining-panorama", t("Обеденный зал с видом на озеро", "The dining hall overlooking the lake"))}${link("/campus?place=dining-a&interior=dining-hall", t("Войти в столовую", "Step into the dining hall"), "button button-ivory")}</div><section class="free-hour section"><span class="eyebrow">12:00—13:00</span><h2>${t("Один час. <br><em>Ваш выбор.</em>", "One hour. <br><em>Your choice.</em>")}</h2><p>${t("Пообедайте, найдите настольную игру, прогуляйтесь с другом или просто ничего не делайте. В это время нет обязательных занятий.", "Have lunch, find a board game, walk with a friend or do nothing for a while. This hour has no compulsory lessons.")}</p></section><section class="life-places section">${[
    [
      "dining-a",
      t("Два зала. Общая кухня.", "Two halls. One shared kitchen."),
      t(
        "У озера и у сада — отдельные подходы к раздаче. Выбор зала для обеда и общения, без обещания отсутствия очередей.",
        "Lakeside and Garden Dining have separate serving approaches. A choice of room for lunch and conversation, without promising no queues.",
      ),
    ],
    [
      "ideas-garden",
      t("Свежий воздух для идей.", "Fresh air for ideas."),
      t(
        "Стол под навесом, скамейки для общения и тихий уголок. В дождь рядом есть мастерская с преподавателем.",
        "A covered table, sociable benches and a quiet corner. The supervised workshop is nearby when it rains.",
      ),
    ],
    [
      "football-field",
      t("Место в команде.", "A place on the team."),
      t(
        "Одно большое поле, ворота и небольшая трибуна. Можно играть или поддерживать друзей.",
        "One large field, goals and a small stand. Join a game or cheer for a friend.",
      ),
    ],
    [
      "residence",
      t("Почувствовать себя дома.", "A home away from home."),
      t(
        "Небольшая резиденция, совместная учёба и программа учеников-наставников для международного сообщества.",
        "A small residence, shared study spaces and a student-buddy welcome for an international community.",
      ),
    ],
  ]
    .map(
      ([id, title, text], i) =>
        `<article><span class="life-number">0${i + 1}</span><h3>${title}</h3><p>${text}</p>${link("/campus?place=" + id, t("Найти на кампусе", "Find it on campus"), "text-link")}</article>`,
    )
    .join(
      "",
    )}</section><section class="booking-section section" id="games"><div>${photo("games-panorama", t("Игровая гостиная с консолями и настольными играми", "Games lounge with consoles and board games"))}<span class="eyebrow">${t("ИГРОВАЯ ГОСТИНАЯ", "THE GAMES LOUNGE")}</span><h2>${t("Хорошая игра. <br><em>Лучшая компания.</em>", "Good games. <br><em>Better company.</em>")}</h2><p>${t("Нижний уровень технологического корпуса с дневным светом и выходом во двор. Компьютеры, планшеты, консоли и настольные игры.", "Daylight and an outdoor exit on the technology building’s lower level. Computers, tablets, consoles and board games.")}</p>${link("/campus?place=gaming-zone&interior=games-lounge", t("Осмотреть гостиную", "Look inside the lounge"), "text-link")}</div><form id="booking-form" class="booking-form"><span class="eyebrow">${t("ПОПРОБУЙТЕ ЛОКАЛЬНУЮ ДЕМОНСТРАЦИЮ", "TRY A LOCAL DEMONSTRATION")}</span><h3>${t("Ваш план на свободный час.", "Your free-hour plan.")}</h3><p class="demo-label">${t("Это не реальная бронь. Сохраняется только в этом браузере, без синхронизации. Один активный сеанс на выбранный день.", "This is not a real reservation. Saved only in this browser, without syncing. One active session per chosen day.")}</p><label>${t("Выберите день", "Choose a day")}<input id="booking-day" name="day" type="date" value="${localDay()}" required></label><label>${t("Устройство", "Pick a device")}<select name="device">${devices.map((d) => `<option value="${d}">${d}</option>`).join("")}</select></label><fieldset><legend>${t("Двадцать минут на игру", "A twenty-minute pause")}</legend><div class="slot-options">${slots.map((s, i) => `<label><input type="radio" name="slot" value="${s}" ${i === 0 ? "checked" : ""}><span>${s}</span></label>`).join("")}</div></fieldset><button class="button" type="submit">${t("Сохранить демо-бронь", "Save demo booking")}${icon("arrow", 17)}</button><div id="booking-status" class="form-status" aria-live="polite"></div></form></section></main>`;
}

export function eventsPage() {
  const days = [
    [
      t("Знакомимся и придумываем", "Meet & imagine"),
      t(
        "Поделитесь традицией, языком или историей.",
        "Share a tradition, a language or a story.",
      ),
    ],
    [
      t("Выбираем роль", "Choose your role"),
      t(
        "Рассказчик, мастер, ведущий или организатор.",
        "Become a storyteller, maker, host or organiser.",
      ),
    ],
    [
      t("Собираем истории", "Gather stories"),
      t(
        "Спрашиваем, слушаем и создаём общую коллекцию.",
        "Ask, listen and build a shared collection.",
      ),
    ],
    [
      t("Создаём вместе", "Make together"),
      t(
        "Выставки, рецепты, музыка и небольшие поделки.",
        "Create displays, recipes, music and small crafts.",
      ),
    ],
    [
      t("Показываем первые идеи", "Share a first look"),
      t(
        "Пробуем с наставником и обсуждаем.",
        "Try ideas with a buddy and reflect.",
      ),
    ],
    [
      t("Открываем мастерские", "Open the workshops"),
      t(
        "Знакомимся с культурой другой группы.",
        "Explore another group’s culture and craft.",
      ),
    ],
    [
      t("Практикуемся", "Practise & prepare"),
      t(
        "Репетируем и поддерживаем друг друга.",
        "Rehearse and support each other.",
      ),
    ],
    [
      t("Соединяем части", "Connect the pieces"),
      t(
        "Собираем истории в общую программу.",
        "Bring the stories into one programme.",
      ),
    ],
    [
      t("Приглашаем всех", "Welcome everyone"),
      t(
        "Готовим двор и зовём одноклассников.",
        "Prepare the courtyard and invite classmates.",
      ),
    ],
    [
      t("Празднуем и обсуждаем", "Celebrate & reflect"),
      t(
        "Дневной финал и размышления о пройденном.",
        "An afternoon finale and a thoughtful look back.",
      ),
    ],
  ];
  return `<main id="main">${intro(t("БОЛЬШЕ, ЧЕМ ДАТА В КАЛЕНДАРЕ", "MORE THAN A DATE ON THE CALENDAR"), t("Разные истории. <br><em>Общий праздник.</em>", "Different stories. <br><em>One shared celebration.</em>"), t("События длятся две недели: от подготовки и мастерских до финала. Обычные уроки продолжаются, а события занимают часть дневной программы.", "Events last two weeks: from preparation and workshops to a finale. Regular lessons continue, with activities alongside part of the afternoon programme."))}<section class="festival-visual">${photo("main-hall-panorama", t("Общее пространство для международного школьного сообщества", "A shared space for the international school community"))}<div><span class="eyebrow">${t("ПРИМЕР ДВУХНЕДЕЛЬНОГО СОБЫТИЯ", "AN EXAMPLE TWO-WEEK EVENT")}</span><h2>${t("Фестиваль<br><em>культур.</em>", "The Culture<br><em>Festival.</em>")}</h2></div></section><section class="festival-section section"><div><span class="eyebrow">${t("МНОГО СПОСОБОВ УЧАСТВОВАТЬ", "MANY WAYS TO PARTICIPATE")}</span><h2>${t("Ваш голос. <br><em>Ваша история.</em>", "Your voice. <br><em>Your story.</em>")}</h2><p>${t("Языки, еда, музыка и истории, которые делают нас собой. Разные роли помогают каждому найти своё участие. Это пример школьного события, а не действующая афиша.", "Languages, food, music and the stories that make us who we are. Different roles make space for everyone. This is an example school event, not a live calendar.")}</p>${link("/campus?place=courtyard", t("Встречаемся во дворе", "Meet in the courtyard"), "text-link")}</div><div class="festival-schedule">${[
    0, 1,
  ]
    .map(
      (w) =>
        `<section class="festival-week"><h3><span>0${w + 1}</span>${w === 0 ? t("Придумываем и готовимся", "Imagine & prepare") : t("Создаём и празднуем", "Make & celebrate")}</h3>${days
          .slice(w * 5, w * 5 + 5)
          .map(
            ([title, text], i) =>
              `<div class="festival-day"><span>${t("ДЕНЬ", "DAY")} ${w * 5 + i + 1}</span><div><h4>${title}</h4><p>${text}</p></div></div>`,
          )
          .join("")}</section>`,
    )
    .join(
      "",
    )}</div></section><section class="vote-section section"><div><span class="eyebrow">${t("ЧТО ПОПРОБУЕМ ДАЛЬШЕ?", "WHAT SHOULD WE TRY NEXT?")}</span><h2>${t("Выберите новое<br><em>приключение.</em>", "Choose your next<br><em>adventure.</em>")}</h2><p>${t("Выбор можно изменить. Сохраняется только ваш демо-голос в этом браузере. Итоги и голоса других посетителей не выдумываются.", "You can change your mind. Only your demo choice is saved in this browser. There are no invented totals or votes from other visitors.")}</p><span class="demo-label">${t("Локальная демонстрация голосования", "A local voting demonstration")}</span></div><div id="vote-options" class="vote-options"></div></section></main>`;
}
export function projectPage() {
  const faqs = [
    [
      t("Это действующая школа?", "Is Serenity an operating school?"),
      t(
        "Serenity International School — концепция Хусана для My Dream School. Реального приёма, аккредитаций и школьных услуг здесь нет.",
        "Serenity International School is Khusan’s My Dream School concept. It does not offer real admissions, accreditations or school services.",
      ),
    ],
    [
      t("Как устроен виртуальный кампус?", "How does the virtual campus work?"),
      t(
        "Кампус — пространственная модель Three.js, вручную построенная по архитектурному изображению. Можно менять ракурс, перемещаться и приближать здания. Крыши всегда закрыты. Невидимые стороны восстановлены приблизительно. Десять интерьеров — отдельные перспективные панорамы.",
        "The campus is a spatial Three.js model manually reconstructed from the architectural reference. Orbit, pan and zoom are bounded for comfortable exploration. Roofs stay closed. Unseen sides are approximate. The ten interiors are separate perspective panoramas.",
      ),
    ],
    [
      t("Что происходит с моими данными?", "What happens to my data?"),
      t(
        "Избранное, голос, демо-бронь и черновик хранятся локально. При недоступном хранилище они работают в памяти на время визита. Ничего не отправляется.",
        "Favourites, your vote, demo bookings and drafts stay locally. If storage is unavailable, they work in memory for this visit. Nothing is submitted.",
      ),
    ],
    [
      t("Что делать, если 3D недоступно?", "What if 3D is unavailable?"),
      t(
        "При отсутствии WebGL включается явно обозначенная резервная 2D-карта. Список мест и все десять панорам остаются доступны. При уменьшенном движении камера переходит к месту без анимации.",
        "Without WebGL, the clearly labelled 2D fallback map appears. The directory and ten panoramas remain available. Reduced motion switches the camera without animation.",
      ),
    ],
    [
      t("Есть ли связь через Telegram?", "Is a Telegram contact available?"),
      t(
        "Пока нет. Бот и отдельный домен появятся после подтверждённого подключения. Кнопка связи показывает информацию, а не выдуманный контакт.",
        "Not yet. A bot and dedicated domain can be added after verified configuration. The connect button explains this rather than linking to an unverified contact.",
      ),
    ],
  ];
  return `<main id="main">${intro(t("О ПРОЕКТЕ", "OUR PROJECT"), t("Школа как идея. <br><em>Возможность для всех.</em>", "A school imagined. <br><em>A possibility shared.</em>"), t("Serenity International School — концепция международной школы в проекте My Dream School. Здесь можно исследовать, что значит учиться с интересом и вниманием к человеку.", "Serenity International School is an international school concept for My Dream School. Explore what learning with curiosity and care could feel like."))}<section class="project-story section"><div class="project-emblem"><img src="/assets/emblem.svg" width="150" height="175" alt="${t("Открытая арочная дверь, горы, вода и золотое солнце", "An open arched doorway, mountains, water and a gold sun")}"><span>SERENITY</span></div><div><span class="eyebrow">${t("КОНЦЕПЦИЯ ХУСАНА", "IMAGINED BY KHUSAN")}</span><h2>${t("Больше места<br><em>для человека.</em>", "More room<br><em>for you.</em>")}</h2><p>${t("Компактный кампус у озера, практические проекты, свободный час и международное сообщество. Серьёзное отношение к знаниям и бережное — к тем, кто учится.", "A compact lakeside campus, practical projects, a free-choice hour and an international community. Ambitious about learning, thoughtful about the people doing it.")}</p><p>${t("Кампус вручную воссоздан в объёмной геометрии по архитектурному референсу: башня, круглая площадь, террасы и библиотека в склоне. Невидимые стороны и размеры приблизительны — это интерпретация, не обмерная модель. Десять интерьеров сохраняют дизайн школы.", "The campus is manually reconstructed in spatial geometry from the architectural reference: the tower, circular courtyard, terraces and hillside library. Unseen sides and dimensions are approximate; this is an interpretation, not a surveyed model. Ten interiors preserve the school’s design.")}</p></div></section><section class="project-conversation section"><div class="faq"><span class="eyebrow">${t("НЕСКОЛЬКО ВАЖНЫХ ВОПРОСОВ", "A FEW GOOD QUESTIONS")}</span><h2>${t("Хотите узнать<br><em>больше?</em>", "Wondering about<br><em>something?</em>")}</h2>${faqs.map(([q, a]) => `<details><summary>${q}<span>+</span></summary><p>${a}</p></details>`).join("")}</div><form id="idea-form" class="idea-form" novalidate><span class="eyebrow">${t("ХОРОШАЯ ИДЕЯ МОЖЕТ НАЧАТЬСЯ ЗДЕСЬ", "A GOOD IDEA CAN START HERE")}</span><h3>${t("Что бы вы добавили?", "What would you add?")}</h3><p>${t("Сохраните мысль для себя или скопируйте её, чтобы поделиться самостоятельно.", "Keep a thought for yourself, or copy it to share in your own way.")}</p><label>${t("Название идеи", "Give your idea a title")}<input name="title" minlength="3" maxlength="80" required aria-describedby="idea-status" placeholder="${t("Больше места для…", "A little more room for…")}"></label><label>${t("Категория", "Choose a category")}<select name="category">${["Campus", "Learning", "School life", "Events", "Other"].map((c) => `<option value="${c}">${category(c)}</option>`).join("")}</select></label><label>${t("Расскажите подробнее", "Tell us a little more")}<textarea name="description" minlength="20" maxlength="1500" rows="5" required aria-describedby="idea-status" placeholder="${t("Как это будет работать? Кому поможет?", "What would it look like? Who could it help?")}"></textarea></label><small>${t("Название: 3–80 символов · описание: 20–1500", "Title: 3–80 characters · description: 20–1500")}</small><div class="form-actions"><button class="button" type="submit">${t("Сохранить черновик", "Save draft")}${icon("arrow", 16)}</button><button class="button button-outline" type="button" data-copy-idea>${t("Скопировать идею", "Copy idea")}</button></div><div id="idea-status" class="form-status" aria-live="polite"></div><p class="small-note">${t("Локальный черновик. Ничего не отправляется на сервер.", "A local draft. Nothing is sent to a server.")}</p></form></section></main>`;
}
export function notFound() {
  return `<main id="main" class="empty-page section"><span class="eyebrow">404</span><h1>${t("Вернёмся<br><em>на знакомый путь.</em>", "Let’s find your<br><em>way back.</em>")}</h1><p>${t("Такой страницы в кампусе нет.", "This page is not part of the campus.")}</p>${link("/", t("На главную Serenity", "Back to Serenity"))}</main>`;
}
