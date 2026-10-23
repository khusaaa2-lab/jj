export const details = {
  "main-building": {
    name: "Main Building",
    position: [-10, 20],
    description:
      "An open door to the school. Cream stone, warm timber and a modest clock tower welcome you into the heart of Serenity.",
    activities: [
      "Student-buddy welcome",
      "Language exchange",
      "Community displays",
    ],
    rule: "Ask a student buddy if you need a hand finding your way.",
    tag: "A warm welcome",
  },
  courtyard: {
    position: [0, 8],
    description:
      "A gathering place beneath one generous tree. Meet a friend, share a thought or simply take a breath between lessons.",
    activities: [
      "Meet your buddy",
      "Outdoor conversations",
      "Community celebrations",
    ],
    rule: "Keep the central paths clear so everyone can move comfortably.",
    tag: "The heart of it all",
  },
  "learning-wing": {
    name: "Learning Studios",
    position: [-13, 3],
    description:
      "Light-filled studios for asking better questions. Core subjects connect with practical projects, collaboration and individual support.",
    activities: ["Core subjects", "Small-group projects", "Learning support"],
    rule: "Make room for different ideas and different ways of learning.",
    tag: "Curiosity, every day",
  },
  "tech-lab": {
    position: [13, 5],
    description:
      "An open, glazed workshop for digital thinking. Explore robotics, creative coding and responsible technology together.",
    activities: ["Creative coding", "Robotics", "Digital design"],
    rule: "Use equipment with a teacher and give credit to your sources.",
    tag: "Ideas become possible",
  },
  workshop: {
    name: "Creative Workshop",
    position: [23, -15],
    description:
      "A supervised place to make, mend and experiment. Timber benches, shared tools and room for a little creative mess.",
    activities: ["Model making", "Repair projects", "Material experiments"],
    rule: "Wait for a supervisor before using workshop tools.",
    tag: "Think with your hands",
  },
  "ideas-garden": {
    position: [10, -16],
    description:
      "A garden for unfinished thoughts. A covered making table, social benches and a quiet corner invite you to pause and imagine.",
    activities: ["Outdoor making", "Sketching", "Quiet reflection"],
    rule: "In rainy weather, continue your project in the supervised indoor workshop.",
    tag: "Let a thought grow",
  },
  library: {
    position: [36, -18],
    description:
      "Tucked into a low hillside, the library opens towards the lake. Timber shelves, a rock wall and quiet corners make space for a different pace.",
    activities: [
      "Independent reading",
      "Research",
      "Small-group collaboration",
    ],
    rule: "Use the collaboration area for conversation and keep quiet areas peaceful.",
    tag: "A quieter kind of discovery",
  },
  "dining-a": {
    name: "Lakeside Dining",
    position: [-13, 27.5],
    description:
      "A bright dining room facing the water. Two dining halls have separate serving approaches and a shared service kitchen.",
    activities: [
      "Lunch with friends",
      "Food from different cultures",
      "Shared tables",
    ],
    rule: "Follow your hall’s serving line and tell staff about dietary needs.",
    tag: "A place at the table",
  },
  "dining-b": {
    name: "Garden Dining",
    position: [4, 29.5],
    description:
      "Warm shared tables beside the garden. A second serving approach offers another place to eat and reconnect during the free hour.",
    activities: ["Lunch", "Student conversations", "Garden-side breaks"],
    rule: "Leave your table welcoming for the next person; queues may still happen.",
    tag: "Good food, good company",
  },
  "gaming-zone": {
    name: "Games Lounge",
    position: [13, 5],
    description:
      "A daylit lower-ground lounge with an outdoor exit. Computers, tablets, consoles and board games bring people together during free time.",
    activities: ["Cooperative games", "Board games", "Local demo bookings"],
    rule: "Take turns, play kindly and keep food away from the devices.",
    transition:
      "Enter the Technology Lab, then take the internal stairs or lift to the lower-ground Games Lounge. The lounge also has an outdoor exit.",
    tag: "A little friendly competition",
  },
  "football-field": {
    position: [33, 12],
    description:
      "One generous marked field at the campus edge, with goals and a small spectator stand. Play, practise or cheer for a friend.",
    activities: ["Football", "Team practice", "Afternoon clubs"],
    rule: "Share the field and follow the supervising teacher’s guidance.",
    tag: "Find your team",
  },
  residence: {
    name: "Student Residence",
    position: [13, -27],
    description:
      "A small home away from home in a quieter part of campus. Student buddies and shared spaces help an international community settle in.",
    activities: ["Buddy welcome", "Shared study", "Language exchange"],
    rule: "Respect quiet hours and residents’ private spaces.",
    tag: "A sense of belonging",
  },
  "quiet-room": {
    position: [-13, 3],
    description:
      "An upstairs retreat in the learning wing. A calm space to reset, read or ask for support without the noise of the school day.",
    activities: ["Quiet reading", "A mindful pause", "Individual support"],
    rule: "Keep voices low and respect anyone who needs a little space.",
    transition:
      "Enter Learning Studios, then use the internal stairs or lift to reach the upstairs Quiet Room.",
    tag: "Permission to pause",
  },
};
// Entry points, rather than building centres, keep walking routes outside buildings.
export const nodes = {
  "main-building": [-10, 20],
  courtyard: [0, 8],
  "learning-wing": [-13, 3],
  "tech-lab": [13, 5],
  "ideas-garden": [10, -16],
  workshop: [23, -15],
  library: [36, -18],
  "dining-a": [-13, 27.5],
  "dining-b": [4, 29.5],
  residence: [13, -27],
  "football-field": [33, 12],
  "gaming-zone": [13, 5],
  "quiet-room": [-13, 3],
  "west-path": [-13, -17],
  "library-approach": [30, -16],
  "garden-path": [13, -3],
  "residence-path": [13, -21],
  "tech-forecourt": [13, 14],
  "sport-path": [32, 14],
};
export const edges = [
  ["main-building", "courtyard"],
  ["courtyard", "learning-wing"],
  ["courtyard", "tech-lab"],
  ["courtyard", "garden-path"],
  ["garden-path", "ideas-garden"],
  ["ideas-garden", "workshop"],
  ["courtyard", "dining-a"],
  ["courtyard", "dining-b"],
  ["garden-path", "residence-path"],
  ["residence-path", "residence"],
  ["learning-wing", "west-path"],
  ["west-path", "library-approach"],
  ["library-approach", "library"],
  ["workshop", "library-approach"],
  ["learning-wing", "quiet-room"],
  ["tech-lab", "gaming-zone"],
  ["tech-lab", "tech-forecourt"],
  ["tech-forecourt", "sport-path"],
  ["sport-path", "football-field"],
];
export function routeTo(destination, start = "main-building") {
  const queue = [[start]],
    visited = new Set([start]);
  while (queue.length) {
    const route = queue.shift(),
      last = route.at(-1);
    if (last === destination) return route;
    for (const edge of edges) {
      const next =
        edge[0] === last ? edge[1] : edge[1] === last ? edge[0] : null;
      if (next && !visited.has(next)) {
        visited.add(next);
        queue.push([...route, next]);
      }
    }
  }
  return [];
}
export function enrichPlaces(canonical) {
  return canonical.map((p) => ({ ...p, ...details[p.id] }));
}
export const tourStops = [
  [
    "courtyard",
    "Every day starts with belonging.",
    "Meet beneath the courtyard tree. This is where new students find a buddy and familiar faces become friends.",
  ],
  [
    "learning-wing",
    "Make room for a good question.",
    "Morning core subjects build a foundation. Light-filled studios leave space for discussion, practice and personal support.",
  ],
  [
    "tech-lab",
    "Turn curiosity into something real.",
    "Try a line of code, build a small robot or rethink an everyday object. Technology is a tool for creating together.",
  ],
  [
    "ideas-garden",
    "Some ideas need fresh air.",
    "Sketch at the covered making table, talk on a bench or take a quiet moment. The indoor workshop is nearby when it rains.",
  ],
  [
    "library",
    "Read a little. Look out a little.",
    "A short covered path leads to this hillside retreat. The planted roof and lake-facing window bring the landscape close.",
  ],
  [
    "gaming-zone",
    "Play is part of the day, too.",
    "Downstairs in the technology building, daylit tables, consoles and board games make the free hour a shared experience.",
  ],
  [
    "football-field",
    "There is a place on the team for you.",
    "At the campus edge, one large field makes space for practice, games and a small stand for cheering each other on.",
  ],
  [
    "courtyard",
    "Bring your world to the courtyard.",
    "Return to the tree for community events. A two-week Culture Festival celebrates languages, stories and the people who share them.",
  ],
];
export const voteOptions = [
  "Culture Festival",
  "Makers Challenge",
  "Nature and Discovery",
];
export const devices = [
  "PC 01",
  "PC 02",
  "PlayStation",
  "Xbox",
  "Nintendo Switch",
];
export const slots = ["12:00–12:20", "12:20–12:40", "12:40–13:00"];

