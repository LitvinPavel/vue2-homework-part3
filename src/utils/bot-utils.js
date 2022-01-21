export const bots = [
  { id: 0, name: "Jav", position: "Engineering", avatar: "ava-jav-0" },
  { id: 1, name: "Aubrey", position: "Product", avatar: "ava-aubrey-1" },
  { id: 2, name: "Janet", position: "Engineering", avatar: "ava-janet-2" },
  { id: 3, name: "Odette", position: "Product", avatar: "ava-odette-3" }
];

export const messages = [
  //botId = 0 
  ["Hello!", "Fine... how are you?", "Nothing much", "Glad to hear it", "Why?", "What about?", "You're welcome", "Goodbye"],
  //botId = 1
  ["Hi!", "Pretty well, how are you?", "Exciting things!", "Glad to hear it", "Cheer up buddy", "Once upon a time...", "No problem", "See you later"],
  //botId = 2
  ["Hey!", "Fantastic, how are you?", "Nothing much", "Glad to hear it", "Why?", "What about?", "You're welcome", "Goodbye"],
  //botId = 3
  ["Hi there!", "Fantastic, how are you?", "Exciting things!", "Glad to hear it", "Cheer up buddy", "Once upon a time...", "No problem", "See you later"]
];

const addMessage = (bot) => {
  return {
    ...bot,
    date: new Date(),
    text: "what?"
  }
}

export const commands = Object.freeze({
  jav() {
    setTimeout((() => this.messageList.push(addMessage(bots[0]))), 500);
  },
  aubrey() {
    setTimeout((() => this.messageList.push(addMessage(bots[1]))), 500);
  },
  janet() {
    setTimeout((() => this.messageList.push(addMessage(bots[2]))), 500);
  },
  odette() {
    setTimeout((() => this.messageList.push(addMessage(bots[3]))), 500);
  },
  stop() {
    this.stopBots();
  },
  default() {
    setTimeout((() => this.messageList.push({ text: "I can't run this command", notFirst: true })), 500);
  }
})