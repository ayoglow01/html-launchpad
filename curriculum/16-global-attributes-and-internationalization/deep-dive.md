# Lesson 16 · Attributes for every tag, and other languages — the full version

📘 **This is the full version.** New to this? Read the [easy lesson](README.md) first, then come back for the details.

⏱ 2–3 hours · 🚀 Pro · 🧰 You need: Lessons 1–15

**Global attributes** work on **every** tag. Some you'll use every day (`id`, `class`, `lang`). Some fix one particular problem (`translate`, `dir`, `contenteditable`). A few are traps (`title`, `accesskey`). The second half of this lesson is about pages that work in any language and any writing system, including ones written right to left, like Arabic, or Hausa in Ajami script.

## By the end you can

- Name every global attribute, say what it does, and when to avoid it.
- Tell yes/no attributes apart from keyword attributes that just look like yes/no.
- Set the language for a whole page and for single phrases, with correct language codes.
- Handle right-to-left text with `dir`, `<bdi>` and `<bdo>`.
- Stop translation tools from changing brand names and code with `translate="no"`.
- Add pronunciation guides with `ruby`, and safe line-break spots with `wbr`.

---

## 1. Yes/no attributes vs keyword attributes — the most common attribute bug

**Yes/no attributes** (the proper name is **boolean**) are "on" if they're there and "off" if they're not. The value is ignored.

```html
<input disabled>              <!-- disabled -->
<input disabled="">           <!-- disabled -->
<input disabled="disabled">   <!-- disabled -->
<input disabled="false">      <!-- STILL disabled -->
```

`disabled="false"` is also **not valid**. The only allowed values are nothing, or the attribute's own name. To switch it off, **remove the attribute**. In JavaScript: `input.disabled = false` or `removeAttribute("disabled")`.

**Keyword attributes** (proper name: **enumerated**) take one word from a fixed list — and sometimes `"false"` is on that list:

```html
<p contenteditable="false">Not editable</p>
<img src="a.jpg" alt="" draggable="false">
<textarea spellcheck="false"></textarea>
<span translate="no">html-cracker</span>
```

