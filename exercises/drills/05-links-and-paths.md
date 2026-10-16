# Practice · Lesson 5 · Links

📗 [Easy lesson](../../curriculum/05-links-urls-and-paths/README.md) · 📘 [Full version](../../curriculum/05-links-urls-and-paths/deep-dive.md)

💡 Try each task **before** opening the answer. If a task uses something new, you'll find it in the full version.

Use this structure for D1–D4:

```
site/
├── index.html
├── about.html
├── images/logo.png
└── blog/
    ├── index.html
    └── 2026/
        └── first-post.html
```

### D1 · From `index.html`
Link to `about.html`, `blog/index.html`, and show `images/logo.png`.

<details>
<summary>Answer</summary>

`href="about.html"`, `href="blog/index.html"` (or `href="blog/"` on a server), `src="images/logo.png"`.
</details>

### D2 · From `blog/2026/first-post.html`
Link to the home page, the blog index, and the logo.

<details>
<summary>Answer</summary>

`href="../../index.html"`, `href="../index.html"`, `src="../../images/logo.png"`. Each `../` goes up one folder.
</details>

### D3 · Root-relative
Write the logo path that works from any page on a site served at the domain root. When does it fail?

<details>
<summary>Answer</summary>

`/images/logo.png`. Fails when opened via `file://` (resolves to your disk root) and on GitHub Pages project sites (served under `/<repo>/`).
</details>

### D4 · Case sensitivity
`<img src="Images/Logo.PNG">` works on Windows but not online. Why?

<details>
<summary>Answer</summary>

Linux servers are case-sensitive; the real path is `images/logo.png`.
</details>

### D5 · Link text
Rewrite: `To read our guide, <a href="guide.html">click here</a>.`

<details>
<summary>Answer</summary>

`Read our <a href="guide.html">HTML beginner's guide</a>.` Link text should make sense out of context (screen reader link lists, WCAG 2.4.4).
</details>

### D6 · Special links
Write links to: email `hello@example.com` with subject "Hi"; phone +234 803 000 0000; a downloadable `report.pdf` saved as `annual-report.pdf`.

<details>
<summary>Answer</summary>

```html
<a href="mailto:hello@example.com?subject=Hi">hello@example.com</a>
<a href="tel:+2348030000000">+234 803 000 0000</a>
<a href="report.pdf" download="annual-report.pdf">Annual report (PDF, 1.2 MB)</a>
```
`download` only works for same-origin URLs (and `blob:`/`data:`).
</details>

### D7 · Fragments
Make a "Back to top" link and a link from another page to the `#faq` section of `help.html`.

<details>
<summary>Answer</summary>

`<a href="#top">Back to top</a>` (with `id="top"` on a target, or `href="#"` which also scrolls to top) and `<a href="help.html#faq">FAQ</a>` with `<section id="faq">` in help.html.
</details>

### D8 · New tab
External link opening in a new tab — safely and accessibly.

<details>
<summary>Answer</summary>

```html
<a href="https://developer.mozilla.org/" target="_blank" rel="noopener">MDN (opens in new tab)</a>
```
Warn users; modern browsers imply `noopener` for `_blank`, but writing it is explicit and harmless.
</details>

### D9 · Link or button?
"Save draft", "Go to settings", "Open menu", "Download invoice".

<details>
<summary>Answer</summary>

Button: Save draft, Open menu (actions). Link: Go to settings, Download invoice (navigation/resources).
</details>
