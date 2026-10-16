# Lesson 13 · The head, Google and sharing — the full version

📘 **This is the full version.** New to this? Read the [easy lesson](README.md) first, then come back for the details.

⏱ 3–4 hours · 🔨 Builder · 🧰 You need: Lessons 1–12

Nothing in `<head>` shows on the page. But it decides a lot: how letters are stored, how the page fits on phones, the name in the tab, where you appear on Google, what the preview looks like on WhatsApp and LinkedIn, and whether people can install your site like an app.

## By the end you can

- Name every tag allowed in `<head>` and say what it's for.
- Write titles and descriptions that work in tabs and on Google.
- Keep pages out of Google correctly — and avoid the robots.txt trap.
- Add the "preferred address", other-language versions, and structured data.
- Add the tags that make nice previews on WhatsApp, LinkedIn and X.
- Add site icons and an app manifest.

---

## 1. What can go in `<head>`

| Tag | What it's for |
|---|---|
| `<title>` | The page's name. **Exactly one.** |
| `<meta>` | Information about the page that has no tag of its own |
| `<link>` | Connections to other files (stylesheets, icons, preferred address, manifest…) |
| `<style>` | CSS written right here (Lesson 14) |
| `<script>` | JavaScript, or blocks of data like JSON-LD |
| `<base>` | The starting point for every short path on the page (section 9) |
| `<noscript>` | Inside `<head>`, it can only hold `link`, `style` and `meta` |
| `<template>` | Allowed, but rarely used here |

**An order that works:** `meta charset` first (inside the first 1024 bytes) → viewport → `title` → description and other meta → preferred address and language links → icons and manifest → sharing tags → CSS → scripts (with `defer`).

## 2. The title

```html
<title>HTML Forms Course — html-cracker</title>
```

It shows in: browser tabs, bookmarks, history, the first thing a screen reader says, and usually the blue headline on Google.

- **Different on every page.** The page's topic first, the site name last: `Page topic — Site`.
- Google cuts long titles short (about 50–60 characters is a common guide), and **may rewrite** titles it finds unhelpful.

## 3. The `<meta>` tags that matter

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Free, structured HTML5 course: semantics, forms, accessibility, SEO, and deployment.">
```

| `name` | What to write | Notes |
|---|---|---|
| `viewport` | `width=device-width, initial-scale=1` | Never stop people zooming |
| `description` | One or two sentences about **this** page | Google **may** show it under your title — or write its own from the page |
| `robots` | `noindex`, `nofollow`, `noarchive`, `nosnippet`, `max-image-preview:large`… | Only add it to restrict something. Without it, Google lists the page and follows its links |
| `theme-color` | A colour for the browser's bars | Can change with `media="(prefers-color-scheme: dark)"` |
| `color-scheme` | `light dark` | Says your page has a light and a dark look, so form fields and scrollbars match |
| `referrer` | `strict-origin-when-cross-origin` (the normal setting), `no-referrer`… | How much to tell other sites about where visitors came from |
| `author`, `generator`, `application-name` | What the names say | Optional |

> ⚠️ **Exception — `meta keywords`.** Google has ignored `<meta name="keywords">` for ranking since 2009. Other big search engines don't use it either. All it does is hand your competitors your keyword list. Leave it out.

### `http-equiv`

`http-equiv` pretends to be a message from the server (an **HTTP header**).

| Use | Verdict |
|---|---|
| `<meta http-equiv="Content-Security-Policy" content="…">` | Useful when you can't change the server's headers (Lesson 19). Some rules don't work this way |
| `<meta http-equiv="refresh" content="5; url=/new">` | ❌ Avoid. A page that jumps by itself is confusing, and timed jumps fail the accessibility rules (WCAG 2.2.1). Ask the server to redirect (a 301) |
| `<meta http-equiv="X-UA-Compatible" content="IE=edge">` | ❌ Out of date. Only Internet Explorer cared |
| `<meta http-equiv="Content-Type" content="text/html; charset=utf-8">` | The old way. Use `<meta charset>` |

## 4. SEO basics (the HTML part)

**SEO** (search engine optimisation) means helping search engines find your pages, understand them, store them and show them. HTML is only one part. Good writing, links from other sites, speed and working well on phones matter as much or more.

| HTML habit | Why it helps |
|---|---|
| A clear, different `<title>` on each page | It's the headline on Google |
| A useful `meta description` | Often shown under the headline |
| One clear `<h1>`, headings in order | Shows the topic and structure |
| Layout tags (`main`, `article`, `nav`) | Separates the main content from the bits on every page |
| Link text that says where it goes | Tells Google about the other page |
| Real `<a href>` links in menus | Google's robot follows `href`s, not `onclick` |
| `alt` on pictures that give information | Image search, and context |
| `lang` | Shows the page to the right language |
| Fast pages that work on phones | Both affect ranking (Lesson 20) |
| Preferred address, structured data | Sections 5 and 6 |

### robots.txt or `noindex`? The classic trap

| | `robots.txt` (`Disallow: /private/`) | `<meta name="robots" content="noindex">` |
|---|---|---|
| Controls | **Visiting** (whether the robot fetches the page) | **Listing** (whether it shows in results) |
| Lives in | One file in the site's top folder | Each page's `<head>` (or an `X-Robots-Tag` header) |
| Keeps a page off Google? | **No.** A blocked page can still be listed (without its content) if other sites link to it | Yes, once the robot has visited |

> ❗ **Don't use both on the same page.** If robots.txt blocks a page, the robot never visits it, so it never sees the `noindex`. To take a page off Google, **let the robot visit** and use `noindex`. Neither one hides anything from people — use a login for private pages.

## 5. The preferred address, and other languages

The same page often has several addresses (`?utm_source=…`, `http` vs `https`, with or without `www`, with or without a `/` at the end). A **canonical** link says which address is the real one:

```html
<link rel="canonical" href="https://example.com/courses/html/">
```

- Use a **full** address.
- Each page points to itself, unless it's a copy of another page.

> ⚠️ **Exception:** Canonical is a **strong hint, not an order**. Google also looks at redirects, sitemaps, your own links and HTTPS. If a page's canonical points to a page about something else, Google will usually ignore it.

**Other-language versions** (`hreflang`):

```html
<link rel="alternate" hreflang="en" href="https://example.com/en/">
<link rel="alternate" hreflang="fr" href="https://example.com/fr/">
<link rel="alternate" hreflang="x-default" href="https://example.com/">
```

Every version must list every version, including itself.

## 6. Structured data

**Structured data** describes your page in words computers understand, using a shared dictionary called **schema.org**. Google may use it for **rich results** — star ratings, FAQs, events, recipes and breadcrumbs in search results.

**JSON-LD** (Google's favourite) is a block of data kept separate from your HTML:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "html-cracker",
  "url": "https://example.com/",
  "logo": "https://example.com/assets/images/logo.png"
}
</script>
```

