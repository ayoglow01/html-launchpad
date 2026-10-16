# Practice · Lesson 19 · Staying safe

📗 [Easy lesson](../../curriculum/19-security/README.md) · 📘 [Full version](../../curriculum/19-security/deep-dive.md)

💡 Try each task **before** opening the answer. If a task uses something new, you'll find it in the full version.

### D1 · Spot the XSS
`results.innerHTML = "You searched for " + params.get("q");` Fix it.

<details>
<summary>Answer</summary>

`results.textContent = "You searched for " + params.get("q");`
</details>

### D2 · Starter CSP
Write a meta CSP allowing only same-origin scripts, styles, images (plus `data:` images), no plugins, no `<base>` changes.

<details>
<summary>Answer</summary>

`<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data:; object-src 'none'; base-uri 'none'">`
</details>

### D3 · Clickjacking
Why can't the policy in D2 stop clickjacking? What can?

<details>
<summary>Answer</summary>

`frame-ancestors` is ignored in meta CSP. Use the header `Content-Security-Policy: frame-ancestors 'none'` (and `X-Frame-Options: DENY`).
</details>

### D4 · SRI
Add integrity to a CDN script. What else is required?

<details>
<summary>Answer</summary>

`integrity="sha384-…"` plus `crossorigin="anonymous"`, a pinned version, and CORS headers from the CDN.
</details>

### D5 · Hidden field
`<input type="hidden" name="price" value="5000">` — server charges whatever arrives. Problem?

<details>
<summary>Answer</summary>

Users can change it in DevTools. The server must look up the price itself.
</details>

### D6 · GET leak
Why is `<form method="get">` wrong for login?

<details>
<summary>Answer</summary>

Credentials appear in the URL: history, server logs, analytics, Referer headers.
</details>

### D7 · javascript: URLs
A profile lets users set a website link. What must you validate?

<details>
<summary>Answer</summary>

The scheme — allow only `https:` (and maybe `http:`); reject `javascript:`, `data:`, etc.
</details>

### D8 · Password managers
Someone adds `autocomplete="off"` to the password field "for security". Better?

<details>
<summary>Answer</summary>

`autocomplete="current-password"` (login) or `new-password` (sign-up). Password managers improve security.
</details>
