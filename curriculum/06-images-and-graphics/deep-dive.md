# Lesson 6 · Images — the full version

📘 **This is the full version.** New to this? Read the [easy lesson](README.md) first, then come back for the details.

⏱ 4–5 hours · 🌱 Beginner · 🧰 You need: Lesson 5

Pictures are usually the heaviest part of a page. They're also where pages most often fail people who can't see them. This lesson covers normal pictures, pictures that fit every screen, figures with captions, clickable picture maps, SVG drawings, canvas and maths.

## By the end you can

- Write good `alt` text for any picture, and know when it should be empty.
- Pick the right file type.
- Stop the page jumping while pictures load, and load the important ones first.
- Send small pictures to phones and big ones to large screens (`srcset`, `sizes`, `<picture>`).
- Choose how to add an SVG.
- Say what `<canvas>` and `<math>` are for.

---

## 1. The `<img>` tag

```html
<img src="images/team.jpg" alt="Five engineers reviewing a design on a whiteboard" width="1200" height="800">
```

| Attribute | What it does |
|---|---|
| `src` | Where the picture is. Required. |
| `alt` | The words that replace the picture. **Always write the attribute** (it can be empty — see section 2). |
| `width`, `height` | The picture's real size in pixels, **no units**. The browser saves the right space before it loads. |
| `loading` | `lazy` (load later) or `eager` (load now — the normal setting) |
| `decoding` | `async`, `sync` or `auto` — a hint about whether unpacking the picture can wait |
| `fetchpriority` | `high`, `low` or `auto` — how soon to download it compared with other files |
| `srcset`, `sizes` | Different sizes to choose from (section 5) |
| `crossorigin`, `referrerpolicy`, `usemap`, `ismap` | Special cases |

`<img>` never closes, and it can sit inside a paragraph like a word.

## 2. Writing `alt` text

`alt` is what a screen reader says, what shows if the picture fails to load, and what Google reads. Say **why the picture is there**, not every detail in it.

| Kind of picture | What to write | Example |
|---|---|---|
| **Gives information** | A short description of that information | `alt="Map showing our office two blocks north of the bus stop"` |
| **Just decoration**, or repeats text that's right next to it | **Nothing**: `alt=""` | Divider lines, background swirls, an icon next to the same word |
| **Does something** (inside a link or button) | **Where it goes or what it does** | Logo that links home: `alt="Acme home"` · Print button icon: `alt="Print"` |
| **Has words in it** | The same words | `alt="50% off all courses this week"` |
| **Complicated** (chart, diagram) | A short summary in `alt`, plus the full details nearby | `alt="Sales grew 60% from January to March"` + a table or caption |

```html
<img src="divider.svg" alt="">                                       <!-- decoration -->
<a href="/"><img src="logo.svg" alt="Acme home"></a>                 <!-- does something -->
```

| ❌ Bad alt | Why |
|---|---|
| `alt="image"`, `alt="photo"`, `alt="IMG_2041.jpg"` | Tells you nothing |
| `alt="Image of a dog"` | Screen readers already say "image". Just write `alt="Dog catching a frisbee"` |
| No `alt` at all | Many screen readers read out the **file name** instead |
| A whole paragraph | Put long descriptions in normal text or a caption |

> 🔍 **Don't mix up — empty vs missing.** `alt=""` means "decoration, skip it". **No `alt` at all** means "nobody said" — so a screen reader may read the file name. They're not the same.

> 🔍 **Don't mix up — `alt` vs `title`.** `title` is a hover tooltip. It doesn't show on phones and isn't read reliably. It can't replace `alt`. Don't put the same words in both.

## 3. File types

| Type | Best for | See-through parts? | Moving? | Notes |
|---|---|---|---|---|
| **JPEG** | Photos | No | No | Loses a little quality to stay small; works everywhere |
| **PNG** | Screenshots, flat graphics that need exact pixels | Yes | (APNG) | No quality loss, but big for photos |
| **GIF** | Old-style simple animation | Only fully on/off | Yes | 256 colours, huge files. A silent looping `<video>` is better |
| **WebP** | Photos and graphics | Yes | Yes | Much smaller than JPEG/PNG; works in all current browsers |
| **AVIF** | Photos and graphics | Yes | Yes | Usually even smaller than WebP; works in all current major browsers |
| **SVG** | Logos, icons, drawings, charts | Yes | Yes (CSS/SMIL) | Made of shapes, not dots, so it's **sharp at any size**. It's text, so you can put it straight in your HTML |
| **ICO** | Old-style site icons | Yes | No | See Lesson 13 |

