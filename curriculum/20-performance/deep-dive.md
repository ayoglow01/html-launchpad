# Lesson 20 · Fast pages — the full version

📘 **This is the full version.** New to this? Read the [easy lesson](README.md) first, then come back for the details.

⏱ 3–4 hours · 🚀 Pro · 🧰 You need: Lessons 1–19

Lots of your visitors use ordinary Android phones and mobile data they pay for. Your HTML decides what the browser downloads first, what keeps the screen blank, and whether things jump about while the page loads. Most fixes in this lesson are attributes: cheap to add, and you can measure the difference.

## By the end you can

- Explain the steps a browser takes to draw a page, and what holds it up.
- Name the Core Web Vitals, their targets, and the HTML that changes each one.
- Load pictures, fonts, scripts and iframes in the right order.
- Use `preload`, `preconnect`, `prefetch` and `fetchpriority` properly — and know when they make things worse.
- Measure speed with test tools and with real-visitor data.

---

## 1. How a browser draws a page

```
HTML → DOM ─┐
            ├→ render tree → layout → paint → composite → pixels
CSS → CSSOM ┘
       ↑
JS can hold up both
```

This route is called the **critical rendering path**. In plain words: the browser turns your HTML into a tree (DOM) and your CSS into rules (CSSOM), works out where everything goes (layout), then colours it in (paint).

| File | Keeps the screen blank? | Stops the HTML being read? |
|---|---|---|
| `<link rel="stylesheet">` (when `media` matches) | **Yes** — nothing shows until the CSS arrives | No (but it holds up scripts after it) |
| `<link rel="stylesheet" media="print">` | No | No |
| `<script src>` (normal, nothing added) | In practice, yes | **Yes** |
| `<script defer>` or `type="module"` | No | No |
| `<script async>` | No | Pauses for a moment while it runs |
| Pictures, video, iframes | No | No |

The goal: get the **smallest** amount of HTML and CSS needed for the first screen to the browser as early as you can, and send everything else later.

## 2. Core Web Vitals

These are Google's three main speed scores. They're measured on real visitors, at the **75th percentile** — meaning 75% of visits must hit the target.

| Score | What it measures | Good | Poor | HTML that matters most |
|---|---|---|---|---|
| **LCP** — Largest Contentful Paint | Loading: when the biggest picture or text block appears | ≤ 2.5 s | > 4 s | A main picture the browser can find early, `fetchpriority="high"`, not lazy-loading it, preconnect, fewer files that keep the screen blank |
| **INP** — Interaction to Next Paint | Response: the wait between a click, tap or key and the page changing | ≤ 200 ms | > 500 ms | `defer` on scripts, less JavaScript, built-in tags (`details`, `dialog`) instead of heavy widgets |
| **CLS** — Cumulative Layout Shift | Steadiness: things jumping about unexpectedly | ≤ 0.1 | > 0.25 | `width`/`height` on pictures, video and iframes; space saved for ads and embeds; backup fonts |

INP replaced FID (First Input Delay) as a Core Web Vital in March 2024. Helpful extra scores: TTFB (how fast the server answers) and FCP (when the first content appears).

## 3. Pictures — usually the biggest win

```html
<!-- The main picture: probably the LCP element -->
<img src="hero-1200.jpg"
     srcset="hero-480.webp 480w, hero-800.webp 800w, hero-1200.webp 1200w"
     sizes="100vw"
     width="1200" height="600"
     alt="Students coding at a workshop in Yaba"
     fetchpriority="high">

<!-- Further down the page -->
<img src="team.jpg" width="800" height="500" alt="…" loading="lazy" decoding="async">
```

| Habit | What it does |
|---|---|
| `width` + `height` attributes | The browser saves the right-shaped space → **no jumping** (CSS `height: auto` keeps it flexible) |
| `srcset` + `sizes`, or `<picture>` | Phones don't download desktop-sized files |
| WebP or AVIF, with a backup | Usually much smaller than JPEG or PNG at about the same quality |
| `loading="lazy"` | Waits to load off-screen pictures until you scroll near them |
| `fetchpriority="high"` on the LCP picture | Moves it up the download queue |
| `decoding="async"` | A hint to unpack the picture without holding anything up |
| Compress | Squoosh, ImageOptim, build tools |

