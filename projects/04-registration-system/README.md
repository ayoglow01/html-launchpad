# P4 · Registration system

**After:** Lesson 12 · **Time:** 6–8 hours · **Pages:** 2 · **Inspired by:** The Odin Project *Sign-up form* and freeCodeCamp *Build a Survey Form*

## What you're making

A registration form for "Naija Code Bootcamp 2027" and a confirmation page. This project is about **forms, input types, validation, and accessibility** — the trickiest part of HTML to get right.

## Pages

1. `index.html` — the form. `action="confirmation.html"`, `method="get"` **for this exercise only** so you can see submitted values in the URL. Write a comment explaining why a real form would use POST.
2. `confirmation.html` — a thank-you page that reads the values from the address (the query string) with a small script and shows a summary using `textContent` (never `innerHTML`).

## What the form needs

### Personal details (`fieldset` + `legend`)
- [ ] Full name, email, phone, date of birth — correct `type`, `autocomplete`, and `required` where needed.
- [ ] State of residence: `<select>` with optgroups by region, empty first option, `required`.

### Programme (`fieldset`)
- [ ] Track: radio group (Frontend / Backend / Product design).
- [ ] Preferred schedule: checkboxes (Weekday mornings, Weekday evenings, Weekends) with `value`s.
- [ ] Experience level: `range` 0–10 with a live `<output>`.
- [ ] Laptop available? Yes/No radios.

### Account (`fieldset`)
- [ ] Username with `pattern`, `minlength`, `maxlength`, and a visible hint linked with `aria-describedby`.
- [ ] Password + confirm password (`new-password`); confirm matches via `setCustomValidity`.
- [ ] Optional portfolio URL (`type="url"`).
- [ ] Profile photo upload (`accept="image/*"`) — note: real uploads need POST and `multipart/form-data`.

### Finish
- [ ] "How did you hear about us?" with `<datalist>` suggestions.
- [ ] Short motivation `<textarea>` with `maxlength` and a character counter in a polite live region.
- [ ] Terms checkbox, required.
- [ ] One `<button type="submit">`.

### Validation and accessibility
- [ ] Error styles with `:user-invalid`, not `:invalid`.
- [ ] Each error message is text (not only colour), specific, and linked with `aria-describedby`.
- [ ] Every control has a visible label; group labels via `legend`.
- [ ] You can fill in the whole form with only a keyboard; focus is always visible.
- [ ] Tested with a screen reader: every field reads out its label, type, whether it's required, and its hint.

## Score yourself

For each area, give yourself **0** (missing), **1** (started), **2** (mostly right) or **3** (spot on).

| Area | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Labels and grouping | | | | |
| Input types and `inputmode` | | | | |
| `autocomplete` words | | | | |
| Checking rules (`required`, `pattern`, `min`…) | | | | |
| Custom validation and messages | | | | |
| Keyboard and screen reader experience | | | | |
| Submitted data correct (`name`/`value`) | | | | |
| Confirmation page safe (`textContent`) | | | | |
| Validation | | | | |