> 💡 **A good default:** **SVG** for logos and icons. **AVIF or WebP** for photos (with a JPEG backup inside `<picture>` if you need old browsers). **PNG** for screenshots.

## 4. Size, lazy loading and priority

### `width` and `height` stop the page jumping

Without them, the browser doesn't know how big the picture is until it arrives. So the text jumps down when it appears. This jumping is called **layout shift** (or **CLS** — see Lesson 20). With `width` and `height`, the browser saves the right space. It even works out the shape (the **aspect ratio**) when CSS makes the picture stretch (`max-width: 100%; height: auto`).

### `loading="lazy"`

Waits to load pictures until the user scrolls near them.

> ⚠️ **Exception:** Don't lazy-load pictures people see straight away, especially the big top picture (the **LCP** picture — the largest thing on the first screen). Lazy loading makes them *slower*. Only lazy-load pictures further down.

### `fetchpriority`

```html
<img src="hero.webp" alt="…" width="1200" height="800" fetchpriority="high">
```

Tells the browser "download this one first". Use it on **one or two** pictures, not all of them — if everything is first, nothing is. (Works in all major browsers since 2024.)

### `decoding="async"`

A hint that unpacking the picture doesn't need to hold up the rest of the page. It's a hint, not a magic speed button.

## 5. Pictures that fit every screen

The problem: a phone shouldn't download a 2400px-wide photo just to show it 400px wide.

### Different sizes with `w` and `sizes`

```html
<img
  src="hero-800.jpg"
  srcset="hero-480.jpg 480w, hero-800.jpg 800w, hero-1200.jpg 1200w"
  sizes="(max-width: 600px) 100vw, 50vw"
  alt="Students in a computer lab"
  width="1200" height="800">
```

- `srcset` lists the files and how many pixels wide each **really** is (`480w`).
- `sizes` tells the browser how wide the picture will **appear**: "the full screen width on screens up to 600px, otherwise half the screen". The first rule that matches wins. The last value is the default.
- The browser does the maths with the screen's sharpness and picks a file. **You suggest; the browser decides.** It might use a bigger file it already has, or a smaller one on slow internet.

> ⚠️ **Exception:** If you use `w` but **leave out `sizes`**, the browser assumes the picture fills the whole screen (`100vw`). It often downloads a much bigger file than needed. `w` and `sizes` always go together.

### Fixed-size pictures with `x`

```html
<img src="avatar-1x.jpg" srcset="avatar-1x.jpg 1x, avatar-2x.jpg 2x" alt="Ada Okafor" width="96" height="96">
```

Use `x` when the picture is always the same size on the page (profile photos, logos) and you only need a sharper copy for sharp screens.

### `<picture>`: different file types, or different crops

```html
<!-- Different file types: the first one the browser understands wins -->
<picture>
  <source srcset="hero.avif" type="image/avif">
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg" alt="Our office at sunrise" width="1200" height="800">
</picture>

<!-- A different crop on narrow screens -->
<picture>
  <source media="(max-width: 600px)" srcset="hero-portrait.jpg">
  <img src="hero-wide.jpg" alt="Our office at sunrise" width="1200" height="800">
</picture>
```

| Rule | Detail |
|---|---|
| The `<img>` is **required** and goes **last** | It's the backup *and* the thing that actually shows |
| `alt`, `width`, `height`, `loading` go on the `<img>` | Not on `<picture>` or `<source>` |
| The `<source>` lines are checked **in order** | First match wins |
| Style the `<img>` | `<picture>` is just a wrapper |

> 🔍 **Don't mix up — which one when:**
> - Same picture, different sizes → **`srcset` + `sizes` on `<img>`**. Let the browser choose.
> - Different file types → **`<picture>` + `type`**.
> - Different crops → **`<picture>` + `media`**. You choose.
>
> Don't reach for `<picture>` when a plain `srcset` would do.

## 6. `<figure>` and `<figcaption>`

```html
<figure>
  <img src="sales-chart.svg" alt="Bar chart: sales rose each month from January to March" width="320" height="200">
  <figcaption>Figure 1. Q1 sales, in units sold.</figcaption>
</figure>
```

- A `<figure>` is something the text refers to that could be moved elsewhere (like to the end of a report) without breaking the text.
- It's not just for pictures: code, quotes, diagrams, videos, tables and poems work too.
- `<figcaption>` must be the **first or last** thing inside.

