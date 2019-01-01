const {channelPostMessage, channelGetPermalink} = require("./api/chat")

const message = process.argv[2]
if (message) {
  const postGeneralMessage = channelPostMessage("#general")
  postGeneralMessage(message).then(responseOk => {
    if (responseOk === true) {
      console.log("Message sent ✔️ ")
    }
  })
}

const getGeneralPermalink = channelGetPermalink("C046VFDSD")
getGeneralPermalink("1546351814.000100").then(responseOk => {
  if (responseOk === true) {
    console.log("Permalink received ✔️ ")
  }
})
