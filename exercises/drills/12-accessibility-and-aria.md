# Practice · Lesson 12 · Making pages work for everyone

📗 [Easy lesson](../../curriculum/12-accessibility-and-aria/README.md) · 📘 [Full version](../../curriculum/12-accessibility-and-aria/deep-dive.md)

💡 Try each task **before** opening the answer. If a task uses something new, you'll find it in the full version.

### D1 · Fix the fake button
`<div class="btn" onclick="save()">Save</div>`

<details>
<summary>Answer</summary>

`<button type="button" class="btn">Save</button>` with the click handler in JavaScript. You get focus, Enter and Space, the button role, and `disabled` for free.
</details>

### D2 · Icon button name
A hamburger `<button>` containing only an SVG.

<details>
<summary>Answer</summary>

`<button type="button" aria-expanded="false" aria-controls="menu"><svg aria-hidden="true" focusable="false">…</svg><span class="visually-hidden">Menu</span></button>` — or `aria-label="Menu"` on the button.
</details>

### D3 · The first rule of ARIA
What is it?

<details>
<summary>Answer</summary>

If a normal HTML tag or attribute already has the meaning and behaviour you need, use it instead of adding ARIA.
</details>

### D4 · tabindex
What do `tabindex="0"`, `"-1"`, and `"3"` do? Which to avoid?

<details>
<summary>Answer</summary>

`0`: Tab can reach it, in page order. `-1`: only JavaScript can focus it. A positive number: jumps ahead of everything else — avoid.
</details>

### D5 · Live region
"Item added to cart" should be announced without moving focus.

<details>
<summary>Answer</summary>

`<p role="status" id="cart-msg"></p>` already on the page when it loads; set its `textContent` when the item is added. A live region must be there before its text changes.
</details>

### D6 · Hiding
Hide something (a) from everyone, (b) visually only, (c) from screen readers only.

<details>
<summary>Answer</summary>

(a) `hidden` / `display: none`. (b) a `.visually-hidden` class. (c) `aria-hidden="true"` — never on focusable elements.
</details>

### D7 · Label in name
A button visually says "Send" but has `aria-label="Submit form"`. Problem?

<details>
<summary>Answer</summary>

People using voice control say "click Send" and nothing happens. The name screen readers get should include the words people can see (WCAG 2.5.3).
</details>

### D8 · Accessible error
Connect an error message to an email field.

<details>
<summary>Answer</summary>

```html
<input id="email" name="email" type="email" aria-invalid="true" aria-describedby="email-error">
<p id="email-error">Enter an email address like name@example.com.</p>
```
</details>

### D9 · Skip link
Write one.

<details>
<summary>Answer</summary>

`<a class="skip-link" href="#main">Skip to main content</a>` as the first thing Tab reaches, with `<main id="main">`. It appears when it gets focus.
</details>

### D10 · Test plan
Name three checks you must do by hand, because automatic tools can't.

<details>
<summary>Answer</summary>

Go through with only the keyboard (order, visible focus, never getting stuck); go through with a screen reader (names, roles, reading order); zoom to 200% and 400% and check nothing breaks; judge whether alt text and link text actually make sense.
</details>
