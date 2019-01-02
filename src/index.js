const {
  channelPostMessage,
  channelGetPermalink,
  channelDeleteMessage,
} = require("./api/chat")

const message = process.argv[2]
if (message) {
  const postGeneralMessage = channelPostMessage("#general")
  postGeneralMessage(message)
    .then(({ok, ts, channel}) => {
      if (ok === true) {
        console.log(`Message sent ✔️ : ts:${ts}`)
        return {channel, ts}
      }
    })
    .then(({channel, ts}) => {
      const getPermalink = channelGetPermalink(channel)
      return Promise.all([getPermalink(ts), ts])
    })
    .then(([{ok, permalink, channel}, ts]) => {
      if (ok === true) {
        console.log(`Permalink received ✔️ : ${permalink}`)
        return {ts, channel}
      }
    })
    .then(({ts, channel}) => {
      const deleteMessage = channelDeleteMessage(channel)
      return deleteMessage(ts)
    })
    .then(({ok, ts}) => {
      if (ok === true) {
        console.log(`Message deleted ✔️ : ts:${ts}`)
      }
    })
} else {
  const getGeneralPermalink = channelGetPermalink("C046VFDSD")
  getGeneralPermalink("1546351814.000100").then(({ok, permalink}) => {
    if (ok === true) {
      console.log(`Permalink received ✔️ :${permalink}`)
    }
  })
}
