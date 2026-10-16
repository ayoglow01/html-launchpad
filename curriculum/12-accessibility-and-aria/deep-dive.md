# Lesson 12 · Making pages work for everyone — the full version

📘 **This is the full version.** New to this? Read the [easy lesson](README.md) first, then come back for the details.

⏱ 5–6 hours · 🔨 Builder · 🧰 You need: Lessons 1–11

**Accessibility** (people often write it as **a11y** — "a", 11 letters, "y") means people with disabilities can see or hear your page, understand it, move around it and use it. It helps everyone else too: people who prefer the keyboard, people on slow internet, people in bright sunlight, older people, and Google.

Most of it comes **free** when you use the right HTML tags. This lesson explains why — and what to do when HTML alone isn't enough.

## By the end you can

- Explain the WCAG 2.2 rules, their four big ideas, and their levels.
- Explain how screen readers "see" your page, and where an element's name comes from.
- Make everything work with the keyboard alone.
- Follow the five rules of ARIA — which mostly means *not* using ARIA.
- Pick the right way to hide something.
- Test with a screen reader and with automatic tools.

---

## 1. Who you're building for

| Disability | Examples | What they use |
|---|---|---|
| Seeing | Blind, partly sighted, colour-blind | Screen readers, magnifiers, high contrast, zoom |
| Moving | Shaky hands, paralysis, wrist pain, a broken arm | Keyboard, switch devices, voice control, bigger buttons |
| Hearing | Deaf, hard of hearing | Captions, transcripts |
| Thinking and learning | Dyslexia, ADHD, memory problems | Plain words, the same layout on every page, no time limits |
| For a while | A broken arm, bright sun, a noisy room, holding a baby | Any of the above, for now |

## 2. WCAG 2.2 in five minutes

**WCAG** (Web Content Accessibility Guidelines) is the world's rulebook for accessible websites. Many countries' laws point to it. Version **2.2** came out in October 2023.

**Four big ideas — remember "POUR":**

| Idea | Means | HTML examples |
|---|---|---|
| **Perceivable** | People can see or hear it | `alt`, captions, not using colour alone |
| **Operable** | People can use it | Keyboard access, skip links, never getting stuck |
| **Understandable** | People can understand it | `lang`, labels, clear error messages |
| **Robust** | It works with today's and tomorrow's tools | Valid HTML; correct names, roles and states |

**Levels:** **A** (the minimum) → **AA** (what laws and companies usually ask for) → **AAA** (extra; not expected for whole sites).

Rules you'll meet all the time:

| Number | In plain words |
|---|---|
| 1.1.1 | Pictures need text alternatives (`alt`) |
| 1.3.1 | Structure must be in the code, not just the looks |
| 1.4.3 | Text must stand out from its background (contrast 4.5:1 for normal text) |
| 2.1.1 | Everything works with a keyboard |
| 2.4.3 | Tab moves in a sensible order |
| 2.4.4 | Link text says where it goes |
| 2.4.7 | You can always see where the keyboard is |
| 2.5.8 | Buttons are at least 24×24 pixels (new in 2.2) |
| 3.1.1 | The page's language is set |
| 3.3.2 | Fields have labels or instructions |
| 4.1.2 | Every control has a name, a role and a value |

## 3. How screen readers "see" your page

From your HTML, the browser builds a second, simpler tree for assistive tools (like screen readers). It's called the **accessibility tree**. Screen readers read this tree, not your code. Each item in it has:

| Property | Answers | Example |
|---|---|---|
| **Role** | What is it? | button, link, heading level 2, checkbox, navigation |
| **Name** | What's it called? | "Save", "Search the docs" |
| **State** | What's it doing? | ticked, open, disabled, pressed, current page |
| **Value** | What's in it? | "42" on a slider |

```html
<button type="button">Save</button>
<!-- role: button · name: "Save" · you can Tab to it · Enter and Space work -->

<div onclick="save()">Save</div>
<!-- role: nothing special · name: none · you can't Tab to it · no keys work -->
```

See it yourself: Chrome DevTools → Elements → **Accessibility** pane. Firefox → **Accessibility** panel.

## 4. Where names come from

The browser looks for a name in this order:

