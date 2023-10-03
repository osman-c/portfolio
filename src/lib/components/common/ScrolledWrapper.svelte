<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	export let id: string;
	let node: HTMLElement;
	const offset = 256;

	const dispatch = createEventDispatcher();

	function onScroll() {
		const bBox = node.getBoundingClientRect();
		const compared = window.scrollY + offset;
		if (bBox.bottom > compared && bBox.top < compared) {
			dispatch('scrolled', id);
		}
	}

	onMount(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.addEventListener('scroll', onScroll);
	});
</script>

<div bind:this={node}>
	<slot />
</div>
