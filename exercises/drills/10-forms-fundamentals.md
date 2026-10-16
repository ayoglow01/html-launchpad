# Practice · Lesson 10 · Forms

📗 [Easy lesson](../../curriculum/10-forms-fundamentals/README.md) · 📘 [Full version](../../curriculum/10-forms-fundamentals/deep-dive.md)

💡 Try each task **before** opening the answer. If a task uses something new, you'll find it in the full version.

### D1 · Labelled field
A required "Full name" text field, submitted as `fullname`.

<details>
<summary>Answer</summary>

```html
<label for="fullname">Full name</label>
<input type="text" id="fullname" name="fullname" autocomplete="name" required>
```
`for` matches `id`; `name` is the key sent to the server.
</details>

### D2 · What gets submitted?
```html
<form action="/s" method="get">
  <input type="text" name="a" value="1">
  <input type="text" value="2">
  <input type="text" name="c" value="3" disabled>
  <input type="text" name="d" value="4" readonly>
  <input type="checkbox" name="e">
  <input type="checkbox" name="f" checked>
  <button type="submit">Go</button>
</form>
```

<details>
<summary>Answer</summary>

`/s?a=1&d=4&f=on`. No name → not sent. Disabled → not sent. Readonly → sent. Unchecked → not sent. Checked without `value` → `on`.
</details>

### D3 · GET or POST?
Search, login, newsletter sign-up, filter products, upload a file.

<details>
<summary>Answer</summary>

GET: search, filter (bookmarkable, no side effects). POST: login, sign-up, upload (file uploads also need `enctype="multipart/form-data"`).
</details>

### D4 · Radio group
"Preferred contact": Email / Phone, grouped.

<details>
<summary>Answer</summary>

```html
<fieldset>
  <legend>Preferred contact</legend>
  <label><input type="radio" name="contact" value="email" checked> Email</label>
  <label><input type="radio" name="contact" value="phone"> Phone</label>
</fieldset>
```
Same `name` makes them one group.
</details>

### D5 · Select
Required state select (Lagos, Kano, Abuja FCT) with a prompt option.

<details>
<summary>Answer</summary>

```html
<label for="state">State</label>
<select id="state" name="state" required>
  <option value="">Choose a state</option>
  <option value="LA">Lagos</option>
  <option value="KN">Kano</option>
  <option value="FC">Abuja FCT</option>
</select>
```
`required` only works if the first option has an empty value.
</details>

### D6 · Button types
What does `<button>` do inside a form without a `type`? Write three buttons: submit, reset, plain.

<details>
<summary>Answer</summary>

It submits. `<button type="submit">`, `<button type="reset">` (rarely wise), `<button type="button">`.
</details>

### D7 · Placeholder
Why is `<input placeholder="Email">` with no label wrong?

<details>
<summary>Answer</summary>

The placeholder disappears when typing, often has low contrast, and isn't a reliable accessible name. Use a visible `<label>`; placeholders are for example formats only.
</details>

### D8 · Field outside the form
A text input sits in the page footer but must submit with `id="signup"` form. How?

<details>
<summary>Answer</summary>

`<input type="email" name="email" form="signup">`.
</details>

### D9 · datalist vs select
Difference?

<details>
<summary>Answer</summary>

`<select>` limits choices. `<datalist>` only suggests; users can type anything.
</details>
