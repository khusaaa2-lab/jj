import { mkdtemp, readFile, readdir, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { tmpdir } from 'node:os';
import { execFileSync, spawn } from 'node:child_process';
import { createHash } from 'node:crypto';
import { chromium, expect } from '@playwright/test';

const output = process.env.SERENITY_OUTPUT || '/workspace/outputs/serenity-upgrade/recheck';
const archive = join(output, 'Serenity-production.zip');
const extracted = await mkdtemp(join(tmpdir(), 'serenity-production-'));
execFileSync('python3', ['-c', 'from zipfile import ZipFile; import sys; z=ZipFile(sys.argv[1]); assert z.testzip() is None; z.extractall(sys.argv[2])', archive, extracted]);
const port = process.env.VERIFY_PORT || '4321';
const base = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, ['serve.mjs'], {cwd: extracted, env: {...process.env, HOST: '127.0.0.1', PORT: port, SITE_ROOT: extracted}, stdio: ['ignore', 'pipe', 'pipe']});
let serverError = '';
server.stderr.on('data', (data) => { serverError += data; });
let browser;
const errors = [], failedAssets = [];
try {
  let started = false;
  for (let i = 0; i < 30; i++) {
    try { if ((await fetch(base)).ok) { started = true; break; } } catch {}
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  if (!started || server.exitCode !== null) throw Error(serverError || 'Packaged server did not start');
  async function files(dir, prefix = '') {
    const result = [];
    for (const item of await readdir(dir, {withFileTypes: true})) {
      const relative = prefix + item.name;
      if (item.isDirectory()) result.push(...await files(join(dir, item.name), relative + '/'));
      else result.push(relative);
    }
    return result;
  }
  const allFiles = await files(extracted);
  const publicFiles = allFiles.filter((f) => !f.startsWith('.') && f !== 'serve.mjs' && ['.html','.js','.css','.json','.woff2','.webp','.svg','.txt'].includes(extname(f)));
  await Promise.all(publicFiles.map(async (f) => {
    const response = await fetch(base + '/' + f);
    if (!response.ok) throw Error(`${f}: HTTP ${response.status}`);
    const received = Buffer.from(await response.arrayBuffer());
    const original = await readFile(join(extracted, f));
    if (!received.equals(original)) throw Error(`${f}: served bytes differ`);
    if (f.endsWith('.js') && !response.headers.get('content-type').includes('javascript')) throw Error('Wrong JavaScript MIME type');
  }));
  const routes = ['/', '/campus?place=library&interior=library', '/learning', '/life', '/events', '/project'];
  for (const route of routes) {
    const response = await fetch(base + route);
    if (!response.ok || !(await response.text()).includes('id="app"')) throw Error(`Direct route failed: ${route}`);
  }
  browser = await chromium.launch({executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium', args: ['--no-sandbox', '--enable-unsafe-swiftshader']});
  const page = await browser.newPage({viewport: {width: 1280, height: 900}, reducedMotion: 'reduce'});
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('response', (r) => { if (r.status() >= 400) failedAssets.push(r.url()); });
  await page.goto(base + '/');
  await expect(page.locator('canvas[data-room="campus"]')).toBeVisible();
  await page.goto(base + '/campus?place=library');
  await page.getByRole('button', {name: 'Enter building'}).click();
  await expect(page.locator('canvas[data-room="library"]')).toBeVisible();
  await page.reload();
  await expect(page.locator('canvas[data-room="library"]')).toBeVisible();
  await page.getByRole('button', {name: 'Back to campus'}).click();
  await expect(page.locator('canvas[data-room="campus"]')).toBeVisible();
  await page.setViewportSize({width: 1440, height: 900});
  await page.goto(base + '/campus?place=main-building&interior=main-hall');
  await expect(page.locator('canvas[data-room="main-hall"]')).toBeVisible();
  await page.screenshot({path: join(output, 'after/main-hall.png')});
  const fallback = await browser.newPage({viewport: {width: 390, height: 844}});
  fallback.on('pageerror', (e) => errors.push(e.message));
  fallback.on('response', (r) => { if (r.status() >= 400) failedAssets.push(r.url()); });
  await fallback.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function(type, ...args) { return type.includes('webgl') ? null : original.call(this, type, ...args); };
  });
  await fallback.goto(base + '/campus?place=library&interior=library');
  await expect(fallback.locator('.interior-gallery')).toBeVisible();
  await expect(fallback.locator('.interior-gallery img')).toHaveJSProperty('naturalWidth', 1440);
  if (errors.length || failedAssets.length) throw Error(JSON.stringify({errors, failedAssets}));
  const report = {archive, sha256: createHash('sha256').update(await readFile(archive)).digest('hex'), extracted, archiveFiles: allFiles.length, verifiedPublicFiles: publicFiles.length, directRoutes: routes, browser: 'Home 3D; library entry, refresh and return; main hall review; mobile non-WebGL room gallery', errors, failedAssets};
  await writeFile(join(output, 'production-verification.json'), JSON.stringify(report, null, 2));
  console.log(`Verified ZIP: ${allFiles.length} files; ${publicFiles.length} public files served byte-for-byte; six direct routes; browser entry/refresh/return/fallback passed.`);
} finally {
  await browser?.close();
  server.kill('SIGTERM');
}
