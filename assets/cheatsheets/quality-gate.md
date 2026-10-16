# Professional HTML Quality Gate ✅

Every page and project must pass this check before you call it done. The first 43 checks come from the original course this repo grew from. The rest add search, security, speed and going online. The lesson number tells you where each check is taught.

**How to use it:** copy this file into your project, tick the boxes honestly, and fix everything that isn't ticked. If something doesn't apply, write **N/A** and why.

## 1. The document (Lessons 2, 13)

- [ ] `<!DOCTYPE html>` is the very first line
- [ ] One `<html>` wraps `<head>` and `<body>`
- [ ] The right `lang` on `<html>` (and on any part in another language — Lesson 16)
- [ ] `<meta charset="UTF-8">` comes first in `<head>`, and the file really is saved as UTF-8
- [ ] Viewport meta: `width=device-width, initial-scale=1` — zooming isn't blocked
- [ ] A clear `<title>` that's different on every page (the topic first, the site name last)
- [ ] The right meta tags: a description; a canonical address where it's needed
- [ ] A site icon, and (for whole sites) a manifest

## 2. Structure and meaning (Lessons 3, 8)

- [ ] Headings in order: one `<h1>`, no levels skipped
- [ ] `header`, `nav`, `main`, `article`, `section`, `aside` and `footer` used for what they mean
- [ ] One `<main>`, with the page's main content
- [ ] If there are several `nav`s or regions, each has its own name
- [ ] No piles of `div`s where meaningful tags would fit ("div soup")
- [ ] Text tags used correctly: `strong`/`em`/`b`/`i`/`mark`/`small`/`del`/`ins`/`s`, `time`, `abbr`, `code`, quotes
- [ ] Passes the "CSS off" test — it still makes sense with no styles

## 3. Links and menus (Lesson 5)

- [ ] The menu works on every page, and marks the current page (`aria-current="page"`)
- [ ] Links within the site work (paths are right; capitals match the real file names)
- [ ] Links to other sites work
- [ ] Link text makes sense on its own — no "click here"
- [ ] `target="_blank"` only when there's a good reason, people are told, and `rel="noopener"` is there
- [ ] Links go places; buttons do things

## 4. Pictures and media (Lessons 6, 7)

- [ ] Pictures that give information have good `alt` text
- [ ] Decorative pictures have an empty `alt=""`
- [ ] Pictures have `width` and `height` (so nothing jumps)
- [ ] Pictures sized for each screen (`srcset`/`sizes`/`picture`) where it helps
- [ ] Modern formats (WebP/AVIF), with backups, where it matters
- [ ] Media has the right controls; nothing plays sound by itself
- [ ] Captions where they're needed; transcripts for audio
- [ ] Iframes have a `title`; embeds from other sites are sandboxed or lazy-loaded where it makes sense

## 5. Tables (Lesson 9)

- [ ] Tables only for data
- [ ] Every table has a `<caption>`
- [ ] Proper header cells (`<th>`)
- [ ] `scope` where needed (or `headers`/`id` for complicated tables)
- [ ] Wide tables scroll, and keyboards can reach them

## 6. Forms (Lessons 10, 11)

- [ ] Every field has a visible label that's linked to it
- [ ] Every field has a `name`
- [ ] The right input `type`s, `inputmode` and `autocomplete` words
- [ ] Sensible checks (rules, `:user-invalid`, error messages everyone can reach)
- [ ] Related fields grouped with `fieldset`/`legend`
- [ ] The right `method`; file uploads use `method="post"` and `enctype="multipart/form-data"`
- [ ] Every button has a `type`

## 7. Works for everyone (Lesson 12)

- [ ] Keyboard works: you can reach and use everything, in a sensible order, without getting stuck
- [ ] You can always see where the focus is
- [ ] A skip link to the main content
- [ ] Text contrast of at least 4.5:1 (3:1 for large text and for controls)
- [ ] ARIA only where it's needed — and used correctly
- [ ] Messages that appear later are announced (live regions) where needed
- [ ] Checked with an automatic tool **and** by hand with a keyboard and a screen reader

## 8. Valid, tidy code (Lessons 2, 21, 22)

- [ ] No `id` used twice
- [ ] No tags inside tags where they aren't allowed
- [ ] No old styling tags or attributes (`font`, `center`, `bgcolor`, `border` on tables…)
- [ ] Zero errors from the checker (Nu checker / html-validate)
- [ ] One code style throughout (small letters, quotes, indents)
- [ ] Tidy folders; file names in small letters, with dashes

## 9. Google and sharing (Lesson 13)

- [ ] A description written for this page
- [ ] The canonical address is a full address, and correct
- [ ] Open Graph (`og:title`, `og:type`, `og:image` as a full address, `og:url`) and `twitter:card`
- [ ] `robots` meta only where you mean it; robots.txt doesn't block pages that have `noindex`
- [ ] Structured data (if you use it) passes the test and matches what people can see

## 10. Speed (Lesson 20)

- [ ] Speed has been thought about: the main (LCP) picture isn't lazy; `fetchpriority="high"` where there's a reason
- [ ] Pictures and iframes further down the page are lazy-loaded
- [ ] Scripts use `defer`, `async` or `module` — none hold up the page without a reason
- [ ] Resource hints used only on a few chosen files (fonts preloaded with `crossorigin`)
- [ ] No broken file paths (check the Network panel for 404s)
- [ ] Checked with Lighthouse or PageSpeed on phone settings

## 11. Safety (Lesson 19)

- [ ] No secrets in HTML, JavaScript, comments or `data-*`
- [ ] Hidden fields aren't trusted
- [ ] Browser checks aren't trusted — the server checks too
- [ ] Data you don't control is never added with `innerHTML`
- [ ] A CSP is in place (a header is best); `frame-ancestors` set with a header
- [ ] Scripts from other sites use a fixed version and `integrity` where possible
- [ ] HTTPS everywhere; no mixed content

## 12. Going online (Lesson 22)

- [ ] No broken links on the live site
- [ ] `404.html`, `robots.txt` and `sitemap.xml` are there (for whole sites)
- [ ] Security headers set, where the host allows it
- [ ] A privacy notice if you collect personal data

---

**The real goal.** Don't aim to be someone who just knows HTML tags. Aim to look at any page and decide correctly: What should this content mean? Which tag says that? How will a screen reader read it, a search engine understand it, and a browser handle it? And how can the code stay easy to look after, and follow the official rules?
