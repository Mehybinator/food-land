<script lang="ts">
  import type { FoodItem } from "$lib/customInterfaces";
  import { auth } from "$lib/stores/auth";

  let count: number = 0;
  let isFavorite: boolean = false;

  export let data: FoodItem;

  if ($auth) {
    const favItem = $auth.favorites.filter(value => value.id === data.id);
    isFavorite = favItem.length > 0;
  }

</script>

<div class="card min-w-[17rem] max-w-[17rem] h-[28rem] bg-base-100 shadow-xl group">
  <figure class="">
    <img src={data.imageUrl} alt={data.name} class="transition-transform group-hover:scale-125 w-full" />
  </figure>
  <div class="card-body">
    <div class="flex items-center gap-2">
      <h2 class="card-title pb-1 font-extrabold">{data.name}</h2>
      {#if data.discountPercentage}
        <div class="badge badge-primary">{data.discountPercentage}%</div>
      {/if}
    </div>
    <p>{data.description}</p>
    <div class="flex flex-row justify-between items-end">
      <div class="flex items-center gap-3">
        <p class={data.discountPercentage ? "line-through opacity-70" : ""}>
          {data.price} ت
        </p>
        {#if data.discountPercentage}
          <p class="font-bold">{data.priceAfterDiscount} ت</p>
        {/if}
      </div>
    </div>
    <div class="join h-12">
      <button
        class="btn {isFavorite ? '' : 'btn-outline'} btn-error join-item basis-1/4">
        <i class="{isFavorite ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
      </button>
      {#if count > 0}
        <button on:click={() => count++} class="btn btn-success join-item">
          <i class="fa-solid fa-plus"></i>
        </button>
        <span class="join-item grid place-items-center bg-base-200 w-full">{count}</span>
        <button on:click={() => count--} class="btn btn-error join-item">
          <i class="fa-solid fa-minus"></i>
        </button>
      {:else}
        <button
          class="btn btn-primary join-item basis-3/4"
          on:click={() => count++}>افزودن به سبد</button>
      {/if}
    </div>
  </div>
</div>