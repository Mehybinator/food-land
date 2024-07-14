// src/lib/auth.js
import { auth } from '$lib/stores/auth';

export async function login(
	username: string,
	password: string
): Promise<{ status: boolean; msg: string }> {
	try {
		const response = await fetch('http://foodland.somee.com/api/Auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username, password })
		});

		if (!response.ok) return { status: false, msg: 'Login failed' };

		const data = await response.json();

		auth.set({
			token: data.token,
			userId: data.user.id,
			userName: data.user.userName,
			name: data.name,
			favorites: data.favorites.map((favorite) => favorite.id),
			cart: data.cartItems.map((cartItem) => {
				return { id: cartItem.foodId, quantity: cartItem.quantity };
			}),
			cartCount: data.cartCount,
			cartTotalPrice: 0
		});

		return { status: true, msg: '' };
	} catch (error) {
		return { status: false, msg: 'err' };
	}
}

export async function register(
	username: string,
	password: string,
	confirmPassword: string
): Promise<{ status: boolean; msg: string }> {
	try {
		const response = await fetch('http://foodland.somee.com/api/Auth/register', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username, password, confirmPassword })
		});

		if (!response.ok) return { status: false, msg: 'Registration failed' };

		const res = await login(username, password);

		return res;
	} catch (error) {
		return { status: false, msg: 'err' };
	}
}

export async function logOut() {
	auth.set(null);
}
