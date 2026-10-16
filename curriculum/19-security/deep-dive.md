# Lesson 19 · Staying safe — the full version

📘 **This is the full version.** New to this? Read the [easy lesson](README.md) first, then come back for the details.

⏱ 3–4 hours · 🚀 Pro · 🧰 You need: Lessons 1–18

HTML can't protect a server. But your HTML choices open or close real ways to attack a site: where scripts may come from, what someone else's script can change, whether your page can be hidden inside another site, and what leaks out in addresses. Most fixes are one attribute or one server header.

## By the end you can

- Explain cross-site scripting (XSS) and stop it in your HTML and JavaScript.
- Write a Content Security Policy — and know what the `<meta>` version can't do.
- Protect against clickjacking, tabnabbing and changed CDN files.
- Say what must never appear in your HTML or in addresses.
- Recognise the security headers a professional site sends.

---

## 1. The main attacks, in one table

| Attack | What happens | What your HTML can do |
|---|---|---|
| **XSS** (cross-site scripting) | An attacker's script runs on your page, as if it were your visitor | Treat input as text, use `textContent` instead of `innerHTML`, add a CSP |
| **Clickjacking** | Your page is hidden inside someone else's page, and people click it without knowing | The `frame-ancestors` CSP header |
| **Tabnabbing** | A page opened with `target="_blank"` secretly changes your tab using `window.opener` | `rel="noopener"` (modern browsers already do this for `_blank`) |
| **A changed CDN file** | Someone changes a script you load from another site | Subresource Integrity (`integrity`) |
| **Mixed content** | Files loaded over plain HTTP on an HTTPS page can be read or changed on the way | HTTPS everywhere, `upgrade-insecure-requests` |
| **CSRF** (cross-site request forgery) | Another site sends a form to yours, using your visitor's cookies | `SameSite` cookies plus secret tokens checked by the server |
| **Leaking data** | Secrets in your code, addresses, referrers or storage | Keep secrets on the server; use `POST`; a referrer policy |

## 2. Cross-site scripting (XSS)

XSS happens when **data you don't control** (what users type, bits of the address, data from an API) gets put into your page **as code** instead of as text.

```js
const name = new URLSearchParams(location.search).get("name");

// ❌ Dangerous: ?name=<img src=x onerror=alert(document.cookie)>
greeting.innerHTML = `Welcome, ${name}`;

// ✅ Safe: added as text, never read as HTML
greeting.textContent = `Welcome, ${name}`;
```

| Where the data goes | Risk |
|---|---|
| `textContent`, `value`, `setAttribute` on attributes that aren't addresses or events | Safe for text |
| `innerHTML`, `outerHTML`, `insertAdjacentHTML`, `document.write` | **Reads it as HTML** — dangerous with data you don't control |
| `eval`, `new Function`, `setTimeout("text")` | Runs it as code |
| `href` or `src` set from input | `javascript:` addresses run code — only allow `https:` |
| `onclick`-style attributes built from input | Run code |

> 🔍 **Don't mix up:**
> - `<script>` tags added with `innerHTML` **don't run** — but `<img onerror>`, `<svg onload>` and dozens of others do. Blocking the word "script" protects nothing.
> - How you make text safe (called **escaping**) depends on **where it goes**. Between tags, `<` and `&` must be escaped. Inside attributes, quotes too. Addresses, CSS and JavaScript each have their own rules. Server templates, and frameworks like React and Vue, escape text for you. The danger is when you switch that off (`dangerouslySetInnerHTML`, `v-html`, `| safe`).
> - If you really need to accept HTML from users (rich-text comments), **clean it** (sanitise it) with a well-kept library like DOMPurify. The browser's own Sanitizer API (`element.setHTML()`) is on its way but isn't in every browser yet.

**Trusted Types** (a CSP feature: `require-trusted-types-for 'script'`) makes those dangerous spots refuse plain text, so all code must pass through a checked rule. Chrome has had it for a long time; check other browsers before relying on it.

## 3. Content Security Policy (CSP)

A CSP is a list that tells the browser where scripts, styles, pictures, frames and so on may come from. Even if an attacker sneaks in some HTML, the browser won't run what the list doesn't allow.

