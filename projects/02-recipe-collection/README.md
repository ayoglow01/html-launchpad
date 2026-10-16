# P2 · Recipe collection

**After:** Lesson 6 · **Time:** 4–6 hours · **Pages:** 4 · **Inspired by:** The Odin Project *Recipes* and freeCodeCamp *Build a Recipe Page*

## What you're making

A small Nigerian recipe site: an index page and three recipe pages, in folders, with images. This project is mostly about **several pages, relative paths, and pictures**.

## Folders and files

```
recipe-collection/
├── index.html
├── images/
│   ├── jollof-rice-800.jpg   (+ a 480w version)
│   ├── egusi-soup-800.jpg
│   └── puff-puff-800.jpg
└── recipes/
    ├── jollof-rice.html
    ├── egusi-soup.html
    └── puff-puff.html
```

Use your own photos, free photos (credit them), or the stand-ins in `assets/images/`.

## What it needs

### Index page
- [ ] A full starter page with a clear title; `<h1>` "Odunayo's Kitchen" (or your own).
- [ ] An intro paragraph and a list of the three recipes, each with a thumbnail image **inside the link** and the recipe name as link text.
- [ ] Thumbnails use `srcset` + `sizes` (two widths) and have `width`/`height`.

### Each recipe page
- [ ] Title "Jollof rice — Odunayo's Kitchen"; one `<h1>`.
- [ ] Hero image in a `<figure>` with `<figcaption>`; correct `alt` (the caption and the alt shouldn't repeat each other).
- [ ] Prep time, cook time, and servings in a description list; durations in `<time datetime="PT45M">`.
- [ ] Ingredients: `<ul>`; method: `<ol>`; a nested list for sub-steps somewhere.
- [ ] A link back to the index (`../index.html`) and links to the other two recipes.
- [ ] One link to another site (like a source or a video), done safely.
- [ ] At least one decorative image (divider or icon) with `alt=""`.

### Paths
- [ ] **No** paths starting with `/`, and no paths to your own computer (`C:\…`). Everything relative.
- [ ] All file and folder names lowercase with hyphens.

## Score yourself

For each area, give yourself **0** (missing), **1** (started), **2** (mostly right) or **3** (spot on).

| Area | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Folder structure and naming | | | | |
| Relative paths (all work from every page) | | | | |
| Alt text (pictures that inform, link, or decorate) | | | | |
| Pictures for every screen, with width and height | | | | |
| `figure`/`figcaption` use | | | | |
| Lists and `time` | | | | |
| Validation (all pages) | | | | |

## Extra challenges

- Use `<picture>` to send WebP, with JPEG as a backup.
- Put an SVG logo right in the page, with a name screen readers can read.
- Put it on GitHub Pages and check every path still works there.
