---
title: "AGENTS.md: the file it always reads"
description: Write your standing instructions once in a plain file that most AI tools load automatically, and take them with you when you switch tools.
---

**Key idea:** Put your standing instructions in one plain file that the tool reads on its own. Then stop repeating yourself at the start of every chat.

## The cost of retyping

Watch how people use AI and you'll see the same waste. Every new chat starts with the basics again. "Use plain English." "We sell to businesses, not consumers." "Never make up numbers." The model has no memory between chats, so each time it meets you as a stranger.

Your tools already have a fix. Many people walk past it.

## A file it reads first

Most harnesses look for a plain text file of instructions in your project when they start. They read it automatically, before they do anything else. No settings menu and no reminder in each chat.

So you write your guidance once. State your style, your rules, where the real files live and what to never do. Every chat then starts with all of it loaded. You stop being the person who trains the AI every morning.

## An example

**Retyping forever.** Someone opens a new chat each morning and pastes the same paragraph of context. On busy days they forget a rule and the output drifts. The AI never improves at their work, because it never keeps anything.

**Written once.** Someone else puts that paragraph into the instructions file one time. Every chat they open, and every teammate's chat, starts with it. When a rule changes, they edit one line and everyone's AI follows. The setup happened once.

## What goes in it

Keep it short. A useful file usually covers:

- How you want it to write: tone, length, plain language.
- Rules it must never break.
- Where the source of truth lives.
- Where your reusable skills are.

Don't write a manual. A short file that gets used beats a long one that gets skimmed. It is the same lesson as [give it the right context](../../theory/give-it-the-right-context/): more text is not more signal. You also don't need to start from a blank page. Ask the harness to draft it from a doc or from how you already work. See [your own expert](../your-own-expert/).

## Why `AGENTS.md` follows you between tools

This isn't one vendor's feature. The popular tools have settled on a shared, open convention: a file called `AGENTS.md`. It usually sits at the top of a project. Many people also keep a personal one in an `.agents` folder for their own defaults. A neutral foundation backs it, and a long list of tools read it. It is close to an industry standard.

Write your instructions there once and a new tool picks them up on day one. Your setup isn't welded to a vendor. It is a plain file you own, and the tool is just a reader. Switching becomes "point the new tool at my files". That takes an afternoon, not a restart.

The same idea is spreading to **skills**. A shared standard is forming for how a [skill](../skills-reusable-procedures/) is written, so a skill you save now has a fair chance of working in the next tool.

### What carries over today

The standard doesn't cover everything yet:

| Part | Carries over? |
|---|---|
| Instructions (`AGENTS.md`) | Yes, shared open standard |
| Skills | Increasingly, the standard is still forming |
| Connectors (MCP) | Not yet, each tool has its own config |
| Sub-agents | Not yet, each tool has its own format |

Instructions travel cleanly, and skills mostly do. **[Connectors](../mcp-connect-to-the-world/) and [sub-agents](../subagents-divide-and-conquer/) are the exceptions.** No cross-tool standard exists for them yet.

That hurts less than it sounds. You don't rebuild them by hand. In a new tool, lean on [your own expert](../your-own-expert/). Describe the connector or helper you had and the new tool sets itself up to match. The standard moves the portable parts, and asking the tool covers the rest. Any tool list is a snapshot and will change.

## More control

- **Use layers.** Keep broad, always-true guidance in one file and project rules in that project's own file. Tools usually read both, and the closer file wins.
- **Keep it somewhere you own.** A file in your repo or notes can move. A setting buried in one product's panel can't. Store anything you'd hate to lose in the portable place.
- **Save your reasons too.** This file is a good home for the "why" notes from [explain it once](../../theory/explain-once/). Keep the decisions behind the rules, not only the rules.

## Mistakes to avoid

- Retyping the same context every chat.
- Writing a giant file that nobody reads, human or AI.
- Locking your setup inside one product's settings, so a switch wipes it.
- Assuming everything travels. Instructions do. The fancier parts often don't yet.

## Keep reading

- Where this fits among the parts: [what a harness is](../what-a-harness-is/).
- Let the tool draft the file: [your own expert](../your-own-expert/).
- The reasons worth saving: [explain it once](../../theory/explain-once/).
