# Practice · Lesson 2 · Your first web page

📗 [Easy lesson](../../curriculum/02-html-syntax-and-document-structure/README.md) · 📘 [Full version](../../curriculum/02-html-syntax-and-document-structure/deep-dive.md)

💡 Try each task **before** opening the answer. If a task uses something new, you'll find it in the full version.

### D1 · Boilerplate from memory
Write a complete, valid HTML document for an English page titled "My first page" — without copying.

<details>
<summary>Answer</summary>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>My first page</title>
</head>
<body>
  <h1>My first page</h1>
</body>
</html>
```

Check: doctype first; `lang`; charset early in `<head>`; viewport; `title`.
</details>

### D2 · Anatomy
In `<a href="about.html" class="nav-link">About us</a>` label the opening tag, attribute names, attribute values, content, closing tag, and the element.

<details>
<summary>Answer</summary>

Opening tag `<a href="about.html" class="nav-link">` · attributes `href`, `class` · values `about.html`, `nav-link` · content `About us` · closing tag `</a>` · the **element** is all of it together.
</details>

### D3 · Void elements
Which of these are void (no closing tag)? `img`, `p`, `br`, `input`, `span`, `meta`, `link`, `hr`, `script`, `source`.

<details>
<summary>Answer</summary>

Void: `img`, `br`, `input`, `meta`, `link`, `hr`, `source`. Not void: `p`, `span`, `script` (always needs `</script>`, even with `src`).
</details>

### D4 · Fix the nesting
```html
<p>This is <strong>very <em>important</strong> text</em>.</p>
```

<details>
<summary>Answer</summary>

```html
<p>This is <strong>very <em>important</em></strong><em> text</em>.</p>
```
Or simply `<p>This is <strong>very <em>important</em> text</strong>.</p>` — whichever matches the meaning. Rule: last opened, first closed.
</details>

### D5 · Whitespace
How does this render? `<p>Hello      world
  on    two lines</p>`

<details>
<summary>Answer</summary>

`Hello world on two lines` — runs of whitespace (spaces, tabs, newlines) collapse to one space. Use `<br>` for meaningful line breaks within text, `<pre>` to keep whitespace, CSS for spacing.
</details>

### D6 · Comments
Write a comment saying "Main navigation starts here". Can comments nest?

<details>
<summary>Answer</summary>

`<!-- Main navigation starts here -->`. No — the first `-->` ends the comment. Comments are visible in View Source, so never put secrets in them.
</details>

### D7 · Entities
Write the HTML to display: `5 < 10 & "quotes" © 2026`

<details>
<summary>Answer</summary>

`5 &lt; 10 &amp; "quotes" &copy; 2026` — only `<` and `&` must be escaped in text. Inside a double-quoted attribute, escape `"` as `&quot;`. `©` can be typed directly with UTF-8.
</details>

### D8 · Case and quotes
Are `<P CLASS=intro>` and `<p class="intro">` equivalent? Which should you write?

<details>
<summary>Answer</summary>

Yes, equivalent: element and attribute names are case-insensitive, and simple values can be unquoted. Write lowercase with double quotes — consistent, and unquoted values break on spaces. (Attribute **values** like class names *are* case-sensitive.)
</details>

### D9 · Block vs inline
Can `<span>` contain `<div>`? Can `<a>` contain `<div>`?

<details>
<summary>Answer</summary>

`<span>` (phrasing content) can't contain `<div>`. `<a>` is **transparent**: it can wrap a `<div>` if its parent could contain a `<div>` — and as long as there's no interactive content inside (no nested links or buttons).
</details>
