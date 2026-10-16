# Practice · Lesson 21 · Finding and fixing mistakes

📗 [Easy lesson](../../curriculum/21-validation-debugging-and-tooling/README.md) · 📘 [Full version](../../curriculum/21-validation-debugging-and-tooling/deep-dive.md)

💡 Try each task **before** opening the answer. If a task uses something new, you'll find it in the full version.

### D1 · Validate this repo
Run html-validate on every example in the `curriculum` folder. What do you type?

<details>
<summary>Answer</summary>

`npx html-validate "curriculum/**/*.html"` from the repo's top folder. Files listed in `.htmlvalidateignore` (the ones broken on purpose) are skipped.
</details>

### D2 · Guess what the browser builds
What does the browser build (the DOM) from `<p>Intro<ul><li>One</li></ul></p>`?

<details>
<summary>Answer</summary>

`<p>Intro</p><ul><li>One</li></ul><p></p>`. The `<p>` closes itself before the list, and the leftover `</p>` makes an empty paragraph.
</details>

### D3 · Which error first?
The checker shows 14 errors. Where do you start, and why?

<details>
<summary>Answer</summary>

The first one. Later errors are often caused by it (for example, one tag left open).
</details>

### D4 · Emmet
Write the Emmet shortcut for a `nav` containing a `ul` with 4 `li`, each with an `a href="#"`.

<details>
<summary>Answer</summary>

`nav>ul>li*4>a[href=#]`
</details>

### D5 · Accessibility pane
Where in DevTools can you see the name and role a screen reader gets for an element?

<details>
<summary>Answer</summary>

Chrome: Elements → Accessibility pane. Firefox: Accessibility Inspector.
</details>

### D6 · Valid but bad
Give three examples of HTML that's valid but still bad.

<details>
<summary>Answer</summary>

A `<div>` with a click handler used as a button; skipped heading levels; `alt="image"`; "click here" links; tables for layout.
</details>

### D7 · Support check
You want to use `popover`. Where do you check if browsers support it, and what's your backup plan?

<details>
<summary>Answer</summary>

The MDN support table or Baseline label, and Can I use. Check for it in JavaScript (`"showPopover" in HTMLElement.prototype`) and fall back to a simple show/hide — or make sure the content can be reached without it.
</details>

### D8 · Debug a 404
A picture is broken, but only on the live site. What do you check?

<details>
<summary>Answer</summary>

The Network tab, to see which address was asked for; capitals in file and folder names; relative paths vs paths starting with `/`; whether the file was actually uploaded; the ending (`.jpeg` vs `.jpg`).
</details>
