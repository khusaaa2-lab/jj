# Serenity website brief

## Goal
Build an English-language interactive website for the fictional Serenity International School, part of the My Dream School project. Visitors explore the school, follow a virtual tour and try clearly marked demo interactions. The starting repository prepares the environment; implementation is a separate follow-up task.

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
/campus Campus: SVG map, thirteen canonical places, search, categories, level filters, card/list alternatives, favourites, route finding and shareable place links.
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
