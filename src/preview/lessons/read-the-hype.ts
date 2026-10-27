import type { Lesson } from '../lessons';

export const lesson: Lesson = {
	n: 17,
	slug: 'read-the-hype',
	title: 'Read the hype',
	idea: 'Big test scores can be gamed. Before you switch models, test the new one on your own real work.',
	minutes: 9,
	sections: [
		{
			heading: 'Every launch is "the best ever"',
			body: [
				'A new model comes out. The post says it beats everything. There is a chart with a tall bar, a slick demo, and a lot of excited posts.',
				'Last lesson, you learned to pick the model that fits the job, not the biggest one. This lesson is about the next trap: picking the newest one because the launch sounded amazing.',
			],
		},
		{
			heading: 'The score is for the test, not your job.',
			body: [
				'Those big scores come from public tests, often called benchmarks. Because the tests are public, a model can be trained toward them. It is like a student who saw the exam the night before. The grade is real. It just does not tell you much about what the student knows.',
				'A leaderboard ranks models on those tests. It measures the test. It does not measure your weekly report, your recipe swaps or your messy code.',
			],
		},
		{
			heading: 'Demos are the best take, not a normal day.',
			body: [
				'A launch demo is picked from many tries. You see the one that worked. You do not see the ten that went sideways.',
				'Posts that say "this feels so much smarter" spread fast. Careful tests take days and get far fewer likes. So the loud first week is mostly vibes.',
			],
		},
		{
			heading: 'Newer is not always better for you.',
			body: [
				'A new model can win on hard puzzles and still be slower at your short emails. It can cost more. It can even get worse at something you rely on, like keeping your table format or following your tone.',
				'Sometimes the new one really is better for you. The point is that you only find out by trying it on your work.',
			],
		},
		{
			heading: 'Make your own small exam.',
			body: [
				'Pick 5 real tasks you do often. For each one, keep the input and a known good answer, one you have already checked. Save them in a note.',
				'When a new model shows up, run all 5 on the old and the new one. Mark each answer right or wrong. Note how long it took and what it cost.',
				'Switch only if the new model wins on your work. One round takes about 20 minutes. That beats a week of fixing a bad switch.',
			],
		},
		{
			heading: 'When the score is enough',
			body: [
				'For a one-off question, you do not need an exam. Just try the new model and see. The exam is for tools you use every day, or that a whole team depends on.',
			],
		},
	],
	diagram: {
		caption: 'Model B tops the scoreboard. On your 5 tasks, Model A wins 4 of 5.',
		describe:
			'Two panels side by side. Left, "Public scoreboard": Model B has a tall bar with a crown, Model A a shorter bar. Right, "Your 5 tasks": a row of five marks for each model. Model A has four green ticks and one red cross. Model B has one green tick and four red crosses. Model A is highlighted in yellow as the winner for you.',
	},
	figures: [
		{
			id: 'exam',
			afterSection: 4,
			caption: 'Your own small exam: 5 real tasks, each with a known good answer.',
			describe:
				'A card titled "Your small exam" with five rows: weekly report, reply to a client, sum a table, fix a date bug, recipe for six. Two columns, Old and New model, each row with a green tick or red cross. Old gets 5 of 5, New gets 3 of 5. Below each column: time and cost, old 4 min and 10 cents, new 9 min and 40 cents. Bottom line: "Keep the old one."',
		},
		{
			id: 'cycle',
			afterSection: 2,
			caption: 'How a launch claim shrinks on its way to your desk.',
			describe:
				'Four steps left to right with a falling line. Launch post: "Best ever!", very high. Demo: high. Vibes posts: still high. Your real work: lower, marked with a question mark in yellow. The gap between the first and last step is shaded red and labeled "the hype".',
		},
	],
	examples: {
		everyday: {
			before: 'Sees a post that a new model is "the best ever" and switches the app for meal planning right away.',
			after:
				'Keeps 3 favorite asks, like "a dinner plan for 4 with no nuts". Runs them on the new model first. It forgets the nut rule once, so you stay put for now.',
			why: 'The post was about test scores. Your three asks tested the thing you care about: a plan your family can actually eat.',
		},
		office: {
			before: 'Moves the whole team to the newest model because it tops a leaderboard.',
			after:
				'Runs the team\'s 5-task exam first: weekly report, client reply, meeting summary, budget table, policy question. The new one wins 2 of 5 and is slower, so the team waits.',
			why: 'A leaderboard ranks the test. Your exam ranks your job, with time and cost in view.',
		},
		code: {
			before: 'Points the coding helper at a new model after a demo builds a whole game in one go.',
			after:
				'Gives the new model 5 past bugs from your own repo, each with the fix you already know works. It solves 4 of 5 and is cheaper, so you switch.',
			why: 'The demo was the best take. Your own fixed bugs show what it does on your code. This time the new one earned it.',
		},
	},
	compare: {
		title: 'Same launch, two teams',
		afterSection: 4,
		wrong: {
			label: 'Switch on the post',
			steps: [
				{ who: 'note', text: 'A launch post says the new model is "best ever" on every test.' },
				{ who: 'you', text: 'Switch the whole team today. It topped the leaderboard!' },
				{ who: 'check', text: 'A week later: reports take twice as long, and the tables lose their format.' },
				{ who: 'note', text: 'Two days spent switching back and redoing reports.' },
			],
			outcome: 'Slower, worse at your reports, and a lost week.',
		},
		right: {
			label: 'Run your exam',
			steps: [
				{ who: 'note', text: 'Same launch post.' },
				{ who: 'you', text: 'Run our 5 saved tasks on the old and new model.' },
				{ who: 'check', text: '20 minutes later: new wins 2 of 5, old wins 3 of 5. New is slower and costs more.' },
				{ who: 'note', text: 'Stay on the old one. Rerun the exam at the next update.' },
			],
			outcome: 'A clear answer in 20 minutes, based on your work.',
		},
		takeaway: 'The post tells you what to try. Your own exam tells you what to use.',
	},
	tryThis: {
		title: 'Build a 3-task exam',
		steps: [
			'Write down 3 things you really ask AI for, like a short email, a summary, or a list.',
			'For each one, save the exact ask and what a good answer must include. For example: "under 80 words, mentions Friday".',
			'Run all 3 in any free AI app, in two different models or modes if you can. Tick each answer that meets your rule.',
			'Keep the note. Next time you hear "best model ever", run it again before you switch.',
		],
	},
	check: {
		question: 'A new model tops a famous leaderboard. What is the best next step?',
		options: [
			'Switch right away. The scores prove it is better.',
			'Run it on a few of your own real tasks with known answers, then decide.',
			'Never switch. New models are always hype.',
		],
		answer: 1,
		explain:
			'Public scores can be trained toward and do not measure your job. But new models are sometimes better, so do not ignore them either. Test on your own work, then choose.',
	},
	next: 'Next stop: Save what works',
};
