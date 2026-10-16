# Lesson 14 · Adding CSS and JavaScript — the full version

📘 **This is the full version.** New to this? Read the [easy lesson](README.md) first, then come back for the details.

⏱ 2–3 hours · 🔨 Builder · 🧰 You need: Lessons 1–13

This isn't a CSS or JavaScript course. It's about **the HTML side**: how styles and scripts get attached to a page, how your loading choices affect speed and bugs, and how your HTML turns into the tree (the DOM) that JavaScript and tools like React work with.

## By the end you can

- Add CSS in three ways, and say which one wins.
- Use `class`, `id` and `data-*` as hooks without messing up meaning.
- Choose between normal, `defer`, `async` and module scripts.
- Explain how HTML becomes the DOM, and what "build in layers" means.

---

## 1. Three ways to add CSS

```html
<!-- 1. A separate file (best) -->
<link rel="stylesheet" href="css/styles.css">

<!-- 2. In the head -->
<style>
  .intro { font-size: 1.25rem; }
</style>

<!-- 3. On one tag -->
<p style="color: #0e405e;">Hello</p>
```

| | Separate file | `<style>` in the head | `style=""` on a tag |
|---|---|---|---|
| Works on many pages | ✅ | ❌ | ❌ |
| Browser saves it for next time | ✅ | ❌ | ❌ |
| Keeps looks apart from content | ✅ | Partly | ❌ |
| Blocked by a strict security policy (CSP, Lesson 19)? | No | Yes, unless specially allowed | Yes, unless `'unsafe-inline'` is allowed |
| Good for | Almost everything | One-off pages; the most urgent CSS | Values set by JavaScript; emails |

**Which wins if they disagree?** A `style=""` on a tag beats the stylesheets (unless a rule uses `!important`). Between a `<style>` block and a separate file, **neither wins automatically**. Normal CSS rules decide: the more **specific** rule wins, and if they're equally specific, the one that comes **later** in the page wins.

> 🔍 **Don't mix up:** Some tutorials say "CSS in the head beats CSS in a file". That's a myth. It only *looks* true because `<style>` usually comes after `<link>`. Swap them round, and the file wins.

### The `media` attribute

```html
<link rel="stylesheet" href="print.css" media="print">
```

If `media` doesn't match (here: you're not printing), the browser still downloads the file, but later, and it **doesn't hold up** the page.

## 2. Hooks: `class`, `id` and `data-*`

```html
<article class="card card--featured" id="post-42" data-category="tutorial">…</article>
```

| Hook | Use it for | Notes |
|---|---|---|
| `class` | Styling groups of elements; picking them in JavaScript | A list with spaces between; reusable; capitals matter |
| `id` | One unique element: label targets, `#` links, ARIA, JavaScript | Avoid it in CSS — it's very hard to override |
| `data-*` | Your own data, for JavaScript or CSS | JavaScript reads it with `element.dataset` |

Name classes for **what something is** (`.card`, `.error-message`), not how it looks (`.red-text`, `.big-left-box`). Looks change. What it is doesn't.

> ❗ A class doesn't change what a tag means. `<div class="button">` is still a `div` to the browser and to screen readers. Pick the right tag first, then add classes for style.

## 3. The `<script>` tag

```html
<script src="js/main.js" defer></script>

<script>
  console.log("inline script");
</script>
```

### How loading choices change things

```
Normal:   reading HTML ──■ stop ■── download ── run ── carry on reading
defer:    reading HTML ─────────────────────────────── done → run (in order)
          download ════════ (at the same time)
async:    reading HTML ──────■ stop ■─────────── carry on
          download ════════ run (as soon as it arrives, any order)
module:   works like defer (can also be async)
```

| | Nothing added | `defer` | `async` | `type="module"` |
|---|---|---|---|---|
| Stops the HTML being read while it downloads? | **Yes** | No | No | No |
| When it runs | Straight away | After all the HTML is read | As soon as it arrives | Like `defer` (or `async` if you add it) |
| Scripts run in the order you wrote them? | Yes | **Yes** | **No** | Yes |
| Is the whole page there when it runs? | Only the parts above it | Yes | Not guaranteed | Yes |
| Use for | Rarely: must run before anything shows | **Your own code (the usual choice)** | Scripts that stand alone: analytics, ads | Modern code with `import` and `export` |

**Simple rule:** put `<script src="…" defer>` in the `<head>`. It starts downloading early and runs once the page is ready.

> ⚠️ **Exceptions:**
> - `defer` and `async` **do nothing on scripts written inside the page** (no `src`). Module scripts written inside the page *are* deferred.
> - **Module scripts won't load if you double-click the file** (`file://`). They need permission rules (CORS) that only a server provides. Use a local server.
> - Modules use strict mode, keep their variables to themselves (not global), and only run once even if you include them twice.
> - `nomodule` scripts only run in browsers that **can't** do modules — an old backup you'll rarely need today.

> 📝 `<script>` always needs a closing tag, even with `src`: `<script src="x.js"></script>`. And you don't need `type="text/javascript"` — JavaScript is what you get anyway.

### Data blocks

A `<script>` with a `type` that isn't JavaScript doesn't run. It just holds data:

