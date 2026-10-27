import type { Lesson } from '../lessons';

export const lesson: Lesson = {
	n: 26,
	slug: 'the-real-cost-math',
	title: 'The real cost math',
	idea: 'You pay for every word the AI reads and writes, again and again. Keep chats short and focused, and you get the same result for less, and faster.',
	minutes: 9,
	sections: [
		{
			heading: 'You pay by the word.',
			body: [
				'AI is paid for by how much text it reads and how much it writes. The pieces are called tokens. A token is a small piece of a word, about three quarters of one.',
				'On a pay-as-you-go plan, more tokens means a bigger bill. On a flat monthly plan, the same math shows up another way: you hit your usage limit and have to wait.',
				'So the question is never "how many questions did I ask?" It is "how much text did the AI have to read and write?"',
			],
		},
		{
			heading: 'Every message re-sends the whole chat.',
			body: [
				'Here is the surprise. The AI does not remember your chat between messages. Each time you hit send, the app quietly sends the whole conversation again, from the very first line.',
				'Message 1 is short. Message 10 carries messages 1 to 9 with it. Message 40 carries a small book. Each new message costs more than the last, and it gets slower too, because there is more to read.',
				'Long chats also get worse. Old, half-wrong ideas from an hour ago are still in there, pulling the answer off course.',
			],
		},
		{
			heading: 'Where the money really goes',
			body: [
				'In a long chat, most of what you pay for is the AI re-reading things it has already seen. The answer you actually wanted is a thin slice.',
				'Thinking modes add more. They write a lot of hidden working notes before they answer. You never see that text, but you pay for it.',
				'Retries multiply it all. Ask the same thing five times and you pay five times. An agent that loops on its own, trying and failing, can run up dozens of rounds while you are getting coffee.',
			],
		},
		{
			heading: 'Bigger models cost more per piece.',
			body: [
				'You already know to start with the quick model. Here is the cost side of that habit: the big model charges more for every single token. So a long chat on a big model stacks two costs on top of each other.',
			],
		},
		{
			heading: 'Small habits, times a whole team',
			body: [
				'For one person on one day, all of this is small. That is why nobody notices.',
				'Now multiply. Twenty people, twenty work days a month, each living in one endless chat with the biggest model. That small leak becomes a real bill, or a whole team stuck at its usage limit by Thursday.',
			],
		},
		{
			heading: 'How to spend less for the same result',
			body: [
				'Start fresh. When a chat gets long or drifts to a new topic, ask for a short summary, open a new chat and paste just that.',
				'Give only what matters. Paste the one section, not the whole 60-page file. Pick the quick model by default. Save instructions you repeat, like your tone or your project rules, so you do not type them out each time.',
				'Watch for runaway loops. If an agent tries the same fix three times, stop it and give it a better hint yourself.',
			],
		},
		{
			heading: 'Not a trade-off',
			body: [
				'This is not about being cheap at the cost of quality. A short, focused chat is cheaper, faster, and usually gives a better answer, because the AI is not wading through old noise.',
				'One honest exception: when the job truly needs the whole picture, like checking a long contract for clashes, give it the whole thing. Pay for context that earns its place.',
			],
		},
	],
	diagram: {
		caption: 'Each message re-sends the whole chat. Starting fresh with a summary keeps every message cheap.',
		describe:
			'Two bar charts in the same layout. Top, "One long chat": ten red bars from message 1 to message 10, each taller than the last, labeled "re-sends it all". Bottom, "Fresh chat + summary": ten short green bars that stay low, with a dashed line in the middle marked "new chat" where it starts over. Below: "Bar height = cost per message".',
	},
	figures: [
		{
			id: 'split',
			afterSection: 2,
			caption: 'In a long chat, the answer you wanted is the smallest slice of the bill.',
			describe:
				'One wide split bar for a single message in a long chat. The biggest yellow part is re-reading the chat. Then a red part for hidden thinking, a gray part for retries, and a thin green slice for your answer, the part you want.',
		},
		{
			id: 'team',
			afterSection: 4,
			caption: 'Tiny for one person. Huge for a team. Better habits shrink it to a tenth, with the same work done.',
			describe:
				'Three coin stacks on one floor. Left, "1 person, 1 day": one faint coin, labeled tiny. Middle, "20 people, 20 days": a tall red stack, labeled x 400. Right, "same team, better habits": one green coin, labeled a tenth. Below: "Same work done in all three".',
		},
	],
	compare: {
		title: 'A week of writing reports',
		intro: 'Same person, same five reports, same quality at the end.',
		wrong: {
			label: 'One endless chat',
			steps: [
				{ who: 'you', text: 'Monday: opens the biggest model, pastes the whole 80-page handbook and last year\'s reports. "Help me write this week\'s reports."' },
				{ who: 'ai', text: 'A good first report, after a long wait.' },
				{ who: 'you', text: 'Tuesday to Friday: keeps going in the same chat. Re-explains the house style twice.' },
				{ who: 'note', text: 'Every message re-sends the handbook and four days of talk. Answers get slower and start mixing up old drafts.' },
			],
			outcome: 'Five reports, a big bill or a hit usage limit, and lots of waiting.',
		},
		right: {
			label: 'Fresh, focused chats',
			steps: [
				{ who: 'you', text: 'Saves the house style once as reusable instructions.' },
				{ who: 'you', text: 'Each day: a new chat on the quick model, with only that report\'s notes and the two handbook pages that matter.' },
				{ who: 'ai', text: 'Answers in seconds. Two quick fixes and the report is done.' },
				{ who: 'check', text: 'One tricky report with many numbers: steps up to the big model for that one, then back down.' },
			],
			outcome: 'The same five reports for about a tenth of the cost, with faster answers.',
		},
		takeaway: 'The cheaper way was also the faster way, and the answers were cleaner.',
	},
	examples: {
		everyday: {
			before: 'Plans a two-week trip in one chat that has run for a month, through flights, packing, a recipe and a birthday gift.',
			after:
				'Asks "Summarize the trip plan we agreed on in five lines", opens a new chat and pastes the summary to plan day 3.',
			why: 'The new chat reads five lines instead of a month of talk. It is faster and stops mixing in the recipe.',
		},
		office: {
			before: 'Pastes the full 60-page policy into every question about holiday rules.',
			after: 'Pastes just the two-page holiday section and asks the question.',
			why: 'The AI reads a thirtieth of the text, answers sooner, and is less likely to quote the wrong part.',
		},
		code: {
			before: 'Lets a coding agent run overnight on a failing test. It tries the same fix forty times.',
			after:
				'Saves the project rules in a file the agent reads, gives it the failing test and the one related file, and stops it after three failed tries to add a hint.',
			why: 'Forty rounds of re-reading the whole project is the most expensive way to stay stuck. A short, guided run costs less and finishes.',
		},
	},
	tryThis: {
		title: 'Start fresh with a summary',
		steps: [
			'Open your longest chat in any free AI app.',
			'Ask: "Summarize what we decided and what is still open, in five short lines."',
			'Open a new chat, paste the summary, and ask your next question.',
			'Notice: is the answer quicker? Is it more on point than the long chat would have been?',
		],
	},
	check: {
		question: 'Your chat has run for two hours and answers are getting slow. What helps most?',
		options: [
			'Switch to the biggest model so it can handle the long chat.',
			'Ask for a short summary, then start a new chat with it.',
			'Paste your earlier messages again so it does not forget them.',
		],
		answer: 1,
		explain:
			'Every message re-sends the whole chat. A fresh chat with a short summary keeps what matters and drops the rest, so each answer is cheaper and faster.',
	},
	next: 'Next stop: Switch tools without starting over',
};
