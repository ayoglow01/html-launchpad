# Every HTML tag 🏷️

Every HTML tag in use today, grouped by what it's for, with the lesson that teaches it. **V** = empty (void) tag, with no closing tag. For every detail, see the [MDN element reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements).

## The page and its head

| Tag | What it's for | Lesson |
|---|---|---|
| `<html>` | Wraps the whole page; holds `lang` and `dir` | 2 |
| `<head>` | Holds information about the page | 2, 13 |
| `<title>` | The page's name (exactly one) | 2, 13 |
| `<base>` **V** | Starting point (and default target) for short paths | 13 |
| `<link>` **V** | Connects another file (CSS, icon…) | 13, 14, 20 |
| `<meta>` **V** | Page information (charset, viewport, description…) | 2, 13 |
| `<style>` | CSS written in the page | 14 |
| `<body>` | Everything people see | 2 |

## Page layout and landmarks

| Tag | What it's for | Lesson |
|---|---|---|
| `<header>` | The top part; the page's banner when it's not inside another section | 8 |
| `<nav>` | The main menus | 8 |
| `<main>` | The main content (one per page) | 8 |
| `<article>` | Something that makes sense on its own (post, card, comment) | 8 |
| `<section>` | One part of a page about one topic, usually with a heading | 8 |
| `<aside>` | Extra, side-related content | 8 |
| `<footer>` | The bottom part of the page or section | 8 |
| `<address>` | Contact details for the page or article | 3, 8 |
| `<h1>`–`<h6>` | Headings | 3 |
| `<hgroup>` | A heading plus its subtitle | 8 |
| `<search>` | A search or filter area | 8 |

## Blocks of text

| Tag | What it's for | Lesson |
|---|---|---|
| `<p>` | Paragraph | 3 |
| `<div>` | A plain box with no meaning | 3 |
| `<blockquote>` | A long quote | 3 |
| `<pre>` | Text that keeps its spaces and line breaks | 3 |
| `<hr>` **V** | A change of topic | 3 |
| `<ul>`, `<ol>`, `<li>` | Lists | 4 |
| `<dl>`, `<dt>`, `<dd>` | Description list | 4 |
| `<menu>` | A list of commands (means the same as `ul`) | 4 |
| `<figure>`, `<figcaption>` | A picture, chart or code with a caption | 6 |

## Words inside a line

| Tag | What it's for | Lesson |
|---|---|---|
| `<a>` | A link | 5 |
| `<em>` | Stress that changes the meaning | 3 |
| `<strong>` | Important | 3 |
| `<i>` | A different voice (terms, foreign words, ship names) | 3 |
| `<b>` | Set apart visually, but not more important | 3 |
| `<u>` | A non-text mark, such as a spelling mistake | 3 |
| `<s>` | No longer true | 3 |
| `<mark>` | Highlighted because it's relevant | 3 |
| `<small>` | Side notes and fine print | 3 |
| `<sub>`, `<sup>` | Lowered and raised text (H₂O, x²) | 3 |
| `<q>` | A short quote inside a line | 3 |
| `<cite>` | The title of a work (book, film, song) | 3 |
| `<abbr>` | A short form (like NDPA) | 3 |
| `<dfn>` | The place where a word is defined | 3 |
| `<time>` | A date or time, with a computer-friendly `datetime` | 3 |
| `<data>` | Content with a computer-friendly `value` | 3 |
| `<code>` | A bit of code | 3 |
| `<kbd>` | Keys to press | 3 |
| `<samp>` | What a program shows | 3 |
| `<var>` | A variable in maths or code | 3 |
| `<span>` | A plain inline box with no meaning | 3 |
| `<br>` **V** | Line break that's part of the content | 3 |
| `<wbr>` **V** | "You may break the line here" | 2 |
| `<bdi>` | Fences off text that may run the other way | 16 |
| `<bdo>` | Forces the text direction | 16 |
| `<ruby>`, `<rt>`, `<rp>` | Pronunciation guides (often for Japanese and Chinese) | 3 |

