const {channelPostMessage, channelGetPermalink} = require("./api/chat")

const message = process.argv[2]
if (message) {
  const postGeneralMessage = channelPostMessage("#general")
  postGeneralMessage(message).then(({ok, ts}) => {
    if (ok === true) {
      console.log(`Message sent ✔️ : ts:${ts}`)
    }
  })
}

const getGeneralPermalink = channelGetPermalink("C046VFDSD")
getGeneralPermalink("1546351814.000100").then(({ok, permalink}) => {
  if (ok === true) {
    console.log(`Permalink received ✔️ :${permalink}`)
  }
})
