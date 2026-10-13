---
title: Putting it together
description: A short tour of the author's real agents workspace, showing the whole guide in practice.
---

The usual question after reading about all this is, "What does it look like in real life?" This page is a trimmed tour of my own setup, which lets one person run a lot of AI at once. I call it an **agents workspace**. It is not special software. It is one folder of plain markdown files plus a few habits, and each part maps to an idea in this guide.

One rule drives the whole thing: **the workspace is the source of truth, and every AI tool is just a reader pointed at it.** Tools adapt to the workspace, never the reverse. When a tool gets pricey or a better one appears, you point the new tool at the same files and carry on. See [what a harness is](../../harness/what-a-harness-is/).

## The layout

Two files sit at the top because every session reads them first. `AGENTS.md` is the rulebook, a [standing-instructions file](../../harness/agents-md-the-file-it-always-reads/). `STATE.md` says what is true right now, so a fresh session is caught up in seconds.

Below those, the first half is **setup** (how the AI works) and the second half is **knowledge** (what the work is). Here it is, trimmed, with `...` where there is more:

```text
agents/
  AGENTS.md          # the always-read rulebook: how to work here, where things go
  STATE.md           # what I'm working on right now, across everything

  skills/            # saved procedures the AI runs the same way every time
    research/
    plan-create/
    plan-execute/
    plan-reconcile/
    sync-tool-adapter/
    ...
  roles/             # the kinds of sub-agent worker a lead can hand work to
    task-explore.md      # a reader: investigates and reports, changes nothing
    task-execute.md      # a doer: makes one bounded change and runs the tests
    task-orchestrator.md # a coordinator: runs many workers at once
    ...
  capabilities/      # bridges to real tools, meaning MCP servers (Jira, Slack, Drive...)
    connectors.md        # the list of what exists, switched on or off
    mcp/
      github.md
      slack.md
      ...
  adapters/          # how each AI harness uses this workspace, quirks included
    cursor.md            # how Cursor is pointed at these files
    codex.md             # how Codex is, with its own differences
    ...

  specs/             # lasting "what is true" for each area of work
    hackathon-project/
      spec.md            # the goal, the rules, the contract
      STATE.md           # what is true now, plus next steps
      DECISIONS.md       # choices made, and why
    ...
  changes/           # one folder per serious job, active or finished
    260827_1010__create-hackathon-project/
      PLAN.md            # the approved plan
      EXECUTION_LOG.md   # what happened while it ran
      RESULT.md          # the outcome, and where the code or PR landed
      RECONCILE_PACKET.md  # what to fold back into memory
    ...
  artifacts/         # dated byproducts, never the source of truth
    investigations/      # deep dives into a question
    handoffs/            # short restart notes
    reviews/             # code and design review output
    ...
```

That is the full shape. The rest of this page walks through three workflows that move through it. For each one, I show where I start, the (shortened) skill that runs it, and where I end up.

