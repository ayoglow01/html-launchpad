# Lesson 8 · Page layout tags — the full version

📘 **This is the full version.** New to this? Read the [easy lesson](README.md) first, then come back for the details.

⏱ 3–4 hours · 🌱 Beginner · 🧰 You need: Lessons 1–7

You'll hear the word **semantic** a lot. It just means *meaningful*: using tags that say what each part of the page is. That lets screen-reader users jump straight to the menu or the main content. It lets browsers offer reader mode. And it lets Google tell your article apart from your sidebar.

## By the end you can

- Build the skeleton of a page with the right layout tags, without thinking.
- Choose between `div`, `section` and `article`.
- Know which tags become **landmarks** (signposts screen readers can jump to), and when they don't.
- Build headings in a sensible order, and add a "skip to content" link.
- Use the newer `<search>` and `<hgroup>` tags correctly.

---

## 1. Why meaning matters

Look at these two:

```html
<div class="header"><div class="nav">…</div></div>
<div class="main">…</div>
<div class="footer">…</div>
```

```html
<header><nav>…</nav></header>
<main>…</main>
<footer>…</footer>
```

They can look exactly the same. Only the second one tells software what each part **is**:

| Who it helps | How |
|---|---|
| Screen-reader users | Jump to "main" or "navigation" with one key |
| Keyboard users | Skip links and browser add-ons use these signposts |
| Google | Tells the main content apart from the bits on every page |
| Browsers | Reader mode, translation, summaries |
| You | Code that's easier to read, with fewer classes |

**The test:** switch off all the CSS. Does the page still make sense from top to bottom?

## 2. The layout tags

| Tag | What it means | What usually goes in it |
|---|---|---|
| `<header>` | The top/intro part of the page — or of one section | Logo, site name, main menu; or a section's title and date |
| `<nav>` | A group of **important** links for getting around | Main menu, breadcrumbs, table of contents, page numbers |
| `<main>` | The **main content** of this page — the part that's different on every page | Everything that isn't repeated across the site |
| `<section>` | A **group on one topic**, normally with a heading | "Pricing", "Features", "FAQ" |
| `<article>` | Something **complete on its own**, that would make sense if shared elsewhere | A blog post, news story, product card, comment |
| `<aside>` | Something **related, but on the side** | Sidebars, pull quotes, "related posts", fact boxes |
| `<footer>` | The bottom part of the page — or of one section | Copyright, contact, links; an article's author info |
| `<address>` | Contact details for the page or article | See Lesson 3 |
| `<search>` | A part with **search or filter** controls | Site search, product filters |
| `<hgroup>` | A heading **plus** a subtitle or tagline | Title + subtitle |
| `<div>` | **No meaning** | A box for styling, when nothing else fits |

### `<search>` (works everywhere since 2023)

```html
<search>
  <form action="/search" method="get">
    <label for="q">Search the docs</label>
    <input id="q" name="q" type="search">
    <button type="submit">Search</button>
  </form>
</search>
```

It replaces the old way of writing `<form role="search">`.

### `<hgroup>`

```html
<hgroup>
  <h1>html-cracker</h1>
  <p>Learn HTML5 from novice to pro.</p>
</hgroup>
```

Today's rule: **one** heading (`h1`–`h6`) plus any number of `<p>`. The `<p>` is the subtitle. It doesn't count as a heading.

> ⚠️ **Exception:** Old tutorials put several headings in an `<hgroup>` (`h1` + `h2`). That rule changed in 2022. A subtitle in an `<h2>` messes up your heading order. Use `<p>`.

## 3. Landmarks: which tags become signposts

Screen readers treat some tags as **landmarks** — signposts users can jump between. Some only count in certain situations:

