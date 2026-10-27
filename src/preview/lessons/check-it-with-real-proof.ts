import type { Lesson } from '../lessons';

export const lesson: Lesson = {
	n: 12,
	slug: 'check-it-with-real-proof',
	title: 'Check it with real proof',
	idea: 'Trust a source, a test or a calculator, not its tone. Pick a check that fits how much it costs to be wrong.',
	minutes: 8,
	sections: [
		{
			heading: 'Asking again is not a check',
			body: [
				'When an answer looks off, it is tempting to type "Are you sure?" But the AI often just says yes. Or it flips to a new answer to please you. Neither tells you which one is true.',
				'Asking the same AI the same question again has the same problem. You get a second guess from the same guesser. A real check comes from outside the chat: something that does not care what the AI said.',
			],
		},
		{
			heading: 'Your small toolkit',
			body: [
				'Open the source. If it names a website, a book or a rule, go look. Does the page exist? Does it really say that? Made-up links and quotes fall apart in one click.',
				'Redo the math. Put the numbers into a calculator yourself. Run the code or test the steps, and see if they really work. Compare with something you already trust, like your bill, your calendar, or last year\'s report.',
				'And when it really matters, ask a person who knows: a pharmacist, an accountant, a coworker who owns that system.',
			],
		},
		{
			heading: 'When to check: the cost of being wrong',
			body: [
				'You do not need to check everything. Ask one question: "What happens if this is wrong?"',
				'A movie suggestion or a birthday poem? Just glance at it. A recipe swap, a date, a fact you will repeat to others? Do one quick check. Money, health, the law, or code other people use? Check twice, and ask a person.',
			],
		},
		{
			heading: 'Make checking easy',
			body: [
				'You can help yourself before the answer even arrives. Ask the AI to show its sources, list its numbers, or tell you how you could test it. That gives you something to check, fast.',
				'Just remember: the AI listing sources is not the check. Opening them is.',
			],
		},
	],
	diagram: {
		caption: 'Proof comes from outside the chat. The higher the stakes, the more you check.',
		describe:
			'An AI answer card sits in the middle, with a question mark on it. Around it are three check tools, each with an arrow pointing at the card: an open book labeled "Source", a calculator labeled "Math", and a box with a check mark labeled "Test". Below is a stakes dial. The low end is labeled "Low: glance" and the high end is labeled "High: check twice, ask a person". The needle sits near the high end.',
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
			'Both of the first two ask the same guesser again. It can agree with itself and still be wrong. For health, the stakes are high, so check the label and ask a person who knows.',
	},
	next: 'Next stop: "Ask for the plan first", see the steps before the AI does the work.',
};
