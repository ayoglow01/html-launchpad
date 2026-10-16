# Lesson 15 · Pop-ups, accordions and menus

⏱ 30 minutes · 🧰 You need: Lesson 14

## In one sentence

HTML now has built-in tags for things that used to need lots of JavaScript: **show/hide sections**, **pop-up boxes**, and **little floating panels**.

## 1. Show and hide: `<details>` 📂

```html
<details>
  <summary>What is the refund policy?</summary>
  <p>Full refund within 14 days.</p>
</details>
```

Click the question → the answer opens. Click again → it closes. **No JavaScript.** Works with the keyboard too.

Want only **one** open at a time (an accordion)? Give them the same `name`:

```html
<details name="faq"><summary>Shipping</summary><p>2–4 days.</p></details>
<details name="faq"><summary>Returns</summary><p>Within 14 days.</p></details>
```

## 2. Pop-up box: `<dialog>` 💬

For "Are you sure?" questions or login boxes.

```html
<button type="button" id="open">Delete account</button>

<dialog id="confirm">
  <p>Are you sure?</p>
  <form method="dialog">
    <button type="submit" value="no">Cancel</button>
    <button type="submit" value="yes">Delete</button>
  </form>
</dialog>

<script>
  document.getElementById("open").addEventListener("click", () => {
    document.getElementById("confirm").showModal();
  });
</script>
```

- `showModal()` opens it, darkens the page behind, and stops clicks on the rest of the page.
- **Esc** closes it.
- `<form method="dialog">` closes it when a button is pressed.

## 3. Floating panel: `popover` 🪄

A tip or menu that appears when you click a button. **Zero JavaScript!**

```html
<button type="button" popovertarget="tip">What's a BVN?</button>
<div id="tip" popover>Your 11-digit Bank Verification Number.</div>
```

Click outside or press Esc and it closes by itself.

## Which one?

- Show more text in the page → `<details>`
- Must answer before going on → `<dialog>` with `showModal()`
- Small tip or menu, page still usable → `popover`

## ⚠️ Careful

- Open dialogs with `showModal()`, not by adding `open` to the tag. Adding `open` skips the dark background and the Esc key.
- Always write a `<summary>` inside `<details>`.
- Some newer features (like `command` buttons) only work in the latest browsers. The full version says which.

## ✅ Remember

- `<details>` + `<summary>` = show/hide.
- `<dialog>` + `showModal()` = pop-up box.
- `popover` + `popovertarget` = floating tip, no JavaScript.

## 🎯 Try it

Build a FAQ with 3 questions where only one answer can be open at a time.

<details>
<summary>Answer</summary>

Three `<details name="faq">`, each with a `<summary>` question and a `<p>` answer.
</details>

## Want more?

- 📖 The detailed version: [deep-dive.md](deep-dive.md)
- 💻 Example: [interactive.html](examples/interactive.html)
- ✏️ Practice: [drills](../../exercises/drills/15-interactive-elements.md)

➡️ **Next:** [Lesson 16 · Attributes for every tag, and other languages](../16-global-attributes-and-internationalization/README.md)
