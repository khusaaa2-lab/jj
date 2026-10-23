# Serenity project instructions

## Before editing
Read README.md and docs/PROJECT.md. Preserve existing work, the user's agreed school concept and all thirteen canonical IDs in public/data/places.json. Report progress and results in Russian; all website interface copy is English.

## Product and design
Serenity International School is a fictional My Dream School concept by Khusan. Keep the open-door, mountains, water and sun emblem, a compact cream-stone and honey-timber campus, dark roofs, a modest clock tower, central tree courtyard, covered paths, lake and mountains. Colours: forest teal #164F48, warm gold #C6A05D and ivory #F6F2E8. Use approved character assets if supplied; do not invent portraits or substitute real-school photos.

## Architecture
The user explicitly approved Vite, modern browser modules and Three.js, superseding the original flat-map-only starter. The procedural 3D campus is primary; an independent SVG map and complete keyboard-accessible place directory are required alternatives. Keep data, scene, routes, interface and local state modular. Reuse the existing isolated checkout; do not create a worktree unless explicitly requested.

Thirteen places do not mean thirteen buildings. Games Lounge is lower-ground in Technology Lab; Quiet Room is upstairs in Learning Studios. Routes use the connected entry-point graph and explain internal level changes. Keep 3D, map, list, URL and selected panel in sync. All six page routes and place deep links must survive refresh.

## Interiors and visual assets
There are six distinct 3D interiors. Keep explicit overview, selected, interior and tour states. Reuse the existing renderer, retain the campus camera and selected place on room return, and resume the current tour stop. Each room has three specific hotspots and keyboard camera presets. No first-person game is required. Map/image galleries remain functional without WebGL; hide irrelevant 3D controls and live wording. Reserve desktop space for panels; never stack list, details and tour over the model.

Render images from the actual scenes using npm run capture:scenes. Keep public/images current if geometry changes. Do not describe reconstructed assets or scene renders as approved originals. The original logo and campus illustration have not been supplied as accessible files. Final screenshots belong in /workspace/outputs/serenity-upgrade (the repeat pass uses recheck/), not /tmp. Selected desktop mode shows one panel; keep the All places return, browser Forward behaviour and two-finger touch coverage. Include connecting wings in campusBuildings so the map and route checks track actual footprints. npm run package:production creates the complete production ZIP and dependency-free server.

## Integrity and accessibility
Votes and bookings are clearly labelled local demos. Drafts are local, never submitted. Validate and version persisted data; keep the site usable in memory when localStorage fails. Keep active domain and Telegram destinations unset until verified. Never expose credentials, invent votes/users/admissions or claim an actual school exists. No token, paid model or MotionSites dependency is needed.

Use semantic controls, keyboard focus, Escape dismissal, reduced motion and readable contrast. Preserve mobile page scrolling around the canvas. Maintain loading/error states, WebGL/context-loss fallback, a single renderer, capped pixel ratio, shared geometry/materials and disposal. Avoid unrelated dependencies.

## Validation
Run npm run check and npm run build after code changes. Run npm run check:browser for interaction, routing, fallback or layout changes (system Chromium or CHROMIUM_PATH). Inspect desktop and mobile screenshots when altering the scene or visual layout. Test widths 360, 390, 768, 1280 and 1440. npm run dev binds 0.0.0.0:5173; npm run preview serves the production build on 4173. Report executed checks precisely and distinguish local preview from deployment.
