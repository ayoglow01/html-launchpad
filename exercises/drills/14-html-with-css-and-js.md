# Practice · Lesson 14 · Adding CSS and JavaScript

📗 [Easy lesson](../../curriculum/14-html-with-css-and-javascript/README.md) · 📘 [Full version](../../curriculum/14-html-with-css-and-javascript/deep-dive.md)

💡 Try each task **before** opening the answer. If a task uses something new, you'll find it in the full version.

### D1 · Attach files
Link `css/styles.css` and `js/app.js` the recommended way.

<details>
<summary>Answer</summary>

```html
<link rel="stylesheet" href="css/styles.css">
<script src="js/app.js" defer></script>
```
Both in `<head>`.
</details>

### D2 · Cascade order
External sets `p { color: blue }`, internal `<style>` before the link sets `p { color: red }`. Colour?

<details>
<summary>Answer</summary>

Blue — same specificity, the later rule (the external file) wins.
</details>

### D3 · defer vs async
Analytics script vs your app script that needs the DOM and a library loaded before it.

<details>
<summary>Answer</summary>

Analytics: `async`. App and library: `defer` on both (order preserved).
</details>

### D4 · Module scripts
Why does `<script type="module" src="app.js">` fail when opening the file by double-click?

<details>
<summary>Answer</summary>

Module scripts are loaded with permission rules (CORS) that only a server gives. A double-clicked file opens as `file://`, which has no server, so it fails. Use a local server, like VS Code's Live Server.
</details>

### D5 · dataset
Read `data-product-id="17"` from a button in JS. What type is the value?

<details>
<summary>Answer</summary>

`button.dataset.productId` → `"17"` (a string).
</details>

### D6 · Class naming
Rename `.red-big-text` and `.left-box`.

<details>
<summary>Answer</summary>

By purpose: `.error-message`, `.sidebar` (or whatever they *are*).
</details>

### D7 · Attribute vs property
User types "Bola" into `<input value="Ada">`. What do `getAttribute("value")` and `.value` return?

<details>
<summary>Answer</summary>

`"Ada"` and `"Bola"`.
</details>

### D8 · Progressive enhancement
Describe a newsletter form that works without JS and is better with it.

<details>
<summary>Answer</summary>

A normal `<form method="post" action="/subscribe">` that reloads to a thank-you page. With JS: intercept submit, `fetch`, show an inline success message in a `role="status"` region.
</details>
