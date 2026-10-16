# Lesson 3 · Writing text — the full version

📘 **This is the full version.** New to this? Read the [easy lesson](README.md) first, then come back for the details.

⏱ 3–4 hours · 🌱 Beginner · 🧰 You need: Lesson 2

Most of the web is text. This lesson is about picking the tag that says what a bit of text **is** — a heading, a quote, a keyboard key, a date — not how it looks.

## By the end you can

- Build headings in the right order.
- Choose correctly between look-alikes: `strong`/`b`, `em`/`i`, `s`/`del`, `q`/`blockquote`.
- Mark up code, keys to press, program messages, variables, dates and short forms.
- Write special characters, and know when you don't need to.

---

## 1. Headings: `h1` to `h6`

Headings show how your page is **organised**, like chapter titles in a book. People using screen readers jump from heading to heading (often with the `H` key). Google uses headings to understand what the page is about.

```html
<h1>HTML Course</h1>
  <h2>Module 1</h2>
    <h3>Elements</h3>
    <h3>Attributes</h3>
  <h2>Module 2</h2>
```

**Rules:**

1. **One `<h1>` per page**, for the page's main topic. (HTML doesn't force this, but MDN and accessibility experts recommend it.)
2. **Don't skip levels going down** (`h2` straight to `h4`). Going back up any amount is fine (`h4` to `h2`).
3. **Never pick a level for its size.** CSS controls size.
4. Headings hold text-level things only. No `<div>`, `<p>` or lists inside.

> ⚠️ **Exception — the "every section starts at h1" myth.** Old tutorials say you can start every `<section>` with `<h1>` and the browser will work out the real levels. Browsers and screen readers **never did that**. The idea was **removed from HTML in 2022**. Since 2025, browsers are also dropping the old styles that made `<h1>` smaller inside sections. Use real levels (`h2`, `h3`…) that match your structure.

## 2. Paragraphs, line breaks and topic breaks

| Tag | Means | Use it for | Don't use it for |
|---|---|---|---|
| `<p>` | A paragraph | Blocks of writing | Making space; wrapping lists or other blocks |
| `<br>` | A line break that **belongs to the text** | Postal addresses, poems, song lyrics | Making space between things |
| `<hr>` | A **change of topic or scene** | Between scenes in a story, or topics in an article | A decorative line (use a CSS `border`) |

```html
<p>
  Ada Okafor<br>
  12 Marina Road<br>
  Lagos
</p>
```

## 3. Bold, italic and their look-alikes

Many tags *look* the same but *mean* different things:

| Tag | What it means | Example |
|---|---|---|
| `<strong>` | **Really important**, serious or urgent | `<strong>Warning:</strong> this deletes all data.` |
| `<b>` | Stands out, but **isn't more important** | Key words in a summary, product names in a review |
| `<em>` | **Stress** that changes the meaning of the sentence | `I <em>never</em> said she stole it.` |
| `<i>` | A **different voice**: a foreign phrase, a technical term, a ship's name, a thought | `<i lang="la">Carpe diem</i>` |
| `<u>` | A **note-type mark** without words | A spelling mistake |
| `<mark>` | **Highlighted** because it matters right now | Words matching a search |
| `<small>` | **Small print** and side notes | Legal text, copyright |
| `<s>` | **No longer true** | An old price, a sold-out ticket |
| `<del>` | **Removed** in an edit | Tracked changes |
| `<ins>` | **Added** in an edit | Tracked changes |
| `<sub>` / `<sup>` | Low or raised text **that the subject needs** | H<sub>2</sub>O · E = mc<sup>2</sup> · 1<sup>st</sup> |

```html
<p>You should <em>always</em> validate your HTML.</p>
<p><i lang="la">Carpe diem</i> — seize the day.</p>
<p>Spelling: <u>recieve</u></p>
<p>Price: <s>₦25,000</s> ₦18,000</p>
<p>The meeting is on <del datetime="2026-10-01">Monday</del> <ins datetime="2026-10-02">Tuesday</ins>.</p>
<footer><small>&copy; 2026 Example Ltd. All rights reserved.</small></footer>
```

