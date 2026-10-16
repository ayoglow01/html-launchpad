# Lesson 22 · Working like a pro and going online — the full version

📘 **This is the full version.** New to this? Read the [easy lesson](README.md) first, then come back for the details.

⏱ 3–4 hours · 🚀 Pro · 🧰 You need: Lessons 1–21

Knowing HTML and shipping professional HTML are two different skills. This last lesson covers how working developers arrange their files, write tidy code the same way every time, check it against a quality gate, save their history with Git, and put it on the internet with HTTPS, a domain name, and the files search engines look for.

## By the end you can

- Arrange a project and name files so it works on every server.
- Follow one code style, and explain every rule in it.
- Spot old, obsolete tags, and explain the difference between HTML and XHTML.
- Check any page against the Professional HTML Quality Gate.
- Use Git and GitHub with clear commit messages.
- Put a site online with GitHub Pages, Netlify, Vercel or Cloudflare Pages, and add your own domain and security headers.
- Add `404.html`, `robots.txt` and `sitemap.xml`, and follow privacy law.

---

## 1. Folders and file names

```
my-site/
├── index.html            ← home page; servers send it for "/"
├── about.html            ← or about/index.html for /about/ addresses
├── 404.html
├── robots.txt
├── sitemap.xml
├── favicon.ico
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/
│   ├── hero-800.webp
│   └── team-photo.jpg
└── README.md
```

| Rule | ✅ | ❌ | Why |
|---|---|---|---|
| Small letters only | `team-photo.jpg` | `Team-Photo.JPG` | Linux servers **care about capitals**: `Photo.jpg` ≠ `photo.jpg` |
| Dashes between words | `contact-us.html` | `contact us.html`, `contact_us.html` | Spaces turn into `%20`; Google reads dashes as gaps between words |
| Names that describe | `lagos-office.jpg` | `IMG_2034.jpg` | Easy to read, and image search uses file names |
| No special characters | `cafe-menu.html` | `café&menu!.html` | They cause encoding and terminal problems |
| `index.html` as a folder's main page | `/blog/` → `blog/index.html` | | Clean addresses |

> ⚠️ **Exception — "it works on my computer".** Windows and Mac usually ignore capitals in file names. So `<img src="Images/Logo.png">` finds `images/logo.png` on your laptop, then **gives a 404 on the live server**. Use small letters for everything, from day one.

## 2. Code style

The habits used all through this repo, and why:

| Habit | Why |
|---|---|
| `<!DOCTYPE html>` first | Modern (standards) mode |
| Tag and attribute names in small letters | Easy to read; matches the official rules and every style guide |
| Attribute values always in double quotes | Values without quotes break on spaces and special characters |
| 2-space indent, one step in for each level | You can see the structure at a glance |
| Empty (void) tags with no slash at the end (`<br>`, `<img>`) | That's HTML's grammar; the slash does nothing (pick one style and stick to it) |
| Close every tag that has content, even the optional ones (`</p>`, `</li>`) | Easier to read and to debug |
| `type` on every `<button>` | Inside a form, a button sends the form unless you say otherwise |
| Yes/no attributes with no value (`required`, not `required="true"`) | Shorter, and avoids the `="false"` trap |
| Pick the meaningful tag before adding a `class` | Meaning first, looks second |
| Class names say what it is | `.price`, not `.green-bold` |
| Comments explain **why**, not what | `<!-- Hidden until JS loads the map -->` |
| No `style=""` or `onclick` on live sites | Works with security policies; easier to look after |

Use **Prettier** to tidy your code automatically, and **html-validate** to check the rules (both in Lesson 21). Being consistent matters more than any single rule.

## 3. Old tags and attributes to stop using

You'll still see these in old tutorials and old websites. Browsers may still show some of them, but they're **obsolete** — taken out of HTML. Most of them only changed looks, and looks belong in CSS.

