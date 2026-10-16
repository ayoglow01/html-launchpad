# Lesson 13 · The head, Google and sharing

⏱ 40 minutes · 🧰 You need: Lesson 12

## In one sentence

The `<head>` holds hidden information that controls your **browser tab**, your **Google result**, and your **WhatsApp/LinkedIn preview**.

## A good head, line by line

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Fresh bread in Kano — Sahara Bakery</title>
  <meta name="description" content="Fresh bread, cakes and pastries baked every morning in Kano.">
  <link rel="icon" href="favicon.ico">
  <link rel="stylesheet" href="styles.css">
</head>
```

| Line | What it controls |
|---|---|
| `title` | The browser tab **and** the blue headline on Google |
| `description` | The grey text under it on Google (usually) |
| `icon` | The tiny picture in the tab (favicon) |
| `stylesheet` | Your CSS (Lesson 14) |

## Write a good title

- **Different on every page.**
- Most specific part first, site name last.

```html
❌ <title>Home</title>
✅ <title>Fresh bread in Kano — Sahara Bakery</title>
```

## SEO in plain words 🔎

**SEO** (search engine optimisation) means helping Google understand and show your page. HTML helps by:

- A clear `title` and `description`.
- One `<h1>` and headings in order.
- Layout tags like `<main>` and `<article>`.
- Good link words (not "click here").
- `alt` on images.
- A fast page that works on phones.

That's most of it. Good content matters most of all.

## Nice previews on WhatsApp, LinkedIn, X

When someone shares your link, these tags build the preview card:

```html
<meta property="og:title" content="Sahara Bakery — Fresh bread in Kano">
<meta property="og:description" content="Baked every morning.">
<meta property="og:image" content="https://sahara-bakery.example/share.jpg">
<meta property="og:url" content="https://sahara-bakery.example/">
<meta name="twitter:card" content="summary_large_image">
```

- The image link must be the **full address** (starting `https://`).
- Best image size: **1200 × 630** pixels.

## Hide a page from Google

```html
<meta name="robots" content="noindex">
```

## ⚠️ Careful

- **Never block zooming** in the viewport (`user-scalable=no`). People with poor eyesight need to zoom.
- `<meta name="keywords">` is **ignored** by Google. Skip it.
- Open Graph tags use **`property`**, not `name`.

## ✅ Remember

- Every page: charset, viewport, a unique title, a description.
- Title = specific first, brand last.
- `og:` tags make share previews; image needs the full `https://` address.

## 🎯 Try it

1. Write a title and description for your own page.
2. Add Open Graph tags. After you put the site online (Lesson 22), paste your link in WhatsApp and see the preview.

<details>
<summary>Check: what's wrong with <code>&lt;meta property="og:image" content="share.jpg"&gt;</code>?</summary>

It needs the full address: `https://yoursite.com/share.jpg`.
</details>

## Want more?

- 📖 The detailed version (canonical, robots.txt, structured data, manifest): [deep-dive.md](deep-dive.md)
- 📋 Copy-ready head: [professional-head.html](../../assets/templates/professional-head.html)
- ✏️ Practice: [drills](../../exercises/drills/13-head-metadata-seo.md) · [fix a broken head](../../exercises/debug/09-head-seo.broken.html)

➡️ **Next:** [Lesson 14 · Adding CSS and JavaScript](../14-html-with-css-and-javascript/README.md)
