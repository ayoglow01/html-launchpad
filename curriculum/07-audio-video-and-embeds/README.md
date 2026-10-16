# Lesson 7 · Video, audio and embeds

⏱ 30 minutes · 🧰 You need: Lesson 6

## In one sentence

`<video>` plays videos, `<audio>` plays sound, and `<iframe>` shows another website (like YouTube) inside your page.

## Video

```html
<video controls width="640" height="360" poster="cover.jpg">
  <source src="lesson.webm" type="video/webm">
  <source src="lesson.mp4" type="video/mp4">
  <track kind="captions" src="captions-en.vtt" srclang="en" label="English">
  <p>Your browser can't play this video. <a href="lesson.mp4">Download it</a>.</p>
</video>
```

What each part does:
- `controls` — shows play, pause, and volume buttons. **Always add it.**
- `poster` — the picture shown before pressing play.
- `<source>` — the video file. Give two types; the browser uses the first one it can play.
- `<track>` — captions (words on screen).
- The paragraph at the end — shown only if the video can't play.

## Audio

```html
<audio controls src="podcast.mp3">
  <a href="podcast.mp3">Download the podcast</a>
</audio>
```

## Captions and transcripts — for everyone 👂

- **Captions** — the words spoken (plus sounds like "[door slams]") shown on the video. Deaf people need them. Many others watch with sound off.
- **Transcript** — all the words written out under audio or video.

```html
<details>
  <summary>Read the transcript</summary>
  <p>Hello and welcome to episode one…</p>
</details>
```

## Why won't my video autoplay? 🤔

Browsers **block** videos that start by themselves **with sound**. It annoys people.

They only allow autoplay when the video is **muted**:

```html
<video autoplay muted loop playsinline src="background.mp4"></video>
```

If it moves for more than 5 seconds, add a pause button.

## Show YouTube or a map: `<iframe>`

An iframe is a **window** on your page that shows another page.

```html
<iframe
  src="https://www.youtube-nocookie.com/embed/VIDEO_ID"
  title="How to cook jollof rice"
  width="560" height="315"
  loading="lazy"
  allowfullscreen></iframe>
```

- `title` — tells screen-reader users what's inside. **Required.**
- `loading="lazy"` — loads only when someone scrolls near it.

On YouTube: click **Share → Embed** to get this code.

## ⚠️ Careful

- **Some sites refuse to be shown in an iframe** (banks, Google search). That's their choice for safety; you can't override it.
- **Iframes from strangers can be risky.** The `sandbox` attribute locks them down — see the full version.
- `<embed>` and `<object>` are old tags from the Flash days. You'll rarely need them.

## ✅ Remember

- Always add `controls`.
- Give captions for video and transcripts for audio.
- Autoplay only works when muted.
- Every `<iframe>` needs a `title`.

## 🎯 Try it

Use the sample files in [`assets/media/`](../../assets/media/) to add a video with controls and English captions to a page.

<details>
<summary>Check: what does <code>kind="subtitles"</code> mean compared to <code>kind="captions"</code>?</summary>

Subtitles **translate** the speech (for people who don't speak the language). Captions also describe **sounds** (for people who can't hear).
</details>

## Want more?

- 📖 The detailed version: [deep-dive.md](deep-dive.md)
- 💻 Example: [media.html](examples/media.html)
- 🌐 freeCodeCamp lab: [Build an HTML audio and video player](https://www.freecodecamp.org/learn/responsive-web-design-v9/lab-html-audio-and-video-player/build-an-html-audio-and-video-player)
- ✏️ Practice: [drills](../../exercises/drills/07-audio-video-and-embeds.md)

➡️ **Next:** [Lesson 8 · Page layout tags](../08-semantic-html-and-page-structure/README.md)
