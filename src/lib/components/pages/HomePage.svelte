<script lang="ts">
	import Summary from './Summary.svelte';
	import ExperienceList from './ExperienceList.svelte';
	import PersonalList from './PersonalList.svelte';
	import Reference from '../common/Reference.svelte';
	import Socials from './Socials.svelte';
	import LightingEffect from '../common/LightingEffect.svelte';
	import Navigator from '../common/Navigator.svelte';

	let scrolled = 'about';

	function handleScrolled(e: CustomEvent<string>) {
		scrolled = e.detail;
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="flex flex-col md:flex-row gap-8 px-4 py-16 md:py-24 mx-auto max-w-4xl text-gray-400">
	<div class="md:flex-1">
		<div class="top-24 sticky flex flex-col justify-between md:h-[calc(100vh-12rem)]">
			<div class="flex flex-col gap-4">
				<h1 class="text-4xl text-white font-mono">Osmancan Özkan</h1>
				<h2 class="text-xl text-white font-mono">Software Engineer</h2>
				<div class="font-mono text-center">I build websites that anyone can use.</div>
				<div class="mt-8">
					<ul class="hidden md:block">
						<Navigator id="about" state={scrolled} />
						<Navigator id="experience" state={scrolled} />
						<Navigator id="personal" state={scrolled} />
					</ul>
				</div>
			</div>
			<div class="md:block hidden">
				<Socials />
			</div>
		</div>
	</div>
	<div class="md:flex-1 flex flex-col gap-16">
		<Summary on:scrolled={handleScrolled} />
		<ExperienceList on:scrolled={handleScrolled} />
		<PersonalList on:scrolled={handleScrolled} />
		<footer class="md:mt-[50vh] text-center">
			<div class="block md:hidden mb-4">
				<Socials />
			</div>
			<p>
				Made with <Reference href="https://kit.svelte.dev/">SvelteKit</Reference>. Inspired by
				Brittany Chang's <Reference href="https://brittanychiang.com/">website</Reference>. <Reference
					href="https://github.com/osman-c/portfolio">Repo</Reference
				> of this website.
			</p>
		</footer>
	</div>
</div>
<LightingEffect />
