# Kola & Co. — capstone reference solution

A fictional Lagos design studio site built to the [P6 brief](../README.md).

| | |
|---|---|
| Pages | `index`, `about`, `services`, `work`, `contact`, `privacy`, `404` |
| Production files | `robots.txt`, `sitemap.xml`, `manifest.webmanifest`, `_headers`, favicons |
| Placeholder domain | `https://kolaandco.example` — replace everywhere (canonical, Open Graph, JSON-LD, sitemap, robots) |
| Form | POSTs to Formspree; replace `YOUR_FORM_ID` (or use Netlify Forms) |

## Run locally

```bash
npx serve .
```

Open the printed URL. (`404.html` uses root-absolute paths because hosts serve it for missing URLs at any depth — it renders correctly only from a server root.)

## Decisions worth noticing

- **Hero image**: real `<img>` inside `<picture>`, `fetchpriority="high"`, never lazy, plus a matching preload. Everything below the fold is lazy.
- **CSP twice**: a `<meta>` CSP for hosts without header support, and a stronger header CSP in `_headers` with `frame-ancestors`.
- **Form**: `js/main.js` sets `form.noValidate = true` and replaces browser bubbles with accessible inline messages. If the script fails, native validation still works — and the form service validates server-side either way.
- **Footer** uses `<address>` because it's contact information for the site owner.
- **Testimonial** uses `<figure>` + `<blockquote>` + `<figcaption>` to attribute the quote.
- **Prices** are a real data table with `scope` and `<data value>`.