## Changes

| Tag | What it's for | Lesson |
|---|---|---|
| `<ins>` | Added text | 3 |
| `<del>` | Removed text | 3 |

## Pictures, sound and video

| Tag | What it's for | Lesson |
|---|---|---|
| `<img>` **V** | A picture | 6 |
| `<picture>` | Different crops or formats for different screens | 6 |
| `<source>` **V** | Another file choice for `picture`, `video`, `audio` | 6, 7 |
| `<map>`, `<area>` **V** | Clickable areas on a picture | 6 |
| `<svg>` | SVG drawings in the page | 6 |
| `<math>` | Maths | 6 |
| `<canvas>` | Drawing with JavaScript | 6, 18 |
| `<video>` | Video | 7 |
| `<audio>` | Audio | 7 |
| `<track>` **V** | Captions, subtitles, chapters | 7 |

## Content from somewhere else

| Tag | What it's for | Lesson |
|---|---|---|
| `<iframe>` | Another web page inside yours | 7 |
| `<embed>` **V** | Outside content (from the plugin days) | 7 |
| `<object>` | An outside file, with backup content | 7 |
| `<fencedframe>` | A private frame for ads (Chrome and Edge only) | 7 |

## Tables

| Tag | What it's for | Lesson |
|---|---|---|
| `<table>` | A table | 9 |
| `<caption>` | The table's title | 9 |
| `<colgroup>`, `<col>` **V** | Groups of columns | 9 |
| `<thead>`, `<tbody>`, `<tfoot>` | Groups of rows (head, body, foot) | 9 |
| `<tr>` | A row | 9 |
| `<th>` | A header cell | 9 |
| `<td>` | A data cell | 9 |

## Forms

| Tag | What it's for | Lesson |
|---|---|---|
| `<form>` | A form | 10 |
| `<label>` | The name of a field | 10 |
| `<input>` **V** | A field (22 types) | 10, 11 |
| `<button>` | A button | 10 |
| `<select>`, `<option>`, `<optgroup>` | A drop-down list | 10 |
| `<datalist>` | Suggestions for a field | 10 |
| `<textarea>` | A box for several lines of text | 10 |
| `<fieldset>`, `<legend>` | A group of fields with a title | 10 |
| `<output>` | The result of a calculation | 11 |
| `<progress>` | How far a task has got | 11 |
| `<meter>` | A measurement within a range (like battery level) | 11 |
| `<selectedcontent>` | Shows the chosen option in a customisable `<select>` (Chrome and Edge) | 10 |

## Open-and-close things

| Tag | What it's for | Lesson |
|---|---|---|
| `<details>`, `<summary>` | Show-and-hide section | 15 |
| `<dialog>` | A pop-up box | 15 |

## Scripts and your own tags

| Tag | What it's for | Lesson |
|---|---|---|
| `<script>` | JavaScript, or a block of data | 14 |
| `<noscript>` | Shown when JavaScript is off | 14 |
| `<template>` | HTML that sleeps until you copy it | 17 |
| `<slot>` | A gap to fill in a shadow DOM | 17 |

---

## Obsolete — never use

| Old tag | Use instead |
|---|---|
| `<font>`, `<center>`, `<big>`, `<tt>`, `<strike>` | CSS; `<s>` / `<del>` for strikethrough meaning |
| `<marquee>`, `<blink>` | Nothing (or CSS animation with reduced-motion support) |
| `<frame>`, `<frameset>`, `<noframes>` | `<iframe>` or normal pages |
| `<acronym>` | `<abbr>` |
| `<applet>` | Nothing — Java applets are gone |
| `<dir>` | `<ul>` |
| `<basefont>`, `<nobr>`, `<plaintext>`, `<xmp>`, `<listing>` | CSS, `<pre>` |
| `<param>` | Attributes on `<object>` |
| `<keygen>`, `<menuitem>`, `<image>`, `<rb>`, `<rtc>` | Taken out of HTML |
| `<portal>` | Was an experiment; taken out |