```html
<script type="application/ld+json">{ "@context": "https://schema.org", … }</script>
<script type="importmap">{ "imports": { "utils": "./js/utils.js" } }</script>
```

## 4. `<noscript>`

```html
<noscript>
  <p>The interactive map needs JavaScript. <a href="locations.html">See the list of locations</a>.</p>
</noscript>
```

Only shows when JavaScript is switched off or can't run. It's better than a blank page — but building in layers (section 7) is better than `<noscript>`.

## 5. From HTML to the DOM to JavaScript

```
your HTML  →  the browser reads it  →  DOM tree  →  JavaScript reads and changes the DOM  →  the page updates
```

```html
<button type="button" id="like" data-post-id="42" data-liked="false">Like</button>
<p id="count">0 likes</p>

<script type="module">
  const button = document.querySelector("#like");
  const count = document.querySelector("#count");

  button.addEventListener("click", () => {
    const liked = button.dataset.liked === "true";
    button.dataset.liked = String(!liked);            // changes data-liked
    button.setAttribute("aria-pressed", String(!liked));
    count.textContent = liked ? "0 likes" : "1 like";
  });

  console.log(button.dataset.postId); // "42" — data-post-id becomes dataset.postId
</script>
```

- `data-post-id` in HTML becomes `dataset.postId` in JavaScript (dashes become capital letters).
- `dataset` values are **always text**.
- `textContent` puts in plain text safely. `innerHTML` reads HTML — risky with anything users typed (Lesson 19).

> 🔍 **Don't mix up — attributes and properties.** The attribute is what you wrote in the HTML (`value="Ada"`). The property is what's in the box *right now* (`input.value`). As soon as someone types, they're different: `getAttribute("value")` still gives you the *starting* value.

## 6. `onclick` and friends in your HTML

```html
<button type="button" onclick="save()">Save</button>   <!-- works, but… -->
```

Avoid these in real projects:

- They mix behaviour into your HTML.
- The code runs in the global space, so your functions must be global.
- A strict **security policy blocks them** (Lesson 19).

Use `addEventListener` in a script file instead.

## 7. Build in layers

Build the page in layers, so each layer works even if the next one fails. This is called **progressive enhancement**:

```
HTML        → it works: you can read it, links go places, forms send
 + CSS      → it looks good
 + JS       → it feels nicer: instant checks, no reloads, animations
```

Examples:

| Feature | HTML on its own | What JavaScript or CSS adds |
|---|---|---|
| Search | `<form method="get">` goes to a results page | Instant results as you type |
| FAQ | `<details>`/`<summary>` already opens and closes | A smooth animation |
| Photo gallery | Links to the full-size photos | A pop-up viewer |
| Menu | A visible list of links | A menu button on small screens |

Scripts fail more often than you'd think: slow internet, blocked third-party files, one error stopping all the others, old phones. A page built in layers still works when that happens.

---

## Mistakes people make

- `<script src>` in `<head>` without `defer`, so it runs before the elements it needs exist.
- `async` on scripts that depend on each other.
- Double-clicking a page that uses module scripts.
- Using `id` in CSS everywhere.
- Class names that describe looks.
- `innerHTML` with text users typed.

## Quick quiz

<details>
<summary>1. Two scripts must run in order, after the page is ready. Which attribute?</summary>

`defer` on both (or make both `type="module"`).
</details>

<details>
<summary>2. A <code>&lt;style&gt;</code> block and a CSS file set the same thing on the same selector. Which wins?</summary>

Whichever comes later in the page.
</details>

<details>
<summary>3. What does <code>element.dataset.userId</code> read?</summary>

The `data-user-id` attribute, as text.
</details>

<details>
<summary>4. Why do <code>onclick</code> attributes fail on some live sites?</summary>

A security policy (CSP) without `'unsafe-inline'` blocks them.
</details>

## Practice

- 💻 Example: [loading-and-dom.html](examples/loading-and-dom.html)
- ✏️ [Drills for this lesson](../../exercises/drills/14-html-with-css-and-js.md)

## Read more

| Where | What you get |
|---|---|
| MDN | [Getting started with CSS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started) · [DOM scripting introduction](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting) · [script reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script) — the main explanation |
| The Odin Project | [Intro to HTML and CSS](https://www.theodinproject.com/lessons/foundations-introduction-to-html-and-css) · [DOM Manipulation and Events](https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events) — the best hands-on intro to the DOM |
| W3Schools | [HTML CSS](https://www.w3schools.com/html/html_css.asp) · [Styles](https://www.w3schools.com/html/html_styles.asp) · [Classes](https://www.w3schools.com/html/html_classes.asp) · [Id](https://www.w3schools.com/html/html_id.asp) · [Scripts](https://www.w3schools.com/html/html_scripts.asp) · [noscript](https://www.w3schools.com/tags/tag_noscript.asp) — quick look-ups |
| freeCodeCamp | [Responsive Web Design](https://www.freecodecamp.org/learn/responsive-web-design-v9/) — where to go next for CSS |

**Back to:** [the easy lesson](README.md) · **Next easy lesson:** [Lesson 15 · Pop-ups, accordions and menus](../15-interactive-elements/README.md)
