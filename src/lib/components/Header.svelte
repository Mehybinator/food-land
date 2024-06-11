<script lang="ts">
  import LoginSignup from "./LoginSignup.svelte";
  import { page } from '$app/stores';
  let y: number;
</script>

<div class="transition-colors navbar {y > 50 ? 'bg-base-200' : 'bg-base-100'} sticky top-0 z-50 px-12">
  <div class="flex-1">
    {#if $page.route.id && $page.route.id.startsWith('/profile')}
      <label for="my-drawer-2" class="btn btn-ghost btn-circle drawer-button lg:hidden"><i class="fa-solid fa-user"></i></label>
    {/if}
    <a href="/" class="btn btn-ghost text-xl text-primary {$page.route.id && $page.route.id.startsWith('/profile') ? 'hidden lg:inline-flex' : ''}">daisyUI</a>
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

<svelte:window bind:scrollY={y} />