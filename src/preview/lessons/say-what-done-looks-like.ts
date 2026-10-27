import type { Lesson } from '../lessons';

export const lesson: Lesson = {
	n: 9,
	slug: 'say-what-done-looks-like',
	title: 'Say what “done” looks like',
	idea: 'A vague ask gets confident work on the wrong thing. Say what you want, who it is for, and how you will know it is done.',
	minutes: 8,
	sections: [
		{
			heading: 'It aims at what you said',
			body: [
				'AI cannot see what is in your head. It only sees what you typed. Ask for something vague and it fills the gaps with a guess. Then it does the guess very well.',
				'That is the trap. The answer looks polished and sure of itself. It is just not what you wanted, so you read it, spot the problem, and ask again.',
			],
		},
		{
			heading: 'Three things to say',
			body: [
				'What you want: the thing itself. A short message, a list, a plan, a fix.',
				'Who it is for: your doctor, your boss, your grandkids, other engineers. This sets the words, the length and the tone.',
				'Done when: the finish line. "Under 100 words." "Includes the date." "All the tests pass." If you can check it, the AI can aim for it.',
			],
		},
		{
			heading: 'The "done when" line',
			body: [
				'End your ask with "Done when:" and two or three plain checks. It takes ten seconds.',
				'It helps twice. The AI aims at the right target. And when the answer comes back, you already have a checklist to judge it. No more "hmm, is this good?"',
			],
		},
		{
			heading: 'You do not need fancy words',
			body: [
				'There are no magic phrases. Brief the AI the way you would brief a helpful stranger: what you need, who it is for, and what good looks like.',
				'If the first answer misses, do not just say "try again". Say which check it missed. That is how you get there fast.',
			],
		},
	],
	diagram: {
		caption: 'Same ask, same target. Only the checklist changes where it lands.',
		describe:
			'Two panels with the same target. Left, "Vague ask": a card says "Write something for the doctor". The arrow flies past and lands well outside the target, marked with a red X and the words "Polished. Wrong thing." Right, "Clear ask": the same card plus a "Done when" checklist, all ticked: under 100 words, mentions the date, asks to call back. The arrow hits the bullseye, labeled "Exactly what you meant".',
	},
	figures: [
		{
			id: 'three',
			afterSection: 1,
			caption: 'A good ask has three slots. Fill each one.',
			describe:
				'A fill-in card with three slots. What: a note to move my checkup. Who it is for: the front desk. Done when: under 100 words, has the date.',
		},
	],
	examples: {
		everyday: {
			before: 'Write a message to my doctor.',
			after:
				'Write a short, polite message to my doctor\'s office asking to move my Tuesday 10am checkup to next week. It is for the front desk. Done when: under 80 words, includes my name and date of birth, asks them to call me back.',
			why: 'It says what the message is for, who reads it, and what it must include, so you can check it in seconds.',
		},
		office: {
			before: 'Summarize this report.',
			after:
				'Summarize this report for my manager, who has two minutes before a budget meeting. Done when: five bullet points or fewer, the cost numbers are included, and any risk is in the first bullet.',
			why: 'The reader and the finish line tell the AI what to keep and what to cut.',
		},
		code: {
			before: 'Fix the login bug.',
			after:
				'Users who type their email with capital letters cannot log in. Fix that so email checks ignore upper and lower case. Done when: the existing tests pass, there is a new test for a mixed-case email, and no other files change.',
			why: 'It names the exact problem and gives checks you can run, so "fixed" means something you can prove.',
		},
	},
	tryThis: {
		title: 'Add a finish line',
		steps: [
			'In any free AI chat, type a vague ask: "Plan a day out for my family."',
			'Now ask again, adding who it is for and a "Done when:" line, for example: "For two grandparents and two kids aged 6 and 9. Done when: costs under $60, no more than 30 minutes of driving, and has a lunch stop."',
			'Compare the two answers. Which one could you actually use?',
		],
	},
	check: {
		question: 'Which ask is most likely to get what you want on the first try?',
		options: [
			'"Make me a shopping list."',
			'"Make me a great shopping list, please, it is important."',
			'"Make a shopping list for three dinners for two people. Done when: under $40 and no fish."',
		],
		answer: 2,
		explain:
			'The third one says what, who and when it is done. Saying "great" or "important" feels helpful, but it gives the AI nothing to aim at.',
	},
	next: 'Next: "The right context, not all of it", what to tell the AI and what to leave out.',
};
