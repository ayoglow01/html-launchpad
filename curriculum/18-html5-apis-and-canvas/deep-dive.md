# Lesson 18 · Drawing, saving and location — the full version

📘 **This is the full version.** New to this? Read the [easy lesson](README.md) first, then come back for the details.

⏱ 4 hours · 🚀 Pro · 🧰 You need: Lessons 1–17, and a little JavaScript

"HTML5" was never just tags. The same wave of changes gave browsers JavaScript tools (called **APIs**) for drawing, saving data, finding your location, drag and drop, working offline, doing heavy work in the background, and more. This lesson is a map: what exists, what each one needs from your HTML, and where the traps are. Each section links to MDN for the full story.

## By the end you can

- Draw on `<canvas>` properly — size, backup content and accessibility.
- Save data in the browser with Web Storage, and know its limits.
- Use location, drag and drop, history and file tools, with the HTML they need.
- Explain secure pages (secure contexts) and permissions.
- Say what Web Workers, Service Workers, IndexedDB and live-update tools are for.

---

## 1. Secure pages and permissions

Many powerful tools only work on a **secure page** (a **secure context**): a page sent over **HTTPS**, or from `http://localhost` / `127.0.0.1` while you're building.

| Needs a secure page (examples) | Also asks the visitor's permission |
|---|---|
| Location, Service Workers, the newer clipboard tools, camera and mic (`getUserMedia`), notifications, Web Share, Web Crypto `subtle` | Location, camera and mic, notifications, (some) clipboard |

> ⚠️ **Exception:** A page you double-click (`file://`) is **not** reliably treated as secure, and module scripts, `fetch` and service workers fail there. Use a local server (VS Code Live Server, `npx serve`). Only ask for permission after the visitor does something (a "Find stores near me" button). Never ask the moment the page opens — people say no without thinking.

Iframes from other sites must be given permission clearly: `<iframe src="…" allow="geolocation; camera">` (this is the Permissions Policy, Lesson 7).

## 2. `<canvas>` — drawing with code

```html
<canvas id="chart" width="320" height="200">
  <p>Sales rose from ₦2m in January to ₦5m in March.</p>  <!-- backup content -->
</canvas>

<script type="module">
  const canvas = document.querySelector("#chart");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#e44d26";
  ctx.fillRect(20, 120, 60, 60);       // x, y, width, height
  ctx.font = "16px system-ui";
  ctx.fillText("Jan", 30, 196);
</script>
```

| Fact | Detail |
|---|---|
| Size if you don't set one | 300×150 |
| Positions | (0,0) is the top-left corner. y gets bigger as you go **down** |
| Drawing modes (contexts) | `"2d"`, `"webgl"`, `"webgl2"`, `"webgpu"`, `"bitmaprenderer"` |
| Saving the picture | `canvas.toDataURL("image/png")`, `canvas.toBlob(cb)` |
| Backup content | Only shows when canvas isn't supported (or JavaScript is off) |

> 🔍 **Don't mix up — `width`/`height` attributes and CSS size.** The attributes set **how many pixels you draw on**. CSS sets **how big it looks**. `<canvas width="300" height="150" style="width: 600px">` stretches 300 pixels across 600 — blurry. For sharp drawings on high-quality screens, multiply the pixel size by `devicePixelRatio` and scale the drawing to match.

> ❗ **Exceptions:**
> - **To a screen reader, a canvas is one picture.** Shapes, text and buttons you draw are just pixels: no meaning, no focus, can't be selected or searched. Give a text version — backup content, a data table next to it, or `role="img"` with `aria-label` for simple pictures. Never draw your buttons and controls on canvas.
> - **A "tainted" canvas.** If you draw a picture from another site without that site's permission (CORS), the canvas is marked as tainted. Then `toDataURL` and `getImageData` throw a security error. Load those pictures with `crossorigin="anonymous"`, from servers that send CORS headers.

### Canvas or SVG?

