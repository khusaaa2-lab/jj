const key = "serenity:language:v1";
let current =
  typeof navigator !== "undefined" &&
  navigator.language.toLowerCase().startsWith("ru")
    ? "ru"
    : "en";
try {
  const saved = localStorage.getItem(key);
  if (["ru", "en"].includes(saved)) current = saved;
} catch {
  /* The language also works in memory. */
}
export const language = () => current;
export const t = (ru, en) => (current === "ru" ? ru : en);
export function setLanguage(value) {
  if (!["ru", "en"].includes(value)) return;
  current = value;
  try {
    localStorage.setItem(key, value);
  } catch {
    /* No storage requirement. */
  }
  document.documentElement.lang = current;
}
export const category = (value) =>
  ({
    Creativity: t("Творчество", "Creativity"),
    Games: t("Игры", "Games"),
    Rest: t("Отдых", "Rest"),
    Learning: t("Обучение", "Learning"),
    Community: t("Сообщество", "Community"),
    Nature: t("Природа", "Nature"),
    Food: t("Питание", "Food"),
    Play: t("Досуг", "Play"),
    Living: t("Проживание", "Living"),
    Wellbeing: t("Благополучие", "Wellbeing"),
    Campus: t("Кампус", "Campus"),
    "School life": t("Школьная жизнь", "School life"),
    Events: t("События", "Events"),
    Other: t("Другое", "Other"),
    Outdoors: t("На улице", "Outdoors"),
    Sport: t("Спорт", "Sport"),
    Social: t("Общение", "Social"),
  })[value] || value;
export const level = (value) =>
  value === "Upper"
    ? t("Верхний этаж", "Upstairs")
    : value === "Lower"
      ? t("Нижний уровень", "Lower ground")
      : t("Первый этаж / территория", "Ground level / outdoors");
export const voteName = (value) =>
  ({
    "Culture Festival": t("Фестиваль культур", "Culture Festival"),
    "Makers Challenge": t("Творческий вызов", "Makers Challenge"),
    "Nature and Discovery": t("Природа и открытия", "Nature and Discovery"),
  })[value] || value;
