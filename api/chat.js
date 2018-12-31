const axios = require("axios");

const token = process.env.API_TOKEN;
const url = "https://slack.com/api/chat.postMessage";

function channelPostMessage(channel) {
  return message => {
    axios({
      method: "post",
      url: url,
      headers: {
        "content-type": 'application/json;charset=utf-8"',
        Authorization: `Bearer ${token}`
      },
      data: {
        channel,
        text: message
      }
    }).then(response => {
      console.log(response.data);
    });
  };
}

module.exports = { channelPostMessage };
