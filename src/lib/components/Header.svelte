<script lang="ts">
  import LoginSignup from "./LoginSignup.svelte";
</script>

<div class="navbar bg-base-100">
  <div class="flex-1">
    <a href="/" class="btn btn-ghost text-xl text-primary">daisyUI</a>
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
