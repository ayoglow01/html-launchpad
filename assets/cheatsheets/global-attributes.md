# Attributes for every tag 🧩

These attributes work on **every** HTML tag. They're taught in [Lesson 16](../../curriculum/16-global-attributes-and-internationalization/deep-dive.md), unless another lesson number is shown in brackets.

| Attribute | Kind | Values | Notes |
|---|---|---|---|
| `accesskey` | Keys | Single characters | Clashes with screen reader and browser shortcuts — best avoided |
| `autocapitalize` | Keyword | `none`/`off`, `sentences`/`on`, `words`, `characters` | Phone keyboards (11) |
| `autocorrect` | Keyword | `on`, `off` | Not in every browser |
| `autofocus` | **Yes/no** | — | Once per page or dialog; can confuse people |
| `class` | Word list | Names with spaces between | Capitals matter (14) |
| `contenteditable` | Keyword | `true`/empty, `false`, `plaintext-only` | Not sent with forms |
| `data-*` | Text | Any | `element.dataset` (14) |
| `dir` | Keyword | `ltr`, `rtl`, `auto` | Direction belongs in the HTML |
| `draggable` | Keyword | `true`, `false` | No empty value (18) |
| `enterkeyhint` | Keyword | `enter`, `done`, `go`, `next`, `previous`, `search`, `send` | (11) |
| `exportparts` | Name mapping | `part1, part2:alias` | Shadow DOM (17) |
| `hidden` | Keyword | empty/`hidden`, `until-found` | Any other value still hides it (15) |
| `id` | Text | Unique, no spaces | Also becomes a `window` variable — never rely on that |
| `inert` | **Yes/no** | — | (15) |
| `inputmode` | Keyword | `none`, `text`, `decimal`, `numeric`, `tel`, `search`, `email`, `url` | (11) |
| `is` | Text | Custom element name | Upgraded built-in tags; not in Safari (17) |
| `itemid`, `itemprop`, `itemref`, `itemscope`, `itemtype` | Microdata | — | `itemscope` is yes/no (13) |
| `lang` | Language code (BCP 47) | `en`, `en-NG`, `yo`, `ha-Arab`… | `""` = language unknown |
| `nonce` | Text | A new random value each time the page is sent | CSP (19) |
| `part` | Word list | Part names | Shadow DOM (17) |
| `popover` | Keyword | `auto`/empty, `manual`, `hint` | (15) |
| `slot` | Text | Slot name | (17) |
| `spellcheck` | Keyword | `true`/empty, `false` | |
| `style` | CSS | CSS rules | Blocked by strict security policies (14) |
| `tabindex` | Number | `0`, `-1` (avoid positive numbers) | (12) |
| `title` | Text | Extra information | Screen readers and touch screens can't rely on it |
| `translate` | Keyword | `yes`/empty, `no` | |
| `writingsuggestions` | Keyword | `true`/empty, `false` | Turns the browser's writing suggestions on or off; not in every browser |
| `on*` | Script | JavaScript for an event | Use `addEventListener` instead (14) |

ARIA attributes (`role`, `aria-*`) are also allowed on every tag, as long as you follow the rules of ARIA (12).

## Yes/no vs keyword — remember

```html
<input disabled="false">         <!-- DISABLED (and invalid) -->
<p contenteditable="false">      <!-- not editable -->
<span translate="false">         <!-- invalid: use translate="no" -->
```

Yes/no (boolean): if it's there, it's on. To switch it off, remove the attribute.
