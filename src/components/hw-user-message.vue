<template>
  <div
    class="hw-message hw-message-right"
    :class="{ 'hw-message-tail': !notFirst }"
  >
    <p class="leading-none">{{ text }}</p>
    <div class="text-sm inline-flex absolute right-0 whitespace-nowrap mr-1">
      <span>{{ date }}</span>
      <hw-dubble-check-icon class="w-4 ml-1" />
    </div>
  </div>
</template>

<script>
import HwDubbleCheckIcon from "../components/icons/hw-dubble-check-icon.vue";

export default {
  name: "hw-user-message",
  components: {
    HwDubbleCheckIcon,
  },
  props: {
    notFirst: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: null,
    },
    date: {
      type: String,
      default: null,
    },
  },
};
</script>
