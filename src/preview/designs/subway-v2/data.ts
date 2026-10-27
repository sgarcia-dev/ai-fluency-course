// Data for subway v2. Everything comes from the shared preview content.
import { paths, allLessons, samples } from '../../content';

export const base = '/';
export const lineColors: Record<string, string> = {
	new: '#FFD400',
	'hit-or-miss': '#FF7A2F', // orange line (was tomato #FF6A44, read too red next to yellow)
	daily: '#1A34B0',
	builder: '#7B2FBE',
};
export const colorFor = (id: string) => lineColors[id] ?? '#0A0A0A';
// Text color that reads on top of a line color.
export const inkOn = (id: string) => (id === 'daily' || id === 'builder' ? '#FFFFFF' : '#0A0A0A');

export const sampleSlugs = new Set(samples.map((s) => s.slug));
export const hrefFor = (slug: string) => (sampleSlugs.has(slug) ? `/lessons/${slug}/` : '');

type Full = { n: number; slug: string; title: string; idea: string; covers?: string[]; minutes?: number };
export const stop = (n: number) => {
	const l = allLessons.find((x) => x.n === n) as Full;
	return { n, slug: l.slug, title: l.title, idea: l.idea, covers: Array.isArray(l.covers) ? l.covers : [], minutes: typeof l.minutes === 'number' ? l.minutes : 0, href: hrefFor(l.slug) };
};
export const minutesLabel = (m: number) => (m ? `${m} min` : 'about 10 min');
export const lineMinutes = (ns: number[]) => ns.reduce((a, n) => a + (stop(n).minutes || 10), 0);

export const stories: Record<string, string> = {
	new: 'I have heard a lot about ChatGPT and tools like it, but I have hardly used one. Maybe I tried it once and was not sure what to type.',
	'hit-or-miss': 'I use AI for emails, summaries or quick questions. Sometimes the answer is great. Sometimes it is wrong or off, and I do not know why.',
	daily: 'I use AI almost every day. Now I want it to take on whole jobs for me, not just answer one question at a time.',
	builder: 'I write software, and I use AI coding tools to do it. I want to run them better and trust what they produce.',
};

// Goal to world and to the lessons that matter most for it (best first). From picker 3.
export const goals = [
	{ id: 'understand', label: 'Understand what all this AI talk is about', world: 'everyday', tied: [1, 15, 8, 17], want: 'understand what all this AI talk is about' },
	{ id: 'emails', label: 'Write emails and messages faster', world: 'office', tied: [6, 9, 11, 10, 18], want: 'write emails and messages faster' },
	{ id: 'trust', label: 'Get answers I can actually trust', world: 'everyday', tied: [4, 12, 5, 17], want: 'get answers you can trust' },
	{ id: 'money', label: 'Stop wasting money on the wrong AI plan', world: 'everyday', tied: [26, 16, 8, 17], want: 'stop wasting money on the wrong AI plan' },
	{ id: 'handoff', label: 'Hand off a whole task, not just a question', world: 'office', tied: [20, 22, 25, 12, 13], want: 'hand off a whole task, not just a question' },
	{ id: 'connect', label: 'Connect AI to my email, calendar or files', world: 'office', tied: [23, 25, 3, 12], want: 'connect AI to your email, calendar or files' },
	{ id: 'code', label: 'Write or fix code with AI', world: 'code', tied: [30, 31, 29, 13, 12], want: 'write or fix code with AI' },
	{ id: 'team', label: 'Run a team of AI helpers', world: 'office', tied: [24, 33, 25, 16], want: 'run a team of AI helpers' },
];

export const lines = paths.map((p) => ({
	id: p.id, name: p.name, says: p.says, story: stories[p.id] ?? p.says,
	color: colorFor(p.id), ink: inkOn(p.id),
	stops: p.lessons.map(stop), minutes: lineMinutes(p.lessons),
	first: p.lessons.map(stop).find((s) => s.href)?.href ?? '',
}));

// v3 network map layout, computed from the data. Lessons left to right, one lane per line.
export function network() {
	const cw = 34, left = 24, top = 30, lane = 46, labelH = 190;
	const order = allLessons.map((l) => l.n);
	const x = (n: number) => left + order.indexOf(n) * cw + cw / 2;
	const laneY = (i: number) => top + i * lane;
	const width = left * 2 + order.length * cw;
	const baseY = top + (paths.length - 1) * lane + 26;
	const height = baseY + labelH;
	const tracks = paths.map((p, i) => ({ id: p.id, name: p.name, color: colorFor(p.id), y: laneY(i), pts: p.lessons.map(x) }));
	const stations = allLessons.map((l) => {
		const on = paths.map((p, i) => (p.lessons.includes(l.n) ? i : -1)).filter((i) => i >= 0);
		const ys = on.length ? on.map(laneY) : [laneY(0)];
		return { n: l.n, title: l.title, x: x(l.n), y0: Math.min(...ys), y1: Math.max(...ys), lanes: on, ids: on.map((i) => paths[i].id) };
	});
	return { width, height, baseY, lane, tracks, stations, laneOf: Object.fromEntries(paths.map((p, i) => [p.id, laneY(i)])) };
}

// Mobile map: lanes as vertical columns, one row per lesson in course order.
// Lessons used by several lanes share a row, so shared stops line up across columns.
export function mobileNetwork() {
	const colW = 80, top = 14, row = 26;
	const used = allLessons.map((l) => l.n).filter((n) => paths.some((p) => p.lessons.includes(n)));
	const y = (n: number) => top + used.indexOf(n) * row;
	const width = colW * paths.length;
	const height = top * 2 + (used.length - 1) * row;
	const cols = paths.map((p, i) => {
		const ys = p.lessons.filter((n) => used.includes(n)).map(y);
		return { id: p.id, color: colorFor(p.id), x: colW * i + colW / 2, ys, y0: Math.min(...ys), y1: Math.max(...ys) };
	});
	return { width, height, cols };
}
