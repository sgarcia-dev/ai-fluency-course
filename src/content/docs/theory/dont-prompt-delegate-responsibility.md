---
title: Don't prompt, delegate responsibility
description: Hand AI the goal and the finish line instead of the steps, and set it up so you can trust the result.
---

**The rule:** Give the outcome, not the steps. Act like a manager who sets the goal and checks the result, not like someone typing every move.

## The shift

People ask me how I get so much done with AI. They expect a magic prompt. There isn't one. I stopped writing instructions and started handing over problems.

Most people treat AI like a fast intern who needs everything spelled out. Do this. Now do that. Now this. Every step passes through you, so you are the bottleneck. You can only hand off what you could already do yourself. That is prompting.

Delegating is different. You say what outcome you want, what context matters, and how you will know it is finished. The AI works out the steps. You move from micromanager to manager, and that lets you take on work far bigger than you could ever hand-hold.

## Why bigger problems become possible

A capable agent does more than answer once. It makes a plan, looks things up, tries something, sees it fail, and tries again. Give it a large, messy problem and it can split it into pieces and work through each one. This is "divide and conquer," and it is why one person can now take on a project that once needed a team.

The best version lets the agent run its own helpers. Instead of juggling ten small tasks, you give the whole job to one lead. The lead splits the work, runs the pieces, and gathers the results.

The lead does not need to be your priciest model. For most jobs, a solid and cheap value model can plan and route work just as well. Keep the top-tier model for truly hard problems, and even then let it direct cheap helpers rather than do everything itself. You go from doing the work, to directing it, to directing the thing that directs it. For the cost and speed side, see [stop using one model for everything](../pick-the-right-model/).

## Two ways to do the same job

**The micromanager.** Someone needs a competitor breakdown. They ask AI for one section, read it, fix it, then ask for the next. Every step waits on them. Two hours later the doc is decent, but they did most of the thinking. They could never have run this during a meeting, because they were the engine.

**The delegator.** Same job, framed as an outcome: "I need a one-page competitor breakdown covering pricing, positioning, and the top three features. Use these five sources and put a quote behind every claim. Flag anything you can't verify." They hand it off and walk away. The agent reads all five sources, splits them across helpers, drafts the page, and marks the two claims it was unsure about. They return to a near-final draft and spend their time checking flagged items instead of typing.

Same person, same tool. One handed over a problem. The other handed over keystrokes.

## Why it fails for most people

Many people try this, get a mess, and decide AI can't be trusted with real work. Nearly always, they skipped something. Delegating a problem works when three things are in place. Miss one and you get the confident disaster that everyone blames on the model.

- **A clear outcome, plus the inputs to reach it.** This matters most. A fuzzy ask gets you polished work on the wrong thing, the same way a team ships the wrong feature from a vague customer brief. Say what "done" looks like. Then supply the raw material: the real requirement, the constraints that matter, and an example of "good" if you have one. One strong example beats a paragraph of description. The fastest way to get all this out of your head is to talk instead of type. Dictation is quicker than typing and now accurate enough to trust. More in [give it the right context](../give-it-the-right-context/) and the [dictation appendix](../../appendix/dictation/).
- **The context it needs, without retyping.** A good handoff assumes the agent already knows your world. That only works if your knowledge is saved somewhere reusable. That is the point of [explain it once](../explain-once/).
- **A quality gate that is not the agent's own opinion.** A quality gate is a check the work must pass before it counts as done, and it has to live outside the AI. The more the agent runs alone, the less you watch, so something real must decide whether it worked. That could be a test that passes or fails, a number that has to add up, or a person for anything high-stakes. "Are you sure?" is not a gate, because the AI will happily agree with itself. Autonomy without a gate is not speed. It is risk nobody checked. See [catch AI's mistakes](../catch-ai-mistakes/).

Here is what each one buys you.

| Give the agent | Skip it and you get | Include it and you get |
|---|---|---|
| A clear outcome and inputs | Confident work on the wrong thing | Work aimed at what you needed |
| The context it needs | Generic guesses that ignore your world | Decisions that fit how things really are |
| A quality gate | "Looks good to me," then bugs later | Proof it worked before it counts as done |

With all three in place, you can see the difference in the plan the agent shows you before it starts.

## The payoff: a plan you can audit

Without the three, the plan is a blank check. The goal is vague, there are no limits, and the agent can wander anywhere. With them, the plan reads like a tight contract. It has the same parts whether the worker is a person or an AI: outcome, context, boundaries, what "done" means, and when to stop. For the competitor task:

```text
Outcome:     a one-page competitor breakdown: pricing, positioning, top 3 features
Context:     these five source links, plus our own pricing for comparison
Boundaries:  use only these sources, do not browse elsewhere
Permissions: read-only, do not post or send anything
Done when:   every claim has a quote and a link; unverified claims are flagged
Stop if:     a source doesn't cover pricing; note it and move on
```

The fair objection: nobody wants to fill this in before every task. You don't have to. A capable agent that already knows your world will draft it for you. Give the outcome in one sentence and it replies with its understanding: what it thinks you want, what it will and won't touch, and how it will know it worked. Your job becomes reading that and answering "yes" or "no, not that."

This turns the contract from a chore into a safety net. You review the plan before any work starts, which is the cheapest moment to catch a misunderstanding. A wrong plan costs you one sentence to fix, not an hour of finished work. And if the agent cannot fill in these lines from your request, the task is still too fuzzy to hand off. Keep talking until it can.

## Two building blocks: helpers and skills

None of this needs heavy setup. There are two ideas to know, and both are simpler than the jargon suggests.

A **sub-agent** is a helper that the main AI gives one piece of the job. Think of the main agent as a lead who pulls in specialists: one to research, one to draft, one to check. Each helper works on its own slice with fresh attention. That is why the work can run in parallel instead of as one long slog. Sub-agents are how divide and conquer actually happens.

They only help when the work really splits. Send five helpers at one vague shared task ("improve our onboarding doc") and you get five overlapping rewrites that disagree, plus the chore of merging them by hand. More hands help when the pieces are independent and each has its own clear "done." They hurt when the pieces are tangled.

A **skill** is a saved instruction sheet for a job you repeat: "here is how we write a launch email" or "here is how we triage a bug." The agent loads it when it fits, so quality stays the same without you re-explaining. A skill is your [explain it once](../explain-once/) note, written so the AI can follow it on its own.

You don't have to build either by hand. Every tool uses different names, so don't get attached to labels ([what a harness is](../../harness/what-a-harness-is/)). The quickest route is to let the AI set them up. Describe the helper or the recurring job in plain words and have it write the configuration. That is what [your own setup expert](../../harness/your-own-expert/) is for.

## Common traps

- Spelling out steps for work you could have handed off whole.
- Giving a fuzzy outcome, then blaming the AI for guessing.
- Typing a thin one-line brief when talking it out would give ten times the context.
- Letting an agent run before you have read its plan.
- Giving more autonomy with no quality gate to catch a bad run.
- Adding helpers to a vague, shared task and getting the same mistake five times.
- Thinking the lead must be your biggest model, when a cheap value model conducts the crew fine for most work.
- Counting "more agents running" as progress instead of counting accepted results.

## Related chapters

- Give a handoff its context: [give it the right context](../give-it-the-right-context/).
- So you never retype that context: [explain it once](../explain-once/).
- Let a real check do the supervising: [catch AI's mistakes](../catch-ai-mistakes/).
- Set up helpers and skills with little work: [your own setup expert](../../harness/your-own-expert/).
- The cost and speed of splitting work: [stop using one model for everything](../pick-the-right-model/).
