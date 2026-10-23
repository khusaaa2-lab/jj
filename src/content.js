import { t, language } from "./i18n.js";
import { enrichPlaces, tourStops } from "./data.js";
import {
  rooms as originalRooms,
  interiorForPlace as legacyMapping,
} from "./interior-data.js";
export const interiorForPlace = {
  ...legacyMapping,
  workshop: "workshop",
  "dining-b": "garden-dining",
  "quiet-room": "quiet-room",
  residence: "residence",
};

const ruPlaces = {
  "main-building": [
    "Главный корпус",
    "Открытая дверь в школу. Светлый камень, тёплое дерево и небольшая часовая башня встречают вас в самом сердце Serenity.",
    [
      "Знакомство с учеником-наставником",
      "Языковой обмен",
      "Выставки сообщества",
    ],
    "Если нужна помощь, обратитесь к ученику-наставнику.",
    "С тёплого знакомства",
  ],
  courtyard: [
    "Центральный двор",
    "Место встречи под большим деревом. Здесь можно увидеть друзей, поделиться мыслью или передохнуть между занятиями.",
    ["Встречи с наставником", "Общение на воздухе", "Школьные праздники"],
    "Оставляйте центральные дорожки свободными для всех.",
    "Сердце нашей школы",
  ],
  "learning-wing": [
    "Учебные студии",
    "Светлые пространства для хороших вопросов. Основные предметы связаны с практическими проектами, совместной работой и индивидуальной поддержкой.",
    ["Основные предметы", "Работа в небольших группах", "Помощь в учёбе"],
    "Уважайте разные идеи и способы учиться.",
    "Любознательность каждый день",
  ],
  "tech-lab": [
    "Технологическая лаборатория",
    "Открытая мастерская с большими окнами. Робототехника, программирование и ответственное использование технологий объединяют учеников.",
    ["Программирование", "Робототехника", "Цифровой дизайн"],
    "Используйте оборудование вместе с преподавателем и указывайте источники.",
    "От идеи к работающей модели",
  ],
  workshop: [
    "Творческая мастерская",
    "Место, где можно создавать, чинить и экспериментировать под присмотром преподавателя. Деревянные верстаки и общие инструменты для практической работы.",
    ["Макеты", "Ремонт вещей", "Опыты с материалами"],
    "Работайте с инструментами только под присмотром.",
    "Думать руками",
  ],
  "ideas-garden": [
    "Сад идей",
    "Сад для ещё не законченных мыслей. Рабочий стол под навесом, общие скамейки и тихий уголок помогают придумать что-то новое.",
    ["Работа на воздухе", "Зарисовки", "Спокойные размышления"],
    "В дождь продолжайте работу в мастерской под присмотром преподавателя.",
    "Дайте мысли вырасти",
  ],
  library: [
    "Горная библиотека",
    "Библиотека встроена в скалу справа сверху над кампусом и смотрит на озеро. Деревянные полки, каменная стена и тихие уголки задают спокойный ритм.",
    ["Самостоятельное чтение", "Исследования", "Совместная работа"],
    "Обсуждайте проекты в общей зоне, сохраняя тишину в местах для чтения.",
    "Открытия в своём темпе",
  ],
  "dining-a": [
    "Столовая у озера",
    "Светлый обеденный зал с видом на воду. Два зала с отдельными подходами к раздаче соединены общей служебной кухней.",
    ["Обед с друзьями", "Кухни разных культур", "Общие столы"],
    "Следуйте к раздаче своего зала и сообщайте сотрудникам об особенностях питания.",
    "Место за общим столом",
  ],
  "dining-b": [
    "Столовая у сада",
    "Уютные общие столы рядом с садом. Вторая раздача даёт ещё один выбор для обеда и общения в свободный час.",
    ["Обед", "Беседы", "Отдых рядом с садом"],
    "Оставляйте стол чистым. Две раздачи не исключают очередей.",
    "Хорошая еда и компания",
  ],
  "gaming-zone": [
    "Игровая гостиная",
    "Светлая гостиная на нижнем уровне с выходом во внутренний двор. Компьютеры, планшеты, консоли и настольные игры для свободного часа.",
    ["Совместные игры", "Настольные игры", "Демо-бронирование"],
    "Играйте по очереди, уважайте друг друга и не ешьте рядом с устройствами.",
    "Играть вместе",
  ],
  "football-field": [
    "Футбольное поле",
    "Одно большое размеченное поле на краю кампуса: ворота и небольшая трибуна. Можно играть, тренироваться или поддерживать друзей.",
    ["Футбол", "Командные тренировки", "Дневные кружки"],
    "Делитесь пространством и следуйте указаниям преподавателя.",
    "Найдите свою команду",
  ],
  residence: [
    "Резиденция учеников",
    "Небольшой дом в тихой части кампуса. Наставники и общие учебные пространства помогают международному сообществу освоиться.",
    ["Знакомство с наставником", "Совместная учёба", "Языковой обмен"],
    "Уважайте часы тишины и личное пространство жильцов.",
    "Почувствовать себя дома",
  ],
  "quiet-room": [
    "Тихая комната",
    "Спокойное пространство наверху учебного корпуса. Здесь можно почитать, восстановить силы или получить поддержку вдали от шума.",
    ["Чтение в тишине", "Спокойная пауза", "Индивидуальная поддержка"],
    "Говорите тихо и уважайте желание побыть в покое.",
    "Время для себя",
  ],
};
export function getPlaces(canonical) {
  return enrichPlaces(canonical).map((p) => {
    if (language() !== "ru") return p.id === "library" ? { ...p, name: "Mountain Library", description: "Built into the rocky hillside at the upper right of campus, the library opens towards the lake. Timber shelves, a rock wall and quiet corners make space for a different pace." } : p;
    const [name, description, activities, rule, tag] = ruPlaces[p.id];
    const transition =
      p.id === "gaming-zone"
        ? "Войдите в технологическую лабораторию и спуститесь по лестнице или на лифте. У игровой гостиной есть отдельный выход в освещённый двор."
        : p.id === "quiet-room"
          ? "Войдите в учебные студии и поднимитесь по лестнице или на лифте в тихую комнату."
          : undefined;
    return { ...p, name, description, activities, rule, tag, transition };
  });
}
export const panoramaAssets = {
  "main-hall": "main-hall-panorama",
  library: "library-panorama",
  "learning-studio": "classroom-panorama",
  "technology-lab": "tech-lab-panorama",
  "dining-hall": "dining-panorama",
  "games-lounge": "games-panorama",
  workshop: "workshop-panorama",
  "garden-dining": "garden-dining-panorama",
  "quiet-room": "quiet-room-panorama",
  residence: "residence-panorama",
};
export function roomContent(id) {
  const data = {
    "main-hall": {
      name: t("Главный холл", "The Main Hall"),
      subtitle: t(
        "Знакомство начинается здесь.",
        "Your first connection starts here.",
      ),
      description: t(
        "Двусветный холл с деревянной лестницей, стойкой приёма и выходом в центральный двор.",
        "A double-height timber atrium with reception, an upper gallery and an entrance to the tree courtyard.",
      ),
      hotspots: [
        [
          "welcome",
          0.13,
          0.67,
          t("Добро пожаловать", "The welcome desk"),
          t(
            "Первый день начинается со знакомства. На стойке приёма помогут найти ученика-наставника, узнать расписание 09:00–17:00 и сориентироваться в школе.",
            "Start your first day with a welcome. Reception helps you find a student buddy, understand the 09:00–17:00 day and find your way around.",
          ),
        ],
        [
          "gallery",
          0.27,
          0.3,
          t("Верхняя галерея", "The upper gallery"),
          t(
            "Галерея соединяет учебные пространства наверху. Лестница и лифт обеспечивают доступ между этажами; из холла виден общий двор.",
            "The gallery connects the upstairs learning spaces. Stairs and a lift provide access between levels, with a view back to the shared courtyard.",
          ),
        ],
        [
          "community",
          0.55,
          0.73,
          t("Встретимся здесь", "A place to meet"),
          t(
            "Мягкие кресла для знакомства, языкового обмена и короткого отдыха. Наставник помогает новому ученику познакомиться с сообществом.",
            "Comfortable seats welcome conversation, language exchange and a quiet pause. A student buddy helps newcomers get to know the community.",
          ),
        ],
      ],
    },
    library: {
      name: t("Горная библиотека", "Mountain Library"),
      subtitle: t(
        "Новая мысль. Другой горизонт.",
        "A new thought. A wider horizon.",
      ),
      description: t(
        "Деревянные полки и каменная стена; за широким окном — озеро и горы. Тихое чтение отделено от совместной работы.",
        "Timber shelves and a rock wall surround quiet reading and collaborative study, with a broad view of the lake and mountains.",
      ),
      hotspots: [
        [
          "reading",
          0.16,
          0.77,
          t("Уголок для чтения", "The reading corner"),
          t(
            "Выберите книгу и устройтесь в кресле. Здесь сохраняют тишину; беседы и групповые проекты проходят в другой части библиотеки.",
            "Choose a book and settle into a reading chair. This area stays quiet; conversations and group projects have a separate space.",
          ),
        ],
        [
          "collaboration",
          0.71,
          0.66,
          t("Учиться вместе", "Study together"),
          t(
            "Общий стол подходит для небольшого исследования или обсуждения проекта. Индивидуальные рабочие места остаются отдельно.",
            "A shared table supports small-group research and project discussions. Individual study spaces remain separate.",
          ),
        ],
        [
          "window",
          0.48,
          0.33,
          t("Окно на озеро", "The lake window"),
          t(
            "Библиотека частично встроена в низкий склон. Зелёная крыша и короткая крытая дорожка связывают её с природой и учебным корпусом.",
            "Partly embedded in a low slope, the library has a planted roof and a short covered approach from the learning wing. The glazing opens towards the lake.",
          ),
        ],
      ],
    },
    "learning-studio": {
      name: t("Учебная студия", "Learning Studio"),
      subtitle: t(
        "Пространство для хороших вопросов.",
        "Space for better questions.",
      ),
      description: t(
        "Мобильные столы, стена для проектов и спокойная зона у окна в светлом классе.",
        "A bright studio with movable tables, a project wall and a quiet window-side area.",
      ),
      hotspots: [
        [
          "project",
          0.82,
          0.35,
          t("Стена проектов", "The project wall"),
          t(
            "Идеи, наброски и результаты опытов показывают весь путь решения, включая попытки, которые не сработали.",
            "Sketches, models and experiments reveal the whole process, including ideas that did not work the first time.",
          ),
        ],
        [
          "tables",
          0.48,
          0.64,
          t("Мобильные столы", "Tables that move"),
          t(
            "Утром — языки, математика, естественные и гуманитарные науки. После обеда столы объединяются для практической работы над проектами.",
            "Mornings bring languages, mathematics, science and humanities. In the afternoon, movable tables become shared workspaces for practical projects.",
          ),
        ],
        [
          "quiet",
          0.13,
          0.69,
          t("Спокойная зона", "A quieter corner"),
          t(
            "Место для сосредоточенной работы и индивидуальной поддержки. Отдельная тихая комната расположена наверху учебного корпуса.",
            "A quieter place for focused practice and personal support. A separate Quiet Room is upstairs in the learning wing.",
          ),
        ],
      ],
    },
    "technology-lab": {
      name: t("Технологическая лаборатория", "Technology Lab"),
      subtitle: t("Придумать. Проверить. Создать.", "Imagine. Test. Make."),
      description: t(
        "Светлая лаборатория робототехники с рабочими столами, компьютерами и оборудованием для прототипов.",
        "A light-filled robotics studio with shared benches, computers and supervised prototyping equipment.",
      ),
      hotspots: [
        [
          "robotics",
          0.52,
          0.7,
          t("Робототехника", "Robotics bench"),
          t(
            "Датчики, двигатели и небольшие роботы помогают освоить программирование через реальные задачи. Работаем вместе и проверяем гипотезы.",
            "Sensors, motors and small robots make coding tangible. Students work together, test ideas and learn from each iteration.",
          ),
        ],
        [
          "house",
          0.07,
          0.49,
          t("От макета к прототипу", "From model to prototype"),
          t(
            "Печатайте детали и собирайте модели только под присмотром преподавателя. Продуманное хранение и чистая рабочая поверхность помогают всем.",
            "Use the printers and build prototypes with teacher supervision. Organised storage and clear benches keep shared work practical.",
          ),
        ],
        [
          "computers",
          0.87,
          0.64,
          t("Творческое программирование", "Creative coding"),
          t(
            "Компьютеры для цифрового дизайна и кода. Игровая гостиная находится на нижнем уровне этого же корпуса, с выходом во двор.",
            "Computer stations support creative code and digital design. The Games Lounge is on this same building’s lower level, with a daylit outdoor exit.",
          ),
        ],
      ],
    },
    "dining-hall": {
      name: t("Обеденный зал", "The Dining Hall"),
      subtitle: t(
        "За столом есть место каждому.",
        "There is a place at the table.",
      ),
      description: t(
        "Светлый зал с деревянными столами, раздачей и террасой у озера. Соседняя столовая у сада имеет собственный интерьер и подход к раздаче.",
        "A warm dining space with shared timber tables, a serving line and a lakeside terrace. Garden Dining has its own interior and serving approach.",
      ),
      hotspots: [
        [
          "serving",
          0.91,
          0.6,
          t("Два зала — две раздачи", "Two halls, two serving lines"),
          t(
            "У столовой у озера и столовой у сада отдельные подходы к раздаче. Это даёт выбор, но не обещает полного отсутствия очередей.",
            "Lakeside Dining and Garden Dining have separate serving approaches. This offers a choice, without promising that queues disappear.",
          ),
        ],
        [
          "kitchen",
          0.96,
          0.4,
          t("Общая кухня", "A shared kitchen"),
          t(
            "Оба зала обслуживает одна служебная кухня. О пищевых ограничениях нужно сообщить сотрудникам; приготовление еды — зона персонала.",
            "Both halls share one service kitchen. Tell staff about dietary needs; food preparation is a supervised staff area.",
          ),
        ],
        [
          "table",
          0.48,
          0.73,
          t("12:00–13:00 — ваш час", "12:00–13:00 is yours"),
          t(
            "Пообедайте, поговорите с друзьями, поиграйте или отдохните. Свободный час не занят обязательными занятиями.",
            "Have lunch, talk with a friend, play or simply rest. The free-choice hour stays free of compulsory lessons.",
          ),
        ],
      ],
    },
    "games-lounge": {
      name: t("Игровая гостиная", "Games Lounge"),
      subtitle: t("Хорошая игра объединяет.", "Good games bring us together."),
      description: t(
        "Гостиная на нижнем уровне: консоли, компьютеры, настольные игры и выход в светлый утопленный двор.",
        "A lower-ground lounge with consoles, computers, board games and an exit into a sunken daylight court.",
      ),
      hotspots: [
        [
          "console",
          0.8,
          0.72,
          t("Консоли и свободный час", "Consoles and the free hour"),
          t(
            "PlayStation, Xbox и Switch доступны в демонстрации бронирования: один сеанс по 20 минут на выбранный день. Это локальный пример, а не реальная бронь.",
            "Try a local booking for PlayStation, Xbox or Switch: one 20-minute session per chosen day. This is a demonstration, not a real reservation.",
          ),
        ],
        [
          "boardgames",
          0.31,
          0.57,
          t("Вокруг игрового стола", "Around the game table"),
          t(
            "Настольные игры — ещё один способ провести время вместе без экрана. Играйте по очереди и приглашайте новых участников.",
            "Board games offer a screen-free way to spend time together. Take turns and invite a new player to join in.",
          ),
        ],
        [
          "exit",
          0.73,
          0.4,
          t("Дневной свет внизу", "Daylight on the lower level"),
          t(
            "Ступени ведут в освещённый внутренний двор. Внутри лаборатории есть лестница и лифт: гостиная не является отдельным зданием.",
            "Steps lead into a sunken daylight court. Internal stairs and a lift connect to Technology Lab: the lounge is not a separate building.",
          ),
        ],
      ],
    },
    workshop: {
      name: t("Творческая мастерская", "Creative Workshop"),
      subtitle: t(
        "Идеи, которые можно взять в руки.",
        "Ideas you can hold in your hands.",
      ),
      description: t(
        "Деревянные верстаки, организованное хранение инструментов и выход к столу под навесом в саду.",
        "Timber workbenches, organised tool storage and an opening to the garden’s covered making table.",
      ),
      hotspots: [
        [
          "bench",
          0.43,
          0.64,
          t("Стол для макетов", "The model-making bench"),
          t(
            "Постройте мост, проверьте прочность и улучшите конструкцию. Моделирование связывает математику, физику и творческое мышление.",
            "Build a bridge, test its strength and improve the design. Model making connects mathematics, physics and creative thinking.",
          ),
        ],
        [
          "tools",
          0.19,
          0.39,
          t("Инструменты под присмотром", "Supervised tools"),
          t(
            "Все инструменты возвращаются на свои места. Станки и ручной инструмент используются только с разрешения и под присмотром преподавателя.",
            "Return every tool to its place. Machinery and hand tools are used only with permission and teacher supervision.",
          ),
        ],
        [
          "garden",
          0.71,
          0.6,
          t("Продолжение в саду", "Continue in the garden"),
          t(
            "Стол под навесом подходит для совместной работы на воздухе. В дождь проект можно продолжить внутри мастерской.",
            "The covered table supports shared work outdoors. When rain arrives, continue the project inside the workshop.",
          ),
        ],
      ],
    },
    "garden-dining": {
      name: t("Столовая у сада", "Garden Dining"),
      subtitle: t(
        "Ещё одно место за общим столом.",
        "Another place at the shared table.",
      ),
      description: t(
        "Уютный обеденный зал с собственной раздачей, общими столами и выходом к садовой перголе.",
        "A warm dining hall with its own serving line, shared tables and a garden pergola terrace.",
      ),
      hotspots: [
        [
          "serving",
          0.12,
          0.63,
          t("Своя раздача", "A separate serving approach"),
          t(
            "У этого зала отдельная очередь и подход к раздаче. Кухня общая со столовой у озера; два зала дают выбор, но не исключают ожидания.",
            "This hall has its own queue and serving approach. It shares a kitchen with Lakeside Dining; two halls offer choice without eliminating every wait.",
          ),
        ],
        [
          "tables",
          0.56,
          0.73,
          t("Обед без спешки", "Time for lunch"),
          t(
            "Свободный час длится с 12:00 до 13:00. После обеда можно поговорить, поиграть или выбрать спокойный отдых.",
            "The free-choice hour runs from 12:00 to 13:00. After lunch, talk, play or choose a quiet rest.",
          ),
        ],
        [
          "terrace",
          0.8,
          0.55,
          t("Садовая терраса", "The garden terrace"),
          t(
            "Столы под перголой продолжают зал на свежем воздухе. Уважайте соседей и оставляйте проходы свободными.",
            "Tables under the pergola extend the hall into the garden. Be considerate of neighbours and keep the paths clear.",
          ),
        ],
      ],
    },
    "quiet-room": {
      name: t("Тихая комната", "Quiet Room"),
      subtitle: t("Можно просто сделать паузу.", "Permission to pause."),
      description: t(
        "Тихое пространство наверху учебного корпуса: кресла, книги и места для отдыха у окна с видом на озеро.",
        "An upstairs retreat in the learning wing, with armchairs, books and quiet window seats overlooking the lake.",
      ),
      hotspots: [
        [
          "reading",
          0.17,
          0.66,
          t("Почитать в тишине", "Read in quiet"),
          t(
            "Небольшая полка и место у окна для сосредоточенного чтения. Здесь не нужно участвовать в общем разговоре.",
            "A small bookshelf and a window seat support focused reading. You do not need to join a conversation here.",
          ),
        ],
        [
          "rest",
          0.55,
          0.58,
          t("Восстановить силы", "Take a restful pause"),
          t(
            "Короткий отдых помогает вернуться к школьному дню. Говорите тихо и уважайте личное пространство других.",
            "A restful pause can help you return to the school day. Keep voices low and respect everyone’s space.",
          ),
        ],
        [
          "support",
          0.82,
          0.73,
          t("Индивидуальная поддержка", "Personal support"),
          t(
            "Спокойные кресла подходят для разговора с преподавателем. Комната находится на верхнем этаже учебного корпуса, доступном по лестнице и на лифте.",
            "Quiet armchairs make space for a teacher check-in. The room is on the learning wing’s upper floor, reached by stairs or lift.",
          ),
        ],
      ],
    },
    residence: {
      name: t("Резиденция учеников", "Student Residence"),
      subtitle: t(
        "Небольшой дом вдали от дома.",
        "A small home away from home.",
      ),
      description: t(
        "Светлая комната на двоих с отдельными кроватями, шкафами и рабочими местами у большого окна.",
        "A bright shared room for two, with separate beds, wardrobes and study desks beside a broad window.",
      ),
      hotspots: [
        [
          "personal",
          0.19,
          0.72,
          t("Личное пространство", "Personal space"),
          t(
            "У каждого своё место для сна и хранения. Уважение к личным вещам и часам тишины помогает жить вместе.",
            "Everyone has their own sleeping and storage space. Respect for belongings and quiet hours makes shared living thoughtful.",
          ),
        ],
        [
          "study",
          0.48,
          0.56,
          t("Учиться рядом", "Study side by side"),
          t(
            "Два рабочих места у окна — для самостоятельных заданий и взаимной помощи. Общие учебные зоны остаются доступными в резиденции.",
            "Two desks by the window support individual work and helping each other. Shared study areas are also part of the residence.",
          ),
        ],
        [
          "belonging",
          0.83,
          0.67,
          t("Освоиться с поддержкой", "Settle in with support"),
          t(
            "Ученик-наставник помогает познакомиться с распорядком и школьным сообществом. Языковой обмен и совместная учёба соединяют разные культуры.",
            "A student buddy helps newcomers understand the daily rhythm and community. Language exchange and shared study connect cultures.",
          ),
        ],
      ],
    },
  }[id];
  if (!data) return null;
  return {
    ...data,
    id,
    image: panoramaAssets[id],
    hotspots: data.hotspots.map(([id, x, y, label, text]) => ({
      id,
      x,
      y,
      label,
      text,
    })),
    size: originalRooms[id]?.size,
  };
}
export const placeImage = (id) =>
  interiorForPlace[id]
    ? `/media/${panoramaAssets[interiorForPlace[id]]}-small.webp`
    : "/media/campus/approved-small.webp";
