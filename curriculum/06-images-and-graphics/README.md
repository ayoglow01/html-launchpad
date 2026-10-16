# Lesson 6 · Images

⏱ 40 minutes · 🧰 You need: Lesson 5

## In one sentence

Show a picture with `<img src="file" alt="what it shows">`.

```html
<img src="images/cat.jpg" alt="A ginger cat sleeping on a mat" width="800" height="600">
```

- `src` = **where** the image file is (a path, like in Lesson 5)
- `alt` = **words** describing the picture
- `width` and `height` = its size in pixels

`<img>` has no closing tag.

## Why `alt` is so important

`alt` text is used when:
- a blind person uses a screen reader — it reads the `alt` aloud,
- the image fails to load — the `alt` shows instead,
- Google wants to know what the picture is.

### How to write good alt text

Imagine describing the picture to a friend **on the phone**. What do they need to know?

| Picture | Good `alt` |
|---|---|
| Photo of your team | `alt="Our five team members smiling outside the office"` |
| A logo that links to the home page | `alt="Home"` or the company name |
| A search icon button | `alt="Search"` |
| A decoration (swirl, line) | `alt=""` (empty — "skip this") |

Don't start with "image of" — screen readers already say "image".

## ⚠️ Careful: empty is not the same as missing

```html
<img src="swirl.png" alt="">   ✅ decoration: screen readers skip it
<img src="swirl.png">           ❌ missing: screen readers may read the file name "swirl dot png"
```

## Why `width` and `height`?

Without them, the page **jumps** when the image loads, and people click the wrong thing. With them, the browser saves the right space in advance.

## Pictures with captions

```html
<figure>
  <img src="lekki.jpg" alt="Wooden walkway through tall trees" width="800" height="533">
  <figcaption>The canopy walk at Lekki Conservation Centre.</figcaption>
</figure>
```

The caption is seen by **everyone**. The `alt` is for when the picture **can't be seen**. Don't repeat the same words.

## Which image type?

| Type | Best for |
|---|---|
| **JPG** | Photos |
| **PNG** | Screenshots, images that need see-through parts |
| **WebP / AVIF** | Photos and graphics, but smaller files (faster) |
| **SVG** | Logos and icons — stay sharp at any size |
| **GIF** | Simple animations (often better as a video) |

## Load images only when needed

For pictures further down the page:

```html
<img src="gallery-1.jpg" alt="…" width="800" height="500" loading="lazy">
```

`loading="lazy"` waits until the person scrolls near it. Faster pages!

⚠️ **Don't** use it on the big picture at the top of the page — that one should load straight away.

## Different sizes for phones and computers (preview)

Phones don't need giant images. You can offer several sizes and the browser picks the best:

```html
<img src="photo-800.jpg"
     srcset="photo-480.jpg 480w, photo-800.jpg 800w, photo-1200.jpg 1200w"
     sizes="100vw"
     alt="…" width="1200" height="800">
```

Don't worry if this looks hard — it's covered step by step in the [full version](deep-dive.md).

## ✅ Remember

- `<img src="…" alt="…" width="…" height="…">`
- `alt` = describe it like on a phone call. Decoration = `alt=""`.
- Always add `width` and `height`.
- `loading="lazy"` for pictures lower down the page.

## 🎯 Try it

1. Put a photo of yourself (or anything) on your page with good `alt`.
2. Add a caption using `<figure>` and `<figcaption>`.
3. Write `alt` for a company logo that links to the home page.

<details>
<summary>Answer to 3</summary>

`<a href="index.html"><img src="logo.svg" alt="Sahara Bakery home" width="200" height="50"></a>` — describe where the link goes.
</details>

## Want more?

- 📖 The detailed version (responsive images, `<picture>`, SVG, canvas, image maps): [deep-dive.md](deep-dive.md)
- 💻 Examples: [images.html](examples/images.html) · [svg-canvas-math.html](examples/svg-canvas-math.html)
- ✏️ Practice: [drills](../../exercises/drills/06-images-and-graphics.md) · [fix a broken page](../../exercises/debug/05-images-media.broken.html) · [recipe card challenge](../../exercises/challenges/README.md#c2--recipe-card)
- 🏗️ **Project time!** [P2 · Recipe collection](../../projects/02-recipe-collection/README.md)

➡️ **Next:** [Lesson 7 · Video, audio and embeds](../07-audio-video-and-embeds/README.md)
