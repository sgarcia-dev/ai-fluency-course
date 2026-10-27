import type { Lesson } from '../lessons';

export const lesson: Lesson = {
	n: 24,
	slug: 'helpers-working-in-parallel',
	title: 'Helpers working in parallel',
	idea: 'Split big work into pieces that do not depend on each other. Give each piece to its own helper, then merge and check the results.',
	minutes: 9,
	sections: [
		{
			heading: 'One chat gets crowded.',
			body: [
				'You already know how to hand over a goal with a "done when" list. Now the job is bigger. Say you want a one-page scan of five competitors: prices, who they sell to, top features.',
				'In one long chat, the AI reads about the first company, then the second, then the third. By the fifth, its head is full. It mixes up who charges what. It forgets the format you asked for. The chat may even run out of room.',
			],
		},
		{
			heading: 'A helper starts clean.',
			body: [
				'A helper is a fresh AI given one piece of the job and its own short brief. Some tools call it a sub-agent. You can make one yourself by opening a new chat.',
				'Because it starts clean, it only sees its piece. The helper on Company C never reads the notes on Company A, so it cannot mix them up. And helpers can work at the same time, so five pieces can finish in about the time of one.',
			],
		},
		{
			heading: 'Only split what truly stands alone.',
			body: [
				'Parallel helps only when the pieces do not depend on each other. Ask: could each piece be done without seeing the others? Researching five competitors: yes. Each company is its own job.',
				'Five helpers rewriting the same document: no. Each one changes the same lines, and you get five clashing versions to untangle. Same for steps that need the last result, like "draft it, then shorten the draft". Those stay in order, in one chat.',
			],
		},
		{
			heading: 'Each piece gets its own finish line and its own place.',
			body: [
				'Every helper needs its own brief: the piece, the context it needs, and a "done when" list. For a competitor: "Done when: price, main customer, top 3 features, a source link for each."',
				'Each helper also needs its own place to put the result. Its own chat, its own file, its own section. If two helpers write to the same place, one wipes out the other.',
			],
		},
		{
			heading: 'Then one merge, with a check.',
			body: [
				'When the pieces come back, bring them into one place and merge. This is where you look at the whole. Do all five use the same format? Do any facts clash? Does the result meet the overall goal, like "fits on one page for the sales team"?',
				'The merge is not a copy-paste. It is the step that catches what no single helper could see, like two companies that turn out to be the same brand.',
			],
		},
		{
			heading: 'More helpers, more cost.',
			body: [
				'Each helper is a full AI run. Five helpers cost about five times the usage, and each one needs a brief you have to write and a result you have to read.',
				'So a few solid pieces beat many tiny ones. Splitting a short email into three helpers just adds work. A good rule: split when each piece is a real job on its own, and you would happily hand it to a different person.',
			],
		},
	],
	diagram: {
		caption: 'Split the job, let helpers work side by side, then merge and check. Same work, done sooner.',
		describe:
			'Top: a yellow "Big job" card splits into three green boxes, Helper 1, 2 and 3, side by side. Their lines meet in one "Merge + check" box with a green tick. Below, a time bar. "One after another": three gray blocks in a row. "Side by side": three green blocks stacked, all ending at the end of the first gray block, labeled "done 3x sooner".',
	},
	figures: [
		{
			id: 'tangled',
			afterSection: 2,
			caption: 'Tangled pieces clash. Clean pieces each get their own output and their own check.',
			describe:
				'Two rows. Top, red, "Tangled: one shared doc": three red helpers all point at one document marked "clash!" with a red cross. Bottom, green, "Clean: own piece, own output": three green helpers, each with an arrow down to its own document with a green tick. A note says "each one checked on its own".',
		},
	],
	compare: {
		title: 'A real job: a scan of five competitors',
		intro: 'Sales wants one page on five competitors by Thursday: price, who they sell to, top 3 features, with sources.',
		afterSection: 4,
		wrong: {
			label: 'One long chat',
			steps: [
				{ who: 'you', text: 'Research these five competitors. For each: price, main customer, top 3 features, sources.' },
				{ who: 'ai', text: 'Company A: ... Company B: ... Company C: ...' },
				{ who: 'note', text: 'By Company D, the answers get shorter. Company E has no sources.' },
				{ who: 'you', text: 'You said B costs $40. Earlier you said A costs $40. Which is it?' },
				{ who: 'ai', text: 'Apologies, B is $49. A is $40.' },
				{ who: 'note', text: 'Now you doubt every number. The chat says it is getting long.' },
			],
			outcome: 'An hour of rechecking. Facts from one company leak into another.',
		},
		right: {
			label: 'Five helpers, one merge',
			steps: [
				{ who: 'you', text: 'Five new chats, one brief each: "Research Company C only. Done when: price, main customer, top 3 features, a source link for each. Say \'unsure\' if you cannot find it."' },
				{ who: 'ai', text: 'Five short, focused results, each with sources. Company E: "Price unsure, not listed publicly."' },
				{ who: 'you', text: 'In one chat, paste all five: "Merge into one page for sales, same format for each. Flag any facts that clash or look duplicated."' },
				{ who: 'ai', text: 'Merged. Flag: B and D share a parent company and the same price list.' },
				{ who: 'check', text: 'You read the flags and spot-check two sources. Ten minutes.' },
			],
			outcome: 'Each piece clean, then one check of the whole.',
		},
		takeaway: 'Same five companies. One chat had to hold them all at once. The helpers each held one, and the merge looked at the whole.',
	},
	examples: {
		everyday: {
			before: 'Asks one chat to plan a family trip: flights, then places to stay, then activities, then fix the flights again after the dates drift.',
			after:
				'Three chats, one each: "Flights from Austin to Denver, June 10 to 14, 4 people, under $1,200." "Places to stay near the zoo for those nights, under $200 a night." "Activities for kids 7 and 10, one big thing a day." Then one chat merges them: "Make a day-by-day plan and flag anything that does not line up."',
			why: 'Flights, stays and activities can each be found alone. The merge catches the clash, like a hotel far from the activity.',
		},
		office: {
			before: 'Asks one chat to research five competitors in a row, then finds prices from one company showing up under another.',
			after:
				'Gives each competitor its own chat with the same brief and "done when" list. Then pastes all five into one chat to merge into a one-page table and flag clashes.',
			why: 'Each helper only sees its own company, so facts cannot leak across. The merge checks the whole page.',
		},
		code: {
			before: 'Asks one session to write tests for the billing, login and search modules, one after another, and it starts mixing up their setups.',
			after:
				'Starts three helpers, one per module: "Write tests for the search module only. Put them in tests/search. Done when: the tests run and pass, and cover empty input." Then one merge step runs the whole test suite.',
			why: 'The three modules do not depend on each other and each helper writes to its own folder. Running all the tests at the end is the check.',
		},
	},
	tryThis: {
		title: 'Split, then merge',
		steps: [
			'Pick a job with three parts that stand alone, like a trip: getting there, where to stay, what to do.',
			'Open three separate chats in any free AI app. Give each one part, with a short "done when" line.',
			'Open a fourth chat. Paste in all three results and ask: "Merge these into one plan and flag anything that does not fit together."',
			'Notice what the merge caught that no single chat could see.',
		],
	},
	check: {
		question: 'Which job is a good fit for helpers working in parallel?',
		options: [
			'Three helpers each editing the same report at the same time.',
			'Summarizing three separate customer interviews, then merging the summaries.',
			'Drafting a letter, then shortening that draft.',
		],
		answer: 1,
		explain:
			'Each interview can be summarized without the others, and each summary has its own place. Editing one report clashes, and shortening a draft needs the draft first.',
	},
	next: 'Next stop: Letting it act safely',
};
