<script lang="ts">
  let count: number = 0;
  let liked: boolean = false;
  export let discount: number | null = null;
</script>

<div class="card min-w-[17rem] max-w-[17rem] h-[28rem] bg-base-100 shadow-xl group">
  <figure class="">
    <img
    src="/images/burger.jpg"
    alt="Shoes"
    class="transition-transform group-hover:scale-125 w-48"
  />
  </figure>
  <div class="card-body">
    <div class="flex items-center gap-2">
      <h2 class="card-title pb-1 font-extrabold">بیگ مک برگر</h2>
      {#if discount}
        <div class="badge badge-primary">{discount}%</div> 
      {/if}
    </div>
    <p>100 گرم برگر دستساز، کاهو، گوجه، سیب زمینی</p>
    <div class="flex flex-row justify-between items-end">
      <div class="flex items-center gap-3">
        <p class="{discount ? 'line-through opacity-70' : ''}">400,000 ت</p>
        {#if discount}
          <p class="font-bold">200,000 ت</p>
        {/if}
      </div>
    </div>
    <div class="join h-12">
      <button class="btn {liked ? '' : 'btn-outline'} btn-error join-item basis-1/4" on:click={() => {liked = !liked}}>
        <i class="{liked ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
      </button>
      {#if count > 0}
          <button on:click={() => count++} class="btn btn-success join-item"
            ><i class="fa-solid fa-plus"></i></button
          >
          <span class="join-item grid place-items-center bg-base-200 w-full"
            >{count}</span
          >
          <button on:click={() => count--} class="btn btn-error join-item"
            ><i class="fa-solid fa-minus"></i></button
          >
      {:else}
        <button class="btn btn-primary join-item basis-3/4" on:click={() => count++}
          >افزودن به سبد</button
        >
      {/if}
    </div>
  </div>
</div>
