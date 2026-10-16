# Lesson 7 · Video, audio and embeds — the full version

📘 **This is the full version.** New to this? Read the [easy lesson](README.md) first, then come back for the details.

⏱ 3–4 hours · 🌱 Beginner · 🧰 You need: Lesson 6

> ❗ **Use a local server for this lesson** (see [how to open pages](../../GUIDE.md#46-opening-pages-double-click-vs-a-local-server)). Chrome won't load caption files if you just double-click the HTML file.

## By the end you can

- Add audio and video with sensible settings and a backup plan.
- Offer more than one file type, and explain how the browser picks.
- Add captions, subtitles and chapters — and say how they differ.
- Explain why autoplay often "doesn't work".
- Put other websites (YouTube, maps) inside your page safely, with `<iframe>`.

---

## 1. `<audio>` and `<video>`

```html
<audio controls preload="metadata">
  <source src="media/interview.mp3" type="audio/mpeg">
  <source src="media/interview.ogg" type="audio/ogg">
  <p>Your browser can't play this audio. <a href="media/interview.mp3">Download the MP3</a>.</p>
</audio>

<video controls width="640" height="360" poster="images/video-poster.jpg" preload="metadata">
  <source src="media/demo.webm" type="video/webm">
  <source src="media/demo.mp4" type="video/mp4">
  <track kind="captions" src="media/demo-en.vtt" srclang="en" label="English" default>
  <p>Your browser can't play this video. <a href="media/demo.mp4">Download it</a>.</p>
</video>
```

| Attribute | On | What it does |
|---|---|---|
| `controls` | both | Shows play, pause and volume buttons. Without it, people can't play anything unless you build buttons yourself. |
| `autoplay` | both | *Asks* to start by itself (section 3) |
| `muted` | both | Starts with no sound |
| `loop` | both | Starts again at the end |
| `preload` | both | How much to load early: `none`, `metadata` (just the length and size) or `auto`. Each browser has its own default. |
| `src` | both | One file (instead of `<source>` lines) |
| `poster` | video | A picture shown before it plays |
| `width`, `height` | video | Its size; saves space on the page |
| `playsinline` | video | On iPhone, play inside the page instead of going full screen |
| `crossorigin` | both | Needed when the files come from another site that allows sharing (called CORS) |

> 📝 The words inside `<audio>`/`<video>` (apart from `<source>` and `<track>`) only show in browsers that **don't know the tag at all**. They don't show when a file type isn't supported. Every modern browser knows these tags, so the backup rarely shows. A download link is still a good habit.

## 2. File types, and how the browser picks

The browser goes down the `<source>` lines **in order** and plays the first one it can. The `type` lets it skip ones it can't play **without downloading** them.

| File type | What's inside | Works in |
|---|---|---|
| **MP4** (`video/mp4`) | H.264 video + AAC sound | Everything — the safe backup |
| **WebM** (`video/webm`) | VP9 or AV1 video + Opus sound | All current major browsers; usually smaller |
| **MP3** (`audio/mpeg`) | MP3 sound | Everything |
| **Ogg** (`audio/ogg`) | Opus or Vorbis sound | Most browsers; check MDN for older Safari |

```html
<source src="clip.webm" type='video/webm; codecs="vp9, opus"'>
```

> 💡 **Tip:** Put the **smaller** file type first (WebM) and the **works-everywhere** one last (MP4). Browsers that can't play the first just move on to the next.

> ⚠️ **Exception:** `<source>` never closes — no `</source>`. And if `<video>` has its own `src`, the `<source>` lines are ignored.

## 3. Autoplay: why it "doesn't work"

Browsers block autoplay **with sound**, so people aren't blasted with noise or charged for data they didn't want.

| Situation | Usually |
|---|---|
| `autoplay muted` (no sound) | Allowed |
| `autoplay` with sound, before the user has clicked anything | **Blocked** |
| After the user has clicked around the site | Often allowed. Each browser has its own rules, and it depends on how the user has used the site before |

> ⚠️ **Exception:** `autoplay` is a **request, never a promise**. Make sure your page still works if the video doesn't start. For a background video, use `autoplay muted loop playsinline` — and still give people a pause button. The accessibility rules (WCAG 2.2.2) say anything moving for more than 5 seconds needs a way to pause it.

> ❗ Never autoplay sound. People using screen readers will hear your audio on top of their screen reader talking.

## 4. Captions, subtitles and other tracks

```html
<track kind="captions" src="demo-en.vtt" srclang="en" label="English" default>
<track kind="subtitles" src="demo-fr.vtt" srclang="fr" label="Français">
<track kind="chapters" src="demo-chapters.vtt" srclang="en" label="Chapters">
```

| `kind` | Who it's for | What's in it |
|---|---|---|
| `subtitles` (the default) | People who **can hear** but don't speak the language | The words, translated |
| `captions` | People who are **deaf or hard of hearing** | The words **plus** important sounds: [door slams], [music fades], who is speaking |
| `descriptions` | People who are **blind or partly sighted** | Descriptions of what's on screen, read by a screen reader |
| `chapters` | Everyone | Chapter names to jump between |
| `metadata` | JavaScript | Data for your scripts; never shown |

| Attribute | What it does |
|---|---|
| `src` | The `.vtt` file |
| `srclang` | The track's language. **Required for `subtitles`.** |
| `label` | The name people see in the menu |
| `default` | Switch this track on, unless the user's settings say otherwise (one per kind) |

> 🔍 **Don't mix up — captions and subtitles.** They're not the same thing. A Yorùbá film with English text for English speakers needs **subtitles**. An English video for a deaf viewer needs **captions**, with the sounds included. The accessibility rules (WCAG 1.2.2, Level A) require captions on recorded videos that have sound.

### The caption file (WebVTT)

```
WEBVTT

00:00:00.000 --> 00:00:02.500
[Upbeat music]

00:00:02.500 --> 00:00:05.000
NARRATOR: Welcome to html-cracker.
```

- The first line must say `WEBVTT`. Then come **cues**, separated by blank lines. Each cue has a time line (`start --> end`) and the words.
- Servers should send it labelled as `text/vtt`.

> ⚠️ **Exceptions:**
> - Chrome **won't load `<track>` files when you double-click the page** (`file://`). Tracks from another site also need that site's permission (CORS) **and** the `crossorigin` attribute on `<video>`. Use a local server.
> - `<audio>` can have `<track>` lines, but browsers **don't show** them. For audio, write a **transcript** (WCAG 1.2.1) on the page or on a linked page.

## 5. `<iframe>`: a page inside your page

An `<iframe>` is a window that shows **a whole other web page** inside yours.

```html
<iframe
  src="https://www.youtube-nocookie.com/embed/VIDEO_ID"
  title="Video: Semantic HTML in 5 minutes"
  width="560" height="315"
  loading="lazy"
  allow="encrypted-media; picture-in-picture; fullscreen"
  referrerpolicy="strict-origin-when-cross-origin">
</iframe>
```

| Attribute | What it does |
|---|---|
| `src` | The page to show |
| `srcdoc` | HTML written right here, shown instead of `src` |
| `title` | **The frame's name.** Screen readers say it. Always add one. |
| `width`, `height` | Size (300×150 if you don't say) |
| `loading` | `lazy` waits until the user scrolls near it (works everywhere since 2023) |
| `sandbox` | Adds **restrictions** (section 6) |
| `allow` | Which features the frame may use: `fullscreen`, `camera`, `geolocation`, `autoplay`… |
| `allowfullscreen` | The old way of writing `allow="fullscreen"` |
| `referrerpolicy` | How much to tell the other site about your page |
| `name` | Lets links and forms open inside it (`target="name"`) |

> 💡 **Tip:** `youtube-nocookie.com` is YouTube's more private way to embed videos. For maps, copy the embed code from the map site, then **add a `title`** — they often leave it out.

## 6. `sandbox`: locking the frame down

An empty `sandbox` switches on **every** restriction: no scripts, no forms, no pop-ups, no leaving the frame, and the page is treated as coming from nowhere. Add words to allow certain things back:

```html
<iframe src="widget.html" sandbox="allow-scripts allow-forms" title="Feedback widget"></iframe>
```

Common words: `allow-scripts`, `allow-forms`, `allow-popups`, `allow-same-origin`, `allow-modals`, `allow-downloads`, `allow-top-navigation-by-user-activation`.

> ❗ **Never use `allow-scripts` and `allow-same-origin` together for a page from your own site.** The framed page could use a script to remove its own sandbox. That pair is only safe for pages from a *different* site.

## 7. Why some sites won't show in a frame

You embed a site and get a blank box, or "refused to connect". That's not your HTML. The site sends a message (a **header**) saying "don't put me in a frame":

- `X-Frame-Options: DENY` or `SAMEORIGIN`, or
- `Content-Security-Policy: frame-ancestors 'self'`

This protects against a trick called **clickjacking** (Lesson 19). Banks, Google Search, GitHub and most login pages do this. You can't change it from your side. Use the site's official embed link if it has one, or just link to it.

## 8. `<embed>` and `<object>`

Both come from the **plug-in days** (Flash, Java applets). Browsers have dropped plug-ins. Flash officially ended on 31 December 2020.

```html
<object data="files/brochure.pdf" type="application/pdf" width="800" height="600">
  <p>Can't show the PDF. <a href="files/brochure.pdf">Download the brochure (PDF, 1.2 MB)</a>.</p>
</object>
```

- `<object>` can have a backup message inside. `<embed>` never closes, so it can't.
- Today they're mostly used to show PDFs — and phone browsers often won't show PDFs inside a page anyway.

> 💡 **Tip:** For documents, a **plain download link** with the type and size usually works best for everyone. For video and audio, always use `<video>` and `<audio>`. For other web pages, use `<iframe>`.

> 📝 `<param>` (used with `<object>`) is on its way out. `<applet>` is gone.

> 📝 **`<fencedframe>`** is a newer tag that only Chrome-type browsers have. It's for showing ads privately: unlike an iframe, the ad and your page can't share information. You won't write it on normal sites, but you may see it in advertising code.

---

## Mistakes people make

- Forgetting `controls`.
- Autoplaying sound, or counting on autoplay at all.
- Putting MP4 first when a smaller WebM exists (or having no MP4 backup).
- Calling captions "subtitles" and leaving out the sounds.
- An `<iframe>` with no `title`.
- Testing caption files by double-clicking, and thinking they're broken.
- `sandbox="allow-scripts allow-same-origin"` on a page from your own site.

## Quick quiz

<details>
<summary>1. A background video won't start by itself. What fixes it in most browsers?</summary>

`autoplay muted loop playsinline`. Silent autoplay is usually allowed; `playsinline` is for iPhone. Add a pause button too.
</details>

<details>
<summary>2. What's the difference between <code>kind="captions"</code> and <code>kind="subtitles"</code>?</summary>

Captions are for people who can't hear: the words plus important sounds. Subtitles are a translation for people who can hear.
</details>

<details>
<summary>3. The site you embedded says "refused to connect". Can you fix it in your HTML?</summary>

No. The site blocks frames with `X-Frame-Options` or `frame-ancestors`. Link to it, or use its official embed link.
</details>

<details>
<summary>4. When do the words inside <code>&lt;video&gt;</code> (not the sources or tracks) show?</summary>

Only in browsers that don't know `<video>` at all. Not when the file type isn't supported.
</details>

<details>
<summary>5. Why must an iframe have a <code>title</code>?</summary>

It's the frame's name. Screen-reader users hear it when they reach the frame, and decide whether to go in.
</details>

## Practice

- 💻 Example: [media.html](examples/media.html) (open it with a local server)
- ✏️ [Drills for this lesson](../../exercises/drills/07-audio-video-and-embeds.md)
- 🔧 Fix this: [05-images-media.broken.html](../../exercises/debug/05-images-media.broken.html)

## Read more

| Where | What you get |
|---|---|
| MDN | [HTML video and audio](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) · [From object to iframe](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/General_embedding_technologies) — the main explanation, captions included |
| MDN | [Autoplay guide](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Autoplay) · [Media formats](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats) · [WebVTT](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API) · [iframe reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe) — all the details |
| freeCodeCamp | [Build an HTML Audio and Video Player](https://www.freecodecamp.org/learn/responsive-web-design-v9/lab-html-audio-and-video-player/build-an-html-audio-and-video-player) · [Build a Video Compilation Page](https://www.freecodecamp.org/learn/responsive-web-design-v9/lab-video-compilation-page/build-a-video-compilation-page) — the best practice for this topic |
| W3Schools | [Media](https://www.w3schools.com/html/html_media.asp) · [Video](https://www.w3schools.com/html/html5_video.asp) · [Audio](https://www.w3schools.com/html/html5_audio.asp) · [YouTube](https://www.w3schools.com/html/html_youtube.asp) · [Iframes](https://www.w3schools.com/html/html_iframe.asp) · [Plug-ins](https://www.w3schools.com/html/html_object.asp) — quick look-ups |
| MDN challenge | [Creepy-crawly splash page](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Splash_page) — pictures and video together |

**Back to:** [the easy lesson](README.md) · **Next easy lesson:** [Lesson 8 · Page layout tags](../08-semantic-html-and-page-structure/README.md)
