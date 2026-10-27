import type { Lesson } from '../lessons';

export const lesson: Lesson = {
	n: 30,
	slug: 'plan-act-check',
	title: 'Plan, act, check',
	idea: 'A coding agent loops plan, act, check until the check passes. Approve the plan and write the check yourself, because a check that can fail is what makes the loop safe.',
	minutes: 10,
	sections: [
		{
			heading: 'The loop under the hood',
			body: [
				'A coding agent is an AI that can read files, edit them and run commands on its own. You already know how to hand it a job. This lesson is about what it does next: plan, edit files, run something, read the result, and decide whether to go again.',
				'That last decision is the whole game. The agent stops when it believes it is done. If "done" means "I feel good about it", you get an hour of work in five minutes, or an hour of damage, and it cannot tell which.',
			],
		},
		{
			heading: 'Step in twice, not fifty times',
			body: [
				'You will not watch every edit. Instead, step in at two spots. First, the plan: ask what it will change, and in which files, before it touches anything. Five lines of plan are much cheaper to read than five hundred lines of diff (the list of changed lines).',
				'Second, the check: you decide what "done" means, as a command that passes or fails. Now the loop has a real exit. Each failed run prints an error, and that error is what the next plan works from.',
			],
		},
		{
			heading: 'The check is what makes the loop safe.',
			body: [
				'A good check for code is a command with a yes or no answer: the tests, the type check, the build, or a small script that reproduces the bug. "npm test -- date-filter" is a check. "Make sure it works" is not.',
				'The agent saying "I verified it" is not a check either. It may have run nothing, run the wrong thing, or read a failure as a pass. Ask for the command and its output, every loop, not only at the end. A fix for one thing often breaks another, and the next run is where you find out.',
			],
		},
		{
			heading: 'Make it fail first.',
			body: [
				'A test that passed before the fix proves nothing. Have the agent write the test first and show it failing for the reason you expect. Then you know the check can say no, and a later yes means something.',
				'The same goes for the rules around the check. The agent must not edit, skip or loosen a test to get to green. If it wants to, that is a sign it is stuck, not a shortcut.',
			],
		},
		{
			heading: 'What a check cannot catch',
			body: [
				'Tests only check what someone thought to test. They will not tell you the fix is slow, copies code that already exists, logs a password, or quietly changes a file outside the task. So you still read the diff. The check means you read it once, at the end, knowing it works, instead of guessing.',
				'And some jobs have no clean command, like "make this page look nicer". There the check is you, looking at it. Say so in the task, so the agent stops and shows you instead of declaring victory.',
			],
		},
		{
			heading: 'When the loop goes off track',
			body: [
				'Watch for these: the same error twice, each "fix" made with total confidence. A wish to change the test. Edits in files unrelated to the task. A plan that keeps growing. More loops will not fix any of these. They only make the mess faster.',
				'Stop it. Narrow the task to the smallest useful piece and restate the check, including what must not change. If the session is long and tangled, start fresh with a short summary: goal, what failed, and the check.',
			],
		},
	],
	diagram: {
		caption: 'The loop exits only when the check passes. You approve the plan and write the check.',
		describe:
			'A flowchart going down: Plan, Act, Check, then a diamond "Passes?". Yes leads down to a green "Done" box. No goes in red back up to Plan, labeled "error feeds next plan". Yellow notes beside Plan and Check say "You: approve plan" and "You: write the check". A dashed red line from the diamond says "Same error twice? Stop, narrow it."',
	},
	figures: [
		{
			id: 'proof',
			afterSection: 2,
			caption: 'If it cannot fail, it is not a check.',
			describe:
				'Two panels. Left, in red, "Not a check": the AI says "Fixed! I verified it works." Can it fail? No, it only says yes. Right, in green, "A check": a terminal running npm test, showing FAIL before the fix and PASS after. Can it fail? Yes, you saw it fail.',
		},
	],
	examples: {
		everyday: {
			before: 'Sort out my photos folder.',
			after:
				'Before you move anything, show me your plan: which folders you will make and how you will decide where each photo goes. Done when: every photo is in a folder named by year and month, nothing is deleted, and you give me a count of photos before and after.',
			why: 'You see the plan before a single file moves, and the matching counts prove nothing got lost.',
		},
		office: {
			before: 'Build me a budget spreadsheet from these receipts.',
			after:
				'First, list the columns and categories you plan to use, and wait for my OK. Then build the sheet. Done when: every receipt is one row, the total matches the sum of the receipts, and anything you could not read is in a separate "check me" list.',
			why: 'The plan catches wrong categories early, and the total is a pass or fail check you can do in ten seconds.',
		},
		code: {
			before: 'Add input validation to the signup form and make sure it works.',
			after:
				'Add validation to the signup form so empty and badly formed emails are rejected. First, show me your plan: which files you will change and what tests you will add. Wait for my OK. Done when: the full test suite passes, there are new tests for empty and bad emails, and no existing tests are edited.',
			why: '"Make sure it works" lets the agent decide when to stop. A plan you approve and a command that passes or fails put you in charge of both ends of the loop.',
		},
	},
	compare: {
		title: 'One bug, two ways',
		intro: 'Bug: the date filter drops items from the last day of the month. Same agent, same codebase.',
		afterSection: 3,
		wrong: {
			label: 'Trust the agent',
			steps: [
				{ who: 'you', text: 'Fix the date filter bug.' },
				{ who: 'ai', text: 'Edits three files, including the shared date utils. "Fixed! I tested it and it works now."' },
				{ who: 'note', text: 'No plan to read. No command you can rerun. You skim, it looks fine, you ship.' },
			],
			outcome: 'A week later the end-of-month report breaks. The utils change shifted time zones.',
		},
		right: {
			label: 'Own the plan and the check',
			steps: [
				{ who: 'you', text: 'Plan first. Done when `npm test -- date-filter` passes. Write the failing test first.' },
				{ who: 'ai', text: 'Plan: one file, dateFilter.ts, plus a test for Jan 31. Also tidy the date utils?' },
				{ who: 'you', text: 'Skip the utils. Go.' },
				{ who: 'check', text: 'FAIL: expected 1 item, got 0. Then, after the fix: PASS (6 tests).' },
				{ who: 'ai', text: 'One old test fails on a time zone case. I could loosen it.' },
				{ who: 'you', text: 'No. Do not change tests. Find the real cause.' },
				{ who: 'check', text: 'PASS (7 tests). One file changed.' },
			],
			outcome: 'You read a small diff, once. The time zone bug was found before it shipped.',
		},
		takeaway: 'The hard way took less of your time today. The better way took about two minutes more, and the check did the watching.',
	},
	worked: {
		title: 'Save the rules once',
		intro: 'You will fix many bugs. Put the plan and check rules in a skill file, so every bug fix starts the right way without you typing them.',
		steps: [
			{
				label: 'fix-a-bug.md',
				code: `When I ask you to fix a bug:
1. Reproduce it with a failing test first. Show me the failure.
2. Give me a short plan (files, change, test) before any edits.
3. Change only what the plan names.
4. Run the check command after every change and show the output.
5. Never weaken, skip or delete an existing test.
6. If the same error comes back twice, stop and ask.
7. When done, list the files you changed.`,
				note: 'Put it in your tool\'s instructions or skills folder. Next time, "fix this bug" brings the rules along.',
			},
		],
	},
	tryThis: {
		title: 'Plan first, then the finish line',
		steps: [
			'Pick a small real task, like a bug fix or a tiny feature. Open any coding agent. If you have none, any AI chat works.',
			'Ask: "Before you change anything, give me your plan in five lines or fewer, and a done-when check I can run that passes or fails."',
			'Read the plan. Cut anything outside the task. Tighten the check if it is vague, then let it go.',
			'When it says it is done, run the check yourself. Did the plan and the check catch anything?',
		],
	},
	check: {
		question: 'Your agent has "fixed" the same failing test four times. On the last try it changed the test. What is the best next move?',
		options: [
			'Let it keep going. It will get there eventually.',
			'Stop it, undo the test change, narrow the task, and restate done-when with "do not edit the tests".',
			'Accept the work, since the tests pass now.',
			'Tell it to try harder and be more careful.',
		],
		answer: 1,
		explain:
			'Repeating the same fix and editing tests are both signs the loop is off track. More loops rarely help. Stopping, narrowing and restating the check gives it a real target again. Passing tests only mean something if the tests are the ones you trust.',
	},
	next: 'Next stop: Tests are the quality gate',
};
