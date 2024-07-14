<script lang="ts">
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { login, register } from '$lib/auth';

	let modal: HTMLDialogElement;
	let signup: boolean = false;
	let errorMsg: string = '';

	let username: string;
	let password: string;
	let confirmPassword: string;

	let loading: boolean = false;

	async function loginSignup() {
		loading = true;
		if (signup) {
			const res = await register(username, password, confirmPassword);
			if (!res.status) {
				errorMsg = res.msg;
			} else {
				goto('/');
			}
			loading = false;
			return;
		}
		const res = await login(username, password);
		if (!res.status) {
			errorMsg = res.msg;
		} else {
			goto('/');
		}
		loading = false;
	}
</script>

<button class="btn" on:click={() => modal.showModal()}>
	<i class="fa-solid fa-right-to-bracket"></i>
	<p class="pb-1 hidden sm:block">ورود/ثبت نام</p>
</button>
<dialog bind:this={modal} class="modal">
	<div class="modal-box min-w-96 max-w-96 md:max-w-[32rem]">
		<form method="dialog">
			<button
				class="btn btn-sm btn-circle btn-ghost absolute left-2 top-2 {loading
					? 'btn-disabled'
					: ''}">✕</button
			>
		</form>
		<div class="flex flex-col justify-between items-center h-[32rem]">
			<img src="/images/logo.png" alt="" class="w-24 pt-8" />
			<div class="flex flex-col place-self-start">
				<div class="flex gap-2 w-2/3">
					<button
						class="font-extrabold text-lg flex-1 btn btn-lg btn-outline {loading
							? 'btn-disabled'
							: 'btn-primary'} !text-base-content hover:!text-primary-content rounded-b-none border-2 border-white {!signup
							? 'border-b-primary'
							: 'border-b-base-200'} py-4"
						on:click={() => {
							signup = false;
						}}>ورود</button
					>
					<button
						class="font-extrabold text-lg whitespace-nowrap flex-1 btn btn-lg btn-outline {loading
							? 'btn-disabled'
							: 'btn-primary'} !text-base-content hover:!text-primary-content rounded-b-none border-2 border-white {signup
							? 'border-b-primary'
							: 'border-b-base-200'} py-4"
						on:click={() => {
							signup = true;
						}}>ثبت نام</button
					>
				</div>
				<p class="mt-4">
					لطفا نام کاربری و رمز عبور خود را {signup ? 'ایجاد' : 'وارد'} کنید.
				</p>
			</div>
			<div class="flex flex-col gap-{signup ? '2' : '10'}  w-full">
				<label class="input input-bordered flex items-center gap-4 w-full h-16">
					<i class="fa-solid fa-user"></i>
					<input
						bind:value={username}
						type="text"
						class="grow"
						disabled={loading}
						required
						placeholder="شماره همراه"
					/>
				</label>
				<label class="input input-bordered flex items-center gap-4 w-full h-16">
					<i class="fa-solid fa-key"></i>
					<input
						bind:value={password}
						type="password"
						class="grow"
						disabled={loading}
						required
						placeholder="رمز عبور"
					/>
				</label>
				{#if signup}
					<label
						transition:fly={{ y: -20, duration: 300 }}
						class="input input-bordered flex items-center gap-4 w-full h-16"
					>
						<i class="fa-solid fa-key"></i>
						<input
							bind:value={confirmPassword}
							type="password"
							class="grow"
							disabled={loading}
							required
							placeholder="تکرار رمز عبور"
						/>
					</label>
				{/if}
				{#if errorMsg !== ''}
					<p
						transition:fly={{ y: -20, duration: 300 }}
						class="text-error flex flex-row items-center gap-2 pr-4"
					>
						<i class="fa-solid fa-circle-exclamation"></i>
						{errorMsg}
					</p>
				{/if}
			</div>
			<button
				class="btn w-full h-16 {loading ? 'btn-disabled' : 'btn-primary'}"
				on:click={loginSignup}
			>
				{#if loading}
					<span class="loading loading-spinner"></span>
				{:else}
					{loading ? '' : signup ? 'ثبت نام' : 'ورود'}
				{/if}
			</button>
		</div>
	</div>
</dialog>
