import { auth } from '$lib/stores/auth';
import { get } from 'svelte/store';

export async function updateProfile(
	name?: string,
	username?: string,
	password?: string,
	confirmPassword?: string
): Promise<{ status: boolean; msg: string }> {
	const $auth = get(auth);
	if ($auth) {
		try {
			// Create an object with only the provided fields
			const updateData: any = {};
			if (name !== undefined) updateData.name = name;
			if (username !== undefined) updateData.username = username;
			if (password !== undefined) updateData.password = password;
			if (confirmPassword !== undefined) updateData.confirmPassword = confirmPassword;

			const response = await fetch('/api/Profile/update', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${$auth.token}`
				},
				body: JSON.stringify(updateData)
			});

			if (!response.ok) return { status: false, msg: 'Update failed' };

			// Update the store with the new values
			if (password && confirmPassword) {
				auth.set(null);
			} else {
				auth.update((auth) => {
					if (auth) {
						return {
							...auth,
							name: name !== undefined ? name : auth.name,
							userName: username !== undefined ? username : auth.userName
						};
					}
					return auth;
				});
			}

			return { status: true, msg: 'Profile updated successfully' };
		} catch (error) {
			return { status: false, msg: 'An error occurred while updating the profile' };
		}
	}
	return { status: false, msg: 'Not authorized' };
}
