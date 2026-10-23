import { readFile, readdir, mkdir, writeFile, cp } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { build, transform } from "esbuild";

// Portable task preview: inline UI/images, external MP4 sidecar (never base64 video).
const output =
  process.env.SERENITY_SINGLE_OUTPUT ||
  "/workspace/outputs/serenity-cinematic/preview/Serenity-Preview.html";
const canonical = await readFile("public/data/places.json", "utf8");
const dataURL = async (path, mime) =>
  `data:${mime};base64,${(await readFile(path)).toString("base64")}`;
const emblem = await dataURL("public/assets/emblem.svg", "image/svg+xml");
const images = { "/assets/emblem.svg": emblem };
for (const directory of ["images", "media"])
  for (const file of (await readdir("public/" + directory, { recursive: true })).filter((f) =>
    f.endsWith(".webp") && (directory === "media" || ["courtyard.webp", "ideas-garden.webp", "football-field.webp"].includes(f)),
  ))
    images[`/${directory}/${file}`] = await dataURL(
      `public/${directory}/${file}`,
      "image/webp",
    );

// Hash routes let every page, query and room survive refresh under file://.
// Embedded assets are substituted before DOM insertion, so no missing-file requests occur.
const adapter = `
const portableImages = ${JSON.stringify(images)};
const portableLocation = () => new URL(location.hash.slice(1) || "/", "https://serenity.invalid");
const portableHistory = {
  pushState: (data, title, url) => history.pushState(data, title, location.href.split("#")[0] + "#" + url),
  replaceState: (data, title, url) => history.replaceState(data, title, location.href.split("#")[0] + "#" + url),
};
function portableMarkup(value) {
  return String(value).replace(/(src|poster|href)=(["'])(\\/(?:images|media|assets)\\/[^"']+)\\2/g,
    (match, attr, quote, path) => portableImages[path] ? attr + "=" + quote + portableImages[path] + quote : path.endsWith("/campus-A.mp4") ? attr + "=" + quote + "." + path + quote : match
  ).replace(/<a\\b[^>]*>/g, (tag) => {
    if (!/\\bdata-link\\b/.test(tag)) return tag;
    return tag.replace(/\\bhref=(["'])(\\/[^"']*)\\1/,
      (_, quote, route) => "href=" + quote + "#" + route + quote + " data-route=" + quote + route + quote);
  });
}
const portableHTML = Object.getOwnPropertyDescriptor(Element.prototype, "innerHTML");
Object.defineProperty(Element.prototype, "innerHTML", {
  ...portableHTML,
  set(value) { portableHTML.set.call(this, portableMarkup(value)); },
});
const portableImageSource = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, "src");
Object.defineProperty(HTMLImageElement.prototype, "src", {
  ...portableImageSource,
  set(value) { portableImageSource.set.call(this, portableImages[String(value).split("?")[0]] || value); },
});
document.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  const href = link?.getAttribute("href");
  if (!href?.startsWith("#") || href.startsWith("#/")) return;
  const target = document.getElementById(href.slice(1));
  if (!target) return;
  event.preventDefault();
  if (href === "#main") { target.setAttribute("tabindex", "-1"); target.focus({preventScroll:true}); }
  target.scrollIntoView({behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth"});
}, true);
`;
const result = await build({
  entryPoints: ["src/main.js"],
  bundle: true,
  write: false,
  format: "iife",
  minify: true,
  target: "es2022",
  plugins: [
    {
      name: "portable-entry",
      setup(builder) {
        builder.onLoad({ filter: /src\/main\.js$/ }, async ({ path }) => {
          let source = await readFile(path, "utf8");
          source = source
            .replaceAll("location.pathname", "portableLocation().pathname")
            .replaceAll("location.search", "portableLocation().search")
            .replaceAll("location.hash", "portableLocation().hash")
            .replaceAll("history.pushState", "portableHistory.pushState")
            .replaceAll("history.replaceState", "portableHistory.replaceState")
            .replaceAll("history[", "portableHistory[")
            .replace(
              /navigate\(anchor\.getAttribute\(["']href["']\)\)/,
              'navigate(anchor.dataset.route || anchor.getAttribute("href"))',
            )
            .replaceAll("/assets/emblem.svg", emblem)
            .replace(
              'fetch("/data/places.json")',
              `Promise.resolve(new Response(JSON.stringify(${canonical})))`,
            );
          return {
            contents: adapter + source,
            loader: "js",
            resolveDir: dirname(path),
          };
        });
      },
    },
  ],
});
let css = await readFile("src/styles.css", "utf8");
for (const file of (await readdir("public/fonts")).filter((f) =>
  f.endsWith(".woff2"),
))
  css = css.replaceAll(
    "/fonts/" + file,
    await dataURL("public/fonts/" + file, "font/woff2"),
  );
css = (await transform(css, { loader: "css", minify: true })).code;
let html = await readFile("src/index.vite.template", "utf8");
html = html
  .replace(
    /<link[^>]*href="\/src\/styles.css"[^>]*\/>/,
    () => `<style>${css}</style>`,
  )
  .replaceAll("/assets/emblem.svg", emblem)
  .replaceAll(
    'href="/media/campus/approved.webp"',
    `href="${images["/media/campus/approved.webp"]}"`,
  )
  .replace(
    'href="/data/places.json"',
    `download="campus-places.json" href="data:application/json;base64,${Buffer.from(canonical).toString("base64")}"`,
  )
  .replace(
    /<script type="module" src="\/src\/main.js"><\/script>/,
    () =>
      `<script>${result.outputFiles[0].text.replace(/<\/script/gi, "<\\/script")}</script>`,
  );
if (html.includes('src="/src/') || html.includes('href="/src/'))
  throw Error("Unbundled entry");
await mkdir(dirname(resolve(output)), { recursive: true });
await writeFile(output, html);
// The task's webpage-preview card selects index.html directly, without Vite.
// Always deliver the compiled HTML at that path, never the source template.
await writeFile("index.html", html);
for (const base of [dirname(resolve(output)), resolve('.')]) {
  await mkdir(`${base}/media/campus`, { recursive: true });
  await cp('public/media/campus/campus-A.mp4', `${base}/media/campus/campus-A.mp4`);
}
console.log(
  `Portable preview: ${output} (${Buffer.byteLength(html)} bytes; ${Object.keys(images).length} embedded images; external media/campus/campus-A.mp4 must remain alongside).`,
);
