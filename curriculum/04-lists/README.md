# Lesson 4 · Lists

⏱ 20 minutes · 🧰 You need: Lesson 3

## In one sentence

HTML has three kinds of list: **bullets**, **numbers**, and **word + meaning**.

## 1. Bullet list — order doesn't matter

A shopping list. `ul` = **u**nordered **l**ist. `li` = **l**ist **i**tem.

```html
<ul>
  <li>Rice</li>
  <li>Tomatoes</li>
  <li>Pepper</li>
</ul>
```

Shows as:
- Rice
- Tomatoes
- Pepper

## 2. Numbered list — order matters

Steps in a recipe. `ol` = **o**rdered **l**ist.

```html
<ol>
  <li>Wash the rice.</li>
  <li>Fry the tomato sauce.</li>
  <li>Add rice and water.</li>
</ol>
```

**Quick test:** if you shuffle the items, does it still make sense?
Yes → `<ul>`. No → `<ol>`.

Handy extras:

```html
<ol start="5">     starts counting at 5
<ol reversed>      counts down: 3, 2, 1
<ol type="A">      A, B, C (also "a", "I", "i")
```

## 3. Description list — word and meaning

Like a dictionary. `dl` = list, `dt` = the word, `dd` = the meaning.

```html
<dl>
  <dt>HTML</dt>
  <dd>The language for web page content.</dd>
  <dt>CSS</dt>
  <dd>The language for how pages look.</dd>
</dl>
```

## Lists inside lists

Put the small list **inside** an `<li>`:

```html
<ul>
  <li>Fruits
    <ul>
      <li>Mango</li>
      <li>Orange</li>
    </ul>
  </li>
  <li>Vegetables</li>
</ul>
```

## ⚠️ Careful

Only `<li>` can go directly inside `<ul>` or `<ol>`.

```html
❌ <ul>
     <h3>Tools</h3>
     <li>Editor</li>
   </ul>

✅ <h3>Tools</h3>
   <ul>
     <li>Editor</li>
   </ul>
```

**Menus are lists too.** A website's navigation is usually a `<ul>` of links (Lesson 5 shows how).

## ✅ Remember

- `ul` = bullets, `ol` = numbers, `dl` = word + meaning.
- Every item is an `<li>` (except in `dl`).
- Nested list goes **inside** an `<li>`.

## 🎯 Try it

1. List your 3 favourite foods (bullets).
2. Write how to make tea in 4 steps (numbers).
3. Explain 2 words you learned today (description list).

<details>
<summary>Check: which list for "Top 3 football clubs, ranked"?</summary>

`<ol>` — ranking means order matters.
</details>

## Want more?

- 📖 The detailed version: [deep-dive.md](deep-dive.md)
- 💻 Example: [lists.html](examples/lists.html)
- 🌐 The Odin Project: [Lists](https://www.theodinproject.com/lessons/foundations-lists)
- ✏️ Practice: [drills](../../exercises/drills/04-lists.md)

➡️ **Next:** [Lesson 5 · Links](../05-links-urls-and-paths/README.md)
