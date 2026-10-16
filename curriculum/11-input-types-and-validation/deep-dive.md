# Lesson 11 · Input types and checking answers — the full version

📘 **This is the full version.** New to this? Read the [easy lesson](README.md) first, then come back for the details.

⏱ 4–5 hours · 🔨 Builder · 🧰 You need: Lesson 10

Pick the right `type` and you get a lot for free: the right keyboard on phones, automatic checking, and better autofill. Pick the wrong one — like `type="number"` for a phone number — and you get bugs that are hard to spot.

## By the end you can

- Pick the right type out of all 22.
- Add rules to fields, and predict when they'll complain.
- Use `autocomplete`, `inputmode` and `enterkeyhint` to make forms quick on phones.
- Build groups of radio buttons and checkboxes correctly.
- Handle file uploads properly.
- Use `meter`, `progress` and `output`.
- Explain why checking answers in the browser is never real security.

---

## 1. All 22 input types

### For typing text

| Type | Use for | What you get free | Watch out |
|---|---|---|---|
| `text` | Any one-line text | Nothing extra | — |
| `email` | Email addresses | Checks the format; email keyboard on phones; `multiple` allows a list with commas | It accepts `a@b` — **no dot needed** after the @. The server should check more. |
| `password` | Passwords | Hides what you type | Add `autocomplete="current-password"` or `"new-password"` |
| `tel` | Phone numbers | Number pad on phones | **Doesn't check the format** (phone numbers differ around the world). Add a `pattern` if you need one |
| `url` | Web addresses | Checks it; must start with a scheme | `example.com` fails; `https://example.com` passes |
| `search` | Search boxes | May show a clear (×) button; Esc clears it | Put it inside `<search>` (Lesson 8) |

### Numbers and sliders

| Type | Use for | Watch out |
|---|---|---|
| `number` | **Amounts** you'd do maths with: age, how many, price | It accepts the letter `e` (for big numbers like 1e5). Some browsers change the number if you scroll your mouse wheel over it. It only allows whole steps of 1 unless you say otherwise, so `2.5` fails without `step="any"` or `step="0.5"` |
| `range` | A rough value where the exact number doesn't matter (volume, rating) | It shows no number — add an `<output>` next to it |

> ❗ **`type="number"` is for amounts, not for anything made of digits.** Phone numbers, card numbers, account numbers, PINs, postcodes and student ID numbers are **labels**, not amounts. They can start with 0, have spaces or a `+`, and you'd never add two together. Use:
> ```html
> <input type="tel" name="phone" autocomplete="tel">
> <input type="text" name="otp" inputmode="numeric" autocomplete="one-time-code" pattern="[0-9]{6}">
> ```

### Dates and times

| Type | What gets sent | Notes |
|---|---|---|
| `date` | `2026-10-14` | Shows a calendar. People see dates in their own country's style, but what's sent never changes |
| `time` | `18:30` | — |
| `datetime-local` | `2026-10-14T18:30` | **No time zone.** The server needs to know which zone the person meant |
| `month` | `2026-10` | Desktop Firefox and Safari have been patchy (they may show a plain text box). Check MDN before relying on it |
| `week` | `2026-W42` | Same warning as `month` |

> ⚠️ **Exception:** Calendar pickers can be painful — imagine scrolling back decades to find your birthday. For dates people know by heart (birthdays, card expiry), three labelled boxes (day / month / year), or one text box with a clear example, are often easier.

### Choosing

| Type | Use for |
|---|---|
| `checkbox` | One yes/no choice, or several choices from a group |
| `radio` | **Exactly one** choice from a group with the same `name` |
| `color` | Picking a colour. Sends a lowercase code like `#ff8800` |
| `file` | Choosing files (section 6) |

### Buttons and special types

| Type | What it does |
|---|---|
| `submit` | Sends the form. Its words come from `value` |
| `reset` | Clears the form |
| `button` | Nothing by itself |
| `image` | A picture that works as a submit button. **Needs `alt`**. Sends where you clicked as `name.x` and `name.y` |
| `hidden` | Not shown, but still sent — and **not secret** (section 9) |

## 2. Radio buttons or checkboxes?

