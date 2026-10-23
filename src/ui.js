export const esc = (value) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
export function icon(name, size = 20) {
  const paths = {
    arrow: '<path d="M4 12h15m-5-5 5 5-5 5"/>',
    diagonal: '<path d="M6 18 18 6M6 6h12v12"/>',
    heart:
      '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
    search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
    map: '<path d="m9 3-7 4v14l7-4 6 4 7-4V3l-7 4-6-4Z M9 3v14m6-10v14"/>',
    cube: '<path d="m12 2 9 5v10l-9 5-9-5V7l9-5Z M3 7l9 5 9-5M12 12v10"/>',
    leaf: '<path d="M20 3C6 2 2 7 5 15c8 4 14 0 15-12ZM4 21l10-11"/>',
    close: '<path d="m6 6 12 12M6 18 18 6"/>',
    play: '<path d="m9 5 11 7-11 7V5Z"/>',
    reset: '<path d="M3 10a9 9 0 1 1 1 7M3 4v6h6"/>',
    menu: '<path d="M4 7h16M4 16h16"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    sound:
      '<path d="m11 4-6 5H2v6h3l6 5V4Zm4 4a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>',
    globe:
      '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  };
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.arrow}</svg>`;
}
export const link = (href, label, cls = "button") =>
  `<a data-link href="${href}" class="${cls}">${label}${icon("diagonal", 17)}</a>`;
export const photo = (id, alt, cls = "", eager = false) =>
  `<img class="${cls}" src="/media/${id}${eager ? "" : "-small"}.webp" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" width="${(id === "campus-master" || id === "campus/approved") ? "1672" : "2172"}" height="${(id === "campus-master" || id === "campus/approved") ? "941" : "724"}" alt="${esc(alt)}">`;
