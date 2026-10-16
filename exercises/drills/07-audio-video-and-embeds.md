# Practice · Lesson 7 · Video, audio and embeds

📗 [Easy lesson](../../curriculum/07-audio-video-and-embeds/README.md) · 📘 [Full version](../../curriculum/07-audio-video-and-embeds/deep-dive.md)

💡 Try each task **before** opening the answer. If a task uses something new, you'll find it in the full version.

### D1 · Video with fallbacks
Video `lesson.webm` and `lesson.mp4`, poster `poster.jpg`, 640×360, English captions `captions-en.vtt`, controls, and a download link fallback.

<details>
<summary>Answer</summary>

```html
<video controls width="640" height="360" poster="poster.jpg" preload="metadata">
  <source src="lesson.webm" type="video/webm">
  <source src="lesson.mp4" type="video/mp4">
  <track kind="captions" src="captions-en.vtt" srclang="en" label="English" default>
  <p>Your browser can't play this video. <a href="lesson.mp4">Download the video</a>.</p>
</video>
```
</details>

### D2 · Captions vs subtitles vs descriptions
Explain each `kind`.

<details>
<summary>Answer</summary>

`captions`: dialogue **plus** sounds, for Deaf/hard-of-hearing viewers. `subtitles`: translation of dialogue, for people who hear but don't understand the language. `descriptions`: text description of visual content (for blind users). `chapters`: navigation. `metadata`: for scripts.
</details>

### D3 · Autoplay rules
Will `<video src="ad.mp4" autoplay>` autoplay in modern browsers? What makes it allowed?

<details>
<summary>Answer</summary>

Usually not with sound. `muted` (plus `playsinline` for iOS) allows autoplay. If it moves for more than 5 seconds, provide a pause control (WCAG 2.2.2).
</details>

### D4 · Audio
Podcast episode `ep1.mp3` with a transcript.

<details>
<summary>Answer</summary>

```html
<audio controls src="ep1.mp3">
  <a href="ep1.mp3">Download episode 1 (MP3)</a>
</audio>
<details>
  <summary>Transcript</summary>
  <p>…</p>
</details>
```
Audio-only content needs a transcript (WCAG 1.2.1).
</details>

### D5 · WebVTT
Write a minimal VTT file with one cue from 0 to 4 seconds: "Welcome to html-cracker."

<details>
<summary>Answer</summary>

```
WEBVTT

00:00:00.000 --> 00:00:04.000
Welcome to html-cracker.
```
Served as `text/vtt`. Tracks need same-origin or CORS (`crossorigin` on the media element).
</details>

### D6 · Embed a YouTube video
Accessibly, privacy-friendlier, lazily.

<details>
<summary>Answer</summary>

```html
<iframe src="https://www.youtube-nocookie.com/embed/VIDEO_ID"
        title="How DNS works (video)" width="560" height="315"
        loading="lazy" allowfullscreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerpolicy="strict-origin-when-cross-origin"></iframe>
```
`title` is required for accessibility.
</details>

### D7 · Sandbox
Embed untrusted `widget.html` allowing scripts but nothing else. What combination must you never use for same-origin content?

<details>
<summary>Answer</summary>

`<iframe src="widget.html" sandbox="allow-scripts" title="…">`. Never `allow-scripts allow-same-origin` together on same-origin content — the frame can remove its own sandbox.
</details>

### D8 · embed / object
When would you still use `<object>` or `<embed>`?

<details>
<summary>Answer</summary>

Rarely: e.g. embedding a PDF with `<object data="file.pdf" type="application/pdf">` plus a fallback link. Plugins (Flash, Java) are gone. Prefer `<iframe>`, `<video>`, `<img>`.
</details>
