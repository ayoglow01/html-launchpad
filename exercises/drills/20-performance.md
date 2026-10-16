# Practice · Lesson 20 · Fast pages

📗 [Easy lesson](../../curriculum/20-performance/README.md) · 📘 [Full version](../../curriculum/20-performance/deep-dive.md)

💡 Try each task **before** opening the answer. If a task uses something new, you'll find it in the full version.

### D1 · Thresholds
Good values for LCP, INP, CLS?

<details>
<summary>Answer</summary>

LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1 (75th percentile of real visits).
</details>

### D2 · Hero image
Write the ideal hero `<img>` (1600×900, likely LCP).

<details>
<summary>Answer</summary>

```html
<img src="hero-1600.jpg" srcset="hero-800.jpg 800w, hero-1600.jpg 1600w" sizes="100vw"
     width="1600" height="900" fetchpriority="high" alt="…">
```
No `loading="lazy"`.
</details>

### D3 · Below the fold
Gallery images further down the page.

<details>
<summary>Answer</summary>

`loading="lazy" decoding="async"` with `width`/`height`.
</details>

### D4 · Preload a font
Preload `/fonts/inter.woff2`.

<details>
<summary>Answer</summary>

`<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>`
</details>

### D5 · Which hint?
Google Fonts origin; the likely next page; a hero background image set in CSS.

<details>
<summary>Answer</summary>

`preconnect` (to `fonts.gstatic.com` with `crossorigin`); `prefetch`; `preload` with `as="image"` (or better: make it an `<img>`).
</details>

### D6 · CLS sources
Three HTML-level causes of layout shift.

<details>
<summary>Answer</summary>

Images/video/iframes without dimensions; ads/embeds injected without reserved space; web fonts swapping with very different metrics; content inserted above existing content.
</details>

### D7 · Render-blocking
Which block rendering: `<link rel="stylesheet">`, `<link rel="stylesheet" media="print">`, `<script src>` in head, `<script defer>`?

<details>
<summary>Answer</summary>

The normal stylesheet and the plain `<script src>`. Print stylesheet and deferred script don't.
</details>

### D8 · Lab vs field
Lighthouse says 98, Search Console says LCP is poor. Who's right?

<details>
<summary>Answer</summary>

Field data (real users, real devices/networks). Lab tests run on one simulated setup.
</details>
