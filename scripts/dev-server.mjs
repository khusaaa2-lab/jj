import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';

const root = resolve(process.cwd(), 'public');
const port = Number(process.env.PORT ?? 5173);
const host = process.env.HOST ?? '0.0.0.0';
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon'
};

const server = createServer(async (request, response) => {
  response.setHeader('X-Content-Type-Options', 'nosniff');
  response.setHeader('Cache-Control', 'no-store');
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(405, { Allow: 'GET, HEAD' });
    response.end('Method not allowed');
    return;
  }
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    let file = resolve(root, '.' + pathname);
    if (file !== root && !file.startsWith(root + sep)) {
      response.writeHead(403);
      response.end('Forbidden');
      return;
    }
    if ((await stat(file)).isDirectory()) file = resolve(file, 'index.html');
    const body = await readFile(file);
    response.writeHead(200, { 'Content-Type': types[extname(file)] ?? 'application/octet-stream' });
    response.end(request.method === 'HEAD' ? undefined : body);
  } catch (error) {
    const code = error instanceof URIError ? 400 : 404;
    response.writeHead(code, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end(code === 400 ? 'Bad request' : 'Not found');
  }
});
server.on('error', error => {
  console.error(error.message);
  process.exitCode = 1;
});
server.listen(port, host, () => {
  console.log('Serenity development server: http://' + host + ':' + server.address().port);
});
const shutdown = () => server.close(() => process.exit());
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
