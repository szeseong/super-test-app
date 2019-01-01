const {channelPostMessage} = require("../chat")

jest.mock("../chat", () => {
  return {
    channelPostMessage: jest.fn(() => {
      return () => Promise.resolve(true)
    }),
  }
})
const assert = require("assert")

test("Channel Post Message", async () => {
  const postGeneralMessage = channelPostMessage("#general")
  const responseOk = await postGeneralMessage("message")
  assert.equal(responseOk, true)
})
