<script lang="ts">
  import Card from "./Card.svelte";
  import DiscountCard from "./DiscountCard.svelte";
</script>

<div class="flex items-center flex-col gap-6">
  <h1 class="text-3xl">دسته بندی ها</h1>
  <div class="flex flex-row gap-12 w-1/2">
    <button
      class="hover:bg-primary hover:text-primary-content hover:border-primary flex-1 btn btn-outline rounded-b-none border-white border-b-primary py-4"
      >shoes</button
    >
    <button
      class="hover:bg-primary hover:text-primary-content hover:border-primary flex-1 btn btn-outline rounded-b-none border-white border-b-base-200 py-4"
      >sneakers</button
    >
  </div>
  <div
    class="bg-base-200 bg-opacity-50 w-full py-12 md:px-10 lg:px-20 xl:px-14 2xl:px-11 gap-12 rounded-2xl rounded-b-none grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center"
  >
    <label
      class="lg:w-1/3 2xl:col-span-4 xl:col-span-3 md:col-span-2 input input-bordered flex items-center gap-2 shadow-xl border-none transition-all"
    >
      <input type="text" class="grow" placeholder="Email" />
      <i class="fa-solid fa-search"></i>
    </label>
    <Card />
    <Card />
    <DiscountCard />
    <Card />
    <DiscountCard />
    <Card />
    <DiscountCard />
  </div>
</div>
