# AI Fluency: repository guide

A short, tool-agnostic course on using AI well. The content is plain Markdown in
`src/content/docs/`. [Astro Starlight](https://starlight.astro.build) turns it into the site.

## Layout

- `src/content/docs/index.md`: homepage.
- `src/content/docs/theory/`: the fundamentals (why and what).
- `src/content/docs/harness/`: the machinery around a model (how).
- `src/content/docs/appendix/`: practical extras, plus the dated model cheat sheet.
- `astro.config.mjs`: site config and sidebar order. A new page must be added to the sidebar list there.
- `.github/workflows/deploy.yml`: builds and deploys to GitHub Pages on every push to `main`.

## Commands

- `npm run dev`: local dev server (use `astro dev --background` from an agent).
- `npm run build`: build the static site into `dist/`. Broken builds fail the deploy.

## Writing rules

- Each page starts with frontmatter (`title`, `description`) and no top-level `# Heading`.
- Internal links are relative routes with a trailing slash, no `.md`: `../catch-ai-mistakes/` in the
  same folder, `../../harness/what-a-harness-is/` across folders.
- Plain English, short and scannable. No em dashes. Tables at three columns where possible.
- Keep durable lessons separate from volatile facts (model names, prices). Volatile facts live in the
  dated cheat sheet and link out.

Astro docs: https://docs.astro.build
