<script lang="ts">
	import { onMount } from 'svelte';

	let x = '0';
	let y = '0';

	function handleMove(e: MouseEvent) {
		x = e.clientX + 'px';
		y = e.clientY + 'px';
	}

	onMount(() => {
		window.addEventListener('mousemove', handleMove);
		return () => window.removeEventListener('mousemove', handleMove);
	});
</script>

<div class="light bright hidden sm:block" style:--top={y} style:--left={x} />
<div class="light dark hidden sm:block" style:--top={y} style:--left={x} />

<style>
	.light {
		position: fixed;
		border-radius: 1000;
		z-index: -10;
		opacity: 0.1;
		left: var(--left);
		top: var(--top);
		transition: all;
	}

	.bright {
		box-shadow: 0 0 200px 200px #4685af;
	}

	.dark {
		box-shadow: 0 0 700px 700px #4685af;
	}
</style>
