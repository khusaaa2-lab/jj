export function setupMotion(root = document) {
  const media = matchMedia("(prefers-reduced-motion: reduce)");
  const sections = [...root.querySelectorAll("[data-cinematic]")];
  let frame = 0;
  const update = () => {
    frame = 0;
    for (const section of sections) {
      const r = section.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) continue;
      const progress = Math.max(
        0,
        Math.min(1, (innerHeight - r.top) / (innerHeight + r.height)),
      );
      section.style.setProperty(
        "--scroll",
        media.matches ? "0" : String(progress),
      );
    }
  };
  const scroll = () => {
    if (!frame && !document.hidden) frame = requestAnimationFrame(update);
  };
  addEventListener("scroll", scroll, { passive: true });
  addEventListener("resize", scroll);
  media.addEventListener("change", scroll);
  update();
  return () => {
    cancelAnimationFrame(frame);
    removeEventListener("scroll", scroll);
    removeEventListener("resize", scroll);
    media.removeEventListener("change", scroll);
  };
}
