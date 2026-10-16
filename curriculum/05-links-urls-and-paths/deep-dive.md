# Lesson 5 · Links — the full version

📘 **This is the full version.** New to this? Read the [easy lesson](README.md) first, then come back for the details.

⏱ 2.5–3 hours · 🌱 Beginner · 🧰 You need: Lessons 1–4

Links are what make the web a *web*. Paths (the "where is this file?" part) cause more beginner bugs than anything else. This lesson covers both.

## By the end you can

- Read any web address and work out where a path leads.
- Write links to your own pages, other sites, parts of a page, email, phone and downloads.
- Use `target` and `rel` on purpose, and know what browsers already do for you.
- Write link text that makes sense on its own.
- Organise your folders so nothing breaks when you publish.

---

## 1. The parts of a web address

```
https://www.example.com:443/blog/post.html?lang=en&page=2#comments
└─┬─┘   └──────┬──────┘└┬┘└──────┬──────┘└──────┬──────┘└───┬───┘
scheme       host     port     path          query      fragment
```

| Part | Plain meaning |
|---|---|
| Scheme | How to get it: `https`, `http`, `mailto`, `tel`, `file`… |
| Host | Which computer: a domain name or IP number |
| Port | Which "door". Usually left out (443 for HTTPS, 80 for HTTP) |
| Path | Which file on that computer. **Capitals matter on most servers** |
| Query | `?key=value&key2=value2` — extra information for the server. Forms using GET put their answers here |
| Fragment | `#id` — a spot *inside* the page. **Never sent to the server** |

## 2. The `<a>` tag

```html
<a href="about.html">About us</a>
```

An `<a>` **with** `href` is a real link. You can reach it with Tab, open it with Enter, and screen readers call it "link".

> ⚠️ **Exception:** An `<a>` **without** `href` is just a placeholder. You can't Tab to it, and it isn't called a link. It's sometimes used for "you are here" in a menu. It is never a replacement for a button.

## 3. Full addresses and short paths

Picture this site. You're editing `blog/post.html`:

```
site/
├── index.html
├── about.html
├── blog/
│   ├── index.html
│   └── post.html        ← you are here
└── images/
    └── logo.png
```

| Kind | You write | From `blog/post.html` it goes to |
|---|---|---|
| **Absolute** (full address) | `https://example.com/about.html` | Exactly that, always |
| **Same folder** | `index.html` or `./index.html` | `site/blog/index.html` |
| **Up one folder** | `../about.html` | `site/about.html` |
| **Up, then into another folder** | `../images/logo.png` | `site/images/logo.png` |
| **Root-relative** (starts with `/`) | `/about.html` | The site's top folder + `about.html` |
| **Protocol-relative** (starts with `//`) | `//cdn.example.com/x.js` | Old style. Just write `https://` |

Simple rules:

- **Your own pages → short (relative) paths.** They keep working if you change domain.
- **Other sites → full addresses.**
- `..` means "go up one folder". `../../` means "up two".

> ⚠️ **Exception — paths starting with `/` break in two common places:**
> 1. **Double-clicking files** (the address starts with `file://`). `/about.html` then means the top of your *whole disk* (like `C:/about.html`), not your project.
> 2. **GitHub Pages project sites**, which live at `https://user.github.io/repo-name/`. There, `/about.html` goes to `https://user.github.io/about.html` — outside your site.
>
> Plain relative paths (`about.html`, `../images/logo.png`) work in both places. Only use `/` paths when you control the server.

> 📝 Paths always use **forward slashes** (`images/logo.png`), even on Windows.

## 4. Links to a spot on a page

```html
<nav>
  <a href="#pricing">Pricing</a>
  <a href="services.html#support">Support on the services page</a>
</nav>

<section id="pricing">
  <h2>Pricing</h2>
</section>
```

- `href="#id"` jumps to the element with that `id`, and moves the keyboard and screen-reader position there too.
- `href="#top"` (or just `href="#"`) jumps to the top, as long as nothing has `id="top"`.
- `id` values must be unique, and capitals matter.

> 💡 **Text fragments** link to any phrase, even without an `id`: `https://example.com/page#:~:text=semantic%20HTML`. All major browsers have supported them since 2024. Handy for pointing people to a quote. Don't build your own site's menu on them.

