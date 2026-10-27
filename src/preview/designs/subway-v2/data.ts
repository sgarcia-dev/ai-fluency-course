// Data for subway v2. Everything comes from the shared preview content.
import { paths, allLessons, samples } from '../../content';

export const base = '/preview/subway-v2/';
export const lineColors: Record<string, string> = {
	new: '#FFD400',
	'hit-or-miss': '#FF6A44',
	daily: '#1A34B0',
	builder: '#0A0A0A',
};
export const colorFor = (id: string) => lineColors[id] ?? '#0A0A0A';
// Text color that reads on top of a line color.
export const inkOn = (id: string) => (id === 'daily' || id === 'builder' ? '#FFFFFF' : '#0A0A0A');

export const sampleSlugs = new Set(samples.map((s) => s.slug));
export const hrefFor = (slug: string) => (sampleSlugs.has(slug) ? `${base}${slug}/` : '');

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
