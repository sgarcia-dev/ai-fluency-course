// v4 picker: each goal maps to the lines (path ids) that make sense for it.
export const linesForGoal: Record<string, string[]> = {
	understand: ['new', 'hit-or-miss'],
	write: ['new', 'hit-or-miss'],
	trust: ['new', 'hit-or-miss', 'daily'],
	money: ['hit-or-miss', 'daily'],
	handoff: ['hit-or-miss', 'daily'],
	connect: ['hit-or-miss', 'daily'],
	code: ['new', 'builder'],
	team: ['new', 'hit-or-miss', 'daily', 'builder'],
};
const order = ['new', 'hit-or-miss', 'daily', 'builder'];
// Union of allowed lines for the chosen goals, in line order.
export function allowedLines(goalIds: string[]): string[] {
	const s = new Set(goalIds.flatMap((g) => linesForGoal[g] ?? []));
	return order.filter((id) => s.has(id));
}
