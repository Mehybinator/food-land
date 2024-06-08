<script lang="ts">
</script>

<div class="navbar bg-base-100">
  <div class="flex-1">
    <a href="#" class="btn btn-ghost text-xl text-primary">daisyUI</a>
  </div>
  <div class="flex gap-2">
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn">ورود/ثبت نام</div>
      <ul
        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a href="#" class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </div>
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <span class="badge badge-sm indicator-item indicator-start">8</span>
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
      <div
        class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
      >
        <div class="card-body">
          <span class="font-bold text-lg">8 Items</span>
          <span class="text-info">Subtotal: $999</span>
          <div class="card-actions">
            <button class="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