| Tag | Signpost name | When |
|---|---|---|
| `<header>` | `banner` | **Only** when it's not inside `article`, `aside`, `main`, `nav` or `section` |
| `<footer>` | `contentinfo` | Same rule as `header` |
| `<nav>` | `navigation` | Always |
| `<main>` | `main` | Always |
| `<aside>` | `complementary` | Always (but some screen readers ignore asides inside sections unless they have a name) |
| `<section>` | `region` | **Only if it has a name** (`aria-labelledby` or `aria-label`) |
| `<form>` | `form` | **Only if it has a name** |
| `<search>` | `search` | Always |
| `<article>` | `article` | Not a landmark, but users can still jump between articles |

> ⚠️ **Exception — a header inside an article:** A `<header>` inside an `<article>` is just that article's header, **not** the page's top banner. That's correct. Use it freely.

### Giving landmarks names

If you have two landmarks of the same kind, name them so people can tell them apart:

```html
<nav aria-label="Primary">…</nav>
<nav aria-label="Breadcrumb">…</nav>

<section aria-labelledby="pricing-heading">
  <h2 id="pricing-heading">Pricing</h2>
</section>
```

Don't repeat the kind in the name. Write `aria-label="Primary"`, not `"Primary navigation"` — the screen reader already says "navigation".

## 4. Rules for `<main>`

- **One visible `<main>` per page.** (You can have more only if all but one are hidden with the `hidden` attribute.)
- It must **not** be inside `article`, `aside`, `header`, `footer` or `nav`.
- Don't put the things repeated on every page (site header, main menu, footer) inside it.

## 5. `div`, `section` or `article`?

Ask these questions in order:

```
Would it make sense on its own — shared, or reused somewhere else?
 ├─ Yes → <article>
 └─ No → Is it a group on one topic that deserves a heading
          (something you'd list in a table of contents)?
          ├─ Yes → <section>
          └─ No → Is it only there for styling or JavaScript?
                   └─ Yes → <div>
```

| | `<div>` | `<section>` | `<article>` |
|---|---|---|---|
| Meaning | None | A group on one topic | Something complete on its own |
| Needs a heading? | No | Usually | Usually |
| Example | A box around a grid of cards | "Our services" | One blog post, one product card, one comment |

> ⚠️ **Exceptions and nesting:**
> - An `<article>` can hold `<section>`s (the parts of a long post). A `<section>` can hold `<article>`s (a "Latest posts" section full of post cards). Both are right.
> - Comments on a blog post are `<article>`s **inside** the post's `<article>`.
> - Don't make every box a `<section>`. A `<section>` with no heading usually means you wanted a `<div>`.

## 6. Headings and the page outline

Your heading levels make an **outline** of the page, like a table of contents. Screen-reader users skim pages this way.

```
h1  Ada Okafor — Frontend Engineer
  h2  About
  h2  Projects
    h3  Quotely
    h3  Testify
  h2  Contact
```

- One `h1` for the page's topic.
- Don't skip levels going down.
- Layout tags **don't change** heading levels. An `<h1>` inside a `<section>` is still a level-1 heading.

> ❗ The old "HTML5 outline" idea — where headings inside sections would automatically become smaller levels — never worked in any browser, and was taken out of HTML. **Your heading levels are the only outline there is.**

## 7. "Skip to content" links

Keyboard users shouldn't have to press Tab through 30 menu links on every page.

```html
<body>
  <a href="#main" class="skip-link">Skip to main content</a>
  <header>…</header>
  <main id="main" tabindex="-1">…</main>
</body>
```

- Put it **first** inside `<body>`.
- CSS usually hides it off-screen until someone Tabs to it. **Don't** use `display: none` or `hidden` — then nobody can Tab to it at all.
- `tabindex="-1"` on `<main>` makes sure the keyboard position really moves there, in every browser.

## 8. A standard page skeleton

