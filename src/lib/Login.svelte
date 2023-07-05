<script lang="ts">
	import { currentUser, pb } from './pocketbase';
	import { modalStore } from '@skeletonlabs/skeleton';

	let bgColor: string;

	let username: string;
	let password: string;

	async function login() {
		await pb.collection('users').authWithPassword(username, password);
		modalStore.clear();
	}

	async function signUp() {
		try {
			const data = {
				username,
				password,
				passwordConfirm: password,
				name: username,
				color: '#ffffff',
				message: 'Je suis la brolamp !'
			};
			const createdUser = await pb.collection('users').create(data);
			await login();
		} catch (err) {
			console.log(err);
		}
	}

	function signOut() {
		pb.authStore.clear();
		modalStore.clear();
	}
</script>

<div class="p-10 rounded bg-surface-50-900-token">
	{#if $currentUser}
		<div class="space-y-5 flex flex-col items-center justify-center">
			<p>Connecté en tant que {$currentUser.username}</p>
			<button class="btn variant-filled" on:click={signOut}>Se déconnecter</button>
		</div>
	{:else}
		<form on:submit|preventDefault class="space-y-5">
			<label class="label">
				<span>Nom d'utilisateur</span>
				<input
					class="input"
					title="Nom d'utilisateur"
					type="text"
					placeholder="Username"
					bind:value={username}
				/></label
			>
			<label class="label">
				<span>Mot de passe</span>

				<input
					class="input"
					title="Mot de passe"
					type="password"
					placeholder="Password"
					bind:value={password}
				/>
			</label>

			<button type="button" class="btn variant-filled-primary" on:click={login}>Connexion</button>
			<button type="button" class="btn variant-filled-secondary" on:click={signUp}
				>Inscription</button
			>
		</form>
	{/if}
</div>

<!-- <style lang="postcss">
	.bg {
		@apply bg-surface-100/100;
		opacity: 1;
	}
</style> -->
