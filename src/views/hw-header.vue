

<script>
import HwAvatar from "../components/hw-avatar.vue";
import HwDotsVerticalIcon from "../components/icons/hw-dots-vertical-icon.vue"
export default {
  components: {
    HwAvatar,
    HwDotsVerticalIcon
  },
  render(h) {
    return h("header", { class: "flex justify-between p-4 border-b items-center" }, [
      h(
        "div",
        { class: "flex flex-shrink-0" },
        [1, 2, 3, 4].map((n, index) => {
          return h(
            "hw-avatar",
            { class: "border border-white", style: `transform: translateX(-${0.25 * index}rem);`, key: n },
            [h("img", { attrs: { src: `/img/ava${n}.svg` } })]
          );
        })
      ),
      h("div", { class: "flex-grow text-center" }, [
        h("h1", { class: "mx-auto font-semibold" }, "🦄 Team Unicorns"),
        h("span", { class: "font-thin text-secondary" }, "last seen 45 minutes ago")
      ]),
      h("div", { class: "flex-shrink-0" }, [
        h("HwDotsVerticalIcon", { class: "w-4 h-4 text-secondary" })
      ]),
    ]);
  },
};
</script>