| | Canvas | SVG (Lesson 6) |
|---|---|---|
| How it works | Pixels — drawn, then forgotten | Real shapes that stay on the page as elements |
| When enlarged | Goes blocky | Sharp at any size |
| Accessibility | You must add it separately | `<title>`, real text, can be focused |
| Clicks | On the whole canvas; you work out what was hit yourself | On each shape |
| Best for | Games, photo editing, thousands of moving things, pixel effects | Icons, logos, charts, diagrams, interactive graphics with fewer parts |

## 3. Saving data: `localStorage` and `sessionStorage`

```js
localStorage.setItem("theme", "dark");
localStorage.getItem("theme");           // "dark"
localStorage.removeItem("theme");

// Objects must be turned into text first
localStorage.setItem("cart", JSON.stringify([{ id: 1, qty: 2 }]));
const cart = JSON.parse(localStorage.getItem("cart") ?? "[]");
```

| | `localStorage` | `sessionStorage` | Cookies |
|---|---|---|---|
| How long it lasts | Until someone clears it | Until the tab closes | Set by `Expires` or `Max-Age` |
| Who can see it | The same site (origin) | The same site **and** the same tab | Set by domain and path |
| Sent to the server? | No | No | **Yes, with every request** |
| How much | About 5 MB per site (varies) | About 5 MB | About 4 KB per cookie |
| How you use it | Instant (synchronous) | Instant (synchronous) | The `document.cookie` string, or the Cookie Store API |

> ❗ **Careful:**
> - Values are **always text**. `setItem("n", 5)` saves `"5"`. `setItem("o", {})` saves `"[object Object]"`.
> - **Never save login tokens, passwords or personal data** here. Any script on the page can read it — even one an attacker sneaked in (XSS, Lesson 19). Logins belong in cookies marked `HttpOnly`, `Secure` and `SameSite`, which JavaScript can't read.
> - It's instant, so it can stop the page, and it can throw an error (full up, or switched off in some private modes). Wrap saves in `try…catch`.

For bigger or more complex data, use **IndexedDB** (a database in the browser: works in the background, saves objects and files).

## 4. Location (Geolocation)

```html
<button type="button" id="locate">Find stores near me</button>
<p role="status" id="where"></p>

<script type="module">
  document.querySelector("#locate").addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => { where.textContent = `${pos.coords.latitude}, ${pos.coords.longitude} (±${pos.coords.accuracy} m)`; },
      (err) => { where.textContent = `Couldn't get location: ${err.message}`; },
      { enableHighAccuracy: false, timeout: 10000 }
    );
  });
</script>
```

Needs a secure page and permission. Always handle the error (said no, not available, took too long), and offer another way (a city `<select>` or a postcode box).

## 5. Drag and drop

```html
<ul>
  <li draggable="true" id="task-1">Write lesson</li>
</ul>
<div id="done" class="dropzone">Drop here</div>
```

The events: `dragstart` (save data with `event.dataTransfer.setData`), `dragover` (you **must call `preventDefault()`** here, or dropping isn't allowed), `drop` (read the data), `dragend`.

> ⚠️ **Exception:** HTML drag and drop doesn't work with **touch** on many phone browsers, and it has **no keyboard support**. Always give another way to do the same thing — "Move to done" buttons, or a `<select>`. But dragging files from your computer onto a drop zone works well (put a normal `<input type="file">` next to it).

## 6. Files

```html
<input type="file" id="photo" accept="image/*">
<img id="preview" alt="Preview of the selected photo" hidden>

<script type="module">
  photo.addEventListener("change", () => {
    const file = photo.files[0];
    if (!file) return;
    preview.src = URL.createObjectURL(file);   // a local preview — nothing is uploaded
    preview.hidden = false;
  });
