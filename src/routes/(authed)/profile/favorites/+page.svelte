<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import { auth } from '$lib/stores/auth';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h3 class="pt-8 pb-2 pr-6">علاقه مندی های من</h3>
<div class="divider px-6 m-0"></div>
<div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 place-items-center py-4 gap-4">
	{#if data.favorites}
		{#if $auth}
			{#each data.favorites as favorite}
				{#if $auth.favorites.find((value) => value === favorite.id)}
					<Card data={favorite} />
				{/if}
			{/each}
		{/if}
	{/if}
</div>