## 5. Email, phone and text links

```html
<a href="mailto:hello@example.com">hello@example.com</a>
<a href="mailto:hello@example.com?subject=Website%20enquiry&amp;cc=sales@example.com">Email sales</a>

<a href="tel:+2348000000000">+234 800 000 0000</a>
<a href="sms:+2348000000000">Send us a text</a>
```

- `tel:` — write the number in international form: `+`, the country code, no spaces, no leading 0.
- `mailto:` — spaces in the subject or message must be written `%20`. Between extra parts, `&amp;` is the safest way to write `&` in HTML.
- Show the real email or number as the link text if you can. People without an email app or a phone can still copy it.

> ⚠️ **Exception:** `sms:` works on most phones, but it isn't an official standard. Adding a message body works differently on iPhone and Android. Treat it as a bonus, not something people depend on.

## 6. Download links

```html
<a href="files/cv-2026.pdf" download>Download CV (PDF, 240 KB)</a>
<a href="files/report-final-v3.pdf" download="annual-report-2026.pdf">Annual report</a>
```

- `download` asks the browser to save the file instead of opening it. Give it a value to suggest a file name.
- Say the file type and size in the link text.

> ⚠️ **Exception:** `download` only works for files on **your own site** (plus special `blob:` and `data:` addresses). For files on another site, the browser ignores it and just opens the file. The server can also overrule it with a `Content-Disposition` header.

## 7. `target` and `rel`

```html
<a href="https://developer.mozilla.org/" target="_blank" rel="noopener">MDN (opens in new tab)</a>
```

| `target` | Opens in |
|---|---|
| `_self` (normal) | The same tab |
| `_blank` | A new tab |
| `_parent` / `_top` | The page around an iframe / the whole tab |
| a name | A window or `<iframe name="…">` with that name |

`rel` says how the linked page relates to yours:

| `rel` | Meaning |
|---|---|
| `noopener` | The new tab can't control your page (stops a trick called "reverse tabnabbing") |
| `noreferrer` | Also don't tell the other site where the visitor came from. **Includes `noopener`** |
| `nofollow` | "I don't vouch for this link" — a note for search engines |
| `ugc` | The link was posted by users (comments, forums) |
| `sponsored` | A paid or affiliate link |
| `external` | The link goes to another site (just information) |
| `author`, `license`, `prev`, `next`, `help`, `privacy-policy`, `terms-of-service` | Describe what the linked page is |

> ⚠️ **Exception — browsers already do it:** All current browsers **add `noopener` to `target="_blank"` links automatically**. Writing `rel="noopener"` yourself is still a harmless, clear safety net, and helps very old browsers. Only add `noreferrer` if you really want to hide where visitors came from — it stops the other site seeing your referrals.

> 💡 **Tip:** Don't open links in new tabs by default. People can choose that themselves (middle-click, or long-press on a phone). New tabs also confuse screen-reader users. If you must, **say so** in the link text: "(opens in new tab)".

## 8. Other link attributes

| Attribute | What it does |
|---|---|
| `hreflang` | The language of the linked page: `hreflang="fr"` |
| `type` | What kind of file it is: `type="application/pdf"` |
| `referrerpolicy` | How much to tell the other site about where the visitor came from: `no-referrer`, `strict-origin-when-cross-origin` (the normal setting)… |
| `ping` | Addresses to notify when the link is clicked. Mostly for tracking. Firefox has it switched off by default |

## 9. Link text that makes sense

Screen-reader users often open a **list of every link** on the page. A list of "click here, click here, read more" tells them nothing. Google also reads link text to understand where it leads.

| ❌ | ✅ |
|---|---|
| `To read our tutorials, <a href="/blog">click here</a>.` | `<a href="/blog">Read our HTML tutorials</a>` |
| `<a href="/report.pdf">Download</a>` | `<a href="/report.pdf">Download the 2026 annual report (PDF, 2 MB)</a>` |
| `<a href="https://example.com">https://example.com/a/very/long/path?id=7</a>` | `<a href="https://example.com/…">Example's pricing guide</a>` |

## 10. Link or button? (more in Lesson 12)

