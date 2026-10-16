# Practice · Lesson 8 · Page layout tags

📗 [Easy lesson](../../curriculum/08-semantic-html-and-page-structure/README.md) · 📘 [Full version](../../curriculum/08-semantic-html-and-page-structure/deep-dive.md)

💡 Try each task **before** opening the answer. If a task uses something new, you'll find it in the full version.

### D1 · Replace the divs
```html
<div class="header"><div class="nav">…</div></div>
<div class="main"><div class="post">…</div></div>
<div class="sidebar">…</div>
<div class="footer">…</div>
```

<details>
<summary>Answer</summary>

```html
<header><nav aria-label="Main">…</nav></header>
<main><article>…</article></main>
<aside>…</aside>
<footer>…</footer>
```
</details>

### D2 · article or section?
(a) A blog post. (b) "Pricing" part of a landing page. (c) A user comment. (d) A product card in a grid. (e) Chapters of a long page.

<details>
<summary>Answer</summary>

(a) `article` · (b) `section` · (c) `article` (nested in the post's article) · (d) `article` if it makes sense on its own (you could share it alone); otherwise an `li` in a list · (e) `section`. The test: would it make sense on its own, somewhere else? → `article`.
</details>

### D3 · Landmarks
Landmarks are the big signposts on a page that screen reader users can jump between. Which tags make landmarks? And when are `header`/`footer` *not* landmarks?

<details>
<summary>Answer</summary>

`header` (called "banner"), `nav`, `main`, `aside` (called "complementary"), `footer` (called "contentinfo"), `form` (if it has a name), `section` (if it has a name), `search`. `header` and `footer` are only landmarks when they're **not** inside `article`, `aside`, `main`, `nav` or `section`.
</details>

### D4 · One main
How many `<main>` tags can a page have?

<details>
<summary>Answer</summary>

One that you can see (any others must have `hidden`). And it can't go inside `article`, `aside`, `header`, `footer` or `nav`.
</details>

### D5 · Two navs
A page has main navigation and footer navigation. How do screen reader users tell them apart?

<details>
<summary>Answer</summary>

`<nav aria-label="Main">` and `<nav aria-label="Footer">`. Don't put the word "navigation" in the label — screen readers already say it.
</details>

### D6 · The outline myth
Can each `<section>` start with an `<h1>` so headings "reset"?

<details>
<summary>Answer</summary>

No. That idea (the "outline algorithm") was never built into browsers, and it was taken out of the official rules. Use heading levels that match the real structure.
</details>

### D7 · address
Is `<address>` for any postal address?

<details>
<summary>Answer</summary>

No — only for contact details of the nearest `article`, or of whoever wrote or owns the page. A shop location in a list of shops is just a `<p>`.
</details>

### D8 · The "CSS off" test
What is it, and what does it show you?

<details>
<summary>Answer</summary>

Switch off all the styles. If the page still reads like a sensible document (headings in order, lists, labelled forms, a sensible reading order), your HTML carries the meaning. If it turns into a wall of `div` text, it doesn't.
</details>

### D9 · search
Write a site search form, using the tag made for it.

<details>
<summary>Answer</summary>

```html
<search>
  <form action="/search" method="get">
    <label for="q">Search the site</label>
    <input type="search" id="q" name="q">
    <button type="submit">Search</button>
  </form>
</search>
```
</details>
