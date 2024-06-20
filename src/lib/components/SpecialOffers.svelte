<script lang="ts">
  import Card from "./Card.svelte";
</script>

<div
  class="flex flex-row overflow-auto gap-4 py-10 pl-4 bg-base-200 bg-opacity-50 rounded-2xl"
>
  <div class="flex flex-col min-w-36 max-w-36 justify-center items-center pr-4 gap-5">
    <div class="flex flex-col text-center gap-4">
      <h2 class="text-2xl text-primary font-extrabold">پیشنهادات</h2>
      <h2 class="text-2xl text-primary font-extrabold">ویژه</h2>
    </div>
    <img src="images/logo.png" alt="">
  </div>
  <Card discount={20} />
  <Card discount={15} />
  <Card discount={25} />
  <Card discount={90} />
  <Card discount={65} />
  <Card discount={50} />
</div>
