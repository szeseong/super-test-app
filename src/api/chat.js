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
    return response.data
  }
}

function channelGetPermalink(channel) {
  return async message_ts => {
    const response = await axios({
      method: "get",
      url: `${getPermalinkMethod}?channel=${channel}&message_ts=${message_ts}`,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  }
}

module.exports = {channelPostMessage, channelGetPermalink}
