# Lesson 1 · How the web works — the full version

📘 **This is the full version.** New to this? Read the [easy lesson](README.md) first, then come back for the details.

⏱ 1.5–2 hours · 🌱 Beginner · 🧰 You need: nothing yet

You can write HTML without knowing any of this. But when a page "works on my laptop but not online", the answer is almost always in this lesson.

## By the end you can

- Say what happens between typing an address and seeing a page.
- Tell apart: the internet and the web, a domain and a URL, a server and a host.
- Read an error number like 404 and know whose fault it is.
- Say what HTML does, and what it doesn't do.
- Explain why "HTML5" is a name, not something you install.

---

## 1. The internet and the web are not the same thing

| | The internet | The web |
|---|---|---|
| What it is | Millions of computers joined by cables, Wi-Fi and phone masts | One service that runs on the internet: pages joined by links |
| Other things on the internet | Email, WhatsApp calls, online games, file sharing | — |
| When it started | 1960s–1980s | 1989–1991. Tim Berners-Lee made the first web pages, and the first HTML |

Think of the internet as the roads. The web is one kind of traffic on those roads. Email is another.

## 2. Clients and servers

- A **client** is anything that *asks* for a page. Usually a browser. But Google's robot, WhatsApp's link-preview robot and a screen reader (software that reads the screen aloud) are clients too.
- A **server** is a computer that *answers*. It waits for requests and sends back files.

So your HTML has many readers, not just one person in a browser. Robots read it. Screen readers read it out loud. Write it so all of them understand.

## 3. What happens when you visit a page

Take this address:

```
https://www.example.com/blog/index.html
   │          │            │
 scheme      host         path
(how)      (which      (which file)
           computer)
```

Step by step:

1. **Find the computer.** Computers find each other by number (an **IP address**, like `93.184.215.14`). The browser asks **DNS** — the internet's phone book — "what number is `www.example.com`?"
2. **Connect.** The browser connects to that number. With `https`, it also sets up encryption (scrambling, so nobody can read the traffic) and checks the site's certificate (its ID card).
3. **Ask.** The browser sends a request: "GET me `/blog/index.html`, please."
4. **Answer.** The server sends back three things: a **status code** (did it work?), some **headers** (labels, such as "this is HTML"), and the **body** (your HTML file).
5. **Read the HTML.** The browser reads your HTML from top to bottom and builds a tree of it in memory, called the **DOM** (Lesson 2). Each time it finds a picture, a stylesheet or a script, it asks the server for that file too.
6. **Draw.** It adds the CSS, works out where everything goes, and paints the page.

```
address → DNS → connect → ask → answer → read HTML → build the tree (DOM)
                                                       ↓
                                       fetch CSS, JS, pictures, fonts
                                                       ↓
                                            style → layout → paint
```

## 4. HTTP: how browsers and servers talk

**HTTP** is the language browsers and servers use to ask and answer. **HTTPS** is the same thing, but scrambled so nobody in the middle can read it.

Every answer comes with a number. These are the ones you'll see:

| Number | Means | Whose problem? |
|---|---|---|
| `200` | OK, here you go | Nobody's. All good |
| `301` / `308` | "It moved. Go here instead" | Normal. Update your link |
| `304` | "You already have it. Use your saved copy" | Normal |
| `403` | "Not allowed" | The server's settings |
| `404` | "Nothing here" | Usually **yours**: a wrong path or file name |
| `500` | "The server broke" | The server's code |

Forms (Lesson 10) use two kinds of request: **GET** (fetch something) and **POST** (send something).

> ❗ **Always use HTTPS for a public site.** Browsers mark plain HTTP pages "Not secure". Also, some features only work on HTTPS (or on your own computer while testing): finding the user's location, working offline, copy and paste. These places are called **secure contexts**.

## 5. Domains, DNS and hosting

| Word | Plain meaning | Example |
|---|---|---|
| **Domain name** | A name for your site. You rent it every year from a seller called a **registrar** | `example.com` |
| **Subdomain** | An extra name in front of yours. You make as many as you like | `blog.example.com` |
| **TLD** | The ending | `.com`, `.org`, `.ng`, `.com.ng` |
| **DNS record** | A line in the phone book. It points a name somewhere | `A` → an IPv4 number, `AAAA` → an IPv6 number, `CNAME` → another name |
| **Hosting** | A server that keeps your files and sends them out | GitHub Pages, Netlify, Cloudflare Pages, Vercel, or your own rented server |
| **URL** | The full address of one single thing | `https://example.com/about.html#team` |

The sites you build in this course are plain HTML files. You can host them **for free**. Lesson 22 shows you how.

## 6. Browsers and their engines

Inside every browser is an **engine**. It turns HTML and CSS into what you see. Only three engines matter:

| Engine | Used by |
|---|---|
| **Blink** | Chrome, Edge, Opera, Brave, Samsung Internet |
| **Gecko** | Firefox |
| **WebKit** | Safari. On iPhones and iPads, other browsers have long had to use WebKit too |

