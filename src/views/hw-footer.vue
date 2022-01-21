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
        name: null,
        text: this.message,
        date: new Date(),
      });
      this.$refs.textField.clear();
    },
    startCommand() {
      this.message = '@';
      this.$refs.textField.doFocus();
    }
  },
  render(h) {
    return h("footer", { class: "flex items-center space-x-4 border-t p-4" }, [
      h("hw-smile-icon", { class: "w-5 h-5" }),
      h("hw-text-field", {
        props: { value: this.message, placeholder: "Start typing..." },
        on: { enter: this.sendMessage, input: (event) => (this.message = event) },
        ref: "textField",
      }),
      h("button", { class: "cursor-pointer", on: { click: this.startCommand } }, [
        h("hw-at-icon", { class: "w-5 h-5" })
      ]),
      h("button", { class: "cursor-pointer", on: { click: this.sendMessage } }, [
        h("hw-send-icon", { class: "w-5 h-5" })
      ])
    ]);
  }
};
</script>
