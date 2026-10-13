// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const theory = [
	'what-ai-really-is',
	'give-it-the-right-context',
	'catch-ai-mistakes',
	'pick-the-right-model',
	'read-model-hype',
	'dont-prompt-delegate-responsibility',
	'explain-once',
];
const harness = [
	'what-a-harness-is',
	'your-own-expert',
	'agents-md-the-file-it-always-reads',
	'skills-reusable-procedures',
	'mcp-connect-to-the-world',
	'subagents-divide-and-conquer',
];
const appendix = ['model-cheat-sheet', 'glossary', 'putting-it-together', 'dictation'];

// https://astro.build/config
export default defineConfig({
	site: 'https://sgarcia-dev.github.io',
	base: '/ai-fluency-course',
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: 'AI Fluency',
			description: 'A short, tool-agnostic guide to using AI well. Learn the method once, use any AI tool.',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/sgarcia-dev/ai-fluency-course' }],
			editLink: { baseUrl: 'https://github.com/sgarcia-dev/ai-fluency-course/edit/main/' },
			sidebar: [
				{ label: 'Start here', link: '/' },
				{ label: 'Theory', items: theory.map((s) => `theory/${s}`) },
				{ label: 'Harness', items: harness.map((s) => `harness/${s}`) },
				{ label: 'Appendix', items: appendix.map((s) => `appendix/${s}`) },
			],
		}),
	],
});
