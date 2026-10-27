import type { Lesson } from '../lessons';

export const lesson: Lesson = {
	n: 20,
	slug: 'stop-prompting-start-delegating',
	title: 'Stop prompting, start delegating',
	idea: 'Hand over the goal and the finish line, not the steps. Then check what comes back.',
	minutes: 9,
	sections: [
		{
			heading: 'Steps or a goal.',
			body: [
				'There are two ways to hand work to an AI. You can tell it every step, one at a time: do this, now this, now fix that. Or you can tell it the goal and the finish line, and let it work out the steps.',
				'Engineers call these imperative and declarative. Imperative means "here is how". Declarative means "here is what I want". With the first, you do the thinking and the AI types. With the second, the AI does the thinking and you check.',
			],
		},
		{
			heading: 'The AI can loop. Let it.',
			body: [
				'When you give a goal, a good AI does not just answer once. It makes a plan, does a piece, checks it, and asks itself: "Is this done?" If not, it goes back and plans the next piece. It keeps going round until the answer is yes.',
				'When you give steps, that loop never starts. You are the loop. Every round trip waits on you to read, think and type the next step.',
			],
		},
		{
			heading: 'What a good handoff needs',
			body: [
				'The goal: what you want at the end. The context: who it is for, what to work from, what to avoid. The finish line: a "done when" list. Add one line for when it should stop and ask you.',
				'Then ask for its plan before it starts. A five-line plan takes 20 seconds to read. If it is off, you fix it in one sentence, not after an hour of work.',
			],
		},
		{
			heading: 'The check is what makes the loop work.',
			body: [
				'The loop only stops at the right place if something can decide "done". That something is your "done when" list. If the list is vague, like "make it good", the AI will decide it is done whenever it feels like it.',
				'Write things anyone could check: a count ("top 3 complaints, each with how many people said it"), a quote ("one real comment per point"), a format ("fits on one page"), a test that passes or fails. The AI saying "looks good" is not a check. It will always say that.',
				'When the result comes back, go down your list yourself. Look first at anything it flagged as unsure. If one item fails, name that item. "Point 3 has no quote" is far better than "try again".',
			],
		},
		{
			heading: 'When to keep steering',
			body: [
				'Delegating is not always right. For a tiny job, like one email reply, just ask. And when you do not know yet what you want, short back-and-forth helps you find out. Once you can write the finish line, hand over the goal.',
			],
		},
	],
	diagram: {
		caption: 'Prompting: you are in every round trip. Delegating: the AI loops until your "done when" list is met.',
		describe:
			'Two panels. Left, "Prompting: you give every step": you send step 1 to the AI, it comes back to you, you send step 2, back to you, step 3, and so on. You are in every round trip. Right, "Delegating: you give the goal": a card with Goal, Context and Done when goes in once. The AI loops Plan, Act, Check, then asks "Done?". No goes back to Plan. Yes goes out to the result, which you review.',
	},
	compare: {
		title: 'A real Friday job: 40 customer comments into one page',
		intro: 'Your boss wants the customer comments summed up for Monday\'s meeting. They sit in a spreadsheet, one per row. Here is the same job done both ways.',
		afterSection: 1,
		wrong: {
			label: 'You give every step',
			steps: [
				{ who: 'you', text: 'Here are 40 customer comments. Summarize them.' },
				{ who: 'ai', text: 'Customers have mixed feelings. Many mention delivery, support and staff...' },
				{ who: 'you', text: 'Too vague. List the main complaints.' },
				{ who: 'ai', text: 'Main complaints: delivery, support, invoices, the app, prices, packaging.' },
				{ who: 'you', text: 'Just the top 3. And how many said each?' },
				{ who: 'ai', text: 'Delivery (about 12), support (about 8), invoices (about 5).' },
				{ who: 'note', text: '"About"? You count them yourself. It is 11 and 7. Two rows were "test test".' },
				{ who: 'you', text: 'Use 11 and 7. Now do the praises the same way. Add a quote for each.' },
				{ who: 'ai', text: 'Here are the praises with quotes...' },
				{ who: 'you', text: 'Now put it all on one page for my team.' },
			],
			outcome: 'Two hours. You did the thinking.',
		},
		right: {
			label: 'You give the goal',
			steps: [
				{ who: 'you', text: 'Goal: a one-page summary of the 40 comments for my team on Monday. Five-minute read.\nDone when: top 3 complaints and top 3 praises, each with how many said it and one real quote. Fits on one page.\nStop and ask if a comment is unclear.\nReply with your plan first.' },
				{ who: 'ai', text: 'Plan: 1. Tag every comment. 2. Sort by date and count. 3. Pick the top 3 of each. 4. Add counts and quotes. Rows 12 and 31 say "test test". Count them?' },
				{ who: 'you', text: 'Group by theme, not date. Skip the two tests. Go.' },
				{ who: 'ai', text: 'Done. Checked against your list: one page, top 3 of each, counts out of 38, a quote per point. Two things I could not verify: comment 22 may be about a different product, and "slow app" and "app crashes" could be one theme or two.' },
				{ who: 'check', text: 'You go down your list and read the two flagged items. Two minutes.' },
			],
			outcome: 'Fifteen minutes of your time. Checked against your list.',
		},
		takeaway: 'Same person, same AI. One handed over keystrokes. The other handed over the goal and a finish line it could check.',
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
