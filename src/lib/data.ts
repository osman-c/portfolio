import type { Experience } from '$lib/app.types';

export const experiences: Experience[] = [
	{
		company: 'Indie Travel',
		start: new Date('2022-04-01'),
		end: new Date('2023-09-01'),
		ref: 'https://www.hostwithindie.com',
		tags: [
			'JavaScript',
			'TypeScript',
			'React',
			'Next.js',
			'Turborepo',
			'Material UI',
			'Tailwind CSS',
			'Docker'
		],
		title: 'Frontend Engineer',
		projects: [
			{
				ref: 'https://www.indietravel.co',
				title: 'indie marketplace'
			},
			{
				ref: 'https://dashboard.indietravel.co/',
				title: 'indie dashboard'
			}
		],
		content:
			'Developed and maintained interactive and accessible web apps that enable users to create and sell bookings.'
	},
	{
		company: 'Melexsoft',
		start: new Date('2021-10-01'),
		end: new Date('2022-03-01'),
		ref: 'https://www.melexsoft.com/',
		tags: ['TypeScript', 'SCSS', 'React', 'Next.JS', 'Web3'],
		title: 'Frontend Engineer',
		secondary: ['Designer'],
		content: 'Developed and designed an NFT marketplace and some other small projects.'
	},
	{
		company: 'Neuralize',
		start: new Date('2021-03-01'),
		end: new Date('2023-01-01'),
		ref: 'https://www.neurolize.com/en/Home',
		tags: [
			'JavaScript',
			'TypeScript',
			'Bootsrap CSS',
			'Tailwind CSS',
			'Handlebars',
			'JQuery',
			'Svelte'
		],
		title: 'Frontend Engineer',
		secondary: ['Freelancer', 'Designer'],
		content:
			'Developed and designed an interactive and advanced tool that enables users to create all kinds of experiments and publish them.'
	},
	{
		company: 'Tekhnelogos',
		start: new Date('2019-10-01'),
		end: new Date('2020-08-01'),
		ref: 'https://www.tekhnelogos.com/',
		tags: [
			'JavaScript',
			'Bootstrap',
			'Python',
			'Celery',
			'Flask',
			'Redis',
			'C#',
			'ASP.NET',
			'Razor Pages',
			'SignalR',
			'MVC',
			'Entity Framework',
			'MySQL'
		],
		title: 'Fullstack Developer',
		secondary: ['Contract work', 'Designer', 'Project manager'],
		projects: [
			{
				title: 'Quixo Cup',
				ref: 'https://www.tekhnelogos.com/topluluk/quixo-yz-yarismasi?culture=en'
			}
		],
		content:
			'Developed and designed a JavaScript version of a board game, a web server with C# that manages websockets and matchmaking, and another web server with Python that manages the game logic and AI.'
	}
];

export const personalExperiences: Experience[] = [
	{
		start: new Date('2023-06-01'),
		end: new Date('2023-07-01'),
		title: 'CLI Developer',
		tags: ['Rust', 'CLI'],
		projects: [
			{
				title: 'Compare JSON',
				ref: 'https://github.com/osman-c/compare-json'
			}
		],
		content: 'Developed a rust CLI tool to more efficiently sort and compare JSON files.'
	},
	{
		start: new Date('2023-07-01'),
		title: 'Fullstack Developer',
		tags: ['TypeScript', 'Svelte', 'SvelteKit', 'TRPC', 'Supabase', 'PostgreSQL', 'Spotify API'],
		projects: [
			{
				title: 'Songs App',
				ref: 'https://songs-black.vercel.app/'
			}
		],
		content:
			"Currently developing an app that enables users to rank their preferred artist's top 10 songs and share them."
	}
];