```html
<fieldset>
  <legend>Payment method</legend>
  <label><input type="radio" name="payment" value="card" required> Card</label>
  <label><input type="radio" name="payment" value="transfer"> Bank transfer</label>
  <label><input type="radio" name="payment" value="ussd"> USSD</label>
</fieldset>

<fieldset>
  <legend>Topics you're interested in</legend>
  <label><input type="checkbox" name="topics" value="html"> HTML</label>
  <label><input type="checkbox" name="topics" value="css"> CSS</label>
</fieldset>
```

| | Radio | Checkbox |
|---|---|---|
| How many can you pick? | Exactly one per group | None, one or many |
| Grouping | **The same `name`** makes them one group | The same `name` just repeats: `topics=html&topics=css` |
| Keyboard | Tab into the group, then **arrow keys** to move | Tab to each one, Space to tick |
| Can you un-pick? | No (once one is chosen) | Yes |
| `required` | On any radio in the group → one must be chosen | On one checkbox → **that** box must be ticked |

> ⚠️ **Exceptions:**
> - HTML has **no built-in "tick at least one of these"** rule. That needs JavaScript, or a check on the server.
> - Once someone picks a radio button, they can't go back to "nothing picked". Choose a sensible default to start with — unless you want people to make a deliberate choice.
> - Checkboxes have a "half-ticked" look (`indeterminate`). Only JavaScript can set it.

## 3. Rules you can put on fields

| Attribute | Works on | Rule |
|---|---|---|
| `required` | Most types, `select`, `textarea` | Can't be empty |
| `minlength` / `maxlength` | Text-type fields, `textarea` | Fewest / most characters |
| `min` / `max` | `number`, `range`, dates and times | Lowest / highest value |
| `step` | `number`, `range`, dates and times | Allowed jumps (`step="any"` means any value) |
| `pattern` | Text-type fields | A **regular expression** (a pattern-matching formula) the whole answer must match |
| `multiple` | `email`, `file`, `select` | Allows more than one answer |
| `accept` | `file` | A **hint** about which file types to show in the picker |

```html
<label for="username">Username (3–20 letters, numbers, or underscores)</label>
<input id="username" name="username" type="text"
       required minlength="3" maxlength="20" pattern="[A-Za-z0-9_]+"
       aria-describedby="username-hint">
<p id="username-hint">Letters, numbers, and underscores only.</p>
```

> ⚠️ **Exceptions you'll run into:**
> - **`pattern` always checks the whole answer.** Don't add `^` and `$` — they're already there behind the scenes.
> - **Browsers now read `pattern` in a stricter mode** (the `v` flag). Some characters must be escaped inside square brackets: write `[\w\-]`, not `[\w-]`. Otherwise the browser quietly ignores your pattern (look for a warning in the Console).
> - **Empty fields pass every rule except `required`.** `pattern`, `minlength` and `type="email"` all let an empty box through. Add `required` if it must be filled in.
> - `maxlength` **stops you typing** past the limit. `minlength` only complains after you've typed something.
> - Explain the rule **in visible text**, and connect it with `aria-describedby`. The `title` attribute sometimes shows up in the error bubble, but not reliably.

## 4. `readonly` or `disabled`?

| | `readonly` | `disabled` |
|---|---|---|
| Can you change it? | No | No |
| Can you Tab to it and select the text? | **Yes** | No |
| Is it sent? | **Yes** | **No** |
| Is it checked against the rules? | No | No |
| What screen readers say | "read-only" | "dimmed" or "unavailable" (some skip it when tabbing) |
| Use it for | Values people should see and send, but not change | Fields that don't apply right now |

> ⚠️ **Exception:** `readonly` **does nothing** on `checkbox`, `radio`, `select`, `file`, `range` or `color`. To lock those, use `disabled` — and if the value still needs to be sent, add an `<input type="hidden">` that carries it.

## 5. Autofill, phone keyboards and the Enter key

### `autocomplete`

Tells the browser and password manager **what** the field is, so they can fill it in for the user.

| Field | Word to use |
|---|---|
| Full name / first name / surname | `name` / `given-name` / `family-name` |
| Email | `email` |
| Phone | `tel` |
| Username | `username` |
| Current password / new password | `current-password` / `new-password` |
| Code sent by SMS | `one-time-code` |
| Address | `street-address`, `address-line1`, `address-level2` (city), `postal-code`, `country-name` |
| Company | `organization` |
| Birthday | `bday` (or `bday-day`, `bday-month`, `bday-year`) |
| Bank card | `cc-name`, `cc-number`, `cc-exp`, `cc-csc` |