</script>
```

Each `File` tells you its `name`, `size`, `type` and `lastModified`. Read what's inside with `file.text()`, `file.arrayBuffer()` or `FileReader`. When you're done with a preview address, free it with `URL.revokeObjectURL()`.

## 7. History

```js
history.pushState({ page: 2 }, "", "?page=2");   // changes the address without reloading
window.addEventListener("popstate", (e) => render(e.state));
```

This is how single-page apps change pages. Any address you push must be one your **server** can also answer, in case someone refreshes or shares it. Newer: the **Navigation API** (`navigation.navigate`, the `navigate` event). Chrome has had it for a long time; other browsers only added it recently. Check MDN before relying on it.

## 8. Background work, offline and live updates

| Tool | What it does | How it connects to your HTML |
|---|---|---|
| **Web Workers** | Runs JavaScript in the background (`new Worker("worker.js")`). Can't touch the page. Talks with `postMessage` | Stops heavy work freezing the page (helps INP, Lesson 20) |
| **Service Workers** | A script that sits between your page and the internet: offline pages, saved files (Cache API), push messages | Started from a page. With the manifest (Lesson 13), it's the heart of installable web apps (PWAs) |
| **IndexedDB** | A database in the browser | Data for offline use |
| **Fetch** | Asks a server for data from JavaScript | Replaces the old XMLHttpRequest |
| **WebSocket** | A live two-way connection | Chat, live updates |
| **Server-Sent Events** (`EventSource`) | A one-way stream from server to browser | Live scores, notifications |
| **Intersection Observer** | Tells you when an element scrolls into view | Effects as you scroll (for pictures and iframes, `loading="lazy"` already does the job) |
| **Clipboard**, **Web Share**, **Notifications**, **Page Visibility**, **Fullscreen**, **getUserMedia** | What the names say | Start them from something the visitor does |

> 📝 **Gone:** The old HTML5 Application Cache (`<html manifest="…">`) was removed from browsers. Service Workers replaced it. Don't confuse it with the web app manifest (`<link rel="manifest">`), which is still current.

---

## Mistakes people make

- Sizing a canvas with CSS only, so drawings come out blurry.
- Charts drawn on canvas with no text version.
- Saving login tokens (JWTs) in `localStorage`.
- Forgetting `preventDefault()` in `dragover`.
- Things you can only do by dragging.
- Asking for location as soon as the page opens.
- Testing these tools by double-clicking the file (`file://`).

## Quick quiz

<details>
<summary>1. <code>localStorage.setItem("prefs", {dark: true})</code>. What gets saved?</summary>

The text `"[object Object]"`. Use `JSON.stringify` first.
</details>

<details>
<summary>2. Why can't screen readers use a canvas chart unless you add something?</summary>

It's just pixels. A screen reader sees one picture, with no text, no structure and nothing to focus.
</details>

<details>
<summary>3. Why does <code>getCurrentPosition</code> fail on your test site that uses plain HTTP?</summary>

Location only works on secure pages (HTTPS or localhost).
</details>

<details>
<summary>4. Drop events never happen. What's missing?</summary>

`event.preventDefault()` in the `dragover` handler.
</details>

## Practice

- 💻 Example: [apis.html](examples/apis.html)
- ✏️ [Drills for this lesson](../../exercises/drills/18-html5-apis-and-canvas.md)
- 🏗️ Project: [P5 · Interactive docs hub](../../projects/05-interactive-docs-hub/README.md)

## Read more

| Where | What you get |
|---|---|
| MDN | [Web APIs index](https://developer.mozilla.org/en-US/docs/Web/API) · [Canvas tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial) · [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) · [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) · [HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API) — the main explanation |
| W3Schools | [HTML Canvas](https://www.w3schools.com/html/html5_canvas.asp) · [Web Storage](https://www.w3schools.com/html/html5_webstorage.asp) · [Geolocation](https://www.w3schools.com/html/html5_geolocation.asp) · [Drag/Drop](https://www.w3schools.com/html/html5_draganddrop.asp) · [Web Workers](https://www.w3schools.com/html/html5_webworkers.asp) · [SSE](https://www.w3schools.com/html/html5_serversentevents.asp) — a short demo you can run for each one |
| The Odin Project | [DOM Manipulation and Events](https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events) — the JavaScript basics these tools build on |

**Back to:** [the easy lesson](README.md) · **Next easy lesson:** [Lesson 19 · Staying safe](../19-security/README.md)
