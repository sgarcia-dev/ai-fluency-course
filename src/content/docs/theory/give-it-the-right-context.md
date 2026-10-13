---
title: Give it the right context
description: How to brief an AI with the smallest set of facts that makes the task clear, and why more is not better.
---

**The rule:** Give the smallest set of facts that makes the task clear. Make more available only if the model needs it.

## Why this matters most

Most bad AI results come from a bad brief, not a bad model. The model only knows what is in front of it. That is its "context": your instructions, attached files, the chat so far, and any data it can reach.

With good context, a cheap model does fine work. With bad context, the best model still misses, and it misses with confidence.

You can get it wrong in two ways:

- **Too little.** The ask is vague, so the model fills the gaps with the most generic answer. You get filler.
- **Too much.** You paste everything. The one line that mattered gets buried, the model grabs the wrong detail, and you pay more and wait longer. More context does not mean better output. Clear signal does.

Think of a desk, not a filing cabinet. Put out the few papers the task needs. Do not tip the whole cabinet on top of them.

## What a good brief covers

This is not a form. It is five things worth saying, in any order, in plain speech:

1. The outcome you want.
2. Who it is for.
3. The limits that matter: length, tone, must-haves, must-nots.
4. One example of what good looks like, if you have one.
5. What "done" means.

The fastest way to do this is to talk, not type. Voice dictation is now very good. Twenty seconds of rambling out loud gives the model much more to work with than the one tidy line most people type, and it takes almost no effort. See the [dictation appendix](../../appendix/dictation/).

## See it in practice

The task: turn a pile of customer feedback into something a product lead can act on.

**The weak brief.** You paste the feedback and type:

```text
Summarize this customer feedback.
```

You get a tidy list: "users want speed, some mention pricing, a few hit bugs." It reads fine and tells you almost nothing. There is no ranking, no evidence, and nothing to decide with. So you start asking follow-ups: which is most common, show me examples, what should we do. Three rounds later you have what you needed, after four passes.

**The strong brief.** Same feedback, but you explain the job:

```text
You are helping a product lead decide what to fix next.

From the feedback below, give me:
- the top 3 themes, ordered by how often they appear
- for each theme, 2 real quotes and a rough count
- one recommended action per theme

Rules:
- pull anything about pricing into its own separate section, even if rare
- ignore duplicates and obvious spam
- if the evidence for a theme is thin, say so instead of inflating it

Done means I could paste this into a planning doc with light edits.

Feedback:
<pasted feedback>
```

The first answer is now the finished brief. One pass instead of four. Same model, same data. Only the ask changed.

## The other failure: drowning it

Too much is as bad as too little. Say you paste in fifty documents, including three old strategy drafts. The model leans on an outdated draft and builds on a plan you dropped six months ago. Giving it more was not the sin. The signal got lost.

The fix is not to give less. The fix is to say what is current and what wins:

```text
Use the attached 2026 plan as the source of truth.
The two older drafts are for background only; do not follow them.
If they conflict with the 2026 plan, the 2026 plan wins.
```

## If you know the basics

A few habits that separate good briefs from great ones:

- **Position matters.** In long context, models use the start and the end more than the middle. Put your key constraint first or last, not in paragraph nine.
- **Pull, don't push.** Give a short brief plus pointers, and let the model or tool fetch the detail it needs. You get less noise, lower cost, and fewer stale facts.
- **Split the lasting from the one-off.** Your role, standards, and preferences stay the same. The task changes. Save the stable part as reusable instructions so you do not retype it and it does not crowd out the task.
- **Connectors do not curate for you.** Giving the model live access to Jira or a drive only moves the noise somewhere else. Choosing what matters is still your job.
- **Context has a budget.** More context raises cost and delay, and past a point it lowers quality. The window size is a limit, not a target.

## Common traps

- Calling a vague ask plus a big paste "giving it context."
- Keeping the real constraint in your head instead of writing it down.
- Adding documents "just in case" without saying which one is the authority.

## Related pages

- Decide how hard to check the result: [catch AI's mistakes](../catch-ai-mistakes/).
- Stop retyping good briefs: [explain it once](../explain-once/).
