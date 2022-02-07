<script>
import HwUserMessage from "../components/hw-user-message.vue";
import HwBotMessage from "../components/hw-bot-message.vue";

export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  components: {
    HwUserMessage,
    HwBotMessage
  },
  computed: {
    dateNow() {
      return new Date().toLocaleDateString("en-US");
    }
  },
  watch: {
    list() {
      this.scrollToLastMessage();
    }
  },
  methods: {
    scrollToLastMessage() {
      this.$nextTick(() => {
        const { lastElementChild } = this.$refs.messageList;
        if (lastElementChild) {
          lastElementChild.scrollIntoView();
        }
      });
    }
  },
  render(h) {
    return h(
      "main",
      {
        class:
          "flex flex-col items-center py-4 px-6 flex-grow space-y-2 overflow-y-auto",
        ref: "messageList"
      },
      [
        h("p", { class: "text-secondary mb-6" }, this.dateNow),
        this.list.map(
          ({ name, avatar, position, text, date, notFirst }, index) => {
            return h(`hw-${name !== null ? "bot" : "user"}-message`, {
              props: {
                name,
                avatar,
                position,
                text,
                date,
                "not-first": notFirst
              },
              key: index
            });
          }
        )
      ]
    );
  }
};
</script>