> ❗ **Exception — never lazy-load the main (LCP) picture.** `loading="lazy"` on it makes the browser wait until the layout shows it's on screen. That often adds seconds. Only lazy-load things further down. Same trap: a main picture set as a CSS `background-image`, or added by JavaScript, is **hidden from the browser's early look-ahead** (the preload scanner). Use a real `<img>` in the HTML, or preload it.

## 4. Priority hints: `fetchpriority`

Values: `high`, `low`, `auto` (the normal one). Works on `<img>`, `<link>`, `<script>`, `<iframe>` and `fetch()`.

```html
<img src="hero.jpg" fetchpriority="high" alt="…" width="1200" height="600">
<img src="carousel-slide-3.jpg" fetchpriority="low" alt="…" width="800" height="400">
<script src="analytics.js" async fetchpriority="low"></script>
```

> 🔍 **Don't mix up — a hint isn't an order.** `fetchpriority` moves a file up or down *compared with other files*. It can't make the browser download something before it has found it. And if everything is `high`, nothing is. Use it on one or two files. Works everywhere since 2024.

## 5. Resource hints — getting things ready early

```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="dns-prefetch" href="https://cdn.example.com">
<link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/img/hero.webp" as="image" fetchpriority="high">
<link rel="modulepreload" href="/js/app.js">
<link rel="prefetch" href="/checkout.html">
```

| Hint | What it does | Use it when |
|---|---|---|
| `preconnect` | Opens a full connection to another site now (DNS + TCP + TLS) | An important other site (fonts, picture CDN). Keep it to 2–4. |
| `dns-prefetch` | Only looks up the address (DNS) | A cheap backup, or less important sites |
| `preload` | Downloads one file now, high priority, for **this** page | Important files the browser finds late: fonts named in CSS, a main picture set in CSS |
| `modulepreload` | Downloads and reads a JavaScript module and what it needs | Important modules |
| `prefetch` | Downloads at low priority for a page you'll **probably visit next** | A very likely next page |

> ⚠️ **Exceptions:**
> - `preload` **needs `as`** (without it, the file is downloaded twice or ignored). And **fonts need `crossorigin`**, even from your own site. Fonts are always fetched with CORS, so without it the preloaded copy is wasted and the font downloads again.
> - If a preloaded file isn't used within a few seconds, the console shows a warning. Preloading unimportant files steals speed from important ones.
> - `preconnect` to a site you then don't use wastes a connection.

### Speculation rules (Chrome and Edge)

```html
<script type="speculationrules">
{ "prerender": [{ "where": { "href_matches": "/products/*" }, "eagerness": "moderate" }] }
</script>
```

This fetches, or fully builds in the background, the pages people will probably visit next, so they open almost instantly. Only Chrome and Edge do this today. Other browsers ignore it, so it's safe to add. Don't prerender pages that *do* something (log out, add to cart).

## 6. CSS, fonts and scripts

| File type | Good habits |
|---|---|
| CSS | One or a few separate files, minified. Load less-important CSS later using `media`. Optional: put a small amount of urgent CSS right in the page |
| Fonts | WOFF2 only; `font-display: swap` (or `optional`); only the letters you need (subset); preload the one or two used at the top; few families and weights; think about system fonts |
| Scripts | `defer` as the normal choice; `async` for stand-alone scripts from other sites; remove JavaScript you don't use; split big bundles |
| Other people's scripts | Every analytics, chat or ad script costs speed. Load it after people interact, or show a stand-in (a facade, Lesson 7) |
| `@import` in CSS | Avoid — files then download one after another |

## 7. Iframes and embeds

```html
<iframe src="https://www.youtube-nocookie.com/embed/VIDEO_ID" title="…" width="560" height="315" loading="lazy" allowfullscreen></iframe>
```

