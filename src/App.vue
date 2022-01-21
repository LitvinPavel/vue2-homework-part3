<script>
import HwHeader from "./views/hw-header.vue";
import HwMain from "./views/hw-main.vue";
import HwFooter from "./views/hw-footer.vue";

import { bots, messages, commands } from "./utils/bot-utils";

const randomIndex = (arr => Math.floor(Math.random() * arr.length))

const pushBotMessage = function (id) {
  const defaultMessage = "Bro...";
  const messId = randomIndex(messages[id]);
  return messages[id][messId] || defaultMessage;
  
}

export default {
  components: {
    HwHeader,
    HwMain,
    HwFooter
  },
  data() {
    return {
      pushMessageTimer: null,
      messageList: []
    };
  },
  mounted() {
    this.pushMessageTimer = window.setInterval(this.startPushedMessage, 5000);
  },
  beforeDestroy() {
    this.stopBots();
  },
  methods: {
    stopBots() {
      window.clearInterval(this.pushMessageTimer);
    },
    sendMessage(mess) {
      if (mess.text && /@/.test(mess.text)) {
        this.doCommand(mess);
      }
      let notFirst = false;
      if (this.messageList.length) {
        notFirst =
          (this.messageList[this.messageList.length - 1] || {}).name ===
          (mess || {}).name;
      }
      this.messageList.push({
        ...mess,
        notFirst,
      });
    },
    startPushedMessage() {
      const { id, name, position, avatar } = bots[randomIndex(bots) || 0];
      const text = pushBotMessage(id);
      this.messageList.push({
        name,
        position,
        avatar,
        text,
        date: new Date()
      });
    },
    doCommand({ text }) {
      const command = text.split("@")[1].toLowerCase();
      if (commands[command]) {
        commands[command].bind(this)();
      } else commands.default.bind(this)();
    }
  },
  render(h) {
    return h("div", { class: "hw-container" }, [
      h("hw-header", { on: { stop: this.stopBots } }),
      h("hw-main", { props: { list: this.messageList } }),
      h("hw-footer", { on: { send: this.sendMessage } })
    ]);
  }
};
</script>

<style>
@import "./assets/css/style";
</style>
