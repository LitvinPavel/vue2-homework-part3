<script>
import HwHeader from "./views/hw-header.vue";
import HwMain from "./views/hw-main.vue";
import HwFooter from "./views/hw-footer.vue";

export default {
  components: {
    HwHeader,
    HwMain,
    HwFooter
  },
  data() {
    return {
      messageList: []
    }
  },
  render(h) {
    return h("div", { class: "hw-container" }, [
      h("hw-header"),
      h("hw-main", { props: { list: this.messageList } }),
      h("hw-footer", { on: { send: this.sendMessage } })
    ])
  },
  methods: {
    sendMessage(mess) {
      let notFirst = false;
      if (this.messageList.length) {
        notFirst = (this.messageList[this.messageList.length - 1] || {}).isUser === (mess || {}).isUser
      }
      this.messageList.push({
        ...mess,
        notFirst
      });
    }
  }
  // render(h) {
  //   return h("h1", { class: "p-5 w-[32rem] text-sky-400" }, "App")
  // }
};
</script>

<style>
@import "./assets/css/style";
</style>
