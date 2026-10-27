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
				'That loop is the whole trick. It is also why an agent can do an hour of work in five minutes, or an hour of damage in five minutes. The loop does not know which one it is doing. It only knows what it was told and what the last command printed.',
			],
		},
		{
			heading: 'Two cheap places to step in',
			body: [
				'You could watch every edit. You will not, and you should not have to. Instead, step in at the two spots where a minute of your time saves the most.',
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
