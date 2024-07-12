import type { PageLoad } from '../../../$types';
import type { Address, Favorites } from '$lib/customInterfaces';
import { auth } from '$lib/stores/auth';
import addresses from '$lib/stores/addresses';
import { get } from 'svelte/store';

export const load: PageLoad = async ({ fetch }) => {
	const $auth = get(auth);
	if ($auth) {
		const res = await fetch(`http://foodland.somee.com/api/Favorites`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${$auth.token}`
			}
		});
		const data: Favorites[] = await res.json();
		auth.update((value) => {
			if (value) {
				return {
					...value,
					favorites: data.map((value) => value.id)
				};
			}
			return value;
		});

		return { favorites: data };
	}
};
