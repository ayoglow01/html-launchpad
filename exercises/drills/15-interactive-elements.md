# Practice · Lesson 15 · Pop-ups, accordions and menus

📗 [Easy lesson](../../curriculum/15-interactive-elements/README.md) · 📘 [Full version](../../curriculum/15-interactive-elements/deep-dive.md)

💡 Try each task **before** opening the answer. If a task uses something new, you'll find it in the full version.

### D1 · FAQ
Three FAQs, only one open at a time, no JS.

<details>
<summary>Answer</summary>

Three `<details name="faq">` elements each with a `<summary>`.
</details>

### D2 · Confirm dialog
Build a modal confirm with Cancel/Delete and read which was chosen.

<details>
<summary>Answer</summary>

`<dialog>` with `<form method="dialog">` and two `<button type="submit" value="…">`; open with `showModal()`; read `dialog.returnValue` in the `close` event.
</details>

### D3 · open vs showModal
What's lost if you add the `open` attribute instead of calling `showModal()`?

<details>
<summary>Answer</summary>

Top layer/backdrop, inert background, Esc to close, and focus handling for modals.
</details>

### D4 · Tooltip popover
A "?" button showing help text, no JS.

<details>
<summary>Answer</summary>

`<button type="button" popovertarget="tip">?</button><div id="tip" popover>Help text</div>` — give the button an accessible name, e.g. `aria-label="Help: BVN"` or visible text.
</details>

### D5 · auto vs manual
When would you use `popover="manual"`?

<details>
<summary>Answer</summary>

For toasts or panels that must stay open until explicitly closed, and when several can be open at once.
</details>

### D6 · Popover or dialog?
Cookie consent that blocks the page; a share menu; a login form that must be completed.

<details>
<summary>Answer</summary>

Blocking consent / required login: modal `<dialog>`. Share menu: popover.
</details>

### D7 · hidden override
`.panel { display: grid }` — `<div class="panel" hidden>` still shows. Fix?

<details>
<summary>Answer</summary>

`[hidden] { display: none !important; }` in your CSS.
</details>

### D8 · Invoker fallback
How do you feature-detect invoker commands?

<details>
<summary>Answer</summary>

`"command" in HTMLButtonElement.prototype`; if false, add click listeners that call `showModal()`/`close()`.
</details>
