import type { Lesson } from '../lessons';

export const lesson: Lesson = {
	n: 4,
	slug: 'sure-of-itself-still-wrong',
	title: 'Sure of itself, still wrong',
	idea: 'AI sounds just as confident when it is wrong as when it is right. Its tone tells you nothing, so check with proof from outside it.',
	minutes: 7,
	sections: [
		{
			heading: 'Same voice, right or wrong',
			body: [
				'Ask an AI chat a question and you get a calm, clear, friendly answer. Ask it something it does not really know, and you get the same calm, clear, friendly answer. There is no shaky voice. No "um". No blush.',
				'That is the whole lesson in one line: how sure the AI sounds tells you nothing about whether it is right.',
				'With people, we learn to read tone. A friend who hesitates is probably guessing. With AI, that habit fools you. It never hesitates, so you have to look somewhere else for the truth.',
			],
		},
		{
			heading: 'Why it happens',
			body: [
				'An AI chat works by guessing the next words that would most likely come next, over and over, until it has an answer. It is very good at this. But "likely to sound right" is not the same as "true".',
				'Answers from memory are the riskiest. A date, a quote, a dose, a phone number, the name of a book: the AI fills the gap with something that fits the pattern. Often it is correct. Sometimes it is made up, and it reads exactly the same.',
				'It is not lying. It has no idea it is wrong. That is why asking it to be honest does not fix it.',
			],
		},
		{
			heading: 'When it matters',
			body: [
				'For a birthday poem, a wrong word costs nothing. For your health, your money, a date you must not miss, or words you will say someone else said, a wrong answer can cost a lot.',
				'A good rule: the more it would hurt to be wrong, the more you check. Small stakes, enjoy the help. Big stakes, get proof.',
			],
		},
		{
			heading: 'Check with proof from outside',
			body: [
				'Proof has to come from outside the AI. A real source you open yourself. A calculator. A test you run. A person who knows, like your pharmacist or your bank.',
				'Three simple habits. Ask for the source, then open it and see if it really says that. Do the numbers yourself, even roughly. And do not count "Are you sure?" as a check: the AI will usually just agree with itself, or swap one confident answer for another.',
				'Think of AI as a fast, eager helper who never says "I am not sure." Useful, yes. But you are the one who checks.',
			],
		},
	],
	diagram: {
		caption: 'Same confident face. Only an outside check shows which answer is right.',
		describe:
			'Two speech bubbles side by side, both coming from the same small AI character with the same calm, confident smile. Left bubble says "The meeting is on March 3." Right bubble says "The meeting is on March 5." The bubbles look identical in style and color, so tone gives no clue. Below them, a magnifying glass held over a printed calendar (the source), and next to it a simple calculator. A green check mark appears only on the bubble that matches the calendar, and a red cross on the other. The check marks come from the magnifier, not from the AI.',
	},
	tryThis: {
		title: 'Catch a confident guess',
		steps: [
			'Open any free AI chat and ask: "Give me an exact quote from a famous speech, with the year and the place."',
			'Ask it: "Where can I read that? Give me the source."',
			'Search for the quote yourself and see if the words, the year and the place all match.',
			'Notice: did the answer sound any less sure in the parts that were wrong?',
		],
	},
	check: {
		question: 'The AI gives you a medicine dose and sounds completely sure. What should you do?',
		options: [
			'Trust it, since it sounded so sure.',
			'Ask it "Are you sure?" and go with its reply.',
			'Check the dose on the label or with a pharmacist.',
			'Ask the same question again and see if it matches.',
		],
		answer: 2,
		explain:
			'Good thinking if you picked the label or the pharmacist. The AI sounds sure whether it is right or not, and asking it again only gets it to agree with itself. Proof has to come from outside the AI.',
	},
	next: 'Next: "Check it with real proof", simple ways to check an answer fast.',
};
