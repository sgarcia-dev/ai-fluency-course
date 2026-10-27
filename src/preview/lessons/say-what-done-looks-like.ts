import type { Lesson } from '../lessons';

export const lesson: Lesson = {
	n: 9,
	slug: 'say-what-done-looks-like',
	title: 'Say what “done” looks like',
	idea: 'A plain ask gets an okay answer. Spell out who it is for, what goes in, what stays out, the tone and the length, and the answer gets clearly better.',
	minutes: 8,
	sections: [
		{
			heading: 'Okay is the trap.',
			body: [
				'Ask "Write a message to my team about the deadline moving." You will get something you could send. It will also be too long, a bit too sorry, and vague about what happens next.',
				'Nothing in it is wrong. The AI just had to guess the rest: who reads it, how it should sound, what matters. It guessed the safe, average answer.',
			],
		},
		{
			heading: 'Spell out the guesses',
			body: [
				'Before you send an ask, run down a short list. Who is it for? What must it include? What should it leave out? What tone? How long, or in what shape? How will you know it is right?',
				'You do not need all six every time. Each one you answer is one less guess. Most asks get much better from just two or three of them.',
			],
		},
		{
			heading: 'Leave-outs are the secret weapon.',
			body: [
				'People rarely say what they do not want. But that is where the average answer goes wrong. It apologizes too much, blames someone, adds a pep talk, or touches files you did not want changed.',
				'One line like "Do not blame the client" or "Do not change other files" fixes the thing you would otherwise edit by hand.',
			],
		},
		{
			heading: 'End with how you will check it',
			body: [
				'The last item is the finish line: "Under 80 words." "Ends with what I need from them." "All the tests pass." If you can check it, the AI can aim for it.',
				'It helps twice. The AI aims better, and you get a checklist to judge the reply. If it misses, do not just say "try again". Say which item it missed.',
			],
		},
		{
			heading: 'When a short ask is fine',
			body: [
				'For quick, low-stakes things, like "a word that means happy", a plain ask is fine. If the first answer is good enough, you are done.',
				'Spell things out when someone else will read it, when tone matters, or when a fix has to be exactly right.',
			],
		},
	],
	diagram: {
		caption: 'Same job. The yellow ask says what the plain one left to guesswork.',
		describe:
			'Two columns side by side. Left, "Plain ask": a small white card, "Write a message to my team about the deadline moving." An arrow leads to a long reply full of grey lines that starts "So sorry, everyone...", labeled "Okay: long, sorry, vague". Right, "Explicit ask": a larger yellow card listing For: my team; Tone: calm and direct; Include: new date and the reason; Leave out: blaming the client; Length: under 80 words; End: what I need from them. An arrow leads to a short reply with the new date, labeled in green "Clearly better: ready to send".',
	},
	figures: [
		{
			id: 'checklist',
			afterSection: 1,
			caption: 'Six things to spell out. Answer the ones that matter for this job.',
			describe:
				'A yellow card titled "Spell out" with six checkbox rows: Who it is for, What to include, What to leave out, The tone, Length or format, How you will know it is right.',
		},
	],
	examples: {
		everyday: {
			before: 'Write a text to my neighbor about the noise last night.',
			after:
				'Write a text to my neighbor Dana about the loud music last night. We get along and I want to keep it that way. Tone: friendly, not passive-aggressive. Include: it went past midnight and I start work at 7. Do not threaten to call anyone. Under 50 words, and end by asking if weekends could finish by 11.',
			why: 'The plain ask gets a stiff, slightly cold text. Saying the relationship, the tone, the one request and what to leave out gets one you would actually send.',
		},
		office: {
			before: 'Summarize this report for my manager.',
			after:
				'Summarize this report for my manager, who has two minutes before a budget meeting. Include the total cost and the one biggest risk, risk first. Leave out the method section and the history. Five bullet points or fewer, plain words, no jargon.',
			why: 'The plain ask gets a fair summary of everything. Saying what she needs it for, and what to drop, gets the three facts she will use.',
		},
		code: {
			before: 'Fix the bug where users with capital letters in their email cannot log in.',
			after:
				'Users who type their email with capital letters cannot log in. Make the email check ignore upper and lower case. Change only the login check, not the sign-up code or the database. Add one test for a mixed-case email. Done when all existing tests and the new one pass.',
			why: 'The plain ask often works, but may also rewrite sign-up or the stored emails. Saying what not to touch and how to check it keeps the fix small and provable.',
		},
	},
	tryThis: {
		title: 'Run the list on one real ask',
		steps: [
			'In any free AI chat, ask something you would really send, for example: "Write a message to my friends about moving dinner to Sunday."',
			'Now ask again, adding three items from the list: who it is for, one thing to leave out, and a length. For example: "They are old friends. Do not over-apologize. Under 40 words."',
			'Put the two answers side by side. Which one could you send without editing?',
		],
	},
	check: {
		question: 'Which ask is most likely to get a message you can send as is?',
		options: [
			'"Write a message to my team about the deadline moving."',
			'"Write a really good, professional message to my team about the deadline moving. It is important."',
			'"Write a message to my team: the deadline moved to May 14 because the client changed scope. Calm and direct, do not blame the client, under 80 words."',
		],
		answer: 2,
		explain:
			'The third one says what to include, what to leave out, the tone and the length. "Really good" and "important" feel helpful, but they give the AI nothing to aim at.',
	},
	next: 'Next: "The right context, not all of it", what to tell the AI and what to leave out.',
};
