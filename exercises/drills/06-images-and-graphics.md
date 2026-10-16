# Practice · Lesson 6 · Images

📗 [Easy lesson](../../curriculum/06-images-and-graphics/README.md) · 📘 [Full version](../../curriculum/06-images-and-graphics/deep-dive.md)

💡 Try each task **before** opening the answer. If a task uses something new, you'll find it in the full version.

### D1 · Write the alt
Write `alt` for: (a) company logo that links home; (b) a decorative swirl; (c) a photo of the CEO next to her bio, which already names her; (d) a chart showing sales tripled; (e) a magnifier icon in a search button with no text.

<details>
<summary>Answer</summary>

(a) `alt="Acme home"` — describe the link's destination/function. (b) `alt=""`. (c) `alt=""` or a short `alt="Ada Obi"` only if useful; avoid repeating the bio. (d) `alt="Sales tripled from ₦2m in January to ₦6m in March"` (and data nearby for complex charts). (e) `alt="Search"`.
</details>

### D2 · Missing vs empty
What's the difference between `<img src="a.jpg">` and `<img src="a.jpg" alt="">`?

<details>
<summary>Answer</summary>

No `alt`: invalid, and screen readers may read the file name. `alt=""`: decorative — skipped by screen readers.
</details>

### D3 · Prevent layout shift
Add what's needed to `<img src="team.jpg" alt="Our team at the Lagos office">` (image is 1200×800).

<details>
<summary>Answer</summary>

`width="1200" height="800"` (and CSS `max-width: 100%; height: auto;`).
</details>

### D4 · srcset with widths
Files: photo-480.jpg, photo-800.jpg, photo-1200.jpg. Image fills full width on mobile, half above 800px.

<details>
<summary>Answer</summary>

```html
<img src="photo-800.jpg"
     srcset="photo-480.jpg 480w, photo-800.jpg 800w, photo-1200.jpg 1200w"
     sizes="(min-width: 800px) 50vw, 100vw"
     width="1200" height="800" alt="…">
```
</details>

### D5 · Formats with fallback
Serve AVIF, then WebP, then JPEG.

<details>
<summary>Answer</summary>

```html
<picture>
  <source srcset="photo.avif" type="image/avif">
  <source srcset="photo.webp" type="image/webp">
  <img src="photo.jpg" alt="…" width="1200" height="800">
</picture>
```
The `<img>` is required; `alt` goes on it.
</details>

### D6 · figure
Image with a caption "Figure 1: Lekki Conservation Centre canopy walk".

<details>
<summary>Answer</summary>

```html
<figure>
  <img src="canopy.jpg" alt="Wooden canopy walkway suspended through treetops" width="800" height="533">
  <figcaption>Figure 1: Lekki Conservation Centre canopy walk.</figcaption>
</figure>
```
Caption ≠ alt: alt replaces the image; the caption is visible to everyone.
</details>

### D7 · Which format?
Logo, photo, screenshot with text, icon set.

<details>
<summary>Answer</summary>

Logo/icons: SVG. Photo: AVIF/WebP with JPEG fallback. Screenshot with text: PNG or lossless WebP.
</details>

### D8 · Inline SVG accessibility
Make an informative inline SVG heart icon named "Favourite".

<details>
<summary>Answer</summary>

```html
<svg viewBox="0 0 24 24" role="img" aria-labelledby="fav-title">
  <title id="fav-title">Favourite</title>
  <path d="…"/>
</svg>
```
Decorative: `aria-hidden="true"` instead.
</details>

### D9 · Image maps
When is `<map>`/`<area>` appropriate, and what does each `<area>` need?

<details>
<summary>Answer</summary>

Clickable regions on a non-responsive diagram or map. Each `<area>` with `href` needs `alt`. Coordinates don't scale with responsive images — often SVG with links is better.
</details>
