import type { PageLoad } from '../../$types';
import { auth } from '$lib/stores/auth';
import { get } from 'svelte/store';
import type { Address, CartResponse, CartResponsItem } from '$lib/customInterfaces';

export const load: PageLoad = async ({ fetch }) => {
	const $auth = get(auth);
	if ($auth) {
		const res1 = await fetch(`/api/Cart`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${$auth.token}`
			}
		});
		const data1 = await res1.json();
		const returnData: CartResponse = {
			items: data1.items.map((item: CartResponsItem) => ({
				...item,
				id: item.foodId
			})),
			totalPrice: data1.totalPrice
		};

		const res2 = await fetch(`/api/Address`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${$auth.token}`
			}
		});
		const data2: Address[] = await res2.json();

		return { cart: returnData, addresses: data2 };
	}
};
