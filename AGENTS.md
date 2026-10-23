# Serenity project instructions

## Latest approved direction — cinematic video campus
The user's separate BRIEF.md in reference/cinematic-update supersedes the older primary-3D requirements below. Work in the existing jj source: fixed-view supplied 8-second 720p video A, pan/zoom, source-anchored pins/polygons, closed roofs, mountain library upper-right, desktop right panel/mobile bottom sheet, all ten existing panoramas and RU/EN. src/video-campus.js and src/campus-media.js are the current renderer/data. The old Three.js modules remain historical and are not bundled. Do not publish a new Site or service. Deliver complete production + source ZIPs in /workspace/outputs/serenity-cinematic. Read docs/CINEMATIC-UPDATE.md and current README for the active pipeline. The optional portable preview has embedded UI/images and a separate MP4 sidecar; never embed MP4 as base64. Verify generated production bytes in a browser, not merely a file link. npm run check and npm run build and npm run check:browser remain required.

## Before editing
Read README.md and docs/PROJECT.md. Preserve existing work, the user's agreed school concept and all thirteen canonical IDs in public/data/places.json. Report progress and results in Russian. The latest approved redesign supersedes the old English-only rule: all website content, controls, feedback and accessible labels must be complete in Russian and English.

## Product and design
Serenity International School is a fictional My Dream School concept by Khusan. Keep the open-door, mountains, water and sun emblem, a compact cream-stone and honey-timber campus, dark roofs, a modest clock tower, central tree courtyard, covered paths, lake and mountains. Colours: forest teal #164F48, warm gold #C6A05D and ivory #F6F2E8. Use approved character assets if supplied; do not invent portraits or substitute real-school photos.

## Architecture
The user explicitly approved Vite, modern browser modules and Three.js, superseding the original flat-map-only starter. The procedural 3D campus is primary; an independent SVG map and complete keyboard-accessible place directory are required alternatives. Keep data, scene, routes, interface and local state modular. Reuse the existing isolated checkout; do not create a worktree unless explicitly requested.

Thirteen places do not mean thirteen buildings. Games Lounge is lower-ground in Technology Lab; Quiet Room is upstairs in Learning Studios. Routes use the connected entry-point graph and explain internal level changes. Keep 3D, map, list, URL and selected panel in sync. All six page routes and place deep links must survive refresh.

## Interiors and visual assets
The current interface uses ten distinct supplied perspective panoramas, superseding the six older procedural room models. Keep explicit overview, selected, interior and tour states. Pause the existing renderer during HTML room viewing; retain the campus camera and selected place on return and resume the current tour stop. Each room has three specific hotspots, bounded undistorted pan/zoom and keyboard controls. Never wrap these images on a sphere. All panoramas remain functional without WebGL; hide irrelevant 3D controls and live wording. Reserve desktop space for panels; never stack list, details and tour over the model.

The two new user archives contain campus-master plus ten panoramas; all eleven are present in public/media, with asset-map.json documenting provenance and consumers. Preserve the existing editable emblem. npm run capture:scenes refreshes the three outdoor scene captures consumed by place cards; never replace the supplied panoramas. Final screenshots and artifacts belong in /workspace/outputs/serenity-redesign, not /tmp. Selected desktop mode shows one panel; keep the All places return, browser Forward behaviour and two-finger touch coverage. Include connecting wings in campusBuildings so the map and route checks track actual footprints. npm run package:production creates the complete production ZIP and dependency-free server; npm run package:single creates the standalone Serenity-Preview.html, which must work with zero runtime asset downloads.

## Integrity and accessibility
Votes and bookings are clearly labelled local demos. Drafts are local, never submitted. Validate and version persisted data; keep the site usable in memory when localStorage fails. Keep active domain and Telegram destinations unset until verified. Never expose credentials, invent votes/users/admissions or claim an actual school exists. No token, paid model or MotionSites dependency is needed.

Use semantic controls, keyboard focus, Escape dismissal, reduced motion and readable contrast. Preserve mobile page scrolling around the canvas. Maintain loading/error states, WebGL/context-loss fallback, a single renderer, capped pixel ratio, shared geometry/materials and disposal. Avoid unrelated dependencies.

## Validation
Run npm run check and npm run build after code changes. Run npm run check:browser for interaction, routing, fallback or layout changes (system Chromium or CHROMIUM_PATH). Inspect desktop and mobile screenshots when altering the scene or visual layout. Test widths 360, 390, 768, 1280 and 1440. npm run dev binds 0.0.0.0:5173; npm run preview serves the production build on 4173. Report executed checks precisely and distinguish local preview from deployment.
