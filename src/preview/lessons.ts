// Sample lessons. A worker replaces the stub text below; the shape stays fixed.
export type World = 'everyday' | 'office' | 'code';
export type Lesson = {
	n: number; // matches curriculum.json
	slug: string;
	title: string;
	idea: string; // the one idea, said in one or two sentences
	minutes: number;
	sections: { heading: string; body: string[] }[]; // body = paragraphs, plain text
	diagram: { caption: string; describe: string }; // a design draws this from `describe`
	examples?: Record<World, { before: string; after: string; why: string }>; // world-switched example
	tryThis: { title: string; steps: string[] };
	check: { question: string; options: string[]; answer: number; explain: string };
	next: string; // one line on what to read next
};

export const samples: Lesson[] = [
	{
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
	},
	{
		n: 9,
		slug: 'say-what-done-looks-like',
		title: 'Say what “done” looks like',
		idea: 'A vague ask gets confident work on the wrong thing. Say what you want, who it is for, and how you will know it is done.',
		minutes: 8,
		sections: [
			{
				heading: 'It aims at what you said',
				body: [
					'AI does not know what is in your head. It only knows what you typed. So when you ask for something vague, it fills in the blanks with a guess, and then does the guess very well.',
					'That is the trap. You get something polished, quick and confident. It just is not what you wanted. Now you have to read it, notice the problem, and ask again.',
				],
			},
			{
				heading: 'Three things to say',
				body: [
					'What you want: the thing itself. A short message, a list, a plan, a fix.',
					'Who it is for: your doctor, your boss, your grandkids, other engineers. This changes the words, the length and the tone.',
					'How you will know it is done: the finish line. "Under 100 words." "Fits on one page." "Includes the date and my phone number." "All the tests pass." If you can check it, the AI can aim for it.',
				],
			},
			{
				heading: 'The "done when" line',
				body: [
					'Here is a simple trick. End your ask with "Done when:" and two or three plain checks. It takes ten seconds to write.',
					'It helps twice. The AI aims at the right target. And when the answer comes back, you already have a checklist to judge it with. No more "hmm, is this good?"',
				],
			},
			{
				heading: 'You do not need fancy words',
				body: [
					'There are no magic phrases. Talk to the AI the way you would brief a helpful person who has never met you. Say what you need, who it is for, and what a good result looks like.',
					'If the first answer misses, do not just say "try again". Say which check it missed. That is how you get there fast.',
				],
			},
		],
		diagram: {
			caption: 'Vague ask, wrong target. Clear ask, right target.',
			describe:
				'Two panels side by side. Left panel: a short speech bubble with a vague ask ("Write something for the doctor"). From it flies a shiny, well-made arrow that hits the center of the wrong target, labeled "not what you meant". Right panel: a speech bubble with a clear ask, plus a small sticky note titled "Done when:" with three ticked boxes (short, has my date of birth, asks for a call back). From it flies the same shiny arrow, hitting the center of the right target, labeled "what you meant". The arrows look equally polished in both panels; only the aim differs.',
		},
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
	},
];