1. `aria-labelledby` (the text of the element it points to)
2. `aria-label`
3. The normal HTML way: `<label>` for fields · `alt` for pictures · `<caption>` for tables · `<legend>` for fieldsets · `<figcaption>` for figures · **the words inside** for buttons, links and headings
4. `title`, then `placeholder` (last resorts — don't rely on them)

> ❗ **Use the visible words.** If a button shows words, its name should **include those words** (WCAG 2.5.3). People using voice control say what they see: "click Send". If the button shows "Send" but has `aria-label="Submit form"`, saying "click Send" won't work.

## 5. Keyboard and focus

Everything you can click must also work with the keyboard. The element the keyboard is "on" right now has **focus**.

| Key | Does |
|---|---|
| Tab / Shift+Tab | Next / previous thing you can use |
| Enter | Opens links, presses buttons, sends forms |
| Space | Presses buttons, ticks checkboxes |
| Arrow keys | Move inside radio groups, drop-downs, menus, sliders |
| Esc | Closes pop-ups |

**Things you can Tab to without any extra work:** `<a href>`, `<button>`, `<input>`, `<select>`, `<textarea>`, `<summary>`, `<iframe>`, anything with `contenteditable`, and video or audio with `controls`.

### `tabindex`

| Value | What it does | When |
|---|---|---|
| `0` | Adds the element to the normal Tab order | Rarely: home-made widgets, boxes that scroll |
| `-1` | JavaScript or a link can move focus there, but Tab skips it | Skip-link targets, pop-up headings, error summaries |
| `1` or more | Jumps ahead of everything else | ❌ **Never.** It scrambles the order of the whole page. |

> ⚠️ **Exception — Tab follows the code order, not what you see.** CSS can move things around on screen (`order`, grid, `position`), but Tab still follows the order in your HTML. Keep your HTML in a sensible reading order (WCAG 2.4.3 and 1.3.2).

> ❗ Never remove the focus outline (`outline: none`) unless you replace it with something just as easy to see. Otherwise keyboard users can't tell where they are (WCAG 2.4.7).

## 6. The five rules of ARIA

**ARIA** is a set of attributes that **change what screen readers are told** about an element. That's *all* it changes. It doesn't add behaviour, keyboard support, focus or styling.

1. **Use normal HTML first.** If a tag already does what you need, use it.
2. **Don't change a tag's meaning** unless you really have to. ❌ `<h2 role="button">` — put a `<button>` inside the `<h2>` instead.
3. **Anything you make clickable with ARIA must work with the keyboard.** If you add `role="button"`, you now also owe `tabindex="0"`, Enter *and* Space handling, and a visible focus style.
4. **Never hide something you can Tab to** (with `role="presentation"`, `role="none"` or `aria-hidden="true"`). People would Tab onto something that "isn't there".
5. **Everything you can use must have a name.**

> **No ARIA is better than bad ARIA.** Wrong ARIA actively misleads screen-reader users. It's worse than nothing.

```html
<!-- ❌ Rebuilding a button, badly -->
<div role="button" tabindex="0" onclick="save()">Save</div>
<!-- still missing: Enter and Space, a disabled state, sending forms… -->

<!-- ✅ -->
<button type="button" onclick="save()">Save</button>
```

## 7. The ARIA attributes you'll actually use

| Attribute | What it's for | Example |
|---|---|---|
| `aria-label` | A name, when there are no visible words | `<button aria-label="Close">×</button>` |
| `aria-labelledby` | A name taken from other visible text | `<dialog aria-labelledby="dlg-title">` |
| `aria-describedby` | Extra information (hints, errors) | `<input aria-describedby="pw-hint">` |
| `aria-hidden="true"` | Hide from screen readers (still visible on screen) | Decorative icons |
| `aria-expanded` | Is the thing it controls open? | A menu button |
| `aria-controls` | Which element it controls | `aria-controls="menu"` (poorly supported — never rely on it alone) |
| `aria-current` | "This one" in a set | `aria-current="page"` in a menu; also `step`, `date`, `true` |
| `aria-live` | Read out changes in this area | `polite` / `assertive` |
| `aria-invalid` | This field has an error | `aria-invalid="true"` |
| `aria-required` | Required field (use the normal `required` instead) | — |
| `aria-pressed` | Is this toggle button on? | Bold / Italic buttons in a toolbar |
| `role` | Set or change what it is | `role="alert"`, `role="status"`, `role="list"` |

```html
<button type="button" aria-expanded="false" aria-controls="site-menu">Menu</button>
<ul id="site-menu" hidden>…</ul>
<!-- JavaScript switches both aria-expanded and hidden -->
```

> ⚠️ **Exception — `aria-label` on plain boxes.** `aria-label` on a plain `<div>` or `<span>` (with no role) **doesn't work**. Screen readers ignore it. It works on things you can use (buttons, links, fields), on landmarks, and on elements with a suitable role.

> 🔍 **Don't mix up:**
> - `aria-label` = a name you type in. It's invisible, and most translation tools skip it.
> - `aria-labelledby` = a name taken from visible text on the page. Better, when that text exists.
> - `aria-describedby` = extra information, read *after* the name and role.

## 8. Announcing changes: live regions

When part of the page changes without reloading (a "Saved" message, a cart count, search results), screen readers say nothing — unless you mark that area as a **live region**.

```html
<p role="status">3 results found</p>                <!-- polite: waits for a pause -->
<p role="alert">Your session expires in 1 minute.</p> <!-- assertive: interrupts -->
<div aria-live="polite" aria-atomic="true">…</div>
```

> ⚠️ **Exception:** The live region must **already be on the page** before its words change. If you add a brand-new element that already has words in it, it often isn't read out. Put the empty box on the page when it loads, then change its text.

Use `assertive` or `alert` rarely — only for urgent things.

## 9. Six ways to hide things

| Way | Can you see it? | Do screen readers find it? | Can you Tab to it? | Use for |
|---|---|---|---|---|
| `hidden` attribute | No | No | No | Things that don't matter right now |
| CSS `display: none` | No | No | No | The same, using CSS |
| CSS `visibility: hidden` | No (but keeps its space) | No | No | Hiding without moving things; animations |
| **Visually-hidden class** (CSS below) | No | **Yes** | Yes | Words only for screen readers ("(opens in new tab)") |
| `aria-hidden="true"` | **Yes** | No | **Still yes** ⚠️ | Visible decoration (icons next to words) |
| `inert` | Yes | No | No | The page behind a pop-up; switched-off areas |

```css
/* The usual "only for screen readers" CSS */
.visually-hidden {
  position: absolute;
  width: 1px; height: 1px;
  margin: -1px; padding: 0; border: 0;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}
```

> ❗ `opacity: 0` hides things from your eyes but leaves them **readable and Tab-able** — invisible traps for keyboard users. And `aria-hidden="true"` on a link or button gives you something you can Tab to that has no name (rule 4).

## 10. Button or link? (the most common real-world bug)

| You want to… | Use | Not |
|---|---|---|
| Go to another page, or a spot on this page | `<a href="…">` | `<button onclick="location=…">`, `<div onclick>` |
| Do something (send, open, switch, play) | `<button type="…">` | `<a href="#">`, `<a href="javascript:void(0)">`, `<div onclick>` |

Why it matters: people expect links to take them somewhere (and to open in new tabs, show in link lists, and work with Enter). They expect buttons to do something (and to work with Space too). Getting it wrong confuses screen-reader and keyboard users, and breaks browser features.

## 11. Accessibility checklist

- [ ] `lang` on `<html>` (and on any bits in other languages)
- [ ] A clear `<title>` on every page
- [ ] Layout tags: `header`, `nav`, `main`, `footer`; only one `main`
- [ ] Headings in order, one `h1`
- [ ] A skip link to `main`
- [ ] Every picture has the right `alt` (empty for decoration)
- [ ] Every field has a visible `<label>`; groups use `fieldset` + `legend`
- [ ] Errors are words, say what to fix, and are connected to the field
- [ ] Links say where they go; buttons say what they do
- [ ] Everything works by keyboard; focus always shows; no `tabindex` above 0
- [ ] Tables have `caption`, `th` and `scope`
- [ ] Videos have captions; audio has a transcript; nothing plays sound by itself
- [ ] Every `iframe` has a `title`
- [ ] ARIA only where HTML can't do the job — and used correctly
- [ ] Zoom to 200% and 400%: nothing goes missing (no `user-scalable=no`)

## 12. Testing

**Automatic tools only find some of the problems** — often reckoned to be a third or less. Always do all of these:

1. **Automatic:** Lighthouse (in Chrome DevTools), [axe DevTools](https://www.deque.com/axe/devtools/), [WAVE](https://wave.webaim.org/).
2. **Keyboard:** put the mouse away. Tab through everything. Can you see where you are? Can you reach and use everything? Can you get out of every pop-up?
3. **Screen reader**, 10 minutes per page:

| Device | Screen reader | Turn on | Next heading | List of landmarks / elements |
|---|---|---|---|---|
| Windows | [NVDA](https://www.nvaccess.org/download/) (free) | Ctrl+Alt+N | H | NVDA+F7 |
| Mac | VoiceOver (built in) | Cmd+F5 | VO+Cmd+H (VO = Ctrl+Option) | VO+U (the "rotor") |
| iPhone/iPad | VoiceOver | Settings → Accessibility | Rotor: twist two fingers | — |
| Android | TalkBack | Settings → Accessibility | Reading controls | — |

4. **Zoom** to 200% and 400%, and try a 320px-wide window. **Switch off CSS** and read the page from top to bottom.

---

## Mistakes people make

- Click handlers on `<div>` or `<span>` instead of `<button>` or `<a>`.
- ARIA roles that repeat what the tag already says (`<button role="button">`, `<nav role="navigation">`). Harmless clutter at best.
- `aria-label` on `<div>`s.
- `tabindex` above 0.
- `aria-hidden="true"` on things you can Tab to.
- Removing focus outlines.
- Trusting automatic tools alone.

## Quick quiz

<details>
<summary>1. What three things does a screen reader need to know about a control?</summary>

What it is (role), what it's called (name), and what it's doing or holding (state/value).
</details>

<details>
<summary>2. A button shows only an × icon. Give two correct ways to name it.</summary>

`<button type="button" aria-label="Close">×</button>`, or `<button type="button"><span aria-hidden="true">×</span><span class="visually-hidden">Close</span></button>`.
</details>

<details>
<summary>3. Why is <code>tabindex="3"</code> harmful?</summary>

Numbers above 0 pull elements ahead of the normal order for the whole page. Tab jumps around in a confusing way that's easy to break.
</details>

<details>
<summary>4. You add <code>&lt;div role="alert"&gt;Saved&lt;/div&gt;</code> to the page and NVDA says nothing. Why might that be?</summary>

Some screen readers only read out changes to live regions that were already on the page. Add an empty live region when the page loads, then change its text.
</details>

<details>
<summary>5. Things behind an open pop-up should be out of reach. Which attribute?</summary>

`inert`. (Opening a `<dialog>` with `showModal()` does this for you.)
</details>

## Practice

- 💻 Example: [accessible-patterns.html](examples/accessible-patterns.html)
- ✏️ [Drills for this lesson](../../exercises/drills/12-accessibility-and-aria.md)
- 🔧 Fix this: [08-accessibility.broken.html](../../exercises/debug/08-accessibility.broken.html)
- 🧩 Challenge: [C6 · Accessible media page](../../exercises/challenges/README.md#c6--accessible-media-page)
- 🏗️ Project: [P4 · Registration system](../../projects/04-registration-system/README.md)

## Read more

| Where | What you get |
|---|---|
| MDN | [Accessibility module](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility) · [HTML: a good basis](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML) · [WAI-ARIA basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) — the main explanation |
| The Odin Project | [Intro to web accessibility](https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-introduction-to-web-accessibility) · [WCAG](https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-the-web-content-accessibility-guidelines-wcag) · [Keyboard navigation](https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-keyboard-navigation) · [Meaningful text](https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-meaningful-text) · [WAI-ARIA](https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-wai-aria) · [Auditing](https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-accessibility-auditing) — the best step-by-step course on this |
| freeCodeCamp | [Responsive Web Design](https://www.freecodecamp.org/learn/responsive-web-design-v9/) — accessibility workshops |
| W3Schools | [Accessibility tutorial](https://www.w3schools.com/accessibility/index.php) — a quick overview |
| W3C | [WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/) · [Using ARIA](https://www.w3.org/TR/using-aria/) · [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/) — the official rules |

**Back to:** [the easy lesson](README.md) · **Next easy lesson:** [Lesson 13 · The head, Google and sharing](../13-head-metadata-seo-and-social/README.md)
