<script>
export default {
  name: "hw-text-fild",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },

    placeholder: {
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
    onEnter(e) {
      if (e.keyCode !== 13) return;
      this.$emit("enter");
      this.clear();
    },
    doFocus() {
      this.$refs.input.focus();
    },
    clear() {
      this.$refs.input.value = "";
    },
  },
  render(h) {
    return h("input", {
      class: "bg-transparent placeholder-current w-full pr-2",
      ref: "input",
      attrs: { type: "text" },
      domProps: {
        value: this.value
      },
      props: {
        placeholder: this.placeholder,
        disabled: this.disabled
      },
      on: {
        input: this.onInput,
        focus: this.onFocusIn,
        blur: this.onFocusOut,
        keyup: this.onEnter
      }
    });
  }
};
</script>
