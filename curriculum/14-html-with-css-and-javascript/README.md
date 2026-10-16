# Lesson 14 · Adding CSS and JavaScript

⏱ 30 minutes · 🧰 You need: Lesson 13

## In one sentence

HTML is the content; you **connect** a CSS file to make it look good and a JavaScript file to make it do things.

## Connect a CSS file

Make a file `styles.css` next to your HTML:

```css
body { font-family: sans-serif; }
h1 { color: teal; }
```

Connect it inside `<head>`:

```html
<link rel="stylesheet" href="styles.css">
```

Refresh. Your heading is teal! 🎨

### Other ways (less good)

```html
<style> h1 { color: teal; } </style>      <!-- inside the head: only this page -->
<h1 style="color: teal;">Hi</h1>          <!-- on one tag: hard to change later -->
```

Use a **separate file** most of the time. One file can style your whole site.

## Hooks for CSS: `class` and `id`

```html
<p class="warning">Mind the step.</p>
<p class="warning">Wet floor.</p>
<section id="contact">…</section>
```

- `class` — a name you can use on **many** elements. Great for styling.
- `id` — a name for **one** element only. Used for links (`#contact`) and labels.

Name classes for **what they are** (`warning`, `price`), not what they look like (`red-text`). Colours change; meaning doesn't.

## Connect a JavaScript file

Make `script.js`:

```js
console.log("Hello from JavaScript!");
```

Connect it inside `<head>`:

```html
<script src="script.js" defer></script>
```

**`defer` means "load it now, but run it after the page is ready."** Without it, your script might run before your buttons even exist. Just always add `defer`.

## Data for JavaScript: `data-*`

You can store your own little notes on any tag:

```html
<button type="button" data-product-id="42">Add to cart</button>
```

JavaScript reads it as `button.dataset.productId` → `"42"`.

## Build in layers 🎂

1. **HTML** — page works: you can read it, links work, forms send.
2. **+ CSS** — page looks good.
3. **+ JavaScript** — page feels nicer.

If CSS or JavaScript fails (slow internet, an error), the page still works. That's called **progressive enhancement**.

## ⚠️ Careful

- Avoid `onclick="…"` inside HTML tags. Put your JavaScript in the `.js` file.
- `<script>` always needs a closing tag: `<script src="x.js" defer></script>`.

## ✅ Remember

- CSS: `<link rel="stylesheet" href="styles.css">`
- JS: `<script src="script.js" defer></script>`
- `class` for many, `id` for one.
- HTML first, then CSS, then JS.

## 🎯 Try it

1. Make `styles.css`, connect it, and change your page's font and heading colour.
2. Give two paragraphs `class="note"` and give `.note` a background colour in CSS.

<details>
<summary>Answer to 2 (CSS part)</summary>

```css
.note { background: lightyellow; }
```
</details>

## Want more?

- 📖 The detailed version (defer vs async, modules, which CSS wins): [deep-dive.md](deep-dive.md)
- 💻 Example: [loading-and-dom.html](examples/loading-and-dom.html)
- 🌐 The Odin Project: [DOM manipulation and events](https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events)
- ✏️ Practice: [drills](../../exercises/drills/14-html-with-css-and-js.md)

➡️ **Next:** [Lesson 15 · Pop-ups, accordions and menus](../15-interactive-elements/README.md)
