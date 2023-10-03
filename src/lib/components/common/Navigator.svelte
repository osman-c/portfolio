<script lang="ts">
	import clsx from 'clsx';

	export let id: string;
	export let state: string;

	$: active = state === id;
</script>

<li>
	<a
		href={'#' + id}
		class={clsx(
			'font-mono transition-all',
			active ? 'text-white text-4xl pl-0' : 'text-gray-600 pl-4'
		)}>{id.toUpperCase()}</a
	>
</li>