| ❌ Old | ✅ Use instead |
|---|---|
| `<font>`, `<center>`, `<big>`, `<tt>`, `<strike>` | CSS. For crossed-out text that *means* something: `<s>` or `<del>` |
| `<marquee>`, `<blink>` | Nothing (or a CSS animation that respects reduced motion) |
| `<frame>`, `<frameset>`, `<noframes>` | `<iframe>` or normal pages |
| `<acronym>` | `<abbr>` |
| `<applet>` | Nothing — Java applets are gone |
| `<dir>` | `<ul>` |
| `<a name="top">` | `id="top"` on any element |
| `align`, `valign`, `bgcolor`, `width`/`height` on table cells, `cellpadding`, `cellspacing` | CSS |
| `summary` on `<table>` | `<caption>` or a paragraph next to the table |
| `language="javascript"` on `<script>` | Nothing (JavaScript is what you get anyway) |
| `frameborder`, `scrolling` on `<iframe>` | CSS |

The full list is in the [elements reference](../../assets/cheatsheets/elements-reference.md#obsolete--never-use).

> 🔍 **Don't mix up — obsolete, and obsolete but still allowed.** Most old tags and attributes are simply not valid any more, and the checker shows an error. A few, like `border="1"` on `<table>` and `name` on `<a>`, are "obsolete but still allowed": the checker only gives a warning. They won't break anything, but there's a better way (CSS, or `id`).

## 4. HTML or XHTML?

**XHTML** is HTML written with the strict rules of XML. It was popular around 2000. You'll still see its habits, like `<br />`.

| | HTML (what you're writing) | XHTML |
|---|---|---|
| How the server labels it | `text/html` | `application/xhtml+xml` |
| How the browser reads it | Forgiving: it patches mistakes and carries on | Strict: **one mistake and the page shows an error instead** |
| `<br />`, `<div />` | The slash is ignored. `<div />` doesn't close itself | The slash closes the tag, for any tag |
| Capitals in tag names | Don't matter | Matter: everything must be small letters |
| `<!DOCTYPE html>` | Needed | Optional; it needs `xmlns="http://www.w3.org/1999/xhtml"` on `<html>` instead |

> ⚠️ **Exception:** Writing XHTML-style code (`<br />`, quotes everywhere, small letters) **doesn't make your page XHTML**. Only the server's label (`Content-Type`) decides that. A `.html` file sent as `text/html` is always read as HTML. That's why this course writes plain HTML, with no slashes on empty tags.

## 5. The Professional HTML Quality Gate

Before you call any page done, go through [assets/cheatsheets/quality-gate.md](../../assets/cheatsheets/quality-gate.md). Here's what it covers:

| Area | Some of the checks |
|---|---|
| Document | Doctype; `lang`; UTF-8; viewport; a different `<title>` on each page; meta description |
| Structure | One `<main>`; landmarks; headings in order with none skipped; no `div` where a meaningful tag fits |
| Text | Emphasis vs importance used correctly; lists as lists; quotes with sources; `<time datetime>` |
| Links | Link text that says where it goes; correct paths; `rel="noopener"` with `_blank`; no `href="#"` used as buttons |
| Media | Right `alt`; `width`/`height`; pictures sized for each screen; captions and transcripts; no autoplay with sound |
| Tables | `<caption>`; `<th>` with `scope`; only for data |
| Forms | Labels; `name`s; the right input types; `autocomplete`; error messages screen readers can reach; `type` on buttons |
| Accessibility | Works by keyboard; focus you can see; contrast; ARIA only when needed; tried with a screen reader |
| SEO and sharing | Preferred address (canonical); Open Graph; sensible `robots`; structured data that passes the test |
| Speed | Main picture not lazy-loaded; `defer` on scripts; preload/preconnect only where there's a reason |
| Security | No secrets; CSP; `integrity` on CDN scripts; HTTPS |
| Checking | No checker errors; the "CSS off" test passes |

## 6. Git and GitHub

```bash
git init
git add .
git commit -m "Add home page structure"
git branch -M main
git remote add origin https://github.com/<you>/my-site.git
git push -u origin main
```

Every day: **edit → look (`git status`, `git diff`) → stage → commit → push**.

### Commit messages

```
Add contact form with accessible error messages

Labels every field, links errors with aria-describedby,
and uses POST so personal data stays out of the URL.
```

- First line: written as an instruction ("Add", "Fix", "Remove"), about 50 characters, no full stop.
- The rest (optional): **why** you made the change, with lines about 72 characters long.
- One change per commit.

| ✅ | ❌ |
|---|---|
| `Fix broken logo path on about page` | `fixed stuff` |
| `Add alt text to gallery images` | `update` |

For new features, work on a branch (`git switch -c feature/contact-form`), open a pull request, get it reviewed, then merge.

## 7. Putting your site online

All four hosts below are free for simple (static) sites, and give you HTTPS automatically.

| Host | How | Your own headers? | Notes |
|---|---|---|---|
| **GitHub Pages** | Repo → Settings → Pages → Deploy from branch `main`, folder `/` (root) | ❌ No (use a `<meta>` CSP; so no `frame-ancestors`) | Address: `https://<user>.github.io/<repo>/` — notice the extra folder |
| **Netlify** | Drag your folder in, or connect the repo | ✅ A `_headers` file | Forms, redirects (`_redirects`), preview links for changes |
| **Vercel** | Import the repo | ✅ `vercel.json` | Strong support for frameworks |
| **Cloudflare Pages** | Connect the repo, or upload | ✅ A `_headers` file | A big worldwide network |

> ❗ **Exception — paths starting with `/` on GitHub Pages project sites.** Your site lives at `/<repo>/`, not at `/`. A link to `/css/styles.css` asks for `https://<user>.github.io/css/styles.css` — outside your site — and gets a 404. Use **relative** paths (`css/styles.css`), or your own domain. (A user site at `<user>.github.io` lives at the top level, so it doesn't have this problem.)

### Security headers on Netlify and Cloudflare Pages (`_headers`)

```
/*
  Content-Security-Policy: default-src 'self'; img-src 'self' data:; object-src 'none'; base-uri 'none'; frame-ancestors 'none'
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### Vercel (`vercel.json`)

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

### Your own domain name

1. Buy a domain from a seller (a **registrar**). For `.ng` domains, use a registrar approved by NiRA.
2. In the domain's settings (DNS), point it at your host:
   - `www` → a `CNAME` record pointing to your host's address (for example `<user>.github.io`).
   - The bare domain (`example.com`) → the `A` or `ALIAS` records your host gives you (GitHub Pages lists four IPv4 addresses).
3. Add the domain in your host's settings, and switch on **Enforce HTTPS**.
4. DNS changes can take minutes to hours to reach everyone.

## 8. Files every site should have

### `404.html`

GitHub Pages, Netlify and Cloudflare Pages show a `404.html` in your top folder automatically when a page is missing. Include your normal header and menu, a clear message, and a link home or a search box. Be careful with paths: this page can be shown at any address, at any depth, so use full addresses or paths that still work from there.

### `robots.txt` (in the top folder)

```
User-agent: *
Disallow: /drafts/

Sitemap: https://example.com/sitemap.xml
```

Remember Lesson 13: `Disallow` controls **visiting**, not listing. And anyone can read this file — never put secret addresses in it.

### `sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://example.com/</loc><lastmod>2026-10-14</lastmod></url>
  <url><loc>https://example.com/about.html</loc></url>
</urlset>
```

Only full, preferred (canonical) addresses. Send it to Google Search Console and Bing Webmaster Tools.

## 9. After launch

| Job | Tool |
|---|---|
| Prove the site is yours; watch how Google lists it and its Core Web Vitals | Google Search Console, Bing Webmaster Tools |
| Check your headers | [securityheaders.com](https://securityheaders.com), [MDN HTTP Observatory](https://developer.mozilla.org/en-US/observatory) |
| Check your links | `lychee`, the W3C Link Checker |
| Run Lighthouse and the quality gate again | After every big change |
| Visitor statistics | Choose privacy-friendly tools; only collect what you need |

> ❗ **Privacy is the law, not decoration.** If you collect personal data (contact forms, analytics cookies, newsletter sign-ups), laws like Nigeria's **Data Protection Act 2023** (NDPA) and the EU's **GDPR** say you need a lawful reason, a clear privacy notice, to collect as little as possible, and to keep it safe. Link a privacy policy (`<link rel="privacy-policy">` plus a link in the footer). Where consent is needed, don't set extra cookies until people agree.

## 10. HTML keeps changing

HTML is looked after by **WHATWG** as a "Living Standard". It's updated all the time, with no version numbers after HTML5. New features arrive when browsers build them. To keep up:

- Watch the **Baseline** labels on MDN and web.dev.
- Read browser release notes (Chrome, Firefox, Safari) every few months.
- Come back to this repo's [mastery checklist](../../assets/cheatsheets/mastery-checklist.md).

## 11. Where to go next

| Next | Start here |
|---|---|
| CSS layout and pages that fit every screen | [freeCodeCamp RWD](https://www.freecodecamp.org/learn/responsive-web-design-v9/), [The Odin Project Intermediate HTML & CSS](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-introduction) |
| More accessibility | [Odin Advanced HTML & CSS (Accessibility)](https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-introduction-to-web-accessibility), [WAI tutorials](https://www.w3.org/WAI/tutorials/) |
| JavaScript | [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting), [Scrimba Frontend Career Path](https://scrimba.com/the-frontend-developer-career-path-c0j) |

---

## Mistakes people make

- File and folder names with capitals.
- Paths starting with `/` on a GitHub Pages project site.
- One giant commit called "final".
- No `404.html`, or a test copy's `robots.txt` that blocks the whole live site.
- Going live without running the quality gate.
- Copying `<center>`, `<font>` or `<a name>` from an old tutorial.
- Collecting personal data with no privacy notice.

## Quick quiz

<details>
<summary>1. Pictures load on your laptop but give 404 on Netlify. The paths look right. Why?</summary>

The capitals don't match (`Images/` vs `images/`), and the server cares about capitals.
</details>

<details>
<summary>2. Your GitHub Pages project site loses all its CSS. The link is <code>href="/css/styles.css"</code>. How do you fix it?</summary>

Use a relative path (`css/styles.css`), because the site lives inside `/<repo>/`.
</details>

<details>
<summary>3. Why can't you use <code>frame-ancestors</code> on GitHub Pages?</summary>

GitHub Pages doesn't let you set your own headers, and `frame-ancestors` is ignored in a `<meta>` CSP.
</details>

<details>
<summary>4. What makes a good first line for a commit?</summary>

An instruction that's specific and short: "Add accessible error messages to contact form".
</details>

## Practice

- 📄 Starter: [page-skeleton.html](../../assets/templates/page-skeleton.html)
- 💻 Deploy kit: [examples/deploy-kit/](examples/deploy-kit/README.md) — `404.html`, `robots.txt`, `sitemap.xml`, `_headers`, `vercel.json`
- ✏️ [Drills for this lesson](../../exercises/drills/22-professional-standards-and-deployment.md)
- 🏗️ Final project: [P6 · Business portfolio](../../projects/06-capstone-business-portfolio/README.md)

## Read more

| Where | What you get |
|---|---|
| The Odin Project | [Setting up Git](https://www.theodinproject.com/lessons/foundations-setting-up-git) · [Git basics](https://www.theodinproject.com/lessons/foundations-git-basics) · [Commit messages](https://www.theodinproject.com/lessons/foundations-commit-messages) — the best Git lessons for beginners |
| MDN | [Publishing your website](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website) · [Dealing with files](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files) — the main explanation |
| GitHub Docs | [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) · [Custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) — the official steps |
| Scrimba | [Learn HTML and CSS](https://scrimba.com/learn-html-and-css-c0p) — ends by walking you through putting a site on Netlify |
| Google | [HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html) — a well-respected public style guide |

**🎉 You've finished the course.** Go through the [mastery checklist](../../assets/cheatsheets/mastery-checklist.md), then build the final project.

**Back to:** [the easy lesson](README.md)
