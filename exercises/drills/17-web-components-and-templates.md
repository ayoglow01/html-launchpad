# Practice · Lesson 17 · Make your own tags

📗 [Easy lesson](../../curriculum/17-web-components-and-templates/README.md) · 📘 [Full version](../../curriculum/17-web-components-and-templates/deep-dive.md)

💡 Try each task **before** opening the answer. If a task uses something new, you'll find it in the full version.

### D1 · Valid names?
`mycard`, `my-card`, `My-Card`, `1-card`, `font-face`, `x-`.

<details>
<summary>Answer</summary>

Valid: `my-card`, `x-` (technically valid: starts with a letter, contains a hyphen — but give it a real name). Invalid: `mycard` (no hyphen), `My-Card` (uppercase), `1-card` (starts with digit), `font-face` (reserved).
</details>

### D2 · Self-closing
What happens with `<user-card /><p>Hi</p>`?

<details>
<summary>Answer</summary>

The slash is ignored; `<p>Hi</p>` becomes a child of `<user-card>` until a closing tag or parent end.
</details>

### D3 · Template rows
Use a `<template>` to add table rows to a `<tbody>`.

<details>
<summary>Answer</summary>

```html
<table>
  <tbody id="rows"></tbody>
</table>
<template id="row"><tr><td class="name">Name</td><td class="score">0</td></tr></template>
<script type="module">
  const t = document.querySelector("#row");
  const r = t.content.cloneNode(true);
  r.querySelector(".name").textContent = "Ada";
  r.querySelector(".score").textContent = "85";
  document.querySelector("#rows").append(r);
</script>
```
(Add a caption and headers in real tables.)
</details>

### D4 · Slots
A `<profile-card>` with a named `avatar` slot and default slot. Write the usage.

<details>
<summary>Answer</summary>

```html
<profile-card>
  <img slot="avatar" src="avatar.jpg" alt="" width="64" height="64">
  <p>Bio text goes to the default slot.</p>
</profile-card>
```
</details>

### D5 · Theming
How can page CSS change a shadow component's accent colour?

<details>
<summary>Answer</summary>

A CSS custom property used inside (`var(--accent)`) and set outside (`profile-card { --accent: teal; }`), or `::part()`.
</details>

### D6 · Declarative shadow DOM
Write markup that creates an open shadow root without JS.

<details>
<summary>Answer</summary>

```html
<my-box>
  <template shadowrootmode="open"><slot></slot></template>
  <p>Content</p>
</my-box>
```
</details>

### D7 · Accessibility
`<star-rating>` is clickable but unusable by keyboard. Best fix?

<details>
<summary>Answer</summary>

Build it from native radio inputs inside (a `fieldset` of `input type="radio"` with labels), styled as stars.
</details>

### D8 · Safari
Why avoid `<button is="fancy-button">`?

<details>
<summary>Answer</summary>

Safari doesn't support customised built-ins. Wrap the native button in an autonomous element instead.
</details>