| | `<a href>` | `<button>` |
|---|---|---|
| Job | **Go somewhere** (new page, or a spot on the page) | **Do something** (send, open, switch) |
| Keys | Enter | Enter and Space |
| Right-click "Open in new tab" | Yes | No |

❌ `<a href="#" onclick="openMenu()">Menu</a>` — use `<button type="button">`.
❌ `<button onclick="location.href='/about'">About</button>` — use `<a href="/about">`.

## 11. Odd characters in addresses

Addresses can only use a small set of plain characters. Anything else is written as `%` plus a code. This is called **percent-encoding**:

| Character | Written as |
|---|---|
| space | `%20` (or `+` in form answers) |
| `&` | `%26` |
| `?` | `%3F` |
| `#` | `%23` |
| `/` | `%2F` (when it's part of the data, not a folder separator) |

Skip the whole problem in your own file names: **lowercase, dashes, no spaces**.

## 12. How to organise your folders

```
my-site/
├── index.html            ← home page; shown for "/"
├── about.html
├── contact.html
├── blog/
│   ├── index.html        ← shown for "/blog/"
│   └── first-post.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/
├── media/
└── files/                ← PDFs and downloads
```

- Any folder people should reach as `/folder/` needs its own `index.html`.
- Group files by type (`images/`, `css/`) or by section (`blog/`). Pick one way and stick to it.
- **Lowercase. Dashes. No spaces. No special characters.**

> ❗ Windows and Mac usually ignore capitals in file names. Most web servers don't. `<img src="images/Logo.png">` works on your laptop, then gives a 404 online if the file is really `logo.png`.

---

## Mistakes people make

- Forgetting `../` when linking from inside a folder.
- Using `/` paths and then double-clicking the file.
- `href="#"` plus JavaScript instead of a `<button>`.
- Link text like "click here" or "read more".
- `target="_blank"` on every link.
- Two elements with the same `id`, so the jump link goes to the wrong one.

## Quick quiz

<details>
<summary>1. From <code>blog/2026/post.html</code>, link to <code>images/logo.png</code> in the top folder.</summary>

`../../images/logo.png`
</details>

<details>
<summary>2. Why might <code>&lt;a href="/about.html"&gt;</code> work on Netlify but break on a GitHub Pages project site?</summary>

Project sites live inside `/repo-name/`. A path starting with `/` goes to the top of the domain, outside the project.
</details>

<details>
<summary>3. Is the <code>#section</code> part sent to the server?</summary>

No. The browser handles it by itself.
</details>

<details>
<summary>4. Do you still need <code>rel="noopener"</code> with <code>target="_blank"</code>?</summary>

Modern browsers add it for you. Writing it is clear and harmless, but today's browsers don't need it.
</details>

<details>
<summary>5. Your <code>download</code> attribute is ignored. Give two possible reasons.</summary>

The file is on another site. Or the server sends a `Content-Disposition` header that wins.
</details>

## Practice

- 💻 Example: [examples/index.html](examples/index.html) — a small site with folders. Open it and click every link.
- ✏️ [Drills for this lesson](../../exercises/drills/05-links-and-paths.md)
- 🔧 Fix this: [04-links-paths.broken.html](../../exercises/debug/04-links-paths.broken.html)
- 🏗️ Project: [P1 · Personal profile page](../../projects/01-personal-profile/README.md)

## Read more

| Where | What you get |
|---|---|
| MDN | [Creating links](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links) · [What is a URL?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) — the main explanation and good habits |
| The Odin Project | [Links and Images](https://www.theodinproject.com/lessons/foundations-links-and-images) — the best hands-on explanation of paths, with real folders |
| W3Schools | [Links](https://www.w3schools.com/html/html_links.asp) · [File paths](https://www.w3schools.com/html/html_filepaths.asp) · [URL encoding](https://www.w3schools.com/html/html_urlencode.asp) — quick look-ups |
| freeCodeCamp | [Responsive Web Design](https://www.freecodecamp.org/learn/responsive-web-design-v9/) — the *Travel Agency Page* lab |
| Scrimba | [Learn HTML and CSS](https://scrimba.com/learn-html-and-css-c0p) — interactive intro to links |

**Back to:** [the easy lesson](README.md) · **Next easy lesson:** [Lesson 6 · Images](../06-images-and-graphics/README.md)