You do not need to build this yourself. The specs-and-changes pattern already exists as open source, and the easiest one to try is [OpenSpec](https://github.com/Fission-AI/OpenSpec). It adds a `specs/` folder (the source of truth) and a `changes/` folder (proposed edits) to your repo and runs them with simple commands inside your AI tool. Mine is a hand-built take on the same idea, because I wanted full control over how it behaves. If you want the benefit without the building, start with something like OpenSpec and build your own only if you need that control.

## How the work gets done: one lead, many cheap workers

I rarely push a big job through a single chat. A **lead**, which is a strong and pricey model, plans the work and hands slices to cheaper **workers** defined in `roles/`. There is a *reader* that only investigates, a *doer* that makes one bounded change, and a *coordinator* for when many slices run together.

This pays off in three ways. Slices run **in parallel**. Workers are **cheap**, often half to a quarter of the lead's price. And the lead stays **focused** on judgment instead of wading through raw files.

Two rules keep it safe. A worker never starts more workers. And the lead always checks a result before trusting it. The mindset is [don't prompt, delegate responsibility](../../theory/dont-prompt-delegate-responsibility/). The mechanics are in [sub-agents](../../harness/subagents-divide-and-conquer/).

## Workflow 1: research

**Start with:** a question and nothing else. The tool reads `AGENTS.md` and the relevant `STATE.md` by itself, so it already knows the rules and the current situation.

**The skill** (`skills/research/SKILL.md`, shortened):

```text
---
name: research
description: Read-only investigation. Hand discovery to cheap workers,
  then always leave one dated findings report behind.
---
You are the lead researcher. Look into the question. Change nothing.
1. Read the rules (AGENTS.md) and the current state (STATE.md).
2. Send cheap reader workers across the sources and wait for every report.
3. Combine their findings yourself.
4. Write one dated report into artifacts/, then hand off.
```

**End with:** one new file in `artifacts/`. Its header points back to the work it supports, so it never sits alone:

```text
artifacts/investigations/
  26-08-27_14-05__investigation__hackathon-project-options_luna.md   # new
```

```yaml
---
doc_type: investigation
purpose: Options for setting up the hackathon project, and the tradeoffs.
related:
  - path: ../../specs/hackathon-project/spec.md
    why: The effort this research feeds.
---
```

The report is an artifact. It is supporting detail, not the source of truth. The spec it links to owns what is actually true.

## Workflow 2: a serious job (plan, execute, reconcile)

Anything too big for one sitting goes through three short phases. Each phase is a fresh session that picks up from files, not from chat memory.

**Start with:** the research above, and a decision to build something.

**Phase 1, plan-create** (`skills/plan-create/SKILL.md`, shortened):

```text
---
name: plan-create
description: Turn agreed work into a reviewable change folder. Investigate until
  the plan is certain, get a human yes, then write it. No code changes here.
---
1. Load the rules and memory.
2. Hand off discovery until nothing is unclear.
3. Propose a direction and get an explicit yes.
4. Only then write the change folder (PLAN.md and friends) and commit.
```

**Phase 2, plan-execute** (shortened):

```text
---
name: plan-execute
description: Carry out an approved PLAN.md to done, or to a clear blocked result.
  The lead owns coordination, checking, and acceptance.
---
1. Read the change folder's PLAN.md and status files.
2. Give slices to doer workers. They make the edits and run the tests.
3. Log what happens. Verify every result before accepting it.
4. Record the outcome in RESULT.md and prepare the handoff.
```

**Phase 3, plan-reconcile** (shortened):

```text
---
name: plan-reconcile
description: After execution, fold the accepted facts back into lasting memory
  from a fresh session, so the next agent starts from the new reality.
---
1. Read RESULT.md, the reconcile packet, and the memory rules.
2. Decide what changed: update STATE.md, DECISIONS.md, and the spec.
3. Apply only what the execution actually earned. Invent nothing.
```

**End with:** a complete job folder you could restart from, plus updated truth in `specs/`:

```text
changes/260827_1420__create-hackathon-project/
  PLAN.md              # approved
  EXECUTION_LOG.md     # what happened
  RESULT.md            # PR link and outcome
  RECONCILE_PACKET.md  # what to fold back
specs/hackathon-project/
  spec.md              # updated: reflects what shipped
  STATE.md             # updated: status and next steps
```

A `PLAN.md` is short enough to approve at a glance:

```text
Outcome:    set up the hackathon project page behind the existing flag
Context:    the research report above; the flag lives in config/flags
Boundaries: touch only the project module; change nothing shared
Done when:  tests pass and the flag defaults on in staging
```

The plan and the log live on disk. So I can stop, change tools or machines, and a fresh session reads the folder and continues from where the last one stopped. That is [explain it once](../../theory/explain-once/) taken all the way.

## Workflow 3: make every tool match the workspace

This is the workflow that holds it together, and the one I run most. The workspace rule is that **tools bend to it, never the other way around.** This skill enforces that, and it does two jobs with one command:

- **Onboard a new tool.** Point a freshly installed tool at the workspace for the first time.
- **Re-align a tool I already use.** Whenever I add something to the workspace, such as an MCP server, a role, a sub-agent, or a skill, I run this inside whichever tool I am using. It pulls that tool back in line with the source of truth.

**The skill** (`skills/sync-tool-adapter/SKILL.md`, shortened):

```text
---
name: sync-tool-adapter
description: Onboard OR re-align exactly one AI tool to the workspace. Compare
  the tool's config with the workspace in both directions, then make the tool match.
---
Phase 1 (read-only): inspect this tool's config. List every difference from the
  workspace (missing MCP servers, roles, skills, connectors) and the exact edits
  you propose. Then STOP and ask.
Phase 2: after I approve, apply only the confirmed changes. One tool per run.
```

It compares both ways. So it also flags anything the tool has that the workspace lacks, and asks whether to keep it local to the tool or promote it to the shared setup. It decides nothing on its own, and it only touches the one tool it is running in.

**An example run.** This morning I wrote a new skill and added a Jira MCP server to the workspace. Tomorrow I work in a different tool that has seen neither. I run `sync-tool-adapter` once, inside that tool. Phase 1 reports: "The workspace has one skill and one MCP server this tool is missing. Here is exactly how I would add them." I say yes, and the tool has both. No settings screens, no manual copying. The workspace changed once, and the tool caught up on request.

**End with:** the tool matches the workspace, and the sync is recorded in `adapters/`:

```text
adapters/
  cursor.md             # how this tool is pointed at the workspace
  cursor.divergences.md # anything it still does differently, tracked honestly
```

This is what "tools converge on the system" looks like in practice, and it is what removes lock-in. Adding, switching, or repairing a tool is a one-command sync, not a rebuild. The connectors it wires in stay off until I switch one on for a specific job. See [MCP](../../harness/mcp-connect-to-the-world/) and [your own setup expert](../../harness/your-own-expert/).

## A small skill set is enough

You do not need dozens of skills. The five above cover nearly everything. I add one more: **memory-reconcile**, a lighter version of plan-reconcile for folding a small change back into memory without making a full job folder.

## Take the habits, not the files

This is a heavily trimmed snapshot. You do not need my workspace to use the ideas, and none of its other files are required to follow this guide.

That is the point. You do not need my version. You need the habits: write down the *why*, keep one source of truth, and let a cheap crew do the work while you steer and check.
