import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { createReadStream } from "node:fs";
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
  ".jpg": "image/jpeg",
  ".mp4": "video/mp4",
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
    const info = await stat(file);
    if (!info.isFile()) throw Error("Not a file");
    const headers = {
      "Content-Type": types[extname(file)],
      "X-Content-Type-Options": "nosniff",
      "Cache-Control": "no-cache",
      "Accept-Ranges": "bytes",
      "Content-Length": info.size,
    };
    let start = 0, end = info.size - 1, status = 200;
    if (req.headers.range) {
      const match = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
      if (match && (match[1] || match[2])) {
        start = match[1] ? Number(match[1]) : Math.max(0, info.size - Number(match[2]));
        end = match[1] && match[2] ? Math.min(Number(match[2]), info.size-1) : info.size-1;
      }
      if (!match || (!match[1] && !match[2]) || start > end || start >= info.size) {
        res.writeHead(416, {"Content-Range": `bytes */${info.size}`});res.end();return;
      }
      status = 206;
      headers["Content-Range"] = `bytes ${start}-${end}/${info.size}`;
      headers["Content-Length"] = end-start+1;
    }
    res.writeHead(status, headers);
    if (req.method === "HEAD") res.end();
    else { const stream=createReadStream(file,{start,end}); stream.on('error',()=>res.destroy()); res.on('close',()=>stream.destroy()); stream.pipe(res); }
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
