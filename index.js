const { channel, channelPostMessage } = require("./api/chat");

//
const message = process.argv[2];
if (message) {
  // channel("#general").postMessage(message);
  // channelPostMessage("#general")(message);
  const postGeneralMessage = channelPostMessage("#general");
  postGeneralMessage(message);
}