> 🔍 **Don't mix up — `alt` vs `figcaption`.** `alt` **replaces** the picture for people who can't see it. `figcaption` **sits with** the picture for everyone. Don't write the same sentence in both — screen readers will read it twice.

> 📝 **`<img>` or `<figure>`?** A plain `<img>` is fine for most pictures. Use `<figure>` when there's a caption, or when the text says "see Figure 2".

## 7. Clickable picture maps

A picture map turns parts of one picture into separate links.

```html
<img src="campus-map.png" alt="Campus map" usemap="#campus" width="600" height="400">
<map name="campus">
  <area shape="rect" coords="20,20,280,180" href="library.html" alt="Library">
  <area shape="circle" coords="450,140,100" href="sports.html" alt="Sports centre">
  <area shape="poly" coords="60,380,300,230,540,380" href="hostels.html" alt="Hostels">
</map>
```

- `usemap="#name"` joins the picture to `<map name="name">`.
- `shape`: `rect` (x1,y1,x2,y2), `circle` (x,y,radius), `poly` (x1,y1,x2,y2,…), or `default`.
- Every `<area>` with `href` **needs `alt`**.

> ⚠️ **Exception:** The numbers are in picture pixels and **don't shrink** when CSS makes the picture smaller. Picture maps are also fiddly on touch screens. These days, use **an inline SVG with `<a>` links** instead, or plain links under the picture.

## 8. SVG

**SVG** is a picture made of shapes written as text. It stays sharp at any size and is usually tiny for icons and logos.

### Three ways to add an SVG

| How | Can page CSS change its colours? | Saved by the browser for next time? | Can it run scripts? | Use for |
|---|---|---|---|---|
| `<img src="logo.svg" alt="…">` | No | Yes | No (safe) | Logos, drawings |
| **Paste** the `<svg>…</svg>` into your HTML | **Yes** (`fill: currentColor`) | No | Yes | Icons that change colour, interactive drawings, animation |
| CSS `background-image` | No | Yes | No | Decoration only |

### SVG that everyone can use

```html
<!-- Gives information -->
<svg viewBox="0 0 24 24" width="24" height="24" role="img" aria-labelledby="heart-title">
  <title id="heart-title">Favourite</title>
  <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z" fill="currentColor"/>
</svg>

<!-- Decoration, next to real words -->
<button type="button">
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false"><path d="M5 12h14" stroke="currentColor"/></svg>
  Remove
</button>
```

| Attribute | Meaning |
|---|---|
| `viewBox="minX minY width height"` | The SVG's own grid. With it, the SVG resizes cleanly. |
| `width`/`height` | How big it shows on the page |
| `role="img"` + `<title>` (+ `aria-labelledby`) | Makes the SVG count as one picture with a name |
| `aria-hidden="true"` | Hides decoration from screen readers |

> ⚠️ **Exceptions:**
> - An SVG pasted into HTML doesn't need `xmlns`. A separate `.svg` **file** does (`xmlns="http://www.w3.org/2000/svg"`), or it won't show.
> - Inside `<svg>`, `/>` **really** closes a tag — unlike in normal HTML.
> - SVG files can hide scripts. Never paste SVG from people you don't trust into your page (Lesson 19). Loading it with `<img>` doesn't run scripts.

## 9. `<canvas>` (a first look)

`<canvas>` is a blank drawing board. You draw on it **with JavaScript**. It's used for games, charts with thousands of points, photo editors and animations.

```html
<canvas id="chart" width="300" height="150">
  Sales rose from 120 units in January to 260 in March.
</canvas>
```

