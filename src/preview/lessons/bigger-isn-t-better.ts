import type { Lesson } from '../lessons';

export const lesson: Lesson = {
	n: 16,
	slug: 'bigger-isn-t-better',
	title: "Bigger isn't better",
	idea: 'Use the cheapest, fastest model that does the job. Step up only when the job truly needs it.',
	minutes: 9,
	sections: [
		{
			heading: 'The biggest one feels like the safe pick',
			body: [
				'Many AI apps let you pick a model. A model is the "brain" behind the chat. Some are big thinking models. Others are quick, light ones.',
				'Most people reach for the biggest one. It sounds smartest. It often costs the most. Surely it gives the best answer?',
				'That hunch feels safe. It is also one of the most common ways people waste time and money with AI. Here is why, one plain step at a time.',
			],
		},
		{
			heading: 'Bigger is slower.',
			body: [
				'A big thinking model works through a lot before it answers. That takes time. Sometimes a few seconds, sometimes a minute or more.',
				'A quick model answers almost at once. For a short email or a list, it is done before you finish your sip of coffee.',
			],
		},
		{
			heading: 'Slower means fewer tries.',
			body: [
				'Here is the part most people miss. The first answer is rarely the one you keep. You read it, spot what is off, and say "warmer" or "shorter" or "you forgot the date".',
				'With a quick model, you can try, look and adjust four times in the time one big answer takes. With the big model, you get one shot, then you wait again.',
			],
		},
		{
			heading: 'Fewer tries means worse results.',
			body: [
				'Quality does not come from one perfect answer. It comes from trying again. Each round, you get closer to what you really meant.',
				'So the quick model often wins, even if each single answer is a bit plainer. Four honest tries beat one long guess.',
			],
		},
		{
			heading: 'Bigger costs more.',
			body: [
				'Cost is not only money. The big model can cost many times more per request. It also eats your usage limit faster. That is the cap on how much you can use the app each day or month. And it costs you waiting.',
				'For one person, that is a small leak. For a team that uses the big model for every little job, all day, it multiplies into a real bill and a lot of staring at the screen.',
			],
		},
		{
			heading: 'Bigger is not always better at the job.',
			body: [
				'"Powerful" is not the same as "right for this". Models are good at different things.',
				'Big thinking models shine on hard, many-step problems: a tricky plan, a long document full of moving parts, a bug buried in lots of code. On a simple job, they can overthink. You ask for a friendly two-line note and get a careful essay.',
				'Quick models are great at everyday writing, edits and summaries. And some smaller models are specialists. One might be very good at code, another at reading pictures. The best pick depends on the job, not on the price tag.',
			],
		},
		{
			heading: 'Start quick. Step up. Step back down.',
			body: [
				'Start with the quick model. If it misses, say what was wrong and try again.',
				'Step up to the big thinking model when the quick one fails twice on the same thing, or when the job is truly hard from the start.',
				'Then step back down. Once the hard part is solved, go back to the quick model for the next everyday job. Bigger is a tool you pick up, not a place you live.',
			],
		},
		{
			heading: 'Not a trade-off',
			body: [
				'You might think this is about saving money at the cost of quality. It is not. The right model is often cheaper, faster and better, all at once.',
				'Smarter habits beat a bigger brain. Pick the quick one, try often, and save the big one for the jobs that earn it.',
			],
		},
	],
	diagram: {
		caption: 'Same two minutes. One big answer, or four quick tries that keep getting better.',
		describe:
			'A timeline two minutes long, drawn twice with the same layout. Top row, "Big model": one long gray bar filling the whole two minutes, with a single answer dot at the very end. Bottom row, "Quick model": four short green bars labeled try 1 to try 4. Under each try is a quality dot that grows bigger each time, and try 3 gets a check mark. Below: "Same two minutes."',
	},
	figures: [
		{
			id: 'cost',
			afterSection: 4,
			caption: 'The same 100 everyday jobs. The big model costs about ten times more.',
			describe:
				'Two coin stacks side by side for 100 everyday requests. The quick model has one small green stack. The big model has a red stack about ten times taller, labeled "about 10x". A note below says "and your usage limit runs out sooner".',
		},
		{
			id: 'fit',
			afterSection: 5,
			caption: 'It depends on the job. Pick the model that fits, not the biggest.',
			describe:
				'A table with four jobs as rows and two columns, Quick and Big thinking. Rewrite an email: quick is the best fit, big works but is overkill. Summarize a page: quick is the best fit, big is overkill. Plan a tricky project: quick struggles, big is the best fit. Find a bug in big code: quick struggles, big is the best fit. A filled check marks best fit, a light dot marks overkill or struggles.',
		},
	],
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