### How to choose

| Pair | Ask yourself |
|---|---|
| `strong` or `b`? | Is it *more important* than the words around it? → `strong`. Does it just look different by habit? → `b`. |
| `em` or `i`? | Read it aloud with stress. Does the meaning change? → `em`. Is it a different *kind* of text (foreign word, ship's name)? → `i`. |
| `s` or `del`? | Is it just **out of date**? → `s`. Was it **edited out** of a document? → `del` (you can add `datetime` and `cite`). |
| `mark` or `strong`? | Is it highlighted because of **what the reader is doing** (searching)? → `mark`. Is it important on its own? → `strong`. |

> ⚠️ **Exception:** Most screen readers **don't say anything different** for `strong`, `em`, `mark`, `del` or `ins`. The meaning still counts (for reader mode and other tools). But if the reader *must* know — "deleted", "new" — say it in words too. For example, a hidden "(deleted)" label (Lesson 12 shows how).

> 💡 **Tip:** Want bold or italic just for looks? Use CSS (`font-weight`, `font-style`) on a fitting tag or a `<span class="…">`.

## 4. Quotes and titles of works

| Tag | What it is |
|---|---|
| `<blockquote>` | A long quote from somewhere else, on its own lines |
| `<q>` | A short quote inside a sentence. The browser adds the quote marks |
| `<cite>` | The **title of a work**: a book, article, film, song or website |

```html
<figure>
  <blockquote cite="https://www.w3.org/WAI/fundamentals/accessibility-intro/">
    <p>The Web is fundamentally designed to work for all people…</p>
  </blockquote>
  <figcaption>W3C, <cite>Introduction to Web Accessibility</cite></figcaption>
</figure>

<p>As the guide says, <q>Write semantic HTML.</q></p>
```

> ⚠️ **Exceptions:**
> - The `cite` **attribute** on `<blockquote>` or `<q>` holds a web address, but browsers **don't show it**. Write who said it outside the quote. The `figure` + `figcaption` pattern above is the usual way.
> - `<cite>` is for **titles of works**, not people's names.
> - Don't type your own quote marks inside `<q>`. You'll get two sets.
> - Never use `<blockquote>` just to push text inwards. Use CSS.

## 5. Short forms and definitions

```html
<p>
  <dfn><abbr title="HyperText Markup Language">HTML</abbr></dfn>
  is the standard markup language for web documents.
</p>
<p>Later on you can just write <abbr title="HyperText Markup Language">HTML</abbr>.</p>
```

| Tag | What it is |
|---|---|
| `<abbr>` | A short form, like HTML or NDPA. `title` can hold the full words |
| `<dfn>` | The place where a word is **explained** for the first time. The sentence around it (or the `<dd>` next to it) is the explanation |

> ⚠️ **Exception:** `title` tooltips don't show on phones or for keyboard users, and screen readers treat them differently. For important short forms, **write the full words the first time**: "HyperText Markup Language (<abbr>HTML</abbr>)".

## 6. Computer text

| Tag | What it is | Example |
|---|---|---|
| `<code>` | A piece of code | Use `<code>&lt;main&gt;</code> once per page. |
| `<pre>` | Text where spaces and line breaks **stay exactly as typed** | Code blocks, text drawings |
| `<kbd>` | Something the user types or presses | Press <kbd>Ctrl</kbd> + <kbd>S</kbd> |
| `<samp>` | A message a program **prints** | <samp>Build completed successfully.</samp> |
| `<var>` | A variable in maths or code | The area is <var>w</var> × <var>h</var>. |

```html
<pre><code>const name = "Ada";
console.log(name);</code></pre>
```

> ⚠️ **Exceptions inside `<pre>`:**
> - A line break **straight after** `<pre>` is ignored. Any others are kept.
> - `<pre>` keeps spaces, but it **still reads HTML**. Write `<` as `&lt;` and `&` as `&amp;`. Otherwise your example turns into real tags.
> - Your editor's indentation counts too. Don't indent code inside `<pre>` to match the HTML around it.

## 7. Dates and values for computers

```html
<p>The event starts <time datetime="2026-10-14T18:30+01:00">14 October, 6:30 pm WAT</time>.</p>
<p>Course length: <time datetime="PT6H30M">six and a half hours</time>.</p>
<p>Best seller: <data value="SKU-4471">Wireless keyboard</data></p>
```

| Tag | What it does |
|---|---|
| `<time>` | A date, a time or a length of time. `datetime` holds the version computers read. The text inside is for people. |
| `<data>` | Joins text to a `value` that computers read, like a product code |

Formats `datetime` accepts: `2026-10-14` · `2026-10` · `18:30` · `2026-10-14T18:30` · `2026-10-14T18:30+01:00` · `2026-W42` (a week) · `PT6H30M` (6 hours 30 minutes).

> 📝 If the text inside is already in a computer format (`<time>2026-10-14</time>`), you can leave out `datetime`.

## 8. Contact details: `<address>`

`<address>` is for **how to contact the person or company behind the page** (or behind one article).

```html
<footer>
  <address>
    Questions? Email <a href="mailto:hello@example.com">hello@example.com</a>
    or call <a href="tel:+2348000000000">+234 800 000 0000</a>.
  </address>
</footer>
```

> ⚠️ **Exception:** Not every street address is an `<address>`. A list of branch locations, or where an event happens, is normal text (`<p>` with `<br>`). Use `<address>` only for the contact details of whoever owns the page or wrote the article.

## 9. Boxes with no meaning: `span` and `div`

| | `<span>` | `<div>` |
|---|---|---|
| Size | Part of a line | A whole block |
| Meaning | **None** | **None** |
| Use it for | Styling or labelling a few words | Grouping blocks for layout or styling |

```html
<p>Welcome to our <span lang="fr">café</span>.</p>
```

Use them **last**, only when no tag with a real meaning fits.

## 10. Special characters, symbols and emoji

You can write a character with a code that starts with `&` and ends with `;`. This is called a **character reference**.

| Kind | Example | Shows |
|---|---|---|
| By name | `&copy;` | © |
| By number | `&#169;` | © |
| By hex number | `&#xA9;` | © |

**You must use a code** for `<` (write `&lt;`) and for `&` when it could be mistaken for a code (write `&amp;`). Inside an attribute, use a code for the quote mark you wrapped it in (`&quot;`).

| Code | Character | When you need it |
|---|---|---|
| `&lt;` `&gt;` | < > | Showing code. `&gt;` is rarely required, but keeps code easy to read |
| `&amp;` | & | "Tom &amp; Jerry" |
| `&quot;` `&apos;` | " ' | Inside an attribute that uses the same quote mark |
| `&nbsp;` | a space that never breaks | Keep things together: `10&nbsp;km`, `Mr.&nbsp;Bello` |
| `&shy;` | a hidden hyphen | Shows where a very long word may break |
| `&mdash;` `&ndash;` | — – | If your keyboard can't type them |

> 💡 **Tip:** With `<meta charset="UTF-8">` you can type **any** character straight in: `©`, `₦`, `€`, `→`, `ẹ`, `🙂`. You only *need* codes for `<`, `&`, quote marks in attributes, and invisible characters like `&nbsp;`.

> ❗ Don't use rows of `&nbsp;` to push text across. Use CSS. And remember emoji are text: screen readers read out their names ("smiling face"). Think before using them as bullet points or decoration.

## 11. Pronunciation guides: `ruby`, `rt`, `rp`

Ruby puts small notes above (or beside) text, mostly to show how to say East Asian characters — like Japanese furigana or Chinese pinyin. You can use it for any note tied to particular letters.

```html
<p lang="ja"><ruby>漢<rp>(</rp><rt>kan</rt><rp>)</rp>字<rp>(</rp><rt>ji</rt><rp>)</rp></ruby></p>
```

| Tag | Job |
|---|---|
| `<ruby>` | Wraps the main text and its notes |
| `<rt>` | The note |
| `<rp>` | Brackets that only show in browsers that can't do ruby |

> 📝 Old tutorials mention `<rb>` and `<rtc>`. They were taken out of HTML. Use `<ruby>` + `<rt>` (+ `<rp>`).

---

## Mistakes people make

- Using `<h4>` because it "looks the right size".
- `<br><br>` for space; `<blockquote>` for indenting.
- `<b>` everywhere because "it's the same as strong".
- Putting `<div>` in a `<pre>` example without writing `&lt;`.
- `<cite>` around a person's name.
- Leaving out `datetime` when the text isn't in a computer format.

## Quick quiz

<details>
<summary>1. A shop page crosses out "Sold out" sizes. <code>s</code> or <code>del</code>?</summary>

`<s>`. The information is just out of date. `<del>` is for edits to a document.
</details>

<details>
<summary>2. A book title: <code>&lt;i&gt;</code>, <code>&lt;em&gt;</code> or <code>&lt;cite&gt;</code>?</summary>

`<cite>`. It's for the title of a work.
</details>

<details>
<summary>3. A page goes h1 → h2 → h4. What's wrong? And what if the h4 "looks better"?</summary>

A level is skipped. Use `<h3>` and change its size with CSS.
</details>

<details>
<summary>4. Why doesn't <code>&lt;pre&gt;&lt;p&gt;Hi&lt;/p&gt;&lt;/pre&gt;</code> show the tags?</summary>

`<pre>` keeps spaces but still reads HTML. Write `&lt;p&gt;Hi&lt;/p&gt;`.
</details>

<details>
<summary>5. Write a <code>&lt;time&gt;</code> for "7 pm, 1 January 2027, Lagos time".</summary>

`<time datetime="2027-01-01T19:00+01:00">7 pm, 1 January 2027</time>`. Lagos time (WAT) is one hour ahead of UTC.
</details>

## Practice

- 💻 Example: [text-semantics.html](examples/text-semantics.html)
- ✏️ [Drills for this lesson](../../exercises/drills/03-text-content.md)
- 🔧 Fix this: [03-text-semantics.broken.html](../../exercises/debug/03-text-semantics.broken.html)
- 🧩 Challenge: [Mark up a letter](../../exercises/challenges/README.md#c1--mark-up-a-letter)

## Read more

| Where | What you get |
|---|---|
| MDN | [Headings and paragraphs](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) · [Emphasis and importance](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance) · [Advanced text features](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features) — the correct meanings |
| MDN challenge | [Marking up a letter](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Marking_up_a_letter) — the best single exercise for this lesson |
| The Odin Project | [Working with Text](https://www.theodinproject.com/lessons/foundations-working-with-text) — clear and practical |
| W3Schools | [Formatting](https://www.w3schools.com/html/html_formatting.asp) · [Quotations](https://www.w3schools.com/html/html_quotation_elements.asp) · [Computer code](https://www.w3schools.com/html/html_computercode_elements.asp) · [Entities](https://www.w3schools.com/html/html_entities.asp) · [Symbols](https://www.w3schools.com/html/html_symbols.asp) · [Emojis](https://www.w3schools.com/html/html_emojis.asp) — quick tables |
| freeCodeCamp | [Responsive Web Design](https://www.freecodecamp.org/learn/responsive-web-design-v9/) — lots of practice |

> ⚠️ W3Schools treats `<b>`/`<strong>` and `<i>`/`<em>` as almost the same, and focuses on looks. Go with the difference explained above. It's what the HTML rules say.

**Back to:** [the easy lesson](README.md) · **Next easy lesson:** [Lesson 4 · Lists](../04-lists/README.md)
