# Lesson 18 · Drawing, saving and location

⏱ 40 minutes · 🧰 You need: Lesson 17 and a little JavaScript

## In one sentence

Browsers come with built-in tools (called **APIs**) that let your page **draw**, **remember things**, **find your location**, and more.

## 1. Draw with `<canvas>` 🎨

```html
<canvas id="art" width="300" height="150">
  A red square.   <!-- shown if canvas can't work -->
</canvas>

<script>
  const pen = document.getElementById("art").getContext("2d");
  pen.fillStyle = "red";
  pen.fillRect(20, 20, 100, 100);   // x, y, width, height
</script>
```

Canvas is a blank drawing board. Used for games, charts, and photo editors.

⚠️ To a blind user, a canvas is just **one picture**. Always give a text version too (the text inside the tag, or a table next to a chart).

## 2. Remember things: `localStorage` 💾

```js
localStorage.setItem("name", "Ada");     // save
localStorage.getItem("name");            // "Ada" — still there after closing the browser
localStorage.removeItem("name");         // delete
```

- It only stores **text**. For lists or objects use `JSON.stringify()` to save and `JSON.parse()` to read.
- `sessionStorage` is the same, but forgets when the tab closes.

⚠️ **Never save passwords or secret codes** here. Any script on the page can read it.

## 3. Find location 📍

```js
navigator.geolocation.getCurrentPosition(
  (pos) => console.log(pos.coords.latitude, pos.coords.longitude),
  (err) => console.log("Couldn't get location")
);
```

- The browser **asks the user** first.
- Only works on **https://** sites (or on your own computer while testing).
- Ask only after the user clicks a button like "Find stores near me".

## 4. Drag and drop ✋

```html
<p draggable="true">Drag me</p>
```

Then JavaScript handles the drop. ⚠️ Dragging doesn't work with a keyboard or on many phones, so always add buttons too ("Move to Done").

## More tools (just so you know they exist)

- **File API** — preview a photo before uploading.
- **Fetch** — get data from a server without reloading.
- **Web Workers** — do heavy work without freezing the page.
- **Service Workers** — make a site work offline.
- **Notifications**, **Clipboard** (copy/paste), **camera and microphone**.

## ✅ Remember

- `<canvas>` draws; always give a text alternative.
- `localStorage` remembers text; never secrets.
- Location needs permission and https.
- Always give a non-drag way to do things.

## 🎯 Try it

Make a text box that remembers what you typed even after refreshing the page.

<details>
<summary>Hint</summary>

On `input`, save `box.value` with `localStorage.setItem`. When the page loads, set `box.value = localStorage.getItem(...) ?? ""`.
</details>

## Want more?

- 📖 The detailed version: [deep-dive.md](deep-dive.md)
- 💻 Example: [apis.html](examples/apis.html)
- 🌐 W3Schools: [HTML Canvas](https://www.w3schools.com/html/html5_canvas.asp)
- ✏️ Practice: [drills](../../exercises/drills/18-html5-apis-and-canvas.md)
- 🏗️ **Project time!** [P5 · Interactive docs hub](../../projects/05-interactive-docs-hub/README.md)

➡️ **Next:** [Lesson 19 · Staying safe](../19-security/README.md)
