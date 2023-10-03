<script lang="ts">
	import Reference from '../common/Reference.svelte';
	import { scrolled } from '../../scrolled';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<section
	class="flex flex-col gap-4 scroll-m-24"
	id="about"
	use:scrolled={() => dispatch('scrolled', 'about')}
>
	<p>
		In 2019, I began my web development journey writing vanilla Javascript. I worked on projects
		such as a <Reference href="https://www.tekhnelogos.com/topluluk/quixo-yz-yarismasi"
			>competitive AI-based gaming platform</Reference
		>, an <Reference href="https://www.melexsoft.com/">NFT marketplace</Reference>, a
		<Reference href="https://www.indietravel.co">booking app</Reference> and a
		<Reference href="https://www.neurolize.com/en/Home">survey design tool</Reference>.
	</p>
	<p>
		Currently, I'm focused on a <Reference href="https://songs-black.vercel.app/"
			>personal project</Reference
		> using <Reference href="https://kit.svelte.dev/">SvelteKit</Reference>, creating a
		Spotify-based app for ranking and sharing songs, while also exploring new programming languages
		like Go and Rust.
	</p>
	<p>When I'm not coding, I work out and play video games.</p>
</section>
