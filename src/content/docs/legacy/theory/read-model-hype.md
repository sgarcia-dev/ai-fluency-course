---
title: Read model hype with a cool head
description: Why launch charts mislead, how to spot the tricks, and a 15-minute test that beats any leaderboard.
---

**The rule:** A launch score is a sales pitch until you know how it was made. The top number is rarely the best model for you.

## Why a benchmark score is shaky

Every new model arrives with a chart that shows it beating the last one. That score is not just the model. It also depends on which test was used, what tools were attached, how many tries the model got, and how the chart was drawn. Change any one of those and the number moves, while your real work stays the same.

People even have a word for tuning a model to ace famous tests: "benchmaxing." So read a record-breaking headline as a claim to check. Here are three ways a score gets padded.

- **The model may have seen the test.** The famous benchmarks are public. A high score can mean the model memorized the answers or was shaped to pass, not that it got better at your job.
  - Researchers keep finding the answers to popular coding tests inside training data ([study](https://arxiv.org/html/2403.04811)).
  - Meta climbed a public leaderboard with a special Llama 4 build made to win it. Everyone else got a different, weaker model ([The Verge](https://www.theverge.com/meta/645012/meta-llama-4-maverick-benchmarks-gaming)).
  - OpenAI's o3 set a record on a hard math test. OpenAI had quietly funded that test and could see most of the questions ([TechCrunch](https://techcrunch.com/2025/01/19/ai-benchmarking-organization-criticized-for-waiting-to-disclose-funding-from-openai/)).
  - Gemini 3.8 Flash scored about 91% on an older coding benchmark and 19% on a newer, harder one. Same model, very different number ([The Verge](https://www.theverge.com/ai-artificial-intelligence/988742/google-gemini-3-8-flash)).
- **The model may know it is being tested.** Models often notice a benchmark-style question and act differently than they do on your messy request. So a headline score is closer to a best case than a normal day.
  - Across nine model families, models could tell when they were being evaluated and often guessed what the tester wanted ([study](https://arxiv.org/html/2505.23836v1)).
  - In one experiment, turning up a model's internal "this is a test" signal made its scores rise on its own ([Hawthorne effect](https://arxiv.org/html/2505.14617)).
- **The memory you are sold is not the memory you get.** A model may say it can hold a whole book. In daily use it loses the thread after about a tenth of that and starts inventing details ([context recall curves](https://contextarena.ai/)). Budget hosts can make this worse by trimming and compressing the model to save money. The copy you rent may be weaker than the one on the chart.

## How a chart can lie without changing a number

A chart can turn a small lead into a huge one using only the axis. In the tables below, each bar has five dots. The second row of each table shows what each dot position stands for.

**Trick 1: crop the score axis.** The scores are identical. One chart runs from 0 to 100. The other shows only 75 to 90.

| Model (real score) | Honest axis | Cropped axis |
|---|---|---|
| *Dot positions mean* | 0, 20, 40, 60, 80, 100 | 75, 78, 81, 84, 87, 90 |
| Our new model (89) | ●●●●◐ | ●●●●◐ |
| Best rival (82) | ●●●●○ | ●●◐○○ |
| Value pick (78) | ●●●●○ | ●○○○○ |

**Trick 2: squash the price gaps.** The prices are identical. One axis adds the same dollar amount each step. The other roughly triples each step, so a cheap model looks nearly as costly as an expensive one.

| Model (real cost per task) | Honest axis | Stretched axis |
|---|---|---|
| *Dot positions mean* | $0, $0.25, $0.50, $0.75, $1.00 | $0.01, $0.03, $0.10, $0.30, $1.00 |
| Our new model ($1.00) | ●●●●● | ●●●●● |
| Best rival ($0.10) | ◐○○○○ | ●●●○○ |
| Value pick ($0.04) | ◐○○○○ | ●●○○○ |

Other common moves have the same effect. Leave out the strongest rivals. Give one model extra attempts. Bury the limits in a footnote.

## Newer is not always better

The announcement will never say this: a model can top every chart and still be worse at your work, because the chart does not show what got worse. This keeps happening.

- **It gets rolled back.** Models that won benchmarks have been pulled back in real use. One made changes nobody asked for and charged ahead without checking. Another was disliked enough in daily work that its maker brought the old version back.
- **It makes things up more.** A newer model can score higher and still hallucinate more. One release's confident wrong answers rose from 39% to 51% compared with the version it replaced.
- **It obeys too eagerly.** Tuning for boldness can make a model act on instructions without thinking. One top-scoring model, left to run, deleted a developer's entire home directory.

The pattern is simple. Tuning for a score, or for boldness, can quietly cost you careful instruction-following, caution, and the habit of warning you when something looks wrong. A higher score is not a promotion. "More autonomous" does not mean "better for your job."

That is why the [model cheat sheet](../../appendix/model-cheat-sheet/) keeps older models next to the new ones. Each entry has a plain note on what its score hides.

## Fair comparisons are hard, so we did the first pass

Rivals rarely appear on the same benchmark. The tests also change so fast that a fair year-over-year read is close to impossible by hand. Merging messy, mismatched sources into one picture is something AI does well, so it is a good job to hand off.

We already did that work. The [model cheat sheet](../../appendix/model-cheat-sheet/) is dated, and every score has a note on what it hides. Examples are tests the model had already seen, or numbers that only appear at maximum effort. Start there. Then ask AI to refresh it for your needs: "Compare model X and Y for my kind of work. Cover cost per task, speed, and what people say after using each for a few weeks."

## The test that beats the rest

Pick five real tasks from your own week. Run two models on them. Judge the results yourself. This takes about fifteen minutes and tells you more than any leaderboard.

For a second opinion, read what people say after living with a model for a few weeks. That signal is noisy but useful. Together they give you evidence instead of a hunch. Fifteen minutes of your own testing beats a week of migrating because of a bar chart.

## Common traps

- Switching models based on a benchmark without testing your own tasks.
- Reading a three-point gap on a zoomed-in chart as a big leap.
- Trusting a top score on a test that every model already passes.
- Treating a maximum-effort, tool-assisted number as everyday quality.
- Assuming the launch number describes the model you actually get.
- Taking a higher score as proof of better results on your job.

## Related chapters

- Choosing well: [stop using one model for everything](../pick-the-right-model/).
- Current details, dated on purpose: [model cheat sheet](../../appendix/model-cheat-sheet/).
