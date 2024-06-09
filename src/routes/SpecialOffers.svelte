<script lang="ts">
  import DiscountCard from "./DiscountCard.svelte";
</script>

<div
  class="flex flex-row overflow-auto gap-4 py-10 bg-base-200 bg-opacity-50 rounded-2xl"
>
  <div class="flex flex-col min-w-36 max-w-36 justify-center items-center pr-4">
    <h2 class="text-2xl">Special</h2>
    <p>offers</p>
  </div>
  <DiscountCard />
  <DiscountCard />
  <DiscountCard />
  <DiscountCard />
  <DiscountCard />
  <DiscountCard />
  <DiscountCard />
  <DiscountCard />
</div>
