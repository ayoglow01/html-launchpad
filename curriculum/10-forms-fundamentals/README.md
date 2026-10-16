# Lesson 10 · Forms

⏱ 45 minutes · 🧰 You need: Lesson 9

## In one sentence

Forms let people **type and send** information — sign up, log in, search, order.

## The smallest useful form

```html
<form action="/subscribe" method="post">
  <label for="email">Your email</label>
  <input type="email" id="email" name="email" required>

  <button type="submit">Subscribe</button>
</form>
```

Four parts:
1. `<form>` — wraps everything. `action` = where to send. `method` = how (more below).
2. `<label>` — the words that say what to type.
3. `<input>` — the box people type in.
4. `<button>` — sends the form.

## The three must-haves on every box

```html
<label for="email">Your email</label>
<input type="email" id="email" name="email">
```

- **`id`** + **`for`** — must match. They connect the label to the box. Now clicking the label puts the cursor in the box, and screen readers read the label.
- **`name`** — the label the **server** sees. **No `name` = the answer is not sent.**

Think of it like this: `id` is for the page, `name` is for the server.

## ⚠️ Placeholder is not a label

```html
❌ <input type="text" placeholder="Full name">
✅ <label for="name">Full name</label>
   <input type="text" id="name" name="name">
```

The placeholder disappears when you start typing. Then you forget what the box was for.

## More kinds of fields

**Bigger text box:**
```html
<label for="msg">Message</label>
<textarea id="msg" name="message" rows="5"></textarea>
```

**Drop-down menu:**
```html
<label for="state">State</label>
<select id="state" name="state">
  <option value="">Choose a state</option>
  <option value="lagos">Lagos</option>
  <option value="kano">Kano</option>
</select>
```

**Pick one (radio buttons)** — same `name` = one group:
```html
<fieldset>
  <legend>Size</legend>
  <label><input type="radio" name="size" value="small"> Small</label>
  <label><input type="radio" name="size" value="large"> Large</label>
</fieldset>
```

**Pick many (checkboxes):**
```html
<label><input type="checkbox" name="news" value="yes"> Send me news</label>
```

`<fieldset>` groups related boxes. `<legend>` is the group's question.

## Buttons

```html
<button type="submit">Send</button>     <!-- sends the form -->
<button type="button">Show tips</button> <!-- does nothing by itself (for JavaScript) -->
```

⚠️ A `<button>` inside a form **sends the form** unless you say `type="button"`. Always write the type.

## GET or POST?

- `method="get"` — answers appear in the address bar. Good for **search**.
- `method="post"` — answers are hidden from the address bar. Use for **passwords, sign-ups, anything private**.

## What gets sent?

- ✅ Boxes with a `name`
- ❌ Boxes **without** a `name`
- ❌ Boxes that are `disabled`
- ❌ Checkboxes that aren't ticked

## ✅ Remember

- Every box: a `<label>` with `for`, and the box with matching `id` + a `name`.
- Placeholder ≠ label.
- Same `name` on radio buttons.
- Always write `type` on buttons.
- Private info → `post`.

## 🎯 Try it

Build a contact form with: name, email, a drop-down "Reason for contact", a message box, and a Send button.

<details>
<summary>Check: the form sends everything except the phone number. Why?</summary>

The phone `<input>` is probably missing a `name` attribute (or it's `disabled`).
</details>

## Want more?

- 📖 The detailed version: [deep-dive.md](deep-dive.md)
- 💻 Example: [form-basics.html](examples/form-basics.html) — try submitting and look at the address bar
- 🌐 The Odin Project: [Form basics](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-form-basics)
- ✏️ Practice: [drills](../../exercises/drills/10-forms-fundamentals.md) · [fix a broken form](../../exercises/debug/07-forms.broken.html)

➡️ **Next:** [Lesson 11 · Input types and checking answers](../11-input-types-and-validation/README.md)
