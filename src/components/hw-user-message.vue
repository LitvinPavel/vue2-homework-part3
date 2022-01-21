<script>
import HwDubbleCheckIcon from "../components/icons/hw-dubble-check-icon.vue";

export default {
  name: "hw-user-message",
  components: {
    HwDubbleCheckIcon
  },
  props: {
    notFirst: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: null
    },
    date: {
      type: [Date, String],
      default: null
    }
  },
  methods: {
    getTime(date) {
      return date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit"
      });
    }
  },
  render(h) {
    return h(
      "div",
      {
        class: `hw-message hw-message-right ${this.notFirst ? '' : 'hw-message-tail'}`
      },
      [
        h("p", { class: "leading-none" }, this.text),
        h(
          "div",
          {
            class:
              "text-sm inline-flex absolute right-0 whitespace-nowrap mr-1",
          },
          this.date
            ? [
                h("span", this.getTime(this.date)),
                h("hw-dubble-check-icon", { class: "w-4 ml-1" }),
              ]
            : [h("hw-dubble-check-icon", { class: "w-4 ml-1" })]
        )
      ]
    );
  }
};
</script>