**Best: send it as a server header.**

```http
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; object-src 'none'; base-uri 'none'; frame-ancestors 'none'; form-action 'self'; upgrade-insecure-requests
```

**Backup, when you can't set headers (some free hosts): a `<meta>` tag, early in `<head>`.**

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data:; object-src 'none'; base-uri 'none'">
```

| Rule (directive) | What it controls |
|---|---|
| `default-src` | The fallback for most kinds of file |
| `script-src`, `style-src`, `img-src`, `font-src`, `connect-src`, `media-src`, `frame-src` | One kind of file each |
| `object-src 'none'` | Blocks plugins (`<object>`, `<embed>`) — always set this |
| `base-uri 'none'` or `'self'` | Stops a sneaked-in `<base>` from changing where your short links go |
| `form-action` | Where forms may send to |
| `frame-ancestors` | Who may put **your** page in a frame (stops clickjacking) |
| `upgrade-insecure-requests` | Changes `http:` file addresses to `https:` |

| Keyword | Means |
|---|---|
| `'self'` | Your own site |
| `'none'` | Nothing at all |
| `https:` | Any HTTPS address (weak) |
| `'nonce-R4nd0m'` | Tags with a matching `nonce="R4nd0m"` — a new random value every time the page is sent |
| `'sha256-…'` | Code inside the page whose fingerprint (hash) matches |
| `'strict-dynamic'` | Scripts loaded by a trusted script are trusted too |
| `'unsafe-inline'`, `'unsafe-eval'` | Switch off the very protection CSP is for — avoid |

```html
<script nonce="R4nd0m">initApp();</script>   <!-- allowed by 'nonce-R4nd0m' -->
<button onclick="pay()">Pay</button>           <!-- blocked: onclick needs 'unsafe-inline' -->
```

> ❗ **Exception — the `<meta>` version is weaker.** These rules are **ignored in a meta tag**: `frame-ancestors`, `report-uri`/`report-to`, and `sandbox`. `Content-Security-Policy-Report-Only` doesn't work in meta either. And a meta policy only covers what comes **after** it. To stop clickjacking you **must** use a header.

> 💡 **Tip:** Start with the `Content-Security-Policy-Report-Only` header. It reports problems but blocks nothing. Once it's quiet, switch to the real one.

## 4. Clickjacking

```http
Content-Security-Policy: frame-ancestors 'none'
X-Frame-Options: DENY
```

`frame-ancestors 'none'` = no one can frame your page. `'self'` = only your own pages can. `X-Frame-Options` is the older header — send both, for older browsers. Neither works from `<meta>`.

## 5. Links, frames and other people's files

| Situation | What to write |
|---|---|
| A link opens a new tab | `target="_blank" rel="noopener"` (modern browsers already add `noopener` for `_blank`; writing it does no harm and makes it clear) |
| Hide which page the visitor came from | `rel="noreferrer"` (this includes `noopener`) or `referrerpolicy="no-referrer"` |
| Links written by users, or paid for | `rel="ugc"`, `rel="sponsored"`, `rel="nofollow"` (these are hints for Google, not security) |
| Showing content you don't trust | `<iframe sandbox>` with as few `allow-*` words as possible. Never `allow-scripts` + `allow-same-origin` on content from your own site (Lesson 7) |
| Features for iframes from other sites | `allow="geolocation 'none'"` and so on (Permissions Policy) |

### Checking a file hasn't changed (Subresource Integrity)

```html
<script src="https://cdn.example.com/lib@3.2.1/lib.min.js"
        integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
        crossorigin="anonymous"></script>