```html
<body>
  <a href="#main" class="skip-link">Skip to main content</a>

  <header>
    <a href="index.html"><img src="logo.svg" alt="Acme home" width="120" height="40"></a>
    <nav aria-label="Primary">
      <ul>
        <li><a href="index.html" aria-current="page">Home</a></li>
        <li><a href="about.html">About</a></li>
      </ul>
    </nav>
    <search>…</search>
  </header>

  <main id="main" tabindex="-1">
    <h1>Page topic</h1>

    <section aria-labelledby="latest">
      <h2 id="latest">Latest posts</h2>
      <article>
        <header>
          <h3><a href="post-1.html">Post title</a></h3>
          <p>By Ada · <time datetime="2026-10-14">14 Oct 2026</time></p>
        </header>
        <p>Teaser…</p>
      </article>
    </section>

    <aside aria-labelledby="related">
      <h2 id="related">Related reading</h2>
      …
    </aside>
  </main>

  <footer>
    <address>…</address>
    <p><small>&copy; 2026 Acme</small></p>
  </footer>
</body>
```

See it working: [examples/page-structure.html](examples/page-structure.html)

> 📝 Should `<aside>` go inside or outside `<main>`? It depends what it's about. About this page's content → inside. The same on every page (like a newsletter box) → outside.

---

## Mistakes people make

- "Div soup": `<div><div><div>` with no layout tags at all.
- More than one `<main>`, or `<main>` inside `<article>`.
- `<section>` used as a plain box with no heading.
- `<nav>` around every group of links (footer link lists don't always need it).
- Several `<nav>`s with no names.
- Picking heading levels for their size.

## Quick quiz

<details>
<summary>1. Is a <code>&lt;header&gt;</code> inside an <code>&lt;article&gt;</code> the page's banner landmark?</summary>

No. Only a `<header>` that isn't inside `article`, `aside`, `main`, `nav` or `section` counts as the banner.
</details>

<details>
<summary>2. A shop page shows 12 product cards. Which tag for each card, and which for the box around them?</summary>

Each card: `<article>` (complete on its own). The box: a `<div>` — or a `<section>` if it has a heading like "Featured products".
</details>

<details>
<summary>3. When does a <code>&lt;section&gt;</code> become a landmark?</summary>

When it has a name (from `aria-labelledby` or `aria-label`). Then it counts as a `region`.
</details>

<details>
<summary>4. Why not hide a skip link with <code>display: none</code>?</summary>

Things with `display: none` can't be reached with Tab, so keyboard users could never use it.
</details>

<details>
<summary>5. What's wrong with <code>&lt;hgroup&gt;&lt;h1&gt;Title&lt;/h1&gt;&lt;h2&gt;Subtitle&lt;/h2&gt;&lt;/hgroup&gt;</code> today?</summary>

`hgroup` now takes one heading plus `<p>` tags. Write `<p>Subtitle</p>`.
</details>

## Practice

- 💻 Example: [page-structure.html](examples/page-structure.html)
- ✏️ [Drills for this lesson](../../exercises/drills/08-semantic-html.md)
- 🧩 Challenge: [Structure a news page](../../exercises/challenges/README.md#c3--structure-a-news-page)
- 📄 Ready-made starter: [assets/templates/page-skeleton.html](../../assets/templates/page-skeleton.html)

## Read more

| Where | What you get |
|---|---|
| MDN | [Structuring documents](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_documents) — the main explanation |
| MDN challenge | [Structuring a page of content](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content) — the best practice exercise |
| The Odin Project | [Semantic HTML](https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-semantic-html) — why it matters for accessibility |
| freeCodeCamp | [Responsive Web Design](https://www.freecodecamp.org/learn/responsive-web-design-v9/) — workshops and labs |
| W3Schools | [Semantic elements](https://www.w3schools.com/html/html5_semantic_elements.asp) · [Layout](https://www.w3schools.com/html/html_layout.asp) — quick reference |
| Scrimba | [Frontend Developer Career Path](https://scrimba.com/the-frontend-developer-career-path-c0j) — an interactive look at *why* |

**Back to:** [the easy lesson](README.md) · **Next easy lesson:** [Lesson 9 · Tables](../09-tables/README.md)
