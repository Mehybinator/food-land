import { auth } from '$lib/stores/auth';
import { get } from 'svelte/store';

export async function submitOrder(id: number): Promise<{ status: boolean; msg: string }> {
	const $auth = get(auth);
	if ($auth) {
		try {
			const response = await fetch('/api/Orders', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${$auth.token}`
				},
				body: JSON.stringify(id)
			});

			if (!response.ok) return { status: false, msg: 'Submit failed' };

			auth.update((auth) => {
				if (auth) {
					return {
						...auth,
						cart: [],
						cartCount: 0,
						cartTotalPrice: 0
					};
				}
				return auth;
			});

			return { status: true, msg: '' };
		} catch (error) {
			return { status: false, msg: 'err' };
		}
	}
	return { status: false, msg: 'Not authorized' };
}
