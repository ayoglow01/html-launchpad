# Practice · Lesson 18 · Drawing, saving and location

📗 [Easy lesson](../../curriculum/18-html5-apis-and-canvas/README.md) · 📘 [Full version](../../curriculum/18-html5-apis-and-canvas/deep-dive.md)

💡 Try each task **before** opening the answer. If a task uses something new, you'll find it in the full version.

### D1 · Canvas setup
A 400×300 canvas with fallback text, drawing a filled square.

<details>
<summary>Answer</summary>

```html
<canvas id="c" width="400" height="300"><p>A red square.</p></canvas>
<script type="module">
  const ctx = document.querySelector("#c").getContext("2d");
  ctx.fillStyle = "red";
  ctx.fillRect(50, 50, 100, 100);
</script>
```
</details>

### D2 · Blurry canvas
CSS sets `canvas { width: 800px }` on a 400-wide canvas. Why blurry, and the fix?

<details>
<summary>Answer</summary>

The 400px buffer is stretched. Set the `width`/`height` attributes to display size × `devicePixelRatio`, then `ctx.scale(dpr, dpr)`.
</details>

### D3 · Store an object
Save and load `{ theme: "dark", fontSize: 18 }` in localStorage.

<details>
<summary>Answer</summary>

```js
localStorage.setItem("prefs", JSON.stringify({ theme: "dark", fontSize: 18 }));
const prefs = JSON.parse(localStorage.getItem("prefs") ?? "{}");
```
</details>

### D4 · local vs session
Which for: a shopping cart that survives closing the browser; a multi-step form draft for this tab only?

<details>
<summary>Answer</summary>

Cart: `localStorage`. Tab draft: `sessionStorage`.
</details>

### D5 · Never store
Name what must not go in Web Storage.

<details>
<summary>Answer</summary>

Auth tokens, passwords, personal or financial data — any script (including XSS) can read it.
</details>

### D6 · Geolocation rules
Two requirements before `getCurrentPosition` works.

<details>
<summary>Answer</summary>

Secure context (HTTPS/localhost) and user permission. Trigger it from a user action and handle errors.
</details>

### D7 · Drag and drop
What must the `dragover` handler do? What alternative must you offer?

<details>
<summary>Answer</summary>

Call `event.preventDefault()`. Offer keyboard/touch alternatives such as buttons.
</details>

### D8 · Canvas or SVG?
Animated game with 2,000 particles; company logo; interactive bar chart with 12 bars.

<details>
<summary>Answer</summary>

Game: canvas. Logo: SVG. Chart: SVG (accessible, per-element events) — plus a data table.
</details>

### D9 · AppCache
A tutorial says `<html manifest="app.appcache">`. Use it?

<details>
<summary>Answer</summary>

No — removed from browsers. Use a Service Worker for offline support.
</details>
