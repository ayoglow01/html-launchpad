# Lesson 17 · Make your own tags

⏱ 40 minutes · 🧰 You need: Lesson 16 and a little JavaScript

## In one sentence

You can make **reusable pieces** of HTML — and even invent your own tags like `<user-card>` — using `<template>` and **web components**.

## 1. `<template>` — a stamp 🖨️

A `<template>` holds HTML that is **not shown**. JavaScript copies it whenever you need it, like using a rubber stamp.

```html
<template id="card">
  <li class="card">
    <h3 class="name">Name</h3>
  </li>
</template>

<ul id="list"></ul>

<script>
  const stamp = document.getElementById("card");
  for (const name of ["Ada", "Musa", "Chiamaka"]) {
    const copy = stamp.content.cloneNode(true);
    copy.querySelector(".name").textContent = name;
    document.getElementById("list").append(copy);
  }
</script>
```

Result: three cards, from one template.

## 2. Your own tag

```html
<shout-text>hello</shout-text>

<script>
  class ShoutText extends HTMLElement {
    connectedCallback() {
      this.textContent = this.textContent.toUpperCase() + "!";
    }
  }
  customElements.define("shout-text", ShoutText);
</script>
```

The page shows **HELLO!**

Rules for your tag's name:
- It **must have a dash**: `shout-text` ✅, `shouttext` ❌
- All **lowercase**.
- Always close it: `<shout-text></shout-text>`. Writing `<shout-text />` does **not** close it.

## 3. Shadow DOM — a private room 🚪

A component can keep its own HTML and CSS **private**, so page styles don't mess it up and its styles don't leak out. That private area is called the **shadow DOM**. `<slot>` is a hole where your content goes in.

```html
<fancy-box>Inside the box!</fancy-box>

<script>
  customElements.define("fancy-box", class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" }).innerHTML = `
        <style> div { border: 3px dashed teal; padding: 1rem; } </style>
        <div><slot></slot></div>`;
    }
  });
</script>
```

## ⚠️ Careful

- A made-up tag starts with **no meaning**: it's not a button, not focusable, not announced. If it needs to be clickable, put a real `<button>` inside it.
- Don't make your own tag when a normal HTML tag already does the job.

## ✅ Remember

- `<template>` = hidden HTML you copy with JavaScript.
- Custom tags need a dash and a closing tag.
- Shadow DOM = private HTML and CSS. `<slot>` = where outside content appears.

## 🎯 Try it

Make a `<template>` for a product (name + price) and use it to show 3 products.

## Want more?

- 📖 The detailed version: [deep-dive.md](deep-dive.md)
- 💻 Example: [web-components.html](examples/web-components.html)
- 🌐 MDN: [Web components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
- ✏️ Practice: [drills](../../exercises/drills/17-web-components-and-templates.md)

➡️ **Next:** [Lesson 18 · Drawing, saving and location](../18-html5-apis-and-canvas/README.md)
