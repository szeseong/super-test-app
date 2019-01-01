const axios = require("axios")

const token = process.env.API_TOKEN
const slackUrl = "https://slack.com/api/"
const postMessageMethod = `${slackUrl}chat.postMessage`
const getPermalinkMethod = `${slackUrl}chat.getPermalink`

function channelPostMessage(channel) {
  return async message => {
    const response = await axios({
      method: "post",
      url: postMessageMethod,
      headers: {
        "content-type": "application/json;charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
      data: {
        channel,
        text: message,
      },
    })
    console.log(response.data)
    return response.data.ok
  }
}

function channelGetPermalink(channel) {
  return async message_ts => {
    const response = await axios({
      method: "get",
      url: `${getPermalinkMethod}?channel=${channel}&message_ts=${message_ts}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    console.log(response.data)
    return response.data.ok
  }
}

module.exports = {channelPostMessage, channelGetPermalink}
