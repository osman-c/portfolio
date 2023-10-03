<script lang="ts">
	import { personalExperiences } from '$lib/data';
	import { scrolled } from '../../scrolled';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	import ExperienceDisplay from './ExperienceDisplay.svelte';
</script>

<section id="personal" use:scrolled={() => dispatch('scrolled', 'personal')} class="scroll-m-24">
	<ul class="flex flex-col gap-8">
		{#each personalExperiences as experience, i (i)}
			<li>
				<ExperienceDisplay {experience} />
			</li>
		{/each}
	</ul>
</section>
