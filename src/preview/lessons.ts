// Sample lessons. A worker replaces the stub text below; the shape stays fixed.
export type World = 'everyday' | 'office' | 'code';
export type Lesson = {
	n: number; // matches curriculum.json
	slug: string;
	title: string;
	idea: string; // the one idea, said in one or two sentences
	minutes: number;
	sections: { heading: string; body: string[] }[]; // body = paragraphs, plain text
	diagram: { caption: string; describe: string }; // a design draws this from `describe`
	examples?: Record<World, { before: string; after: string; why: string }>; // world-switched example
	tryThis: { title: string; steps: string[] };
	check: { question: string; options: string[]; answer: number; explain: string };
	next: string; // one line on what to read next
};

export const samples: Lesson[] = [
	{
		n: 4,
		slug: 'sure-of-itself-still-wrong',
		title: 'Sure of itself, still wrong',
		idea: 'AI sounds just as confident when it is wrong as when it is right. Its tone tells you nothing.',
		minutes: 7,
		sections: [{ heading: 'Stub', body: ['Stub text.'] }],
		diagram: { caption: 'Stub', describe: 'Stub' },
		tryThis: { title: 'Stub', steps: ['Stub'] },
		check: { question: 'Stub?', options: ['A', 'B'], answer: 0, explain: 'Stub' },
		next: 'Stub',
	},
	{
		n: 9,
		slug: 'say-what-done-looks-like',
		title: 'Say what “done” looks like',
		idea: 'A vague ask gets confident work on the wrong thing. Say what you want and how you will know it is done.',
		minutes: 8,
		sections: [{ heading: 'Stub', body: ['Stub text.'] }],
		diagram: { caption: 'Stub', describe: 'Stub' },
		examples: {
			everyday: { before: 'Stub', after: 'Stub', why: 'Stub' },
			office: { before: 'Stub', after: 'Stub', why: 'Stub' },
			code: { before: 'Stub', after: 'Stub', why: 'Stub' },
		},
		tryThis: { title: 'Stub', steps: ['Stub'] },
		check: { question: 'Stub?', options: ['A', 'B'], answer: 0, explain: 'Stub' },
		next: 'Stub',
	},
];
