<script lang="ts">
	import type { Order } from '$lib/customInterfaces';

	let modal: HTMLDialogElement;
	export let showModal: boolean;
	export let data: Order;

	$: if (modal && showModal) modal.showModal();
</script>

<dialog bind:this={modal} on:close={() => (showModal = false)} class="modal">
	<div class="modal-box min-w-96 max-w-96 md:max-w-[32rem]">
		<form method="dialog">
			<button class="btn btn-sm btn-circle btn-ghost absolute left-2 top-2">✕</button>
		</form>
		<div class="flex flex-col justify-between items-center h-[32rem]">
			<img src="/images/logo.png" alt="" class="w-24 pt-8" />
			{#if data}
				<p>
					{data.streetAddress}
				</p>
			{/if}
		</div>
	</div>
</dialog>
