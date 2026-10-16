# Lesson 15 · Pop-ups, accordions and menus — the full version

📘 **This is the full version.** New to this? Read the [easy lesson](README.md) first, then come back for the details.

⏱ 3 hours · 🔨 Builder · 🧰 You need: Lessons 1–14

Show-and-hide sections, accordions, pop-up boxes, menus and tooltips used to need hundreds of lines of JavaScript. Most of those scripts got the keyboard and focus wrong. Now HTML does a lot of this by itself, and it works for screen readers and keyboards out of the box.

## By the end you can

- Build show-and-hide sections and one-at-a-time accordions with `<details>` and `<summary>`.
- Build pop-up boxes with `<dialog>`, including forms that tell you which button was pressed.
- Build pop-overs with **no JavaScript** using `popover` and `popovertarget`.
- Use `command`/`commandfor`, `inert` and `hidden="until-found"` — and know where they don't work yet.
- Pick the right tool: details, dialog or popover.

---

## 1. `<details>` and `<summary>` — show and hide

```html
<details>
  <summary>What is the refund policy?</summary>
  <p>Full refund within 14 days of purchase.</p>
</details>
```

- `<summary>` must come **first** inside. It's the part you always see. You can click it, or use the keyboard.
- Add `open` to start it open.
- JavaScript can listen for the `toggle` event.
- Works with **no JavaScript**. Screen readers say whether it's open or closed.

### One-at-a-time accordion with `name`

```html
<details name="faq" open>
  <summary>Shipping</summary>
  <p>2–4 working days within Lagos.</p>
</details>
<details name="faq">
  <summary>Returns</summary>
  <p>Within 14 days.</p>
</details>
```

`<details>` with the same `name` are a group: opening one closes the others. (Works everywhere since 2024. Older browsers just let several stay open — no harm done.)

> ⚠️ **Exceptions:**
> - With no `<summary>`, the browser shows its own label ("Details"). Always write one.
> - Keep what's inside `<summary>` simple text. It acts like a button, so headings or links inside can confuse screen readers. `<summary><h3>…</h3></summary>` does work, but test it with a screen reader.
> - Chrome and Edge open a closed `<details>` when you search the page (Ctrl+F) and the match is inside. Not every browser does this, so don't hide things people must find inside closed panels.

## 2. `<dialog>` — pop-up boxes

```html
<button type="button" id="open-delete">Delete account</button>

<dialog id="confirm-delete" aria-labelledby="delete-title">
  <h2 id="delete-title">Delete your account?</h2>
  <p>This can't be undone.</p>
  <form method="dialog">
    <button type="submit" value="cancel" autofocus>Cancel</button>
    <button type="submit" value="delete">Delete</button>
  </form>
</dialog>

<script type="module">
  const dialog = document.querySelector("#confirm-delete");
  document.querySelector("#open-delete").addEventListener("click", () => dialog.showModal());
  dialog.addEventListener("close", () => {
    console.log(dialog.returnValue); // "cancel" or "delete"
  });
</script>
```

A **modal** is a box you must deal with before you can use the rest of the page.

| Method | What happens |
|---|---|
| `dialog.showModal()` | **Modal**: sits on top of everything (the "top layer"), gets a dark `::backdrop` behind it, the rest of the page is **switched off** (inert), Esc closes it, and focus moves inside |
| `dialog.show()` | **Not modal**: the page still works, no backdrop, Esc doesn't close it |
| `dialog.close(value)` | Closes it and sets `returnValue` |
| `dialog.requestClose()` | Like pressing Esc: first fires a `cancel` event you can stop (works everywhere since 2025) |

**`<form method="dialog">`** closes the box when submitted, without sending anything to a server. `returnValue` becomes the `value` of the button that was pressed.

> 🔍 **Don't mix up — the `open` attribute and `showModal()`.** Writing `open` in the HTML (or switching it in JavaScript) shows the box as **not modal**: no backdrop, page not switched off, no Esc. For a modal, use `showModal()`. Don't switch `open` yourself.

> 📝
> - Focus goes to the first thing you can focus, or the one with `autofocus`. Put `autofocus` on the **safest** button (Cancel).
> - When the box closes, the browser puts focus back on the button that opened it.
> - `closedby="any"` lets people close it by clicking the backdrop. Works in Chrome and Firefox, not Safari yet — treat it as a bonus.
> - Don't put `tabindex` on the `<dialog>` itself.

## 3. Popovers — no JavaScript needed

```html
<button type="button" popovertarget="help-tip">What's a BVN?</button>
<div id="help-tip" popover>
  Your Bank Verification Number: an 11-digit number from your bank.
</div>
```

That's all of it. Click the button and the popover opens. Click outside or press Esc and it closes (this is called **light dismiss**). The browser handles focus and tells screen readers how the two are connected. Works everywhere since 2024.

| Value | What it does |
|---|---|
| `popover` or `popover="auto"` | Light dismiss. Opening one closes other unrelated ones |
| `popover="manual"` | Only closes with a button, JavaScript or another clear action. Several can be open at once (good for little notices). |
| `popover="hint"` | For tooltips. Doesn't close `auto` popovers. Only in Chrome and Edge at the time of writing. |

