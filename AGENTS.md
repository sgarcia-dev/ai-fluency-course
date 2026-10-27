# AI, Plainly (working name): repository guide

A free, tool-agnostic AI course in short lessons. A two-question quiz puts each reader on one
colored line of a subway map of 34 lessons. Live at <https://ai-fluency.sergeigarcia.com/>.
The original course (Starlight docs) is kept at `/legacy/`.

## Layout

- `src/pages/index.astro`: the home page (quiz, ticket, map, your stops, samples, why, how it is
  different).
- `src/pages/lessons/[slug].astro`: one page per written lesson.
- `src/preview/curriculum.json`: the 34 lessons (slug, title, idea, covers, minutes, needs) and the 4
  lines (`paths`). The single source for the map.
- `src/preview/content.ts`: site copy (name, pitch, why, how it is different, author).
- `src/preview/picker.ts`: the quiz: 6 goals, each with key lessons and 1 to 4 answers mapped to a
  line.
- `src/preview/lessons/<slug>.ts`: one file per written lesson, found automatically. The `Lesson`
  type is in `src/preview/lessons.ts` (sections, diagram, optional extra `figures`, world-switched
  `examples`, optional `worked` example, `tryThis`, `check`, `next`).
- `src/preview/diagrams/by-slug/<slug>.astro`: a lesson's main diagram; extra diagrams are
  `<slug>--<id>.astro`. Inline SVG themed with `--dg-*` CSS variables.
- `src/preview/designs/subway-v2/`: map layout (desktop network, mobile columns), line colors.
- `src/preview/route.ts`: an earlier custom-route planner. Not used by any page.
- `src/pages/preview/`: early design and quiz prototypes. Not linked from the home page.
- `src/content/docs/legacy/`: the original course. `astro.config.mjs` holds its sidebar and the
  redirects from old chapter URLs to `/legacy/`.
- `wrangler.jsonc`: Cloudflare Workers static-assets config with the custom domain.

## Commands

- `npm install`
- `npm run dev`: local dev server.
- `npm run build`: build the static site into `dist/`. CI runs this on every push.
- `npm run deploy`: build and publish to Cloudflare (needs `npx wrangler login`). This replaces the
  live site, so check the build first.

## Add a lesson

1. Add `src/preview/lessons/<slug>.ts` exporting `lesson` (copy an existing one). The slug must
   match `curriculum.json`.
2. Add `src/preview/diagrams/by-slug/<slug>.astro` (and `<slug>--<id>.astro` for each extra
   figure).
3. Run the dev server, open `/lessons/<slug>/`, and check it at 375px wide in a real browser:
   no sideways scrolling, diagrams visible. Headless Chrome cannot render that narrow.

## Writing rules

- Plain English at about a grade 7 level, short sentences, second person, warm. No em dashes.
- No tool, vendor or model names in lessons. Teach the method, not the buttons.
- No lesson numbers anywhere a reader sees them.
- A diagram must make its one idea obvious in about 3 seconds. Compare wrong and right in the same
  layout; few, large labels.
- Legacy pages: frontmatter with `title` and `description`, relative links with a trailing slash.

## Design

White paper, ink `#0A0A0A`, Fraunces display, Space Grotesk body, JetBrains Mono labels, square
corners, 3px borders, a hard 4px offset shadow on clickable things. Line colors: yellow `#FFD400`
(First steps), orange `#FF7A2F` (Getting good results), blue `#1A34B0` (Handing off bigger work),
purple `#7B2FBE` (Building with AI). All motion stops under `prefers-reduced-motion`.

Astro docs: https://docs.astro.build
