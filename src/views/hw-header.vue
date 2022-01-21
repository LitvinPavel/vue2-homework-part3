

<script>
import HwDotsVerticalIcon from "../components/icons/hw-dots-vertical-icon.vue";

import { bots } from "../utils/bot-utils";

export default {
  components: {
    HwDotsVerticalIcon
  },
  methods: {
    stopBots() {
      this.$emit("stop");
    }
  },
  render(h) {
    return h(
      "header",
      { class: "flex justify-between p-4 border-b items-center" },
      [
        h(
          "div",
          { class: "flex flex-shrink-0" },
          bots.map(({ id }, index) => {
            return h(
              "figure",
              {
                class: "rounded-full bg-main-bg border border-white",
                style: `transform: translateX(-${0.25 * index}rem);`,
                key: id
              },
              [
                h("img", {
                  attrs: {
                    src: `/img/${bots[id].avatar}.svg`,
                    alt: bots[id].name,
                    title: bots[id].name
                  }
                })
              ]
            );
          })
        ),
        h("div", { class: "flex-grow text-center" }, [
          h("h1", { class: "mx-auto font-semibold" }, "🦄 Team Unicorns"),
          h(
            "span",
            { class: "font-thin text-secondary" },
            "last seen 45 minutes ago"
          )
        ]),
        h(
          "button",
          {
            class: "flex-shrink-0",
            attrs: { title: "stop all bots" },
            on: { click: this.stopBots }
          },
          [h("HwDotsVerticalIcon", { class: "w-4 h-4 text-secondary" })]
        )
      ]
    );
  }
};
</script>
