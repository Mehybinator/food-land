import { get } from 'svelte/store';
import { auth } from '$lib/stores/auth';

export async function addToFavorites(id: number): Promise<{ status: boolean; msg: string }> {
	const $auth = get(auth);
	if ($auth) {
		try {
			const response = await fetch('http://foodland.somee.com/api/Favorites', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${$auth.token}`
				},
				body: JSON.stringify(id)
			});

			if (!response.ok) return { status: false, msg: 'Adding failed' };

			const data = await response.json();

			auth.update((value) => {
				if (value) {
					return {
						...value,
						favorites: [...value.favorites, data.id]
					};
				}
				return value;
			});

			return { status: true, msg: '' };
		} catch (error) {
			return { status: false, msg: 'err' };
		}
	}
	return { status: false, msg: 'Not authorized' };
}

export async function removeFromFavorites(id: number): Promise<{ status: boolean; msg: string }> {
	const $auth = get(auth);
	if ($auth) {
		try {
			const response = await fetch('http://foodland.somee.com/api/Favorites', {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${$auth.token}`
				},
				body: JSON.stringify(id)
			});

			if (!response.ok) return { status: false, msg: 'Removing failed' };

			auth.update((value) => {
				if (value) {
					return {
						...value,
						favorites: value.favorites.filter((favorite) => favorite !== id)
					};
				}
				return value;
			});

			return { status: true, msg: '' };
		} catch (error) {
			return { status: false, msg: 'err' };
		}
	}
	return { status: false, msg: 'Not authorized' };
}
