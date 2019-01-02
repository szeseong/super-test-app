const API_TOKEN = "test-token"
process.env = {
  API_TOKEN,
}

const {
  channelPostMessage,
  channelGetPermalink,
  channelDeleteMessage,
} = require("../chat")
const axios = require("axios")

jest.mock("axios")

afterEach(() => {
  axios.mockReset()
})

test("Channel Post Message", async () => {
  const mockResponse = {
    data: {
      ok: true,
      channel: "C1H9RESGL",
      ts: "1503435956.000247",
      message: {
        text: "Here's a message for you",
        username: "ecto1",
        bot_id: "B19LU7CSY",
        attachments: [
          {
            text: "This is an attachment",
            id: 1,
            fallback: "This is an attachment's fallback",
          },
        ],
        type: "message",
        subtype: "bot_message",
        ts: "1503435956.000247",
      },
    },
  }
  axios.mockResolvedValue(mockResponse)

  const postGeneralMessage = channelPostMessage("C1H9RESGL")
  const {
    ok,
    ts,
    message: {text},
  } = await postGeneralMessage("Here's a message for you")
  expect(ok).toBe(true)
  expect(ts).toBe("1503435956.000247")
  expect(text).toBe("Here's a message for you")

  expect(axios).toHaveBeenCalledWith({
    url: "https://slack.com/api/chat.postMessage",
    method: "post",
    data: {
      channel: "C1H9RESGL",
      text: "Here's a message for you",
    },
    headers: {
      "content-type": "application/json;charset=utf-8",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  })
})

test("Get Permalink", async () => {
  const mockResponse = {
    data: {
      ok: true,
      channel: "C1H9RESGA",
      permalink:
        "https://ghostbusters.slack.com/archives/C1H9RESGA/p135854651500008",
    },
  }
  axios.mockResolvedValue(mockResponse)

  const getGeneralPermalink = channelGetPermalink("C1234567890")
  const {permalink, ok, channel} = await getGeneralPermalink(
    "1234567890.123456",
  )
  expect(axios).toHaveBeenCalledWith({
    url:
      "https://slack.com/api/chat.getPermalink?channel=C1234567890&message_ts=1234567890.123456",
    method: "get",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  })
  expect(permalink).toBe(
    "https://ghostbusters.slack.com/archives/C1H9RESGA/p135854651500008",
  )
  expect(ok).toBe(true)
  expect(channel).toBe("C1H9RESGA")
})

test("Delete Message", async () => {
  const mockResponse = {
    data: {
      ok: true,
      channel: "C024BE91L",
      ts: "1401383885.000061",
    },
  }
  axios.mockResolvedValue(mockResponse)

  const deleteMessage = channelDeleteMessage("C1234567890")
  const {ts, ok, channel} = await deleteMessage("1234567890.123456")
  expect(axios).toHaveBeenCalledWith({
    url: "https://slack.com/api/chat.delete",
    method: "post",
    headers: {
      "content-type": "application/json;charset=utf-8",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    data: {
      channel: "C1234567890",
      ts: "1234567890.123456",
    },
  })
  expect(ts).toBe("1401383885.000061")
  expect(ok).toBe(true)
  expect(channel).toBe("C024BE91L")
})
