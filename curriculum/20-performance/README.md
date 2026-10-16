# Lesson 20 · Fast pages

⏱ 30 minutes · 🧰 You need: Lesson 19

## In one sentence

People leave slow pages, so make files **small**, load **only what's needed**, and tell the browser **what matters most**.

## Why it matters

Many people browse on phones with slow or expensive data. A heavy page wastes their money and their time. ⏳

## 1. Images are usually the heaviest part 🖼️

✅ Make them smaller before uploading (squoosh.app is free).
✅ Use modern formats: **WebP** or **AVIF** instead of huge PNG/JPG.
✅ Always write `width` and `height` so the page doesn't jump while loading:

```html
<img src="shop.webp" alt="Our shop in Yaba" width="800" height="500">
```

✅ Pictures far down the page? Load them only when the user scrolls near:

```html
<img src="team.webp" alt="Our team" width="600" height="400" loading="lazy">
```

## 2. The most important picture: load it first 🥇

The big picture at the top (the "hero"):

```html
<img src="hero.webp" alt="Fresh bread on a table" width="1200" height="600" fetchpriority="high">
```

⚠️ **Don't** put `loading="lazy"` on it. That makes it slower!

## 3. Scripts: don't block the page

```html
<script src="app.js" defer></script>
```

`defer` lets the page show first. (You learned this in Lesson 14.)

## 4. Videos

```html
<video controls preload="none" poster="cover.webp" width="640" height="360">…</video>
```

`preload="none"` means "don't download the video until they press play."

## 5. Less stuff = faster

- Only add libraries you really need.
- Every font, every script, every tracking tool adds weight.
- Plain HTML is the fastest thing on the web. 🚀

## How to check your speed

Open DevTools → **Lighthouse** → click **Analyze page load**. It gives you a score and tells you what to fix.

## ✅ Remember

- Small images, modern formats, always `width` + `height`.
- `loading="lazy"` for pictures lower down — never for the top picture.
- `fetchpriority="high"` for the main picture.
- `defer` on scripts.

## 🎯 Try it

Run Lighthouse on one of your pages. Fix one thing it complains about.

<details>
<summary>Quick quiz: should the logo at the top of the page use <code>loading="lazy"</code>?</summary>

No. It's visible straight away. Lazy-load only pictures further down.
</details>

## Want more?

- 📖 The detailed version (Core Web Vitals, preload, responsive images): [deep-dive.md](deep-dive.md)
- 💻 Example: [performance.html](examples/performance.html)
- 🌐 The Odin Project: [Responsive images](https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-responsive-images)
- ✏️ Practice: [drills](../../exercises/drills/20-performance.md) · [fix a slow page](../../exercises/debug/10-security-performance.broken.html)

➡️ **Next:** [Lesson 21 · Finding and fixing mistakes](../21-validation-debugging-and-tooling/README.md)
