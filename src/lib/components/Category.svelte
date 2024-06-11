<script lang="ts">
  import Card from "./Card.svelte";
  let tabIndex: number = 0;
</script>

<div class="flex items-center flex-col gap-6">
  <h1 class="text-3xl">دسته بندی ها</h1>
  <div class="flex-row gap-12 w-1/2 hidden lg:flex">
    <button
      on:click={() => (tabIndex = 0)}
      class="flex-1 btn btn-outline btn-primary !text-base-content hover:!text-primary-content rounded-b-none border-2 border-white {tabIndex == 0 ? 'border-b-primary' : 'border-b-base-200'} py-4">پیتزا</button
    >
    <button
      on:click={() => (tabIndex = 1)}
      class="flex-1 btn btn-outline btn-primary !text-base-content hover:!text-primary-content rounded-b-none border-2 border-white {tabIndex ==
      1
        ? 'border-b-primary'
        : 'border-b-base-200'} py-4">برگر</button
    >
    <button
      on:click={() => (tabIndex = 2)}
      class="flex-1 btn btn-outline btn-primary !text-base-content hover:!text-primary-content rounded-b-none border-2 border-white {tabIndex ==
      2
        ? 'border-b-primary'
        : 'border-b-base-200'} py-4">سالاد</button
    >
    <button
      on:click={() => (tabIndex = 3)}
      class="flex-1 btn btn-outline btn-primary !text-base-content hover:!text-primary-content rounded-b-none border-2 border-white {tabIndex ==
      3
        ? 'border-b-primary'
        : 'border-b-base-200'} py-4">نوشیدنی</button
    >
  </div>
  <select class="indent-0 select select-bordered text-base w-full max-w-xs pr-2 lg:hidden">
    <option disabled selected>دسته بندی</option>
    <option>پیتزا</option>
    <option>برگر</option>
    <option>سالاد</option>
    <option>نوشیدنی</option>
  </select>
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
    <Card discount={5}/>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
</div>
