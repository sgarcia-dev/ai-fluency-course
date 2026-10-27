// v5 picker: one goal, then a short list of answers written for that goal.
// Each answer maps to exactly one lane (path id).
export type Lane = 'new' | 'hit-or-miss' | 'daily' | 'builder';
export const lanes: Lane[] = ['new', 'hit-or-miss', 'daily', 'builder'];
export type Answer = { text: string; lane: Lane };
export type PickGoal = { id: string; label: string; targets: number[]; world: 'everyday' | 'office' | 'code'; answers: Answer[] };

// Targets reuse the goal targets from route.ts.
export const pickGoals: PickGoal[] = [
	{
		id: 'understand', label: 'Understand what all this AI talk is about', targets: [4, 6, 15], world: 'everyday',
		answers: [
			{ text: 'I have hardly used AI, and I want to know what the fuss is about', lane: 'new' },
			{ text: 'I use AI chat now and then, but I do not really get how it works', lane: 'hit-or-miss' },
		],
	},
	{
		id: 'write', label: 'Write and reply faster', targets: [6, 9, 11], world: 'everyday',
		answers: [
			{ text: 'I have never asked AI to help me write anything', lane: 'new' },
			{ text: 'I use AI for drafts, but I rewrite most of what it gives me', lane: 'hit-or-miss' },
		],
	},
	{
		id: 'trust', label: 'Get answers I can actually trust', targets: [12, 17], world: 'everyday',
		answers: [
			{ text: 'I am new to AI and do not know when to believe it', lane: 'new' },
			{ text: 'I ask AI questions, and sometimes it is confidently wrong', lane: 'hit-or-miss' },
			{ text: 'I hand AI real work and need to check what comes back', lane: 'daily' },
		],
	},
	{
		id: 'handoff', label: 'Hand off whole tasks, not just questions', targets: [20, 22, 25], world: 'office',
		answers: [
			{ text: 'I use AI for quick questions and want it to do more', lane: 'hit-or-miss' },
			{ text: 'I use AI every day and want it to finish whole jobs for me', lane: 'daily' },
		],
	},
	{
		id: 'code', label: 'Write or fix code with AI', targets: [29, 30, 31], world: 'code',
		answers: [
			{ text: 'I am curious but have never used AI to code', lane: 'new' },
			{ text: 'I write software and want AI coding tools to do more of it', lane: 'builder' },
		],
	},
	{
		id: 'team', label: 'Run a team of AI helpers', targets: [24, 33], world: 'office',
		answers: [
			{ text: 'I barely use AI, but I want it to run parts of my work or business', lane: 'new' },
			{ text: 'I use AI chat for questions and drafts', lane: 'hit-or-miss' },
			{ text: 'I already hand off tasks and want several helpers at once', lane: 'daily' },
			{ text: 'I build software and want agents working in parallel', lane: 'builder' },
		],
	},
];
