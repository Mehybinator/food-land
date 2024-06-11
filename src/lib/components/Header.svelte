<script lang="ts">
  import LoginSignup from "./LoginSignup.svelte";
  import { page } from '$app/stores';
</script>

<div class="navbar bg-base-100">
  <div class="flex-1">
    {#if $page.route.id === '/profile'}
      <label for="my-drawer-2" class="btn btn-ghost btn-circle drawer-button lg:hidden"><i class="fa-solid fa-user"></i></label>
    {/if}
    <a href="/" class="btn btn-ghost text-xl text-primary hidden lg:inline-flex">daisyUI</a>
  </div>
  <div class="flex gap-2">
    <LoginSignup />
    <a href="/cart" class="btn btn-ghost btn-circle">
      <div class="indicator">
        <span class="badge badge-sm indicator-item indicator-start">8</span>
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
    </a>
  </div>
</div>
