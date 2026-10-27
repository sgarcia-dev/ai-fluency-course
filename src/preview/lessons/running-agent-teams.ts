import type { Lesson } from '../lessons';

export const lesson: Lesson = {
	n: 33,
	slug: 'running-agent-teams',
	title: 'Running agent teams',
	idea: 'Talk to one lead agent. It splits the work into clear packets, hands them to cheap helpers that each own their own files, and checks their results before anything reaches you.',
	minutes: 10,
	sections: [
		{
			heading: 'You stop doing. Then you stop directing.',
			body: [
				'First you did the work and the AI helped. Then you directed one agent and checked its work. The next step is one level up: you direct one agent, and it directs the rest.',
				'That agent is the lead. You give it the job. It plans, splits the work into packets, starts a helper for each packet, accepts or rejects what comes back, and reports to you. You only talk to the lead.',
			],
		},
		{
			heading: 'The lead does not need the biggest brain.',
			body: [
				'Planning and routing are not the hard part of most jobs. A solid mid-sized model plans well, writes clear packets and reads test output just fine.',
				'The helpers can be quick, cheap models. Each one gets a small, well-described job, which is exactly where quick models shine. Save the big model for the one piece that is truly hard, like a tricky bug or a design choice with many trade-offs.',
				'A rough feel for the money: a big model doing a whole feature alone might cost ten units. A mid lead plus three quick helpers often does the same work for three or four, and the helpers run at the same time.',
			],
		},
		{
			heading: 'One writer per file.',
			body: [
				'The fastest way to wreck a team run is two helpers editing the same file. One saves its change, the other saves over it, and nobody notices until something breaks.',
				'So every helper owns its own files or folder, and only writes there. It can read anything. Shared files, like a settings file or a list of routes, go to one helper or stay with the lead. If two pieces of work both need the same file, they are not separate pieces. Give them to one helper.',
			],
		},
		{
			heading: 'Every packet has five parts.',
			body: [
				'A helper starts with no memory of your chat. All it knows is the packet. So each packet says: the goal, the files to read first, the files it owns, a "done when" check it can run, and where to write its report.',
				'Vague packets are where teams fail. "Build the settings page" gets you a guess. "Build the settings page in this folder, done when this test passes" gets you something the lead can check.',
			],
		},
		{
			heading: 'Trust the tests, not the report.',
			body: [
				'Helpers say "done" a lot. Sometimes they are right. Sometimes the test was skipped, or it passed because the helper changed the test.',
				'So the lead checks with real proof: it runs the tests and the build itself, looks at which files changed, and for bigger jobs starts a separate checker helper whose only job is to find problems. A result that fails goes back with the error, or gets rejected.',
				'What reaches you is short: what passed, what failed, what is not done. That is the report you actually want.',
			],
		},
		{
			heading: 'When one agent is better',
			body: [
				'Teams are not free. Each helper has to read the code again, and writing good packets takes the lead real effort. For a small fix, one agent finishes before the team is even set up.',
				'Tangled work is worse. If every change touches the same three files, you cannot split it without collisions. Do it with one agent, in order. Reach for a team when the job is big and splits cleanly into parts that barely touch.',
			],
		},
	],
	diagram: {
		caption: 'You talk to one lead. Helpers each own their own files. Nothing reaches you without passing the check.',
		describe:
			'A top-down chart. At the top, "You". Below, "Lead (mid model)". Below that, three helper boxes labeled "Helper (quick)", each sitting on its own green area: files A, files B, files C. Arrows go from each helper back up into a yellow "check" gate (tests, build), and only from the gate up to the lead and then to you.',
	},
	figures: [
		{
			id: 'collide',
			afterSection: 2,
			caption: 'Two writers on one file break things. One owner per file does not.',
			describe:
				'Two panels. Left, "Shared file": two helpers both draw arrows into one red file marked "conflict". Right, "Owned files": each helper has its own arrow into its own green file, labeled A and B, both with check marks.',
		},
		{
			id: 'cost',
			afterSection: 1,
			caption: 'Same feature. A mid lead with quick helpers often costs about a third.',
			describe:
				'Two bars. Top, "Big model does it all": a long red bar of about 10 units. Bottom, "Mid lead + 3 quick helpers": a short bar split into a yellow lead part and three small green helper parts, about 3 to 4 units.',
		},
	],
	examples: {
		everyday: {
			before: 'Asks one chat to plan a whole birthday party: venue, food, invites, all at once. Gets a long, mixed list where the guest count is 30 in one place and 45 in another.',
			after:
				'Sets the facts first (45 guests, 14 June, 600 dollars) and asks for three separate lists: venue options, a food plan, and the invite text. Each list only covers its own part. Then asks: "Check all three against the facts and flag anything that does not fit."',
			why: 'Each part had one owner and the same facts. The final check caught the mistakes before you booked anything.',
		},
		office: {
			before: 'One agent writes the whole quarterly report. Halfway through it runs out of room, and the sales numbers in the summary no longer match the sales section.',
			after:
				'A lead splits the report: one helper per section (sales, costs, hiring), each writing only its own section file. The lead owns the summary, writes it last from the finished sections, and checks every number against the source sheet.',
			why: 'No two helpers wrote the same section, and the shared part, the summary, stayed with the lead.',
		},
		code: {
			before: 'One agent builds a new export feature end to end. It edits the API, the screen and the tests in one long run, and says "all done" with two tests quietly skipped.',
			after:
				'The lead writes three packets: API in server/export/, screen in web/export/, tests in tests/export/. The route list, a shared file, stays with the lead. A checker runs the full test suite and the build.',
			why: 'Owned folders meant no collisions. The real test run, not the helper reports, decided what was done.',
		},
	},
	compare: {
		title: 'Same feature, two ways',
		intro: 'The job: add "export to spreadsheet" to an app. Screen, server code and tests.',
		afterSection: 4,
		wrong: {
			label: 'One agent does it all',
			steps: [
				{ who: 'you', text: 'Add export to spreadsheet. Server, screen and tests.' },
				{ who: 'ai', text: 'Writes the server code, then the screen, then fixes the server again for the screen.' },
				{ who: 'note', text: 'Its memory fills up. It forgets the date format it chose an hour ago.' },
				{ who: 'ai', text: 'Done! Everything works.' },
				{ who: 'check', text: 'You run the tests: 2 skipped, 1 failing. Dates are wrong in the file.' },
			],
			outcome: 'Slow, pricey, and you found the problems yourself.',
		},
		right: {
			label: 'A lead and three helpers',
			steps: [
				{ who: 'you', text: 'Add export to spreadsheet. Report what passes.' },
				{ who: 'ai', text: 'Lead: plans it, picks one date format, writes three packets: server, screen, tests. Each owns one folder.' },
				{ who: 'ai', text: 'Three quick helpers work at the same time. Each writes a short report.' },
				{ who: 'check', text: 'A checker helper runs all tests and the build. 1 test fails on empty lists.' },
				{ who: 'ai', text: 'Lead sends the failure back to the server helper. Fixed. Tests pass.' },
				{ who: 'ai', text: 'Lead to you: export works, all tests pass. Not done: very large files are untested.' },
			],
			outcome: 'Faster, cheaper, and checked before it reached you.',
		},
		takeaway: 'The team won because each part had one owner and a real check, not because there were more agents.',
	},
	worked: {
		title: 'One real packet',
		intro: 'This is the whole message a lead hands one helper. The helper sees nothing else, so everything it needs is here.',
		steps: [
			{
				label: 'The packet',
				code: 'Goal: add a server endpoint that returns\nthe orders list as a spreadsheet file.\n\nRead first:\n- server/orders/list.ts (how orders load)\n- docs/date-format.md (use only this format)\n\nYou own: server/export/ only. Do not edit any other file.\nNeed a change elsewhere? Say so in your report.\n\nDone when: `npm test -- tests/export/server` passes and\n`npm run build` has no errors.\n\nReport to: reports/export-server.md\n(files changed, checks run with results, what is not done)',
			},
			{
				label: 'What comes back',
				ai: 'Changed server/export/route.ts and server/export/sheet.ts. Ran the server export tests: 6 passed. Build: no errors. Not done: the route still has to be added to the route list, which I do not own.',
				note: 'The helper stayed in its folder and flagged the shared file instead of editing it. The lead adds the route itself, then runs the tests again rather than taking "6 passed" on trust.',
			},
		],
	},
	tryThis: {
		title: 'Be the lead for five minutes',
		steps: [
			'Pick a job with three parts that barely touch, like a trip: travel, a place to stay, and a day plan.',
			'Open three separate chats in any free AI app. Paste each one a packet: the goal, the facts it must use (dates, budget), what part it owns, and "done when" (for example, "three options, each under 200 dollars").',
			'Paste all three answers into a fourth chat and ask: "Check these against the facts. List anything that conflicts or is missing."',
			'Notice how much of the work was writing clear packets and checking, not doing.',
		],
	},
	check: {
		question: 'Two helpers both need to add a line to the same settings file. What should the lead do?',
		options: [
			'Let both edit it and trust their reports.',
			'Give the file to one owner, or keep it and make that edit itself.',
			'Use a bigger model for both helpers so they do not clash.',
		],
		answer: 1,
		explain: 'One writer per file. A shared file goes to one helper or stays with the lead. A bigger model does not stop two writers saving over each other.',
	},
	next: 'Next stop: Test models on your own work',
};
