# Lesson 10 · Forms — the full version

📘 **This is the full version.** New to this? Read the [easy lesson](README.md) first, then come back for the details.

⏱ 4–5 hours · 🔨 Builder · 🧰 You need: Lessons 1–9

Forms are where people give you information. They're also where most real-world bugs happen — both "the data went missing" bugs and "I can't use this" bugs. The good news: HTML forms work **without JavaScript**. They collect answers, check them, and send them to a server all by themselves.

## By the end you can

- Build a form that sends the right data, the right way.
- Say exactly which fields get sent, and how.
- Give every field a proper label.
- Stop mixing up `name`, `id` and `value` for good.
- Use `select`, `textarea`, `datalist`, `fieldset` and every kind of button correctly.

---

## 1. The `<form>` tag

```html
<form action="/register" method="post">
  <label for="email">Email address</label>
  <input id="email" name="email" type="email" autocomplete="email" required>
  <button type="submit">Create account</button>
</form>
```

| Attribute | What it does | If you leave it out |
|---|---|---|
| `action` | The address that receives the answers | The current page |
| `method` | `get`, `post` or `dialog` | `get` |
| `enctype` | How answers are packed when using `post`: `application/x-www-form-urlencoded`, `multipart/form-data` or `text/plain` | `application/x-www-form-urlencoded` |
| `target` | Where to show the reply (`_self`, `_blank`, an iframe's name) | `_self` |
| `novalidate` | Don't check the answers before sending (on/off) | Off |
| `autocomplete` | `on`/`off` for every field at once | `on` |
| `name` | The form's name, for JavaScript (`document.forms`) | — |
| `accept-charset` | Which letter encoding to send | The page's own (UTF-8) |

## 2. GET, POST or dialog?

| | `GET` | `POST` | `dialog` |
|---|---|---|---|
| Where the answers go | In the **address**: `/search?q=html&page=2` | Hidden **inside the request** | Nowhere — it closes the `<dialog>` it's in |
| Can you bookmark or share it? | Yes | No | — |
| Saved in browser history and server logs? | **Yes** | No (it's not in the address) | — |
| Size limit | Addresses can only be so long | Much bigger | — |
| Use it for | Search, filters, sorting — **just looking things up** | Creating or changing things, logging in, uploading | Closing a pop-up box with an answer (Lesson 15) |

> ❗ **Don't mix up — POST isn't "secure".** POST only keeps the answers out of the address bar. Scrambling the data comes from **HTTPS**. Trust comes from **the server checking everything**. Never send passwords with GET — they'd end up in browser history and server logs.

## 3. What actually gets sent

When a form is sent, the browser collects `name=value` pairs. A field is only included if:

| Situation | Sent? |
|---|---|
| It has a `name` | Required — **no `name`, no data** |
| It's `disabled` (or inside a disabled `<fieldset>`) | ❌ Not sent |
| It's `readonly` | ✅ Sent |
| A checkbox or radio that's **not ticked** | ❌ Not sent at all (not even as "off") |
| A ticked checkbox with no `value` | ✅ Sent as `on` |
| A `<select>` | ✅ The chosen option's `value` (or its text, if it has no `value`) |
| The submit button that was clicked | ✅ Its `name=value`, if it has a name |
| A file picker (`type="file"`) | ✅ The file — but only with `method="post"` and `enctype="multipart/form-data"` |

What the server receives looks like this:

```
email=ada%40example.com&plan=pro&newsletter=yes
```

> ⚠️ **Exception — unticked checkboxes disappear.** The server must treat "this field is missing" as "not ticked". Don't expect to receive `newsletter=no`.

> ⚠️ **Exception — file uploads.** With `GET`, or with `POST` but the normal `enctype`, only the **file name** is sent, not the file. File pickers need `method="post" enctype="multipart/form-data"`.

## 4. Labels

Every field needs a **label**: words that say what it's for. The label is the field's name for screen readers. Clicking it also puts the cursor in the field (or ticks the box) — a bigger target for everyone.

```html
<!-- Way 1: "for" matches the field's id -->
<label for="full-name">Full name</label>
<input id="full-name" name="fullName" type="text" autocomplete="name">

<!-- Way 2: the field sits inside the label -->
<label>
  <input type="checkbox" name="terms" value="accepted" required>
  I agree to the terms
</label>
```

| | Way 1 (`for` + `id`) | Way 2 (wrapping) |
|---|---|---|
| Works with all screen readers and voice control | Yes — the most reliable | Almost always, but some older voice-control software struggles |
| Layout | The label and field can be anywhere | The field must sit inside |
| Which to use | Your default | Fine for checkboxes and radios. Using both together is also fine |

> ❗ **A `placeholder` is not a label.** It vanishes as soon as you type, is usually pale and hard to read, and isn't always read out. Only use it for a short example of the format — *as well as* a real `<label>`.

> ⚠️ **Exception:** Sometimes a field has no visible label for a good reason — like a search box right next to a "Search" button. Then give it a name with `aria-label` or a hidden `<label>`. Never leave it with no name at all.

## 5. `name`, `id` and `value`

```html
<input id="plan-pro" name="plan" type="radio" value="pro">
<label for="plan-pro">Pro plan</label>
```

| Attribute | Who uses it | Must be unique? | Its job |
|---|---|---|---|
| `id` | The page: `<label for>`, jump links, CSS, JavaScript | **Yes**, on the whole page | Picks out **one element** |
| `name` | **Sending the form**; also groups radio buttons | No (radios share one) | The **label** in `label=answer` |
| `value` | Sending the form | — | The **answer** that's sent. For text boxes, it's the text in the box |

The server gets `plan=pro`. The `id` is never sent.

## 6. `<input>` in short

`<input>` never closes. What it does depends on its `type` (`text` if you don't say). All 22 types, and how answers are checked, are in [Lesson 11](../11-input-types-and-validation/deep-dive.md).

## 7. `<textarea>`

```html
<label for="message">Message</label>
<textarea id="message" name="message" rows="6" maxlength="1000"></textarea>
```

- A box for several lines of text. `rows` and `cols` set its starting size.
- **No `value` attribute.** Any starting text goes **between the tags**.
- Spaces inside are kept. So if you write `<textarea>`, a new line, then `</textarea>`, the box starts with a new line and spaces in it. Put the closing tag straight after the opening one.
- `wrap="hard"` adds real line breaks to the text that's sent (it needs `cols`). The normal setting, `soft`, doesn't.

## 8. Drop-downs: `<select>`, `<option>`, `<optgroup>`

```html
<label for="course">Course</label>
<select id="course" name="course" required>
  <option value="">Choose a course</option>
  <optgroup label="Frontend">
    <option value="html">HTML</option>
    <option value="css">CSS</option>
  </optgroup>
  <optgroup label="Backend">
    <option value="node">Node.js</option>
    <option value="python" disabled>Python (full)</option>
  </optgroup>
</select>
```

| Feature | Notes |
|---|---|
| `value` on `<option>` | What gets sent. Without it, the option's text is sent. |
| `selected` | Chosen to start with |
| `disabled` | Greys out one option, or a whole `<optgroup>` |
| `multiple` | Lets people choose several (Ctrl/Cmd + click). Most people find this hard — checkboxes are often better |
| `size` | How many rows show at once (turns it into a list box) |
| `required` | The person must choose an option that has a non-empty value |

> ⚠️ **Exception — `required` on `<select>`:** It only works if the **first option has an empty `value`** (`value=""`). Otherwise the first option counts as a real answer, and the field is always "filled in".

> 📝 **Styleable drop-downs** (`appearance: base-select` in CSS, with a `<button>` and `<selectedcontent>` inside the `<select>`) are arriving in Chrome-type browsers, but not in every browser yet. Learn the normal `<select>` first. Browsers that can't do the new version just show the normal one.

## 9. `<datalist>`: suggestions, not a fixed list

```html
<label for="city">City</label>
<input id="city" name="city" list="cities">
<datalist id="cities">
  <option value="Lagos"></option>
  <option value="Abuja"></option>
  <option value="Port Harcourt"></option>
</datalist>
```

People can pick a suggestion **or type anything they like**. If only the listed answers are allowed, use `<select>`.

> ⚠️ **Exception:** How `<datalist>` looks, and how well screen readers handle it, differs a lot between browsers. Treat it as a bonus. The field must still work as a normal text box.

## 10. Buttons

```html
<button type="submit">Send</button>        <!-- sends the form -->
<button type="reset">Clear form</button>   <!-- puts every field back how it started -->
<button type="button">Show preview</button><!-- does nothing by itself; for JavaScript -->
```

| Type | What it does |
|---|---|
| `submit` | Sends the form. **This is what you get if you forget `type`** |
| `reset` | Puts every field back how it started |
| `button` | Nothing, until JavaScript gives it a job |

> ❗ **A `<button>` with no `type` sends the form.** Inside a form, a "Show password" or "Add item" button without `type` will send the form when clicked. Always write `type`.

> ❗ Reset buttons are almost always a bad idea. One wrong click wipes everything the person typed. Only use one if clearing the form is something people really need to do often.

### `<button>` or `<input type="submit">`?

| | `<button>` | `<input type="submit" value="Send">` |
|---|---|---|
| What can go inside | Text, icons, `<span>`s | Only plain text, in `value` |
| Styling | Easier | Limited |
| Use | Your default | Old style. It works, but it's limited |

### One form, different buttons

A submit button can change the form's settings just for itself. Handy for "Save draft" next to "Publish":

```html
<button type="submit" formaction="/drafts" formnovalidate>Save draft</button>
<button type="submit">Publish</button>
```

The attributes are `formaction`, `formmethod`, `formenctype`, `formnovalidate` and `formtarget`.

> 📝 **Pressing Enter:** in a one-line text box, Enter sends the form using its **first** submit button.

## 11. Grouping: `<fieldset>` and `<legend>`

```html
<fieldset>
  <legend>Delivery method</legend>
  <label><input type="radio" name="delivery" value="pickup" checked> Pick up</label>
  <label><input type="radio" name="delivery" value="courier"> Courier</label>
</fieldset>
```

- `<fieldset>` groups fields that belong together. The `<legend>` (must come **first**) is the group's title. A screen reader says it when you enter the group: "Delivery method, group. Pick up, radio button, 1 of 2."
- **Always use it for groups of radio buttons or checkboxes.** Also for parts of a form, like "Billing address".
- `<fieldset disabled>` switches off every field inside.

## 12. The `form` attribute

A field can belong to a form even when it isn't inside it:

```html
<form id="newsletter" action="/subscribe" method="post"></form>
…
<input type="email" name="email" form="newsletter" aria-label="Email for newsletter">
<button type="submit" form="newsletter">Subscribe</button>
```

Useful when the page layout puts fields far apart. You can't put a form inside a form, so this is the way round it.

## 13. A complete, correct form

```html
<form action="/contact" method="post">
  <fieldset>
    <legend>Your details</legend>

    <div>
      <label for="name">Full name</label>
      <input id="name" name="name" type="text" autocomplete="name" required>
    </div>

    <div>
      <label for="email">Email address</label>
      <input id="email" name="email" type="email" autocomplete="email" required>
    </div>
  </fieldset>

  <div>
    <label for="topic">Topic</label>
    <select id="topic" name="topic" required>
      <option value="">Choose a topic</option>
      <option value="sales">Sales</option>
      <option value="support">Support</option>
    </select>
  </div>

  <div>
    <label for="msg">Message</label>
    <textarea id="msg" name="message" rows="5" required></textarea>
  </div>

  <button type="submit">Send message</button>
</form>
```

Try a version that shows exactly what gets sent: [examples/form-basics.html](examples/form-basics.html)

---

## Mistakes people make

- Fields with no `name` — the data quietly goes missing.
- A `placeholder` as the only label.
- `for` that doesn't match any `id` (or matches the `name` by mistake).
- A `<button>` with no `type` inside a form.
- A file picker without `enctype="multipart/form-data"`.
- Radio buttons with different `name`s (they stop working as a group).
- `<select required>` where the first option has a real value.
- A form inside a form (not allowed — the browser ignores the inner one).

## Quick quiz

<details>
<summary>1. A form has a disabled field and a readonly field. Which get sent?</summary>

Only the readonly one.
</details>

<details>
<summary>2. The server never gets "newsletter=no" when the box is unticked. Is that a bug?</summary>

No. Unticked checkboxes are never sent. The server should treat a missing field as "not ticked".
</details>

<details>
<summary>3. What does <code>&lt;input type="radio" id="m" name="size" value="M" checked&gt;</code> send?</summary>

`size=M`. The `id` isn't sent.
</details>

<details>
<summary>4. Which method for a product search page, and why?</summary>

`GET`. It only looks things up, and people can bookmark or share the results address.
</details>

<details>
<summary>5. An "Add another phone number" button keeps sending the form. How do you fix it?</summary>

Add `type="button"`. Buttons send the form unless you say otherwise.
</details>

## Practice

- 💻 Example: [form-basics.html](examples/form-basics.html)
- ✏️ [Drills for this lesson](../../exercises/drills/10-forms-fundamentals.md)
- 🔧 Fix this: [07-forms.broken.html](../../exercises/debug/07-forms.broken.html)

## Read more

| Where | What you get |
|---|---|
| MDN | [Forms and buttons in HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_forms) · [Web forms module](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms) — the most complete forms course there is |
| MDN | [How to structure a web form](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form) · [Sending and retrieving form data](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) — structure and sending, in depth |
| The Odin Project | [Form Basics](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-form-basics) — clear, with a project |
| freeCodeCamp | [Build a Survey Form](https://www.freecodecamp.org/learn/responsive-web-design-v9/lab-survey-form/build-a-survey-form) — the best practice project for this lesson |
| W3Schools | [Forms](https://www.w3schools.com/html/html_forms.asp) · [Form attributes](https://www.w3schools.com/html/html_forms_attributes.asp) · [Form elements](https://www.w3schools.com/html/html_form_elements.asp) — quick look-ups |

**Back to:** [the easy lesson](README.md) · **Next easy lesson:** [Lesson 11 · Input types and checking answers](../11-input-types-and-validation/README.md)
