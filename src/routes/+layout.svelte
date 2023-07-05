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
</script>

<!-- Modal -->
<Modal />
<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<img src="/images/lightBulb.png" alt="Logo of the app" />
			</svelte:fragment>
			<svelte:fragment slot="headline">
				<strong class="text-xl uppercase">BroLamp</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a class="btn btn-sm variant-ghost-surface" href="/login" target="_blank" rel="noreferrer">
					Connection
				</a>
				<a class="btn btn-sm variant-ghost-surface" href="/about" target="_blank" rel="noreferrer">
					A propos
				</a>
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
			Et ça c'est encore en dessous !
		</div></svelte:fragment
	>
</AppShell>
