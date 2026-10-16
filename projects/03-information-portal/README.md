# P3 · Information portal

**After:** Lesson 9 · **Time:** 6–8 hours · **Pages:** 3

## What you're making

Build "Lagos Commuter Guide", an information site for people new to the city: transport options, fares, and timetables. This project is about **page layout, landmarks, media, and data tables**.

## Pages

1. `index.html` — home: what the guide covers, featured article, latest updates.
2. `fares.html` — fare and timetable tables.
3. `media.html` — a video explainer and an audio interview.

## What it needs

### Every page
- [ ] Same site `<header>` with logo and `<nav aria-label="Main">` (current page marked with `aria-current="page"`).
- [ ] One `<main>`; a `<footer>` with `<address>` contact info and a second labelled `nav`.
- [ ] A skip link as the first focusable element.
- [ ] Headings in a sensible order — it passes the "CSS off" test.

### Home
- [ ] A featured `<article>` with its own `<header>`, author, and `<time>`.
- [ ] A "Latest updates" `<section>` containing three short `<article>`s.
- [ ] An `<aside>` with quick tips.

### Fares
- [ ] A fares table: caption, `thead`/`tbody`, `th` with `scope`, at least one `colspan` or `rowspan`.
  - Example columns: Mode · Route · Fare (₦) · Payment · Notes.
- [ ] A timetable table with two levels of headers (e.g. weekday/weekend × morning/evening) using `scope="colgroup"`.
- [ ] Both tables wrapped so they scroll sideways on small screens, and keyboards can reach them.
- [ ] Amounts with `<data value="…">` where helpful.

### Media
- [ ] A video with two sources, poster, captions track (use `assets/media/`).
- [ ] An audio interview with controls and a transcript.
- [ ] An embedded map or video `<iframe>` with `title`, `loading="lazy"`, and dimensions.

## Score yourself

For each area, give yourself **0** (missing), **1** (started), **2** (mostly right) or **3** (spot on).

| Area | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Landmarks and skip link | | | | |
| Heading order | | | | |
| `article`/`section`/`aside` choices | | | | |
| Table structure and headers | | | | |
| Table accessibility (caption, scope, scrolling) | | | | |
| Media with captions/transcripts | | | | |
| Navigation consistency and `aria-current` | | | | |
| Validation | | | | |
