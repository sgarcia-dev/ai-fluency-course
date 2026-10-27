// Sample lessons. Each lives in its own file in ./lessons/, so writers never edit the same file.
export type World = 'everyday' | 'office' | 'code';
export type Lesson = {
	n: number; // matches curriculum.json
	slug: string;
	title: string;
	idea: string; // the one idea, said in one or two sentences
	minutes: number;
	sections: { heading: string; body: string[] }[]; // body = paragraphs, plain text
	diagram: { caption: string; describe: string }; // a design draws this from `describe`
	// Extra diagrams, drawn in diagrams/by-slug/<slug>--<id>.astro, shown after section `afterSection` (0-based).
	figures?: { id: string; afterSection: number; caption: string; describe: string }[];
	// A worked, day-to-day example with real prompts, replies or code, shown before "Try this now".
	worked?: { title: string; intro: string; steps: { label: string; you?: string; ai?: string; code?: string; note?: string }[] };
	examples?: Record<World, { before: string; after: string; why: string }>; // world-switched example
	tryThis: { title: string; steps: string[] };
	check: { question: string; options: string[]; answer: number; explain: string };
	next: string; // one line on what to read next
};

// Every file in ./lessons/ exports `lesson`; order follows the course map.
const files = import.meta.glob<{ lesson: Lesson }>('./lessons/*.ts', { eager: true });
export const samples: Lesson[] = Object.values(files)
	.map((m) => m.lesson)
	.sort((a, b) => a.n - b.n);
