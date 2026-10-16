# Helping with html-cracker

Thank you for helping! Here, getting it right matters more than adding lots.

## What we welcome

- **Fixes** — wrong facts, out-of-date browser-support notes, broken links.
- **Clearer wording** — a shorter or simpler way to say the same true thing.
- **Practice** — new drills, broken pages to fix, or challenges that target a real, common mistake.

## Rules for writing

1. **Show where the fact comes from.** For anything about how HTML behaves, link the [WHATWG HTML Standard](https://html.spec.whatwg.org/multipage/) (the official rules) or the right MDN page in your pull request.
2. **Browser-support notes need a date or a Baseline label** (for example "Baseline 2024", or "only in Chrome and Edge, as of 2026"). Support changes, so vague notes go stale.
3. **Keep both kinds of lesson in shape.**
   - **Easy lessons** (`README.md`) stay short: one sentence that sums it up, an everyday comparison, small examples, ⚠️ Careful, ✅ Remember, 🎯 Try it, Want more?
   - **Full versions** (`deep-dive.md`) follow the layout in [GUIDE §8](GUIDE.md#8-how-each-lesson-is-laid-out): By the end you can → numbered sections (what it is → example → why → ✅/❌) → Mistakes people make → Quick quiz → Practice → Read more.
   - Use the plain boxes: `> ⚠️ **Exception:**`, `> 🔍 **Don't mix up:**`, `> ❗`, `> 💡 **Tip:**`, `> 📝`. Don't use GitHub's `[!NOTE]` style.
4. **Every example must pass** the [Nu HTML Checker](https://validator.w3.org/nu/) — unless it lives in `exercises/debug/` (or ends in `.broken.html`) and says it's broken on purpose.
5. **Write like a person talking to a beginner.**
   - Short sentences. Say "you".
   - Explain any technical word the first time, in brackets.
   - Use everyday words: "make sure", not "ensure"; "important", not "crucial".
   - If a sentence doesn't teach anything, cut it.
6. Follow the code conventions in the [full guide](GUIDE.md#13-code-conventions-used-in-this-repo).

## How to send a change

```bash
git checkout -b fix/short-description
# make your changes
npx html-validate "**/*.html"   # files ending in .broken.html are skipped (see .htmlvalidateignore)
git commit -m "Fix sizes explanation in Lesson 6"
git push origin fix/short-description
```

Open a pull request. Say **what** you changed and **why**, with a link to your source.
