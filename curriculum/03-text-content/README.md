# Lesson 3 · Writing text

⏱ 30 minutes · 🧰 You need: Lesson 2

## In one sentence

Choose the tag that says **what the text is** — a heading, a paragraph, something important — not how it looks.

## Headings: `<h1>` to `<h6>`

Headings are like the titles in a book: the book title, then chapters, then sections.

```html
<h1>Lagos Food Guide</h1>        <!-- the book title: only one per page -->
<h2>Street food</h2>             <!-- a chapter -->
<h3>Suya</h3>                    <!-- a section inside that chapter -->
<h3>Puff-puff</h3>
<h2>Restaurants</h2>             <!-- the next chapter -->
```

Rules:
- **One `<h1>`** per page.
- **Don't skip levels** going down (no jumping from `h2` to `h4`).
- Pick headings by **importance**, not size. Size can be changed later with CSS.

## Paragraphs and line breaks

```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

Need a new line *inside* the same text, like an address or a poem? Use `<br>`:

```html
<p>14 Adeola Odeku Street<br>
Victoria Island<br>
Lagos</p>
```

⚠️ Don't use lots of `<br>` to make space. That's CSS's job.

## Important vs emphasis

| Tag | Meaning | Example |
|---|---|---|
| `<strong>` | This is **important** | `<strong>Never</strong> touch a hot iron.` |
| `<em>` | Say this word **with stress** | `I <em>did</em> lock the door!` |
| `<mark>` | Highlighted, like a highlighter pen | Search results: `<mark>jollof</mark>` |
| `<small>` | Fine print | `<small>Terms apply.</small>` |

There are also `<b>` (bold, but not important) and `<i>` (italic, like a foreign word or a book title in a sentence). Use `<strong>` and `<em>` when the meaning matters.

**Why does this matter?** Screen readers (apps that read pages aloud for blind people) can change their voice for `<strong>` and `<em>`. `<b>` just looks bold.

## Quotes

```html
<p>My teacher said <q>practice every day</q>.</p>       <!-- short quote in a sentence -->

<blockquote>
  <p>A long quote goes in its own block.</p>
</blockquote>
```

`<q>` adds the quote marks for you.

## Little helpers you'll use often

```html
<abbr title="World Health Organization">WHO</abbr>   <!-- short form: hover shows full name -->
<time datetime="2026-10-31">31 October</time>          <!-- a date computers can read -->
<code>npm start</code>                                 <!-- computer code -->
<kbd>Ctrl</kbd> + <kbd>S</kbd>                         <!-- keys to press -->
H<sub>2</sub>O and x<sup>2</sup>                       <!-- low and high text -->
<del>₦5,000</del> <ins>₦4,000</ins>                    <!-- removed and added -->
```

## Boxes with no meaning: `<div>` and `<span>`

- `<div>` = a big box for grouping things.
- `<span>` = a small box around a few words.

They add **no meaning**. Use them only when no better tag fits.

## Special characters

Most symbols you can just type: ₦ © é 😊. But two characters confuse the browser:

| Want to show | Write |
|---|---|
| `<` | `&lt;` |
| `&` | `&amp;` |

## ⚠️ Careful

- `<cite>` is for the **name of a book, film, or song** — not a person's name.
- `<address>` is for **contact details of the page owner or author** — not every address on the page.

## ✅ Remember

- One `<h1>`, then `h2`, `h3`… in order.
- `<p>` for paragraphs. `<br>` only for lines that belong together.
- `<strong>` = important. `<em>` = stressed.
- Choose tags for **meaning**, not looks.

## 🎯 Try it

Mark up this text with the right tags:

> **Safety notice** (main title). Before you start (sub-title). **Warning:** always switch off the generator before refuelling. Water is H2O.

<details>
<summary>Answer</summary>

```html
<h1>Safety notice</h1>
<h2>Before you start</h2>
<p><strong>Warning:</strong> always switch off the generator before refuelling.</p>
<p>Water is H<sub>2</sub>O.</p>
```
</details>

## Want more?

- 📖 The detailed version: [deep-dive.md](deep-dive.md)
- 💻 Example: [text-semantics.html](examples/text-semantics.html)
- 🌐 The Odin Project: [Working with text](https://www.theodinproject.com/lessons/foundations-working-with-text)
- ✏️ Practice: [drills](../../exercises/drills/03-text-content.md) · [fix a broken page](../../exercises/debug/03-text-semantics.broken.html) · [mark up a letter](../../exercises/challenges/README.md#c1--mark-up-a-letter)

➡️ **Next:** [Lesson 4 · Lists](../04-lists/README.md)
