<script lang="ts">
  import Card from "./Card.svelte";
</script>

<div class="flex items-center flex-col py-6 gap-6">
  <div class="flex flex-row gap-12 w-1/2">
    <button
      class="flex-1 btn btn-outline rounded-b-none border-white border-b-primary py-4"
      >shoes</button
    >
    <button
      class="flex-1 btn btn-outline rounded-b-none border-white border-b-base-200 py-4"
      >sneakers</button
    >
  </div>
  <div
    class="bg-base-200 bg-opacity-50 w-full py-12 md:px-10 lg:px-20 xl:px-14 2xl:px-11 gap-12 rounded grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center"
  >
    <label
      class="lg:w-1/3 2xl:col-span-4 xl:col-span-3 md:col-span-2 input input-bordered flex items-center gap-2"
    >
      <input type="text" class="grow" placeholder="Email" />
      <i class="fa-solid fa-search"></i>
    </label>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
</div>
