# Lesson 16 · Attributes for every tag, and other languages

⏱ 30 minutes · 🧰 You need: Lesson 15

## In one sentence

Some attributes work on **any** tag, and a few of them help your page work in **any language**.

## Attributes you can put on any tag

| Attribute | What it does |
|---|---|
| `id` | A unique name for one element |
| `class` | A group name for styling |
| `lang` | The language of the text |
| `dir` | Text direction: left-to-right or right-to-left |
| `title` | A little hover tooltip (don't rely on it) |
| `hidden` | Hides the element |
| `tabindex` | Controls keyboard focus (use `0` or `-1` only) |
| `data-*` | Your own data for JavaScript |
| `translate="no"` | "Don't translate this" |
| `contenteditable` | Lets people type into the element |

## Yes/no attributes — a sneaky trap 🪤

Some attributes are **on** just by being there:

```html
<input disabled>          disabled ✅
<input disabled="false">  STILL disabled 😮
```

The word `"false"` doesn't turn it off. To turn it off, **delete the attribute**. Same for `required`, `checked`, `hidden`, `autofocus`.

## Tell the browser the language

```html
<html lang="en">
```

For a phrase in another language:

```html
<p>She said <span lang="yo">Ẹ kú àárọ̀</span> — good morning in Yoruba.</p>
```

Why? Screen readers change their accent. Translators and spell-checkers work properly.

Common codes: `en` English, `fr` French, `yo` Yoruba, `ig` Igbo, `ha` Hausa, `ar` Arabic, `en-NG` English as used in Nigeria.

## Right-to-left languages

Arabic and Hebrew are written from right to left:

```html
<html lang="ar" dir="rtl">
```

For usernames that could be in any language, wrap them in `<bdi>` so they don't scramble the line:

```html
<li><bdi>إيان</bdi>: 3 posts</li>
```

## Don't translate names

```html
<p>Welcome to <span translate="no">Ọjà Express</span>.</p>
```

## Always UTF-8

`<meta charset="UTF-8">` lets you type any letter: ₦, ẹ, ọ, ñ, 中, 😊. If you see strange symbols like `Ã©`, your file wasn't saved as UTF-8. Check the bottom-right corner of VS Code.

## ⚠️ Careful

- `title` tooltips don't show on phones. Don't put important information only there.
- The UK code is `en-GB`, not `en-UK`.

## ✅ Remember

- Always set `lang` on `<html>`.
- Yes/no attributes: remove them to turn off.
- Right-to-left: `dir="rtl"`.
- Save files as UTF-8.

## 🎯 Try it

Add a sentence in another language you know to your page, with the correct `lang`.

<details>
<summary>Check: is <code>&lt;button hidden="false"&gt;</code> visible?</summary>

No. Any value still hides it. Remove `hidden` to show it.
</details>

## Want more?

- 📖 The detailed version: [deep-dive.md](deep-dive.md)
- 💻 Example: [i18n.html](examples/i18n.html)
- 📋 Full list: [global attributes cheatsheet](../../assets/cheatsheets/global-attributes.md)
- ✏️ Practice: [drills](../../exercises/drills/16-global-attributes-and-i18n.md)

➡️ **Next:** [Lesson 17 · Make your own tags](../17-web-components-and-templates/README.md)
