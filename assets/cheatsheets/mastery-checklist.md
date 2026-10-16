# Mastery checklist 🏅

Before you move on from HTML to serious CSS, JavaScript or a framework, you should be able to **explain each item in your own words** — out loud or on paper, without notes. If you can't, the lesson number tells you where to go back.

Only tick an item when you can explain it *and* show it in code.

## The basics (Lessons 1–2)

- [ ] What HTML is, and why it's a markup language, not a programming language
- [ ] The difference between an element, a tag and an attribute
- [ ] What the DOM is, what a node is, and what "parsing" means (the browser reading your HTML)
- [ ] What happens between typing an address and seeing the page (DNS, HTTP, drawing the page)
- [ ] Empty (void) tags; what can go inside what; how spaces get squashed; special characters; comments
- [ ] What semantic HTML (tags with meaning) is, and why it matters

## Page structure (Lessons 2 and 8)

- [ ] What `<!DOCTYPE html>`, `<html>`, `<head>` and `<body>` are for
- [ ] Why `lang` matters
- [ ] Why headings must go in order (and why "each section can start again at `h1`" is a myth)
- [ ] `div` vs `section`; `section` vs `article`; what `aside` is for
- [ ] Landmarks, and when `header` and `footer` are *not* landmarks

## Text (Lesson 3)

- [ ] When to use `strong`, `em`, `b`, `i`, `mark`, `small`, `del`, `ins`, `s`
- [ ] `q`, `blockquote`, `cite`; `abbr`; `time`; `code`, `kbd`, `samp`, `var`, `pre`; `sub`, `sup`

## Lists and links (Lessons 4–5)

- [ ] `ul` vs `ol` vs `dl`, and how to put a list inside a list
- [ ] `<a href>` vs `<button>`
- [ ] Full, relative and root-relative paths; `../`; why capitals in file names matter
- [ ] `target="_blank"`, and why `rel="noopener"` is used with it
- [ ] `mailto:`, `tel:`, `download`, `#` links

## Pictures and media (Lessons 6–7)

- [ ] `src`, `alt`, `width`, `height`, `loading`, `decoding`, `srcset`, `sizes`, `picture`, `source`
- [ ] How to decide on alt text: picture that informs, decorates, does something, or is complex
- [ ] `figure`/`figcaption` vs `alt`
- [ ] SVG vs canvas vs photo formats (JPEG, PNG, WebP, AVIF)
- [ ] `video` and `audio` attributes, kinds of `track`, when autoplay is allowed, `iframe` `sandbox` and `allow`

## Tables (Lesson 9)

- [ ] `caption`, `thead`, `tbody`, `tfoot`, `tr`, `th`, `td`
- [ ] `scope`, `rowspan`, `colspan`, `headers`/`id`; why tables aren't for layout

## Forms (Lessons 10–11)

- [ ] `form`, `label`, `input`, `textarea`, `select`, `option`, `optgroup`, `button`, `fieldset`, `legend`, `datalist`, `output`
- [ ] `name`, `id`, `value`, `action`, `method`, `enctype`
- [ ] `autocomplete`, `required`, `pattern`, `min`/`max`/`step`, `minlength`/`maxlength`, `accept`, `multiple`
- [ ] What gets sent, and what doesn't (no name, disabled, unticked)
- [ ] `readonly` vs `disabled`; input types, and when `number` is the wrong choice
- [ ] Checking forms from JavaScript (the Constraint Validation API); `:user-invalid`; error messages everyone can reach

## Making pages work for everyone (Lesson 12)

- [ ] Tags with meaning, keyboard use, focus, accessible names, alt text
- [ ] ARIA: `role`, `aria-label`, `aria-labelledby`, `aria-describedby`, `aria-expanded`, `aria-controls`, `aria-current`, `aria-live`, `aria-hidden`
- [ ] **Why you should normally use real HTML before reaching for ARIA**
- [ ] WCAG's four principles (POUR) and levels A/AA/AAA; how to test with a screen reader

## The head (Lesson 13)

- [ ] `title`, `meta charset`, viewport, description, robots, canonical, site icon, manifest, Open Graph
- [ ] robots.txt vs `noindex`; structured data; the traps of `base`

## CSS, JavaScript and modern HTML (Lessons 14–18)

- [ ] CSS in a file vs in the head vs on a tag; which one wins
- [ ] `defer` vs `async` vs `type="module"`; `data-*` and `dataset`; attributes vs properties
- [ ] `details`/`summary`, `dialog` (`showModal` vs `open`), `popover`, `inert`, `hidden="until-found"`
- [ ] Yes/no vs keyword attributes; `dir`, `bdi`, `bdo`, `translate`
- [ ] `template`, your own tags (custom elements), shadow DOM, slots
- [ ] Canvas basics and accessibility; the limits of Web Storage; secure pages

## Fast pages (Lesson 20)

- [ ] Lazy loading, pictures for every screen, preconnect, preload, `fetchpriority`, lighter media, a smaller DOM
- [ ] The Core Web Vitals and their targets
- [ ] **Why speed hints should be used on a few chosen files, not everywhere**

## Staying safe (Lesson 19)

- [ ] XSS and HTML you don't trust; `textContent` vs `innerHTML`
- [ ] Checking on the server; checking uploaded files; hidden fields; who's allowed to do what
- [ ] Sandboxed iframes; CSP (and what the meta version can't do); `integrity` (SRI); HTTPS

## Working like a pro (Lessons 21–22)

- [ ] Validating, comparing the DOM with your source, fixing bugs step by step
- [ ] File names, code style, Git, going online, your own domain
- [ ] The full [quality gate](quality-gate.md)

---

## The goal

Start from an empty file:

```html
<!DOCTYPE html>
```

…and build, on your own, a complete website with several pages — well structured, usable by everyone, with a proper head — without a framework.

Know not only **what** to write, but **why** you're writing it, **which exception applies**, **what can go wrong**, and **what the browser, the visitor, screen readers and search engines will do with it**.
