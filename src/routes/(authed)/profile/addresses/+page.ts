import type { PageLoad } from '../../../$types';
import type { Address } from '$lib/customInterfaces';
import { auth } from '$lib/stores/auth';
import addresses from '$lib/stores/addresses';
import { get } from 'svelte/store';

export const load: PageLoad = async ({ fetch }) => {
	const $auth = get(auth);
	if ($auth) {
		const res = await fetch(`/api/Address`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${$auth.token}`
			}
		});
		const data: Address[] = await res.json();
		addresses.set(data);

		return { addresses: data };
	}
};
