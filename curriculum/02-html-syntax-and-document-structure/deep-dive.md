# Lesson 2 · Your first web page — the full version

📘 **This is the full version.** New to this? Read the [easy lesson](README.md) first, then come back for the details.

⏱ 3–4 hours · 🌱 Beginner · 🧰 You need: Lesson 1

This is the grammar of HTML. Get it right now and every lesson after this gets easier.

## By the end you can

- Name every part of a tag and put tags inside each other correctly.
- List the 13 tags that never close, and say why.
- Write the starter page from memory and explain each line.
- Explain how the browser reads HTML, and why it quietly "fixes" mistakes.
- Know where capital letters matter and where they don't.

---

## 1. The words you need

```html
<a href="/about.html">About us</a>
│ │    │             │        │
│ │    │             │        └─ closing tag
│ │    │             └─ content
│ │    └─ attribute value
│ └─ attribute name
└─ opening tag (the tag's name is "a")
```

| Word | Plain meaning |
|---|---|
| **Element** | The whole thing: opening tag + content + closing tag → `<p>Hello</p>` |
| **Tag** | Just the bit in angle brackets → `<p>` or `</p>` |
| **Content** | What sits between the tags: text, other elements, or both |
| **Attribute** | Extra information inside the opening tag → `href="/about.html"` |
| **Markup** | All the tags and attributes you wrap around content to say what it is |

> 🔍 **Don't mix up:** People say "the p tag" all the time, and that's fine. Strictly, `<p>` is a *tag* and `<p>Hello</p>` is an *element*. Interviewers sometimes check.

## 2. Tags that never close

Some elements can't hold anything inside them, so they have no closing tag. They're called **void elements**. There are exactly **13**:

`area`, `base`, `br`, `col`, `embed`, `hr`, `img`, `input`, `link`, `meta`, `source`, `track`, `wbr`

```html
<img src="cat.jpg" alt="A ginger cat asleep on a keyboard">
<input type="email" name="email">
<meta charset="UTF-8">
```

| ✅ Right | ❌ Wrong |
|---|---|
| `<br>` | `<br></br>` (the browser reads the stray `</br>` as a *second* `<br>`) |
| `<img src="a.jpg" alt="…">` | `<img src="a.jpg" alt="…"></img>` |

> ⚠️ **Exception — the slash at the end.** You'll see `<br />` and `<img … />` online. HTML allows the slash, but it **does nothing**. It's left over from an older, stricter HTML called XHTML.
>
> On a tag that *should* close, it's harmful: `<div />` does **not** close the div. Everything after it ends up inside.
>
> The one place `/>` really closes a tag is inside `<svg>` and `<math>` (drawings and maths), for example `<circle r="5" />`.

## 3. Tags inside tags

Putting tags inside other tags is called **nesting**. Close them in the **reverse order** you opened them, like brackets in maths.

| ✅ Right | ❌ Wrong |
|---|---|
| `<p><strong>Important</strong></p>` | `<p><strong>Important</p></strong>` |

```html
<section>
  <h2>Services</h2>
  <p>We build <em>accessible</em> websites.</p>
</section>
```

We use family words to describe this:

| Word | In the example |
|---|---|
| **Parent** | `section` is the parent of `h2` and `p` |
| **Child** | `h2` and `p` are children of `section` |
| **Siblings** | `h2` and `p` have the same parent |
| **Descendant** | `em` is inside `section` (it's a grandchild) |
| **Ancestor** | `section` is an ancestor of `em` |

You'll use these words again when you learn CSS and JavaScript.

## 4. Attribute rules

```html
<p class="intro" id="welcome" lang="en">Hello</p>
```

- Attributes go in the **opening tag** only, with spaces between them.
- Each attribute can appear only **once** per tag.
- **Put quotes around values.** You can skip quotes if the value has no spaces or `" ' = < >` or backtick. But quoting every time is simpler and never breaks. Single or double quotes both work. This course uses double.

```html
<!-- ✅ Works, but avoid -->           <input type=text name=user>
<!-- ❌ Breaks: the value has a space --> <img alt=My cat src=cat.jpg>
<!-- ✅ Always safe -->                 <img alt="My cat" src="cat.jpg">
```

### On/off attributes

Some attributes are **on** when they're there and **off** when they're not. They're called **boolean attributes**. The value doesn't matter.

```html
<input type="checkbox" checked>
<button type="submit" disabled>Save</button>
<video src="clip.mp4" controls></video>
```

All of these mean "on": `disabled`, `disabled=""`, `disabled="disabled"`.

> ❗ **Trap:** `disabled="false"` **still disables** the button. Being there is what counts. To switch it off, delete the attribute.

> ⚠️ **Exception — attributes that look on/off but aren't.** Some attributes take a word as their value, so `"false"` really means false: `contenteditable="false"`, `draggable="false"`, `spellcheck="false"`, `translate="no"`, and every ARIA attribute such as `aria-hidden="false"`. These are called **enumerated** attributes. When unsure, look it up.

## 5. Do capital letters matter?

| Thing | Do capitals matter? | Example |
|---|---|---|
| Tag names | No | `<P>` and `<p>` are the same |
| Attribute names | No | `CLASS` = `class` |
| `DOCTYPE` | No | `<!doctype html>` is fine |
| `id` and `class` **values** | **Yes** | `id="Menu"` is not `#menu` |
| File names and paths (on most servers) | **Yes** | `Logo.png` is not `logo.png` |
| Most keyword values | No | `type="EMAIL"` works, but write `email` |

**Simple rule:** write everything in lowercase, unless it's text people will read.

## 6. The starter page, line by line

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Page title — Site name</title>
</head>
<body>
  <!-- everything people see goes here -->
</body>
</html>
```

| Line | What it does | If you leave it out |
|---|---|---|
| `<!DOCTYPE html>` | Tells the browser "use modern rules" (**standards mode**). It's an instruction, not an element. | The browser switches to **quirks mode** and copies bugs from the 1990s. Layouts break in strange ways. |
| `<html lang="en">` | Wraps the whole page. `lang` says what language it's in. | Screen readers may read with the wrong accent. Translation gets worse. It also fails the accessibility rules (WCAG 3.1.1). |
| `<head>` | Holds information *about* the page. | The browser makes one anyway (see section 8). |
| `<meta charset="UTF-8">` | Says how letters are stored, so every letter shows correctly. Must be in the **first 1024 bytes** of the file, so put it first. | Letters like `é`, `₦`, `“”` and emoji turn into rubbish like `â€™`. |
| `<meta name="viewport" …>` | Tells phones to use their real width. | Phones pretend to be about 980px wide. Your page looks tiny. |
| `<title>` | The page's name: tab text, bookmarks, history, Google results, and the first thing a screen reader says. **Required.** | The validator complains. The tab says "Untitled". Worse for Google and screen readers. |
| `<body>` | Everything people see. Only one per page. | The browser makes one anyway. |

See it with notes: [examples/boilerplate.html](examples/boilerplate.html)

> ❗ **Never add `maximum-scale=1` or `user-scalable=no` to the viewport line.** It stops people with poor eyesight from zooming in (WCAG 1.4.4). Some browsers, like Safari on iPhone, ignore it anyway. That tells you how bad it is.

> 💡 **Language codes:** `en` English, `en-GB` British English, `fr` French, `yo` Yorùbá, `ha` Hausa, `ig` Igbo, `pcm` Nigerian Pidgin, `ar` Arabic. Use the language the page is *written* in, not the visitor's language.

## 7. How the browser reads your HTML

| Word | Plain meaning |
|---|---|
| **Parsing** | The browser reading your HTML text, following fixed rules |
| **DOM** | The tree the browser builds from your HTML and keeps in memory. CSS styles this tree. JavaScript reads and changes it. |
| **Node** | One item in the tree: a tag, a piece of text, or a comment |

```html
<section id="about">
  <h2>About Me</h2>
  <p>I build web applications.</p>
</section>
```

The browser turns that into this tree:

```
section#about
├── #text (spaces and line breaks)
├── h2
│   └── #text "About Me"
├── #text (spaces and line breaks)
├── p
│   └── #text "I build web applications."
└── #text (spaces and line breaks)
```

> 📝 The spaces and new lines between your tags become little text items in the tree. You'll see them in DevTools. In JavaScript, `childNodes` includes them and `children` doesn't.

### The browser fixes your mistakes, quietly

HTML has exact rules for broken code, so every browser fixes it in the same way. That's why broken pages often look fine. Here's an example:

```html
<p>Intro <div>Box</div></p>
```

A `<p>` isn't allowed to hold a `<div>`. So when the browser sees `<div>`, it **closes the paragraph first**. Then the leftover `</p>` has nothing to close, so the browser makes a new, empty paragraph. You end up with:

```html
<p>Intro </p><div>Box</div><p></p>
```

Now any CSS you wrote for "a div inside a p" matches nothing. You'd never know why, unless you looked at the DOM in DevTools.

> ❗ "It shows up in the browser" doesn't mean "it's correct". A fixed-up page has a different tree from the one you wrote. That breaks CSS, JavaScript and screen readers.

## 8. Tags you're allowed to skip

HTML lets you leave out some tags. The browser adds them for you:

- You can skip `<html>`, `<head>` and `<body>`. They still appear in the DOM.
- `</p>` is added for you when a new block starts (`<div>`, `<ul>`, `<h2>`, `<section>`, `<table>`, another `<p>`…).
- `</li>`, `</dt>`, `</dd>`, `</option>`, `</tr>`, `</td>` and `</th>` can be skipped in their usual places.
- A `<table>` with no `<tbody>` gets one added automatically.

> ⚠️ **Exception:** Allowed doesn't mean wise. Skipping tags makes your code harder to read and easier to break. In this course we **always close every tag that can close**, and always write `<html>`, `<head>` and `<body>`.

## 9. What's allowed inside what

Every element has rules about what it may hold. This is called its **content model**. Elements are sorted into groups (**content categories**):

| Group | Examples | Note |
|---|---|---|
| Metadata | `title`, `meta`, `link`, `style`, `script`, `base` | Mostly in `<head>` |
| Flow | Almost everything you put in `<body>` | — |
| Sectioning | `article`, `aside`, `nav`, `section` | — |
| Heading | `h1`–`h6`, `hgroup` | — |
| Phrasing | `span`, `a`, `em`, `strong`, `img`, `input`, plain text | Things that sit inside a line of text |
| Embedded | `img`, `video`, `audio`, `iframe`, `canvas`, `svg`, `math` | Content brought in from somewhere else |
| Interactive | `a` with `href`, `button`, `input`, `select`, `textarea`, `details`, `label` | Things you click or type in |

Rules you'll bump into all the time:

| Rule | ❌ Wrong example |
|---|---|
| `<p>` can only hold phrasing content (text-level things) | `<p><ul>…</ul></p>` |
| Something clickable can't hold something else clickable | `<a href="/a"><button>Go</button></a>` · a link inside a link |
| `<ul>` and `<ol>` can only hold `<li>` (and `script`/`template`) | `<ul><p>Item</p></ul>` |
| Headings can only hold phrasing content | `<h2><div>…</div></h2>` |

> ⚠️ **Exception — the link that takes on its parent's rules.** `<a>` is **transparent**: it can hold whatever its parent can hold (except clickable things). So wrapping a whole card in a link is allowed:
> ```html
> <a href="/post/1"><article><h2>Title</h2><p>Teaser…</p></article></a>
> ```
> It's valid. But a screen reader will read the *whole card* out as the link's name. For long cards, put the link on the heading instead.

## 10. "Block" and "inline" — really a CSS thing

You'll hear people say some tags are **block** (`div`, `p`, `h1` — they start on a new line) and some are **inline** (`span`, `a`, `em` — they stay in the line). That's only how they *look* by default. One line of CSS can change it.

> ❗ Pick tags for what the content **is**, never for how they look. What's allowed inside what (section 9) is the real HTML rule.

## 11. Comments

```html
<!-- Navigation starts here -->
```

- You can't put a comment inside a comment. The first `-->` ends it.
- Comments are **sent to every visitor**. Anyone can read them with View Source.
- Use them to explain *why* you did something, not to describe *what* the code obviously does.

> ❗ Never put passwords, secret keys, private links or personal notes in comments. Anyone can read them.

## 12. Spaces and line breaks

In normal text, many spaces, tabs and new lines **shrink into one space**. Spaces at the start and end of a paragraph are ignored.

```html
<p>Hello        world</p>   <!-- shows: Hello world -->
```

- For spacing, use CSS (`margin`, `padding`, `gap`). Not `&nbsp;&nbsp;&nbsp;` or `<br><br>`.
- To keep spaces exactly as typed (code, some poems), use `<pre>` (Lesson 3) or the CSS `white-space` property.

> ⚠️ **Exception:** A space *between* two inline tags does show. `<a>One</a><a>Two</a>` shows as `OneTwo`. Put a new line between them and you get `One Two`.

---

## Mistakes people make

- Closing tags that never close (`</img>`, `</input>`).
- Writing `<div />` and thinking it's closed.
- Putting blocks like `<div>` inside `<p>` or `<span>`.
- `id` values that differ only in capitals, or CSS with the wrong capitals.
- Forgetting `lang` or the viewport line.
- Trusting how the page looks instead of checking the DOM.

## Quick quiz

<details>
<summary>1. Name all 13 void elements.</summary>

`area`, `base`, `br`, `col`, `embed`, `hr`, `img`, `input`, `link`, `meta`, `source`, `track`, `wbr`.
</details>

<details>
<summary>2. What does <code>&lt;input required="false"&gt;</code> do?</summary>

The field is still required. `required` is on/off. Being there switches it on, whatever the value says.
</details>

<details>
<summary>3. What happens without <code>&lt;!DOCTYPE html&gt;</code>?</summary>

The browser uses quirks mode and copies old bugs. CSS and layout stop working the way you've learned.
</details>

<details>
<summary>4. You write <code>&lt;p&gt;&lt;section&gt;Hi&lt;/section&gt;&lt;/p&gt;</code>. What does the browser build?</summary>

`<p></p><section>Hi</section><p></p>`. The paragraph closes when `<section>` starts. The leftover `</p>` makes a new, empty paragraph.
</details>

<details>
<summary>5. Is <code>&lt;a href="/x"&gt;&lt;div&gt;Card&lt;/div&gt;&lt;/a&gt;</code> allowed?</summary>

Yes, as long as the link's parent could hold a `<div>`. `<a>` is transparent. It would be wrong if the card had a button or another link inside.
</details>

## Practice

- 💻 Examples: [boilerplate.html](examples/boilerplate.html) · [dom-tree.html](examples/dom-tree.html)
- ✏️ [Drills for this lesson](../../exercises/drills/02-syntax-and-structure.md)
- 🔧 Fix these: [01-boilerplate.broken.html](../../exercises/debug/01-boilerplate.broken.html) · [02-nesting.broken.html](../../exercises/debug/02-nesting.broken.html)

## Read more

| Where | What you get |
|---|---|
| MDN | [Basic HTML syntax](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax) — clear and exact |
| The Odin Project | [Elements and Tags](https://www.theodinproject.com/lessons/foundations-elements-and-tags) · [HTML Boilerplate](https://www.theodinproject.com/lessons/foundations-html-boilerplate) — the best line-by-line walk through the starter page |
| freeCodeCamp | [Responsive Web Design](https://www.freecodecamp.org/learn/responsive-web-design-v9/) — the *Cat Photo App* workshop, for lots of practice |
| W3Schools | [Elements](https://www.w3schools.com/html/html_elements.asp) · [Attributes](https://www.w3schools.com/html/html_attributes.asp) · [Comments](https://www.w3schools.com/html/html_comments.asp) — quick look-ups with a try-it box |
| Scrimba | [Learn HTML and CSS](https://scrimba.com/learn-html-and-css-c0p) — interactive videos |
| MDN (extra) | [Content categories](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories) · [Quirks mode](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode) — more on sections 9 and 6 |

**Back to:** [the easy lesson](README.md) · **Next easy lesson:** [Lesson 3 · Writing text](../03-text-content/README.md)
