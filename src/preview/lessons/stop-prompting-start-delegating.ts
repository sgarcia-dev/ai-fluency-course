import type { Lesson } from '../lessons';

export const lesson: Lesson = {
	n: 20,
	slug: 'stop-prompting-start-delegating',
	title: 'Stop prompting, start delegating',
	idea: 'Hand over the goal and the finish line, not the steps. Then check what comes back.',
	minutes: 9,
	sections: [
		{
			heading: 'Two ways to do the same job',
			body: [
				'Say you need a one-page breakdown of three competitors. The micromanager asks for one section, reads it, fixes it, then asks for the next. Two hours later the page is fine, but every step waited on them.',
				'The manager writes one ask instead: "A one-page breakdown of these three competitors. Cover price, who they sell to, and their top three features. Use these five sources. Flag anything you could not check." Then they walk away, come back to a near-final draft, and check the flagged parts.',
				'Same person, same tool. One handed over keystrokes. The other handed over a problem.',
			],
		},
		{
			heading: 'What a good handoff needs',
			body: [
				'A clear outcome and the inputs. Say what you want at the end and what it should work from. "A one-page plan, using these notes" beats "help me plan".',
				'The context it needs. Who it is for, what matters, what to avoid. Give it the few facts a new helper would ask about.',
				'A check that is not the AI. It will always say it did a great job. So pick a test you can run yourself: a list of must-haves, a number that has to add up, tests that have to pass.',
			],
		},
		{
			heading: 'Ask for the plan first',
			body: [
				'Before it does the whole job, ask it to reply with its plan. A short list of steps is quick to read. A finished 20-page report is not.',
				'If the plan is off, you fix it in one sentence. If it looks good, say "go". You spend a minute steering instead of an hour fixing.',
			],
		},
		{
			heading: 'Check the work like a manager',
			body: [
				'Do not just skim the result and smile. Hold it up against your "done when" list. Look first at anything it flagged as unsure.',
				'If it missed, say which check failed. That is clearer than "try again", and it teaches you what to write in the next handoff.',
			],
		},
	],
	diagram: {
		caption: 'Prompting makes you the middle of every step. Delegating hands over the whole job.',
		describe:
			'Two panels side by side. Left panel, titled "Prompting": you sit between many small arrows going back and forth with the AI, one step at a time. You are the bottleneck. Right panel, titled "Delegating": you hand the AI one card that reads Goal, Context, Done when. The AI runs its own loop of plan, work, check, and hands back one result that passes a check mark gate.',
	},
	examples: {
		everyday: {
			before:
				'Find flights to Denver. Now find hotels. Now which one is near the zoo? Now add a place to eat. Now what about the second day?',
			after:
				'Plan a three-day family trip to Denver in June for two adults and two kids aged 7 and 10. Context: we like parks and the zoo, and hate long drives. Done when: total under $2,000, each day has one big thing and a lunch stop, no drive over 40 minutes. Stop and ask if: prices are only guesses. Reply with your plan first.',
			why: 'It gives the goal, the context and the finish line in one go, so the AI does the steps and you check the result.',
		},
		office: {
			before:
				'Write the intro for the competitor report. Okay, now the pricing part. Now make a table. Now fix the table.',
			after:
				'Make a one-page breakdown of our three main competitors for the sales team. Use the five attached sources. Context: sales wants talking points, not history. Done when: covers price, who they sell to and top three features, every claim has a source. Stop and flag if: a claim cannot be checked. Show me your outline first.',
			why: 'One brief replaces a dozen back-and-forth asks, and the sources plus flags give you a way to check it.',
		},
		code: {
			before:
				'Add a date field to the form. Now save it. Now show it on the profile page. Now fix that error.',
			after:
				'Let users add a birthday to their profile. Context: the profile form and its tests are in the profile folder. Done when: the date saves, shows on the profile page, all tests pass, and there is a new test for an empty date. Stop and ask if: you need to change the database. Reply with your plan before writing code.',
			why: 'It names the result and a check that is not the AI (the tests), and asks for the plan before any code.',
		},
	},
	worked: {
		title: 'A real Friday job: 40 comments into one page',
		intro: 'Your boss wants the customer comments summed up for Monday\'s meeting. They sit in a spreadsheet, one per row. Here is the whole handoff, start to finish.',
		steps: [
			{
				label: '1. The brief you paste in',
				you: 'Goal: a one-page summary of the 40 customer comments in the attached spreadsheet.\nWho it is for: my team at Monday\'s meeting. They have five minutes to read it.\nInputs: the "Comments" column. Ignore the other columns.\nDone when: it fits on one page, it lists the top 3 complaints and top 3 praises, each point shows how many comments said it, and it quotes one real comment per point.\nStop and ask if: a comment is unclear or you are not sure where it fits.\nReply with your plan first. Do not write the summary yet.',
				note: 'Five parts: goal, reader, inputs, done when, stop if. The "done when" list is what you will check against later.',
			},
			{
				label: '2. The AI replies with a plan',
				ai: 'Goal: a one-page summary of 40 comments for a five-minute read.\nPlan:\n1. Read every comment and tag it.\n2. Sort them by date, then count.\n3. Pick the top 3 complaints and top 3 praises.\n4. Add counts and one quote each.\nOne question: rows 12 and 31 say "test test". Should I count them?',
				note: 'A plan takes 20 seconds to read. Here you spot a problem before any work is done.',
			},
			{
				label: '3. Your one-line fix',
				you: 'Group by theme, not by date, and skip the two test entries. Go.',
				note: 'One sentence steers the whole job. Fixing a finished page would take much longer.',
			},
			{
				label: '4. A bit of the result',
				ai: 'Top complaints\n1. Slow delivery (11 of 38). "Took two weeks, no update."\n2. Hard to reach support (7 of 38). "I waited 40 minutes on hold."\n3. Confusing invoices (5 of 38).\n\nTop praises\n1. Friendly staff (9 of 38). "Maria fixed it in one call."',
			},
			{
				label: '5. Your two-minute check',
				you: 'Point 3 under complaints has no quote. Add one real comment for it.',
				note: 'You went down the "done when" list: one page, yes. Top 3 each, yes. Counts, yes. A quote per point, no. So you name the failed check in one line, not "try again".',
			},
		],
	},
	tryThis: {
		title: 'Get the plan first',
		steps: [
			'Open any free AI chat app. Pick a small real job, like planning dinners for the week.',
			'Write it as an outcome: "Plan five dinners for two people. Context: one of us is vegetarian. Done when: under $60 total and each takes under 30 minutes."',
			'Add: "Before you do it, reply with your plan in five lines or fewer."',
			'Read the plan. Fix one thing in a sentence, then say "go". Check the result against your "done when" list.',
		],
	},
	check: {
		question: 'Which handoff is most likely to come back right without a lot of fixing?',
		options: [
			'"First list some recipes. Then I will tell you what to do next."',
			'"Plan five cheap dinners. Context: one of us is vegetarian. Done when: under $60. Show me your plan first."',
			'"Plan dinners and make them really good, I trust you."',
		],
		answer: 1,
		explain:
			'The second one gives the goal, the context and a finish line you can check yourself, and asks for the plan first. Steps one at a time keep you stuck in the middle, and trust alone gives it nothing to aim at.',
	},
	next: 'Next stop: Instructions it always reads',
};
