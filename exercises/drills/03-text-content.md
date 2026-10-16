# Practice · Lesson 3 · Writing text

📗 [Easy lesson](../../curriculum/03-text-content/README.md) · 📘 [Full version](../../curriculum/03-text-content/deep-dive.md)

💡 Try each task **before** opening the answer. If a task uses something new, you'll find it in the full version.

### D1 · Headings
A page has a title "Lagos Food Guide", two sections "Street food" and "Restaurants"; Street food has subsections "Suya" and "Puff-puff". Write the headings.

<details>
<summary>Answer</summary>

```html
<h1>Lagos Food Guide</h1>
<h2>Street food</h2>
<h3>Suya</h3>
<h3>Puff-puff</h3>
<h2>Restaurants</h2>
```
Headings describe structure, not size. Never skip a level going down.
</details>

### D2 · Emphasis vs importance vs style
Choose `em`, `strong`, `i`, `b`, or `mark`:
1. "You **must** wear a helmet." (warning)
2. "I *did* lock the door!" (stress changes meaning)
3. The ship *Titanic*.
4. Highlight the search term "jollof" in results.
5. A product name in a review lead-in, styled bold, no extra importance.

<details>
<summary>Answer</summary>

1 `strong` · 2 `em` · 3 `i` (name of a vessel — alternate voice) · 4 `mark` · 5 `b`.
</details>

### D3 · Quotes and citations
Mark up: As Chinua Achebe wrote in *Things Fall Apart*: "When the moon is shining the cripple becomes hungry for a walk." (short, inline)

<details>
<summary>Answer</summary>

```html
<p>As Chinua Achebe wrote in <cite>Things Fall Apart</cite>: <q>When the moon is shining the cripple becomes hungry for a walk.</q></p>
```
`<cite>` is for the **title of a work**, not the person's name. `<q>` adds quotation marks itself.
</details>

### D4 · Abbreviation and time
"The AGM is on 31 October 2026 at 2 pm."

<details>
<summary>Answer</summary>

```html
<p>The <abbr title="annual general meeting">AGM</abbr> is on <time datetime="2026-10-31T14:00+01:00">31 October 2026 at 2 pm</time>.</p>
```
</details>

### D5 · Code
Show the instruction: Press Ctrl + S to save, then run `npm start`, which prints "Server ready".

<details>
<summary>Answer</summary>

```html
<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save, then run <code>npm start</code>, which prints <samp>Server ready</samp>.</p>
```
</details>

### D6 · Edits
Show that the price changed from ₦5,000 to ₦4,000.

<details>
<summary>Answer</summary>

`<p>Price: <del>₦5,000</del> <ins>₦4,000</ins></p>` — `<s>` is for content no longer accurate/relevant without a document-edit meaning (e.g. "sold out" old offers); `<del>`/`<ins>` record edits.
</details>

### D7 · Line breaks
Mark up an address on three lines: Tafawa Balewa Square / Lagos Island / Lagos.

<details>
<summary>Answer</summary>

```html
<p>Tafawa Balewa Square<br>
Lagos Island<br>
Lagos</p>
```
`<br>` is correct when line breaks are part of the content (addresses, poems). Don't use it for spacing. If it's contact info for the page/article author, wrap it in `<address>`.
</details>

### D8 · Sub and sup
Write H₂O and E = mc².

<details>
<summary>Answer</summary>

`H<sub>2</sub>O` and `E = mc<sup>2</sup>`.
</details>

### D9 · Div or span?
You need a hook to style one word red. Which element — and is there a better choice first?

<details>
<summary>Answer</summary>

First ask whether the word has meaning (`em`, `strong`, `mark`). If it's purely visual, `<span class="…">`. `<div>` is for block-level groupings.
</details>
