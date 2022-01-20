<template>
  <main class="flex flex-col items-center py-4 px-6 flex-grow space-y-2">
    <p class="text-secondary mb-6">8/20/2020</p>

    <!-- <div class="hw-message hw-message--right bg-primary text-white">
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
    </div> -->

    <components 
      v-for="(item, index) in list"
      :key="index"
      :is="item.isUser ? 'hw-user-message' : 'hw-bot-message'"
      v-bind="item"
      :date="getTime(item.date)"
    />

    <!-- <div v-for="({text, date}, index) in list" :key="index" class="hw-message hw-message--right bg-primary text-white">
      <p class="leading-none">{{ text }}</p>
      <div class="text-sm inline-flex absolute right-0 whitespace-nowrap mr-1">
        <span>{{ getTime(date) }}</span>
        <hw-dubble-check-icon class="w-4 ml-1" />
      </div>
    </div> -->
  </main>
</template>

<script>
import HwUserMessage from "../components/hw-user-message.vue"
import HwBotMessage from "../components/hw-bot-message.vue"

  export default {
    props: {
      list: {
        type: Array,
        default: () => []
      }
    },
    components: {
      HwUserMessage,
      HwBotMessage
    },
    methods: {
      getTime(date) {
        return date.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'} )
      }
    }
  }
</script>
