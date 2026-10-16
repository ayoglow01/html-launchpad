# Lesson 19 · Staying safe

⏱ 30 minutes · 🧰 You need: Lesson 18

## In one sentence

Never trust what users type, never put secrets in your page, and always use **https**.

## 1. Everyone can see your HTML 👀

Anyone can press **View Page Source** or open DevTools. So:

- ❌ Never put passwords, secret keys, or private notes in HTML, JavaScript, or comments.
- ❌ Never trust hidden fields — people can change them.

```html
❌ <input type="hidden" name="price" value="5000">   <!-- someone changes it to 1 -->
```

The **server** must decide the price.

## 2. Don't let users' text become code (XSS) 🦠

If a user types this as their name:

```html
<img src="x" onerror="alert('hacked')">
```

…and your JavaScript puts it on the page with `innerHTML`, that code **runs**. This attack is called **XSS** (cross-site scripting).

```js
❌ greeting.innerHTML = "Hello " + name;    // runs any HTML the user typed
✅ greeting.textContent = "Hello " + name;  // shows it as plain text — safe
```

**Rule:** for anything a user typed, use `textContent`.

## 3. Browser checks can be skipped

`required`, `maxlength`, `pattern`… they're helpful, but anyone can turn them off. **The server must check everything again.**

## 4. Passwords and private info

```html
<form action="/login" method="post">        <!-- post: not in the address bar -->
  <input type="password" name="pw" autocomplete="current-password">
</form>
```

- Use `method="post"` for private info.
- Let password managers work (`autocomplete="current-password"` or `"new-password"`).

## 5. Links that open new tabs

```html
<a href="https://example.com" target="_blank" rel="noopener">Example</a>
```

`rel="noopener"` stops the new page from controlling your page.

## 6. Always https 🔒

https encrypts everything between the user and your site. Free hosts (GitHub Pages, Netlify) give you https automatically.

## 7. Content Security Policy (preview)

A **CSP** is a rule list that says "only load scripts from my own site". Even if a bad script sneaks in, the browser blocks it. The full version shows how to write one.

## ✅ Remember

- Your HTML is public. No secrets.
- User text → `textContent`, never `innerHTML`.
- The server checks everything.
- Private forms → `post`.
- Always https.

## 🎯 Try it

<details>
<summary>Spot the danger: <code>results.innerHTML = "You searched for " + searchWord;</code></summary>

If `searchWord` came from the user, it can contain code (XSS). Use `results.textContent` instead.
</details>

## Want more?

- 📖 The detailed version (CSP, clickjacking, SRI, security headers): [deep-dive.md](deep-dive.md)
- 💻 Example: [security.html](examples/security.html)
- ✏️ Practice: [drills](../../exercises/drills/19-security.md) · [fix a dangerous page](../../exercises/debug/10-security-performance.broken.html)

➡️ **Next:** [Lesson 20 · Fast pages](../20-performance/README.md)
