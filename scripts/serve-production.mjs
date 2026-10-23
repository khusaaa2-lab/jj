import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
const root = resolve(process.env.SITE_ROOT || ".");
const port = Number(process.env.PORT || 5173);
const host = process.env.HOST || "0.0.0.0";
const pageRoutes = new Set([
  "/",
  "/campus",
  "/learning",
  "/life",
  "/events",
  "/project",
]);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webp": "image/webp",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
};
const server = createServer(async (req, res) => {
  try {
    if (!["GET", "HEAD"].includes(req.method)) {
      res.writeHead(405, { Allow: "GET, HEAD" });
      res.end();
      return;
    }
    const url = new URL(req.url, "http://localhost");
    const pathname = decodeURIComponent(url.pathname);
    let file = resolve(
      root,
      "." +
        (pageRoutes.has(pathname.replace(/\/$/, "") || "/")
          ? "/index.html"
          : pathname),
    );
    if (
      !file.startsWith(root + sep) ||
      pathname.includes("/.") ||
      !types[extname(file)] ||
      file.endsWith("serve.mjs")
    ) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    if (!(await stat(file)).isFile()) throw Error("Not a file");
    const body = await readFile(file);
    res.writeHead(200, {
      "Content-Type": types[extname(file)],
      "X-Content-Type-Options": "nosniff",
      "Cache-Control": "no-cache",
    });
    res.end(req.method === "HEAD" ? undefined : body);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
  }
});
server.on("error", (e) => {
  console.error(e.message);
  process.exitCode = 1;
});
server.listen(port, host, () =>
  console.log(`Serenity production site running on ${host}:${port}`),
);
for (const signal of ["SIGTERM", "SIGINT"])
  process.on(signal, () => server.close(() => process.exit()));
