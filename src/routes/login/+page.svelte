<script lang="ts">
	import Login from '$lib/Login.svelte';
	import { currentUser } from '$lib/pocketbase';
</script>

{#if $currentUser}
	<p>Connecté en tant que {$currentUser.username}</p>
{:else}
	<Login />
{/if}
