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
				'Say you need a one-page breakdown of three competitors. The micromanager asks for one section, reads it, fixes it, then asks for the next. Two hours later the page is fine, but they did most of the thinking. Every step waited on them.',
				'The manager writes one ask instead: "A one-page breakdown of these three competitors. Cover price, who they sell to, and their top three features. Use these five sources. Flag anything you could not check." Then they walk away. They come back to a near-final draft and only check the flagged parts.',
				'Same person, same tool. One handed over keystrokes. The other handed over a problem.',
			],
		},
		{
			heading: 'What a good handoff needs',
			body: [
				'A clear outcome and the inputs. Say what you want at the end and what it should work from. "A one-page plan, using these notes" beats "help me plan".',
				'The context it needs. Who it is for, what matters, what to avoid. It cannot read your mind, so give it the few facts a new helper would ask about.',
				'A check that is not the AI. The AI will always say it did a great job. So pick a test you can run yourself: a list of must-haves, a number that has to add up, tests that have to pass.',
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
				'When the result comes back, do not just skim it and smile. Hold it up against your "done when" list. Look first at anything it flagged as unsure.',
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