Use `loading="lazy"` on iframes further down the page, and `width`/`height` so nothing jumps. For heavy embeds, use a click-to-load stand-in (a thumbnail link that turns into the iframe when clicked).

## 8. Page and network basics

- **Keep the DOM small.** Deep nesting and thousands of elements slow down CSS, layout and JavaScript. Using the right tags usually means fewer wrapper `div`s.
- **Compression.** Brotli or gzip on the server (HTML, CSS, JS, SVG). Free hosts do this for you.
- **Caching.** Tell browsers to keep versioned files for a long time (`app.3f9a1c.js`, using `Cache-Control`). Keep HTML short or `no-cache`.
- **HTTP/2 or HTTP/3.** Modern hosts switch these on. They make lots of small files cheaper.
- **Back/forward cache (bfcache).** Makes the Back button instant. Avoid `unload` event listeners, and don't use `Cache-Control: no-store` on pages that don't need it.

## 9. Measuring

| Kind | Tool | What it tells you |
|---|---|---|
| **Real visitors** (field) | PageSpeed Insights (Chrome's real-user data, called CrUX), the Core Web Vitals report in Search Console, the `web-vitals` JavaScript library | What people really experience — this is what counts |
| **Test runs** (lab) | Lighthouse (in DevTools), the lab part of PageSpeed Insights, WebPageTest | Repeatable checks, with suggestions |
| **Digging in** | DevTools Network (slow it down to "Slow 4G"), the Performance panel, Coverage | Where the time goes |

> 📝 A Lighthouse score of 100 on your fast laptop doesn't mean visitors are happy. Slow down the CPU and network in DevTools, and test on a real cheap phone if you can.

---

## Mistakes people make

- Pictures without `width` and `height`.
- `loading="lazy"` on the main picture.
- Preloading everything.
- Preloading fonts without `crossorigin`.
- Normal (blocking) scripts in `<head>`.
- Five analytics and chat scripts on a simple business site.
- Only testing on a computer with fast internet.

## Quick quiz

<details>
<summary>1. What are the "good" targets for LCP, INP and CLS?</summary>

LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1, at the 75th percentile.
</details>

<details>
<summary>2. Which attributes on a main <code>&lt;img&gt;</code> help LCP and CLS, and which one hurts?</summary>

`fetchpriority="high"` (helps LCP) and `width`/`height` (help CLS). `loading="lazy"` hurts.
</details>

<details>
<summary>3. Your preloaded font downloads twice. Why?</summary>

The preload has no `crossorigin`, so it doesn't match the way fonts are really fetched (with CORS).
</details>

<details>
<summary>4. What's the difference between <code>preload</code> and <code>prefetch</code>?</summary>

`preload`: needed for this page, now, high priority. `prefetch`: probably needed for the next page, low priority.
</details>

## Practice

- 💻 Example: [performance.html](examples/performance.html)
- ✏️ [Drills for this lesson](../../exercises/drills/20-performance.md)
- 🔧 Fix this: [10-security-performance.broken.html](../../exercises/debug/10-security-performance.broken.html)

## Read more

| Where | What you get |
|---|---|
| web.dev | [Web Vitals](https://web.dev/articles/vitals) · [Optimize LCP](https://web.dev/articles/optimize-lcp) · [Optimize CLS](https://web.dev/articles/optimize-cls) · [Optimize INP](https://web.dev/articles/optimize-inp) · [Fetch Priority](https://web.dev/articles/fetch-priority) — the main source on Core Web Vitals, from the Chrome team |
| MDN | [Web performance](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance) · [rel=preload](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/preload) · [Critical rendering path](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Critical_rendering_path) — background that isn't tied to one browser |
| The Odin Project | [Responsive images](https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-responsive-images) — sending the right picture to each screen, in practice |
| Tools | [PageSpeed Insights](https://pagespeed.web.dev/) · [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview) — real-visitor data plus test runs |

**Back to:** [the easy lesson](README.md) · **Next easy lesson:** [Lesson 21 · Finding and fixing mistakes](../21-validation-debugging-and-tooling/README.md)