| Attribute on the button | Values |
|---|---|
| `popovertarget` | The `id` of the popover |
| `popovertargetaction` | `toggle` (the normal one), `show`, `hide` |

In JavaScript: `el.showPopover()`, `el.hidePopover()`, `el.togglePopover()`, plus the `beforetoggle` and `toggle` events. In CSS: `:popover-open` and `::backdrop`.

> 🔍 **Don't mix up — popover and modal dialog.** A popover is **never modal**. The rest of the page keeps working. When people *must* answer before going on, use `<dialog>` with `showModal()`. Popovers are for menus, tooltips, pickers and little notices. You can mix them: `<dialog popover>`.

## 4. Buttons that control things: `command` and `commandfor`

The same no-JavaScript idea as popovers, but it works for dialogs too:

```html
<button type="button" commandfor="terms" command="show-modal">Read terms</button>

<dialog id="terms">
  <p>…</p>
  <button type="button" commandfor="terms" command="close">Close</button>
</dialog>
```

| `command` | Works on |
|---|---|
| `show-modal`, `close`, `request-close` | `<dialog>` |
| `show-popover`, `hide-popover`, `toggle-popover` | `[popover]` |
| `--anything` | Your own command. The target gets a `command` event that you handle in JavaScript |

> ❗ **Careful:** This only became available in all main browsers in late 2025 (Chrome 135, Firefox 144, Safari 26.2). On older browsers, the button does nothing. For important actions, check first (`"command" in HTMLButtonElement.prototype`) and fall back to `addEventListener` — or keep using JavaScript for now.

## 5. `inert` — switch part of the page off

```html
<main inert>…</main>
```

Everything inside an `inert` element can't be focused, clicked or selected, and screen readers skip it. Use it for content behind your own overlay, or slides in a carousel that are off-screen. Works everywhere since 2023.

> 💡 **Tip:** `showModal()` already switches off everything outside the box — you don't need to add `inert` yourself. If you make something inert that people can still see, dim it, or they'll think the page froze.

## 6. `hidden` and `hidden="until-found"`

| | What it does |
|---|---|
| `hidden` (or `hidden="hidden"`) | Not shown, and screen readers skip it. Like `display: none` |
| `hidden="until-found"` | Hidden, **but** searching the page (Ctrl+F) or a `#` link can show it. Fires `beforematch` just before it appears. |

```html
<h2>Chapter 3</h2>
<div hidden="until-found" id="chapter-3">…long text…</div>
```

> ⚠️ **Exceptions:**
> - A CSS `display` rule on the element (like `.panel { display: block; }`) **beats** `hidden` and shows it. If you use display rules, add `[hidden] { display: none !important; }` to your CSS.
> - `until-found` works in Chrome, Edge and Firefox (139+). Where it doesn't work, it acts like plain `hidden`, so search can't find the content. Make sure there's another way to open it.

## 7. Pick the right tool

| You need | Use |
|---|---|
| Show or hide a section in the page (FAQ, "read more") | `<details>` |
| Only one section open at a time | `<details name="…">` |
| People must answer before going on (confirm, log in, a form) | `<dialog>` + `showModal()` |
| A floating panel, tooltip, menu or notice, page still usable | `popover` |
| Tabs | No HTML tag for this yet. Use the ARIA tabs pattern from the [APG](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) — or ask whether details or headings would do |
| Hide something from everyone for now | `hidden` |
| Visible, but can't be used | `inert` |

---

## Mistakes people make

- Switching `open` on a `<dialog>` instead of using `showModal()`.
- Building a pop-up box from a `div`, with no focus handling.
- Using a popover for something that should block the page.
- Forgetting `<summary>`.
- `display: flex` on a `[hidden]` element.
- Using `command`/`commandfor` for important actions with no fallback.

## Quick quiz

<details>
<summary>1. What three things does <code>showModal()</code> do that <code>show()</code> doesn't?</summary>

It puts the box on top with a `::backdrop`, switches off the rest of the page, and lets Esc close it.
</details>

<details>
<summary>2. How do you know which button closed a <code>method="dialog"</code> form?</summary>

`dialog.returnValue` holds the `value` of the button that was pressed.
</details>

<details>
<summary>3. How do you make an accordion where only one panel is open, without JavaScript?</summary>

Give each `<details>` the same `name`.
</details>

<details>
<summary>4. Why can you still see an element with <code>hidden</code>?</summary>

A CSS rule sets its `display`, and that beats the browser's built-in style for `hidden`.
</details>

## Practice

- 💻 Example: [interactive.html](examples/interactive.html)
- ✏️ [Drills for this lesson](../../exercises/drills/15-interactive-elements.md)

## Read more

| Where | What you get |
|---|---|
| MDN | [details](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details) · [dialog](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) · [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API/Using) · [Invoker Commands API](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API) · [inert](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/inert) · [hidden](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/hidden) — the main explanation, with browser-support tables |
| W3Schools | [details](https://www.w3schools.com/tags/tag_details.asp) · [dialog](https://www.w3schools.com/tags/tag_dialog.asp) — quick demos |
| web.dev | [Baseline](https://web.dev/baseline) — how to tell if a feature is "safe to use" |

**Back to:** [the easy lesson](README.md) · **Next easy lesson:** [Lesson 16 · Attributes for every tag, and other languages](../16-global-attributes-and-internationalization/README.md)
