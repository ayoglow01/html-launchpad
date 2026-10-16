# Practice · Lesson 22 · Working like a pro and going online

📗 [Easy lesson](../../curriculum/22-professional-standards-and-deployment/README.md) · 📘 [Full version](../../curriculum/22-professional-standards-and-deployment/deep-dive.md)

💡 Try each task **before** opening the answer. If a task uses something new, you'll find it in the full version.

### D1 · Rename the files
`About Us.html`, `IMG_0042.JPG`, `Contact_Page.html`, `Main Styles.css`.

<details>
<summary>Answer</summary>

`about.html` (or `about-us.html`), `team-photo.jpg` (descriptive), `contact.html`, `styles.css`. Lowercase, hyphens, no spaces.
</details>

### D2 · Commit messages
Rewrite: "changes", "fixed bug", "final final v2".

<details>
<summary>Answer</summary>

`Add pricing table to services page`, `Fix broken logo path on about page`, `Remove unused hero images`. Imperative, specific.
</details>

### D3 · Deploy to GitHub Pages
List the steps.

<details>
<summary>Answer</summary>

Push to GitHub → Settings → Pages → Source: Deploy from a branch → `main` / root → Save. Visit `https://<user>.github.io/<repo>/`. Use relative paths.
</details>

### D4 · Headers
Your site needs `frame-ancestors 'none'`. GitHub Pages or Netlify?

<details>
<summary>Answer</summary>

Netlify (or Cloudflare Pages/Vercel) — they support custom headers. GitHub Pages doesn't.
</details>

### D5 · robots.txt
Write one that allows everything except `/drafts/` and points to the sitemap.

<details>
<summary>Answer</summary>

```
User-agent: *
Disallow: /drafts/

Sitemap: https://example.com/sitemap.xml
```
</details>

### D6 · Custom domain
Point `www.example.com.ng` at GitHub Pages.

<details>
<summary>Answer</summary>

DNS: `CNAME www → <user>.github.io`. Add the domain in Pages settings; enable "Enforce HTTPS".
</details>

### D7 · Quality gate
Run your most recent project through [quality-gate.md](../../assets/cheatsheets/quality-gate.md). How many checks failed?

<details>
<summary>Answer</summary>

No fixed answer. Fix every failure, then run it again a day later with fresh eyes.
</details>

### D8 · Privacy
Your contact form collects names and phone numbers. Two obligations?

<details>
<summary>Answer</summary>

A clear privacy notice (what, why, how long, who), collect only what you need, secure it (HTTPS, server-side protection), and a lawful basis under laws like Nigeria's NDPA 2023 or GDPR.
</details>
