# Practice · Lesson 1 · How the web works

📗 [Easy lesson](../../curriculum/01-how-the-web-works/README.md) · 📘 [Full version](../../curriculum/01-how-the-web-works/deep-dive.md)

💡 Try each task **before** opening the answer. If a task uses something new, you'll find it in the full version.

No code yet — these drills check your mental model. Answer in your own words first.

### D1 · Trace a request
List, in order, what happens between typing `https://example.com/about.html` and seeing the page.

<details>
<summary>Answer</summary>

1. Browser parses the URL (scheme `https`, host `example.com`, path `/about.html`).
2. Checks caches; otherwise **DNS** resolves `example.com` to an IP address.
3. Opens a **TCP** connection (or QUIC for HTTP/3) and performs the **TLS** handshake.
4. Sends an **HTTP GET** request for `/about.html`.
5. Server responds with a status (`200 OK`), headers (`Content-Type: text/html`), and the HTML body.
6. Browser parses HTML into the DOM, discovers CSS/JS/images and requests them.
7. Builds the render tree, lays out, paints.
</details>

### D2 · Name the part
For `https://shop.example.com:8443/products/shoes.html?size=42#reviews` name each part.

<details>
<summary>Answer</summary>

| Part | Value |
|---|---|
| Scheme | `https` |
| Host (subdomain + domain) | `shop.example.com` |
| Port | `8443` (default for HTTPS is 443) |
| Path | `/products/shoes.html` |
| Query | `?size=42` |
| Fragment | `#reviews` — never sent to the server |
</details>

### D3 · Status codes
What do `200`, `301`, `304`, `403`, `404`, `500` mean?

<details>
<summary>Answer</summary>

`200` OK · `301` moved permanently (redirect) · `304` not modified (use your cached copy) · `403` forbidden · `404` not found · `500` server error. First digit: 2 success, 3 redirect, 4 client error, 5 server error.
</details>

### D4 · Who does what?
Match: HTML, CSS, JavaScript, the server, DNS, the browser.

<details>
<summary>Answer</summary>

- **HTML** — structure and meaning of content.
- **CSS** — presentation.
- **JavaScript** — behaviour.
- **Server** — stores files / generates responses.
- **DNS** — turns domain names into IP addresses.
- **Browser** — requests, parses, renders, runs scripts; builds the accessibility tree.
</details>

### D5 · Domain vs hosting
A friend says, "I bought the domain, so my website is online now." What's missing?

<details>
<summary>Answer</summary>

Hosting: a server (or static host) holding the files, plus DNS records pointing the domain at it. A domain is only a name.
</details>

### D6 · HTML is not a programming language
Why not? What kind of language is it?

<details>
<summary>Answer</summary>

It's a **markup language**: it annotates content with meaning and structure. It has no variables, logic, or loops — it describes, it doesn't compute.
</details>

### D7 · HTTP vs HTTPS
What does the S add, and name two features that only work on HTTPS.

<details>
<summary>Answer</summary>

Encryption and integrity via TLS (plus server authentication). Only on secure contexts: Geolocation, Service Workers, camera/microphone, Clipboard API, HTTP/2 in browsers.
</details>

### D8 · Where's the fragment?
Why can't a server log show which `#section` a visitor jumped to?

<details>
<summary>Answer</summary>

Browsers don't send the fragment in the HTTP request; it's handled entirely client-side.
</details>
