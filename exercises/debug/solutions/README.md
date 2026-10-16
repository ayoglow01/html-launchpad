# Answers: the broken pages ✅

Try each one yourself first! Each section lists every problem, the fix, and **why** it matters, then links to the fixed file. Fixed files live one folder deeper, so their picture paths have one extra `../`.

---

## 01 · Boilerplate — 8 problems

| # | Problem | Fix | Why |
|---|---|---|---|
| 1 | No `<!DOCTYPE html>` | Add it as the first line | Without it the browser uses **quirks mode** — old, messy layout rules |
| 2 | `<html>` has no `lang` | `lang="en"` | Screen readers need it to pronounce words; also translation and word breaks (WCAG 3.1.1) |
| 3 | `<meta charset>` after `<title>` | Make it the first element in `<head>` | It must be in the first 1024 bytes — and the title itself may have letters that need it |
| 4 | `user-scalable=no` | Remove it | Stops people with poor eyesight from zooming in (WCAG 1.4.4) |
| 5 | Two `<title>` elements | Keep one, make it descriptive: "Ada Obi — Portfolio" | Exactly one title is allowed |
| 6 | `<p>` inside `<head>` | Move content to `<body>` | Page content in the head makes the browser close `<head>` and start `<body>` early — everything after it ends up in the wrong place |
| 7 | `<p>` never closed | Add `</p>` | You're allowed to leave it out, but writing it saves surprises when the content changes |
| 8 | A second `<body>` nested in the first | Remove it | Only one `<body>` is allowed. The browser quietly ignores the extra one, which hides your mistake |

→ [01-boilerplate.fixed.html](01-boilerplate.fixed.html)

## 02 · Nesting and syntax — 7 problems

| # | Problem | Fix | Why |
|---|---|---|---|
| 1 | `<em>…<strong>…</em></strong>` misnested | Close in reverse order: `</strong></em>` | Last opened, first closed. Browsers "fix" wrong nesting in ways you can't predict |
| 2 | `<div>` inside `<p>` | Separate paragraphs (or `<span>` if inline) | A `<p>` can only hold text-level tags. The browser closes the `<p>` before the `<div>`, leaving a stray `</p>` |
| 3 | `class=intro text` | `class="intro text"` | Without quotes, a value stops at the first space. This made `class="intro"` plus an attribute called `text` |
| 4 | `<h2>` inside `<span>` | Remove the span | Inline tags can't hold headings |
| 5 | `<p>` directly inside `<ul>` | `<li>` | Lists may only contain `<li>` |
| 6 | `<button>` inside `<a>` | Use one: a link for navigation | Clickable things can't go inside clickable things — keyboards and screen readers can't tell what should happen |
| 7 | `</img>` | Remove it | `img` is an empty (void) tag — it has no closing tag |

→ [02-nesting.fixed.html](02-nesting.fixed.html)

## 03 · Text semantics — 9 problems

| # | Problem | Fix | Why |
|---|---|---|---|
| 1 | `<h1>` then `<h4>` | `<h2>` | Don't skip levels. Headings are an outline, not font sizes |
| 2 | `<b>Warning:</b>` | `<strong>` | Something important needs `strong`. `b` only makes it look different |
| 3 | `<font color>` | A meaningful tag + CSS | `<font>` is obsolete |
| 4 | `<cite>` around a person | `<cite>` around the work's title | `cite` is for titles of works |
| 5 | `<time>next Friday</time>` | `datetime="2026-10-16"` | Without a computer-friendly `datetime`, the text inside `<time>` must itself be a proper date or time |
| 6 | `<i>npm install</i>` | `<code>` | Computer code has its own element |
| 7 | `<b>Enter</b>` | `<kbd>` | Keyboard input |
| 8 | Four `<br>` for spacing | Separate paragraphs + CSS margin | `<br>` is for line breaks that are part of the content |
| 9 | `H2O` | `H<sub>2</sub>O` | The lowered 2 is part of the meaning in chemical formulas |

→ [03-text-semantics.fixed.html](03-text-semantics.fixed.html)

## 04 · Links and paths — 9 problems

The page lives at `site/blog/post.html`.

