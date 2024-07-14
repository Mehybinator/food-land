<script lang="ts">
	import { updateProfile } from '$lib/api/profileCalls';
	import { auth } from '$lib/stores/auth';

	let loading: boolean = false;

	let name: string = $auth?.name || '';
	let userName: string = $auth?.userName || '';
	let password: string = '';
	let confirmPassword: string = '';

	async function update() {
		loading = true;
		const res = await updateProfile(
			name !== $auth?.name ? name : undefined,
			userName !== $auth?.userName ? userName : undefined,
			password || undefined,
			confirmPassword || undefined
		);
		console.log(res);
		loading = false;

		// Optionally, you can add some user feedback here based on the response
		if (res.status) {
			// Show success message
		} else {
			// Show error message
		}

		// Clear password fields after update attempt
		password = '';
		confirmPassword = '';
	}
</script>

<h3 class="pt-8 pb-2 pr-6">اطلاعات کاربری</h3>
<div class="divider px-6 m-0"></div>
<div class="grid grid-cols-1 md:grid-cols-2 place-items-center py-4 gap-4">
	<div class="flex flex-col gap-4 w-full px-4">
		<h2>نام و نام خانوادگی :</h2>
		<input
			bind:value={name}
			type="text"
			placeholder={$auth?.name}
			class="input input-bordered w-full"
		/>
	</div>
	<div class="flex flex-col gap-4 w-full px-4">
		<h2>شماره موبایل :</h2>
		<input
			bind:value={userName}
			type="text"
			placeholder={$auth?.userName}
			class="input input-bordered w-full"
		/>
	</div>
	<div class="flex flex-col gap-4 w-full px-4">
		<h2>رمز عبور :</h2>
		<input
			bind:value={password}
			type="password"
			placeholder="رمز جدید"
			class="input input-bordered w-full"
		/>
	</div>
	<div class="flex flex-col gap-4 w-full px-4">
		<h2>تکرار رمز عبور :</h2>
		<input
			bind:value={confirmPassword}
			type="password"
			placeholder="تکرار رمز جدید"
			class="input input-bordered w-full"
		/>
	</div>
	<button
		on:click={update}
		class="btn btn-primary col-span-1 md:col-span-2 {loading ? 'btn-disabled' : ''}"
		>ثبت اطلاعات</button
	>
</div>
