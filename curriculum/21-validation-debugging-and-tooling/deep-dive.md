# Lesson 21 · Finding and fixing mistakes — the full version

📘 **This is the full version.** New to this? Read the [easy lesson](README.md) first, then come back for the details.

⏱ 3 hours · 🚀 Pro · 🧰 You need: Lessons 1–20

Browsers are forgiving. They quietly patch up broken HTML and show *something*. That's exactly why mistakes hide. A missing `</div>` can look fine in Chrome and wreck the layout in Safari. Two elements with the same `id` can break a label you never tested. This lesson gives you the tools, and a routine, to catch problems before your visitors do.

## By the end you can

- Check pages with the W3C checker and with `html-validate`.
- Use DevTools to compare **what you wrote** with **what the browser built**.
- Recognise how browsers patch up common mistakes.
- Track down bugs step by step, instead of guessing.
- Run accessibility and quality checks.
- Set up your editor, and automatic checks, to catch mistakes as you type.
- Check whether browsers support a feature, with Baseline, MDN and Can I use.

---

## 1. Why check, if the page "works"?

Checking your HTML against the rules is called **validating**.

| Broken HTML can cause | Example |
|---|---|
| Pages that look different in different browsers | Each browser patches some mistakes differently |
| Broken accessibility | The same `id` twice → a label points at the wrong box |
| Broken CSS or JavaScript | A tag left open swallows the next section, so your selectors miss |
| Broken forms | A `<form>` inside a `<form>` → the inner form tag is ignored |
| Search problems | Content ends up in the wrong place |

> 🔍 **Don't mix up — valid and good.** Valid means your HTML follows the grammar. It doesn't mean you picked the right tags. `<div onclick>` buttons, skipped heading levels and useless `alt` text can all be **valid**. Validation is the minimum. The [quality gate](../../assets/cheatsheets/quality-gate.md) is the real standard.

## 2. The checkers

### The W3C checker — the official one

