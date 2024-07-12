import { auth } from '$lib/stores/auth';
import { redirect } from '@sveltejs/kit';
import { get } from 'svelte/store';
import { browser } from '$app/environment';

if (browser) {
	const $auth = get(auth);
	if (!$auth) {
		redirect(302, '/');
	}
}
