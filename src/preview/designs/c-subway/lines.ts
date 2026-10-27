import { paths, parts, allLessons, samples } from '../../content';

export const lineColors: Record<string, string> = {
	new: '#0B6E4F',
	'hit-or-miss': '#B93A0A',
	daily: '#1D4ED8',
	builder: '#7E22CE',
};
const fallback = ['#0B6E4F', '#B93A0A', '#1D4ED8', '#7E22CE', '#0E7490', '#BE123C'];
export const colorFor = (id: string) => lineColors[id] ?? fallback[paths.findIndex((p) => p.id === id) % fallback.length];

export const sampleSlugs = new Set(samples.map((s) => s.slug));
export const pathsFor = (n: number) => paths.filter((p) => p.lessons.includes(n)).map((p) => p.id);

// Overview network layout, computed from the data.
export function layout() {
	const cw = 28, left = 30, top = 70, lane = 40;
	const ordered = allLessons.map((l) => l.n);
	const x = (n: number) => left + ordered.indexOf(n) * cw + cw / 2;
	const y = (i: number) => top + i * lane;
	const width = left * 2 + ordered.length * cw;
	const height = top + paths.length * lane + 40;
	const zones = parts.map((p) => {
		const xs = p.lessons.map((l) => x(l.n));
		return { n: p.n, title: p.title, x0: Math.min(...xs) - cw / 2, x1: Math.max(...xs) + cw / 2 };
	});
	const lines = paths.map((p, i) => {
		const xs = p.lessons.map(x);
		return { id: p.id, color: colorFor(p.id), y: y(i), x0: Math.min(...xs), x1: Math.max(...xs), first: p.lessons[0] };
	});
	const stations = allLessons.map((l) => {
		const on = paths.map((p, i) => (p.lessons.includes(l.n) ? i : -1)).filter((i) => i >= 0);
		return { ...l, x: x(l.n), lanes: on, ids: on.map((i) => paths[i].id), y0: on.length ? y(Math.min(...on)) : y(0), y1: on.length ? y(Math.max(...on)) : y(0) };
	});
	return { width, height, zones, lines, stations, lane, top };
}
