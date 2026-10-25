# Serenity website brief

## Current direction — reference-based spatial model, 25 October 2026
The latest user request replaces the video-map requirement below. Actual Three.js mesh geometry is primary; preserve the existing site and rooms. The source is src/reference-model.js and src/reference-campus.js. Refer to README.md and docs/qa/FINAL-REVIEW.md for current delivery and precisely bounded verification. Video remains available at its unchanged Git checkpoint. No new Site or public deployment is requested.

## Current approved motion campus update — 24 October 2026
This section supersedes conflicting historical descriptions below. The supplied BRIEF.md is in reference/cinematic-update and the implementation notes are in docs/CINEMATIC-UPDATE.md. The current exterior is an explorable fixed-view supplied MP4 (A, 8 seconds, 1280×720), not an orbiting procedural model. Roofs stay closed; the library is embedded in the upper-right rocky hillside. The current renderer is src/video-campus.js with calibrated normalised polygons/anchors in src/campus-media.js. All existing routes, thirteen canonical places, ten interiors, local demos, audio, tour and RU/EN remain. Runtime needs no WebGL. Independent still-map/list and video-error poster are available. Production and editable source delivery is in /workspace/outputs/serenity-cinematic; do not publish a new Site.

## Current approved redesign — 23 October 2026
This section supersedes conflicting historical notes below. The school website is complete in RU/EN, opens immediately with Serenity and the supplied campus-master image, and has no character/dream-story introduction. The six routes and thirteen canonical IDs remain. A real Three.js exterior accompanies ten bounded perspective HTML room panoramas, not spherical images or a video pretending to rotate. Every panorama has three specific details, clamped pan/zoom, keyboard control and a return preserving campus selection/camera/tour.

Both supplied archives are now present: master + ten interior images. The four extra mappings are workshop → workshop-panorama, dining-b → garden-dining-panorama, quiet-room → quiet-room-panorama and residence → residence-panorama. public/media/asset-map.json records all eleven sources and uses. Earlier claims of missing reference files and only six rooms refer to the historical implementation.

The homepage uses reversible scroll staging, with immediate route access. Sound is original procedural ambience/music, strictly opt-in with mute/volume and hidden-tab suspension. Reduced motion and WebGL failure retain the full school content and room viewing. The model is a stylised architectural interpretation, not a surveyed digital twin. Existing local demo state remains serenity:v1; language has a separate persistent key. No server submissions, public domain, Telegram connection or paid generation is implied.

Current delivery: /workspace/outputs/serenity-redesign/Serenity-Preview.html (embedded JS/CSS/fonts/images, hash routes), Serenity-production.zip (build + server + hosting rewrites), durable screenshots and verification reports. The preview's verifier blocks every runtime network request except the HTML document. See the current README for commands. Historical sections below describe earlier stages only.

## Goal
Build an English-language interactive website for the fictional Serenity International School, part of the My Dream School project. Visitors explore the school, follow a virtual tour and try clearly marked demo interactions. The implemented website uses Vite and a procedural Three.js campus, with an independent SVG map and place directory.

## Confirmed school
Compact two-storey cream-stone and honey-timber buildings, dark roofs, generous windows and a modest clock tower, beside an alpine lake and mountains. One coherent architecture, covered connections and a central tree courtyard.
International student community, a small nearby residence and a student-buddy welcome.
School day 09:00–17:00, with lunch and free choice from 12:00–13:00. Morning core subjects; afternoon projects, practice, clubs and support.
Two dining halls with separate serving lines and a shared service kitchen. Do not guarantee that queues disappear.
Garden of Ideas with a covered making table, social seating and quiet places, a nearby supervised workshop and an indoor rainy-day alternative.
A library partly embedded in a nearby lower hillside, reached by a short covered path, with a broad lake-facing window, timber shelves, one rock wall and distinct quiet/collaboration areas.
A daylit lower-ground games room with an outdoor exit, computers, tablets, consoles and board games.
One large football field with a small spectator stand.
Student-voted events last two weeks, with preparation, workshops, different roles and a finale during part of the afternoon programme. Regular lessons continue.

## Brand
Name: Serenity International School.
Logo: selected option 2, an open doorway framing mountains, water and a small sun. Use the approved asset when supplied.
Palette: forest teal #164F48, gold #C6A05D, ivory #F6F2E8. Warm restrained illustrated design. Heading serif and readable sans-serif body.
Approved student: black tousled hair, blue hoodie, charcoal trousers, cream sneakers, tan backpack and cream notebook.
Approved Khusan: black textured hair, green overshirt and cream shirt.
Do not invent real addresses, accreditations, reviews, admissions or student statistics.

## Pages
/ Home: illustrated school hero, clear concept label, Explore the campus and Start the tour actions, school-day summary and specific places.
/campus Campus: real-time 3D model plus an SVG map, thirteen canonical places, search, categories, level filters, card/list alternatives, favourites, route finding and shareable place links.
/learning Learning: subjects, practical projects, support, example 09:00–17:00 timeline and weekday themes.
/life School Life: free hour, two dining halls, garden, games, football and residence.
/events Events: two-week Culture Festival example and next-event demo voting.
/project Our Project: the concept, FAQ and an idea form.

