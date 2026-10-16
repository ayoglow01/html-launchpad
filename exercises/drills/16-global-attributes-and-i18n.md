# Practice · Lesson 16 · Attributes for every tag, and other languages

📗 [Easy lesson](../../curriculum/16-global-attributes-and-internationalization/README.md) · 📘 [Full version](../../curriculum/16-global-attributes-and-internationalization/deep-dive.md)

💡 Try each task **before** opening the answer. If a task uses something new, you'll find it in the full version.

### D1 · True or false?
Which are disabled/hidden/editable? (a) `<input disabled="false">` (b) `<p contenteditable="false">` (c) `<div hidden="false">` (d) `<img draggable="false">`

<details>
<summary>Answer</summary>

(a) disabled (boolean; also invalid) · (b) not editable (enumerated) · (c) hidden (any value except `until-found` = hidden; and invalid) · (d) not draggable.
</details>

### D2 · Language of parts
English page quoting a French phrase "Bon appétit".

<details>
<summary>Answer</summary>

`<html lang="en">` … `<q lang="fr">Bon appétit</q>`.
</details>

### D3 · Tags
Write language tags: Yoruba; English as used in Nigeria; Hausa in Arabic script; Simplified Chinese.

<details>
<summary>Answer</summary>

`yo`, `en-NG`, `ha-Arab`, `zh-Hans`.
</details>

### D4 · RTL page
Arabic page setup.

<details>
<summary>Answer</summary>

`<html lang="ar" dir="rtl">` — in markup, not CSS `direction`.
</details>

### D5 · bdi
A leaderboard shows usernames in many scripts followed by scores. Prevent reordering.

<details>
<summary>Answer</summary>

`<li><bdi>{username}</bdi>: 120 points</li>`.
</details>

### D6 · translate
Stop browser translation from changing your brand "Ọjà Express".

<details>
<summary>Answer</summary>

`<span translate="no">Ọjà Express</span>`.
</details>

### D7 · title attribute
Is `title` a good way to explain an icon button?

<details>
<summary>Answer</summary>

No. Not shown on touch, inconsistent for keyboard and screen readers. Use visible text or a proper accessible name.
</details>

### D8 · Mojibake
`Â©` appears instead of `©`. Diagnose.

<details>
<summary>Answer</summary>

UTF-8 bytes interpreted as Windows-1252/Latin-1. Check file encoding, `<meta charset="UTF-8">` (in first 1024 bytes), and the server's `Content-Type` header.
</details>
