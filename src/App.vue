<script>
import HwHeader from "./views/hw-header.vue";
import HwMain from "./views/hw-main.vue";

export default {
  components: {
    HwHeader,
    HwMain
  },
  render(h) {
    return h("div", { class: "hw-container" }, [
      h("hw-header"),
      h("hw-main")
    ])
  }
  // render(h) {
  //   return h("h1", { class: "p-5 w-[32rem] text-sky-400" }, "App")
  // }
};
</script>

<style>
@import "./assets/css/style";
</style>
