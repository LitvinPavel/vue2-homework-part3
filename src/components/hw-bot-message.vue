<template>
  <div class="hw-message hw-message-left hw-message-tail ml-9">
    <img
      :src="`/img/${avatar}.svg`"
      :alt="avatar"
      class="hw-message-avatar"
    />
    <div class="flex items-center">
      <span v-if="name" class="font-semibold">{{ name }}</span>
      <span v-if="position" class="text-secondary text-sm ml-2">{{
        position
      }}</span>
    </div>
    <p class="leading-none">{{ text }}</p>
    <div class="text-sm inline-flex absolute right-0 whitespace-nowrap mr-1">
      <span v-if="date">{{ date }}</span>
    </div>
  </div>
</template>

<script>
const defaultAvatar = "ava1";

export default {
  name: "hw-bot-message",
  props: {
    avatar: {
      type: String,
      default: defaultAvatar
    },
    name: {
      type: String,
      default: null
    },
    position: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    date: {
      type: String,
      default: null
    }
  }
};
</script>
