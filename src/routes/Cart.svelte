<script lang="ts">
  import Card from "./Card.svelte";
  import CartCard from "./CartCard.svelte";
</script>

<div class="flex flex-col xl:flex-row gap-4">
  <div
    class="flex flex-col bg-base-200 rounded-md py-10 basis-3/4 min-h-[37.5rem] max-h-[37.5rem]"
  >
    <h2 class="pr-8">سبد خرید</h2>
    <div class="divider"></div>
    <div
      class="grid grid-cols-1 lg:grid-cols-2 place-items-center overflow-auto gap-y-4"
    >
      <CartCard />
      <CartCard />
      <CartCard />
      <CartCard />
      <CartCard />
    </div>
  </div>
  <div
    class="justify-between flex flex-col basis-1/4 bg-base-200 p-10 rounded-md max-h-[26rem] min-h-[26rem]"
  >
    <div class="space-y-2">
      <h3>انتخاب آدرس</h3>
      <select class="select select-bordered text-base w-full max-w-xs pr-2">
        <option disabled selected>آدرس مورد نظرتان را انتخاب کنید</option>
        <option>کوچه سمت راست</option>
        <option>کوچه سمت چپ</option>
      </select>
    </div>
    <button class="btn btn-primary w-fit">افزودن آدرس جدید</button>
    <div class="divider m-0"></div>
    <div class="flex flex-row justify-between">
      <p>جمع خرید:</p>
      <p>1,600,000</p>
    </div>
    <button class="btn btn-primary">تایید و پرداخت</button>
  </div>
</div>
