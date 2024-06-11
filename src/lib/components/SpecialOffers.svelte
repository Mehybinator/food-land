<script lang="ts">
  import Card from "./Card.svelte";
</script>

<div
  class="flex flex-row overflow-auto gap-4 py-10 pl-4 bg-base-200 bg-opacity-50 rounded-2xl"
>
  <div class="flex flex-col min-w-36 max-w-36 justify-center items-center pr-4">
    <h2 class="text-2xl">Special</h2>
    <p>offers</p>
  </div>
  <Card discount={20} />
  <Card discount={15} />
  <Card discount={25} />
  <Card discount={90} />
  <Card discount={65} />
  <Card discount={50} />
</div>
