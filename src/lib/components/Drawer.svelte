<script lang="ts">
  import { page } from "$app/stores";
  let drawerState: boolean;
</script>

<div class="drawer lg:drawer-open {drawerState ? 'z-50' : ''}">
  <input bind:checked={drawerState} id="my-drawer-2" type="checkbox" class="drawer-toggle"/>

  <div class="drawer-content lg:h-[64rem] bg-base-200 rounded-lg bg-opacity-50 lg:mr-6 lg:overflow-auto">
    <slot />
  </div>

  <div class="drawer-side rounded-lg">
    <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu p-4 w-80 h-full lg:h-[32rem] bg-base-200 text-base-content gap-4 lg:bg-opacity-50 rounded-lg">
      <div class="flex gap-2">
        <label for="my-drawer-2" class="btn btn-ghost drawer-button lg:hidden">X</label>
        <a href="/"><img src="/images/logo.png" alt="" class="min-w-24 max-w-24 lg:hidden"></a>
      </div>
      <!-- Sidebar content here -->
      <li>
        <a class="!text-base-content hover:!text-primary-content flex justify-start btn btn-outline btn-primary border-2 border-transparent {$page.route.id == "/(authed)/profile" ? 'border-b-primary' : 'border-b-base-200'} rounded-b-none" href="/profile">
          <i class="fa-solid fa-user"></i>
          <p class="pb-1">تاریخچه سفارشات</p>
        </a>
      </li>
      <li>
        <a class="!text-base-content hover:!text-primary-content flex justify-start btn btn-outline btn-primary border-2 border-transparent {$page.route.id === "/(authed)/profile/favorites" ? 'border-b-primary' : 'border-b-base-200'} rounded-b-none" href="/profile/favorites">
          <i class="fa-solid fa-user"></i>
          <p class="pb-1">علاقه مندی ها</p>
        </a>
      </li>
      <li>
        <a class="!text-base-content hover:!text-primary-content flex justify-start btn btn-outline btn-primary border-2 border-transparent {$page.route.id === "/(authed)/profile/adresses" ? 'border-b-primary' : 'border-b-base-200'} rounded-b-none" href="/profile/adresses">
          <i class="fa-solid fa-user"></i>
          <p class="pb-1">آدرس ها</p>
        </a>
      </li>
      <li>
        <a class="!text-base-content hover:!text-primary-content flex justify-start btn btn-outline btn-primary border-2 border-transparent {$page.route.id === "/(authed)/profile/userinfo" ? 'border-b-primary' : 'border-b-base-200'} rounded-b-none" href="/profile/userinfo">
          <i class="fa-solid fa-user"></i>
          <p class="pb-1">اطلاعات حساب کاربری</p>
        </a>
      </li>
      <li>
        <a class="!text-base-content hover:!text-primary-content flex justify-start btn btn-outline btn-primary border-2 border-transparent border-b-base-200 rounded-b-none" href="/">
          <i class="fa-solid fa-user"></i>
          <p class="pb-1">خروج</p>
        </a>
      </li>
    </ul>
  </div>
</div>