The right words also meet the accessibility rule **WCAG 1.3.5 (Identify Input Purpose)**.

> ⚠️ **Exception:** Browsers often **ignore** `autocomplete="off"` on login and password fields. They put the user's password manager first. Don't fight it.

### `inputmode` — which phone keyboard to show

`none`, `text`, `decimal`, `numeric`, `tel`, `search`, `email`, `url`. Use it when the `type` must stay `text` but you know what characters people will type:

```html
<input type="text" name="card" inputmode="numeric" autocomplete="cc-number">
```

### `enterkeyhint` — the word on the phone's Enter key

`enter`, `done`, `go`, `next`, `previous`, `search`, `send`.

### `autocapitalize` and `spellcheck`

- `autocapitalize="off"` for usernames, emails and codes. `"words"` for names. `"sentences"` (what most phones do anyway) for normal writing. It's ignored on `email`, `url` and `password`.
- `spellcheck="false"` for usernames and codes.

## 6. File uploads

```html
<form action="/apply" method="post" enctype="multipart/form-data">
  <label for="cv">CV (PDF or Word, max 2 MB)</label>
  <input id="cv" name="cv" type="file" accept=".pdf,.doc,.docx,application/pdf" required>

  <label for="photos">Portfolio images</label>
  <input id="photos" name="photos" type="file" accept="image/png, image/jpeg, image/webp" multiple>

  <button type="submit">Apply</button>
</form>
```

- `accept` takes endings (`.pdf`), file-type names (`application/pdf`) or groups (`image/*`).
- `capture="user"` or `"environment"` hints at using the front or back camera on phones.

> ❗ `accept` only **tidies up the file picker**. It isn't a security check. People can switch the picker to "All files", and attackers skip your form completely. The server must check the real file type (by looking inside the file, not just at its ending), its size, its name, where it's saved, and whether this person is allowed to upload.

## 7. How the browser checks answers

When someone presses submit, the browser checks every field. If one breaks a rule, the form isn't sent. The browser jumps to the first problem and shows a message bubble. No JavaScript needed.

**CSS you can use:**

| CSS selector | Matches fields that are… |
|---|---|
| `:valid` / `:invalid` | Right or wrong **right now** — even before the user touches them (so empty required fields are red as soon as the page loads) |
| `:user-valid` / `:user-invalid` | Right or wrong **after the user has tried them** — usually what you want (works everywhere since 2023) |
| `:required` / `:optional`, `:in-range` / `:out-of-range`, `:placeholder-shown` | What the names say |

**JavaScript** (for your own messages and behaviour). This set of tools is called the **Constraint Validation API**:

```js
const email = document.querySelector("#email");
email.validity.typeMismatch;    // true if it isn't a proper email
email.checkValidity();          // true or false (fires an "invalid" event if false)
email.reportValidity();         // the same, and shows the browser's message
email.setCustomValidity("Use your school email address."); // marks it wrong, with this message
email.setCustomValidity("");    // clears your message again (you must do this!)
```

The `validity` checks: `valueMissing`, `typeMismatch`, `patternMismatch`, `tooLong`, `tooShort`, `rangeUnderflow`, `rangeOverflow`, `stepMismatch`, `badInput`, `customError`, `valid`.

> 📝 `novalidate` on `<form>` (or `formnovalidate` on a button) stops the browser blocking the form and showing bubbles. The JavaScript tools and CSS selectors still work. Teams often use `novalidate` plus JavaScript to show their own error messages under each field. If you switch off the browser's checks, what you build instead must be at least as good.

### Error messages everyone can use

```html
<label for="email">Email address</label>
<input id="email" name="email" type="email" required
       aria-describedby="email-error" aria-invalid="true">
<p id="email-error">Enter an email address in the format name@example.com.</p>
```

Error messages should be **words** (not just a red colour — WCAG 1.4.1), say **how to fix** the problem, and be connected to the field.

## 8. `meter`, `progress` and `output`

```html
<label for="disk">Disk usage</label>
<meter id="disk" min="0" max="100" low="70" high="90" optimum="20" value="82">82%</meter>

<label for="upload">Upload progress</label>
<progress id="upload" max="100" value="45">45%</progress>
<progress aria-label="Loading">Loading…</progress>   <!-- no value = "still working, not sure how long" -->

<form>
  <input type="range" id="qty" name="qty" min="1" max="10" value="3">
  × ₦500 = <output name="total" for="qty">₦1,500</output>
</form>
```

