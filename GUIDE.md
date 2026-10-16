# html-cracker · The full guide

> 👋 **New here?** Start with the short, friendly [README](README.md). This page is the long version: every tool, study plans, sources and the house rules.

**Learn HTML5 properly — from your very first tag to pages that are ready for real work.**

Lots of HTML courses teach you *tags*. This one teaches you *choices*: which tag to pick, why it's right, when the rule doesn't apply, and what a browser, a screen reader and Google will each do with it.

> The goal isn't "I know lots of HTML tags."
> The goal is "I can pick the right tag, because I know what it means, what it's for, its limits, and how it affects people."

---

## Contents

1. [Who this is for](#1-who-this-is-for)
2. [What you'll be able to do](#2-what-youll-be-able-to-do)
3. [What's in this repo](#3-whats-in-this-repo)
4. [Getting started (installing things)](#4-getting-started-installing-things)
5. [Basics to know before Lesson 1](#5-basics-to-know-before-lesson-1)
6. [Your first page in 10 minutes](#6-your-first-page-in-10-minutes)
7. [How to learn](#7-how-to-learn)
8. [How each lesson is laid out](#8-how-each-lesson-is-laid-out)
9. [The roadmap](#9-the-roadmap)
10. [Study plans](#10-study-plans)
11. [Projects](#11-projects)
12. [The five learning sites (and when to use each)](#12-the-five-learning-sites-and-when-to-use-each)
13. [Code conventions used in this repo](#13-code-conventions-used-in-this-repo)
14. [Getting help](#14-getting-help)
15. [Contributing and license](#15-contributing-and-license)

---

## 1. Who this is for

| You are… | Start here |
|---|---|
| Brand new (never written code) | Read this guide, then [Lesson 1](curriculum/01-how-the-web-works/README.md). |
| Someone who "knows some HTML" | Try the [drills](exercises/drills/) for Lessons 2–7. Anything you can't do without looking it up — study that lesson. |
| A developer moving to React, Vue or Next.js | Lessons 8–22. Frameworks produce HTML. Bad HTML in, bad HTML out. |
| A teacher or bootcamp | Use the [study plans](#10-study-plans) and [projects](projects/README.md). Everything is MIT-licensed. |

You don't need to know anything yet. You need a computer, a browser, and a bit of patience.

> 📝 **No computer?** You can follow most of this on a phone or tablet with an online editor like [CodePen](https://codepen.io/) or [JSFiddle](https://jsfiddle.net/). Projects with several pages are easier on a computer.

---

## 2. What you'll be able to do

By the end, starting from an empty file with just `<!DOCTYPE html>`, you'll be able to:

- Build a full website with several pages, using HTML alone, and put it online.
- Explain *why* you used each important tag — and when you shouldn't.
- Write HTML that works with a keyboard and a screen reader.
- Build proper forms, with labels, names, checks, and the right way of sending data.
- Add pictures (including ones that fit every screen), SVG, audio, video, captions and embeds correctly.
- Get a page ready for Google and for sharing on WhatsApp, LinkedIn and X.
- Understand the HTML that frameworks (React, Vue, Svelte, Next.js) build on: the DOM, templates, Web Components, `data-*`, loading scripts.
- Spot security and speed problems in HTML.
- Check, debug and review your own work.

---

## 3. What's in this repo

```
html-cracker/
├── README.md              ← the short, friendly start
├── GUIDE.md               ← this page: setup, method, study plans
├── curriculum/            ← 22 lessons, beginner → pro (do them in order)
│   ├── README.md          ← the full roadmap + a checklist to tick off
│   └── NN-lesson-name/
│       ├── README.md      ← the easy lesson (start here)
│       ├── deep-dive.md   ← the full version, with every detail
│       └── examples/      ← working .html files used in the lesson
├── exercises/
│   ├── drills/            ← short tasks for each lesson (answers hidden until you click)
│   ├── debug/             ← broken pages to fix (+ explained answers)
│   └── challenges/        ← small builds, with the words and data given to you
├── projects/              ← 6 projects, ending with a full multi-page website
└── assets/
    ├── images/  media/    ← shared pictures, audio and video
    ├── templates/         ← starter pages, a professional <head>, a page skeleton
    └── cheatsheets/       ← tag list, exceptions, glossary, checklists
```

**Easy way to remember it:** *curriculum* = learn, *exercises* = practise, *projects* = prove it, *assets* = reuse.

---

## 4. Getting started (installing things)

To write HTML you only need **two things**: a text editor and a browser. Everything else just makes the work faster or safer.

### 4.1 What to install

| Tool | Do I need it? | Why |
|---|---|---|
| A modern browser — [Firefox](https://www.mozilla.org/firefox/) **and** [Chrome](https://www.google.com/chrome/) (or Edge) | ✅ Yes | Test in at least two. Firefox and Chrome/Edge are built on different engines, and both have great DevTools. Safari too, if you have a Mac or iPhone. |
| [Visual Studio Code](https://code.visualstudio.com/) | ✅ Recommended | A free editor with Emmet built in. Any plain-text editor works. |
| [Git](https://git-scm.com/downloads) + a GitHub account | ✅ Recommended | Saves your progress, and lets you publish projects online for free. |
| [Node.js LTS](https://nodejs.org/) | Optional | Runs `npx html-validate` and `npx serve`. |
| Python 3 | Optional | `python -m http.server` — a local server in one line. |
| A screen reader | Optional, used from Lesson 12 | Windows: [NVDA](https://www.nvaccess.org/download/) (free). Mac/iPhone: VoiceOver (built in, `Cmd + F5`). Android: TalkBack (built in). |

### 4.2 VS Code extensions worth adding

Open VS Code → Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`) and install:

| Extension | What it does |
|---|---|
| **Live Server** (Ritwick Dey) *or* **Live Preview** (Microsoft) | Opens your folder at an `http://` address and reloads when you save. |
| **Prettier – Code formatter** | Keeps your indentation tidy. Switch on *Format on Save*. |
| **axe Accessibility Linter** (Deque) | Points out common accessibility mistakes as you type. |
| **Code Spell Checker** | Catches typos in your text and attribute values. |

Emmet is already built in: in an empty `.html` file, type `!` and press `Tab` to get a starter page. **But type the starter page by hand for your first week.** You should know every line before you let a shortcut write it.

### 4.3 Notes for Windows, Mac and Linux

- **Windows:** switch on file extensions (File Explorer → *View* → *Show* → *File name extensions*). Otherwise `index.html.txt` looks like `index.html`, and nothing works.
- **Mac:** don't use TextEdit for HTML unless you switch it to plain text (*Format → Make Plain Text*). Rich text quietly breaks your files.
- **Linux:** install VS Code from your system's package manager, or get the `.deb`/`.rpm` from the VS Code site.

### 4.4 Set up Git (once)

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
```

Check everything is installed:

```bash
git --version
code --version      # if VS Code's "code" command is on your PATH
node --version      # optional
python3 --version   # optional (Windows: python --version or py --version)
```

### 4.5 Get this repo

**Option A — Fork it (best: you can tick off progress and publish your projects):**

1. Click **Fork** at the top of this repo on GitHub.
2. Copy *your* fork to your computer:
   ```bash
   git clone https://github.com/<your-username>/html-cracker.git
   cd html-cracker
   code .
   ```

**Option B — Download it:** *Code* → *Download ZIP*, unzip it, and open the folder in VS Code.

### 4.6 Opening pages: double-click vs a local server

| Way | The address starts with | Fine for | What breaks |
|---|---|---|---|
| Double-click the `.html` file | `file:///` | Lessons 1–6 | Paths starting with `/` (`/images/x.png` points to the top of your whole disk), caption files (`<track>`) in Chrome, JavaScript modules, `fetch()` |
| A local server (Live Server, `npx serve`, `python -m http.server`) | `http://localhost` / `http://127.0.0.1` | Everything | — |

```bash
# from the repo's top folder, pick one:
python3 -m http.server 8000      # then open http://localhost:8000
npx serve .                      # Node.js
```

> ❗ From **Lesson 7** on, always use a local server. Browsers block several features on `file://` on purpose, for safety. It's not a bug in your code.

---

## 5. Basics to know before Lesson 1

**Files and endings.** An HTML file is plain text saved with `.html` at the end. The browser decides what kind of file it is from its type (on a server, the `Content-Type` header; on your computer, the ending).

**`index.html` is special.** When an address points at a folder, servers send its `index.html`. So `https://example.com/blog/` usually shows `blog/index.html`.

**Name files like a pro:**

| ✅ Do | ❌ Don't | Why |
|---|---|---|
| `about-us.html` | `About Us.html` | Spaces turn into `%20` in addresses and break easily. |
| `team-photo.jpg` | `Team-Photo.JPG` | Most servers (Linux) **care about capitals**: `Photo.jpg` ≠ `photo.jpg`. Windows and Mac usually don't, so it "works on my computer" and fails once it's online. |
| `contact.html` | `contact.htm`, `contact.html.txt` | `.htm` works but is an old habit. `.txt` is a hidden-ending accident. |

**View Source vs DevTools — know the difference from day one:**

- *View Page Source* (`Ctrl+U` / `Cmd+Option+U`) shows **what you wrote**.
- *DevTools → Elements/Inspector* (`F12` or `Ctrl+Shift+I` / `Cmd+Option+I`) shows **what the browser built** (the DOM). If your HTML had mistakes, the browser patched them, so the two will look different. That difference is one of your best teachers.

**Handy shortcuts:** Save `Ctrl+S`. Full reload (skip the saved copy) `Ctrl+Shift+R` / `Cmd+Shift+R`. Comment a line in VS Code `Ctrl+/` / `Cmd+/`.

---

## 6. Your first page in 10 minutes

1. Make a folder called `my-first-site`, and inside it a file called `index.html`.
2. Type this — don't paste it:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1">
     <title>My first page</title>
   </head>
   <body>
     <h1>Hello, web</h1>
     <p>I wrote this page by hand.</p>
   </body>
   </html>
   ```

3. Save, then double-click the file (or right-click → *Open with Live Server*).
4. Change the text, save, reload. Open DevTools and find your `<h1>` in the Elements panel.
5. Delete `</p>`, save, reload. The page still looks fine. Now look at the DOM: the browser closed the paragraph for you. **Browsers forgive. Checkers don't.** You'll see why in Lesson 2.

Every line of that file is explained in [Lesson 2](curriculum/02-html-syntax-and-document-structure/README.md).

---

## 7. How to learn

Watching tutorials feels like progress. On its own, it isn't. Use this loop for **every** topic:

```
1. Learn the idea              (read the lesson)
2. Type it by hand             (no copy-paste)
3. Build a small example       (the examples/ folder, then your own)
4. Break it on purpose         (remove a tag, use an id twice, skip a label)
5. Fix it                      (use DevTools and the checker)
6. Use it in a project         (projects/)
7. Check the final HTML        (validator.w3.org/nu)
```

**Aim for 20% reading, 80% writing HTML.**

### Seven rules for every day

1. **Type the code.** Copying teaches your clipboard, not you.
2. **Explain your choices.** For each important tag, ask: *why this one?*
3. **Break your code on purpose.** Missing closing tags, wrong nesting, the same `id` twice, missing labels, skipped heading levels, wrong `name`s, broken paths. Then fix them.
4. **Look at the DOM.** Compare View Source with DevTools. The browser patches broken HTML instead of showing it as you wrote it.
5. **Test with only the keyboard.** `Tab`, `Shift+Tab`, `Enter`, `Space`, the arrow keys, `Esc`. Can you use the page without a mouse?
6. **Test without CSS.** If all the styles vanished, would the page still make sense? (Firefox: *View → Page Style → No Style*.)
7. **Check it with the validator before you call it finished.**

---

## 8. How each lesson is laid out

Each lesson has two files.

**The easy lesson** (`README.md`) is short. It has: one sentence that sums it up, an everyday comparison, small examples with ✅ and ❌, ⚠️ Careful, ✅ Remember, 🎯 Try it, and Want more?

**The full version** (`deep-dive.md`) goes like this:

1. **The top** — how long it takes, the level (🌱 Beginner, 🔨 Builder or 🚀 Pro) and which lessons you need first.
2. **By the end you can** — what you'll be able to do.
3. **Numbered sections** — each idea goes: *what it is → an example → why it matters → right vs wrong*.
4. **Exceptions and "don't mix up" boxes** — the cases where the simple rule is wrong.
5. **Mistakes people make** — what learners really get wrong.
6. **Quick quiz** — questions with the answers hidden until you click.
7. **Practice** — links to the matching example, drill, broken page to fix, challenge and project.
8. **Read more** — the best page from each learning site for this lesson, and what it's good for.

### What the little boxes mean

> ⚠️ **Exception:** a case where the usual rule doesn't apply, or works differently.

> 🔍 **Don't mix up:** two things that look alike but aren't (like `<strong>` vs `<b>`, `id` vs `name`, `disabled` vs `readonly`). Often shown as a side-by-side table, because "they look the same" is exactly where bugs come from.

> ❗ A rule you mustn't skip, or a risk to safety, accessibility or data.

> 💡 **Tip:** a good habit worth picking up.

> 📝 Useful background, or a fact worth knowing.

---

## 9. The roadmap

The full checklist of every topic is in [curriculum/README.md](curriculum/README.md). "full" opens the full version of each lesson.

### Lessons 1–7 — the language and the page

| # | Lesson | What you learn |
|---|---|---|
| 1 | [How the web works](curriculum/01-how-the-web-works/README.md) · [full](curriculum/01-how-the-web-works/deep-dive.md) | How the internet delivers a page: clients and servers, HTTP and HTTPS, DNS, domain names, hosting, browsers, and what "HTML5" really means |
| 2 | [Your first web page](curriculum/02-html-syntax-and-document-structure/README.md) · [full](curriculum/02-html-syntax-and-document-structure/deep-dive.md) | Tags, elements, attributes, empty (void) tags, nesting, the starter page, the DOM, how browsers read HTML, comments, spaces |
| 3 | [Writing text](curriculum/03-text-content/README.md) · [full](curriculum/03-text-content/deep-dive.md) | Headings, paragraphs, emphasis vs importance, quotes, code, dates and times, pronunciation guides (`ruby`), entities, symbols, emoji |
| 4 | [Lists](curriculum/04-lists/README.md) · [full](curriculum/04-lists/deep-dive.md) | `ul`, `ol`, `dl`, lists inside lists, `menu`, list attributes |
| 5 | [Links](curriculum/05-links-urls-and-paths/README.md) · [full](curriculum/05-links-urls-and-paths/deep-dive.md) | Full, relative and root-relative paths, `#` links, `mailto:` and `tel:`, `download`, `target` and `rel`, folder layout |
| 6 | [Images](curriculum/06-images-and-graphics/README.md) · [full](curriculum/06-images-and-graphics/deep-dive.md) | `img`, `alt`, file formats, pictures for every screen size, `picture`, `figure`, image maps, SVG, canvas, maths (MathML) |
| 7 | [Video, audio and embeds](curriculum/07-audio-video-and-embeds/README.md) · [full](curriculum/07-audio-video-and-embeds/deep-dive.md) | `audio`, `video`, `source`, captions with `track` and WebVTT, `iframe`, `embed`, `object` |

### Lessons 8–11 — structure and data

| # | Lesson | What you learn |
|---|---|---|
| 8 | [Page layout tags](curriculum/08-semantic-html-and-page-structure/README.md) · [full](curriculum/08-semantic-html-and-page-structure/deep-dive.md) | Landmarks, `header` to `footer`, `section` vs `article` vs `div`, `search`, `hgroup`, heading order |
| 9 | [Tables](curriculum/09-tables/README.md) · [full](curriculum/09-tables/deep-dive.md) | Data tables, `caption`, row groups, `scope`, `headers`, merged cells, `colgroup` |
| 10 | [Forms](curriculum/10-forms-fundamentals/README.md) · [full](curriculum/10-forms-fundamentals/deep-dive.md) | `form`, labels, `name`/`id`/`value`, GET vs POST, `select`, `textarea`, buttons, `fieldset` |
| 11 | [Input types and checking answers](curriculum/11-input-types-and-validation/README.md) · [full](curriculum/11-input-types-and-validation/deep-dive.md) | All 22 input types, built-in checking, autocomplete, `inputmode`, file uploads, `meter`, `progress`, `output` |

### Lessons 12–18 — quality and modern HTML

| # | Lesson | What you learn |
|---|---|---|
| 12 | [Making pages work for everyone](curriculum/12-accessibility-and-aria/README.md) · [full](curriculum/12-accessibility-and-aria/deep-dive.md) | WCAG 2.2, accessible names, keyboard, focus, the rules of ARIA, live regions, ways to hide things |
| 13 | [The head, Google and sharing](curriculum/13-head-metadata-seo-and-social/README.md) · [full](curriculum/13-head-metadata-seo-and-social/deep-dive.md) | `meta`, `link`, `base`, the preferred address (canonical), robots, structured data, Open Graph, icons, manifest |
| 14 | [Adding CSS and JavaScript](curriculum/14-html-with-css-and-javascript/README.md) · [full](curriculum/14-html-with-css-and-javascript/deep-dive.md) | Three ways to add CSS, loading scripts (`defer`, `async`, `module`), `noscript`, DOM basics |
| 15 | [Pop-ups, accordions and menus](curriculum/15-interactive-elements/README.md) · [full](curriculum/15-interactive-elements/deep-dive.md) | `details`/`summary`, `dialog`, popovers, `command`/`commandfor`, `inert` |
| 16 | [Attributes for every tag, and other languages](curriculum/16-global-attributes-and-internationalization/README.md) · [full](curriculum/16-global-attributes-and-internationalization/deep-dive.md) | Every global attribute, `lang`, `dir`, `bdi`/`bdo`, `translate`, UTF-8 |
| 17 | [Make your own tags](curriculum/17-web-components-and-templates/README.md) · [full](curriculum/17-web-components-and-templates/deep-dive.md) | `template`, `slot`, custom elements, shadow DOM, declarative shadow DOM |
| 18 | [Drawing, saving and location](curriculum/18-html5-apis-and-canvas/README.md) · [full](curriculum/18-html5-apis-and-canvas/deep-dive.md) | Web Storage, location, drag and drop, Workers, Server-Sent Events, History, canvas |

### Lessons 19–22 — ready for real work

| # | Lesson | What you learn |
|---|---|---|
| 19 | [Staying safe](curriculum/19-security/README.md) · [full](curriculum/19-security/deep-dive.md) | XSS, HTML you don't trust, CSP, `integrity`, sandboxed iframes, forms and hidden fields, clickjacking |
| 20 | [Fast pages](curriculum/20-performance/README.md) · [full](curriculum/20-performance/deep-dive.md) | Core Web Vitals, how a page is drawn, images, resource hints, `fetchpriority`, loading scripts, DOM size |
| 21 | [Finding and fixing mistakes](curriculum/21-validation-debugging-and-tooling/README.md) · [full](curriculum/21-validation-debugging-and-tooling/deep-dive.md) | The W3C checker, DevTools, Lighthouse, axe, WAVE, linters, Emmet, browser support |
| 22 | [Working like a pro and going online](curriculum/22-professional-standards-and-deployment/README.md) · [full](curriculum/22-professional-standards-and-deployment/deep-dive.md) | Code style, old tags to avoid, HTML vs XHTML, multi-page sites, Git, putting it online |

---

## 10. Study plans

Pick one and stick with it. Steady beats intense.

| Plan | Each day | How long | Good for |
|---|---|---|---|
| **Sprint** | 6–8 h | ~2 weeks | Full-time learners, bootcamps |
| **Standard** | 1.5–2 h | ~6 weeks | Most people |
| **Steady** | 45 min | ~12 weeks | Learning next to work or school |

**The Standard plan, week by week:**

| Week | Lessons | Project |
|---|---|---|
| 1 | 1–4 | — |
| 2 | 5–7 | [P1 Personal profile](projects/01-personal-profile/README.md), [P2 Recipe collection](projects/02-recipe-collection/README.md) |
| 3 | 8–9 | [P3 Information portal](projects/03-information-portal/README.md) |
| 4 | 10–12 | [P4 Registration system](projects/04-registration-system/README.md) |
| 5 | 13–18 | [P5 Interactive docs hub](projects/05-interactive-docs-hub/README.md) |
| 6 | 19–22 | [P6 Final project: a business or portfolio site](projects/06-capstone-business-portfolio/README.md) — online |

---

## 11. Projects

| # | Project | After lesson | Shows you can… |
|---|---|---|---|
| P1 | [Personal profile page](projects/01-personal-profile/README.md) | 5 | Write a correct page with headings, text, lists and links |
| P2 | [Recipe collection](projects/02-recipe-collection/README.md) | 6 | Link several pages with correct paths and pictures |
| P3 | [Information portal](projects/03-information-portal/README.md) | 9 | Use layout tags, tables and media |
| P4 | [Registration system](projects/04-registration-system/README.md) | 12 | Build a form in several parts that everyone can use, with checks |
| P5 | [Interactive docs hub](projects/05-interactive-docs-hub/README.md) | 18 | Use the head, built-in pop-ups and accordions, templates, other languages |
| P6 | [Final project](projects/06-capstone-business-portfolio/README.md) | 22 | Put a real, multi-page website online |

Every project ends with the same [quality gate](assets/cheatsheets/quality-gate.md).

---

## 12. The five learning sites (and when to use each)

This course was built by comparing five well-known sites, topic by topic, and picking the best one for each job. The **Read more** table at the end of each full lesson tells you exactly which page to open.

| Site | What it's really good at | Use it for | Watch out for |
|---|---|---|---|
| [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML) | Accurate reference that follows the official rules, with browser-support tables | The *truth* about a tag or attribute; accessibility notes; odd cases | Heavy going for complete beginners — read our lesson first |
| [freeCodeCamp](https://www.freecodecamp.org/learn/responsive-web-design-v9/) | Step-by-step workshops, labs and a certificate project | Lots of guided practice, until you type it without thinking | The steps are tiny; do our drills too, so you can work without hints |
| [W3Schools](https://www.w3schools.com/html/) | Fast look-ups, plus a "Try it Yourself" editor; covers a lot (entities, character sets, HTML5 APIs) | Quick reminders; trying things in the browser | Simplifies, and sometimes lags behind good practice. Check anything important on MDN |
| [The Odin Project](https://www.theodinproject.com/paths/foundations/courses/foundations) | Real-world setup (Git, the command line), reading tasks, projects without hand-holding | Setting up your computer, Git, building on your own | HTML is spread over several courses — follow our lesson links |
| [Scrimba](https://scrimba.com/learn-html-and-css-c0p) | Video lessons you can pause and edit; MDN's learning partner | Your first look at a topic; putting your first site online | The free HTML course is an introduction; go deeper here and on MDN |

**When they disagree, trust them in this order:** the [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/) (the official rules) → MDN → everything else.

---

## 13. Code conventions used in this repo

- Tag and attribute names in small letters; attribute values in double quotes.
- Two-space indent.
- `<!DOCTYPE html>` in capitals (both ways are fine; we pick one and stick to it).
- No slash at the end of empty tags: `<img …>`, not `<img … />` (both are allowed in HTML; the slash does nothing).
- `type` is always written on `<button>`.
- Every example passes the [Nu HTML Checker](https://validator.w3.org/nu/), unless it's broken *on purpose* (those live in `exercises/debug/`, end in `.broken.html`, and say so at the top).

---

## 14. Getting help

1. Search MDN for the tag: `mdn <tag name>`.
2. Re-read the **⚠️ Exception** and **🔍 Don't mix up** boxes in the lesson. Most "weird" behaviour is explained there.
3. Check your file with the validator. Fix the *first* error first — later errors are often caused by it.
4. Ask well: say what you expected, what happened, and paste the smallest bit of code that shows it. The Odin Project's [Asking for help](https://www.theodinproject.com/lessons/foundations-asking-for-help) lesson is worth reading once.
5. Communities: The Odin Project Discord, the freeCodeCamp forum, Scrimba Discord.

---

## 15. Contributing and license

Found a mistake, a broken link, or a clearer way to explain something? See [CONTRIBUTING.md](CONTRIBUTING.md).

Licensed under the [MIT License](LICENSE). Use it, fork it, teach with it.
