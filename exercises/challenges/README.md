# Challenges 🧩

Each challenge gives you **plain content** — no HTML at all — and a list of things to do. You decide the structure. That's the real job: turning plain content into HTML that means something.

Each challenge says which lessons it needs. Work in a `my-work/challenges/` folder. Check your page with the validator, go through the parts of the [quality gate](../../assets/cheatsheets/quality-gate.md) that apply, then compare with the hints.

---

## C1 · Mark up a letter

**After:** Lesson 3 · **Inspired by:** MDN's *Marking up a letter* assessment

The content: [letter.txt](letter.txt)

What to do:
- [ ] A full starter page; title "Fellowship offer letter".
- [ ] Sender's and recipient's contact details in the right element (think: *whose* contact information is it?).
- [ ] The date, with a computer-friendly `<time datetime>`.
- [ ] The "Re:" line as the letter's top heading.
- [ ] Paragraphs as paragraphs; the to-do items as a list of the right type.
- [ ] Dates and times inside the text, computer-friendly too.
- [ ] The handbook quotation as an inline quote.
- [ ] "HTML", "CSS", "JS", and "WAT" as abbreviations with expansions.
- [ ] Phone and email as working links.
- [ ] Line breaks only where the content needs them (addresses, sign-off).

<details>
<summary>Hints</summary>

- `<address>` is for contact details that belong to the document — the sender's block fits. The recipient's address is just a paragraph with `<br>`s (or a second `<address>` if you argue it's contact info for the letter's subject; be ready to defend it).
- Use `<time datetime="2027-01-11">`, `<time datetime="14:00">`.
- `<q>` adds the quotation marks — don't type them too.
- `<abbr title="Hypertext Markup Language">HTML</abbr>`; expand the first occurrence.
- Order matters for the pre-session tasks? If not, `<ul>`.
</details>

---

## C2 · Recipe card

**After:** Lesson 6 · **Inspired by:** freeCodeCamp *Build a Recipe Page* lab and The Odin Project *Recipes* project

Write your favourite recipe (or use jollof rice) as a single page.

What to do:
- [ ] One `<h1>` with the dish name; an image with good `alt` and dimensions.
- [ ] A short description; prep time, cook time, and servings in a description list with `<time datetime="PT20M">`-style durations.
- [ ] Ingredients as an unordered list; method as an ordered list.
- [ ] A tip in an `<aside>`.
- [ ] A link back to an index page using a relative path.

---

## C3 · Structure a news page

**After:** Lesson 8 · **Inspired by:** MDN's *Structuring a page of content* assessment

Build a local news homepage, "Lagos Daily", with:
- [ ] Site header with logo and main navigation (5 sections).
- [ ] A search form inside `<search>`.
- [ ] `<main>` with a lead story (`article` with headline, byline, `<time>`, figure with caption, two paragraphs).
- [ ] Three more stories as `article`s in a "Latest" `section` with its own heading.
- [ ] An `aside` with "Most read" (ordered list of links).
- [ ] Footer with contact `address`, social links in a second labelled `nav`, and copyright with `<small>`.
- [ ] Heading levels that make a sensible outline when CSS is off.

<details>
<summary>Hints</summary>

- Two `nav`s need distinct `aria-label`s.
- Story headers can use `<header>` inside each `article` — those aren't banner landmarks.
- Check the outline: W3C validator → "Show outline", or the HeadingsMap extension.
</details>

---

## C4 · Planet data table

**After:** Lesson 9 · **Inspired by:** MDN's *Planet data table* assessment

The data: [planets.csv](planets.csv) (numbers from NASA's Planetary Fact Sheet; moon counts change as new moons are found).

What to do:
- [ ] A `<caption>` explaining the table.
- [ ] `<thead>` with column headers and units in each header (e.g. "Mass (10<sup>24</sup> kg)").
- [ ] The group (Terrestrial / Jovian / Dwarf) and subgroup (Gas giants / Ice giants) as **row headers** spanning the right rows with `rowspan`.
- [ ] Planet names as row headers.
- [ ] Every header has the correct `scope` (`col`, `row`, `rowgroup`).
- [ ] Negative temperatures readable (use the real minus sign `−` or keep the hyphen consistently).
- [ ] The table scrolls horizontally on small screens and keyboards can still reach it.

<details>
<summary>Hints</summary>

- Header row: the first two columns' headers can be one cell with `colspan="2"` (empty or "Group") — a common pattern.
- "Terrestrial planets" spans 4 rows with `rowspan="4"` and `colspan="2"` (no subgroup). "Jovian planets" spans 4 rows; "Gas giants" and "Ice giants" span 2 each.
- `scope="rowgroup"` on group headers works best when each group is its own `<tbody>`.
- Wrap in `<section aria-labelledby="caption-id" tabindex="0">` with `overflow-x: auto`.
</details>

---

## C5 · Survey form

**After:** Lesson 11 · **Inspired by:** freeCodeCamp *Build a Survey Form* lab

Build a "Learner feedback" survey:
- [ ] Name, email (required, typed), age (number with `min`/`max`).
- [ ] "Which lesson did you finish last?" as a `<select>` with an empty first option and `required`.
- [ ] "How would you rate it?" radio group in a `fieldset` with `legend`.
- [ ] "What did you use?" checkboxes (MDN, freeCodeCamp, W3Schools, The Odin Project, Scrimba), each with a `value`.
- [ ] Comments `<textarea>`.
- [ ] `autocomplete` tokens on personal fields.
- [ ] Errors styled with `:user-invalid`, messages linked via `aria-describedby`.
- [ ] One submit button with `type="submit"`.

---

## C6 · Accessible media page

**After:** Lesson 12

Using the files in [assets/media/](../../assets/media/):
- [ ] A video with WebM and MP4 sources, poster, English captions (default), French subtitles, chapters track.
- [ ] An audio player with a transcript in `<details>`.
- [ ] A muted looping decorative video with a visible pause button.
- [ ] Every control reachable and operable by keyboard; visible focus.
- [ ] Passes axe or WAVE with zero errors, **and** a manual screen reader check.
