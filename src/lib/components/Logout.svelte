<script>
	import { user } from '$lib/utils/stores';
	import { logout } from '$lib/utils/appwrite-account';
	/**
	 * @type {{ $id: string; }}
	 */
	let currentUser;
	user.subscribe((u) => {
		console.log('u', u);
		currentUser = u;
	});
	const onLogout = async () => {
		await logout(currentUser?.$id);
		user.set(null);
	};
</script>

<div class="flex justify-center items-center">
	<form on:submit={() => onLogout()}>
		<button class="button" type="submit">Logout {$user?.userId}</button>
	</form>
</div>
