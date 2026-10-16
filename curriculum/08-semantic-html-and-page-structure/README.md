# Lesson 8 · Page layout tags

⏱ 30 minutes · 🧰 You need: Lesson 7

## In one sentence

Use tags that **name the parts of your page** — header, menu, main content, footer — instead of plain boxes.

## Picture a newspaper 📰

Every newspaper has the same parts: a top banner, a section menu, the main stories, a side column, and the small print at the bottom. Web pages are the same. HTML has a tag for each part:

```
┌──────────────────────────────┐
│ <header>  logo + <nav> menu  │
├────────────────────┬─────────┤
│ <main>             │ <aside> │
│   <article>        │ side    │
│   <section>        │ stuff   │
├────────────────────┴─────────┤
│ <footer>  contact, copyright │
└──────────────────────────────┘
```

## The tags

| Tag | It's for… |
|---|---|
| `<header>` | The top part: logo, site name, maybe the menu |
| `<nav>` | The main menu of links |
| `<main>` | The **main** content. **Only one per page.** |
| `<article>` | Something that makes sense on its own: a blog post, a news story, a comment |
| `<section>` | A part of the page with its own heading: "Our services", "Prices" |
| `<aside>` | Extra stuff on the side: related links, tips |
| `<footer>` | The bottom: contact, copyright |

## A whole page

```html
<body>
  <header>
    <p>Lagos Daily</p>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="news.html">News</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <h1>Today's news</h1>
    <article>
      <h2>New bridge opens</h2>
      <p>The bridge opened this morning…</p>
    </article>
  </main>

  <aside>
    <h2>Most read</h2>
  </aside>

  <footer>
    <p><small>&copy; 2026 Lagos Daily</small></p>
  </footer>
</body>
```

## Why not just use `<div>` for everything?

A `<div>` means nothing. `<nav>` means "this is the menu". This helps:
- **Blind users** — screen readers can jump straight to `<main>` or `<nav>`.
- **Google** — it understands which part is the real content.
- **You** — your code is easier to read later.

```html
❌ <div class="header"> <div class="menu"> <div class="content">
✅ <header>             <nav>              <main>
```

## article or section?

Ask: *"Could this be shared on its own and still make sense?"*
- Yes → `<article>` (a blog post, a product, a comment)
- No, it's just a part of something bigger → `<section>`

## The "no CSS" test 🧪

Imagine all colours and layout disappear. Does your page still read like a tidy document — headings in order, lists as lists? If yes, your HTML is doing its job.

## ⚠️ Careful

- **Only one `<main>`** on a page.
- **Two menus?** Give them names so people can tell them apart: `<nav aria-label="Main">` and `<nav aria-label="Footer">`.
- **Don't restart at `<h1>` in every section.** Keep normal heading order.

## ✅ Remember

- `header`, `nav`, `main`, `article`, `section`, `aside`, `footer`.
- One `main` per page.
- Use `div` only when no other tag fits.

## 🎯 Try it

Take your page from earlier lessons and wrap its parts in `header`, `main`, and `footer`. Then do the "no CSS" test.

<details>
<summary>Check: is a news story an article or a section?</summary>

An `<article>` — it makes sense on its own.
</details>

## Want more?

- 📖 The detailed version: [deep-dive.md](deep-dive.md)
- 💻 Example: [page-structure.html](examples/page-structure.html)
- 🌐 The Odin Project: [Semantic HTML](https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-semantic-html)
- ✏️ Practice: [drills](../../exercises/drills/08-semantic-html.md) · [news page challenge](../../exercises/challenges/README.md#c3--structure-a-news-page)

➡️ **Next:** [Lesson 9 · Tables](../09-tables/README.md)
