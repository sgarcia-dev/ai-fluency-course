import assert from 'node:assert/strict';
import curriculum from './curriculum.json' with { type: 'json' };
import { goals, starts, planRoute, startsFor } from './route.ts';

const lessons = curriculum.parts.flatMap((p) => p.lessons) as { n: number; title: string; needs: number[] }[];
const byN = new Map(lessons.map((l) => [l.n, l]));

// needs: sparse, earlier lessons only (so no cycles)
for (const l of lessons) {
	assert.ok(l.needs.length <= 3, `lesson ${l.n} has too many needs`);
	for (const m of l.needs) assert.ok(m < l.n && byN.has(m), `lesson ${l.n} bad need ${m}`);
}

const allStrings: string[] = [];
const table: string[] = [];
for (const g of goals) {
	const offered = startsFor([g.id]).map((s) => s.id);
	assert.ok(offered.length > 0);
	const row: string[] = [];
	for (const s of starts) {
		const r = planRoute([g.id], s.id);
		allStrings.push(r.reason);
		row.push(String(r.lessons.length).padStart(12));
		if (r.lessons.length === 0) {
			assert.ok(!offered.includes(s.id), `${g.id}/${s.id} empty but offered`);
			continue;
		}
		const pos = new Map(r.lessons.map((n, i) => [n, i]));
		assert.equal(pos.size, r.lessons.length, 'no duplicates');
		for (const n of r.lessons) {
			assert.ok(byN.has(n));
			for (const m of byN.get(n)!.needs) if (pos.has(m)) assert.ok(pos.get(m)! < pos.get(n)!, `${m} before ${n}`);
		}
		for (const t of g.targets) if (!s.knows.includes(t)) assert.ok(pos.has(t), `target ${t} missing`);
		assert.deepEqual(r.segments.flatMap((x) => x.lessons), r.lessons, 'segments cover route');
		for (const seg of r.segments) {
			const p = curriculum.paths.find((x) => x.id === seg.line)!;
			for (const n of seg.lessons) assert.ok(p.lessons.includes(n), `${n} not on ${seg.line}`);
		}
		assert.ok(!/\b\d+\b/.test(r.reason), 'reason uses titles not numbers');
	}
	table.push(g.id.padEnd(12) + row.join(''));
}

// goals change the result
const newRoutes = new Set(goals.map((g) => planRoute([g.id], 'new').lessons.join(',')));
assert.equal(newRoutes.size, goals.length);

// multiple goals combine
for (const a of goals) for (const b of goals) for (const s of starts) {
	const both = new Set(planRoute([a.id, b.id], s.id).lessons);
	for (const n of [...planRoute([a.id], s.id).lessons, ...planRoute([b.id], s.id).lessons]) assert.ok(both.has(n));
	assert.ok(startsFor([a.id, b.id]).length > 0);
}
assert.equal(planRoute(['write', 'code'], 'new').world, 'code');

// team: offered to beginners, longer than for builders
const team = startsFor(['team']).map((s) => s.id);
assert.ok(team.includes('new') && team.includes('builder'));
assert.ok(planRoute(['team'], 'new').lessons.length > planRoute(['team'], 'builder').lessons.length);

// no em dashes anywhere
allStrings.push(...goals.map((g) => g.label), ...starts.map((s) => s.story));
for (const s of allStrings) assert.ok(!s.includes('—'), `em dash in: ${s}`);

console.log('All route tests passed. Lesson counts per goal x start:');
console.log(''.padEnd(12) + starts.map((s) => s.id.padStart(12)).join(''));
for (const r of table) console.log(r);
for (const g of goals) console.log(g.id.padEnd(12), 'offered:', startsFor([g.id]).map((s) => s.id).join(', '));
