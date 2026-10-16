# Lesson 1 · How the web works

⏱ 15 minutes · 🧰 You need: nothing

## In one sentence

When you open a website, your browser **asks** another computer for a file, that computer **sends it back**, and your browser **draws** it on your screen.

## Picture this 🍲

Think of ordering food at a restaurant:

| Restaurant | The web |
|---|---|
| You | Your **browser** (Chrome, Firefox, Safari, Edge) |
| The menu item you ask for | The **web address**, like `example.com` |
| The waiter who carries your order | The **internet** |
| The kitchen | A **server** — a computer that stores websites |
| Your plate of food | The **web page** |

You ask → the kitchen prepares → the food comes back → you eat. That's the whole web.

## What happens when you type an address

1. You type `example.com` and press Enter.
2. Your browser looks up where `example.com` lives. (Computers find each other with numbers, like phone numbers. This lookup is called **DNS** — the internet's phone book.)
3. Your browser sends a message: *"Please give me your page."*
4. The server replies: *"Here it is!"* and sends a file written in **HTML**.
5. Your browser reads the HTML and draws the page.

That whole trip usually takes less than a second.

## Three languages, three jobs

Every web page is built with up to three languages. Think of a house:

- **HTML** = the bricks and rooms. *What is on the page?* A heading, a paragraph, a picture.
- **CSS** = the paint and furniture. *How does it look?* Colours, sizes, layout.
- **JavaScript** = the electricity. *What does it do?* Buttons that react, menus that open.

This course teaches **HTML** — the foundation. No house stands without bricks.

## A few words you'll hear

- **Browser** — the app you use to visit websites.
- **Server** — a computer that stores websites and sends them out.
- **URL** — a web address, like `https://example.com/about.html`.
- **HTTPS** — a safe, locked connection. Look for it at the start of the address.
- **Domain** — the name part, like `example.com`. You rent it yearly.
- **Hosting** — renting space on a server so your site is online.

## ⚠️ Careful

**HTML is not a programming language.** It doesn't do maths or make decisions. It *describes* content: "this is a heading", "this is a list". That's why it's the friendliest place to start.

## ✅ Remember

- Browser **asks**, server **answers**, browser **draws**.
- HTML = content, CSS = looks, JavaScript = actions.
- A domain is just a name. You also need hosting to put a site online.

## 🎯 Try it

1. Open any website. Right-click an empty spot and choose **View Page Source**. That's HTML! Don't worry about understanding it yet.
2. Look at the address bar. Can you find the domain? Is there a padlock (HTTPS)?

<details>
<summary>Quick quiz: Which language makes a button change colour when you hover on it, and which one puts the button on the page?</summary>

HTML puts the button on the page. CSS changes how it looks (including on hover). JavaScript would be needed for things like "show a message when clicked".
</details>

## Want more?

- 📖 The detailed version: [deep-dive.md](deep-dive.md)
- 🌐 MDN: [How the web works](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works)
- ✏️ Practice: [drills](../../exercises/drills/01-how-the-web-works.md)

➡️ **Next:** [Lesson 2 · Your first web page](../02-html-syntax-and-document-structure/README.md)