| Tag | Shows | Example |
|---|---|---|
| `<meter>` | **How full something is**, within a known range (like a fuel gauge) | Disk space, password strength, a rating |
| `<progress>` | **How far along** a task is | An upload, steps in a long form |
| `<output>` | **The result** of a sum or of something the user did | An order total, a slider's value |

> 🔍 **Don't mix up — `meter` and `progress`:** "How full is it?" → `meter`. "How far along is the job?" → `progress`. Neither one is sent with the form.

## 9. Checking in the browser is not security

```html
<input type="number" name="quantity" min="1" max="5">
<input type="hidden" name="price" value="5000">
<input type="hidden" name="role" value="customer">
```

Anyone can open DevTools, delete `max`, change `price` to `1`, or change `role` to `admin`. Or skip your form completely and send their own request.

> ❗ Browser checks are there to **help people** (quick feedback). **Every** rule must be checked again on the server. Hidden fields can be seen and changed. Prices, permissions and who someone is must come from the server's own records.

---

## Mistakes people make

- `type="number"` for phone numbers or ID numbers.
- A `-` inside square brackets in `pattern` without escaping it (the pattern is quietly ignored).
- Thinking `pattern` or `minlength` makes a field required.
- Styling `:invalid`, so every required field is red when the page loads.
- `readonly` on a checkbox.
- Treating `accept` as a security check.
- Wrong or missing `autocomplete` words.
- `setCustomValidity("message")` without ever setting it back to `""` — the field stays wrong forever.

## Quick quiz

<details>
<summary>1. What type and attributes for a 6-digit SMS code?</summary>

`<input type="text" inputmode="numeric" autocomplete="one-time-code" pattern="[0-9]{6}" required>`
</details>

<details>
<summary>2. Why does <code>&lt;input type="email" pattern="…"&gt;</code> accept an empty box?</summary>

Empty fields skip every rule except `required`. Add `required`.
</details>

<details>
<summary>3. How do you make people tick at least one of five checkboxes, with no JavaScript?</summary>

HTML can't do it alone. Use JavaScript (`setCustomValidity`) and check on the server too. Or rethink it — if only one answer is needed, use a radio group.
</details>

<details>
<summary>4. A UK user sees "14/10/2026" in a <code>type="date"</code> box. What gets sent?</summary>

`2026-10-14`. What's sent is always in that format, whatever people see.
</details>

<details>
<summary>5. <code>:invalid</code> or <code>:user-invalid</code> for red borders? Why?</summary>

`:user-invalid`. It only kicks in after the user has tried the field, so empty required fields aren't red when the page first loads.
</details>

## Practice

- 💻 Examples: [input-types.html](examples/input-types.html) · [validation.html](examples/validation.html)
- ✏️ [Drills for this lesson](../../exercises/drills/11-input-types-and-validation.md)
- 🔧 Fix this: [07-forms.broken.html](../../exercises/debug/07-forms.broken.html)
- 🧩 Challenge: [C5 · Survey form](../../exercises/challenges/README.md#c5--survey-form)
- 🏗️ Coming up after Lesson 12: [P4 · Registration system](../../projects/04-registration-system/README.md)

## Read more

| Where | What you get |
|---|---|
| MDN | [HTML5 input types](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) · [Basic native form controls](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls) · [Other form controls](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Other_form_controls) — the main explanation |
| MDN | [Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation) · [Constraint validation guide](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Constraint_validation) · [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete) — everything about checking answers |
| The Odin Project | [Form Validation](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-form-validation) · [Project: Sign-up Form](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-sign-up-form) — the best project to try on your own |
| W3Schools | [Input types](https://www.w3schools.com/html/html_form_input_types.asp) · [Input attributes](https://www.w3schools.com/html/html_form_attributes.asp) · [pattern](https://www.w3schools.com/tags/att_input_pattern.asp) — try every type in the browser |
| freeCodeCamp | [Build a Survey Form](https://www.freecodecamp.org/learn/responsive-web-design-v9/lab-survey-form/build-a-survey-form) — uses most input types |

**Back to:** [the easy lesson](README.md) · **Next easy lesson:** [Lesson 12 · Making pages work for everyone](../12-accessibility-and-aria/README.md)
