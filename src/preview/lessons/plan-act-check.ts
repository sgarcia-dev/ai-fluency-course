import type { Lesson } from '../lessons';

export const lesson: Lesson = {
	n: 30,
	slug: 'plan-act-check',
	title: 'Plan, act, check',
	idea: 'Every coding agent runs the same loop. You get the most control for the least effort at two spots: the plan, and the check that decides "done".',
	minutes: 9,
	sections: [
		{
			heading: 'The loop under the hood',
			body: [
				'A coding agent is an AI that can read files, edit them and run commands on its own. Strip away the interface and it does one thing over and over: read the code, make a plan, edit files, run something, read the result, and go again.',
				'That loop is why an agent can do an hour of work in five minutes, or an hour of damage. It cannot tell which. It only knows what you told it and what the last command printed.',
			],
		},
		{
			heading: 'Two cheap places to step in',
			body: [
				'You could watch every edit. You will not. Instead, step in at the two spots where a minute of your time saves the most.',
				'First, the plan. Ask the agent to say what it will change, and in which files, before it touches anything. Reading five lines of plan is much cheaper than reading five hundred lines of diff (the list of changed lines). A wrong plan caught here costs nothing.',
				'Second, the check. You decide what "done" means, ideally as tests or a command that passes or fails. "Done when: the test suite passes and the new test for empty input passes." Now the agent has a finish line it cannot argue with, and so do you.',
			],
		},
		{
			heading: 'Signs the loop is off track',
			body: [
				'It keeps "fixing" the same error, each time with total confidence. It edits the tests so they pass, instead of fixing the code. It wanders into files that have nothing to do with the task. The plan keeps growing: one small fix has become a refactor (a rewrite of how the code is organized) of half the project.',
				'None of these fix themselves. More loops usually means more mess, just faster.',
			],
		},
		{
			heading: 'How to pull it back',
			body: [
				'Stop it. Then narrow the task to the smallest piece that is still useful. Restate the done-when check in plain words, including what must not change, like "do not edit the tests".',
				'If the session is long and tangled, start a fresh one. Give it a short summary: the goal, what you tried, what failed, and the check. A clean start with a good summary beats a long chat full of wrong turns.',
			],
		},
	],
	diagram: {
		caption: 'The agent loops. You approve the plan and you define done.',
		describe:
			'A loop of three arrows around a box labeled "AI": Plan, then Act, then Check, then back to Plan. A small flag labeled "You: approve the plan" sits at Plan. Another flag labeled "You: define done" sits at Check. The only exit arrow leaves from Check and leads to a box labeled "Done". From Act, a red spiral branches off labeled "Off track", with a note "stop and narrow it".',
	},
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
	worked: {
		title: 'One bug, start to finish',
		intro: 'A real-sized task in a web app. Watch where you spend your minutes: the request, the plan, one stop. The agent does the rest.',
		steps: [
			{
				label: '1. Ask, with a finish line',
				you: 'Bug: the date filter drops items from the last day of the month. Before you edit anything, show me your plan. Done when: `npm test -- date-filter` passes, a new test covers this bug, and you touch no unrelated files.',
			},
			{
				label: '2. The agent plans',
				ai: 'Plan: 1) Read src/filters/dateFilter.ts and its test file. 2) Add a test for an item dated Jan 31. 3) Fix the end-of-range check. 4) Also tidy up the date utils while I am there.',
			},
			{
				label: '3. You fix the plan in one line',
				you: 'Skip step 4. Write the test first and show me it failing.',
				note: 'Ten seconds of reading just saved you a surprise refactor.',
			},
			{
				label: '4. Failing test, then passing',
				code: `it('keeps items from the last day of the month', () => {
  const items = [{ id: 1, date: '2026-01-31T18:00:00' }];
  const result = filterByMonth(items, 2026, 1);
  expect(result).toHaveLength(1);
});

$ npm test -- date-filter
  FAIL  date-filter.test.ts
  x keeps items from the last day of the month
    Expected length: 1, Received length: 0

# after the fix (range now ends at the end of Jan 31, not its start)
$ npm test -- date-filter
  PASS  date-filter.test.ts (6 tests)`,
				note: 'The red run proves the test catches the bug. The green run proves the fix.',
			},
			{
				label: '5. The off-track moment',
				ai: 'One older test still fails on a time zone edge case. I can relax that assertion to compare dates only, and then everything passes.',
			},
			{
				label: '6. Your stop line',
				you: 'No. Do not change existing tests. Tell me why it fails and what you think the real fix is.',
				note: 'Green tests only count if they are the tests you trust.',
			},
			{
				label: '7. Save it as a skill',
				code: `fix-a-bug.md

When I ask you to fix a bug:
1. Reproduce it with a failing test first. Show me the failure.
2. Give me a short plan (files, change, test) before any edits.
3. Change only what the plan names.
4. Run the check command I gave you and show the output.
5. Never weaken, skip or delete an existing test.
6. If two attempts fail, stop and ask. Do not try a third.
7. When done, list the files you changed.`,
				note: 'Put a file like this in your tool\'s instructions or skills folder. Next bug, you say "fix this bug" and the rules come along.',
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
