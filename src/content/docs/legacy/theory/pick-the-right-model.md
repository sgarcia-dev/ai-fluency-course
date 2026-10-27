---
title: Pick the right model
description: Why no single model is best, and how to match model, cost, and speed to the job.
---

**The rule:** There is no single best model. Start with a fast, cheap one. Step up only when you have a reason. When you do step up, make the stronger model the lead over cheap helpers instead of having it do everything itself.

## One model for everything is a habit

Most people choose one model, usually the biggest or newest, and run every job through it. It feels safe. It is also the slowest and priciest way to work. It assumes models sit on one ladder from worse to better. They do not. Models are good at different things, and the biggest one is rarely the best fit for a given job.

So "which model is best?" has no answer. Ask "which model is best for this?"

## Why the biggest model is a poor default

The top models try to do everything, and you pay for it:

- **They cost a lot.** You hit usage limits and start rationing without noticing.
- **They are slow.** A one-minute task can become a long wait. That wait is your working time.
- **Broad is uneven.** A model can score higher on tests and still be worse at your actual work.
- **Providers throttle capacity,** often just when you are in flow.

Here is the number that should reset your default. At the top, the quality gap is small and the price gap is large. Today the best model beats a strong mid-tier one by only a few points out of a hundred. It costs several times more per task and takes several times longer to reply. You pay a big, felt price in money and waiting for a difference you often cannot see. The current figures, with dates because they move, are in the [model cheat sheet](../../appendix/model-cheat-sheet/).

The idea of a single "best" is falling apart. What replaces it, matching model to job, is a better deal, not a compromise.

## Route by strength

A model is not one number. Several dials vary, and different jobs care about different ones.

| Dial | What it means | Matters most when |
|---|---|---|
| Strengths | Its standout skills, such as creative writing, reasoning and research, following long multi-step plans, math, or data analysis | You match it to what your task leans on |
| Style | Careful and asks first, or bold and acts alone | Careful for precise, low-bug work. Bold for long unattended runs |
| Speed | How quickly it replies | You iterate a lot |
| Cost | What each run costs | The work is routine or high volume |

No model wins every dial, and the gaps are big enough to matter. Even in one model, being great at writing says nothing about its math. Check the one skill your task needs. Once you know who is strong at what, you get top results for a fraction of the money and time by giving each job to the model that fits it. A cheaper, faster model that nails your task beats a pricey generalist that is only decent at everything.

Who is strong at what changes with every release, so this page does not list it. The [model cheat sheet](../../appendix/model-cheat-sheet/) does, with dates. This page teaches the lasting skill. The cheat sheet is today's answer key.

## Cheap models get blamed unfairly

You have heard it: "I tried a cheaper model and it fell apart." Usually the model was not the real issue. Every model gets worse as its context fills up, and cheaper ones start to slip earlier, often once they are around three-quarters full. Give one a huge, sprawling task and the back half frays and it starts making things up. Keep each task small and the context lean, and cheaper models hold up well.

This is also why splitting work across helpers pays off twice. Each helper gets a small, fresh slice, so it stays where the model is strong instead of sinking in one giant chat. Cheap and focused often beats expensive and overloaded. That is the idea behind [subagents](../../harness/subagents-divide-and-conquer/).

## What a task really costs

The price per run is not the cost. The real cost looks more like this:

```text
real cost = price per run x number of redos + your time + time spent waiting
```

Send routine work that you can check to the fast cheap model. Save the expensive one for hard, unclear problems. Judge by the price of an accepted result, not the sticker price.

Here is the same prototype built five ways, moving from you doing the steering to an AI doing it for you. Each setup is scored out of five on cost, intelligence, speed, and autonomy (how much runs without you). More dots is better. More dollar signs is pricier.

