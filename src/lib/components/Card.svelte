<script lang="ts">
	import type { FoodItem } from '$lib/customInterfaces';
	import { auth } from '$lib/stores/auth';
	import { addToCart, removeFromCart } from '$lib/api/cartCalls';

	import { addToFavorites, removeFromFavorites } from '$lib/api/favoritesCalls';

	let loadingFav: boolean = false;
	let loadingCart: boolean = false;

	export let data: FoodItem;

	async function favoritesToggle() {
		if ($auth) {
			loadingFav = true;
			if (!($auth.favorites.filter((favorite) => favorite === data.id).length > 0)) {
				const res = await addToFavorites(data.id);
			} else {
				const res = await removeFromFavorites(data.id);
			}
			loadingFav = false;
		}
	}

	async function cartAdd() {
		loadingCart = true;
		const res = await addToCart(data.id);
		loadingCart = false;
	}

	async function cartRemove() {
		loadingCart = true;
		const res = await removeFromCart(data.id);
		loadingCart = false;
	}
</script>

<div class="card min-w-[17rem] max-w-[17rem] h-[28rem] bg-base-100 shadow-xl group">
	<figure class="">
		<img
			src={data.imageUrl}
			alt={data.name}
			class="transition-transform group-hover:scale-125 w-full"
		/>
	</figure>
	<div class="card-body">
		<div class="flex items-center gap-2">
			<h2 class="card-title pb-1 font-extrabold">{data.name}</h2>
			{#if data.discountPercentage}
				<div class="badge badge-primary">
					{data.discountPercentage}%
				</div>
			{/if}
		</div>
		<p>{data.description}</p>
		<div class="flex flex-row justify-between items-end">
			<div class="flex items-center gap-3">
				<p class={data.discountPercentage ? 'line-through opacity-70' : ''}>
					{data.price} ت
				</p>
				{#if data.discountPercentage}
					<p class="font-bold">{data.priceAfterDiscount} ت</p>
				{/if}
			</div>
		</div>
		<div class="join h-12">
			<button
				on:click={favoritesToggle}
				class="btn {loadingFav
					? 'btn-disabled'
					: $auth
						? $auth.favorites.filter((favorite) => favorite === data.id).length > 0
							? ''
							: 'btn-outline'
						: 'btn-outline'} btn-error join-item basis-1/4"
			>
				{#if loadingFav}
					<span class="loading loading-spinner loading-sm"></span>
				{:else}
					<i
						class="{$auth
							? $auth.favorites.filter((favorite) => favorite === data.id).length > 0
								? 'fa-solid'
								: 'fa-regular'
							: 'fa-regular'} fa-heart"
					></i>
				{/if}
			</button>
			{#if $auth && $auth.cart.find((cartItem) => cartItem.id === data.id) !== undefined}
				<button
					on:click={cartAdd}
					class="btn btn-success join-item {loadingCart ? 'btn-disabled' : ''}"
				>
					<i class="fa-solid fa-plus"></i>
				</button>
				<span class="join-item grid place-items-center bg-base-200 w-full">
					{#if loadingCart}
						<span class="loading loading-spinner loading-sm"></span>
					{:else}
						{$auth.cart.find((cartItem) => cartItem.id === data.id)?.quantity}
					{/if}
				</span>
				<button
					on:click={cartRemove}
					class="btn btn-error join-item {loadingCart ? 'btn-disabled' : ''}"
				>
					<i class="fa-solid fa-minus"></i>
				</button>
			{:else}
				<button
					class="btn btn-primary join-item basis-3/4 {loadingCart ? 'btn-disabled' : ''}"
					on:click={cartAdd}
				>
					{#if loadingCart}
						<span class="loading loading-spinner loading-sm"></span>
					{:else}
						<p>افزودن به سبد</p>
					{/if}
				</button>
			{/if}
		</div>
	</div>
</div>
