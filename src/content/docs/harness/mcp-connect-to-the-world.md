---
title: "MCP: connect AI to your tools"
description: Connectors let AI reach your real systems. Learn the read versus act split and why you should grant the least access that works.
---

**Key idea:** By default, AI only knows what you type into the chat. A connector gives it a way into your real tools. Access is power, so give it the least it needs.

## The plain picture

A model on its own sits in a sealed box. It knows only what you paste in. A **connector** is a door out of the box. Through one, the AI can search Jira, read a Drive folder, run a database query or post in Slack.

That is the gap between an assistant that can talk about your work and one that can work in it.

You'll hear the term **MCP**. It is a common standard for building those doors, like a USB port that many tools agreed to use. It is plumbing. It doesn't make the AI smarter or safer. It only connects things. Most people never set one up by hand. They ask the harness to do it. See [your own expert](../your-own-expert/).

## Read versus act

Some doors are riskier than others. There are two kinds, and the difference is big.

| Kind | Example | Risk |
|---|---|---|
| Read | Look up a ticket in Jira | Low, it only gathers information |
| Act (write) | Post a comment, edit a record, send an email | Higher, it changes the real world |

Reading is mostly safe. Acting is where things go wrong, because the AI can now do something you can't easily undo. Handing over the power to act is like handing over your login. Be that careful.

## An example

**Too much access.** Someone connects an assistant to their full email and calendar, with permission to send, so it can "help with my inbox". They ask for a few draft replies. The assistant reads the request loosely and sends three, one to a customer who wasn't ready. Nothing broke. It had the power to act and a vague instruction, so it acted.

**Least access.** Same goal, tighter setup. The assistant can read the inbox and write drafts, but not send. It still does the useful 90%, sorting and drafting, and it can't do the risky part. A human presses send. You get the same help with far less risk.

## Grant the least access

Give a connector only what the task needs. If it only reads, don't allow writing. If it needs one folder, don't open the whole drive. This one habit prevents most connector damage.

Two ideas help it stick:

- **A written instruction is not a guardrail.** "Please don't send anything" in a prompt is a hope. Removing the send permission is a control. Use controls. The AI can't do what it was never allowed to do.
- **Check harder when it can act.** Once a connector can change the real world, raise your level of checking. That is [catching AI's mistakes](../../theory/catch-ai-mistakes/) applied to access. Match the checking to the stakes.

## Adding one is easy, moving one is not

Connecting used to take a specialist. Now you can ask: "connect to our Jira so you can read tickets". The harness sets it up and tells you what access it needs. Approve the least that does the job.

One honest limit, since this changes quickly: connector setups don't carry between tools yet. Your written instructions do, but each harness stores connectors in its own format. When you switch tools, you re-add them, or ask the new tool to. What each tool supports changes often, so check its current docs.

## Mistakes to avoid

- Granting broad access "to be safe". It is the opposite of safe.
- Trusting a polite instruction instead of a real permission limit.
- Forgetting that a connected AI can act on a vague request.
- Assuming your connectors will move to the next tool. They usually won't, yet.

## Keep reading

- Where connectors fit: [what a harness is](../what-a-harness-is/).
- Have the tool add the connector: [your own expert](../your-own-expert/).
- Check harder once AI can act: [catch AI's mistakes](../../theory/catch-ai-mistakes/).
