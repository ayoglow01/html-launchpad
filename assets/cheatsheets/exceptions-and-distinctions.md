# Exceptions and "don't mix up" pairs 🔍

HTML's rules are simple. The exceptions are where bugs (and interview questions) hide. This page collects the important ones from every lesson. Each heading links to the lesson that explains them in full.

## Syntax and structure ([Lesson 2](../../curriculum/02-html-syntax-and-document-structure/deep-dive.md))

| The rule | The exception |
|---|---|
| Every tag needs a closing tag | **Empty (void) tags** never have one: `br`, `img`, `input`, `meta`, `link`, `hr`, `source`, `track`, `wbr`, `area`, `base`, `col`, `embed` |
| `<x />` closes a tag | Only on empty tags, and even there the slash does nothing. `<div />` and `<my-el />` are still **open** |
| Some closing tags are optional (`</p>`, `</li>`, `</td>`) | Allowed — but write them. Letting the browser close them causes surprises |
| `<script src>` "has nothing inside" | It still needs `</script>` |
| Capitals don't matter in HTML | They **do** matter in attribute values: class names, ids, and file paths on Linux servers |
| Extra spaces get squashed into one | Except inside `<pre>`, `<textarea>`, and with CSS `white-space` |
| Comments hide things | They're still sent to every visitor — never put secrets in them |

## Text ([Lesson 3](../../curriculum/03-text-content/deep-dive.md))

| Pair | The difference |
|---|---|
| `strong` vs `b` | Important vs just set apart visually |
| `em` vs `i` | Stress that changes the meaning vs a different voice (terms, foreign words, ship names) |
| `del` vs `s` | Removed in an edit vs no longer true |
| `cite` | The title of a **work** — not a person's name |
| `q` vs `blockquote` | Inside a line vs a block of its own. `q` adds the quote marks for you |
| `small` | Fine print and side notes — not "make the text smaller" |
| `address` | Contact details for the page or article — not just any postal address |
| `<br>` | Line breaks that are part of the content (addresses, poems), not for spacing |

## Lists ([Lesson 4](../../curriculum/04-lists/deep-dive.md))

| The rule | The exception |
|---|---|
| Don't repeat a tag's role with ARIA | Add `role="list"` to a `ul`/`ol` styled with `list-style: none`, because Safari stops treating it as a list |
| `ul`/`ol` only hold `li` | `script` and `template` are allowed too. A list inside a list goes **inside** an `li` |

## Links and paths ([Lesson 5](../../curriculum/05-links-urls-and-paths/deep-dive.md))

| The rule | The exception |
|---|---|
| Paths starting with `/` (`/img/a.png`) work everywhere | Not on double-clicked files (`file://`), and not on GitHub Pages project sites |
| `download` saves the file | Only for files from your own site (or `blob:`/`data:` addresses) |
| You need `rel="noopener"` with `_blank` | Modern browsers add it for you. Writing it is clear and does no harm |
| Link vs button | A link goes somewhere; a button does something. `href="#"` + `onclick` is a button in disguise |
| `<a>` holds text | It can wrap blocks too — but never other clickable things |

## Images and media ([Lesson 6](../../curriculum/06-images-and-graphics/deep-dive.md), [Lesson 7](../../curriculum/07-audio-video-and-embeds/deep-dive.md))

| The rule | The exception |
|---|---|
| Every picture needs alt text | Decorative pictures need an **empty** `alt=""` — not a missing one |
| `alt` describes the picture | For a picture that's a **link**, say where it goes or what it does |
| `figcaption` vs `alt` | A caption is for everyone to see. `alt` replaces the picture when it can't be seen. Don't repeat one in the other |
| `loading="lazy"` speeds pages up | Never on the main (LCP) picture at the top |
| Autoplay | Only allowed when `muted` (+ `playsinline` on iPhone). Add a pause button if it runs longer than 5 seconds |
| `captions` vs `subtitles` | Captions include sounds, for Deaf viewers. Subtitles translate what people say |
| `sandbox` makes iframes safe | `allow-scripts` + `allow-same-origin` on content from your own site lets the frame remove its own sandbox |

## Page layout tags ([Lesson 8](../../curriculum/08-semantic-html-and-page-structure/deep-dive.md))

| The rule | The exception |
|---|---|
| `header` and `footer` are landmarks | Only when they're not inside `article`, `aside`, `main`, `nav` or `section` |
| `section` is a region landmark | Only when it has a name (an accessible name) |
| Each `section` can start again at `h1` | **No.** That idea (the outline algorithm) was never built by browsers, and it was removed |
| `article` vs `section` | Makes sense on its own (could be shared alone) vs one part of something bigger |
| Only one `main` | Others are allowed only if they're `hidden` |

## Tables ([Lesson 9](../../curriculum/09-tables/deep-dive.md))

| The rule | The exception |
|---|---|
| No tables for layout | HTML emails still use them — add `role="presentation"` |
| `table > tr` picks the rows | The browser adds a `tbody`, so that selector won't match |
| `col` styles a whole column | Only `background`, `border`, `width` and `visibility` |
| `th` vs a bold `td` | Only `th` is read out as a header |

