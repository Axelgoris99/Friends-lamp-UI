import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';

const pb = new PocketBase('https://pb.goris.live/');
const currentUser = writable(pb.authStore.model);

pb.authStore.onChange((auth) => {
	console.log('authStore changed', auth);
	currentUser.set(pb.authStore.model);
});

export { pb, currentUser };
