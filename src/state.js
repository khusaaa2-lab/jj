import { voteOptions, devices, slots, tourStops } from "./data.js";
const KEY = "serenity:v1";
const defaults = () => ({
  version: 1,
  favourites: [],
  vote: null,
  bookings: {},
  draft: { title: "", category: "Campus", description: "" },
  tour: 0,
});
export function sanitise(raw, ids) {
  const clean = defaults();
  if (!raw || raw.version !== 1) return clean;
  clean.favourites = Array.isArray(raw.favourites)
    ? [...new Set(raw.favourites.filter((id) => ids.includes(id)))]
    : [];
  if (voteOptions.includes(raw.vote)) clean.vote = raw.vote;
  if (raw.bookings && typeof raw.bookings === "object") {
    for (const [day, b] of Object.entries(raw.bookings)) {
      if (
        /^\d{4}-\d{2}-\d{2}$/.test(day) &&
        b &&
        devices.includes(b.device) &&
        slots.includes(b.slot)
      )
        clean.bookings[day] = { device: b.device, slot: b.slot };
    }
  }
  if (raw.draft && typeof raw.draft === "object") {
    clean.draft.title =
      typeof raw.draft.title === "string" ? raw.draft.title.slice(0, 80) : "";
    clean.draft.description =
      typeof raw.draft.description === "string"
        ? raw.draft.description.slice(0, 1500)
        : "";
    if (
      ["Campus", "Learning", "School life", "Events", "Other"].includes(
        raw.draft.category,
      )
    )
      clean.draft.category = raw.draft.category;
  }
  if (
    Number.isInteger(raw.tour) &&
    raw.tour >= 0 &&
    raw.tour < tourStops.length
  )
    clean.tour = raw.tour;
  return clean;
}
export function createStore(ids, storage) {
  let state = defaults(),
    persistent = true;
  try {
    state = sanitise(JSON.parse(storage.getItem(KEY)), ids);
  } catch {
    persistent = false;
  }
  return {
    get data() {
      return state;
    },
    get persistent() {
      return persistent;
    },
    update(change) {
      change(state);
      state = sanitise(state, ids);
      try {
        storage.setItem(KEY, JSON.stringify(state));
      } catch {
        persistent = false;
      }
      return persistent;
    },
  };
}
export function validateIdea(draft) {
  if (draft.title.trim().length < 3 || draft.title.trim().length > 80)
    return "Give your idea a title of 3–80 characters.";
  if (
    !["Campus", "Learning", "School life", "Events", "Other"].includes(
      draft.category,
    )
  )
    return "Choose a category for your idea.";
  if (
    draft.description.trim().length < 20 ||
    draft.description.trim().length > 1500
  )
    return "Describe your idea in 20–1500 characters.";
  return "";
}
