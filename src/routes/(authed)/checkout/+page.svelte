<script lang="ts">
	import Cart from '$lib/components/Cart.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

{#if data}
	<Cart {data} />
{/if}