| Setup | Who steers | Score |
|---|---|---|
| One frontier model, alone | You send one prompt. The big model does every step itself | Cost $$$$$; Intelligence ●●●●●; Speed ●○○○○; Autonomy ●●●●○ |
| One cheap model, alone | You send one prompt. A cheap model does every step itself | Cost $; Intelligence ●●○○○; Speed ●●●●●; Autonomy ●●○○○ |
| Value model plus cheap helpers, you route | You hand out one piece at a time: investigate, plan, build, review | Cost $$; Intelligence ●●●●○; Speed ●●○○○; Autonomy ●○○○○ |
| Value model leads a cheap swarm (the everyday sweet spot) | The value model steers. Investigate, plan, build, and review run in parallel | Cost $$; Intelligence ●●●●○; Speed ●●●●●; Autonomy ●●●●● |
| Frontier model leads a cheap swarm (top gear, hardest jobs only) | The frontier model steers. The same steps run in parallel | Cost $$$; Intelligence ●●●●●; Speed ●●●●○; Autonomy ●●●●● |

Read it top to bottom as one story.

- **Row one** is where most people live. It is the priciest and slowest option, and one brain gets overloaded on anything large.
- **Row two** is fast and cheap, but it gives up too much on hard, sprawling work.
- **Row three** splits the job across cheap helpers, and quality comes back. But you route every piece by hand, so you become the bottleneck. Look at the autonomy score.
- **Row four** hands the routing to a capable, low-cost value model. You keep the quality and get the speed and hands-off running back, at a fraction of row one's price. This is the sweet spot for nearly all real work.
- **Row five** puts a frontier model in charge for the very hardest jobs. It buys the last few points of judgment, and you pay for it once, on the lead, not on all the labor. It is not your everyday default.

Cheap runs also let you afford the extras people skip when every run is costly: a second draft, a throwaway prototype to test an idea, a review of the whole batch. Most people leave that gain on the table.

Handing over the steering, and knowing when work really splits, is its own skill. See [don't prompt, delegate responsibility](../dont-prompt-delegate-responsibility/). You do not need automation to start. Steer by hand first (row three). Automate once you see the pattern.

## See it in practice

**The habit.** A researcher runs every step through the biggest model: reading sources, reasoning, drafting. It is slow and pricey. By the afternoon they have worked through five sources and done most of the thinking themselves.

**The better setup.** Same researcher, same afternoon. A value model plans the job and hands slices to a swarm of cheap, fast helpers running at once. One batch reads and summarizes twenty sources in parallel. A stronger model takes the single hard synthesis step. Another drafts the write-up. They cover four times the ground, get a better result, and finish sooner. Nothing was a compromise. Each job went to the model built for it.

**The money.** A cheap run can cost a small fraction of a flagship run, often ten to sixty times less today (the current spread is in the [model cheat sheet](../../appendix/model-cheat-sheet/)). For the price of the big model doing one thing, you can run a value model as planner plus a dozen cheap helpers at the same time. You come back to a dozen checked pieces instead of one answer. Same hour, far more coverage, less money. To see this wired into a real setup, a lead with a handful of cheap helpers, read [putting it together](../../appendix/putting-it-together/).

## Common traps

- Defaulting to the biggest model as a status habit.
- Paying for a frontier model to grind through the work alone, when a value model leading cheap helpers would do more, sooner, for less.
- Moving to a bigger model on a vibe like "it sounds unsure," instead of a real signal: a failed check, high stakes, or a true dead end.
- Judging cost by price per token instead of price per accepted result.
- Blaming a cheap model for a job you never scoped, when it probably drowned in an overfull context.
- Forgetting that waiting is a cost paid in your own time.
- Assuming a model that is great at one job is great at the next.

## Related pages

- Don't get fooled by the launch chart: [read model hype](../read-model-hype/).
- Split big work across cheaper helpers: [don't prompt, delegate responsibility](../dont-prompt-delegate-responsibility/).
- The most underused unlock, cheap helpers in parallel: [subagents: divide and conquer](../../harness/subagents-divide-and-conquer/).
- Which models fit which jobs today: [model cheat sheet](../../appendix/model-cheat-sheet/).
