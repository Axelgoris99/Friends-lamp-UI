<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import { Modal, modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';

	import Login from '$lib/Login.svelte';
	const modalComponent: ModalComponent = {
		// Pass a reference to your custom component
		ref: Login
	};
	function modal() {
		const modal: ModalSettings = {
			type: 'component',
			// Pass the component directly:
			component: modalComponent
		};
		modalStore.trigger(modal);
	}
</script>

<!-- Modal -->
<Modal />
<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<!-- <svelte:fragment slot="lead">
				<img class="max-h-8" src="/images/lightBulb.png" alt="Logo of the app" />
			</svelte:fragment> -->
			<svelte:fragment slot="lead">
				<a href="/" rel="noreferrer"><strong class="text-xl uppercase">BroLamp</strong> </a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<button class="btn btn-sm variant-ghost-surface" on:click={modal}> Connection </button>
				<a class="btn btn-sm variant-ghost-surface" href="/about" rel="noreferrer"> A propos </a>
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<svelte:fragment slot="pageFooter"
		><div class="container h-full mx-auto flex justify-center items-center">
			Ceci est un pied de page.
		</div></svelte:fragment
	>
	<svelte:fragment slot="footer"
		><div class="container h-full mx-auto flex justify-center items-center">
			BROLAAAAAAAAAMP !
		</div></svelte:fragment
	>
</AppShell>
