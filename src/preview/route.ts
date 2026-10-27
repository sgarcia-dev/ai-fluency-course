// Route planner: goals are destinations, a start is where the reader is today.
import curriculum from './curriculum.json' with { type: 'json' };

export type World = 'everyday' | 'office' | 'code';
export type Goal = { id: string; label: string; targets: number[]; world: World; minStart?: string };
export type Start = { id: string; story: string; knows: number[] };
export type Route = {
	lessons: number[];
	minutes: number;
	world: World;
	segments: { line: string; lessons: number[] }[];
	reason: string;
};

type Lesson = { n: number; title: string; minutes: number; needs: number[] };
const lessonList: Lesson[] = curriculum.parts.flatMap((p) => p.lessons as Lesson[]);
const byN = new Map<number, Lesson>(lessonList.map((l) => [l.n, l]));
const paths: { id: string; lessons: number[] }[] = curriculum.paths;

export const goals: Goal[] = [
	{ id: 'understand', label: 'Understand what all this AI talk is about', targets: [4, 6, 15], world: 'everyday' },
	{ id: 'write', label: 'Write emails and messages faster', targets: [6, 9, 11], world: 'everyday' },
	{ id: 'trust', label: 'Get answers I can actually trust', targets: [12, 17], world: 'everyday' },
	{ id: 'money', label: 'Stop wasting money on the wrong AI plan', targets: [8, 16, 26], world: 'everyday' },
	{ id: 'handoff', label: 'Hand off a whole task, not just a question', targets: [20, 22, 25], world: 'office' },
	{ id: 'connect', label: 'Connect AI to my email, calendar or files', targets: [23, 25], world: 'office' },
	{ id: 'code', label: 'Write or fix code with AI', targets: [29, 30, 31], world: 'code' },
	{ id: 'team', label: 'Run a team of AI helpers', targets: [24, 33], world: 'office' },
];

// Short phrases for the reason sentence, in the same order as goals.
const wants: Record<string, string> = {
	understand: 'understand what all this AI talk is about',
	write: 'write emails and messages faster',
	trust: 'get answers you can trust',
	money: 'stop paying for the wrong AI plan',
	handoff: 'hand off whole tasks',
	connect: 'connect AI to your email, calendar or files',
	code: 'write and fix code with AI',
	team: 'run a team of AI helpers',
};

export const starts: Start[] = [
	{ id: 'new', story: 'I have heard a lot about AI chat tools, but I have hardly used one.', knows: [] },
	{
		id: 'hit-or-miss',
		story: 'I use AI for emails, summaries or quick questions. Sometimes it is great, sometimes it is wrong, and I do not know why.',
		knows: [1, 2, 6, 7, 8],
	},
	{
		id: 'daily',
		story: 'I use AI almost every day. Now I want it to take on whole jobs, not just answer questions.',
		knows: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14],
	},
	{
		id: 'builder',
		story: 'I write software and use AI coding tools every week. I want to run them better and trust what they produce.',
		knows: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 20, 21, 28],
	},
];

const since: Record<string, string> = {
	new: 'Since you are just starting out, your route begins at the very start with',
	'hit-or-miss': 'Since you already use AI now and then, your route skips the first steps and starts at',
	daily: 'Since you already use AI often, your route skips the basics and starts at',
	builder: 'Since you already build with AI, your route skips what you know and starts at',
};

function pickGoals(goalIds: string[]): Goal[] {
	return goalIds.map((id) => {
		const g = goals.find((x) => x.id === id);
		if (!g) throw new Error(`Unknown goal: ${id}`);
		return g;
	});
}

function lessonsFor(goalIds: string[], start: Start): number[] {
	const need = new Set<number>();
	const visit = (n: number) => {
		if (need.has(n)) return;
		need.add(n);
		for (const m of byN.get(n)!.needs) visit(m);
	};
	for (const g of pickGoals(goalIds)) g.targets.forEach(visit);
	for (const k of start.knows) need.delete(k);
	// Topological order, ties by lesson number. Known lessons count as done.
	const done = new Set<number>();
	const out: number[] = [];
	const left = [...need].sort((a, b) => a - b);
	while (left.length) {
		const i = left.findIndex((n) => byN.get(n)!.needs.every((m) => done.has(m) || !need.has(m)));
		const n = left.splice(i, 1)[0];
		done.add(n);
		out.push(n);
	}
	return out;
}

function segment(lessons: number[]): Route['segments'] {
	const segs: Route['segments'] = [];
	let cur: string | null = null;
	for (let i = 0; i < lessons.length; i++) {
		const n = lessons[i];
		const onCur = cur && paths.find((p) => p.id === cur)!.lessons.includes(n);
		if (!onCur) {
			// Change to the line that carries the reader furthest from here.
			let best = paths[0].id;
			let bestRun = -1;
			for (const p of paths) {
				let r = 0;
				while (i + r < lessons.length && p.lessons.includes(lessons[i + r])) r++;
				if (r > bestRun) {
					bestRun = r;
					best = p.id;
				}
			}
			cur = best;
			segs.push({ line: cur, lessons: [] });
		}
		segs[segs.length - 1].lessons.push(n);
	}
	return segs;
}

function joinAnd(xs: string[]): string {
	return xs.length < 2 ? xs.join('') : `${xs.slice(0, -1).join(', ')} and ${xs[xs.length - 1]}`;
}

export function planRoute(goalIds: string[], startId: string): Route {
	const start = starts.find((s) => s.id === startId);
	if (!start) throw new Error(`Unknown start: ${startId}`);
	const gs = pickGoals(goalIds);
	const lessons = lessonsFor(goalIds, start);
	const minutes = lessons.reduce((t, n) => t + byN.get(n)!.minutes, 0);
	const world: World = gs.some((g) => g.world === 'code') ? 'code' : (gs[0]?.world ?? 'everyday');
	const want = `You want to ${joinAnd(gs.map((g) => wants[g.id]))}.`;
	const reason = lessons.length
		? `${want} ${since[start.id]} "${byN.get(lessons[0])!.title}".`
		: `${want} You already know everything on this route.`;
	return { lessons, minutes, world, segments: segment(lessons), reason };
}

export function startsFor(goalIds: string[]): Start[] {
	const kept: Start[] = [];
	const seen = new Set<string>();
	for (const s of starts) {
		const key = lessonsFor(goalIds, s).join(',');
		if (!key || seen.has(key)) continue;
		seen.add(key);
		kept.push(s);
	}
	return kept.length ? kept : [starts[0]];
}
