# Lesson 17 · Make your own tags — the full version

📘 **This is the full version.** New to this? Read the [easy lesson](README.md) first, then come back for the details.

⏱ 3–4 hours · 🚀 Pro · 🧰 You need: Lessons 1–16, and a little JavaScript (classes, picking elements)

**Web components** let you make your own tags — `<user-card>`, `<price-tag>` — that work with any framework, or with none. They're built from three parts: **custom elements** (your own tags), **shadow DOM** (a private inside for each tag) and **`<template>`/`<slot>`** (reusable HTML with gaps to fill). There's some JavaScript here, but we focus on the HTML side: names, attributes, what goes inside, and accessibility.

## By the end you can

- Use `<template>` to hold HTML that sleeps until you copy it.
- Make your own tags with correct names, and run code when they appear or change.
- Keep a tag's HTML and CSS private with shadow DOM, and fill gaps with `<slot>`.
- Build shadow DOM without JavaScript (declarative shadow DOM).
- Know the limits: Safari and `is`, accessibility, search engines, forms.

---

## 1. `<template>` — HTML that sleeps

```html
<template id="product-row">
  <li class="product">
    <img src="placeholder.jpg" alt="">   <!-- replaced by script; src is required, src="" is invalid -->
    <h3 class="name">Product name</h3>
    <p class="price"></p>
  </li>
</template>

<ul id="products"></ul>

<script type="module">
  const template = document.querySelector("#product-row");
  const list = document.querySelector("#products");

  for (const item of [{ name: "Ankara tote", price: "₦8,500", img: "tote.jpg" }]) {
    const row = template.content.cloneNode(true);   // a copy of what's inside
    row.querySelector(".name").textContent = item.name;
    row.querySelector(".price").textContent = item.price;
    row.querySelector("img").src = item.img;
    list.append(row);
  }
</script>
```

The browser reads what's inside a template, but it **sleeps** (the word is **inert**): nothing shows, pictures don't download, scripts don't run, and it isn't part of the page (`document.querySelector(".product")` finds nothing). It lives in `template.content`, a loose bundle of elements called a `DocumentFragment`.

> ⚠️ **Exception:** `<template>` is allowed almost anywhere — in `<head>`, inside `<table>` or `<select>`, between `<tr>`s — places where a `<div>` isn't allowed. That's why it's great for table rows.

## 2. Your own tags (custom elements)

```js
class WordCount extends HTMLElement {
  connectedCallback() {
    const words = this.textContent.trim().split(/\s+/).filter(Boolean).length;
    this.setAttribute("title", `${words} words`);
  }
}
customElements.define("word-count", WordCount);
```

```html
<word-count>Lagos is a city of energy.</word-count>
```

### Naming rules

| Rule | ✅ | ❌ |
|---|---|---|
| Must have a dash | `user-card` | `usercard` |
| Must start with a small English letter | `x-tabs` | `1-tabs`, `-tabs` |
| No capital letters | `price-tag` | `Price-Tag` |
| Not a name that's already taken | `my-annotation` | `font-face`, `color-profile`, `missing-glyph`, `annotation-xml` (and the other SVG/MathML names) |
| Each name defined once | | Defining it twice causes an error |

The dash means your names can never clash with tags HTML adds in future.

> ❗ **Your own tags always need a closing tag.** `<user-card />` does **not** close itself in HTML. The browser ignores the slash and treats everything after it as being inside, until it finds `</user-card>`. Always write `<user-card></user-card>`.

### When your code runs (lifecycle callbacks)

| Method | When it runs |
|---|---|
| `constructor()` | The element is created. Call `super()` first. Don't read attributes or children here. |
| `connectedCallback()` | It's put into the page (this can happen more than once) |
| `disconnectedCallback()` | It's removed — tidy up timers and listeners |
| `attributeChangedCallback(name, old, new)` | An attribute you're watching changed |
| `static observedAttributes = ["…"]` | The list of attributes to watch |
| `adoptedCallback()` | Moved to another document (rare) |

### Before it's defined: `:not(:defined)`

Until `customElements.define()` runs, your tag is just a plain, unknown element that shows its contents as ordinary text. To stop that ugly flash, hide it until it's ready:

```css
user-card:not(:defined) { visibility: hidden; }
```

## 3. Shadow DOM — a private inside

A **shadow root** is a separate, private tree of elements attached to your tag. CSS from the page can't get in (mostly), and CSS inside doesn't leak out.

```js
class UserCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <style>
        :host { display: block; border: 1px solid #ccc; border-radius: 8px; padding: 1rem; }
        h3 { margin: 0; color: #0e405e; }   /* only affects this component */
      </style>
      <h3><slot name="name">Anonymous</slot></h3>
      <slot></slot>
    `;
  }
}
customElements.define("user-card", UserCard);
```

```html
<user-card>
  <span slot="name">Chiamaka Obi</span>
  <p>Frontend developer in Enugu.</p>
