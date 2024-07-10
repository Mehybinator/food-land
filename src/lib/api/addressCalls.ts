import { get } from 'svelte/store';
import { auth } from '$lib/stores/auth';

export async function addAddress(address: string): Promise<{ status: boolean; msg: string }> {
	const $auth = get(auth);
	if ($auth) {
		try {
			const response = await fetch('http://foodland.somee.com/api/Address', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${$auth.token}`
				},
				body: JSON.stringify({ streetAddress: address })
			});

			if (!response.ok) return { status: false, msg: 'Adding failed' };

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
			const response = await fetch('http://foodland.somee.com/api/Address', {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${$auth.token}`
				},
				body: JSON.stringify({ id })
			});

			if (!response.ok) return { status: false, msg: 'Removing failed' };

			return { status: true, msg: '' };
		} catch {
			return { status: false, msg: 'err' };
		}
	} else {
		return { status: false, msg: 'Not Authenticated' };
	}
}
