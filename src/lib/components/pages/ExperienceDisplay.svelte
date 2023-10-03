<script lang="ts">
	import type { Experience } from '$lib/app.types';
	import { format } from 'date-fns';
	//@ts-ignore
	import GoLinkExternal from 'svelte-icons/go/GoLinkExternal.svelte';

	export let experience: Experience;
	let hovered = false;

	function dateDisplay(start: Date, end?: Date) {
		return [format(start, 'Y MMM'), end ? format(end, 'Y MMM') : 'Present'].join('\n');
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="flex gap-4 transition-all duration-500"
	style:opacity={hovered ? 1 : 0.8}
	on:mouseenter={() => (hovered = true)}
	on:mouseleave={() => (hovered = false)}
	aria-controls="highlight"
>
	<div class="basis-24">
		<span class="text-gray-600">
			{dateDisplay(experience.start, experience.end)}
		</span>
	</div>
	<div class="flex-1">
		<p class="text-white text-lg font-mono">
			<span
				>{experience.title}
				{#if experience.ref && experience.company}
					<a class="text-gray-400 hover:text-primary-500" href={experience.ref} target="_blank"
						>@{experience.company}</a
					>
				{/if}
			</span>
		</p>
		{#each experience.secondary || [] as subTitle, i (i)}
			<p class="text-gray-600 font-mono">
				{subTitle}
			</p>
		{/each}
		<p>
			{experience.content}
		</p>
		{#if experience.projects}
			<div class="flex gap-4 mt-2">
				{#each experience.projects as project, i (i)}
					<a href={project.ref} target="_blank" class="btn btn-sm gap-2 hover:text-primary-500">
						<div class="h-4 w-4">
							<GoLinkExternal />
						</div>
						{project.title}
					</a>
				{/each}
			</div>
		{/if}
		<div class="flex gap-2 flex-wrap mt-2">
			{#each experience.tags as tag, i (i)}
				<div class="badge variant-ghost-primary">
					{tag}
				</div>
			{/each}
		</div>
	</div>
</div>