// One source of truth for physical footprints in the model, map and route checks.
export const campusBuildings = [
  { id: "main-building", x: -20, z: 20, w: 13, d: 8, h: 7 },
  { id: "learning-wing", x: -23, z: 0, w: 15, d: 9, h: 6.5 },
  { id: "learning-wing", x: -23, z: 10.2, w: 6, d: 11.5, h: 5.7 },
  { id: "learning-wing", x: -23, z: -8, w: 15, d: 7, h: 6.5 },
  { id: "learning-wing", x: -1, z: -10, w: 22, d: 7, h: 6.5 },
  { id: "tech-lab", x: 22, z: 3, w: 14, d: 10, h: 6.5, glazed: true },
  { id: "dining-a", x: -13, z: 33, w: 12, d: 8, h: 3.8, glazed: true },
  { id: "dining-b", x: 4, z: 35, w: 12, d: 8, h: 3.8, glazed: true },
  { id: "dining-a", x: -4.5, z: 36, w: 5, d: 7, h: 3.2, special: true },
  { id: "workshop", x: 26, z: -21, w: 9, d: 7, h: 4.2 },
  { id: "residence", x: 19, z: -30, w: 8, d: 8, h: 6.4 },
  { id: "library", x: 38, z: -24, w: 13, d: 8, h: 3.6, special: true },
];
