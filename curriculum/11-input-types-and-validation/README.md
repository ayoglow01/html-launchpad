# Lesson 11 · Input types and checking answers

⏱ 45 minutes · 🧰 You need: Lesson 10

## In one sentence

Change the `type` of an `<input>` and the browser gives you the right keyboard, a date picker, or a colour picker — and can check answers for you.

## Pick the right type

```html
<input type="text">       any text
<input type="email">      email (phone shows the @ key)
<input type="tel">        phone number (phone shows number pad)
<input type="password">   hidden dots
<input type="number">     amounts, with up/down arrows
<input type="date">       date picker
<input type="url">        website address
<input type="search">     search box
<input type="checkbox">   tick box
<input type="radio">      pick one
<input type="range">      slider
<input type="color">      colour picker
<input type="file">       upload a file
```

There are 22 types in total — see them all in [input-types.html](examples/input-types.html).

## ⚠️ Careful: not every number is a number

Phone numbers, card numbers, and bank numbers are really **codes**, not amounts. `type="number"` can remove a leading zero (0803 → 803).

```html
❌ <input type="number" name="phone">
✅ <input type="tel" name="phone">
✅ <input type="text" inputmode="numeric" name="otp">   <!-- number keypad, but kept as text -->
```

Rule: **Would you ever add or subtract it?** No → don't use `type="number"`.

## Let the browser check answers ✅

Add these and the browser stops the form if something's wrong:

```html
<input type="text" name="username" required>             must not be empty
<input type="text" name="username" minlength="3" maxlength="15">   length limits
<input type="number" name="age" min="18" max="99">       number limits
<input type="text" name="code" pattern="[A-Z]{3}">        must match a pattern (3 capital letters)
```

Show a hint so people know the rules **before** they type:

```html
<label for="user">Username</label>
<input type="text" id="user" name="username" minlength="3" aria-describedby="user-hint">
<p id="user-hint">At least 3 letters.</p>
```

`aria-describedby` links the hint to the box so screen readers read it too.

## Help people fill forms faster

`autocomplete` lets browsers fill in saved details:

```html
<input type="text" name="name" autocomplete="name">
<input type="email" name="email" autocomplete="email">
<input type="password" name="pw" autocomplete="new-password">
```

## Uploading files

```html
<form action="/upload" method="post" enctype="multipart/form-data">
  <label for="photo">Your photo</label>
  <input type="file" id="photo" name="photo" accept="image/*">
  <button type="submit">Upload</button>
</form>
```

File uploads need `method="post"` **and** `enctype="multipart/form-data"`.

## Show progress

```html
<progress value="70" max="100">70%</progress>   a task 70% done
<meter value="0.7">70%</meter>                  a measurement, like disk 70% full
```

## ⚠️ Very important

**Browser checks can be skipped** by anyone who knows how. They're there to **help** people, not to protect you. The server must check everything again.

## ✅ Remember

- Pick the `type` that matches the answer.
- Codes (phone, card) are not `number`.
- `required`, `minlength`, `min`, `max`, `pattern` check answers.
- Show hints before people type.
- Real security happens on the server.

## 🎯 Try it

Make a sign-up form: name, email, phone, password (8+ characters), date of birth, and a "I agree" checkbox that must be ticked.

<details>
<summary>Hint for the checkbox</summary>

`<label><input type="checkbox" name="terms" value="yes" required> I agree to the terms</label>`
</details>

## Want more?

- 📖 The detailed version (all 22 types, custom error messages, accessible errors): [deep-dive.md](deep-dive.md)
- 💻 Examples: [input-types.html](examples/input-types.html) · [validation.html](examples/validation.html)
- ✏️ Practice: [drills](../../exercises/drills/11-input-types-and-validation.md) · [survey form challenge](../../exercises/challenges/README.md#c5--survey-form)

➡️ **Next:** [Lesson 12 · Making pages work for everyone](../12-accessibility-and-aria/README.md)
