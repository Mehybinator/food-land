<script lang="ts">
  let count: number = 0;
  export let discount: number | null = null;
</script>

<div class="card min-w-[17rem] max-w-[17rem] h-[28rem] bg-base-100 shadow-xl group">
  <figure
    class="transition-transform w-52 h-52 self-center group-hover:scale-125"
  >
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
      alt="Shoes"
    />
  </figure>
  <div class="card-body">
    <div class="flex items-center gap-2">
      <h2 class="card-title pb-1">بیگ مک برگر</h2>
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
    {#if count > 0}
      <div class="join">
        <button on:click={() => count++} class="btn btn-success join-item w-1/4"
          ><i class="fa-solid fa-plus"></i></button
        >
        <span class="join-item grid place-items-center w-2/4 bg-base-200"
          >{count}</span
        >
        <button on:click={() => count--} class="btn btn-error join-item w-1/4"
          ><i class="fa-solid fa-minus"></i></button
        >
      </div>
    {:else}
      <button class="btn btn-primary w-full h-11" on:click={() => count++}
        >افزودن به سبد</button
      >
    {/if}
  </div>
</div>