const ruTour = [
  [
    "Каждый день начинается с общения.",
    "У большого дерева новые ученики знакомятся с наставниками, а знакомые лица становятся друзьями.",
  ],
  [
    "Место для хорошего вопроса.",
    "Утренние предметы создают основу, светлые студии оставляют место для обсуждения и личной поддержки.",
  ],
  [
    "Превратим интерес в реальный результат.",
    "Напишите программу, соберите робота или переосмыслите привычную вещь. Технологии помогают создавать вместе.",
  ],
  [
    "Некоторым идеям нужен свежий воздух.",
    "Сделайте набросок за столом под навесом или найдите тихую скамейку. В дождь рядом есть мастерская.",
  ],
  [
    "Почитать. Посмотреть на озеро.",
    "Короткая крытая дорожка ведёт к библиотеке в невысоком склоне. Зелёная крыша и окна объединяют её с пейзажем.",
  ],
  [
    "Игра тоже часть дня.",
    "На нижнем уровне технологического корпуса дневной свет, настольные игры и консоли делают свободный час общим.",
  ],
  [
    "В команде есть место каждому.",
    "Большое поле на краю кампуса — для тренировок и игр. Небольшая трибуна приглашает поддержать друзей.",
  ],
  [
    "Принесите частичку своего мира.",
    "Возвращаемся во двор. Фестиваль культур длится две недели: подготовка, мастерские и финал идут рядом с обычными уроками.",
  ],
];
export const getTourStops = () =>
  tourStops.map(([id, title, text], i) => [
    id,
    t(ruTour[i][0], title),
    t(ruTour[i][1], text),
  ]);
