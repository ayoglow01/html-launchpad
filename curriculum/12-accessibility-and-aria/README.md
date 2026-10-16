# Lesson 12 · Making pages work for everyone

⏱ 45 minutes · 🧰 You need: Lesson 11

## In one sentence

**Accessibility** means everyone can use your page — including people who can't see, can't hear, can't use a mouse, or find reading hard.

## Who are we building for?

- **Blind people** use a **screen reader** — an app that reads the page aloud.
- **People who can't use a mouse** use only the **keyboard** (Tab, Enter, arrows).
- **Deaf people** need **captions**.
- **People with low vision** zoom in and need **strong colour contrast**.
- **Everyone**, sometimes: a broken arm, bright sunlight, a slow phone.

Good news: **if you've used the right tags so far, you've already done most of the work.**

## Rule 1: Use the real tag 🏆

```html
❌ <div onclick="save()">Save</div>
✅ <button type="button">Save</button>
```

The `<button>` works with the keyboard, is announced as "button", and can be focused. The `<div>` does none of this — you'd have to rebuild it all by hand.

Same idea:
- Goes somewhere → `<a href>`
- Does something → `<button>`
- Heading → `<h1>`–`<h6>`
- List → `<ul>` / `<ol>`

## Rule 2: Everything needs a name

A screen reader must be able to say **what** each thing is.

| Thing | How it gets its name |
|---|---|
| Image | `alt="…"` |
| Form box | `<label>` |
| Link or button | Its text |
| Icon-only button | Hidden text or `aria-label` |

```html
<button type="button" aria-label="Close">✕</button>
```

## Rule 3: Test with only your keyboard ⌨️

Put your mouse away and try your page:
- **Tab** — move forward. **Shift + Tab** — move back.
- **Enter** — click links and buttons. **Space** — tick boxes, press buttons.

Can you reach everything? Can you **see** where you are (a visible outline)? If not, fix it.

⚠️ Never remove the focus outline with CSS (`outline: none`) unless you add a better one.

## Rule 4: Colours must be easy to read

Light grey text on white is hard for many people. Check contrast with a free tool like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/). Aim for **4.5 : 1** or more for normal text.

And never use **only** colour to show meaning ("fields in red are wrong"). Add words or icons too.

## Skip link

Let keyboard users jump past the menu:

```html
<a href="#main">Skip to main content</a>
…
<main id="main">
```

## What is ARIA?

**ARIA** is a set of extra attributes (`aria-…` and `role`) that give screen readers more information when HTML alone can't.

```html
<button type="button" aria-expanded="false">Menu</button>   <!-- says the menu is closed -->
<p role="status"></p>                                       <!-- news here gets read aloud -->
<nav aria-label="Footer">                                   <!-- names this menu -->
```

⚠️ **The first rule of ARIA: don't use ARIA if a normal HTML tag can do the job.** Wrong ARIA makes things *worse*. Always try the real tag first.

## Hide things correctly

- `hidden` — hide from **everyone**.
- `aria-hidden="true"` — hide from **screen readers only** (for decorations). Never on buttons or links.

## ✅ Remember

- Use the real tag (`button`, `a`, `label`, headings).
- Everything needs a name.
- Test with the keyboard. Keep the focus outline visible.
- Strong colour contrast, and not colour alone.
- ARIA only when HTML can't do it.

## 🎯 Try it

1. Tab through any website you like. Where do you get lost?
2. Turn on your computer's screen reader for 5 minutes on your own page:
   - Windows: free **NVDA** (nvaccess.org) — or Narrator: **Ctrl + Windows + Enter**
   - Mac: **VoiceOver** — **Cmd + F5**
   - Android: **TalkBack** in Settings → Accessibility
   - iPhone: **VoiceOver** in Settings → Accessibility

<details>
<summary>Check: what's wrong with <code>&lt;button&gt;&lt;img src="x.svg"&gt;&lt;/button&gt;</code>?</summary>

The image has no `alt`, so the button has no name. Screen readers just say "button". Fix: `<img src="x.svg" alt="Close">`.
</details>

## Want more?

- 📖 The detailed version (WCAG, ARIA rules, live regions, testing): [deep-dive.md](deep-dive.md)
- 💻 Example: [accessible-patterns.html](examples/accessible-patterns.html)
- 🌐 MDN: [What is accessibility?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/What_is_accessibility)
- ✏️ Practice: [drills](../../exercises/drills/12-accessibility-and-aria.md) · [fix an inaccessible page](../../exercises/debug/08-accessibility.broken.html) · [accessible media challenge](../../exercises/challenges/README.md#c6--accessible-media-page)
- 🏗️ **Project time!** [P4 · Registration system](../../projects/04-registration-system/README.md)

➡️ **Next:** [Lesson 13 · The head, Google and sharing](../13-head-metadata-seo-and-social/README.md)
