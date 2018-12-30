console.log("hello");
// require('dotenv').config()

const axios = require("axios");

const url = "https://slack.com/api/chat.postMessage";
const token = process.env.API_TOKEN;

function sendMessage(message) {
  axios({
    method: "post",
    url: url,
    headers: {
      "content-type": 'application/json;charset=utf-8"',
      Authorization: `Bearer ${token}`
    },
    data: {
      channel: "#general",
      text: message
    }
  }).then(response => {
    console.log(response.data);
  });
}

sendMessage("Hello from Malaysia");
