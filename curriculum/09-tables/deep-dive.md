# Lesson 9 · Tables — the full version

📘 **This is the full version.** New to this? Read the [easy lesson](README.md) first, then come back for the details.

⏱ 2–3 hours · 🌱 Beginner · 🧰 You need: Lesson 8

A table is for **data in rows and columns** — information that only makes sense when you know its row *and* its column. A screen reader can read each cell with its headings ("Maths, Chidi, 85"). But only if you mark the headings properly.

## By the end you can

- Build tables everyone can use, with a title, heading cells and row groups.
- Use `scope` for simple tables, and `headers` + `id` for tricky ones.
- Stretch cells across columns and rows (`colspan`, `rowspan`).
- Explain why you shouldn't use tables to lay out a page.

---

## 1. The table tags

| Tag | What it is |
|---|---|
| `<table>` | The table |
| `<caption>` | The table's title. **Must come first** inside `<table>`. |
| `<thead>` | The heading rows |
| `<tbody>` | The main rows (you can have more than one) |
| `<tfoot>` | The bottom rows (totals, summaries). Goes **after** `<tbody>`. |
| `<tr>` | One row |
| `<th>` | A **heading** cell |
| `<td>` | A **data** cell |
| `<colgroup>` / `<col>` | Groups of columns — for styling whole columns |

```html
<table>
  <caption>Q3 exam results, Class 2B</caption>
  <thead>
    <tr>
      <th scope="col">Student</th>
      <th scope="col">Maths</th>
      <th scope="col">English</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Chidi</th>
      <td>85</td>
      <td>78</td>
    </tr>
    <tr>
      <th scope="row">Amaka</th>
      <td>92</td>
      <td>88</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Average</th>
      <td>88.5</td>
      <td>83</td>
    </tr>
  </tfoot>
</table>
```

## 2. Why `<th>`, not a bold `<td>`?

`<th>` **connects** cells to their headings. Every data cell knows which headings describe it. Screen readers use this to tell users where they are as they move around. A bold `<td>` looks the same but connects nothing.

## 3. `scope`

| Value | This heading is for… |
|---|---|
| `col` | The rest of its column |
| `row` | The rest of its row |
| `colgroup` | A group of columns (a heading that stretches across them) |
| `rowgroup` | A group of rows (like one `<tbody>`) |

Browsers can guess in simple tables, but writing `scope` is clearer and more reliable. Always add it.

## 4. Cells that stretch

```html
<table>
  <caption>Workshop timetable</caption>
  <thead>
    <tr>
      <th scope="col">Day</th>
      <th scope="col">Time</th>
      <th scope="col">Session</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" rowspan="2">Monday</th>
      <td>09:00</td>
      <td>Semantic HTML</td>
    </tr>
    <tr>
      <!-- "Monday" already fills this row's first column -->
      <td>13:00</td>
      <td>Forms</td>
    </tr>
    <tr>
      <th scope="row">Tuesday</th>
      <td colspan="2">Project day (all day)</td>
    </tr>
  </tbody>
</table>
```

- `colspan="2"` — the cell is two columns wide.
- `rowspan="2"` — the cell is two rows tall. **Leave out its space** in the row below.

> 💡 **Tip:** Draw the grid on paper first. Count the columns in every row, including stretched cells. Every row must add up to the same number. Uneven rows are the most common table bug.

## 5. Tricky tables: `headers` + `id`

Sometimes a cell's headings aren't simply at the top of its column and the start of its row — for example, when there are two levels of headings. Then you connect them by hand:

```html
<table>
  <caption>Sales by region and quarter (₦ millions)</caption>
  <thead>
    <tr>
      <td></td>
      <th id="q1" scope="col">Q1</th>
      <th id="q2" scope="col">Q2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th id="north" colspan="3" scope="colgroup">North</th>
    </tr>
    <tr>
      <th id="kano" headers="north">Kano</th>
      <td headers="north kano q1">12</td>
      <td headers="north kano q2">15</td>
    </tr>
  </tbody>
</table>
```

`headers` is a list of heading `id`s, separated by spaces. Only use it when you have to. Often, splitting one tricky table into two simple ones is clearer for everyone.

## 6. Column groups

