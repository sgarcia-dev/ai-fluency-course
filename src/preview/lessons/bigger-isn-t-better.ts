import type { Lesson } from '../lessons';

export const lesson: Lesson = {
	n: 16,
	slug: 'bigger-isn-t-better',
	title: "Bigger isn't better",
	idea: 'Use the cheapest, fastest model that does the job. Step up only when the job truly needs it.',
	minutes: 8,
	sections: [
		{
			heading: 'Most apps give you a choice',
			body: [
				'Many AI apps let you pick a model. A model is the "brain" behind the chat. Some are big "thinking" ones. Others are quick, light ones.',
				'It is easy to think the biggest one is always best. It sounds smarter, and it often costs more. But for most jobs, it is the wrong pick.',
			],
		},
		{
			heading: 'Big costs more than money',
			body: [
				'The big model is slower. You wait longer for every answer. It also costs more, either in money or in your daily usage limit, the cap on how much you can use the app.',
				'For everyday jobs, like rewriting an email or making a list, the quick model does just as well. And because it answers fast, you can try again right away.',
				'That is the secret. Good results rarely come on the first try. They come from trying, checking and asking again. Three quick tries usually beat one slow one.',
			],
		},
		{
			heading: 'A simple rule',
			body: [
				'Start with the quick model. If it misses, say what was wrong and try again. If it fails twice on the same thing, step up to the big model.',
				'Also step up if the job is truly hard from the start: a long tricky document, a plan with many moving parts, or a puzzle you could not solve yourself. That is what the big model is for.',
			],
		},
		{
			heading: 'For teams, it adds up',
			body: [
				'One person picking the big model for every small job wastes a little. A whole team doing it every day wastes a lot, in money and in waiting.',
				'So this is not a trade-off between cheap and good. The right model is often cheaper, faster and better, all at once.',
			],
		},
	],
	diagram: {
		caption: 'Same simple job. The quick one finishes, and has time to try again.',
		describe:
			'Two runners on the same simple track labeled "Rewrite this email". The top runner is big and slow, with a "$$$" price tag and a clock, and is only at the halfway mark. The bottom runner is small and quick, already at the finish line, with a note that says "Tried 3 times". Below is a small ladder with two steps, "Quick" at the bottom and "Big" at the top, and the words "Start quick. Step up only when it fails."',
	},
	examples: {
		everyday: {
			before: 'Picks the big thinking model to fix the spelling in a birthday card message, then waits.',
			after:
				'Picks the quick model: "Fix the spelling and make this birthday message a bit warmer." Gets an answer in seconds, then asks once more: "Shorter, please."',
			why: 'A small job does not need a big brain. The quick model gave two tries in the time one slow answer would take.',
		},
		office: {
			before: 'Uses the big model to turn meeting notes into a short to-do list, every day, for the whole team.',
			after:
				'Uses the quick model for the daily to-do list. Steps up to the big model only for the yearly budget plan, which has many numbers and trade-offs.',
			why: 'Everyday tasks stay fast and cheap. The big model is saved for the job that is truly hard.',
		},
		code: {
			before: 'Asks the big model to rename a variable across one file.',
			after:
				'Asks the quick model for the rename. Later, a bug that only happens sometimes stumps the quick model twice, so you step up to the big model with the error and what you tried.',
			why: 'Simple edits go to the quick model. Stepping up after two misses on a hard bug is the right reason.',
		},
	},
	tryThis: {
		title: 'Race the two models',
		steps: [
			'Open any free AI chat app that lets you pick a model, or switch between a quick mode and a thinking mode.',
			'With the quick option, ask: "Rewrite this to sound friendlier: I can\'t come Saturday." Then ask it again a second way.',
			'Switch to the big or thinking option and ask the same thing once. Compare: which was faster, and was the big answer really better?',
			'No choice in your app? Just time one answer, then ask "make it shorter" twice. Notice how quick tries get you there.',
		],
	},
	check: {
		question: 'You want to turn a few notes into a short thank-you text. Which model should you start with?',
		options: [
			'The big model, because it is the smartest.',
			'The quick model, and step up only if it fails twice.',
			'The big model, then the quick one to check it.',
		],
		answer: 1,
		explain:
			'A short text is an everyday job. The quick model does it well and lets you try again fast. If it keeps missing, then the big model is worth it.',
	},
	next: 'Next stop: Read the hype',
};
