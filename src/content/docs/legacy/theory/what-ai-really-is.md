---
title: What AI really is
description: Why AI can sound completely sure and still be wrong, and how to work with that.
---

**The rule:** AI predicts likely words. A confident voice proves nothing.

## The mistake that costs the most

Many people picture AI as an expert who sometimes slips. It is closer to the opposite. AI is a very good guesser. It has read a huge amount of text, and it writes whatever words are most likely to come next.

That is why it reads so smoothly. It is also why it can be wrong and sound certain at the same time. Smooth and correct are different things, and the AI will not tell you which one you got.

Keep two pictures in your head:

- **What it is.** A pattern machine. It has no sense of true or false. It only has likely and unlikely.
- **How to treat it.** A fast, eager contractor who has read most of the internet. It forgets everything between chats. It does not know your company. It rarely says "I don't know" unless you make room for that answer.

The first picture keeps you honest. The second tells you how to work with it.

This is only half of the story. The model does the guessing. The [harness](../../harness/what-a-harness-is/) turns those guesses into real work. This page covers the guesser.

## See it in practice

Same model, two prompts. One is unreliable and one is reliable.

**Asking it to remember.** You type:

```text
What is our company's refund policy?
```

It returns a neat, professional policy: 30 days, a restocking fee, a few exceptions. It looks real. It is not yours. The model filled the gap with the most likely-looking policy. Send that to a customer and you have made up a rule.

**Asking it to read.** You paste your real policy and type:

```text
Summarize the refund section of the policy below in three bullets.
Only use what is in the text. If something is not covered, say so.

<pasted policy>
```

Now the answer is right, because the model is reading, not remembering. Nothing changed except where the facts came from. That is the core habit, and it leads straight into [giving it the right context](../give-it-the-right-context/).

## Common traps

- Treating a confident tone as a sign of accuracy. Asking "are you sure?" does not help. It will back its own answer in either direction. Real confidence comes from outside the model: a source, a test, or a second method. See [catch AI's mistakes](../catch-ai-mistakes/).
- Asking it to recall facts you could simply hand to it.
- Assuming one good answer means the next one is safe. The same prompt can give a different answer next time. If you rely on the result, build a check. Do not lean on the one good run you happened to see.

## Related pages

- The other half of the machine: [what a harness is](../../harness/what-a-harness-is/).
- Give it the source, not its memory: [give it the right context](../give-it-the-right-context/).
- Put a check outside the model: [catch AI's mistakes](../catch-ai-mistakes/).