- The words between the tags show in browsers that can't use canvas. They're also your starting point for screen-reader users.
- `width`/`height` set the **size of the drawing board** in pixels (300×150 if you don't say). Setting the size only in CSS stretches the drawing and makes it blurry.
- A canvas is just dots: you can't select the text, search it, or have it read out. For anything important, give the same information in text or a table.

How to draw: see [Lesson 18](../18-html5-apis-and-canvas/deep-dive.md).

> 🔍 **Don't mix up — SVG vs canvas:** SVG is made of **shapes that are real elements**. You can style them, link them and label them for screen readers. It stays sharp, but slows down with thousands of shapes. Canvas is **dots**. It's fast even with huge numbers of things, but you redraw everything yourself and nothing is readable by screen readers.

## 10. Maths: MathML

**MathML** writes maths so browsers show it properly and screen readers can read it as maths.

```html
<math display="block">
  <mi>x</mi><mo>=</mo>
  <mfrac>
    <mrow><mo>−</mo><mi>b</mi><mo>±</mo><msqrt><msup><mi>b</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>a</mi><mi>c</mi></msqrt></mrow>
    <mrow><mn>2</mn><mi>a</mi></mrow>
  </mfrac>
</math>
```

`<mi>` a letter or name · `<mn>` a number · `<mo>` a sign like + or = · `<mfrac>` a fraction · `<msqrt>` a square root · `<msup>` a power · `<mrow>` a group. All major browsers have supported MathML since 2023. For simple things, `<sup>` and `<sub>` are enough.

## 11. HTML picture or CSS background?

| Use `<img>` (HTML) when… | Use CSS `background-image` when… |
|---|---|
| The picture is **content** — remove it and something is lost | The picture is **decoration** |
| It needs `alt` text | It needs no words |
| It should print, be saved, or show in Google | It's just part of the design |

---

## Mistakes people make

- No `alt`, or `alt="image"`.
- Lazy-loading the big top picture.
- No `width`/`height`, so the page jumps.
- `w` in `srcset` without `sizes`.
- A 4000px, 5 MB photo shown 400px wide.
- `alt` and the caption saying the same thing.
- A separate SVG file with no `xmlns`.

## Quick quiz

<details>
<summary>1. A search icon inside a button, with no visible words. What's the <code>alt</code>?</summary>

What it does: `alt="Search"`. (If it were a pasted SVG: put `aria-hidden="true"` on the SVG, and give the button a name with hidden text or `aria-label="Search"`.)
</details>

<details>
<summary>2. What does <code>sizes="(max-width: 600px) 100vw, 50vw"</code> mean?</summary>

On screens up to 600px wide, the picture fills the full width. On wider screens, it fills half.
</details>

<details>
<summary>3. Why add <code>width</code>/<code>height</code> if CSS stretches the picture anyway?</summary>

The browser uses them to work out the shape and save space, so the page doesn't jump.
</details>

<details>
<summary>4. When should a picture have <code>alt=""</code>?</summary>

When it's only decoration, or the text right next to it already says the same thing.
</details>

<details>
<summary>5. An icon must change to match the text colour on hover. Pasted SVG, or <code>&lt;img src="icon.svg"&gt;</code>?</summary>

Pasted SVG with `fill="currentColor"`. Page CSS can't reach inside an SVG loaded with `<img>`.
</details>

## Practice

- 💻 Examples: [images.html](examples/images.html) · [svg-canvas-math.html](examples/svg-canvas-math.html)
- ✏️ [Drills for this lesson](../../exercises/drills/06-images-and-graphics.md)
- 🔧 Fix this: [05-images-media.broken.html](../../exercises/debug/05-images-media.broken.html)
- 🏗️ Project: [P2 · Recipe collection](../../projects/02-recipe-collection/README.md)
- 🧩 Challenge: [C2 · Recipe card](../../exercises/challenges/README.md#c2--recipe-card)

## Read more

| Where | What you get |
|---|---|
| MDN | [HTML images](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_images) · [Responsive images](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images) · [img reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img) — the responsive-images guide is the best there is |
| MDN | [Including vector graphics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML) · [Image file type guide](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Images) — SVG and file types |
| W3C WAI | [An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) — answer a few questions, get the right `alt` |
| The Odin Project | [Links and Images](https://www.theodinproject.com/lessons/foundations-links-and-images) · [SVG](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-svg) · [Responsive images](https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-responsive-images) — practical and deeper |
| freeCodeCamp | [Responsive Web Design](https://www.freecodecamp.org/learn/responsive-web-design-v9/) — *Build a Heart Icon* for SVG practice |
| W3Schools | [Images](https://www.w3schools.com/html/html_images.asp) · [Image maps](https://www.w3schools.com/html/html_images_imagemap.asp) · [Picture](https://www.w3schools.com/html/html_images_picture.asp) · [Canvas](https://www.w3schools.com/html/html5_canvas.asp) · [SVG](https://www.w3schools.com/html/html5_svg.asp) — try-it boxes |

**Back to:** [the easy lesson](README.md) · **Next easy lesson:** [Lesson 7 · Video, audio and embeds](../07-audio-video-and-embeds/README.md)
