<template>
  <input
    class="bg-transparent placeholder-current w-full pr-2"
    type="text"
    :id="id"
    :name="name"
    :value="value"
    :placeholder="placeholder"
    :disabled="disabled"
    @input="onInput"
    @focus="onFocusIn"
    @blur="onFocusOut"
    @keyup.enter="onEnter"
  />
</template>

<script>
export default {
  name: "hw-text-fild",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    id: {
      type: [String, Number],
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
    },
    onFocusIn() {
      this.$emit("focus");
    },
    onFocusOut() {
      this.$emit("blur");
    },
    onEnter() {
      console.log("test")
      this.$emit("enter");
    }
  }
};
</script>
