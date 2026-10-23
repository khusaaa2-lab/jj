# Serenity International School

An immersive, English-language **fictional school concept** for My Dream School, imagined by Khusan. Six pages share a forest-teal, gold and ivory identity. The defining feature is a genuine procedural Three.js campus, with an independent SVG map and complete accessible place list.

## Run

Requires Node.js 22.12 or newer (validated on Node.js 24). No API keys, paid models or backend services are needed.

```sh
npm ci --ignore-scripts --cache /tmp/serenity-npm-cache
npm run dev          # 0.0.0.0:5173
npm run check        # data, routes, local state and validation tests
npm run build        # production output in dist/
npm run preview      # 0.0.0.0:4173, after building
npm run check:browser
npm run capture:scenes  # regenerate scene images; dev server + Python/Pillow required
npm run capture:review  # durable before/after review output
npm run package:production # complete production ZIP with a dependency-free server
```

Browser checks use a system Chromium at `/usr/bin/chromium`. Override with `CHROMIUM_PATH=/path/to/chromium` when necessary. Build before browser checks; they exercise the production preview. Playwright starts preview automatically if none is running. Results and screenshots are written under `/tmp/serenity-playwright-results` and `/tmp/serenity-artifacts`.

## Pages and interactions

- `/`: live 3D campus, introduction and selected stories.
- `/campus`: orbit/zoom/reset, searchable/filterable places, favourites, graph routes, 3D/map switching, a focused eight-stop tour and explicit Enter building actions. Six furnished rooms have constrained orbit cameras, keyboard view presets, three hotspots and a Back to campus action. The same renderer is reused and the campus viewpoint is restored.
- `/learning`: learning approach, example 09:00–17:00 school day and weekday themes.
- `/life`: free hour, shared spaces and local demo bookings.
- `/events`: illustrative two-week Culture Festival and changeable local demo vote.
- `/project`: concept, author, FAQ, validated idea drafts and clipboard copy.

Deep links such as `/campus?place=library` and `/campus?place=gaming-zone` restore selection on refresh. An interrupted tour resumes explicitly through its Resume button; a completed tour resets progress. Navigation never advances the tour automatically.

## Architecture

- `public/data/places.json`: the thirteen canonical IDs, preserved from the starter.
- `src/data.js`: enriched place content, schematic entrance coordinates, path graph and tour.
- `src/scene.js`: lazy Three.js scene, reusable architectural geometry, shared materials, instanced pines, orbit controls, picking, camera framing and resource disposal.
- `src/interior-data.js`: six room definitions, entry mapping and specific hotspot content.
- `src/interiors.js`: furnished main hall, hillside library, learning studio, technology lab, dining hall and games lounge.
- `src/materials.js`: deterministic local surface textures and geometry/material/texture/shadow disposal.
- `src/camera.js`: constrained orbit/zoom, framing, reduced-motion-aware camera transitions and reset.
- `src/main.js`: semantic page templates, client router and interface coordination.
- `src/state.js`: versioned, validated local state with an in-memory fallback.
- `src/styles.css`: responsive layouts and locally hosted fonts with system fallbacks.
- `tests/`: meaningful data/state tests and production-browser workflows.

One renderer exists at a time. Repeated opaque architecture and furniture use instanced batches; glass retains individual depth sorting and animated foliage remains independent. Instanced buffers are disposed when leaving a scene. Rooms render on demand; the exterior has calm foliage and lake animation with reduced updates. Hidden tabs and offscreen views stop rendering. Shadows are retained until scene changes, device pixel ratio is capped and mobile shadows are disabled. On touch devices one-finger vertical scrolling remains available; two fingers orbit/zoom. Reduced motion removes camera flights. Context loss switches the campus to Map view or the current interior to its rendered gallery. 3D can be retried from the view switch.

Routes follow the graph outside buildings. Interior destinations share their parent entrance and explain the internal stairs/lift transition. Routes are illustrative, **not surveyed navigation**. Room viewing is deliberately constrained rather than a first-person game. `/campus?place=library&interior=library` opens the library directly. Browser Back returns to the campus, and a room visit during the tour resumes the same stop. The two dining halls share one corresponding dining interior; outdoor places do not open generic rooms.

## Honest demonstrations and assets

Favourites, votes, bookings, idea drafts and tour progress are local to the browser. They never submit to a server or reserve real equipment. If storage is blocked or damaged the site remains usable in memory. Active domain and Telegram destinations remain unset in `public/config.js`; connect actions show a coming-soon dialog.

The attached logo and architectural illustration informed the design. Their original image bytes were unavailable in the task filesystem. `public/assets/emblem.svg` is a scalable reconstruction of the supplied open-door emblem; supporting images in `public/images/` are captures of the actual improved campus and rooms. Their provenance is explicit; none is described as the approved original. The actual campus is original real-time geometry, not a rendered reference image. The original school illustration and original logo remain missing as attachment files; no replacement is claimed to be an approved original. Original attachment embedding remains an asset follow-up. DM Sans and Libre Caslon Display are hosted locally with their SIL Open Font Licenses in `public/fonts/`.

For static production hosting, serve `dist/` and rewrite page routes to `index.html`. Vite dev and preview already support direct page loads. Public deployment, domain purchase and real bot/backend integration are separate tasks.


## Repeat review

The requirement-by-requirement audit and the revised delivery are in `/workspace/outputs/serenity-upgrade/recheck/`. The repeat pass replaces opaque window backings with open frames, connects the academic wings, creates a sunken games lightcourt, enriches room-specific furniture and equipment, focuses room hotspots, and shows one selected-place panel. Browser Forward, interior WebGL context loss and real two-finger touch are covered separately. Software rendering uses less frequent ambient updates and smaller exterior shadow maps while camera input stays responsive. Reference matching remains a stylised interpretation; original reference bytes are still unavailable.

## Review and portable production delivery

Review output is durable under `/workspace/outputs/serenity-upgrade/`: `before/`, `after/`, `renders/`, comparison images, a review gallery and verification reports. Capture scripts support `SERENITY_OUTPUT`, `SERENITY_URL` and `CHROMIUM_PATH` overrides. `SERENITY_CAPTURE=interior-main-hall` refreshes just that room and its detail angle after a visual fix. After repeat-review captures, `python3 scripts/build-review.py` creates the portable comparison gallery from its durable `recheck/` output (Python/Pillow required). Browser test traces stay under `/tmp`; final review screenshots do not.

`npm run package:production` creates `Serenity-production.zip` containing the entire build, local assets/fonts and `serve.mjs`. Run `SERENITY_OUTPUT=/workspace/outputs/serenity-upgrade/recheck node scripts/verify-production.mjs` to verify an extracted ZIP with its own server and Chromium. Extract and run `node serve.mjs` with Node.js >=22.12; no npm installation is required for the packaged site. Its server provides page-route fallbacks and only serves public build files. This package is a production site, not a publicly deployed URL.


## Open without a server

`npm run package:single` exports the current site to `/workspace/outputs/serenity-upgrade/recheck/Serenity.html`. Download and open it in a regular browser; it includes Three.js, all six rooms, the six page routes, fonts and all 27 rendered images. Page and interior addresses use hash routes in this portable build. The production site keeps its usual URLs and lazy loading. No runtime asset downloads or Node.js installation are needed for viewing the portable file. Browser policies may restrict local HTML or WebGL; the map and image-gallery alternatives are included.
