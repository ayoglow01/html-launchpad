# Practice · Lesson 11 · Input types and checking answers

📗 [Easy lesson](../../curriculum/11-input-types-and-validation/README.md) · 📘 [Full version](../../curriculum/11-input-types-and-validation/deep-dive.md)

💡 Try each task **before** opening the answer. If a task uses something new, you'll find it in the full version.

### D1 · Right type
Pick the type: email, phone number, quantity 1–10, date of birth, website, password, colour, search box, age range slider.

<details>
<summary>Answer</summary>

`email`, `tel`, `number` (`min="1" max="10"`), `date`, `url`, `password`, `color`, `search`, `range`.
</details>

### D2 · Not a number
Why is `type="number"` wrong for a phone number, card number, or BVN?

<details>
<summary>Answer</summary>

They're identifiers, not quantities: leading zeros get stripped, spinners and scroll-wheel changes make no sense, `e` is accepted. Use `type="text" inputmode="numeric"` (and `tel` for phones).
</details>

### D3 · Constraints
Username: required, 3–15 characters, letters/numbers/underscore only.

<details>
<summary>Answer</summary>

```html
<label for="user">Username</label>
<input type="text" id="user" name="username" required minlength="3" maxlength="15"
       pattern="[A-Za-z0-9_]+" aria-describedby="user-hint" autocomplete="username">
<p id="user-hint">3–15 letters, numbers, or underscores.</p>
```
`pattern` is anchored automatically (whole value must match).
</details>

### D4 · Empty skips
A non-required field has `pattern="\d{5}"`. Is an empty value valid?

<details>
<summary>Answer</summary>

Yes. Constraints other than `required` don't apply to empty values.
</details>

### D5 · Autocomplete tokens
Write tokens for: full name, email, phone, new password, one-time code, street address, postcode.

<details>
<summary>Answer</summary>

`name`, `email`, `tel`, `new-password`, `one-time-code`, `street-address`, `postal-code`. (WCAG 1.3.5 Identify Input Purpose.)
</details>

### D6 · Mobile keyboards
Get a numeric keypad for a 6-digit OTP without `type="number"`.

<details>
<summary>Answer</summary>

`<input type="text" inputmode="numeric" autocomplete="one-time-code" pattern="\d{6}" maxlength="6">`
</details>

### D7 · File upload
Accept up to several images; how must the form be configured?

<details>
<summary>Answer</summary>

```html
<form action="/upload" method="post" enctype="multipart/form-data">
  <label for="photos">Photos</label>
  <input type="file" id="photos" name="photos" accept="image/*" multiple>
  <button type="submit">Upload</button>
</form>
```
`accept` is a hint; the server must check type and size.
</details>

### D8 · Custom error
"Confirm password" must match "Password". Which API?

<details>
<summary>Answer</summary>

`confirm.setCustomValidity(confirm.value === pw.value ? "" : "Passwords don't match")` on `input` events. An empty string clears the error.
</details>

### D9 · Style errors kindly
Which pseudo-class avoids showing errors before the user interacts?

<details>
<summary>Answer</summary>

`:user-invalid` (vs `:invalid`, which matches immediately on load).
</details>

### D10 · meter vs progress
Disk usage 70% vs file upload at 70%.

<details>
<summary>Answer</summary>

Disk usage: `<meter value="0.7">` (a measurement in a known range). Upload: `<progress value="70" max="100">` (task completion).
</details>
