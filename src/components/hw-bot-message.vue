<script>
export default {
  name: "hw-bot-message",
  props: {
    avatar: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    position: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
    date: {
      type: [Date, String],
      default: null,
    },
    notFirst: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getTime(date) {
      return date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
    },
  },
  render(h) {
    let content = [];
    if (this.avatar)
      content.push(
        h("img", {
          attrs: { src: `/img/${this.avatar}.svg`, alt: this.avatart },
          class: "hw-message-avatar",
        })
      );
    if (this.name || this.position) {
      content.push(
        h("div", { class: "flex items-center" }, [
          h("span", { class: "font-semibold" }, this.name),
          h("span", { class: "text-secondary text-sm ml-2" }, this.position),
        ])
      );
    }
    if (this.text) content.push(h("p", { class: "leading-none" }, this.text));
    if (this.date)
      content.push(
        h(
          "div",
          {
            class:
              "text-sm inline-flex absolute right-0 whitespace-nowrap mr-1",
          },
          [h("span", this.getTime(this.date))]
        )
      );

    return h(
      "div",
      {
        class: `hw-message hw-message-left ml-9 ${this.notFirst ? '' : 'hw-message-tail'}`
      },
      content
    );
  },
};
</script>
