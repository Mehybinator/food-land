<script lang="ts">
	import type { PageData } from './$types';
	import OrderCard from '$lib/components/OrderCard.svelte';
	import OrderModal from '$lib/components/OrderModal.svelte';
	import type { Order } from '$lib/customInterfaces';

	let showModal: boolean = false;
	let selectedData: Order;

	export let data: PageData;
</script>

<h3 class="pt-8 pb-2 pr-6">سفارش های من</h3>
<div class="divider px-6 m-0"></div>
<div class="flex flex-col px-6 py-4 gap-4">
	{#if data.orders}
		{#each data.orders as order}
			<OrderCard
				data={order}
				on:click={() => {
					selectedData = order;
					showModal = true;
				}}
			/>
		{/each}
	{/if}
</div>

<OrderModal bind:showModal data={selectedData} />