**Microdata** is the other way: you add attributes to the HTML you already have:

```html
<article itemscope itemtype="https://schema.org/Recipe">
  <h1 itemprop="name">Jollof rice</h1>
  <time itemprop="totalTime" datetime="PT1H5M">1 hour 5 minutes</time>
</article>
```

> 📝 Structured data must describe things **people can see on the page**. It makes you *able* to get rich results — it doesn't promise them. Check yours with Google's Rich Results Test.

## 7. Nice previews on WhatsApp, LinkedIn and X

When someone shares your link on WhatsApp, LinkedIn, Facebook, Slack or X, a robot visits your page and reads these tags to build the preview card. The main set is called **Open Graph**.

```html
<!-- Open Graph (uses property=) -->
<meta property="og:title" content="html-cracker — Learn HTML5 properly">
<meta property="og:description" content="Free course from first tag to production-ready pages.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://example.com/">
<meta property="og:image" content="https://example.com/assets/images/og-image.jpg">
<meta property="og:image:alt" content="html-cracker logo on an orange gradient">
<meta property="og:site_name" content="html-cracker">
<meta property="og:locale" content="en_GB">

<!-- X/Twitter (uses name=) -->
<meta name="twitter:card" content="summary_large_image">
```

| Rule | Detail |
|---|---|
| Open Graph says you must have | `og:title`, `og:type`, `og:image`, `og:url` |
| `og:image` | A **full address**. 1200×630 pixels is the usual size for big previews |
| X/Twitter | Uses `name="twitter:…"`. If those are missing, it uses the `og:` ones instead — so usually you only need `twitter:card` |
| Saved previews | Apps save previews. After a change, use the app's preview-checking tool to refresh it |

> 🔍 **Don't mix up:** Open Graph uses `property`, not `name`. `<meta name="og:title">` is a common mistake — some apps forgive it, others ignore it. Also, `og:` tags come from the Open Graph rules, not from HTML itself.

## 8. Site icons and the app manifest

```html
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">   <!-- 180×180 PNG -->
<link rel="manifest" href="/manifest.webmanifest">
```

| File | What it's for |
|---|---|
| `favicon.ico` | Tabs and bookmarks. Browsers look for `/favicon.ico` in your top folder **by themselves**, even with no `<link>` |
| `favicon.svg` | Sharp at every size; can switch colours in dark mode with CSS inside the SVG. Keep an ICO or PNG backup for browsers that are slow to support SVG icons |
| `apple-touch-icon.png` | The iPhone home-screen icon (180×180, no see-through parts) |
| `manifest.webmanifest` | A small JSON file that lets people install your site like an app: its name, icons (192 and 512 px), colours, start page and how it opens |

