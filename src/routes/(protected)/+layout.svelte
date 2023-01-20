<script>
	import { user } from '$lib/utils/stores';
	import { onMount } from 'svelte';
	import { getCurrentSession } from '$lib/utils/appwrite-account';

	import Login from '$lib/components/Login.svelte';

	onMount(async () => {
		const session = await getCurrentSession();
		console.log('setting user: ', session);
		user.set(session);
	});
</script>

{#if $user}
	<slot />
{:else}
	<Login />
{/if}
