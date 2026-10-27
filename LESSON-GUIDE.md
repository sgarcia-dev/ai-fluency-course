# What makes a lesson succeed

The standard every lesson in this course must meet. Written from Sergei's feedback on the first
samples (27 Oct 2026). Layout, files and commands are in [AGENTS.md](./AGENTS.md).

## The reader

Anyone from an older beginner still working out what an AI chat is, to an engineer running coding
agents. The quiz decides who reaches which lesson (see the lines in `src/preview/curriculum.json`),
so write for the people on that lesson's lines, but never assume jargon.

## The lesson

- **One idea**, said in the first two lines ("The one idea" box) and proven by everything after it.
- **Short:** 5 to 12 minutes. 3 to 8 sections of 1 to 3 short paragraphs. Section openers can be
  punchy statements ("Bigger is slower.").
- **Concrete over abstract.** Real asks, real replies, real numbers. Show the before and the after.
- **Honest nuance.** Say when the advice does not apply. The strongest lessons show that "usually
  right" is not "always right", and that the best choice depends on the job.
- **Weak examples fail.** Do not pick an example so vague that anyone can see it is bad. Pick one
  where the plain version gives an okay result and the better version gives a clearly better one.
- **Avoid empty words** like "polished", "leverage", "unlock", "supercharge", "game-changer".
- **Plain English** at about a grade 7 level, short sentences, second person, warm, a little
  playful. No em dashes. No tool, vendor or model names. No lesson numbers.
- **Parts of a lesson** (type in `src/preview/lessons.ts`): idea, sections, main `diagram`, extra
  `figures`, `examples` for everyday / office / code, optional `compare` (the hard way and the
  better way side by side), optional `worked` example (real prompts, replies, code or a saved
  skill), `tryThis` (2 to 4 steps, about 2 to 5 minutes, any free AI app), one-question `check`,
  and `next`.

## Diagrams

A diagram must make its one idea obvious in about 3 seconds, without reading the lesson. If it does
not, redraw it until it does.

- Show the contrast. Put the wrong way and the right way in the same layout, so the only difference
  is the point being taught.
- Show the mechanism, not a decoration. If the idea is a loop, draw the loop and where it exits. If
  the idea is "right most of the time is not right every time", show many tries with the rare miss.
- Few, large labels: at most about 8 labels of at most 6 words. Text at least 15px on a phone.
- Color carries meaning: `--dg-bad` for wrong or waste, `--dg-good` for right, `--dg-accent`
  (yellow) to highlight what you want the eye to land on.
- Inline SVG in `src/preview/diagrams/by-slug/<slug>.astro` (extra ones `<slug>--<id>.astro`),
  themed with `--dg-*` variables, `wobble` prop accepted, `viewBox` scaling, `role="img"` with an
  `aria-label`.
- Look at it. Screenshot the page and judge it as a first-time reader. Headless Chrome cannot render
  narrower than about 500px; check phones in a real browser at 375px.