## Map
Use public/data/places.json canonical IDs. Keep the layout schematic rather than inventing exact geographic distances.
Entrance connects to courtyard. Courtyard connects to learning, technology, garden, both dining halls and residence. Learning connects to the library by a short covered path and to the quiet room. Garden connects to workshop. Technology connects to games downstairs and the football path.
Click a point to show image, description, activities, level, practical rule, Show route and Save place. Desktop side panel, mobile bottom sheet. A place URL opens the right card on reload.
Tour stops: courtyard, learning, technology, garden, library, games, football, return to courtyard for events. Next, Back, Exit and progress; never autoplay.

## Learning
Monday Discover; Tuesday Make; Wednesday Explore; Thursday Life Skills; Friday Together. Themes supplement core subjects.
Example day: 09:00–12:00 core subjects with breaks; 12:00–13:00 lunch/free time; afternoon projects, practice, clubs and support, with breaks, finishing at 17:00.

## Demo interactions
Persist favourites, tour progress, one vote, a game booking and idea drafts locally. Handle unavailable storage.
Gaming: PC 01, PC 02, PlayStation, Xbox and Nintendo Switch. Slots 12:00–12:20, 12:20–12:40 and 12:40–13:00. One active demo booking per chosen day, visible confirmation and cancellation.
Events: Culture Festival, Makers Challenge, Nature and Discovery. One active demo vote, changeable, no invented votes from other visitors.
Idea form: title 3–80 characters, category and description 20–1500 characters. Save draft and Copy idea. Do not claim a local draft was sent.
Future shared data needs a backend with server validation, real booking conflicts and proper access control.

## Telegram and domain
serenitycampus.com and @SerenityCampusBot are proposals, not verified active destinations. Keep actual config unset until confirmed. The bot should later answer FAQs, open the map/tour and help with ideas. Never expose a bot token in client code.
Until connected, Telegram actions show a useful coming-soon dialog rather than opening an unverified username.

## Quality
Responsive at 360, 390, 768, 1280 and 1440 pixels. Semantic controls, visible keyboard focus, Escape and focus restoration for dialogs, reduced-motion support and readable contrast. Map must have a textual alternative and must not trap page scrolling.
Keep images consistent, optimised and dimensioned. Use explicit placeholders when approved assets are missing.
All buttons need meaningful states, errors, empty results and success feedback. Never fake successful server operations.
The video shows only device backs, taps and character reactions; that restriction does not limit the actual website interface.


## Implemented architecture (October 2026)
The user approved genuine procedural Three.js geometry as the primary campus experience. Vite supplies development, production builds and SPA page fallbacks. Six semantic page templates share the same router and locally hosted typefaces. No React or backend is needed.

The thirteen original canonical IDs remain in public/data/places.json. src/data.js adds current display names, copy, entry coordinates, graph edges and tour stops. Internal places share their parent entry points, have separate markers/list rows and explain level transitions. All routes are illustrative, not surveyed.

The 3D scene has shared geometries/materials, instanced pines, adaptive pixel ratio/shadows, render-on-demand and deterministic placement. One renderer is disposed before route/view changes. WebGL failure or context loss opens the independent map. Reduced motion skips camera flights; one-finger touch scrolling remains available.

Versioned local state holds favourites, one vote, a booking per day, explicit idea drafts and paused tour progress. Invalid data is filtered; blocked storage falls back to memory. Copying an idea uses the Clipboard API with visible failure feedback. Nothing is submitted to a server.

The supplied reference images were visible in chat, but their original files were unavailable. The recognisable emblem is reconstructed as SVG; editorial images are captures of the actual procedural scenes, not original attachment reproductions. No unapproved character portraits or unrelated school photos are used.

Run npm run check, npm run build and npm run check:browser as described in README.md. Full first-person movement, real admissions, shared bookings, public deployment, domain registration and Telegram integration remain out of scope.


## Immersive upgrade (22 October 2026)
Six furnished procedural rooms now support the primary select → preview → Enter building → inspect hotspots → Back to campus workflow. Interior IDs are `main-hall`, `library`, `learning-studio`, `technology-lab`, `dining-hall` and `games-lounge`. The two dining halls share a service-kitchen concept and one corresponding interior. Other places retain their own outdoor viewpoints.

A single renderer switches scenes. Campus camera snapshots survive room visits; explicit room URLs and browser Back are supported. Tour mode hides directory/details, supplies one concise caption and can pause for an interior before resuming the same stop. Desktop panels reserve model space; mobile details can collapse.

Home follows belonging, library, making, free time and festival chapters. Actual scene captures replace schematic placeholders. Non-WebGL Home uses the full campus render with accurate image-mode wording; room galleries retain hotspots. Brand, school rhythm, canonical IDs and version-one demo state are preserved.

The original approved campus illustration and original logo remain inaccessible as attachment files. The only new uploaded file is the text upgrade brief. Existing SVG is a reconstruction; all editorial images are actual procedural scene renders. Do not call them originals or an accurate image-to-model conversion.


## Repeat review
West academic wings share a two-storey link represented in campusBuildings, so model, flat map and route checks agree. A real terrain opening admits daylight to the lower games lightcourt; graph paths bypass its edge. Desktop selected mode hides the directory and exposes an All places return. Six rooms have distinct materials and additional practical equipment. Selecting a room hotspot frames its object; browser Forward retains room-return history. Final repeat-review evidence lives in `/workspace/outputs/serenity-upgrade/recheck/`. The original reference image files remain unavailable, and the model is a stylised interpretation.
