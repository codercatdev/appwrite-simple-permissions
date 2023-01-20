<script>
	import '../app.postcss';
	import '@aw-labs/ui/dist/appwrite.css';
	import '@aw-labs/icons/dist/icon.css';

	import TopNav from '$lib/components/navigation/TopNav.svelte';
	import SideNav from '$lib/components/navigation/SideNav.svelte';

	// TODO: https://github.com/sveltejs/kit/issues/2733
	import { afterNavigate } from '$app/navigation';
	/** @type {HTMLElement} */
	let contentElem;
	afterNavigate(() => {
		setTimeout(() => {
			contentElem.scrollTo(0, 0);
		}, 0);
	});
</script>

<main class="grid-with-side" id="main" bind:this={contentElem}>
	<TopNav />
	<SideNav />
	<slot />
</main>
