import { auth } from '$lib/stores/auth';
import { redirect } from '@sveltejs/kit';
import { get } from 'svelte/store';

const $auth = get(auth);
if (!$auth) {
	redirect(302, '/');
}
