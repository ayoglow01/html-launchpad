# Practice · Lesson 4 · Lists

📗 [Easy lesson](../../curriculum/04-lists/README.md) · 📘 [Full version](../../curriculum/04-lists/deep-dive.md)

💡 Try each task **before** opening the answer. If a task uses something new, you'll find it in the full version.

### D1 · Pick the list
Which list type for: (a) shopping items, (b) steps to make tea, (c) a glossary, (d) top-3 ranking, (e) site navigation?

<details>
<summary>Answer</summary>

(a) `ul` · (b) `ol` · (c) `dl` · (d) `ol` · (e) `ul` inside `<nav>`. The test: would changing the order change the meaning? Yes → `ol`.
</details>

### D2 · Nested list
Write a list: Fruits (Mango, Orange), Vegetables (Ugu, Spinach).

<details>
<summary>Answer</summary>

```html
<ul>
  <li>Fruits
    <ul>
      <li>Mango</li>
      <li>Orange</li>
    </ul>
  </li>
  <li>Vegetables
    <ul>
      <li>Ugu</li>
      <li>Spinach</li>
    </ul>
  </li>
</ul>
```
The nested list goes **inside** the `<li>`, not between `<li>`s.
</details>

### D3 · Find the error
```html
<ul>
  <h3>Tools</h3>
  <li>Editor</li>
  <p>Browser</p>
</ul>
```

<details>
<summary>Answer</summary>

`<ul>` and `<ol>` can only hold `<li>` (plus `script` and `template`). Move the heading out, make Browser an `<li>`:
```html
<h3>Tools</h3>
<ul>
  <li>Editor</li>
  <li>Browser</li>
</ul>
```
</details>

### D4 · Countdown
An ordered list counting down 3, 2, 1. Then one starting at 10.

<details>
<summary>Answer</summary>

`<ol reversed><li>…</li><li>…</li><li>…</li></ol>` and `<ol start="10">…</ol>`. A single item can jump with `<li value="20">`.
</details>

### D5 · Roman numerals
Ordered list numbered i, ii, iii.

<details>
<summary>Answer</summary>

`<ol type="i">`. Use `type` when the numbering style is part of the meaning (like legal clauses that people refer to as "(ii)"). Otherwise, use CSS `list-style-type`.
</details>

### D6 · Description list
Glossary: HTML — structure; CSS — presentation; and a term with two definitions: "Tag" — 1. the bit of HTML that starts or ends an element; 2. a label on a blog post.

<details>
<summary>Answer</summary>

```html
<dl>
  <dt>HTML</dt>
  <dd>Structure</dd>
  <dt>CSS</dt>
  <dd>Presentation</dd>
  <dt>Tag</dt>
  <dd>The bit of HTML that starts or ends an element, such as <code>&lt;p&gt;</code>.</dd>
  <dd>A label attached to a blog post.</dd>
</dl>
```
You can wrap each term and its definitions in a `<div>` inside the `<dl>` (allowed, and handy for styling).
</details>

### D7 · Navigation
Write a menu with Home, About and Contact, where About is the current page.

<details>
<summary>Answer</summary>

```html
<nav aria-label="Main">
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html" aria-current="page">About</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</nav>
```
</details>

### D8 · Styling exception
Your CSS removes bullets with `list-style: none`. What happens in Safari/VoiceOver, and the fix?

<details>
<summary>Answer</summary>

Safari may stop announcing it as a list. If that matters, add `role="list"` to the `<ul>`/`<ol>`. It's a known, on-purpose exception to the rule "don't repeat a tag's role with ARIA".
</details>
