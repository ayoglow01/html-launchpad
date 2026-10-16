# P5 · Interactive docs hub

**After:** Lesson 18 · **Time:** 8–10 hours · **Pages:** 3+

## What you're making

Build "html-cracker Docs Hub": a small documentation site about three HTML topics of your choice. It should feel modern — sections that open and close, pop-up boxes, popovers, a light/dark switch that remembers your choice — while still using meaningful tags, working for everyone, and working without JavaScript.

## What it needs

### The head (Lesson 13)
- [ ] Unique titles and descriptions; canonical addresses (use a made-up domain); Open Graph tags with an absolute `og:image`.
- [ ] Favicons (ICO + SVG), `apple-touch-icon`, and a `manifest.webmanifest`.
- [ ] JSON-LD `TechArticle` or `Article` on each topic page.

### Adding CSS and JavaScript (Lesson 14)
- [ ] One external stylesheet; scripts with `defer` or `type="module"`.
- [ ] A light/dark switch button with `aria-pressed`; choice stored in `localStorage`.
- [ ] Works with JavaScript off (the default theme shows, and you can reach all the content).

### Pop-ups and accordions (Lesson 15)
- [ ] An FAQ using exclusive `<details name="…">`.
- [ ] A "Keyboard shortcuts" modal `<dialog>` opened with `showModal()` (or invoker commands with fallback).
- [ ] At least two glossary popovers (`popover` + `popovertarget`).

### Other languages (Lesson 16)
- [ ] One page has a short section in another language with correct `lang`.
- [ ] A code sample or brand name marked `translate="no"`.

### Your own tags (Lesson 17)
- [ ] A `<template>`-driven list (e.g. "related topics" generated from an array).
- [ ] One custom element, e.g. `<copy-button>` that wraps a native `<button>` and copies the code block next to it.

### Browser tools (Lesson 18)
- [ ] A small `<canvas>` or SVG diagram with a text alternative.
- [ ] Clipboard API used by the copy button (with a status message in a live region).

## Score yourself

For each area, give yourself **0** (missing), **1** (started), **2** (mostly right) or **3** (spot on).

| Area | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| The head and sharing previews | | | | |
| Loading scripts, and working without JavaScript | | | | |
| `details`/`dialog`/`popover` used correctly | | | | |
| Language and direction attributes | | | | |
| Template and custom element | | | | |
| Canvas/SVG accessibility | | | | |
| Keyboard and screen reader | | | | |
| Validation | | | | |
