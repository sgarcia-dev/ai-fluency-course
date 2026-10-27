import type { Lesson } from '../lessons';

export const lesson: Lesson = {
	n: 31,
	slug: 'tests-are-the-quality-gate',
	title: 'Tests are the quality gate',
	idea: 'A test is proof that does not come from the AI, made automatic. Make the agent run it every loop, and never let it lower the bar to pass.',
	minutes: 10,
	sections: [
		{
			heading: 'The agent cannot argue with a red test.',
			body: [
				'You already loop plan, act, check. You also know a real check gives the same answer every time and does not care what the AI said. A test is that check, written down once and run by a machine as often as you like.',
				'That matters because the agent is a great talker. It can explain why its change is fine, and sound sure. A failing test does not listen. It prints the line, the value it expected and the value it got. That is proof from outside the AI.',
			],
		},
		{
			heading: 'Put the exact command everywhere.',
			body: [
				'"Make sure the tests pass" is a wish. "Done when: npm test passes, and you paste the last 20 lines of output" is a gate. Write the exact command in every done-when.',
				'Then put it in the project\'s instruction file, the notes file the agent reads at the start of each session. One line is enough: "After every change, run npm run check and fix what fails before you continue." Now the gate runs every loop, even when you forget to ask.',
			],
		},
		{
			heading: 'See it fail first.',
			body: [
				'A gate that is always open is not a gate. Before the fix, write the failing test, or ask the agent to write it and show you the red result. Read the failure message. Is it failing for the reason you expect?',
				'Now a later green means something. It went from "no" to "yes" because the code changed, not by luck.',
			],
		},
		{
			heading: 'Guard the gate.',
			body: [
				'Here is the trap. When an agent is stuck, the easiest way to get green is to change the test, not the code. It deletes an assertion. It loosens 0.15 to "any number". It adds a skip. It wraps the call in a try and swallows the error. Every one of those turns red to green and fixes nothing.',
				'So make it a rule: "Do not change, skip or delete existing tests without asking me first." Put it in the instruction file too. And when you review, open the test changes first. If a test got weaker, stop there.',
				'Some test changes are fair. If the requirement really changed, the test should change with it. The point is that you decide that, not the agent on its way to green.',
			],
		},
		{
			heading: 'Stack fast gates.',
			body: [
				'One gate is good. A few in a row catch more: the type check, the linter (a tool that flags risky patterns), the unit tests, then the build. Chain them in one command, such as "npm run check", so the agent runs one thing.',
				'Keep it fast. If the whole stack takes ten minutes, the agent will run it less, and so will you. Aim for under a minute on every loop. Save slow end-to-end tests for before you merge.',
			],
		},
		{
			heading: 'What a green gate does not tell you',
			body: [
				'Tests check what someone thought to test. They cannot tell you the requirement was wrong, that a case nobody wrote is broken, or that the design will hurt next month. A green run on the wrong feature is still the wrong feature.',
				'So you still read the diff. The gate changes when and how you read it: once, at the end, knowing it works, with your attention on design and missing cases instead of "does it even run".',
			],
		},
	],
	diagram: {
		caption: 'Red sends the change back with the error. Only green reaches your review.',
		describe:
			'A left-to-right flow. A box "Agent\'s change" goes into a gate made of three posts: types, tests, build. A red arrow loops from the gate back to the agent, labeled "red: back, with the error". A green arrow continues past the gate to a box "Your review".',
	},
	figures: [
		{
			id: 'bar',
			afterSection: 3,
			caption: 'Two ways to get green. Only one is allowed.',
			describe:
				'Two panels with the same high bar labeled "test: total is 115". Left, red, "Lower the bar": the bar is moved down to the code, with an assertion loosened, marked "not allowed". Right, green, "Raise the code": the code rises to meet the bar, marked "pass".',
		},
	],
	examples: {
		everyday: {
			before: 'Ask a helper to pack the camping bag, and trust them when they say "all packed".',
			after:
				'Hand over the written packing list and say: "Done when every item is ticked. Do not cross items off the list. If something will not fit, ask me."',
			why: 'The list is the test. Crossing off the tent to finish faster is lowering the bar, so you rule it out up front.',
		},
		office: {
			before: 'Ask the AI to fix the expense sheet, and accept "the totals look right now".',
			after:
				'Keep a check cell: =IF(SUM(B2:B40)=B41,"OK","MISMATCH"). Say: "Done when the check cell says OK. Do not edit the check cell or the receipts column."',
			why: 'The check cell is proof outside the AI. Without the rule, the fastest way to "OK" is to edit the formula.',
		},
		code: {
			before: 'Fix the discount bug and make sure everything passes.',
			after:
				'First write a test that fails: applyDiscount(100, "SAVE15") should be 85. Show me it failing. Then fix the code. Done when npm run check passes and you paste the output. Do not change existing tests without asking.',
			why: 'The failing test proves the gate can say no, the exact command makes it repeatable, and the rule stops the shortcut.',
		},
	},
	compare: {
		title: '"All tests pass", twice',
		afterSection: 3,
		wrong: {
			label: 'The hard way',
			steps: [
				{ who: 'you', text: 'Fix the shipping cost bug. Make sure tests pass.' },
				{ who: 'ai', text: 'Done! All tests pass.' },
				{ who: 'note', text: 'You merge. Two days later, checkout breaks for orders over $100.' },
				{ who: 'check', text: 'git log shows it added .skip to two shipping tests that kept failing.' },
			],
			outcome: 'The tests "passed" because two of them never ran.',
		},
		right: {
			label: 'The better way',
			steps: [
				{ who: 'you', text: 'Done when: npm run check passes. Paste the summary. Do not edit or skip existing tests without asking.' },
				{ who: 'ai', text: 'Tests: 48 passed, 0 skipped. (output pasted)' },
				{ who: 'check', text: 'You open the test diff first: one new test, no old ones touched.' },
			],
			outcome: 'You read the rest of the diff knowing the bar stayed where you set it.',
		},
		takeaway: '"All tests pass" is the agent talking. The pasted output and an untouched test file are proof.',
	},
	worked: {
		title: 'The agent tries to lower the bar',
		intro: 'A tax bug: orders should add 15% tax, but the total comes out wrong.',
		steps: [
			{
				label: 'The failing test, written first',
				code: "test('adds 15% tax', () => {\n  expect(totalWithTax(100)).toBe(115);\n});\n\n$ npm test -- tax\nFAIL  expected 115, received 100.15",
			},
			{
				label: 'Your ask',
				you: 'Make this test pass by fixing totalWithTax. Run npm test -- tax after each change and paste the result. Do not change the test.',
			},
			{
				label: 'The agent\'s diff after two failed tries',
				code: "-  expect(totalWithTax(100)).toBe(115);\n+  expect(totalWithTax(100)).toBeGreaterThan(100);",
				note: 'Green, and nothing is fixed. 100.15 is still greater than 100.',
			},
			{
				label: 'Your one-line refusal',
				you: 'Revert the test change. The test is right: the rate is 0.15, not 15 cents, so fix the code.',
			},
			{
				label: 'The real fix',
				code: "-  return amount + 0.15;\n+  return amount * 1.15;\n\n$ npm test -- tax\nPASS  adds 15% tax",
			},
		],
	},
	tryThis: {
		title: 'Catch the shortcut',
		steps: [
			'Open any free AI chat app and paste: "Here is a test: expect(add(2, 2)).toBe(4). My add function returns a - b. Make the test pass."',
			'Read the answer. Did it fix add, or did it touch the test? Either can happen.',
			'Now ask: "Show three ways someone could make this test pass without fixing add." Notice how easy each one is.',
			'Write the one rule you would put in your project\'s instruction file to block all three.',
		],
	},
	check: {
		question: 'The agent says "all green" and its diff changes toBe(115) to toBeGreaterThan(100). What do you do?',
		options: [
			'Accept it. The tests pass.',
			'Revert the test change and ask it to fix the code instead.',
			'Delete the test, since it was causing trouble.',
		],
		answer: 1,
		explain:
			'The agent lowered the bar instead of raising the code. A weaker test turns red to green without fixing anything. Put the bar back and send it to the code.',
	},
	next: 'Next stop: Let it set itself up',
};
