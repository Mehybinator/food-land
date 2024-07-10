<script lang="ts">
	import { addAddress } from '$lib/api/addressCalls';
	import AddressCard from '$lib/components/AddressCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let adding: boolean = false;
	let newAddress: string;

	async function add() {
		if (newAddress.length > 0) {
			adding = true;
			const res = await addAddress(newAddress);
			adding = false;
		}
	}
</script>

<h3 class="pt-8 pb-2 pr-6">آدرس ها</h3>
<div class="divider px-6 m-0"></div>
<div class="flex flex-col px-6 py-4 gap-4">
	<div class="join w-full">
		<span
			class="grid place-items-center w-auto whitespace-nowrap px-2 pb-1 border border-base-300 join-item"
			>آدرس جدید:</span
		>
		<input bind:value={newAddress} class="input input-bordered join-item w-full" type="text" />
		<button on:click={add} class="btn btn-primary join-item {adding ? 'btn-disabled' : ''}"
			>اضافه کردن</button
		>
	</div>
	{#each data.addresses as address}
		<AddressCard data={address} />
	{/each}
</div>
