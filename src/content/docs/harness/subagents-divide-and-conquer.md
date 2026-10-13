---
title: "Sub-agents: divide and conquer"
description: Hand pieces of a big job to helper agents that work in parallel, and learn when splitting helps and when it backfires.
---

**Key idea:** A sub-agent is a helper that the main AI gives one piece of a job. Split independent work across helpers and one person can run what once took a team. This only works when the work really splits.

## The part few people use

Of all the parts of a harness, this is the one most people have never touched. It is also the biggest boost. Most people talk to one AI, on one job, in one conversation. That leaves most of the power unused.

## What a sub-agent is

Picture the main AI as a project lead. A good lead doesn't do a big job alone. They bring in specialists: one to research, one to draft, one to check. A **sub-agent** is that specialist. The main AI hands it one slice of the work.

Each helper works its own slice with fresh attention. That is why the slices can run at the same time instead of crawling down one long to-do list. Sub-agents are how divide and conquer happens inside a tool.

## Why it matters

Two things improve when work is split across helpers.

- **Speed.** Ten slices running together take about as long as one, not ten.
- **Depth.** One agent on a huge task gets overloaded. The more it packs into a single conversation, the more it loses the thread. Give each slice to its own helper with a clean start and each one gets full attention. You cover more ground and cover it better.

A real case: one big frontier agent researching a topic reads sources one by one, slows down and drops detail as the pile grows. A lead directing twenty cheap helpers, each reading a few sources, covers twenty times the material in much less time and cost. Same person, very different result. The cost side of this is in [pick the right model](../../theory/pick-the-right-model/).

## An example

**One agent, one line.** A researcher asks a single agent for a competitor breakdown across fifteen sources. It works through them in order. Forty-five minutes later it returns a decent doc that gets thin near the end, because by source twelve it was juggling too much.

**A lead with helpers.** Same task, but a lead splits the fifteen sources among helpers. Each helper digs into three with full focus and reports back. The lead merges the findings into one page and flags what it couldn't verify. It finishes much faster, and the later sources get the same care as the first, because no helper was overloaded.

For a real workspace where a lead fans out cheap helpers, see [putting it together](../../appendix/putting-it-together/).

## When it helps and when it backfires

More hands don't always help. Sub-agents pay off only when the work **splits into independent pieces you can check.**

Send five helpers at one vague, shared task like "improve our onboarding doc" and you don't get five times the work. You get five overlapping rewrites that disagree, plus a new chore of merging them by hand. That is slower than doing it once.

The test is simple. Can you cut the work into parts that each have a clear "done" and don't depend on each other? If yes, split it. If the parts are tangled or the goal is fuzzy, keep it as one clean line of work.

## Running is not the same as done

The trap with helpers is mistaking activity for progress. Ten agents running is not ten units of work. It is ten things to check. Two rules keep you honest:

- **Give every helper its own check.** The more that runs unattended, the less you watch, so each slice needs a real test of success: a test, a source, a number that reconciles. "Looks done" is not done. This is [catching AI's mistakes](../../theory/catch-ai-mistakes/) at scale.
- **Count accepted results, not agents launched.** Progress is work that passed its check and that you'd actually use.

## The mindset change

Here you stop being the engine. You move from doing the work, to directing the work, to directing the thing that directs the work. You set the goal and the checks. The lead splits the job and runs the pieces. It is the same shift as [delegate, don't prompt](../../theory/dont-prompt-delegate-responsibility/), with a whole team of helpers.

You don't wire this up by hand. Ask the harness for a helper with a specific job, such as "create a helper that checks our docs for broken links", and it builds one. See [your own expert](../your-own-expert/). One caveat while this is young: helper definitions mostly don't carry between tools, so expect to recreate them if you switch.

## Mistakes to avoid

- Never using helpers and pushing every big job through one overloaded chat.
- Splitting work that doesn't split, then merging five conflicting versions.
- Counting agents running as progress instead of results that passed a check.
- Giving more work to more helpers with no check on each.
- Expecting your helper setup to follow you to a new tool. It usually won't, yet.

## Keep reading

- Where sub-agents fit: [what a harness is](../what-a-harness-is/).
- The mindset behind this: [delegate, don't prompt](../../theory/dont-prompt-delegate-responsibility/).
- Cost and speed of a lead plus cheap helpers: [pick the right model](../../theory/pick-the-right-model/).
- Check every helper's output: [catch AI's mistakes](../../theory/catch-ai-mistakes/).
