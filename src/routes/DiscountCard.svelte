<script lang="ts">
  let count: number = 0;
</script>

<div class="card min-w-80 max-w-80 h-[28rem] bg-base-100 shadow-xl group">
  <figure
    class="transition-transform w-52 h-52 self-center group-hover:scale-125"
  >
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
      alt="Shoes"
    />
  </figure>
  <div class="card-body">
    <h2 class="card-title">بیگ مک برگر</h2>
    <p>100 گرم برگر دستساز، کاهو، گوجه، سیب زمینی</p>
    <div class="flex flex-row justify-between items-end">
      <div class="flex items-center gap-2">
        <p class="line-through opacity-70 text-sm">400,000 ت</p>
        <p>200,000 ت</p>
      </div>
      <div class="badge badge-primary">50%</div>
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
