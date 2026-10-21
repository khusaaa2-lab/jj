import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { once } from 'node:events';

const places = JSON.parse(await readFile('public/data/places.json', 'utf8'));
assert.equal(places.length, 13, 'The campus must retain thirteen canonical places');
assert.equal(new Set(places.map(place => place.id)).size, places.length, 'Place IDs must be unique');
for (const place of places) {
  assert.ok(place.id && place.name && place.category && place.level);
}

const child = spawn(process.execPath, ['scripts/dev-server.mjs'], {
  env: { ...process.env, HOST: '127.0.0.1', PORT: '0' },
  stdio: ['ignore', 'pipe', 'pipe']
});
let errors = '';
child.stderr.on('data', data => { errors += data.toString(); });
const timer = setTimeout(() => {
  console.error('Server startup timed out. ' + errors);
  child.kill('SIGTERM');
  process.exitCode = 1;
}, 10000);
try {
  let output = '';
  const origin = await new Promise((resolve, reject) => {
    child.once('error', reject);
    child.once('exit', code => reject(new Error('Server exited before ready: ' + code + ' ' + errors)));
    child.stdout.on('data', data => {
      output += data.toString();
      const match = output.match(/http:\/\/127\.0\.0\.1:\d+/);
      if (match) resolve(match[0]);
    });
  });
  const home = await fetch(origin);
  assert.equal(home.status, 200);
  assert.match(await home.text(), /Serenity International School/);
  const css = await fetch(origin + '/styles.css');
  assert.equal(css.status, 200);
  assert.match(css.headers.get('content-type'), /text\/css/);
  const data = await fetch(origin + '/data/places.json');
  assert.equal(data.status, 200);
  assert.equal((await data.json()).length, 13);
  const privateFile = await fetch(origin + '/package.json');
  assert.equal(privateFile.status, 404, 'Only public files should be served');
  const missing = await fetch(origin + '/not-a-real-page');
  assert.equal(missing.status, 404);
  console.log('Environment check passed: homepage, stylesheet, campus data and public-file boundaries.');
} finally {
  clearTimeout(timer);
  const exited = once(child, 'exit');
  child.kill('SIGTERM');
  await exited;
}
