# Serenity project instructions

## Before editing
Read README.md and docs/PROJECT.md. Preserve existing work and the user's agreed school concept. Report progress and results in Russian; website interface copy is English.

## Product and design
Serenity International School is an interactive fictional school concept. Use the selected open-door logo and a coherent cream-stone, honey-timber school beside mountains and a lake. Keep the campus compact. Brand colours: forest teal #164F48, warm gold #C6A05D and ivory #F6F2E8.
The student wears a blue hoodie; Khusan wears a green overshirt. Use approved assets when supplied, without inventing alternative faces or substituting random real-school photos.

## Implementation
Use semantic HTML, CSS, browser JavaScript modules and SVG for the campus map. This starting environment has no dependencies. Keep content and interactions separate. Preserve the canonical place IDs in public/data/places.json.
The site will have Home, Campus, Learning, School Life, Events and Our Project pages. Deep links must work on reload.
Show demo votes and bookings honestly. Persist local state safely; handle unavailable localStorage. Do not invent real users, reviews, admissions, vote totals or school credentials.
Keep Telegram tokens and all other secrets out of client code and version control. The proposed domain and bot username are not verified active destinations.

## Scope
The initial repository prepares the development environment only. Build the actual site when requested. Domain purchase, public hosting and bot integration are separate project steps.

## Validation
Run npm run check after changes to the environment. Run npm run dev to start the site on 0.0.0.0:5173. Add focused validation for actual functionality as it is implemented.
Report exactly which checks ran and any limits. Never claim visual browser checks or deployment succeeded without evidence.
