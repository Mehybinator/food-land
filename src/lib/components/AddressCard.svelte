<script lang="ts">
	let removing: boolean = false;
	import { removeAddress } from '$lib/api/addressCalls';
	import type { Address } from '$lib/customInterfaces';

	export let data: Address;

	async function remove() {
		removing = true;
		const res = await removeAddress(data.id);
		removing = false;
	}
</script>

<div class="join w-full">
	<span class="grid place-items-center whitespace-nowrap px-2 pb-1 bg-base-200 join-item w-14"
		>{data.id}</span
	>
	<span class="grid items-center pb-1 pr-2 bg-base-200 w-full border-r border-r-base-300"
		>{data.streetAddress}
	</span>
	<button on:click={remove} class="btn join-item border-r-base-300 {removing ? 'btn-disabled' : ''}"
		><i class="fa-solid fa-trash-can"></i></button
	>
</div>
