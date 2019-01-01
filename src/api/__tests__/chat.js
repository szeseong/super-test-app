const API_TOKEN = "test-token"
process.env = {
  API_TOKEN,
}

const {channelPostMessage} = require("../chat")
const axios = require("axios")

jest.mock("axios")

test("Channel Post Message", async () => {
  const mockResponse = {
    data: {
      ok: true,
    },
  }
  axios.mockResolvedValue(mockResponse)

  const postGeneralMessage = channelPostMessage("#general")
  const responseOk = await postGeneralMessage("message")
  expect(responseOk).toBe(true)

  expect(axios).toHaveBeenCalledWith({
    url: "https://slack.com/api/chat.postMessage",
    method: "post",
    data: {
      channel: "#general",
      text: "message",
    },
    headers: {
      "content-type": "application/json;charset=utf-8",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  })
})
