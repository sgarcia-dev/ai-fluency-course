---
title: Catch AI's mistakes
description: How to move fast with AI by adding a cheap check that sits outside the model and passes or fails the same way every time.
---

**The rule:** Don't check harder. Check smarter. Put a test outside the AI that gives the same pass or fail every time, and let it prove the work. That is what lets you go fast.

## The fear, and the way out

You know the fear. AI sounds sure and is sometimes flat wrong. It invents things (people call this "hallucinating") in the same smooth voice it uses when it is right. The natural reaction is to slow down and reread everything. But that throws away the speed that made AI worth using.

The answer is not to trust it more. It is also not to read every line. Build a cheap check that lives outside the AI and gives the same pass or fail each time. Let the AI keep working until it passes. Now the check does the worrying, and you can move.

## Why "are you sure?" fails

The most common check is asking the AI to check itself. It does not work. In studies where models reviewed and corrected their own reasoning with no new information, the answers got worse, not better. The model is not checking. It is producing one more confident answer, and it will agree with itself whichever way you push.

A wrong answer can also pull you down with it. People who were given a fluent but wrong AI explanation caught errors less often than people who had no AI help at all. Smooth and wrong is more dangerous than clearly clueless, because it lowers your guard.

Asking the AI if it is sure is like asking the chicken if it is cooked. You need a thermometer. You need something outside the thing you are judging.

## The thermometer idea

A good cook does not stare at the chicken and debate. They use a thermometer. It reads 165 degrees F (74 C) or it does not. The answer is the same every time and takes seconds. The thermometer does not slow the cook down. It lets them send out hundreds of plates without worry.

The skill is to turn "does this look right?" into "does it pass the check?" A check you can trust is:

- **Outside the AI,** so the AI is not grading its own work.
- **The same every time,** not a fresh opinion.
- **Fast and cheap,** so you will actually run it.

## Three kinds of check, best to worst

1. **A mechanical check.** The math adds up. The code runs. The quote really appears in the source. The answer is identical each time and involves no opinion. You can trust it, and you can let it run on its own.
2. **A judgment check.** A person or a second AI gives an opinion. You need this for things you cannot measure, such as tone or whether an argument holds. It is slower and subjective, so use it only where a mechanical check cannot reach.
3. **Asking the AI about itself.** This is not a check at all.

The move that buys speed: push as much checking as you can down to number one.

## See it in practice

Two everyday versions of the same move. Read the one closer to your work.

**Numbers: don't let the AI be the calculator.** AI is a word machine. Ask it for math from memory and it writes a number that looks likely, which is not the same as correct. Ask "what is 18% of 4,812 signups?" and you may get a clean, confident, wrong figure.

Do not stare harder at the number. Get it from a calculator instead. Have the AI do the work in a spreadsheet or a real calculation tool, or type the numbers into a calculator yourself. The calculator gives the same right answer every time. The AI guesses. The calculator is your thermometer.

**Code: a test the AI can't talk past.** One developer has the AI write a change, asks "does this look good?", hears a confident yes, and ships. A week later a bug appears that "looks good" could never have caught.

Another developer adds a real gate: an end-to-end test that runs the whole app like a real user and fails loudly when something breaks. Shipping now depends on the test passing, not on anyone's opinion. The bug is caught before release.

A warning, because this trap is common. Letting the AI write and pass its own unit tests is not that gate. It can write a weak test that always passes, then announce that everything is green. The gate must exercise the real app and be able to fail. A check the AI controls is not really outside the AI.

The lesson is the same both times. Trust comes from a machine that answers the same way every time, not from how sure the AI sounded.

## The payoff: speed

A cheap check is not a tax on speed. It is what pays for speed. Once a task has a check that passes or fails on its own:

- You stop reading everything by hand.
- You can rerun the AI many times cheaply, because the check filters out bad runs.
- You can hand work to helpers that run alone, because the check, not your attention, decides when the job is done.

This is why the people who get the most from AI talk about building the loop, not writing the perfect prompt. The check lets the AI run without a babysitter.

## A bad check is worse than none

A check you can slip past gives false confidence, which is worse than knowing you did not check. A formula pointing at the wrong cell, a spellchecker that accepts the wrong "their", a test that cannot fail: all of these feel safe and are not. Make sure your check can really fail. Now and then, confirm it still catches a real mistake.

## Common traps

- Reading a confident tone as proof.
- Asking the AI to grade itself. "Are you sure?" is not a check.
- Treating a second AI as independent when it shares the first one's blind spots. True independence comes from a source, a tool, a test, or a person.
- Relaxing because it has been right all week. A long streak makes the next miss land hardest, which is exactly when people stop looking.
- Trusting a check you never confirmed can fail.
- Applying the same gate to everything, from a throwaway draft to a customer contract. Match the check to the cost of being wrong and to whether you can undo it.

## Related pages

- Why it sounds sure when it is wrong: [what AI really is](../what-ai-really-is/).
- Give it the source, not its memory: [give it the right context](../give-it-the-right-context/).
- Check harder once AI can act in the world: [MCP, connect to the world](../../harness/mcp-connect-to-the-world/).
