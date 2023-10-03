<script lang="ts">
	import { experiences } from '$lib/data';
	import { createEventDispatcher } from 'svelte';
	import { scrolled } from '../../scrolled';
	import ExperienceDisplay from './ExperienceDisplay.svelte';

	const dispatch = createEventDispatcher();
</script>

<section
	id="experience"
	use:scrolled={() => dispatch('scrolled', 'experience')}
	class="scroll-m-24"
>
	<ul class="flex flex-col gap-8">
		{#each experiences as experience, i (i)}
			<li>
				<ExperienceDisplay {experience} />
			</li>
		{/each}
	</ul>
</section>