```html
<table>
  <caption>Plan comparison</caption>
  <colgroup>
    <col>
    <col span="2" class="paid-plans">
  </colgroup>
  …
</table>
```

`<col>` lets you style whole columns. But only a few CSS properties work on it: `background`, `border`, `width` and `visibility`. `<colgroup>` goes after `<caption>` and before `<thead>`.

## 7. There's always a `<tbody>`

If you put rows straight inside `<table>`, the browser adds a `<tbody>` for you. That's why CSS like `table > tr` (rows directly inside the table) matches nothing. Write `<tbody>` yourself, so your code matches what the browser builds.

## 8. Don't use tables for page layout

Long ago, before CSS could do layouts, whole pages were built from tables inside tables. Don't do this:

- Screen readers read out rows and columns that mean nothing.
- The content is stuck in a grid — awful on small screens.
- It's harder to change than CSS Grid or Flexbox.

> ⚠️ **Exception:** HTML **emails** still often use tables for layout, because email apps are bad at CSS. There, add `role="presentation"` to layout tables so screen readers ignore the rows and columns. That's a trick for email only, not for web pages.

## 9. Old table attributes

These are out of date. Use CSS instead: `border`, `cellpadding`, `cellspacing`, `bgcolor`, `align`, `valign`, `width` (on cells) and `height`. And instead of `summary`, put that information in the `<caption>` or the text nearby.

## 10. Wide tables on small screens

HTML alone can't squeeze a wide table onto a phone. A common fix: put the table in a box that scrolls sideways. Give the box a name and `tabindex="0"`, so keyboard users can reach it and scroll:

```html
<div role="region" aria-labelledby="results-caption" tabindex="0">
  <table>
    <caption id="results-caption">Q3 exam results</caption>
    …
  </table>
</div>
```

`<section aria-labelledby="results-caption" tabindex="0">` does the same job — a `<section>` with a name becomes a `region` by itself. (The example file uses this version.) The CSS for scrolling comes later.

---

## Mistakes people make

- No `<caption>`.
- Heading cells written as bold `<td>`.
- No `scope`.
- Rows with different numbers of columns.
- Forgetting to leave out the space under a `rowspan`.
- Tables for layout; tables inside tables.

## Quick quiz

<details>
<summary>1. Where does <code>&lt;caption&gt;</code> go?</summary>

First thing inside `<table>`.
</details>

<details>
<summary>2. A cell has <code>rowspan="3"</code>. What changes in the next two rows?</summary>

Each has one less cell in that spot — the tall cell already fills it.
</details>

<details>
<summary>3. When do you need <code>headers</code> instead of <code>scope</code>?</summary>

When a cell's headings aren't simply in its own row and column — like two levels of headings, or an uneven layout.
</details>

<details>
<summary>4. Why might <code>table &gt; tr { … }</code> in CSS not work?</summary>

The browser adds `<tbody>`, so the rows are inside `tbody`, not directly inside `table`.
</details>

## Practice

- 💻 Example: [tables.html](examples/tables.html)
- ✏️ [Drills for this lesson](../../exercises/drills/09-tables.md)
- 🔧 Fix this: [06-tables.broken.html](../../exercises/debug/06-tables.broken.html)
- 🧩 Challenge: [Planet data table](../../exercises/challenges/README.md#c4--planet-data-table)
- 🏗️ Project: [P3 · Information portal](../../projects/03-information-portal/README.md)

## Read more

| Where | What you get |
|---|---|
| MDN | [HTML table basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics) · [Table accessibility](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Table_accessibility) — the main explanation, and the best on accessibility |
| MDN challenge | [Structuring a planet data table](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Planet_data_table) — great practice with stretched cells and `scope` |
| The Odin Project | [Tables](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-tables) — short, with exercises |
| W3Schools | [Tables](https://www.w3schools.com/html/html_tables.asp) · [Headers](https://www.w3schools.com/html/html_table_headers.asp) · [Colspan/rowspan](https://www.w3schools.com/html/html_table_colspan_rowspan.asp) — quick look-ups |
| freeCodeCamp | [Responsive Web Design](https://www.freecodecamp.org/learn/responsive-web-design-v9/) — forms and tables workshops |

**Back to:** [the easy lesson](README.md) · **Next easy lesson:** [Lesson 10 · Forms](../10-forms-fundamentals/README.md)
