# Codex Cloud environment

Repository: khusaaa2-lab/jj. Use the existing /workspace/jj checkout in its isolated task environment. Do not create a worktree unless explicitly requested.

## Runtime and setup

Node.js >=22.12, npm, no secrets or backend services. Dependencies are pinned in package-lock.json. The required package network destination is registry.npmjs.org; fonts and all runtime assets are local.

```sh
cd /workspace/jj
npm ci --ignore-scripts --cache /tmp/serenity-npm-cache
npm run check
npm run build
```

## Start and validate

```sh
cd /workspace/jj
npm run dev
```

The Vite development server binds 0.0.0.0:5173. Confirm the home page and `/campus?place=library` load, with the expected heading and selected library panel. `npm run preview` serves the current production build on 0.0.0.0:4173. `npm run check:browser` runs production-browser checks using /usr/bin/chromium (override CHROMIUM_PATH if needed).

The browser suite checks direct routes/reloads, real WebGL rendering, URL selection, map/list state, routes, filtering, tour, local demos, storage failure, WebGL fallback and five responsive widths. Tests and screenshots use /tmp, outside the checkout. Restart processes in new tasks; publication does not retain live servers.

Publishing the Codex environment does not publish the website. No public hosting, domain purchase or bot connection is included. See README.md for production SPA rewrites and the original-reference asset limitation.
