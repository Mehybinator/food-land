<script lang="ts">
	import { fly } from 'svelte/transition';
	import Card from './Card.svelte';
	import type { Category, FoodItem } from '$lib/customInterfaces';

	let tabIndex: number = 1;
	export let data: Category[];

	let searchQuery: string = '';
</script>

<div class="flex items-center flex-col gap-6">
	<h1 class="text-3xl">دسته بندی ها</h1>
	<div class="flex-row gap-12 w-1/2 hidden lg:flex">
		{#each data as category}
			<button
				on:click={() => (tabIndex = category.id)}
				class="flex-1 btn btn-outline btn-primary !text-base-content hover:!text-primary-content rounded-b-none border-2 border-white {tabIndex ==
				category.id
					? 'border-b-primary'
					: 'border-b-base-200'} py-4">{category.name}</button
			>
		{/each}
	</div>
	<select
		class="indent-0 select select-bordered text-base w-full max-w-xs pr-2 lg:hidden"
		on:change={(event) => (tabIndex = parseInt(event.target?.value))}
	>
		<option disabled selected>دسته بندی</option>
		{#each data as category}
			<option value={category.id}>{category.name}</option>
		{/each}
	</select>
	<div
		class="bg-base-200 bg-opacity-50 w-full py-12 md:px-10 lg:px-20 xl:px-14 2xl:px-11 gap-12 rounded-2xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center"
	>
		<label
			class="lg:w-1/3 2xl:col-span-4 xl:col-span-3 md:col-span-2 input input-bordered flex items-center gap-2 shadow-xl border-none transition-all"
		>
			<input type="text" class="grow" placeholder="Search" bind:value={searchQuery} />
			<i class="fa-solid fa-search"></i>
		</label>
		{#each data as category (category.id)}
			{#if tabIndex === category.id}
				{#each category.foods.filter((food) => food.name
						.toLowerCase()
						.includes(searchQuery.toLowerCase())) as food (food.id)}
					<Card data={food} />
				{/each}
			{/if}
		{/each}
	</div>
</div>
