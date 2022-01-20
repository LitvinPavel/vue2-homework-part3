<template>
  <footer class="flex items-center space-x-4 border-t p-4">
    <hw-smile-icon class="w-5 h-5" />
    <hw-text-field
      v-model="message"
      placeholder="Start typing..."
      @enter="sendMessage"
    />
    <hw-at-icon class="w-5 h-5" />
    <hw-send-icon class="w-5 h-5 cursor-pointer" @click.native="sendMessage" />
  </footer>
</template>

<script>
import HwSmileIcon from "../components/icons/hw-smile-icon.vue";
import HwAtIcon from "../components/icons/hw-at-icon.vue";
import HwSendIcon from "../components/icons/hw-send-icon.vue";
import HwTextField from "../components/hw-text-field.vue";

export default {
  components: {
    HwSmileIcon,
    HwAtIcon,
    HwSendIcon,
    HwTextField
  },
  data() {
    return {
      message: null
    };
  },
  methods: {
    sendMessage() {
      this.$emit("send", {
        isUser: true,
        text: this.message,
        date: new Date(),
      });
      this.message = null;
    }
  }
};
</script>
