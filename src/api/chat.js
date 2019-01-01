const axios = require("axios")

const token = process.env.API_TOKEN
const url = "https://slack.com/api/chat.postMessage"

function channelPostMessage(channel) {
	return async message => {
		const response = await axios({
			method: "post",
			url: url,
			headers: {
				"content-type": "application/json;charset=utf-8",
				Authorization: `Bearer ${token}`,
			},
			data: {
				channel,
				text: message,
			},
		})

		return response.ok
	}
}

module.exports = {channelPostMessage}