| # | Problem | Fix | Why |
|---|---|---|---|
| 1 | `href="index.html"` | `../index.html` | Paths start from `blog/`, and that file isn't there |
| 2 | `../About.html` | `../about.html` | Servers care about capitals |
| 3 | `src="images/logo.svg"` | `../images/logo.svg` | Same reason as 1 |
| 4 | "click here" | Descriptive text: "beginner's guide (PDF)" | Link text must make sense alone (WCAG 2.4.4); say the file type |
| 5 | `href="www.example.com"` | `https://www.example.com/` | Without `https://` it's a **relative** path: `blog/www.example.com` |
| 6 | `target="_blank"` with no warning | Add "(opens in new tab)" and `rel="noopener"` | A new tab opening without warning confuses people; `noopener` is clear protection |
| 7 | `href="comments"` | `href="#comments"` | Links to a spot on the page need `#` |
| 8 | `tel:0803 000 0000` | `tel:+2348030000000` | No spaces in the address; the international format works from any country |
| 9 | `<a href="#" onclick>` for a menu | `<button type="button">` | Actions are buttons. `href="#"` jumps to the top and is read out as a link |

→ [04-links-paths.fixed.html](04-links-paths.fixed.html)

## 05 · Images and media — 11 problems

| # | Problem | Fix | Why |
|---|---|---|---|
| 1 | Hero has no `alt` | Describe it | Missing alt isn't valid, and screen readers may read out the file name |
| 2 | Hero `loading="lazy"` | Remove; add `fetchpriority="high"` | It's probably the main (LCP) picture — lazy-loading it slows the page |
| 3 | Hero has no `width`/`height` | `width="1200" height="800"` | Stops the page jumping (CLS) |
| 4 | Logo link `alt="logo image"` | `alt="Campus home"` | For a picture that's a link, alt says where it goes. "image" adds nothing |
| 5 | Decorative divider `alt="divider"` | `alt=""` | Screen readers should skip decorative pictures |
| 6 | Caption in a `<p>` inside `<figure>` | `<figcaption>` | Links the caption to the figure |
| 7 | Video `autoplay` with sound and no `controls` | Remove autoplay, add `controls` | Browsers block it anyway, and people need to control it |
| 8 | Video without captions | `<track kind="captions">` | WCAG 1.2.2 |
| 9 | `<audio>` without `controls` and transcript | Add both | Without controls you can't see it; transcripts help Deaf visitors (WCAG 1.2.1) |
| 10 | `<iframe>` without `title` | `title="Campus tour video"` | Frames need a name screen readers can read |
| 11 | `<picture>` without `<img>` | Add `<img>` with `alt` | `<img>` is required — it's the tag that actually shows the picture |

→ [05-images-media.fixed.html](05-images-media.fixed.html)

## 06 · Tables — 7 problems

| # | Problem | Fix | Why |
|---|---|---|---|
| 1 | Title in a `<p>` before the table | `<caption>` | Gives the table a proper name that screen readers find |
| 2 | `border`, `cellpadding` | CSS | Old styling attributes |
| 3 | Headers as `<td><b>` | `<th scope="col">` | Real headers are read out with each cell |
| 4 | No `<thead>`/`<tbody>` | Add them | Clear structure; also helps with styling and printing |
| 5 | Names in `<td>` | `<th scope="row">` | Row headers give context to scores |
| 6 | Tunde's row has 4 columns (colspan 2 + 2 cells) | Remove the extra cell | Each row needs the same number of columns, or they don't line up |
| 7 | Layout table | Flexbox/Grid | Tables are for data. Layout tables confuse screen readers |

→ [06-tables.fixed.html](06-tables.fixed.html)

## 07 · Forms — 12 problems