</user-card>
```

### Slots — gaps to fill

| You write | What it means |
|---|---|
| `<slot name="x">` (inside the shadow) | A named gap. It shows the children that have `slot="x"` |
| `<slot>` (inside the shadow) | The main gap. It shows every other child |
| Text inside `<slot>…</slot>` | A backup, shown when nothing fills the gap |

> 🔍 **Don't mix up — the light DOM and the shadow DOM.** The **light DOM** is the normal page. Content you put into a slot (`<span slot="name">`) stays in the light DOM. It's still a child of `<user-card>`, page CSS still styles it, `document.querySelector` still finds it, and search engines still see it. It's just *shown* inside the shadow. Content written straight into the shadow root is not in the light DOM.

### Styling through the wall

| Selector or feature | What it's for |
|---|---|
| `:host`, `:host(.active)` | Style your tag itself, from inside |
| `::slotted(p)` | Style top-level slotted elements, from inside |
| `part="label"` + `user-card::part(label)` | Let page CSS style one chosen inner element |
| CSS variables (`--card-bg`) | **Do** pass through into the shadow — the main way to theme components |
| Inherited properties (`color`, `font`) | Also pass through |

`mode: "open"` lets JavaScript reach the inside with `element.shadowRoot`. `"closed"` gives `null` — but closed doesn't make anything secure.

## 4. Declarative shadow DOM — no JavaScript needed

```html
<user-card>
  <template shadowrootmode="open">
    <style>:host { display: block; padding: 1rem; border: 1px solid #ccc; }</style>
    <slot></slot>
  </template>
  <p>Rendered server-side, styled and encapsulated before any script loads.</p>
</user-card>
```

The browser turns `<template shadowrootmode>` into a real shadow root straight away. Handy when a server builds the page, and for showing it fast. Works everywhere since 2024.

> 📝 Only the browser's **HTML reader** does this. Adding the same HTML with `innerHTML` doesn't create a shadow root. (Use `setHTMLUnsafe()` or `Document.parseHTMLUnsafe()` for that.)

## 5. Upgrading a normal tag (`is`)

```html
<button is="confirm-button" type="button">Delete</button>
<script>
  customElements.define("confirm-button", class extends HTMLButtonElement { /* … */ }, { extends: "button" });
</script>
```

This keeps everything a normal button does (focus, keyboard, sending forms, being announced as a button). These are called **customised built-in elements**.

> ❗ **Exception — Safari doesn't support this,** and the Safari team has said it won't. Instead, make your own tag that *wraps* a normal one: `<confirm-button><button type="button">Delete</button></confirm-button>`.

## 6. Making your own tags accessible

A tag you invent starts out as a plain box: **no role, can't be focused, no keyboard behaviour**. `<fancy-button>` is just a `<span>` with big dreams.

| Approach | Verdict |
|---|---|
| Put real tags inside (`<button>`, `<input>`, `<a>`) | ✅ Best — you get everything for free |
| Add `role`, `tabindex="0"` and key handling yourself | Possible, but you're rebuilding what HTML already does (the rules of ARIA, Lesson 12) |
| `ElementInternals` (`this.attachInternals()`) | Lets you set a default role, and make tags that act as **form fields** (`static formAssociated = true`): they send values, get checked, and work with `<label>` |

> ⚠️ **Exception — ARIA can't reach through the wall.** `aria-labelledby`, `aria-describedby` and `<label for>` only find `id`s **in the same tree**. A `<label for="x">` on the page can't point to an `<input id="x">` inside a shadow root. Keep labels and their fields in the same tree, or use `ElementInternals` or slots.

## 7. When to use web components

| Good fit | Poor fit |
|---|---|
| Building blocks shared across many apps and frameworks | One-off parts of one page |
| Widgets other people put on their own sites | Content that must work with JavaScript off (unless you use declarative shadow DOM) |
| Adding extra features on top of existing HTML | Replacing normal tags you could just use |

---

## Mistakes people make

- Names with no dash, or with capitals.
- `<my-element />` written as if it closes itself.
- Reading attributes in the `constructor`.
- Expecting page CSS to style things inside the shadow (use CSS variables or `::part`).
- Home-made clickable tags with no role or keyboard support.
- Relying on `is=""` in Safari.

## Quick quiz

<details>
<summary>1. Why must your own tag names have a dash?</summary>

So they're clearly different from built-in tags, and never clash with tags HTML adds later.
</details>

<details>
<summary>2. You put an <code>&lt;img&gt;</code> inside a <code>&lt;template&gt;</code>. Does it download?</summary>

No. What's inside a template sleeps until you copy it into the page.
</details>

<details>
<summary>3. Is slotted content in the light DOM or the shadow DOM?</summary>

The light DOM. It's only shown where the slot is.
</details>

<details>
<summary>4. How can page CSS change the look of a component with shadow DOM?</summary>

CSS variables (they pass through), inherited properties like `color` and `font`, and `::part()` for parts the component opens up.
</details>

## Practice

- 💻 Example: [web-components.html](examples/web-components.html)
- ✏️ [Drills for this lesson](../../exercises/drills/17-web-components-and-templates.md)

## Read more

| Where | What you get |
|---|---|
| MDN | [Web components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) · [Using custom elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements) · [Using shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM) · [Using templates and slots](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots) · [template](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/template) — the best guides on this topic |
| web.dev | [Declarative shadow DOM](https://web.dev/articles/declarative-shadow-dom) — components built on the server |
| W3Schools | [template](https://www.w3schools.com/tags/tag_template.asp) — quick look-up |

**Back to:** [the easy lesson](README.md) · **Next easy lesson:** [Lesson 18 · Drawing, saving and location](../18-html5-apis-and-canvas/README.md)
