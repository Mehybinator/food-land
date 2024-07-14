<script lang="ts">
	import type { Order } from '$lib/customInterfaces';

	export let data: Order;
</script>

<div class="join w-full">
	<span class="grid place-items-center whitespace-nowrap px-2 pb-1 bg-base-200 join-item w-14"
		>{data.id}</span
	>
	<span
		class="grid items-center pb-1 pr-2 bg-base-200 w-full border-r border-r-base-300 overflow-hidden whitespace-nowrap"
		>{#each data.orderItems as orderItem, idx}
			{#if data.orderItems.length == idx + 1}
				{orderItem.foodName}
			{:else}
				{orderItem.foodName} ,
			{/if}
		{/each}
	</span>
	<button on:click class="btn join-item border-r-base-300"
		><i class="fa-solid fa-clipboard-check"></i></button
	>
</div>
