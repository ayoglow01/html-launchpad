# Lesson 22 · Working like a pro and going online

⏱ 45 minutes · 🧰 You need: Lessons 1–21 and a GitHub account

## In one sentence

Keep your files tidy, check your work against a list, and put your site on the internet **for free**.

## 1. Tidy files 🗂️

```text
my-site/
├── index.html        ← the home page must be called index.html
├── about.html
├── css/styles.css
├── js/script.js
└── images/logo.svg
```

File name rules:
- ✅ lowercase, dashes: `about-us.html`, `team-photo.webp`
- ❌ spaces or capitals: `About Us.html`, `IMG_2034.JPG`

Your computer may not care about capitals, but most web servers **do**. `Logo.png` and `logo.png` are different files online.

## 2. Tidy code ✨

- Indent with 2 spaces.
- Lowercase tags and attributes.
- Always use quotes: `class="card"`.
- Write a comment only when the *why* isn't obvious.

## 3. Check before you publish ✅

Go through the **[Quality Gate](../../assets/cheatsheets/quality-gate.md)** — a checklist covering titles, alt text, labels, links, speed and more. Pros check; they don't hope.

## 4. Save your work with Git

```bash
git add .
git commit -m "Add contact page"
git push
```

Each commit is a save point you can go back to. Write messages that say **what changed**.

## 5. Put it online — GitHub Pages (free) 🌍

1. Put your site in a GitHub repository (with `index.html` at the top).
2. On GitHub: **Settings → Pages**.
3. Under "Branch", choose `main` and click **Save**.
4. Wait a minute. Your site is live at `https://your-name.github.io/your-repo/` 🎉

Other free options: **Netlify** (drag your folder onto their site) and **Vercel**.

## 6. After it's live

- Open it on your **phone**.
- Click every link.
- Share it on WhatsApp and check the preview looks right ([Lesson 13 shows how](../13-head-metadata-seo-and-social/README.md#nice-previews-on-whatsapp-linkedin-x)).
- Run Lighthouse again.
- Want your own address like `kolaandco.ng`? Buy a domain (for .ng, from a NiRA-accredited registrar) and connect it in your host's settings.

## ✅ Remember

- Home page = `index.html`. File names lowercase with dashes.
- Check with the Quality Gate before publishing.
- Commit often with clear messages.
- GitHub Pages: Settings → Pages → main → Save.

## 🎯 Try it

Publish one of your earlier projects on GitHub Pages and send the link to a friend.

## Want more?

- 📖 The detailed version (deploy files, 404 page, robots.txt, sitemap): [deep-dive.md](deep-dive.md)
- 💻 Ready-made deploy files: [deploy-kit](examples/deploy-kit/README.md)
- 🌐 Scrimba: [Learn HTML and CSS](https://scrimba.com/learn-html-and-css-c0p) (free, ends with putting a site online)
- 📋 [Mastery checklist](../../assets/cheatsheets/mastery-checklist.md) — tick off everything you've learned
- ✏️ Practice: [drills](../../exercises/drills/22-professional-standards-and-deployment.md)
- 🏆 **Final project!** [P6 · Business portfolio](../../projects/06-capstone-business-portfolio/README.md)

🎓 **You finished all 22 lessons. You can build real websites now. Well done!**

⬅️ **Back to:** [All lessons](../README.md)
