---
title: Your own expert
description: Your AI tool can read and change its own setup, so ask it in plain words instead of hunting through menus.
---

**Key idea:** You don't need to learn where a tool hides each setting. The tool can read its own setup. Say what you want and let it configure and fix itself.

## The cost of being stuck

A big hidden cost at work is being stuck. You don't know how to set something up. You ask in Slack and wait a day. Or you quietly drop a useful tool because setup looked scary. Across a team, that adds up fast, and nobody tracks it.

Much of that cost is gone now. The tools you already use can set themselves up.

## Why this works

The [last page](../what-a-harness-is/) listed the parts of a harness: instructions, skills, connectors and sub-agents. Each one is stored as a plain file or setting. The harness can read and write those files itself.

An installed harness (one that runs on your computer, with permission to see files and run commands) can look at its own setup, understand it and change it. So you no longer need the exact menu path in a given product. You describe the result you want.

Think of it as an expert built into the tool. It acts like a help desk and a setup assistant, ready the moment you get stuck.

## An example

**The old way.** A person wants their AI tool to follow the team's writing style. They open settings, find three panels that look right, guess, read a half-outdated doc, post a question and wait. A day later they have a partial answer. Two days are gone on plumbing.

**The new way.** The same person types one request: "Create a standing-instructions file for this project with our writing style and the rules in this doc. Show me before you save it." The tool reads the doc, writes the file and shows it. They skim, say yes, and finish in five minutes. They never had to learn where the setting lives.

The AI doesn't need to know the one right answer. It can look at your actual machine and setup and act on it.

## What you can ask for

In plain language, you can ask a capable harness to:

- **Write its own instructions.** "Make a standing-instructions file from these notes." See [AGENTS.md](../agents-md-the-file-it-always-reads/).
- **Create a skill.** "Save what we just did as a skill I can reuse." See [skills](../skills-reusable-procedures/).
- **Add a connector.** "Connect to our Jira so you can read tickets." See [MCP](../mcp-connect-to-the-world/).
- **Create a sub-agent.** "Set up a helper that checks our docs for broken links." See [sub-agents](../subagents-divide-and-conquer/).
- **Debug itself.** "This connector stopped working. Check your own config and tell me what's wrong." It can inspect its setup, find the fault and suggest a fix.

Most popular installed tools support this now. Some take a plain request and some have a one-word command. The wording changes often, so don't memorize it. Just ask, and the tool will tell you how it does it.

## Keep it on a short leash

The power to change your setup is also the power to break it. Three habits keep it safe:

- **Preview first.** Ask it to show what it will do, then read the plan. This is [catching AI's mistakes](../../theory/catch-ai-mistakes/) applied to setup. It is the cheapest moment to catch an error.
- **Work on something reversible.** Use a copy, a branch or a test setup until you trust it. Avoid the live production system at first.
- **Stop at the point of no return.** Deleting data, spending money and changing shared systems are the moments to slow down and take control.

There is one real limit. Self-setup works well for reading and rewriting config. It can stall on things only a human can do, like logins, one-time codes and secrets it can't see. At that point it should say so and stop. If it starts guessing, step in.

## A bonus: no lock-in

Your setup lives in files the harness manages, and any harness can read its own setup and rebuild it. So you aren't trapped in one product. In a new tool, point it at what you have, or ask it to recreate your setup. The details are in [AGENTS.md](../agents-md-the-file-it-always-reads/).

## Mistakes to avoid

- Spending twenty minutes in menus for something one sentence could do.
- Letting it change something live, shared or permanent without reading the plan.
- Giving broad access when a safe copy would work.
- Treating it as magic. It is a fast expert that you still supervise.
- Letting it bluff past a login or secret it can't reach.

## Keep reading

- What it is setting up: [what a harness is](../what-a-harness-is/).
- Read the plan before it acts: [catch AI's mistakes](../../theory/catch-ai-mistakes/).
- The first thing worth asking for: [AGENTS.md](../agents-md-the-file-it-always-reads/).
