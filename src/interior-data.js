export const interiorForPlace = {
  "main-building": "main-hall",
  library: "library",
  "learning-wing": "learning-studio",
  "tech-lab": "technology-lab",
  "dining-a": "dining-hall",
  "dining-b": "dining-hall",
  "gaming-zone": "games-lounge",
};
export const rooms = {
  "main-hall": {
    name: "The Main Hall",
    subtitle: "An open door. A warm beginning.",
    size: [16, 7.8, 16],
    image: "main-hall",
    hotspots: [
      {
        id: "welcome",
        label: "The welcome desk",
        point: [-4, 1.2, -2],
        text: "A modest reception desk is the first stop for a new student. A student buddy can help with a question or a first walk through the school.",
      },
      {
        id: "gallery",
        label: "The upper gallery",
        point: [5, 4.1, -4],
        text: "The open gallery connects the upper learning spaces while keeping a view of the shared entrance hall below. Stairs and a lift provide the level connection.",
      },
      {
        id: "community",
        label: "A world of stories",
        point: [-7, 2, 2],
        text: "A community display makes room for languages, student projects and the stories that visitors bring to Serenity.",
      },
    ],
  },
  library: {
    name: "Hillside Library",
    subtitle: "Read a little. Look out a little.",
    size: [15, 4.7, 14],
    image: "library",
    hotspots: [
      {
        id: "reading",
        label: "The reading corner",
        point: [-4, 0.9, -3],
        text: "Soft reading chairs sit away from the collaboration area. Choose a book and settle in; this corner is kept quiet.",
      },
      {
        id: "collaboration",
        label: "The collaboration table",
        point: [2, 0.9, 1],
        text: "One shared table supports small-group research and conversation. Individual study desks remain a separate, calmer part of the room.",
      },
      {
        id: "window",
        label: "The lake window",
        point: [0, 2.4, -6.8],
        text: "This broad north-facing window looks towards the lake, matching the lake-facing glazed elevation of the planted-roof library outside.",
      },
    ],
  },
  "learning-studio": {
    name: "Learning Studio",
    subtitle: "A room for better questions.",
    size: [15, 4.6, 15],
    image: "learning-studio",
    hotspots: [
      {
        id: "project",
        label: "The project wall",
        point: [-6.8, 2, -2],
        text: "Models, sketches and a changing display show the thinking behind a project, including experiments that did not work the first time.",
      },
      {
        id: "tables",
        label: "Tables that move",
        point: [0, 0.9, 0],
        text: "Small tables can become a group workspace or separate for focused practice. Chairs and clear circulation keep the room easy to rearrange.",
      },
      {
        id: "quiet",
        label: "A quieter workstation",
        point: [5, 0.9, -4],
        text: "A separate desk gives students somewhere to concentrate or work with individual support without leaving the learning studio.",
      },
    ],
  },
  "technology-lab": {
    name: "Technology Lab",
    subtitle: "Think it. Test it. Make it.",
    size: [16, 4.8, 16],
    image: "technology-lab",
    hotspots: [
      {
        id: "robotics",
        label: "The robotics bench",
        point: [-2, 1, -1],
        text: "A small wheeled robot and shared components make a practical starting point for sensors, movement and collaborative problem solving.",
      },
      {
        id: "house",
        label: "The smart-house project",
        point: [3.5, 1.2, -4],
        text: "This table-top house explores how simple sensors, a small solar panel and careful coding might make everyday spaces more thoughtful.",
      },
      {
        id: "computers",
        label: "Creative coding",
        point: [-6, 1.5, -4],
        text: "Computer stations face a shared work area. Cable channels, storage and teacher supervision keep the making space organised.",
      },
    ],
  },
  "dining-hall": {
    name: "The Dining Hall",
    subtitle: "There is a place at the table.",
    size: [17, 4.9, 16],
    image: "dining-hall",
    hotspots: [
      {
        id: "serving",
        label: "A separate serving line",
        point: [-4, 1.2, -5],
        text: "Each of the two dining halls has its own serving approach. A second line gives another option, but it does not guarantee that queues disappear.",
      },
      {
        id: "kitchen",
        label: "The shared kitchen",
        point: [5, 1.8, -7.8],
        text: "The service door leads towards the kitchen shared by Lakeside Dining and Garden Dining. Food preparation remains a supervised staff space.",
      },
      {
        id: "table",
        label: "A shared lunch",
        point: [2, 0.8, 1],
        text: "Different table sizes welcome a pair of friends or a larger group. Lunch and free choice occupy 12:00–13:00 in the example school day.",
      },
    ],
  },
  "games-lounge": {
    name: "Games Lounge",
    subtitle: "Good games. Better company.",
    size: [16, 4.3, 15],
    image: "games-lounge",
    hotspots: [
      {
        id: "console",
        label: "The console corner",
        point: [-4, 1.1, -2],
        text: "A comfortable shared console area encourages taking turns and cooperative play during the free-choice hour.",
      },
      {
        id: "boardgames",
        label: "Around the board",
        point: [2, 0.8, 2],
        text: "Board games offer a screen-free way to play together. The table is deliberately separate from the computers and console seating.",
      },
      {
        id: "exit",
        label: "Daylight from below",
        point: [5, 1.8, -7.3],
        text: "The lower-ground lounge opens into a daylit outdoor court, with a visible exit. Internally it connects to Technology Lab by stairs or lift.",
      },
    ],
  },
};
export const imageForPlace = (id) =>
  `/images/${id === "quiet-room" ? "learning-wing" : id}.webp`;
