<script lang="ts">
  let modal: HTMLDialogElement;
  let signup: boolean = false;
  let errorMsg: string = "";
</script>

<button class="btn" on:click={() => modal.showModal()}>
  <i class="fa-solid fa-right-to-bracket"></i>
  <p class="pb-1 hidden sm:block">ورود/ثبت نام</p>
</button>
<dialog bind:this={modal} class="modal">
  <div class="modal-box min-w-96 max-w-96 md:max-w-[32rem]">
    <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute left-2 top-2"
        >✕</button
      >
    </form>
    <div class="flex flex-col justify-between items-center h-[32rem]">
      <h3 class="font-bold text-lg pt-6">Hello!</h3>
      <div class="flex flex-col place-self-start">
        <div class="flex gap-2 w-2/3">
          <button
          class="flex-1 btn btn-outline btn-primary !text-base-content hover:!text-primary-content rounded-b-none border-2 border-white {!signup
            ? 'border-b-primary'
            : 'border-b-base-200'} py-4"
          on:click={() => {
            signup = false;
          }}>ورود</button
        >
        <button
          class="flex-1 btn btn-outline btn-primary !text-base-content hover:!text-primary-content rounded-b-none border-2 border-white {signup
            ? 'border-b-primary'
            : 'border-b-base-200'} py-4"
          on:click={() => {
            signup = true;
          }}>ثبت نام</button
        >
        </div>
        <p class="mt-4">
          لطفا نام کاربری و رمز عبور خود را {signup ? "ایجاد" : "وارد"} کنید.
        </p>
      </div>
      <div class="flex flex-col gap-{signup ? '2' : '10'}  w-full">
        <label class="input input-bordered flex items-center gap-4 w-full h-16">
          <i class="fa-solid fa-user"></i>
          <input type="text" class="grow" placeholder="شماره همراه" />
        </label>
        <label class="input input-bordered flex items-center gap-2 w-full h-16">
          <i class="fa-solid fa-key"></i>
          <input type="text" class="grow" placeholder="رمز عبور" />
        </label>
        <label
          class="input input-bordered flex items-center gap-2 w-full h-16 {!signup
            ? 'hidden'
            : ''} "
        >
          <i class="fa-solid fa-key"></i>
          <input type="text" class="grow" placeholder="تکرار رمز عبور" />
        </label>
        <p
          class="text-error flex flex-row items-center gap-2 pr-4 {errorMsg !=
          ''
            ? ''
            : 'hidden'}"
        >
          <i class="fa-solid fa-user"></i>
          {errorMsg}
        </p>
      </div>
      <button class="btn btn-primary w-full h-16"
        >{signup ? "ثبت نام" : "ورود"}</button
      >
    </div>
  </div>
</dialog>
