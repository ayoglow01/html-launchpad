# Practice · Lesson 9 · Tables

📗 [Easy lesson](../../curriculum/09-tables/README.md) · 📘 [Full version](../../curriculum/09-tables/deep-dive.md)

💡 Try each task **before** opening the answer. If a task uses something new, you'll find it in the full version.

### D1 · Basic data table
Students and scores: Ada 85, Musa 92. Caption "Test scores".

<details>
<summary>Answer</summary>

```html
<table>
  <caption>Test scores</caption>
  <thead>
    <tr><th scope="col">Student</th><th scope="col">Score</th></tr>
  </thead>
  <tbody>
    <tr><th scope="row">Ada</th><td>85</td></tr>
    <tr><th scope="row">Musa</th><td>92</td></tr>
  </tbody>
</table>
```
</details>

### D2 · Bold td vs th
Why is `<td><b>Name</b></td>` wrong for a header?

<details>
<summary>Answer</summary>

It looks like a header but isn't one: screen readers can't announce it when reading data cells, and it carries no structure.
</details>

### D3 · colspan
A header "Contact" spanning "Email" and "Phone" columns.

<details>
<summary>Answer</summary>

```html
<tr><th scope="col" rowspan="2">Name</th><th scope="colgroup" colspan="2">Contact</th></tr>
<tr><th scope="col">Email</th><th scope="col">Phone</th></tr>
```
</details>

### D4 · rowspan arithmetic
A row contains a cell with `rowspan="3"`. How many cells do the next two rows need if the table has 4 columns?

<details>
<summary>Answer</summary>

3 each — the spanning cell occupies one slot in each of them.
</details>

### D5 · scope values
List the four `scope` values.

<details>
<summary>Answer</summary>

`col`, `row`, `colgroup`, `rowgroup`.
</details>

### D6 · When headers/id?
When do you need `headers`/`id` instead of `scope`?

<details>
<summary>Answer</summary>

When a data cell relates to headers that `scope` can't express — e.g. multiple levels of row and column headers that don't align in simple rows/columns.
</details>

### D7 · Layout tables
A designer wants a two-column layout with a table. Response?

<details>
<summary>Answer</summary>

Use CSS Grid/Flexbox. Tables are for tabular data. (HTML email is the exception: use `role="presentation"` on layout tables there.)
</details>

### D8 · Auto tbody
Why might `table > tr { … }` never match?

<details>
<summary>Answer</summary>

The parser inserts `<tbody>` automatically, so `tr` is a child of `tbody`, not `table`.
</details>

### D9 · Wide table
Make a wide table scrollable and keyboard-accessible.

<details>
<summary>Answer</summary>

Wrap it in `<section aria-labelledby="caption-id" tabindex="0">` (or `div role="region"`) with CSS `overflow-x: auto`.
</details>
