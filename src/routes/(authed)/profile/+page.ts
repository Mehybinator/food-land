import type { PageLoad } from './$types';
import type { FoodItem, Category, Order } from '$lib/customInterfaces';
import { auth } from '$lib/stores/auth';
import { get } from 'svelte/store';

export const load: PageLoad = async ({ fetch }) => {
	const $auth = get(auth);
	if ($auth) {
		const res = await fetch(`http://foodland.somee.com/api/Orders`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${$auth.token}`
			}
		});

		const data: Order[] = await res.json();

		return { orders: data };
	}
};
