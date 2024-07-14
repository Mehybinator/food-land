import { get } from 'svelte/store';
import { auth } from '$lib/stores/auth';

export async function addToCart(id: number): Promise<{ status: boolean; msg: string }> {
	const $auth = get(auth);
	if ($auth) {
		try {
			const response = await fetch('/api/Cart', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${$auth.token}`
				},
				body: JSON.stringify(id)
			});

			if (!response.ok) return { status: false, msg: 'Adding failed' };

			const data = await response.json();

			auth.update((auth) => {
				if (auth) {
					const existingItem = auth.cart.find((cartItem) => cartItem.id === data.cartItem.foodId);
					if (existingItem) {
						return {
							...auth,
							cart: auth.cart.map((cartItem) =>
								cartItem.id === data.cartItem.foodId
									? { ...cartItem, quantity: data.cartItem.quantity }
									: cartItem
							),
							cartCount: auth.cartCount + 1,
							cartTotalPrice: data.totalPrice
						};
					} else {
						return {
							...auth,
							cart: [
								...auth.cart,
								{
									id: data.cartItem.foodId,
									quantity: data.cartItem.quantity
								}
							],
							cartCount: auth.cartCount + 1,
							cartTotalPrice: data.totalPrice
						};
					}
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

export async function removeFromCart(id: number): Promise<{ status: boolean; msg: string }> {
	const $auth = get(auth);
	if ($auth) {
		try {
			const response = await fetch('/api/Cart', {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${$auth.token}`
				},
				body: JSON.stringify(id)
			});

			if (!response.ok) return { status: false, msg: 'Removing failed' };

			const data = await response.json();

			auth.update((auth) => {
				if (auth) {
					const existingItem = auth.cart.find((cartItem) => cartItem.id === id);
					if (existingItem && existingItem.quantity > 1) {
						return {
							...auth,
							cart: auth.cart.map((cartItem) =>
								cartItem.id === id
									? {
											...cartItem,
											quantity: cartItem.quantity - 1
									  }
									: cartItem
							),
							cartCount: auth.cartCount - 1,
							cartTotalPrice: data.totalPrice
						};
					} else {
						return {
							...auth,
							cart: auth.cart.filter((cartItem) => cartItem.id !== id),
							cartCount: auth.cartCount - 1,
							cartTotalPrice: data.totalPrice
						};
					}
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
