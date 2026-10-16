# Lesson 21 · Finding and fixing mistakes

⏱ 30 minutes · 🧰 You need: Lesson 20

## In one sentence

Browsers quietly hide your HTML mistakes, so use a **validator** and **DevTools** to find them.

## The surprise 😲

Browsers are very forgiving. Forget a closing tag and the page **still shows**. That sounds nice, but the browser is *guessing* what you meant — and different tools may guess differently. Screen readers, Google, and your future self pay the price.

## Tool 1: the validator ✔️

1. Go to **validator.w3.org/nu**
2. Choose **Check by file upload** or **Check by text input**.
3. Paste your HTML and press **Check**.

It lists every mistake with a line number. **Fix the first error first** — one mistake often causes many others.

## Tool 2: DevTools 🔧

Right-click anything on your page → **Inspect**.

- **Elements** — shows what the browser actually built. If it's different from your file, you have a mistake.
- **Console** — red messages = errors.
- **Lighthouse** — scores for speed, accessibility, SEO.

## Source vs what the browser built

You write:

```html
<p>Hello <div>world</div></p>
```

DevTools shows the browser split it into a paragraph, a div, and an **extra empty paragraph**. A `<div>` can't go inside a `<p>`, so the browser fixed it its own way.

## A simple method for fixing bugs 🕵️

1. **See** — what exactly is wrong?
2. **Validate** — paste into the validator.
3. **Inspect** — look in DevTools.
4. **Shrink** — delete parts until the problem disappears. The last thing you deleted is the culprit.
5. **Fix one thing**, then check again.

## Helpers in VS Code

- **Format Document** (Shift + Alt + F) — tidies your indentation so mistakes stand out.
- **Live Server** — refreshes the page every time you save.
- The editor underlines some mistakes in red.

## ✅ Remember

- "It works" doesn't mean "it's correct".
- Validator: validator.w3.org/nu. Fix the first error first.
- DevTools → Elements shows what the browser really built.
- Change one thing at a time.

## 🎯 Try it

Open the broken example below, paste it into the validator, and count the errors. Then fix them all.

## Want more?

- 📖 The detailed version (audits, automatic checks, browser support): [deep-dive.md](deep-dive.md)
- 💻 Broken example to study: [error-recovery.broken.html](examples/error-recovery.broken.html)
- 🌐 MDN: [Debugging HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML)
- ✏️ Practice: [drills](../../exercises/drills/21-validation-debugging-tooling.md) · [all debug exercises](../../exercises/debug/README.md)

➡️ **Next:** [Lesson 22 · Working like a pro and going online](../22-professional-standards-and-deployment/README.md)
