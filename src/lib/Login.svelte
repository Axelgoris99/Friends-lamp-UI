<script lang="ts">
	import { currentUser, pb } from './pocketbase';

	let username: string;
	let password: string;

	async function login() {
		await pb.collection('users').authWithPassword(username, password);
	}

	async function signUp() {
		try {
			const data = {
				username,
				password,
				passwordConfirm: password,
				name: username
			};
			const createdUser = await pb.collection('users').create(data);
			await login();
		} catch (err) {
			console.log(err);
		}
	}

	function signOut() {
		pb.authStore.clear();
	}
</script>

{#if $currentUser}
	<p>Connecté en tant que {$currentUser.username}</p>
	<button on:click={signOut}>Se déconnecter</button>
{:else}
	<form on:submit|preventDefault>
		<input
			class="input"
			title="Nom d'utilisateur"
			type="text"
			placeholder="Username"
			bind:value={username}
		/>
		<input
			class="input"
			title="Mot de passe"
			type="password"
			placeholder="Password"
			bind:value={password}
		/>

		<button type="button" class="btn variant-filled-primary" on:click={login}>Connexion</button>
		<button type="button" class="btn variant-filled-secondary" on:click={signUp}>Inscription</button
		>
	</form>
{/if}