| # | Problem | Fix | Why |
|---|---|---|---|
| 1 | `method="get"` with a password | `post` | The password would show up in the address, history and server logs |
| 2 | Name field: placeholder, no label | `<label for>` | Placeholders disappear when you type, and aren't reliable names |
| 3 | `for="email"` vs `id="e-mail"` | Match them | The label isn't connected, so clicking it does nothing |
| 4 | Email as `type="text"` | `type="email"` | The right phone keyboard, and built-in checking |
| 5 | Phone as `type="number"` | `type="tel"` | Phone numbers are ID numbers, not amounts; `number` drops the 0 at the start |
| 6 | Password `autocomplete="off"` | `new-password` | Lets password managers generate strong passwords |
| 7 | Required `<select>` with no empty first option | `<option value="">Choose a state</option>` | Otherwise the first real option is pre-selected and `required` never fails |
| 8 | Radios named `g1` and `g2` | Same `name` | Different names make two separate groups, so both can be picked |
| 9 | Radio group without `<fieldset>`/`<legend>` | Add them | Screen readers read the question out with each option |
| 10 | `<input type="textarea">` | `<textarea>` | There's no such input type — it turns into a one-line text box |
| 11 | Terms checkbox has no `name` (and isn't required) | `name`, `value`, `required` | Without `name`, nothing is sent |
| 12 | Buttons without `type`; "Clear" also submits | `type="submit"`; remove Clear (or `type="reset"`) | Inside a form, a button sends the form unless you say otherwise; reset buttons wipe what people typed |

Also added: `autocomplete` tokens and `required` where appropriate.

→ [07-forms.fixed.html](07-forms.fixed.html)

## 08 · Accessibility — 11 problems

| # | Problem | Fix | Why |
|---|---|---|---|
| 1 | `*:focus { outline: none }` | Styled `:focus-visible` | Keyboard users can't see where they are (WCAG 2.4.7) |
| 2 | `div.header`/`div.content` | `<header>`, `<nav>`, `<main>` | Landmarks let screen reader users jump around |
| 3 | `<div onclick>` menu toggle | `<button>` with `aria-expanded`/`aria-controls` | Divs can't be reached or used with a keyboard, and open/closed must be announced |
| 4 | `aria-label="Subscribe now"` on a button showing "Join" | Visible text as the name | Label in Name (WCAG 2.5.3): people using voice control say the words they see |
| 5 | `role="alert"` on a `hidden` element | An empty, present `role="status"` region | A live region must already be on the page before its text changes. `alert` is too pushy for a simple confirmation |
| 6 | Icon button with no name; SVG exposed | Text that's hidden visually but read out; `aria-hidden` on the SVG | Announced as just "button" |
| 7 | `tabindex="5"` | Remove | Positive numbers mess up the Tab order |
| 8 | "Read more" with `href="#"` | Real URL and descriptive text | The link text doesn't say where it goes, and `#` goes nowhere |
| 9 | `role="button" aria-hidden="true" tabindex="0"` | Real `<button>` (or remove) | Keyboards can reach it but screen readers can't see it — a "ghost" button |
| 10 | `#bbb` on white (~1.9:1) | `#595959` (~7:1) | WCAG 1.4.3 needs at least 4.5:1 for normal text |
| 11 | `<h1>` then `<h3>` | `<h2>` | A heading level was skipped |

→ [08-accessibility.fixed.html](08-accessibility.fixed.html)

## 09 · The head, Google and sharing — 11 problems

| # | Problem | Fix | Why |
|---|---|---|---|
| 1 | No `lang` | `lang="en"` | Language detection and screen readers |
| 2 | `charset` not first | Move to top | It must be in the first 1024 bytes |
| 3 | `<title>Home</title>` on a services page | Specific title | It shows in tabs, bookmarks and search results |
| 4 | `maximum-scale=1` | Remove | Stops zooming |
| 5 | `meta keywords` | Remove | Ignored by Google; gives competitors your keyword list |
| 6 | `name="og:title"` | `property="og:title"` | Open Graph uses `property` |
| 7 | Relative `og:image` | Absolute URL | Apps that build previews need the full address |
| 8 | Relative canonical | `https://example.com/services/` | Canonical must be a full address |
| 9 | `meta refresh` redirect | Server-side 301 | Confusing; fails WCAG 2.2.1; a weaker signal for Google |
| 10 | `<base href="https://example.com/">` | Remove | Breaks `#pricing` (it now points to the home page) and every short path |
| 11 | No `meta description` | Add one | Often shown under your title on Google |

→ [09-head-seo.fixed.html](09-head-seo.fixed.html)

## 10 · Safety and speed — 13 problems

| # | Problem | Fix | Why |
|---|---|---|---|
| 1 | SRI on `lib@latest` | Pin `lib@3.2.1` | The file changes with every new version, so the hash stops matching |
| 2 | SRI without `crossorigin` | `crossorigin="anonymous"` | Integrity checks on files from other sites need CORS |
| 3 | Blocking `<script src="app.js">` | `defer` | It stops the page being read and shown |
| 4 | Font preload without `crossorigin` (and `type`) | Add both | Fonts are always fetched with CORS; without it the preload is wasted and the font downloads twice |
| 5 | CSP `default-src *` + `'unsafe-inline' 'unsafe-eval'` | A strict list of allowed sources | This policy blocks nothing |
| 6 | `frame-ancestors` in meta | Send as an HTTP header | Ignored in `<meta>` |
| 7 | CSP meta after the scripts | Put it first in `<head>` | A meta CSP only covers what comes after it |
| 8 | Hero `loading="lazy"` | Remove; `fetchpriority="high"` | It slows down the main picture (LCP) |
| 9 | Images without `width`/`height` | Add them | Stops the page jumping |
| 10 | Card details via `GET` | `POST` | Card numbers in addresses end up in logs and history |
| 11 | Hidden `price` field trusted | Send a cart ID; server computes price | Anyone can change hidden fields |
| 12 | Secret API key in client JS | Keep it on the server | View Source is public |
| 13 | `innerHTML` with a URL parameter | `textContent` | XSS from the address: `?name=<img src=x onerror=…>` |

→ [10-security-performance.fixed.html](10-security-performance.fixed.html)
