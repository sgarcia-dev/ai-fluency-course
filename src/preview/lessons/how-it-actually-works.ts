import type { Lesson } from '../lessons';

export const lesson: Lesson = {
	n: 15,
	slug: 'how-it-actually-works',
	title: 'How it actually works',
	idea: 'An AI chat writes by guessing a likely next piece of a word, again and again, using only what is in your chat. Know that, and its good days and bad days stop being a mystery.',
	minutes: 10,
	sections: [
		{
			heading: 'It learned patterns, not facts',
			body: [
				'Before you ever typed a word, the AI read a huge amount of text. Books, websites, how-to guides, code, forum posts. Far more than any person could read in many lifetimes.',
				'It did not save that text like a library. It learned the patterns in it: which words tend to follow which, how an email is shaped, how a recipe goes, how a bug fix usually looks.',
				'So when you ask it something, it is not opening a book. It is drawing on a deep feel for how good answers usually sound.',
			],
		},
		{
			heading: 'One small piece at a time',
			body: [
				'Here is what happens when it writes. It looks at everything so far and asks: what piece comes next? A piece is often a whole word, sometimes part of one.',
				'It weighs a few likely options, picks one, adds it, and asks again. "The meeting is on" leads to "Tuesday", then "at", then "10". Hundreds of tiny picks make one answer.',
				'There is a little randomness in each pick on purpose. That keeps the writing natural. It also means the same question, asked twice in fresh chats, can get two different answers.',
			],
		},
		{
			heading: 'It does not look things up',
			body: [
				'Unless your app searches the web for you, the AI is not checking anything. A date, a price, a name: it writes whatever fits the pattern best. Most of the time that is right. Sometimes it is a smooth guess.',
				'Some apps can search or read a file you give them. When they do, the answer rests on that real text. When they do not, it rests on memory of patterns, which may also be months out of date.',
			],
		},
		{
			heading: 'It only sees this chat',
			body: [
				'Think of the chat as the AI\'s working notepad. It sees what you typed, what it replied, and any files you added. It does not see your email, your last chat, or what you meant but did not say.',
				'The notepad has a size limit. In a very long chat, the early parts get pushed out or go blurry. That is why it can "forget" a rule you set an hour ago.',
				'When a chat gets long and starts drifting, start a fresh one and paste in the few facts that matter.',
			],
		},
		{
			heading: 'This explains its good days and bad days',
			body: [
				'Guessing the next likely piece is a superpower for language. Drafts, rewording, summaries, changing the tone, spotting patterns, writing everyday code. These are all "what usually comes next" jobs.',
				'It is weak where a pattern is not enough. Exact facts, recent news, counting letters, and math with real numbers. It sees word pieces, not single letters, and it guesses digits instead of working them out.',
				'And it sounds just as sure either way. That is a whole lesson of its own: "Sure of itself, still wrong".',
			],
		},
		{
			heading: 'Three habits that follow',
			body: [
				'Give it the facts. If a date, a name or a number matters, put it in the chat. Then it works from your notepad, not from a guess.',
				'Ask it to search or cite when it matters. Recent events, prices and rules change. Ask for a source and open it yourself.',
				'Check numbers yourself. Totals, counts and percentages get a quick pass with a calculator. It takes seconds and catches the misses.',
			],
		},
	],
	diagram: {
		caption: 'It writes one piece at a time, each time picking a likely next piece.',
		describe:
			'The sentence "The meeting is on" grows left to right. At each step, three candidate next words are shown with bars for how likely they are. Step 1: Tuesday (tallest, yellow, picked), Monday, Friday. Step 2: at (picked), in, the. Step 3: 10 (picked), 3, noon. The picked words join the sentence: "The meeting is on Tuesday at 10".',
	},
	figures: [
		{
			id: 'notepad',
			afterSection: 3,
			caption: 'It only sees the notepad. In a long chat, the oldest lines fade out.',
			describe:
				'On the left, a notepad labeled "This chat" with message lines. The top lines are faded and labeled "early messages fade". The bottom lines are solid and labeled "it sees this". On the right, a large gray cloud labeled "The internet, your email, past chats" with a red cross and the words "cannot see".',
		},
		{
			id: 'split',
			afterSection: 4,
			caption: 'Great at patterns and language. Weak at exact facts and numbers.',
			describe:
				'Two columns. Green column "Great at": drafts, rewording, summaries, spotting patterns. Red column "Check it": exact facts, recent news, counting letters, math. A yellow bar across the bottom says "Sounds equally sure on both".',
		},
	],
	examples: {
		everyday: {
			before: '"What time does the pharmacy on Main Street close on Sunday?"',
			after:
				'"Search the web for the Sunday hours of the pharmacy on Main Street in Springfield and give me the link." Then you open the link.',
			why: 'Opening hours are an exact, changing fact. Without a search it can only guess a pattern like "5 pm". With a search, the answer rests on a real page you can check.',
		},
		office: {
			before: '"Write the follow-up email for yesterday\'s client meeting."',
			after:
				'"Write the follow-up email. Facts: met Tuesday with Dana at Lark Foods, agreed to send the price list by Friday, next call is 3 Nov at 10:00." Then you check the dates.',
			why: 'The first version gets a nice email with made-up details. The second puts the facts on its notepad, so it only has to do the wording, which is what it is great at.',
		},
		code: {
			before: '"Add up the sales column in this CSV and tell me the total." It replies with a confident number.',
			after:
				'"Write a short script that adds up the sales column in this CSV." You run the script and get the real total.',
			why: 'Adding many numbers is a weak spot for a word guesser. Writing the code that does the math is a strong spot. Let the computer count.',
		},
	},
	tryThis: {
		title: 'Watch the guessing happen',
		steps: [
			'Open any free AI chat. Ask: "Give me a name for a cozy coffee shop." Open a fresh chat and ask the exact same thing. Compare the two answers.',
			'Ask: "How many times does the letter r appear in strawberry raspberry?" Count it yourself. Did it match?',
			'Ask: "Who won the most recent big sports final?" Look at whether it says it searched, or answers from memory.',
		],
	},
	check: {
		question: 'You need a short project update that mentions three exact deadlines. What gives you the best result?',
		options: [
			'Ask it to write the update and trust it to know the deadlines.',
			'Paste the three deadlines into the chat, ask for the update, then check the dates.',
			'Ask it twice and keep the answer that sounds more confident.',
		],
		answer: 1,
		explain:
			'It only sees what is in the chat, and it guesses facts it does not have. Give it the facts, let it do the wording, and check the parts that must be exact.',
	},
	next: "Next stop: Bigger isn't better",
};
