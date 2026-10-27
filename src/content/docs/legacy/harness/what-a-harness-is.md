---
title: What a harness is
description: Learn the difference between a model and the app around it, and the five parts every AI tool is built from.
---

**Key idea:** An AI tool is two things. A model that predicts text, and a harness that turns those predictions into real work. Once you know the parts of a harness, every tool looks familiar.

## "ChatGPT" means two things

People say "ChatGPT" and mean one product. It is really two:

- The **model**: the AI engine that produces text.
- The **app**: the chat box, buttons and file uploads wrapped around it.

Mixing these up is why AI tools feel like a maze. Separate them and most of the confusion goes away.

## The model is autocomplete

A model does one job. It reads some text and predicts what comes next. Type "the capital of France is" and it writes "Paris". It is not looking up geography. Those words just tend to follow each other. Think of the autocomplete on your phone, but far better.

Answering a question is the same trick. It writes the most likely reply to what you asked. For why that reply can sound sure and still be wrong, read [what AI really is](../../theory/what-ai-really-is/).

On its own, a model can only produce text. It can't open your file, check today's numbers or send an email. The first chatbots were exactly this: a website with a text box on top of a good autocomplete.

## The harness gives it hands

The jump from chatbot to coworker came from wrapping the model in software. That software lets the model read files, edit them, list folders, search the web, run commands and keep notes between sessions. The wrapper is called a **harness**.

```text
Agent = Model + Harness
```

The model is the brain. The harness is what lets the brain act. Cursor, Codex, Claude Code and the ChatGPT app are harnesses. They are not models.

Here is the useful part: a harness is not tied to one model. Most let you swap the engine, rerun a job on a different model, or use a cheap model for easy steps and a strong one for hard steps. You are not locked in.

## The five parts

Every harness is built from the same short list. Learn them once and you can open any tool and ask where each one lives.

First, the **built-in actions**. These are the basics the model can do: open a file, edit it, search, run a command. You don't set them up. They are why it counts as a harness. The five parts below shape and extend them.

1. **Standing instructions.** A file the harness reads at the start of every chat. It holds your style, your rules and where your real files live. Write it once. More in [AGENTS.md, the file it always reads](../agents-md-the-file-it-always-reads/).
2. **Skills.** A saved how-to for a job you repeat. The harness loads it when the job comes up. More in [skills](../skills-reusable-procedures/).
3. **Connectors.** A link from the AI to a real system like Jira, Slack, Drive or a database. Without one, the model only knows what you paste in. More in [MCP](../mcp-connect-to-the-world/).
4. **Sub-agents.** Helpers the main AI gives pieces of a job to, so work runs in parallel. This is the most underused part and the biggest unlock. More in [sub-agents](../subagents-divide-and-conquer/).
5. **The model picker.** Your choice of which engine runs the task. Use cheap and fast for easy work, strong for hard work. The thinking behind it is in [pick the right model](../../theory/pick-the-right-model/).

Each tool uses its own words for these. The idea stays the same and only the label changes.

| The part | What tools may call it |
|---|---|
| Standing instructions | Rules, an `AGENTS.md` file |
| Skills | Skills, commands |
| Connectors | MCP, connectors, integrations, plugins |
| Sub-agents | Agents, subagents, background agents, cloud tasks |
| Model picker | Model picker, model selector |

Treat the right-hand column as a snapshot. Names drift. The parts don't.

## You don't build these by hand

None of this needs a big setup project. You can ask the harness to build its own parts. Say "make me a standing-instructions file" or "add a connector for Jira" and it writes the config. That is the next page: [your own expert](../your-own-expert/).

## Mistakes to avoid

- Treating "ChatGPT" as one thing. The app does most of the work, not only the model.
- Thinking you are stuck with one model. You can swap it.
- Assuming two tools are very different because their labels differ. They share the same five parts.
- Trying to learn every menu. Learn the five parts and ask the tool for the rest.

## Keep reading

- Why the model guesses: [what AI really is](../../theory/what-ai-really-is/).
- Set the parts up with almost no effort: [your own expert](../your-own-expert/).
- The part that gives the biggest boost: [sub-agents](../subagents-divide-and-conquer/).
