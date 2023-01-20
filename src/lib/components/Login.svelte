<script>
	import { user } from '$lib/utils/stores';
	import { login } from '$lib/utils/appwrite-account';

	const onLogin = async () => {
		const u = await login();
		user.set(u);
	};
</script>

<div class="flex justify-center items-center">
	<form on:submit={onLogin}>
		<button class="button" type="submit">Login as User</button>
	</form>
</div>
