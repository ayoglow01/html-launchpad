# Lesson 5 · Links

⏱ 40 minutes · 🧰 You need: Lesson 4

## In one sentence

A link is made with `<a href="where-to-go">words to click</a>`.

```html
<a href="https://www.wikipedia.org">Visit Wikipedia</a>
```

- `<a>` = anchor (the link)
- `href` = **where** it goes
- The words between = **what people click**

## Linking to your own pages

Say your folder looks like this:

```
my-site/
├── index.html
├── about.html
└── images/
    └── logo.png
```

From `index.html`, link to `about.html`:

```html
<a href="about.html">About me</a>
```

Same folder? Just write the file name. Easy.

## Paths: giving directions 🗺️

A **path** tells the browser how to walk from **this page** to **that file**.

| You want to… | Write | Like saying… |
|---|---|---|
| Go to a file in the same folder | `about.html` | "It's right here." |
| Go **into** a folder | `images/logo.png` | "Open the images folder, then take logo.png." |
| Go **up** one folder | `../index.html` | "Step out of this folder first." |
| Go up two folders | `../../index.html` | "Step out twice." |

`../` means **"go up one folder"**. That's the trick most beginners miss.

### Example

```
my-site/
├── index.html
└── blog/
    └── post.html
```

From `blog/post.html`, a link home is:

```html
<a href="../index.html">Home</a>
```

## Links to other websites

Always start with `https://`:

```html
✅ <a href="https://www.example.com">Example</a>
❌ <a href="www.example.com">Example</a>   ← browser looks for a FILE called www.example.com
```

## Open in a new tab

```html
<a href="https://developer.mozilla.org" target="_blank" rel="noopener">MDN (opens in new tab)</a>
```

Only do this when there's a good reason, and **tell people** it opens a new tab.

## Jump to a part of the same page

Give the target an `id`, then link with `#`:

```html
<a href="#contact">Go to contact</a>
…
<h2 id="contact">Contact</h2>
```

## Email, phone, download

```html
<a href="mailto:hello@example.com">Email us</a>
<a href="tel:+2348030000000">Call us</a>
<a href="menu.pdf" download>Download our menu (PDF)</a>
```

## Write good link words

```html
❌ To see our prices, <a href="prices.html">click here</a>.
✅ See our <a href="prices.html">prices</a>.
```

Blind users often hear a list of only the links. Ten "click here" links tell them nothing.

## Link or button?

- **Goes somewhere?** → link `<a>`
- **Does something** (save, open menu, send)? → button `<button>`

## ⚠️ Careful

- **Capital letters matter online.** `About.html` and `about.html` are different files on most web servers. Use **lowercase** names always.
- **No spaces in file names.** Use dashes: `contact-us.html`, not `contact us.html`.

## ✅ Remember

- `<a href="…">words</a>`
- Same folder: `file.html`. Into folder: `folder/file.html`. Up: `../file.html`.
- Other sites start with `https://`.
- Link words should make sense on their own.

## 🎯 Try it

1. Make `about.html` next to your `index.html`. Link them to each other.
2. Make a folder `blog` with `post.html` inside. Link from the post back to `index.html`.

<details>
<summary>Answer to 2</summary>

In `blog/post.html`: `<a href="../index.html">Home</a>`
</details>

## Want more?

- 📖 The detailed version: [deep-dive.md](deep-dive.md)
- 💻 Example site: [examples/index.html](examples/index.html)
- 🌐 The Odin Project: [Links and images](https://www.theodinproject.com/lessons/foundations-links-and-images)
- ✏️ Practice: [drills](../../exercises/drills/05-links-and-paths.md) · [fix broken links](../../exercises/debug/04-links-paths.broken.html)
- 🏗️ **Project time!** [P1 · Your profile page](../../projects/01-personal-profile/README.md)

➡️ **Next:** [Lesson 6 · Images](../06-images-and-graphics/README.md)
