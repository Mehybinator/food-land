<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	import Category from '$lib/components/Category.svelte';
	import SpecialOffers from '$lib/components/SpecialOffers.svelte';
</script>

<SpecialOffers data={data.discounted} />
<div class="h-12"></div>
<Category data={data.categories} />
