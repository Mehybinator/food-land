import { get } from 'svelte/store';
import { auth } from '$lib/stores/auth';
import addresses from '$lib/stores/addresses';
import type { Address } from '$lib/customInterfaces';

export async function addAddress(address: string): Promise<{ status: boolean; msg: string }> {
	const $auth = get(auth);
	if ($auth) {
		try {
			const response = await fetch('/api/Address', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${$auth.token}`
				},
				body: JSON.stringify({ streetAddress: address })
			});

			if (!response.ok) return { status: false, msg: 'Adding failed' };

			const data: Address = await response.json();

			addresses.update((value) => [...value, data]);

			return { status: true, msg: '' };
		} catch {
			return { status: false, msg: 'err' };
		}
	} else {
		return { status: false, msg: 'Not Authenticated' };
	}
}

export async function removeAddress(id: number): Promise<{ status: boolean; msg: string }> {
	const $auth = get(auth);
	if ($auth) {
		try {
			const response = await fetch('/api/Address', {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${$auth.token}`
				},
				body: JSON.stringify(id)
			});

			if (!response.ok) return { status: false, msg: 'Removing failed' };

			addresses.update((value) => value.filter((value) => value.id !== id));

			return { status: true, msg: '' };
		} catch {
			return { status: false, msg: 'err' };
		}
	} else {
		return { status: false, msg: 'Not Authenticated' };
	}
}