```json
{
  "name": "html-cracker",
  "short_name": "html-cracker",
  "start_url": "./",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#e44d26",
  "icons": [
    { "src": "icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

> 📝 Paths inside a manifest start from **where the manifest file is**, not from the page.

## 9. `<base>`

```html
<base href="https://example.com/docs/" target="_blank">
```

Changes the starting point for **every** short path on the page (and can set a default `target`). Only one is allowed, and it must come before anything that uses an address.

> ❗ **Exception — `<base>` changes `#` links too.** With the `<base>` above, `<a href="#intro">` goes to `https://example.com/docs/#intro` — a different page, unless you're already on `/docs/`. One wrong `<base>` breaks every short link at once. Don't use it unless you really need it.

## 10. `link rel` values at a glance

| `rel` | What for | Lesson |
|---|---|---|
| `stylesheet` | Load CSS | 14 |
| `icon`, `apple-touch-icon` | Icons | 13 |
| `manifest` | App manifest | 13 |
| `canonical` | Preferred address | 13 |
| `alternate` | Other languages (`hreflang`), news feeds (`type="application/rss+xml"`) | 13 |
| `preload`, `modulepreload` | Fetch important files early | 20 |
| `preconnect`, `dns-prefetch` | Get a connection ready early | 20 |
| `prefetch` | Fetch things for the page people will probably visit next | 20 |
| `author`, `license`, `help`, `privacy-policy`, `terms-of-service` | Say what the linked page is | 5 |

A full professional `<head>`, with notes: [assets/templates/professional-head.html](../../assets/templates/professional-head.html)

---

## Mistakes people make

- The same `<title>` on every page.
- `meta keywords`.
- `robots.txt` blocking a page that has `noindex`.
- Short paths in `og:image` or `canonical`.
- `<meta name="og:…">` instead of `property`.
- `maximum-scale=1` in the viewport.
- Adding `<base>` "just in case".
- Copying a huge `<head>` into every project without knowing what each line does.

## Quick quiz

<details>
<summary>1. How do you reliably keep a public page off Google?</summary>

Let the robot visit, and add `<meta name="robots" content="noindex">` (or the `X-Robots-Tag` header). Don't block it in robots.txt, or the `noindex` is never seen.
</details>

<details>
<summary>2. Why might Google show different words from your meta description?</summary>

Google writes snippets to match each search, and may prefer text from your page that fits better.
</details>

<details>
<summary>3. Which attribute do Open Graph tags use, and which do X tags use?</summary>

Open Graph: `property`. X/Twitter: `name`.
</details>

<details>
<summary>4. Your WhatsApp preview has no picture. Two likely reasons?</summary>

`og:image` is a short path (it must be a full address), or WhatsApp saved an old preview. Also check the picture is public and not blocked.
</details>

<details>
<summary>5. With <code>&lt;base href="/app/"&gt;</code>, where does <code>&lt;a href="#top"&gt;</code> on <code>/blog/post.html</code> go?</summary>

To `/app/#top` — a different page.
</details>

## Practice

- 📄 Starter: [professional-head.html](../../assets/templates/professional-head.html)
- ✏️ [Drills for this lesson](../../exercises/drills/13-head-metadata-seo.md)
- 🔧 Fix this: [09-head-seo.broken.html](../../exercises/debug/09-head-seo.broken.html)

## Read more

| Where | What you get |
|---|---|
| MDN | [What's in the head? Web page metadata](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata) · [meta name values](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name) · [link types (rel)](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel) — the main explanation |
| Google Search Central | [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) · [Canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) · [Structured data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data) — what Google really does |
| freeCodeCamp | [Responsive Web Design](https://www.freecodecamp.org/learn/responsive-web-design-v9/) — *Understanding How HTML Affects SEO*, short with a quiz |
| W3Schools | [Head](https://www.w3schools.com/html/html_head.asp) · [Page title](https://www.w3schools.com/html/html_page_title.asp) · [Favicon](https://www.w3schools.com/html/html_favicon.asp) · [meta](https://www.w3schools.com/tags/tag_meta.asp) — quick look-ups |
| The official rules | [Open Graph](https://ogp.me/) · [X cards markup](https://developer.x.com/en/docs/x-for-websites/cards/overview/markup) · [MDN: Web app manifest](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest) · [schema.org](https://schema.org/) |

**Back to:** [the easy lesson](README.md) · **Next easy lesson:** [Lesson 14 · Adding CSS and JavaScript](../14-html-with-css-and-javascript/README.md)