| Attribute | Kind | Allowed values |
|---|---|---|
| `hidden` | Keyword (since `until-found` arrived) | empty or `hidden`, `until-found` |
| `contenteditable` | Keyword | `true` or empty, `false`, `plaintext-only` |
| `draggable` | Keyword | `true`, `false` (empty isn't allowed) |
| `spellcheck` | Keyword | `true` or empty, `false` |
| `translate` | Keyword | `yes` or empty, `no` |
| `autocapitalize` | Keyword | `none`/`off`, `sentences`/`on`, `words`, `characters` |
| `dir` | Keyword | `ltr`, `rtl`, `auto` |
| `aria-hidden` | ARIA (text) | `true`, `false` |
| `inert`, `autofocus`, `itemscope` | **Yes/no** | there = on |

> 🔍 **Don't mix up:** `disabled="false"` still disables. `contenteditable="false"` really does stop editing. `translate="false"` is **not valid** — it's `yes` or `no`. Check which kind an attribute is before you give it a value.

## 2. Every global attribute

### Names and style

| Attribute | What it's for | Notes |
|---|---|---|
| `id` | A unique name | Only once per page, no spaces. Starting with a number is allowed in HTML, but CSS then needs a strange escape (`#\31 23`). Elements with an `id` also appear as variables on `window` — never rely on that. |
| `class` | A list of class names with spaces between | Capitals matter |
| `style` | CSS on this one tag | Lesson 14; blocked by strict security policies |
| `data-*` | Your own data | All lowercase, at least one letter after `data-` |

### Language and text

| Attribute | What it's for |
|---|---|
| `lang` | The language of what's inside (section 4) |
| `dir` | Which way the text runs (section 5) |
| `translate` | `no` = don't let translation tools change this (section 6) |

### Clicking, typing and focus

| Attribute | What it's for | Notes |
|---|---|---|
| `tabindex` | Whether Tab can reach it | Only use `0` and `-1` (Lesson 12) |
| `autofocus` | Put focus here when the page or dialog opens | Once per page or dialog. It can confuse screen reader users — use it rarely |
| `accesskey` | A keyboard shortcut | ⚠ Clashes with browser and screen reader shortcuts, the keys you press differ on each system, and people can't see it. Best avoided. |
| `inert` | Switch part of the page off | Lesson 15 |
| `hidden` | Hide | Lesson 15 |
| `popover` | Make a popover | Lesson 15 |
| `contenteditable` | Let people edit the text | Edits aren't sent with forms — you need JavaScript to save them. If it acts as a field, give it a label and a role. |
| `draggable` | Allow drag and drop | Links and pictures can be dragged anyway |

### Typing hints (on things you can type into)

| Attribute | Lesson |
|---|---|
| `inputmode`, `enterkeyhint`, `autocapitalize`, `spellcheck` | 11 |
| `autocorrect` (`on`/`off`), `writingsuggestions` (`true`/`false`, turns the browser's writing suggestions on or off) | Newer; not every browser has them |

### Extra information

| Attribute | What it's for |
|---|---|
| `title` | Extra text, usually a tooltip when you hover |

> ❗ **Exception — `title` doesn't help accessibility.** Tooltips don't show on touch screens. Keyboards usually can't reach them (except on things you can focus, in some browsers). Screen readers read them inconsistently. Never put anything important only in `title`. Good uses: `<abbr title>`, `<iframe title>`, `<link rel="alternate stylesheet" title>`, and `title` on `<input pattern>` (it's shown in the error message).

### Structured data (microdata)

`itemscope`, `itemtype`, `itemprop`, `itemid`, `itemref` — see Lesson 13.

### Your own tags (web components)

| Attribute | What it's for | Lesson |
|---|---|---|
| `slot` | Puts content into a named slot inside a component | 17 |
| `part`, `exportparts` | Lets outside CSS style parts inside a component | 17 |
| `is` | Upgrades a normal tag into your own version | 17 |

### Security

| Attribute | What it's for | Lesson |
|---|---|---|
| `nonce` | Lets one particular script or style run under a security policy | 19 |

### Event attributes

`onclick`, `oninput`, `onsubmit`, … — all allowed, but use `addEventListener` instead (Lesson 14).

## 3. Letters and symbols: the character set

```html
<meta charset="UTF-8">
```

**UTF-8** can store every letter and symbol there is: ₦, ẹ, ọ, ṣ, ñ, ü, العربية, 中文, emoji. It's the only one you should use. The tag must be in the first 1024 bytes of the file.

> ⚠️ **Exception:** The `<meta>` must match how the file was **really saved**. If your editor saves as Windows-1252 but you say UTF-8, letters like `é` or `₦` turn into junk like `Ã©` or `â‚¦` (this junk is called **mojibake**). Check the encoding in your editor's status bar (VS Code: bottom right). Also, if the server sends a `Content-Type` header, that beats the meta tag.

Entities (`&amp;`, `&lt;`, `&copy;`) are for characters that **mean something special** in HTML, or are hard to type. They don't replace UTF-8.

## 4. Language: `lang`

```html
<html lang="en-NG">
…
<p>She greeted us with <span lang="yo">Ẹ kú àárọ̀</span>, which means "good morning".</p>
<blockquote lang="fr"><p>Liberté, égalité, fraternité.</p></blockquote>
```

`lang` changes:

- **How screen readers say words.** With the wrong language, French gets read with English sounds. (Accessibility rules: WCAG 3.1.1 for the page, 3.1.2 for parts of it.)
- Word breaking (`hyphens: auto`), the quote marks `<q>` uses, and the font for some writing systems.
- Spell checkers, translation tools, and how search engines guess your language.

### Language codes

Codes follow a standard called **BCP 47**: `language[-script][-region]`

| Code | Means |
|---|---|
| `en` | English |
| `en-GB`, `en-US`, `en-NG` | English as used in the UK, the US, Nigeria |
| `yo`, `ig`, `ha` | Yoruba, Igbo, Hausa |
| `pcm` | Nigerian Pidgin |
| `fr-CA` | French (Canada) |
| `zh-Hans`, `zh-Hant` | Chinese, simplified or traditional writing |
| `ha-Arab` | Hausa written in Arabic letters (Ajami) |

> 🔍 **Don't mix up:**
> - Use the shortest code that does the job. `en` is usually better than `en-US`, unless the regional kind of English matters.
> - Language codes aren't country codes. `en-UK` is **wrong** (the UK's code is `GB`), and `ng` isn't a language.
> - `lang` is about **the language of the text**, not where readers live or who it's for. For translated versions of a page, use `hreflang` (Lesson 13).
> - Capitals don't matter (`en-gb` = `en-GB`), but people usually write the language small and the region in capitals.

`lang=""` means "language unknown".

## 5. Direction: `dir`, `<bdi>` and `<bdo>`

Arabic, Hebrew, Persian, Urdu and Ajami are written **right to left** (RTL).

```html
<html lang="ar" dir="rtl">
```

Put `dir` on `<html>` for right-to-left pages — **not** CSS `direction`. Direction is part of what the text means, so it belongs in the HTML (and CSS might not load).

| Tool | Use it when |
|---|---|
| `dir="rtl"` or `dir="ltr"` | You know which way a block or phrase runs |
| `dir="auto"` | You don't know in advance (things users type). The browser looks at the first proper letter. |
| `<bdi>` | **Fence off** text of unknown direction inside a line, so it doesn't jumble the text around it — usernames, product names from a database |
| `<bdo dir="rtl">` | **Force** a direction, ignoring the browser's normal rules. Rarely needed. |

