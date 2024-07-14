<script lang="ts">
	import Card from './Card.svelte';
	import { auth } from '$lib/stores/auth';
	import type { Address, CartResponse } from '$lib/customInterfaces';

	import { submitOrder } from '$lib/api/orderCalls';

	let loading: boolean = false;

	let selectValue: number;

	export let data: { cart: CartResponse; addresses: Address[] };

	async function submit() {
		if (selectValue != -1) {
			loading = true;
			const res = await submitOrder(selectValue);
			console.log(res);
			loading = false;
		}
	}
</script>

<div class="flex flex-col xl:flex-row gap-4">
	<div
		class="flex flex-col bg-base-200 bg-opacity-50 rounded-md py-10 basis-3/4 min-h-[37.5rem] max-h-[37.5rem]"
	>
		<h2 class="pr-8">سبد خرید</h2>
		<div class="divider"></div>
		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center overflow-auto gap-y-4"
		>
			{#if $auth}
				{#if data.cart.items.length > 0}
					{#each data.cart.items as cartItem}
						{#if $auth.cart.find((value) => value.id == cartItem.id)}
							<Card data={cartItem} />
						{/if}
					{/each}
				{:else}
					<h1>no items added</h1>
				{/if}
			{/if}
		</div>
	</div>
	<div
		class="justify-between flex flex-col basis-1/4 bg-base-200 bg-opacity-50 p-10 rounded-md max-h-[26rem] min-h-[26rem]"
	>
		<div class="space-y-2">
			<h3>انتخاب آدرس</h3>
			<select
				bind:value={selectValue}
				class="select select-bordered text-base w-full max-w-xs pr-2"
			>
				<option disabled selected value="-1">آدرس مورد نظرتان را انتخاب کنید</option>
				{#each data.addresses as address}
					<option value={address.id}>{address.streetAddress}</option>
				{/each}
			</select>
		</div>
		<button class="btn btn-primary w-fit">افزودن آدرس جدید</button>
		<div class="divider m-0"></div>
		<div class="flex flex-row justify-between">
			<p>جمع خرید:</p>
			<p>{$auth && $auth.cartTotalPrice}</p>
		</div>
		<button on:click={submit} class="btn btn-primary {loading ? 'btn-disabled' : ''}"
			>تایید و پرداخت</button
		>
	</div>
</div>
