# Lesson 9 · Tables

⏱ 30 minutes · 🧰 You need: Lesson 8

## In one sentence

Tables show **data in rows and columns**, like a spreadsheet or a school timetable.

## Your first table

```html
<table>
  <caption>
    Test scores
  </caption>
  <tr>
    <th>Student</th>
    <th>Score</th>
  </tr>
  <tr>
    <td>Ada</td>
    <td>85</td>
  </tr>
  <tr>
    <td>Musa</td>
    <td>92</td>
  </tr>
</table>
```

| Tag         | Means                                      |
| ----------- | ------------------------------------------ |
| `<table>`   | The whole table                            |
| `<caption>` | The table's title                          |
| `<tr>`      | **T**able **r**ow — one line across        |
| `<th>`      | **T**able **h**eader — a title cell (bold) |
| `<td>`      | **T**able **d**ata — a normal cell         |

Build it **row by row**, left to right.

## Tell the browser which way headers point

```html
<th scope="col">Score</th>
<!-- header for the column below it -->
<th scope="row">Ada</th>
<!-- header for the row beside it -->
```

This lets a screen reader say "Ada, Score, 85" instead of just "85".

## Group the rows

```html
<table>
  <caption>
    Test scores
  </caption>
  <thead>
    <tr>
      <th scope="col">Student</th>
      <th scope="col">Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Ada</th>
      <td>85</td>
    </tr>
    <tr>
      <th scope="row">Musa</th>
      <td>92</td>
    </tr>
  </tbody>
</table>
```

`<thead>` = the header rows. `<tbody>` = the main rows. `<tfoot>` = totals at the bottom.

## Merge cells

- `colspan="2"` — a cell stretches across **2 columns**.
- `rowspan="2"` — a cell stretches down **2 rows**.

```html
<tr>
  <th scope="row">Tunde</th>
  <td colspan="2">Absent</td>
</tr>
```

Tip: count your cells. Every row should add up to the same number of columns.

## ⚠️ Careful

- **Use `<th>` for headers**, not a bold `<td>`. Bold looks right but means nothing to a screen reader.
- **Tables are for data only — not for page layout.** For layout, use CSS. (The one old exception: HTML emails.)
- Wide tables can break phone screens. The full version shows how to make them scroll.

## ✅ Remember

- `table` → `tr` (rows) → `th` (headers) / `td` (data).
- Add a `<caption>`.
- Use `scope="col"` and `scope="row"` on headers.
- Tables are for data, not layout.

## 🎯 Try it

Make a table of your weekly timetable: days as columns, times as rows.

<details>
<summary>Check: a cell should cover 3 columns. Which attribute?</summary>

`colspan="3"`

</details>

## Want more?

- 📖 The detailed version: [deep-dive.md](deep-dive.md)
- 💻 Example: [tables.html](examples/tables.html)
- ✏️ Practice: [drills](../../exercises/drills/09-tables.md) · [fix a broken table](../../exercises/debug/06-tables.broken.html) · [planet table challenge](../../exercises/challenges/README.md#c4--planet-data-table)
- 🏗️ **Project time!** [P3 · Information portal](../../projects/03-information-portal/README.md)

➡️ **Next:** [Lesson 10 · Forms](../10-forms-fundamentals/README.md)
