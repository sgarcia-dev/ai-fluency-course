---
title: "Skills: reusable procedures"
description: Save a job you repeat as a skill so the AI runs it the same way every time, for you and your whole team.
---

**Key idea:** If you do a job more than once, save the steps as a skill. The harness then runs it the same way every time, and anyone on your team can trigger it.

## What a skill is

A **skill** is a saved procedure for a repeated job. Examples: how we write a launch email, how we triage a bug, how we do the Monday numbers. You write the steps once. The harness loads them whenever that job comes up, so you don't explain it again.

Tools call this a skill, a command or a saved procedure. The idea is the same: a how-to the AI can follow by itself.

## The real cost of explaining again

If you keep typing nearly the same instructions, you pay two quiet costs:

- **Retyping.** Every run takes effort to spell out.
- **Drift.** The wording changes slightly each time, so the results change too. One run flags 5% gaps, the next flags 20%, and the next forgets your format. Nobody fully trusts it.

A skill fixes both. The instructions stop changing, so the output stops drifting. That is what makes a job repeatable: the same solid result every time, for anyone, rather than one lucky answer.

## An example

**Retyping weekly.** Each Monday a marketer writes a new version of "take last week's numbers, compare to targets, flag anything odd, write it up in our format." The wording shifts weekly, so the output does too. It works, but unevenly, and nobody else can run it because it lives in one head.

**Saved as a skill.** They write it down once:

```markdown
# Skill: Weekly campaign update
Use when: it's Monday and I have last week's campaign numbers.
Needs:    the week's numbers, the target sheet.
Steps:
  1. Compare each metric to its target.
  2. Flag anything more than 10% off, up or down.
  3. Draft the update in our standard template.
Good looks like: one page, every flag has a one-line reason, ready to send with light edits.
If unsure:  list what's missing instead of guessing a number.
```

Now it runs the same each week. A teammate can run it when the marketer is out. The 10% rule no longer drifts, because the instructions stopped moving.

## What makes a good skill

The example does four things worth copying:

- **It says when to use it.** The "Use when" line stops it being applied to the wrong job.
- **It lists what it needs.** So it doesn't start half blind.
- **It builds in the check.** "Good looks like" and an "if unsure" rule put the quality bar inside the skill instead of in your memory. This is [catching AI's mistakes](../../theory/catch-ai-mistakes/) built in.
- **It stays short.** A skill that covers every rare case becomes as hard to read as the chore it replaced. Cover the common path and let judgment handle the rest.

## One person's method becomes everyone's

A skill saves more than your own time. You can share it. Once saved, your best workflow can become the team default. The person who found the right way to do the Monday numbers doesn't need to be in the room. The skill carries the know-how. That is how one good habit spreads without a training session.

A skill is your [explain it once](../../theory/explain-once/) note, written so the AI can run it and not just read it.

## How to start

You don't need to write one from scratch. Two easy ways in:

- **Ask the harness to save it.** After a job goes well, say "save that as a reusable skill". It writes the file for you. This is [your own expert](../your-own-expert/) at work.
- **Look at a real setup.** [Putting it together](../../appendix/putting-it-together/) shows the few skills one real workflow reuses, so you can see a useful one before writing yours.

This area moves fast. Skills are becoming portable, since a shared standard for writing them is growing. A skill you save today has a fair chance of following you to the next tool. Instructions travel best, and skills are catching up.

## Mistakes to avoid

- Retyping the same procedure instead of saving it.
- Leaving out the "use when" line, so the skill gets used on the wrong job.
- Skipping the quality bar, so output is only as good as your memory that day.
- Stuffing in every edge case until the skill is hard to follow.
- Making a skill for something you do twice a year. A normal chat is fine for that.

## Keep reading

- Where skills fit: [what a harness is](../what-a-harness-is/).
- Save one without writing it: [your own expert](../your-own-expert/).
- The habit behind it: [explain it once](../../theory/explain-once/).
