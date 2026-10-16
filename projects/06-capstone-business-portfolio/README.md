# P6 · Final project: business portfolio

**After:** Lesson 22 · **Time:** 15–25 hours · **Pages:** 5+ · **Deployed:** yes

## What you're making

Build a website for a small business, ready for real customers, and put it online — real (a friend's shop, a church, a tailor, a tutor) or fictional. This is the project you show employers and clients. Everything in the course applies, and the [quality gate](../../assets/cheatsheets/quality-gate.md) is how it's marked.

## Pages you need

| Page | Must include |
|---|---|
| `index.html` | A main picture set up to load fast (LCP), one line saying what the business offers, services summary, featured work, testimonial (`blockquote`/`figure`), call to action |
| `about.html` | Story, team members (images with good alt), timeline (`ol` + `time`) |
| `services.html` | Services with prices in a data table **or** structured cards; FAQ with `details` |
| `work.html` | Portfolio items as `article`s with responsive images and `figure`/`figcaption` |
| `contact.html` | Accessible contact form (POST to a form service or Netlify Forms), address, map embed, opening hours table |
| `404.html` | A helpful "page not found" page |

## Files every live site needs

- [ ] `robots.txt`, `sitemap.xml`, `manifest.webmanifest`, favicons (ICO, SVG, apple-touch-icon).
- [ ] Security headers via `_headers` (Netlify/Cloudflare) or `vercel.json`, or a meta CSP if on GitHub Pages — and a note in your README about the limitation.
- [ ] A project `README.md`: what it is, live URL, how to run locally, credits for images.

## What each area needs

- **Page and head:** unique title/description per page; canonical; Open Graph + `twitter:card`; JSON-LD `LocalBusiness` on the home page; `lang`.
- **Structure:** consistent header/nav/footer; skip link; `aria-current="page"`; one `main`; logical headings.
- **Works for everyone:** aim for WCAG 2.2 AA — contrast, focus visible, keyboard operable, labelled forms, accessible errors, captions for any video, `prefers-reduced-motion` respected if you animate.
- **Speed:** hero `fetchpriority="high"` and not lazy; all images dimensioned and responsive; below-fold lazy; scripts deferred; Lighthouse performance ≥ 90 on mobile (lab).
- **Safety:** no secrets; external links safe; CSP; form posts over HTTPS.
- **Going online:** live on HTTPS; custom domain optional; all paths work in production.
- **Working method:** at least 15 meaningful commits.

## Score yourself

For each area, give yourself **0** (missing), **1** (started), **2** (mostly right) or **3** (spot on).

| Area | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Document and metadata | | | | |
| Semantic structure and navigation | | | | |
| Content semantics (text, lists, tables, figures) | | | | |
| Images and media | | | | |
| Forms | | | | |
| Accessibility (automated + manual) | | | | |
| SEO and social previews | | | | |
| Performance | | | | |
| Security | | | | |
| Going online, and the files a live site needs | | | | |
| Code style and validation | | | | |
| Git history and README | | | | |

## One possible answer

[solution/](solution/index.html) — "Kola & Co. Design Studio", a fictional Lagos studio. Open `solution/index.html` through a local server. It uses a placeholder domain (`https://kolaandco.example`) — replace it with yours when you adapt it.
