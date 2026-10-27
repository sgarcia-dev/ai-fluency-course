---
title: Explain it once
description: Save the reasons behind your work in one place so every later request, to AI or a person, can be one line.
---

**The rule:** Write down why things are the way they are, and what is true today, one time. Then the next request can be short.

## The real bottleneck

You can't hand work off cleanly, to AI or to a person, because the important part sits in your head. It is the reason behind each choice, the one constraint everything depends on, and what was already tried and failed. So you explain it again. Every new chat. Every new teammate. Every time.

That repeated explaining is the true bottleneck. The knowledge exists. It just lives in your memory, or in a page nobody has opened since last year. Write it down once, keep it current, and the next request can be a single line, from you or anyone. That is the habit behind people who seem to move impossibly fast.

## An old idea that goes beyond notes

Decades ago, computer scientist Peter Naur argued something about software. The valuable thing is not the code. It is the understanding of why the code looks the way it does. When the people who hold that understanding leave, the code turns into a puzzle, even with every line still on screen.

This applies to almost any knowledge work. Your finished document is half of what you made. The reasoning behind it is the other half, and it is the half that matters most.

AI makes this sharper. Each new chat is a bright new coworker with no memory. It cannot know why you made past decisions unless you wrote them down. If you didn't, it will cheerfully undo them.

## The habit: save the why, not just the what

Most people do the work, ship it, and move on. Nothing gets written, since the job is done. The upgrade is small. When you make a change, have AI record why you made it, right beside the work.

Skip the what. You can already see that. Record the why: the problem it solved, the options you ruled out, and the one thing nobody should quietly reverse later.

The format does not matter. A Word doc, a text file, a line in the ticket, whatever you already use. What matters is that the reason exists outside your head. This is the beginner version of the whole skill: make it easy to trace back why something is the way it is.

## Two scenarios

**Scenario 1: the forgotten rule.** Ana and Ben both refresh last quarter's campaign plan for Q3. Ana never wrote down the why. When she asks AI to update the plan, it cannot know that the "summer bundle" promo was killed after legal raised a problem, because that reason only came up in a meeting. It sees a past promo, assumes it worked, and builds the new plan around it. Ana ships a campaign with an offer the company is not allowed to run.

Ben spent thirty seconds saving the why next to his plan:

```text
Why this plan looks like this:
- Summer bundle promo: retired, legal flagged it. Do not reuse.
- Led with the annual plan on purpose; best margin last run.
```

His AI reads that first, skips the dead promo, and keeps the choice that worked. Same task, same AI. Two saved lines made the difference between a clean refresh and a shipped mistake.

**Scenario 2: the easy follow-up.** Months ago you built a large launch plan. Now priorities shift and you must add a new region. Without saved reasons, touching anything big is scary. You, or whoever inherited the plan, must first rebuild the logic behind every piece. Updates stall and the doc slowly rots. With the reasons saved, you say "add the new region, keep our existing constraints." The AI already knows those constraints and why they exist, so a big change takes minutes. The bigger the work, the bigger the payoff. Saved context makes large projects easy to pick back up.

A good why-note is short. It holds the goal, the calls you made, what you ruled out, and where the real file lives.

## Won't this pile up into endless documents?

Fair worry. Save everything and you get a mountain of notes. A mountain of stale notes is worse than none, because a confident, out-of-date line misleads a person and an AI alike. A pile of documents is a junk drawer, not a second brain.

The fix is what your own brain does: organize and connect. Two habits cover most of it.

- **Keep it current on purpose.** State what is true now. Mark old decisions as history so they do not read as current. Date anything others will lean on. Treat a note the AI wrote as a draft until you approve it. Otherwise yesterday's guess becomes tomorrow's rule.
- **Link the notes.** One note helps. Notes that point to each other are far stronger: this plan relates to that decision, which was retired for this reason. When each note carries a bit of context (when it was made, why, what it links to), the pile becomes a map your AI can walk on its own.

Here is the contrast. A bare note gives the AI nothing to navigate by:

```text
Q3 campaign plan
[the plan itself]
```

The same note with metadata on top becomes a connected one. Its links point to real files, and each says why it is related:

```text
# Q3 campaign plan
Created: 2026-07-01 | Owner: Ana | Status: current
Why it exists: replaces the Q2 plan after the summer bundle promo was retired.

Related:
- ./q2-campaign-plan.md              (the version this replaces; do not reuse its promo)
- ../legal/note-4471.md             (why the summer bundle is banned: legal settlement)
- ../research/pricing-test-2026.md  (the test behind "lead with the annual plan")
- ./brand-voice.md                  (tone rules every campaign has to follow)

[the plan itself]
```

Follow one link. The legal note is its own connected node, and it points back:

```text
# Legal note 4471: summer bundle restriction
Created: 2026-06-14 | Owner: Legal | Status: binding
Why it exists: settlement terms; the summer bundle offer cannot be advertised.

Related:
- ./q3-campaign-plan.md   (a plan that must honor this restriction)
- ./settlement-2026.pdf   (the source document, for the exact wording)
```

That two-way linking is the graph at work. Starting at the campaign plan, an AI can jump to why the promo is banned, then to the settlement itself, then back. It does this alone, because every note is dated, explained, and tied to its neighbors. You never need to be in the room. The links do the explaining.

That map is the real payoff. The technical name is a "knowledge graph," but a map is a fine picture. Since the pieces are linked and dated, an AI can trace a fact to its source, notice when two notes disagree, and help you reconcile them. The knowledge stays alive instead of rotting. You need nothing fancy to start. A few connected, dated notes beat a hundred loose ones.

## Not just for engineers

| Role | What to save |
|---|---|
| Marketing | The campaign brief, and why each constraint exists |
| Product / research | The decision, the evidence, the open questions |
| Ops / support | The process, the current state, when to escalate |

Engineers call it a spec. Everyone else can call it the reasons behind the work. The idea and the payoff are the same: the next person, or the next chat, picks up where you stopped instead of from a blank page.

## You don't have to invent the system

If keeping notes linked and current sounds like a lot, ready-made open-source tools already do it. The easiest to try is [OpenSpec](https://github.com/Fission-AI/OpenSpec). It keeps a `specs/` folder (the current truth) and a `changes/` folder (proposals) right next to your code. The reasons live beside the work and stay easy to review.

My own setup is a custom version of the same idea, built by hand so I control every part. You don't need that. Start with a tool like OpenSpec, or just one dated notes file, and grow only when you feel the need. For a full worked example, see [putting it all together](../../appendix/putting-it-together/).

## Common traps

- Saving what changed but not why. The what is visible. The why is what disappears.
- Letting an AI-written note quietly become "the truth" before you approved it.
- Leaving old decisions where they still look current.
- Trusting a confident note that nobody dated or updated.
- Burying notes in one tool's chat history, where no other tool can read them.
- Going company-wide too early. One person's linked notes are a superpower. A whole company writing thousands of live documents with no shared standard quickly produces notes that contradict each other. Sharing widely can work, but it needs discipline and an owner for the standard. Start with yourself and your team.
- Flooding the AI with saved context. More is not better. Too much, stale, or wrong context is its own failure, sometimes called context poisoning: the one fact that mattered gets buried, or the AI latches onto an outdated note. Curating is still your job. See [give it the right context](../give-it-the-right-context/).

## Related chapters

- The handoff this makes possible: [don't prompt, delegate responsibility](../dont-prompt-delegate-responsibility/).
- Giving a task the right context in the moment: [give it the right context](../give-it-the-right-context/).
- Where these notes should live: [AGENTS.md, the file it always reads](../../harness/agents-md-the-file-it-always-reads/).
