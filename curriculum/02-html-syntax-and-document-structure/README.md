# Lesson 2 · Your first web page

⏱ 30 minutes · 🧰 You need: a text editor (VS Code) and a browser — see [Getting started](../../README.md#getting-started)

## In one sentence

HTML uses **tags** — words inside angle brackets like `<p>` — to tell the browser what each piece of your page is.

## Make your first page (5 minutes) 🎉

1. Make a folder called `my-site`.
2. Inside it, make a file called `index.html`.
3. Type this (typing it yourself helps you remember):

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>My first page</title>
</head>
<body>
  <h1>Hello, world!</h1>
  <p>This is my very first web page.</p>
</body>
</html>
```

4. Save. Double-click the file. It opens in your browser. **You just made a web page.**

## What each line means

Don't memorise — just understand. You'll copy this starter every time.

| Line | Plain meaning |
|---|---|
| `<!DOCTYPE html>` | "This is a modern HTML page." |
| `<html lang="en">` | "The page starts here, and it's in English." |
| `<head>` … `</head>` | Information **about** the page. Not shown on the page. |
| `<meta charset="UTF-8">` | "Show all letters and symbols correctly" (₦, é, 😊). |
| `<meta name="viewport" …>` | "Fit nicely on phones." |
| `<title>` | The name in the browser tab. |
| `<body>` … `</body>` | Everything people **see**. |

## How a tag works

Most tags come in pairs, like opening and closing a box:

```html
<p>I am a paragraph.</p>
```

- `<p>` — opening tag (the box opens)
- `I am a paragraph.` — the content (what's in the box)
- `</p>` — closing tag. **Notice the slash `/`** (the box closes)

All three together are called an **element**.

### Attributes = extra information

```html
<a href="https://example.com">Visit Example</a>
```

`href="https://example.com"` is an **attribute**. It goes inside the opening tag and gives extra details — here, where the link goes. Pattern: `name="value"`.

### Boxes inside boxes

Tags can go inside other tags. Close the **inside** one first:

```html
✅ <p>I am <strong>very</strong> happy.</p>
❌ <p>I am <strong>very happy.</p></strong>
```

Like nesting dolls: the last one you opened is the first one you close.

### Some tags don't close

A few tags have nothing inside, so they never close. These are called **void** (empty) elements:

```html
<br>     line break
<img>    image
<input>  form box
<meta>   page info
```

## Comments: notes to yourself

```html
<!-- This is a comment. The browser ignores it. -->
```

## ⚠️ Careful

- **Extra spaces disappear.** Ten spaces or five Enter presses in your code show as **one** space on the page.
- **To show `<` or `&` as text**, write `&lt;` and `&amp;`. Otherwise the browser thinks it's a tag.
- **Comments are not secret.** Anyone can see them with View Page Source.

## ✅ Remember

- Every page starts with the same starter (above).
- `<tag>content</tag>` — open, content, close with `/`.
- Attributes go in the opening tag: `name="value"`.
- Close inner tags first.
- `head` = info about the page. `body` = what people see.

## 🎯 Try it

1. Change the title to your name. Save and refresh. Look at the tab.
2. Add another paragraph under the first one.
3. Find the mistake: `<p>Hello <em>friend</p></em>`

<details>
<summary>Answer to 3</summary>

The tags close in the wrong order. Correct: `<p>Hello <em>friend</em></p>`
</details>

## Want more?

- 📖 The detailed version: [deep-dive.md](deep-dive.md)
- 💻 Examples: [boilerplate.html](examples/boilerplate.html) · [dom-tree.html](examples/dom-tree.html)
- ✏️ Practice: [drills](../../exercises/drills/02-syntax-and-structure.md) · [fix a broken page](../../exercises/debug/01-boilerplate.broken.html)

➡️ **Next:** [Lesson 3 · Writing text](../03-text-content/README.md)
