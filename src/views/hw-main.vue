<template>
  <main class="flex flex-col items-center py-4 px-6">
    <p class="text-secondary mb-6">8/20/2020</p>
    <div class="hw-message hw-message--right bg-primary text-white">
      <p class="leading-none">text</p>
      <div class="text-sm inline-flex absolute right-0 whitespace-nowrap mr-1">
        <span>11:36 AM</span>
        <hw-dubble-check-icon class="w-4 ml-1" />
      </div>
    </div>
    <div class="hw-message hw-message--left bg-main-bg ml-9">
      <img src="/img/ava1.svg" alt="" class="hw-message--left-avatar" />
      <div class="flex items-center">
        <span class="font-semibold">Name</span>
        <span class="text-secondary text-sm ml-2">Post</span>
      </div>
      <p class="leading-none">text</p>
      <div class="text-sm inline-flex absolute right-0 whitespace-nowrap mr-1">
        <span>11:36 AM</span>
        <hw-dubble-check-icon class="w-4 ml-1" />
      </div>
    </div>
  </main>
</template>

<script>
import HwDubbleCheckIcon from "../components/icons/hw-dubble-check-icon.vue"
  export default {
    components: {
      HwDubbleCheckIcon
    }
  }
</script>
