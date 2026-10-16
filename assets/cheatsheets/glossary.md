# Glossary 📖

Tricky words used in html-cracker, in plain English. The number in brackets is the lesson where you learn it.

| Word | What it means |
|---|---|
| **Accessibility (a11y)** | Making pages that disabled people can use — which ends up helping everyone. "a11y" is short for it: a, 11 letters, y. (12) |
| **Accessibility tree** | The browser's simple version of your page that it gives to screen readers: what each thing is, its name, and whether it's open, checked and so on. (12) |
| **Accessible name** | What a screen reader says for something — taken from its label, its text, its `alt`, or `aria-label`. (12) |
| **Assistive technology** | Tools disabled people use to get around the web: screen readers, screen magnifiers, switches, voice control. (12) |
| **Attribute** | Extra information inside an opening tag: `name="value"`. (2) |
| **Baseline** | A label that tells you a feature works in all the main browsers. "Newly available" = just arrived. "Widely available" = safe for 30 months or more. (21) |
| **BCP 47** | The standard way to write language codes, like `en-NG`, `yo` or `zh-Hans`. (16) |
| **Block / inline** | An old, informal way to sort tags: block ones start on a new line; inline ones sit inside a line of text. The official rules now use content models instead. (2) |
| **Boolean (yes/no) attribute** | "On" if it's there, "off" if it isn't. Its value is ignored — even `="false"`. (2, 16) |
| **Browser** | The app that fetches web pages, reads them, draws them and runs their code. (1) |
| **Canonical address** | The one address you prefer, when the same page can be reached at several. (13) |
| **Character reference (entity)** | A code like `&amp;` or `&#8358;` that stands for a character. (2, 3) |
| **CLS** | Cumulative Layout Shift — how much things jump about while a page loads. Good: 0.1 or less. (20) |
| **Content model** | The rules for what a tag is allowed to hold. (2) |
| **Core Web Vitals** | Google's three speed and comfort scores: LCP, INP and CLS. (20) |
| **CORS** | Cross-Origin Resource Sharing — a server saying "other sites may use this file". (18, 19) |
| **CSP** | Content Security Policy — a list telling the browser where scripts, styles and other files may come from. (19) |
| **Critical rendering path** | The steps a browser goes through to turn HTML and CSS into a picture on screen, and what holds them up. (20) |
| **Custom element** | A tag you make yourself. Its name must have a dash, like `<user-card>`. (17) |
| **Data URL** | A small file written straight into the page as text: `data:image/png;base64,…`. (6) |
| **Declarative shadow DOM** | A shadow DOM made with `<template shadowrootmode>`, with no JavaScript. (17) |
| **DNS** | Domain Name System — the internet's phone book. It turns names like `example.com` into number addresses (IP addresses). (1) |
| **Doctype** | `<!DOCTYPE html>` — the first line of every page. It switches on modern (standards) mode. (2) |
| **DOM** | Document Object Model — the live tree the browser builds from your HTML. JavaScript reads and changes it. (2, 14) |
| **Element** | One piece of a page: opening tag + content + closing tag (or an empty tag on its own). (2) |
| **Enumerated (keyword) attribute** | Takes one word from a fixed list, like `dir="rtl"`. (16) |
| **Fragment** | The `#part` at the end of an address. It points to an `id` on the page, and isn't sent to the server. (5) |
| **HTTP / HTTPS** | The rules browsers and servers use to ask for and send files. HTTPS is the locked, private version. (1, 19) |
| **INP** | Interaction to Next Paint — how quickly the page reacts when you click, tap or type. Good: 200 ms or less. (20) |
| **Inert** | Switched off: can't be focused or clicked, and screen readers skip it. (15) |
| **Landmark** | A main area of a page that screen reader users can jump straight to (header, menu, main content…). (8, 12) |
| **LCP** | Largest Contentful Paint — how long until the biggest picture or block of text appears. Good: 2.5 s or less. (20) |
| **Light DOM** | The normal children of your own tag, as opposed to its private shadow tree. (17) |
| **Live region** | An area whose changes screen readers announce out loud. (12) |
| **Markup language** | A language that labels content to show its structure and meaning. It's not a programming language. (1) |
| **Mixed content** | Files loaded over plain HTTP on an HTTPS page. (19) |
| **MIME type** | A file's type label, like `text/html`, `image/webp` or `video/mp4`. (7) |
| **Node** | Any item in the DOM tree: an element, some text, a comment, the document itself. (2) |
| **Open Graph** | The `og:` meta tags that control how your link looks when shared on WhatsApp, LinkedIn, Facebook and others. (13) |
| **Origin** | The scheme + host + port of an address. `https://a.com` and `https://b.a.com` are different origins. (5, 19) |
| **Parsing** | The browser reading your HTML text and turning it into a DOM tree, patching mistakes as it goes. (2, 21) |
| **Polyfill** | A script that adds a missing feature to older browsers. (21) |
| **Progressive enhancement** | Building in layers: first HTML that works, then CSS on top, then JavaScript on top. (14) |
| **Quirks mode** | An old way of drawing pages that browsers use when the doctype is missing. (2) |
| **Rich results** | Fancier Google results (stars, recipes, FAQs), made possible by structured data. (13) |
| **Screen reader** | Software that reads the screen out loud, or in braille (NVDA, JAWS, VoiceOver, TalkBack). (12) |
| **Secure context** | A page sent over HTTPS, or from localhost. Powerful features like location only work here. (18) |
| **Semantic HTML** | Picking tags for what the content *means*, not how it looks. (8) |
| **Shadow DOM** | A private tree of elements attached to a tag, with its own CSS. (17) |
| **SRI** | Subresource Integrity — the `integrity` attribute. It stops a file from running if someone changed it. (19) |
| **Standards mode** | The modern way of drawing pages, switched on by the doctype. (2) |
| **Structured data** | A description of your page that computers understand (from schema.org, usually written as JSON-LD). (13) |
| **Tag** | The bit that starts or ends an element: `<p>`, `</p>`. (2) |
| **Top layer** | A layer that sits above everything else on the page. Pop-up dialogs and popovers use it. (15) |
| **URL** | A web address. Its parts: scheme, host, port, path, query, fragment. (1, 5) |
| **Viewport** | The part of the page you can see on your screen. On phones, you set it with the viewport meta tag. (2, 13) |
| **Void (empty) element** | A tag that can't hold anything and has no closing tag (`img`, `br`, `input`…). (2) |
| **WCAG** | Web Content Accessibility Guidelines — the world's accessibility rules. Version 2.2 is the current one. (12) |
| **WHATWG** | The group that looks after the official HTML rules (the HTML Living Standard). (1, 22) |
| **XSS** | Cross-site scripting — an attacker's code running on your page. (19) |
