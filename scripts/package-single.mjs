import { readFile, readdir, mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { build, transform } from "esbuild";

// A separate portable build: the hosted application's URLs and lazy loading stay intact.
const output = process.env.SERENITY_SINGLE_OUTPUT || "/workspace/outputs/serenity-upgrade/recheck/Serenity.html";
const canonical = await readFile("public/data/places.json", "utf8");
const dataURL = async (path, mime) => `data:${mime};base64,${(await readFile(path)).toString("base64")}`;
const emblem = await dataURL("public/assets/emblem.svg", "image/svg+xml");
const images = Object.fromEntries(await Promise.all(
  (await readdir("public/images")).filter((f) => f.endsWith(".webp"))
    .map(async (f) => ["/images/" + f, await dataURL("public/images/" + f, "image/webp")]),
));

// Hash routes let every page, query and room survive refresh under file://.
// Embedded assets are substituted before DOM insertion, so no missing-file requests occur.
const adapter = `
const portableImages = ${JSON.stringify(images)};
const portableLocation = () => new URL(location.hash.slice(1) || "/", "https://serenity.invalid");
const portableHistory = {
  pushState: (data, title, url) => history.pushState(data, title, "#" + url),
  replaceState: (data, title, url) => history.replaceState(data, title, "#" + url),
};
function portableMarkup(value) {
  return String(value).replace(/src=(["'])(\\/images\\/[^"']+)\\1/g,
    (match, quote, path) => portableImages[path] ? "src=" + quote + portableImages[path] + quote : match
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
  set(value) { portableImageSource.set.call(this, portableImages[value] || value); },
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
  entryPoints: ["src/main.js"], bundle: true, write: false,
  format: "iife", minify: true, target: "es2022",
  plugins: [{ name: "portable-entry", setup(builder) {
    builder.onLoad({ filter: /src\/main\.js$/ }, async ({ path }) => {
      let source = await readFile(path, "utf8");
      source = source.replaceAll("location.pathname", "portableLocation().pathname")
        .replaceAll("location.search", "portableLocation().search")
        .replaceAll("history.pushState", "portableHistory.pushState")
        .replaceAll("history.replaceState", "portableHistory.replaceState")
        .replace('navigate(link.getAttribute("href"));', 'navigate(link.dataset.route || link.getAttribute("href"));')
        .replaceAll("/assets/emblem.svg", emblem)
        .replace('fetch("/data/places.json")', `Promise.resolve(new Response(JSON.stringify(${canonical})))`);
      return { contents: adapter + source, loader: "js", resolveDir: dirname(path) };
    });
  } }],
});
let css = await readFile("src/styles.css", "utf8");
for (const file of (await readdir("public/fonts")).filter((f) => f.endsWith(".woff2")))
  css = css.replaceAll("/fonts/" + file, await dataURL("public/fonts/" + file, "font/woff2"));
css = (await transform(css, { loader: "css", minify: true })).code;
let html = await readFile("index.html", "utf8");
html = html.replace(/<link[^>]*href="\/src\/styles.css"[^>]*\/>/, () => `<style>${css}</style>`)
  .replaceAll("/assets/emblem.svg", emblem)
  .replace('href="/data/places.json"', `download="campus-places.json" href="data:application/json;base64,${Buffer.from(canonical).toString("base64")}"`)
  .replace(/<script type="module" src="\/src\/main.js"><\/script>/,
    () => `<script>${result.outputFiles[0].text.replace(/<\/script/gi, "<\\/script")}</script>`);
if (html.includes('src="/src/') || html.includes('href="/src/')) throw Error("Unbundled entry");
await mkdir(dirname(resolve(output)), { recursive: true });
await writeFile(output, html);
console.log(`Portable site: ${output} (${Buffer.byteLength(html)} bytes; ${Object.keys(images).length} embedded scene images).`);