```

The browser works out the downloaded file's fingerprint (hash), and **refuses to run it** if it doesn't match. It needs `crossorigin`, and a CDN that allows CORS. Use an exact version number — a fingerprint for `lib@latest` breaks as soon as a new version comes out.

## 6. Things that must never be in your HTML

| ❌ Don't | Why | ✅ Instead |
|---|---|---|
| Secret API keys in JavaScript or `data-*` | Anyone can View Source | Call your own server, which keeps the key |
| Prices or permissions in `<input type="hidden">` that the server trusts | People can change any field in DevTools | Work it out again on the server |
| Passwords, tokens or personal data in **GET** addresses | They end up in history, server logs, analytics, and the `Referer` sent to other sites | `method="post"`; tokens in `HttpOnly` cookies |
| Tokens in `localStorage` | Any script can read them (XSS) | `HttpOnly; Secure; SameSite` cookies |
| Private notes in HTML comments | Every visitor gets them | Keep them in Git; strip comments when you build |
| Trusting `accept="image/*"` to keep bad files out | `accept` only filters the file picker; anyone can send any file | Check the file's real type and size on the server, give it a new name, and don't serve uploads as pages from your main site |
| `autocomplete="off"` on login fields "for safety" | It breaks password managers, which help people use strong, different passwords | `autocomplete="username"`, `current-password`, `new-password` |

> ❗ **Checks in the browser are for convenience, not safety.** `required`, `pattern`, `maxlength`, `disabled` and hidden fields can all be got round in seconds. The server checks everything, every time (Lesson 11).

## 7. HTTPS and mixed content

- Send every page over HTTPS. Certificates are free from Let's Encrypt, and GitHub Pages, Netlify and Vercel do it for you.
- **Mixed content** means an HTTPS page loading `http://` files. Browsers **block** the dangerous kind (scripts, iframes, stylesheets, fetch). For pictures, audio and video they switch to HTTPS automatically, or block them.
- `Strict-Transport-Security: max-age=31536000; includeSubDomains` (called **HSTS**) tells browsers to only ever use HTTPS for your site.

## 8. Security headers checklist

Set these on your server or host (Lesson 22 shows Netlify and Vercel examples):

| Header | Usual value |
|---|---|
| `Content-Security-Policy` | Your policy, including `frame-ancestors` |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains` |
| `X-Content-Type-Options` | `nosniff` (stops the browser guessing file types) |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` (turn off what you don't use) |
| `X-Frame-Options` | `DENY` (the older clickjacking fix) |

Test yours at [securityheaders.com](https://securityheaders.com) or Mozilla's [HTTP Observatory](https://developer.mozilla.org/en-US/observatory).

---

## Mistakes people make

- `innerHTML` with anything from the address, a form or an API.
- Relying on the `<meta>` CSP to stop clickjacking.
- Adding `'unsafe-inline'` "to make it work".
- An `integrity` hash on a CDN address with no fixed version.
- Secrets in front-end code.
- Trusting hidden fields or disabled inputs.

## Quick quiz

<details>
<summary>1. Why doesn't blocking <code>&lt;script&gt;</code> stop XSS?</summary>

Event attributes (`onerror`, `onload`), `javascript:` addresses and other tricks run code without any script tag.
</details>

<details>
<summary>2. Which CSP rules don't work in a <code>&lt;meta&gt;</code> tag?</summary>

`frame-ancestors`, `report-uri`/`report-to` and `sandbox` (and Report-Only mode).
</details>

<details>
<summary>3. What does <code>integrity</code> protect against, and what else does it need?</summary>

Someone changing a file on another site. It needs `crossorigin`, and CORS headers from the CDN.
</details>

<details>
<summary>4. Where should a login (session) token live?</summary>

In an `HttpOnly`, `Secure`, `SameSite` cookie, which JavaScript can't read.
</details>

## Practice

- 💻 Example: [security.html](examples/security.html)
- ✏️ [Drills for this lesson](../../exercises/drills/19-security.md)
- 🔧 Fix this: [10-security-performance.broken.html](../../exercises/debug/10-security-performance.broken.html)

## Read more

| Where | What you get |
|---|---|
| MDN | [Website security](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) · [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP) · [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) · [Clickjacking](https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/Clickjacking) · [Mixed content](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content) — the main explanation |
| OWASP | [XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) · [CSP Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html) · [HTML5 Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html) — what security professionals use |
| web.dev | [Strict CSP](https://web.dev/articles/strict-csp) — the modern, nonce-based way |

**Back to:** [the easy lesson](README.md) · **Next easy lesson:** [Lesson 20 · Fast pages](../20-performance/README.md)