## Forms ([Lesson 10](../../curriculum/10-forms-fundamentals/deep-dive.md), [Lesson 11](../../curriculum/11-input-types-and-validation/deep-dive.md))

| The rule | The exception |
|---|---|
| Every field gets sent | Not without a `name`, not when `disabled`, not unticked checkboxes or radios |
| `readonly` vs `disabled` | Read-only: can be focused, and gets sent. Disabled: neither |
| A checkbox's value | `on`, if you didn't give it a `value` |
| A `button`'s default type | `submit`, inside a form |
| `required` on a `select` | Only works if the first option has `value=""` |
| `placeholder` | It's not a label |
| Rules check what people type | Not when the box is empty (unless it's `required`) |
| `pattern` | Must match the whole value; modern browsers use the `v` flag |
| `type="number"` | Wrong for ID numbers (phone, card, BVN, postcode) |
| Checking in the browser | Only for convenience — the server must check too |

## Making pages work for everyone ([Lesson 12](../../curriculum/12-accessibility-and-aria/deep-dive.md))

| The rule | The exception |
|---|---|
| ARIA makes pages more accessible | Bad ARIA is worse than none. Use real HTML first |
| `aria-label` can name anything | Not plain `div`s and `span`s with no role |
| `aria-hidden="true"` hides things | Never on things you can focus |
| Live regions announce changes | Only if they're on the page **before** the change |
| `tabindex` | Only `0` and `-1`. Positive numbers mess up the order |
| Accessible name | Must include the words people can see on the label ("Label in Name") |
| `title` attribute | Not a reliable name or tooltip |

## The head and Google ([Lesson 13](../../curriculum/13-head-metadata-seo-and-social/deep-dive.md))

| The rule | The exception |
|---|---|
| robots.txt keeps pages off Google | It stops **visiting**, not listing — and it hides your `noindex` |
| Canonical picks the address Google shows | A strong hint, not an order |
| `meta description` is the text under your title | Google may write its own |
| `<base>` sets the starting point for paths | It changes `#` links too |
| Open Graph | Uses `property`, not `name`. `og:image` must be a full address |
| `meta keywords` | Ignored for ranking |

## CSS and JavaScript ([Lesson 14](../../curriculum/14-html-with-css-and-javascript/deep-dive.md))

| The rule | The exception |
|---|---|
| CSS in the head beats CSS in a file | A myth. With equal specificity, the later rule wins |
| `defer` / `async` | Do nothing on normal scripts written inside the page. Module scripts inside the page are deferred anyway |
| Module scripts | Need a server (CORS). They don't work by double-clicking (`file://`) |
| Attribute vs property | `getAttribute("value")` = the starting value. `.value` = what's there now |
| `dataset` | Always text |

## Pop-ups, accordions and menus ([Lesson 15](../../curriculum/15-interactive-elements/deep-dive.md))

| The rule | The exception |
|---|---|
| The `open` attribute shows a dialog | Only as non-modal. Use `showModal()` for a modal |
| Popover vs modal dialog | Popovers never switch off the rest of the page |
| `hidden` hides things | A CSS `display` rule on the element beats it |
| `command`/`commandfor` buttons | In all main browsers only since 2025 — older ones need a backup |

## Attributes for every tag, and other languages ([Lesson 16](../../curriculum/16-global-attributes-and-internationalization/deep-dive.md))

| The rule | The exception |
|---|---|
| `attr="false"` switches it off | Only for keyword attributes. Yes/no ones stay **on** |
| `translate` | `yes`/`no`, not `true`/`false` |
| `lang` | The language of the text — not where people live. `en-UK` is wrong (`en-GB`) |
| Right-to-left text | Set `dir` in the HTML, not only CSS `direction` |
| `<meta charset>` | Must match how the file was really saved. The server's header wins |

## Your own tags and browser tools ([Lesson 17](../../curriculum/17-web-components-and-templates/deep-dive.md), [Lesson 18](../../curriculum/18-html5-apis-and-canvas/deep-dive.md))

| The rule | The exception |
|---|---|
| Your own tag names | Must have a dash, and never close themselves |
| Slotted content | Stays in the light DOM; it's only *shown* inside the shadow |
| `<label for>` | Can't reach through a shadow DOM wall |
| Upgraded built-in tags (`is`) | Don't work in Safari |
| Canvas `width`/`height` | Attributes = how many pixels you draw on. CSS = how big it looks |
| `localStorage` | Text only; never secrets |
| Powerful features | Need a secure page (HTTPS or localhost) |

## Staying safe and fast pages ([Lesson 19](../../curriculum/19-security/deep-dive.md), [Lesson 20](../../curriculum/20-performance/deep-dive.md))

| The rule | The exception |
|---|---|
| CSP in a meta tag | Ignores `frame-ancestors`, `report-uri`/`report-to` and `sandbox`, and only covers what comes after it |
| Block `<script>` to stop XSS | Event attributes, `javascript:` addresses and SVG still run code |
| `integrity` (SRI) | Needs `crossorigin` and a fixed version number |
| Preloading fonts | Needs `crossorigin`, even from your own site |
| `fetchpriority` | A hint, compared with other files — not an order |
| Test scores (lab) | Real-visitor data (field) is what counts |