```html
<!-- Without bdi, an Arabic username can drag the ": 3 posts" to the wrong side -->
<li><bdi>إيان</bdi>: 3 posts</li>
<li><bdi>Chiamaka</bdi>: 5 posts</li>
```

> 💡 **Tip:** For right-to-left layouts, use CSS **logical properties** (`margin-inline-start`, `padding-inline-end`) instead of `left` and `right`. They flip by themselves when `dir` changes.

Inputs and textareas can also take `dir="auto"`. Add `dirname` to send the text direction along with the value (`<input name="comment" dirname="comment.dir">`).

## 6. `translate="no"`

Translation built into browsers (Chrome, Edge, Safari) and services like Google Translate obey it.

```html
<p>Install <code translate="no">html-validate</code> and run it on <span translate="no">html-cracker</span>.</p>
```

Use it on brand names, code, usernames and addresses. Most translation tools already skip `<code>`, but saying it clearly is safer.

## 7. Dates, numbers and money

HTML doesn't change these to suit each country. What you can do:

- Write them for your readers in the visible text: `₦12,500`, `14 October 2026`.
- Give computers a standard version: `<time datetime="2026-10-14">14 October 2026</time>`, `<data value="12500">₦12,500</data>`.
- Format them in JavaScript with `Intl.DateTimeFormat` or `Intl.NumberFormat` when you need to.

Note: `<input type="date">` shows the date the way the **visitor's** country writes dates, but always sends `YYYY-MM-DD` (Lesson 11).

## 8. Two small helpers for text: `ruby` and `wbr`

**`<ruby>`** puts a small pronunciation guide above (or beside) the main text. It's used a lot in Japanese and Chinese, and works for any language. The full explanation is in [Lesson 3](../03-text-content/deep-dive.md).

```html
<ruby>漢<rp>(</rp><rt>kan</rt><rp>)</rp>字<rp>(</rp><rt>ji</rt><rp>)</rp></ruby>
```

**`<wbr>`** marks a spot where the browser *may* break a long word or address onto the next line, if it needs to. Nothing shows if it doesn't. Handy for long web addresses and long German-style compound words on small screens.

```html
<p>Visit www.lagos<wbr>state<wbr>government<wbr>services.example</p>
```

> 🔍 **Don't mix up — `<wbr>`, `&shy;` and `<br>`.** `<wbr>` = "you may break here", with no hyphen. `&shy;` (soft hyphen) = "you may break here, and show a hyphen if you do". `<br>` = "always break here".

---

## Mistakes people make

- `disabled="false"` or `hidden="false"`, expecting the opposite.
- `<html>` with no `lang`, or `lang="en"` on a French page.
- `lang="en-UK"`.
- Right-to-left set only with CSS `direction`.
- Important information only in `title`.
- `accesskey` shortcuts that clash with screen readers.
- Saving files in something other than UTF-8.

## Quick quiz

<details>
<summary>1. How do you switch <code>&lt;button disabled&gt;</code> back on in HTML?</summary>

Remove the attribute. Any value — even `"false"` — keeps it disabled.
</details>

<details>
<summary>2. Which accessibility rules (WCAG) cover <code>lang</code>?</summary>

3.1.1 Language of Page (level A) and 3.1.2 Language of Parts (level AA).
</details>

<details>
<summary>3. A comments list shows usernames in many writing systems. How do you stop the line getting jumbled?</summary>

Wrap each username in `<bdi>` (or use `dir="auto"` on the element around it).
</details>

<details>
<summary>4. Your page shows <code>â‚¦</code> instead of <code>₦</code>. What's the likely cause?</summary>

The file was saved in one encoding and read as another (UTF-8 read as Windows-1252, or the other way round). Check how the file was saved, `<meta charset>`, and the server's `Content-Type`.
</details>

## Practice

- 💻 Example: [i18n.html](examples/i18n.html)
- ✏️ [Drills for this lesson](../../exercises/drills/16-global-attributes-and-i18n.md)
- 📄 Cheat sheet: [global-attributes.md](../../assets/cheatsheets/global-attributes.md)

## Read more

| Where | What you get |
|---|---|
| MDN | [Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes) · [lang](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/lang) · [dir](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/dir) — the full list, with browser support |
| W3C Internationalization | [Language tags in HTML](https://www.w3.org/International/articles/language-tags/) · [Structural markup and right-to-left text](https://www.w3.org/International/questions/qa-html-dir) · [Choosing a language tag](https://www.w3.org/International/questions/qa-choosing-language-tags) — the experts on languages |
| W3Schools | [Global attributes](https://www.w3schools.com/tags/ref_standardattributes.asp) · [Language codes](https://www.w3schools.com/tags/ref_language_codes.asp) — quick look-ups |

**Back to:** [the easy lesson](README.md) · **Next easy lesson:** [Lesson 17 · Make your own tags](../17-web-components-and-templates/README.md)
