<script>
	import { basic } from '$lib/utils/appwrite-database';
	export const create = async () => {
		try {
			const result = await basic();
			output.innerHTML = JSON.stringify(result);
		} catch (e) {
			output.innerHTML = JSON.stringify(e);
		}
	};

	/** @type {HTMLElement}*/
	let output;
</script>

<div class="flex flex-col justify-center items-center">
	<div class="flex justify-center">
		<button class="button" on:click={create}>Create Document with Basic Permissions</button>
	</div>
	<div class="flex justify-center" bind:this={output} />
</div>
