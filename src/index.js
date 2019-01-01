const { channelPostMessage } = require("./api/chat");

const message = process.argv[2];
if (message) {
  const postGeneralMessage = channelPostMessage("#general");
  postGeneralMessage(message).then(responseOk => {
    if (responseOk === true) {
      console.log("Message sent ✔️ ");
    }
  });
}
