<script lang="ts">
	export let href: string;
</script>

<a {href} target="_blank" class="text-white hover:text-primary-500 transition-all font-mono">
	<slot />
</a>