[validator.w3.org/nu](https://validator.w3.org/nu/): check a web address, upload a file, or paste your code. Messages are **errors** (fix them) or **warnings/info** (think about them).

How to read the results:

1. Fix the **first** error first. Later errors are often caused by it.
2. Check again after each batch of fixes.
3. Use "Show outline" to check your headings.

### html-validate — in your terminal and on GitHub

```bash
npx html-validate "curriculum/**/*.html"
```

This repo comes with a `.htmlvalidate.json` settings file. html-validate is stricter than the W3C checker in useful ways (accessibility rules, like buttons without `type`, or missing labels), and it works offline.

> 📝 The two tools sometimes disagree. When they do, the official HTML rules (the WHATWG spec, which the W3C checker follows closely) decide what's valid. html-validate's extra rules are good-practice opinions you can switch on or off.

## 3. What you wrote vs what the browser built

| View | Shows | How to open it |
|---|---|---|
| **View Source** | Exactly what the server sent | Ctrl+U / Cmd+Option+U |
| **DevTools Elements (Inspector)** | The **live page tree (DOM)**, after the browser's patching and any JavaScript changes | F12, Ctrl+Shift+I / Cmd+Option+I, or right-click → Inspect |

When the two are different, the browser patched something (or JavaScript changed it). That difference is your bug.

### How browsers patch up common mistakes

| You wrote | The browser builds | What it teaches you |
|---|---|---|
| `<p>Text <div>Block</div></p>` | `<p>Text </p><div>Block</div><p></p>` | A `<p>` can't hold block tags, so it closes itself |
| `<table><tr><td>A</td></tr></table>` | Adds a `<tbody>` | Selectors like `table > tr` don't match |
| `<b><i>text</b></i>` | Re-orders it to `<b><i>text</i></b>` (using the "adoption agency" rules) | Wrong nesting gets "fixed" — not always the way you meant |
| `<ul><div>…</div></ul>` | Keeps it (not valid, but kept) | Screen readers may count the list items wrong |
| `<form><form>…</form></form>` | Drops the inner `<form>` start tag | The inner form's `action` is lost |
| Missing `</li>`, `</p>`, `</td>` | Closed automatically | Allowed to be left out — but write them anyway |
| `<div/>` | A `<div>` start tag; the slash is ignored | It doesn't close itself — it swallows what comes after |
| `<img src="a.jpg" alt="Logo>` | The attribute keeps going until the next `"` | One missing quote can eat half a page |

## 4. DevTools jobs every developer should know

| Job | How |
|---|---|
| Look at an element | Right-click → Inspect, or the picker icon |
| Change HTML live | Double-click a tag or attribute in Elements, or "Edit as HTML" |
| See which CSS applies, and which is beaten | The Styles pane (crossed out = beaten) |
| See the box sizes | The Computed or Layout pane |
| See the accessibility tree, name and role | Elements → Accessibility pane (Chrome); Accessibility Inspector (Firefox) |
| Pretend to be a phone | The device toolbar (Ctrl+Shift+M / Cmd+Shift+M) |
| Slow down the network or CPU | Network panel → throttling; Performance panel → CPU |
| Find files that failed (404 pictures, CSS) | Network panel, filter by status. The Console shows errors |
| Check colour contrast | Click a colour square in Styles → contrast ratio |
| Pretend dark mode, reduced motion, focus | The Rendering panel (Chrome) |
| Run a full check | The Lighthouse panel |

## 5. A step-by-step way to fix bugs

1. **Make it happen again** — the exact steps, browser and screen size.
2. **Validate** — fix the errors first. They may be the cause.
3. **Look** — compare the DOM with your source. Check the Console and Network panels.
4. **Narrow it down** — remove or comment out code until the bug goes away. The last thing you removed is the culprit. Then build the smallest example that still shows the bug.
5. **Make a guess**, change **one** thing, test again.
6. **Fix the cause**, not just what you can see — then check you didn't break anything else.

### Quick checks for common problems

| Problem | Check this first |
|---|---|
| A picture doesn't show | A 404 in the Network tab? The path, capital letters, the file ending, `<base>` |
| CSS doesn't work | A 404 in Network? `rel="stylesheet"`? Does the selector match the DOM (not the source)? Specificity? |
| JavaScript can't find an element | Does the script run before the element exists (`defer`)? A typo in the `id`? The same `id` twice? |
| Clicking a label doesn't go to the box | Does `for` match the `id` exactly? The same `id` twice? |
| A field's value isn't sent | Missing `name`? `disabled`? |
| The layout falls apart after one section | A tag left open — validate |
| Strange letters (`Ã©`) | Saved in one encoding, read as another (Lesson 16) |
| Works on your computer, breaks online | Linux servers care about capital letters in paths; `file://` behaves differently from `https://`; paths that start with `/` |

## 6. Accessibility and quality checks

| Tool | Kind | What it finds |
|---|---|---|
| **Lighthouse** (DevTools) | Automatic | Speed, accessibility, SEO, good practice |
| **axe DevTools** (browser extension) | Automatic | Detailed accessibility problems, with fixes |
| **WAVE** (browser extension, wave.webaim.org) | Automatic, visual | Problems marked right on the page |
| **Keyboard test** | By hand | Focus order, visible focus, getting stuck, things you can't reach |
| **Screen reader** (NVDA, VoiceOver, TalkBack) | By hand | Names, roles, reading order, announcements |
| **"CSS off" test** | By hand | Does the page still make sense as a document? |

> ❗ Automatic tools find only about a third to a half of accessibility problems. A perfect Lighthouse accessibility score on a page you can't use with a keyboard is common. Always do the checks by hand too.

**The "CSS off" test** (from the original course this repo grew from): switch off styles (Firefox: View → Page Style → No Style; or the Web Developer extension). If the page still reads like a sensible document — headings in order, lists as lists, form fields labelled — your HTML is doing its job.

## 7. Editor tools

| Tool | Why |
|---|---|
| **VS Code** (or any editor with these features) | Colours your code, suggests as you type, closes tags for you |
| **Emmet** (built into VS Code) | `ul>li*3>a` + Tab → a whole list. `!` + Tab → the starter page. |
| **Prettier** | Tidies your formatting every time you save |
| **Live Server** / `npx serve` | A local server that reloads for you. Needed for modules, fetch and service workers |
| **HTMLHint** or **html-validate** extensions | Shows mistakes as you type |
| **axe Accessibility Linter** | Shows accessibility problems in the editor |
| **.editorconfig** | Same indentation and line endings in every editor (this repo has one) |

### Emmet shortcuts worth knowing

| Type this | You get |
|---|---|
| `!` | The HTML starter page (check `lang` — it starts as `en`) |
| `nav>ul>li*4>a[href=#]` | A menu with 4 links |
| `section.card#intro` | `<section class="card" id="intro"></section>` |
| `p{Hello}` | `<p>Hello</p>` |
| `img[alt]` | A picture with empty alt — **fill it in** |
| `lorem20` | 20 words of dummy text |

## 8. Automatic checks on GitHub (CI)

Run the checker every time you push, with GitHub Actions. This is called **CI** (continuous integration):

```yaml
# .github/workflows/validate.yml
name: Validate HTML
on: [push, pull_request]
jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npx --yes html-validate "curriculum/**/*.html" "projects/**/*.html"
```

As the project grows, add a link checker (like `lychee`) and Lighthouse CI.

## 9. Does the browser support it?

Before you use a newer feature, check:

| Where | Use it for |
|---|---|
| **Baseline** (labels on MDN and web.dev) | "Newly available" = works in the latest Chrome, Edge, Firefox and Safari. "Widely available" = has worked in all of them for 30 months. |
| **MDN support tables** | Which version of each browser, with notes |
| **Can I use** | What share of people can use it, worldwide or by country (for example, Nigeria) |
| **Real phones** | Chrome on Android is by far the most used in Nigeria and much of Africa. Test Safari on iPhone too |

Ways to cope: **build in layers** (it works without the feature, and better with it), **check first** (`if ("showPopover" in HTMLElement.prototype)`, or CSS `@supports`), and backup content (like the text between `<video>` tags).

---

## Mistakes people make

- Trusting "it looks fine in Chrome".
- Fixing checker errors from the bottom up.
- Debugging CSS against View Source instead of the DOM.
- Thinking a Lighthouse score of 100 means "accessible".
- Copying Emmet output without filling in `alt` and `lang`.

## Quick quiz

<details>
<summary>1. You wrote <code>&lt;p&gt;&lt;ul&gt;…&lt;/ul&gt;&lt;/p&gt;</code>. What does the browser build?</summary>

`<p></p><ul>…</ul><p></p>`. The `<p>` closes itself before the `<ul>`, and the leftover `</p>` makes an empty paragraph.
</details>

<details>
<summary>2. Why validate, even if the page looks right?</summary>

Browsers patch mistakes differently, and broken HTML can break accessibility, CSS selectors, scripts and forms in ways you can't see.
</details>

<details>
<summary>3. Pictures work on your laptop but give 404 on the live server. What do you suspect first?</summary>

Capital letters: `Photo.JPG` and `photo.jpg` are different files on a Linux server.
</details>

<details>
<summary>4. What does "Baseline widely available" mean?</summary>

The feature has worked in all the main browsers for at least 30 months.
</details>

## Practice

- 💻 Example: [error-recovery.broken.html](examples/error-recovery.broken.html) — broken on purpose (the checker skips it, thanks to `.htmlvalidateignore`). Open it in DevTools.
- ✏️ [Drills for this lesson](../../exercises/drills/21-validation-debugging-tooling.md)
- 🔧 Fix this: [the whole debug set](../../exercises/debug/)

## Read more

| Where | What you get |
|---|---|
| MDN | [Debugging HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML) · [What are browser developer tools?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) — the main explanation, with exercises |
| The Odin Project | [Inspecting HTML and CSS](https://www.theodinproject.com/lessons/foundations-inspecting-html-and-css) · [Browser compatibility](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-browser-compatibility) — hands-on DevTools practice |
| Chrome / Firefox docs | [Chrome DevTools](https://developer.chrome.com/docs/devtools) · [Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/) — full reference |
| Tools | [W3C Nu HTML Checker](https://validator.w3.org/nu/) · [html-validate](https://html-validate.org/) · [Can I use](https://caniuse.com/) · [web.dev Baseline](https://web.dev/baseline) — what you'll use every day |

**Back to:** [the easy lesson](README.md) · **Next easy lesson:** [Lesson 22 · Working like a pro and going online](../22-professional-standards-and-deployment/README.md)
