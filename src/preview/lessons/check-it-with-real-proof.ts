import type { Lesson } from '../lessons';

export const lesson: Lesson = {
	n: 12,
	slug: 'check-it-with-real-proof',
	title: 'Check it with real proof',
	idea: 'A real check gives the same answer every time and does not care what the AI said. Match it to how much it costs to be wrong.',
	minutes: 8,
	sections: [
		{
			heading: 'A real check gives the same answer every time',
			body: [
				'Type 17 x 23 into a calculator. You get 391. Do it again tomorrow. You get 391. It does not matter who asks or how they ask. Same question in, same answer out, every time.',
				'The AI is different. It is a guesser. Ask it the same thing three times and you can get three answers. Most are right, but some are not, and it sounds just as sure either way.',
				'So a real check has two parts. It gives the same answer every time. And it does not care what the AI said.',
			],
		},
		{
			heading: 'Why "Are you sure?" is not a check',
			body: [
				'When an answer looks off, it is tempting to type "Are you sure?" But the AI often just says yes. Or it flips to a new answer to please you. Asking again in a new chat has the same problem. You get one more guess from the same guesser.',
				'Real checks live outside the chat. A calculator. A source you open and read. A test that passes or fails. A rule you can tick off, like "under 200 words" or "has the date in it".',
			],
		},
		{
			heading: 'Pick your check',
			body: [
				'Numbers? Put them in a calculator yourself. A fact or a quote? Open the source it named. Does the page exist, and does it really say that? Code or steps? Run them and see if they work.',
				'And when it really matters, ask a person who knows: a pharmacist, an accountant, a coworker who owns that system.',
			],
		},
		{
			heading: 'How much to check',
			body: [
				'You do not need to check everything. Ask one question: "What happens if this is wrong?" The worse the answer, the stronger your check.',
				'Tip: ask the AI to list its sources and numbers. That gives you something fast to check. But the list is not the check. Opening it is.',
			],
		},
	],
	figures: [
		{
			id: 'stakes',
			afterSection: 3,
			caption: 'The more it costs to be wrong, the stronger your check.',
			describe:
				'A three-step ladder. Low stakes, like a recipe tweak: glance at it. Medium stakes, like an email to your boss or a number in a report: check the key fact or redo the math. High stakes, like health, money, legal or code that ships: check with a source or a test, or ask a person. The color gets stronger as the stakes go up.',
		},
	],
	diagram: {
		caption: 'A real check gives the same answer every time.',
		describe:
			'Two columns side by side. Left, "Ask the AI again", with a dice icon: three tries of "What is 17 x 23?" give 381, 391 and 393. Two are marked wrong in red. Right, "Ask a calculator": three tries give 391, 391 and 391, all marked right in green.',
	},
	examples: {
		everyday: {
			before: 'The AI says you can take two of your allergy pills with your cold medicine, so you do.',
			after:
				'You read both labels, then call the pharmacist and ask: "Is it safe to take these two together?"',
			why: 'This is about your health, so the stakes are high. The labels and a person who knows are real proof. The AI\'s calm answer is not.',
		},
		office: {
			before: 'The AI sums up your team\'s costs as $48,200, and you paste that number into the slide.',
			after:
				'You add up the costs in a spreadsheet yourself, and open the report it quoted to see that the numbers match.',
			why: 'A wrong number in front of your boss costs trust. Redoing the math takes two minutes.',
		},
		code: {
			before: 'The AI says its fix handles empty input, so you merge it.',
			after:
				'You run the tests, then add one new test that passes in empty input and watch it pass. You also open the docs for the library function it used to make sure that function really exists.',
			why: 'A test that runs is proof. "This should work" is only a claim.',
		},
	},
	tryThis: {
		title: 'Catch it, or prove it right',
		steps: [
			'In any free AI chat, ask: "Give me three quotes about patience from famous people, with the exact book or speech each one comes from."',
			'Pick one quote and search for it with the source it named. Does that book or speech really contain it?',
			'Then ask: "What is 17.5% of $1,384?" Check it on your phone\'s calculator.',
			'Notice how you felt before checking. Then notice what you know now.',
		],
	},
	check: {
		question: 'The AI gives you a dose for your child\'s medicine. What is the best check?',
		options: [
			'Ask the AI "Are you sure?" and see if it says yes.',
			'Ask the same question again in a new chat and compare.',
			'Read the medicine label and call a pharmacist or doctor.',
		],
		answer: 2,
		explain:
			'Both of the first two ask the same guesser again, and a guesser can change its answer. It can agree with itself and still be wrong. For health, the stakes are high, so check the label and ask a person who knows.',
	},
	next: 'Next stop: "Ask for the plan first", see the steps before the AI does the work.',
};
