# Lesson 4 · Lists — the full version

📘 **This is the full version.** New to this? Read the [easy lesson](README.md) first, then come back for the details.

⏱ 1–1.5 hours · 🌱 Beginner · 🧰 You need: Lesson 3

Lists tell people *how many* things there are, and whether the order matters. A screen reader says "list, 5 items" before it starts, so the listener knows what's coming.

## By the end you can

- Pick the right list: bullets, numbers, or terms with explanations.
- Put a list inside a list correctly.
- Use `start`, `reversed`, `type` and `value` on numbered lists.
- Know when a menu should be a list, and the Safari exception.

---

## 1. Bullet list — order doesn't matter

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

Test: could you shuffle the items and still mean the same thing? Then use `<ul>`.

## 2. Numbered list — order matters

```html
<ol>
  <li>Create the document.</li>
  <li>Validate the HTML.</li>
  <li>Deploy the website.</li>
</ol>
```

| Attribute | Goes on | What it does | Example |
|---|---|---|---|
| `start` | `ol` | Picks the first number | `<ol start="4">` → 4, 5, 6 |
| `reversed` | `ol` | Counts down (on/off attribute) | Top-10 countdowns |
| `type` | `ol` | Kind of numbering: `1`, `a`, `A`, `i`, `I` | Contract clauses: `<ol type="a">` |
| `value` | `li` | Sets this item's number. The next ones carry on from it | `<li value="10">` |

> 📝 `type` is allowed in HTML because the *kind* of numbering can matter ("see clause b"). If you only want a different look, use the CSS `list-style-type` property.

## 3. Rules for `ul` and `ol`

- Only `<li>` can go directly inside (plus `<script>` and `<template>`).
- Everything else goes **inside** an `<li>`.

| ✅ Right | ❌ Wrong |
|---|---|
| `<ul><li><a href="/">Home</a></li></ul>` | `<ul><a href="/">Home</a></ul>` |
| `<ul><li><p>Text</p></li></ul>` | `<ul><p>Text</p></ul>` |

## 4. A list inside a list

The smaller list goes **inside** the `<li>` it belongs to. Not between two `<li>`s.

```html
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </li>
  <li>Backend</li>
</ul>
```

❌ `<ul><li>Frontend</li><ul><li>HTML</li></ul></ul>` — here the inner `<ul>` sits straight inside a `<ul>`, which isn't allowed.

## 5. Description list — words and what they mean

```html
<dl>
  <dt>HTML</dt>
  <dd>Structure and meaning.</dd>

  <dt>CSS</dt>
  <dd>How it looks.</dd>

  <dt>Author</dt>
  <dt>Editor</dt>
  <dd>Ada Okafor</dd>          <!-- two terms, one description -->

  <dt>Formats</dt>
  <dd>PDF</dd>
  <dd>EPUB</dd>                <!-- one term, two descriptions -->
</dl>
```

`<dt>` is the term. `<dd>` is what it means. Good for glossaries, details like Author / Published / Tags, FAQs, and any "label: value" pairs.

**Wrapping groups in `div`.** You can wrap each `dt` + `dd` group in a `<div>`, which helps with styling. But it's all or nothing: either every group has a `div`, or none do.

```html
<dl>
  <div><dt>Status</dt><dd>Published</dd></div>
  <div><dt>Updated</dt><dd><time datetime="2026-10-14">14 Oct 2026</time></dd></div>
</dl>
```

> 🔍 **Don't mix up:** `<dl>` is **not** for conversations. Write dialogue as paragraphs. Also, older books call it a "definition list". Today it's a "description list".

## 6. `<menu>`

`<menu>` is another way to write a bullet list when the items are **things you click**, like toolbar buttons. Browsers treat it exactly like `<ul>`.

```html
<menu>
  <li><button type="button">Copy</button></li>
  <li><button type="button">Paste</button></li>
</menu>
```

## 7. Site menus as lists

```html
<nav aria-label="Primary">
  <ul>
    <li><a href="index.html" aria-current="page">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</nav>
```

A list tells screen-reader users "3 items" before they start. That's helpful in a menu.

> ⚠️ **Exception — Safari and VoiceOver.** If CSS hides the bullets (`list-style: none`), Safari may **stop telling users it's a list**. Apple did this on purpose. Lists inside `<nav>` are usually still announced. If it really matters elsewhere, add `role="list"` to the `<ul>`. This is one of the rare times when adding an ARIA role that repeats the tag's meaning makes sense.

---

## Mistakes people make

- `<li>` outside `ul`, `ol` or `menu`.
- Putting the inner list after `</li>` instead of inside it.
- Using `<ol>` for things with no order because "I want numbers".
- Fake lists: lines starting with "- " and separated by `<br>`.

## Quick quiz

<details>
<summary>1. Recipe ingredients and recipe steps — which list for each?</summary>

Ingredients: `<ul>` (order doesn't matter). Steps: `<ol>` (order matters).
</details>

<details>
<summary>2. How do you make a list count 5, 4, 3, 2, 1?</summary>

`<ol reversed>` with five items. It starts from the number of items. Or write `<ol reversed start="5">`.
</details>

<details>
<summary>3. Where does an inner <code>&lt;ul&gt;</code> go?</summary>

Inside the parent `<li>`, after that item's text.
</details>

<details>
<summary>4. Is <code>&lt;dl&gt;&lt;div&gt;&lt;dt&gt;A&lt;/dt&gt;&lt;dd&gt;B&lt;/dd&gt;&lt;/div&gt;&lt;dt&gt;C&lt;/dt&gt;&lt;dd&gt;D&lt;/dd&gt;&lt;/dl&gt;</code> allowed?</summary>

No. If one group in a `<dl>` has a `<div>`, they all need one.
</details>

## Practice

- 💻 Example: [lists.html](examples/lists.html)
- ✏️ [Drills for this lesson](../../exercises/drills/04-lists.md)

## Read more

| Where | What you get |
|---|---|
| MDN | [Lists](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Lists) — the main explanation, including description lists |
| The Odin Project | [Lists](https://www.theodinproject.com/lessons/foundations-lists) — short and practical |
| W3Schools | [Lists](https://www.w3schools.com/html/html_lists.asp) — quick look-up |
| freeCodeCamp | [Build a Recipe Page](https://www.freecodecamp.org/learn/responsive-web-design-v9/lab-recipe-page/build-a-recipe-page) — lists in a real page |

**Back to:** [the easy lesson](README.md) · **Next easy lesson:** [Lesson 5 · Links](../05-links-urls-and-paths/README.md)
