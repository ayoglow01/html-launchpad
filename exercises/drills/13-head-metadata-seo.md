# Practice · Lesson 13 · The head, Google and sharing

📗 [Easy lesson](../../curriculum/13-head-metadata-seo-and-social/README.md) · 📘 [Full version](../../curriculum/13-head-metadata-seo-and-social/deep-dive.md)

💡 Try each task **before** opening the answer. If a task uses something new, you'll find it in the full version.

### D1 · Professional head
Write a `<head>` for `https://example.com/courses/html/` titled "HTML Course — html-cracker", with description, canonical, icons, and Open Graph.

<details>
<summary>Answer</summary>

See [assets/templates/professional-head.html](../../assets/templates/professional-head.html). Essentials: charset, viewport, title, description, `<link rel="canonical" href="https://example.com/courses/html/">`, icon links, `og:title`, `og:description`, `og:type`, `og:url`, `og:image` (absolute), `twitter:card`.
</details>

### D2 · Titles
Improve: `<title>Home</title>` on a Kano bakery's site.

<details>
<summary>Answer</summary>

`<title>Fresh bread and cakes in Kano — Sahara Bakery</title>` — specific first, brand last, unique per page.
</details>

### D3 · Noindex trap
A staging site must not appear in search. Someone adds `Disallow: /` to robots.txt and `noindex` meta. Problem?

<details>
<summary>Answer</summary>

Crawlers can't fetch pages to see `noindex`, so URLs may still be indexed from links. Better: password-protect staging; or allow crawling with `noindex`.
</details>

### D4 · OG attribute
Fix: `<meta name="og:image" content="/img/share.jpg">`

<details>
<summary>Answer</summary>

`<meta property="og:image" content="https://example.com/img/share.jpg">` — `property`, absolute URL.
</details>

### D5 · Canonical
Pages `/shoes?utm_source=ig` and `/shoes` show the same content. What goes in both?

<details>
<summary>Answer</summary>

`<link rel="canonical" href="https://example.com/shoes">`.
</details>

### D6 · Viewport
What's wrong with `content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"`?

<details>
<summary>Answer</summary>

It blocks zooming, failing users with low vision (WCAG 1.4.4). Use `width=device-width, initial-scale=1`.
</details>

### D7 · JSON-LD
Organization structured data with name and URL.

<details>
<summary>Answer</summary>

```html
<script type="application/ld+json">
{ "@context": "https://schema.org", "@type": "Organization", "name": "Sahara Bakery", "url": "https://example.com/" }
</script>
```
</details>

### D8 · base trap
With `<base href="/docs/">`, where does `<a href="#faq">` on `/blog/post.html` go?

<details>
<summary>Answer</summary>

`/docs/#faq`.
</details>

### D9 · Translations
English and Yoruba versions at `/en/` and `/yo/`. Write the hreflang links.

<details>
<summary>Answer</summary>

```html
<link rel="alternate" hreflang="en" href="https://example.com/en/">
<link rel="alternate" hreflang="yo" href="https://example.com/yo/">
<link rel="alternate" hreflang="x-default" href="https://example.com/en/">
```
On **both** pages.
</details>
