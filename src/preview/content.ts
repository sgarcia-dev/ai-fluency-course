// Shared content for the preview prototypes. Designs and pickers import from here;
// they never hard-code lesson titles, paths or copy.
import curriculum from './curriculum.json';
export { samples, type Lesson, type World } from './lessons';

export type LessonRef = { n: number; slug: string; title: string; idea: string };
export type Part = { n: number; title: string; for: string; lessons: LessonRef[] };
export type Path = { id: string; says: string; name: string; lessons: number[] };

export const parts = curriculum.parts as Part[];
export const paths = curriculum.paths as Path[];
export const allLessons: LessonRef[] = parts.flatMap((p) => p.lessons);
export const lessonByNumber = (n: number) => allLessons.find((l) => l.n === n)!;

export const worlds = [
	{ id: 'everyday', label: 'Everyday life' },
	{ id: 'office', label: 'Office work' },
	{ id: 'code', label: 'Code' },
] as const;

export const site = {
	name: 'Your AI Path',
	nameNote: 'Working title.',
	tagline: 'Start where you are.',
	pitch:
		'Short lessons on using AI well, in any tool. Tell it where you are starting, and it shows you only what you need.',
	why: [
		'The gap between people who get a lot from AI and people who do not is about time, not talent. Most people never got a free afternoon to learn how it really works.',
		'Most AI courses teach one tool, so they go stale in months. Or they try to make everyone an expert, and turn into a slog.',
		'This one teaches the method behind every tool: how to aim it, feed it, check it and pay a fair price for it. It meets you where you are, in 5 to 15 minutes at a time.',
	],
	different: [
		{ title: 'Your path, not the whole course', body: 'A few questions about what you actually do, then you only see the lessons that fit you.' },
		{ title: 'Any tool', body: 'No vendor to sell. The skills carry over when you switch apps.' },
		{ title: 'Short and plain', body: 'One idea per lesson, one picture, one thing to try. 5 to 15 minutes.' },
		{ title: 'Honest about cost', body: 'The biggest model is rarely the right one. You will learn when to use the cheap one.' },
		{ title: 'Free, always', body: 'Built in the open. Corrections and ideas are welcome.' },
	],
	author: {
		name: 'Sergei Garcia',
		url: 'https://sergeigarcia.com/',
		story:
			'I first built this for my colleagues at Reddit as a hackathon project. People kept asking for more, from meetup friends to people who had barely touched ChatGPT. So I am rebuilding it for everyone.',
	},
	status: 'Preview. Two sample lessons are ready. The rest is on the map below, and I would love your feedback on it.',
	feedbackUrl: 'mailto:hello@sergeigarcia.com?subject=AI%2C%20Plainly%20feedback',
};