> 💡 **Tip:** Test in two browsers with *different* engines, such as Chrome and Firefox. "It works in Chrome" only tells you it works in Blink.

## 7. What HTML is, and what it isn't

**HTML** stands for HyperText Markup Language. It tells the browser **what each piece of content is**: this is a heading, this is a list, this is a button.

- **Markup** means adding labels to text so software knows what each part is. HTML, XML and Markdown are all markup languages.
- **HyperText** means text with links to other text. All those links joined together are the "web".

HTML is **not a programming language**. It has no maths, no "if this, then that", no loops.

The three languages of a web page:

| Language | Its job | Example |
|---|---|---|
| **HTML** | What things are | "This is a button that says *Menu*." |
| **CSS** | How things look | "The button is blue with round corners." |
| **JavaScript** | What things do | "Click the button and the menu opens." |

**What HTML can't do on its own:** save data, remember who you are, take payments or make decisions.

**What it can do — more than people think:** send forms to a server, open and close sections (`<details>`), show pop-up boxes (`<dialog>`), play videos, and move between pages. All with no JavaScript. Learn what HTML does by itself, and you'll write a lot less JavaScript.

## 8. "HTML5" — a name, not a version

A short history:

- **1999–2000:** HTML 4.01 and XHTML 1.0. Fixed versions that didn't change.
- **2014:** HTML5 was finished. It added page-layout tags (`<header>`, `<article>`…), video and audio without plug-ins, new input types, drawing with `<canvas>`, and exact rules for reading broken HTML. "HTML5" also became a buzzword for anything new on the web, even CSS.
- **Since 2019:** there is just **one** HTML, called the **[HTML Living Standard](https://html.spec.whatwg.org/multipage/)**. A group called **WHATWG** looks after it and updates it all the time.

> 🔍 **Don't mix up:** There is no HTML6 coming, and you never "upgrade to HTML5". The first line `<!DOCTYPE html>` just means "modern HTML". In this course, *HTML5* means today's HTML.

**Who looks after what:**

| Group | What they do |
|---|---|
| WHATWG | Writes the rules for HTML and the DOM |
| W3C | Writes the accessibility rules (WCAG), ARIA, CSS and more |
| Browser makers | Build the features. If browsers don't support something yet, you can't really use it |

## 9. What a front-end developer does

**Front-end** developers build the part that runs in your browser: HTML, CSS and JavaScript. They also care about making pages usable for everyone, fast, and easy for Google to find.

**Back-end** developers build the part that runs on servers: databases, logins, payments.

Both depend on HTML. Even big tools like React and Next.js produce HTML at the end.

---

## Mistakes people make

- Thinking what you see on screen *is* the HTML. It's HTML + CSS + JavaScript + the fixes the browser made to your mistakes.
- Blaming the server for a 404 when the path is wrong, or the capital letters don't match (`Logo.png` is not `logo.png`).
- Calling HTML a programming language in a job interview.

## Quick quiz

<details>
<summary>1. What's the difference between a domain and a URL?</summary>

A domain (`example.com`) is the name of a site. A URL (`https://example.com/about.html#team`) is the full address of one thing on that site.
</details>

<details>
<summary>2. A picture shows a broken icon. In DevTools → Network, its line is red and says 404. Where do you look first?</summary>

At the `src`. Check the spelling, the folder, the ending (`.png`, `.jpg`) and the capital letters. 404 means "nothing at this exact address".
</details>

<details>
<summary>3. Why write HTML for more than just browsers?</summary>

Google, screen readers, link-preview robots, and browser features like reader mode, translation and autofill all read your HTML. They care about what things *are*, not how they look.
</details>

<details>
<summary>4. Do you need to switch HTML5 on?</summary>

No. Start your file with `<!DOCTYPE html>` and you're using modern HTML.
</details>

## Practice

- ✏️ [Drills for this lesson](../../exercises/drills/01-how-the-web-works.md)
- 🔧 Open any website. Press **F12**, click **Network**, and reload. Click the first line. Find the status number, the `Content-Type` label and the HTML itself.

## Read more

| Where | What you get |
|---|---|
| MDN | [How the web works](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works) · [How browsers load websites](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) — short and accurate |
| MDN | [The web standards model](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model) — who decides what HTML is |
| The Odin Project | [How does the web work?](https://www.theodinproject.com/lessons/foundations-how-does-the-web-work) — readings and videos |
| W3Schools | [What is HTTP](https://www.w3schools.com/whatis/whatis_http.asp) · [HTML Introduction](https://www.w3schools.com/html/html_intro.asp) — quick reminders |
| Scrimba | [Learn HTML and CSS](https://scrimba.com/learn-html-and-css-c0p) — build and publish a page straight away |

**Back to:** [the easy lesson](README.md) · **Next easy lesson:** [Lesson 2 · Your first web page](../02-html-syntax-and-document-structure/README.md)
