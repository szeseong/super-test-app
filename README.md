# super-test-app

A node js program that send message to Slack API

# Where to store API token

Create a file in the root of your project (same directory as package.json) that
is called .env.

Put this in there:

```sh
API_TOKEN = <Your API Token>
```

# How do send message

```sh
$ npm run send 'Happy New Year ✔️ '
```

# TODO

| Method                                                                 |                      Descripttion                      | Done |
| ---------------------------------------------------------------------- | :----------------------------------------------------: | ---: |
| [chat.delete](https://api.slack.com/methods/chat.delete)               |                   Deletes a message.                   |✔️    |
| [chat.getPermalink](https://api.slack.com/methods/chat.getPermalink)   | Retrieve a permalink URL for a specific extant message |✔️    |
| [chat.postEphemeral](https://api.slack.com/methods/chat.postEphemeral) |   Sends an ephemeral message to a user in a channel.   |      |
| [chat.postMessage](https://api.slack.com/methods/chat.postMessage)     |             Sends a message to a channel.              |✔️    |
| [chat.unfurl](https://api.slack.com/methods/chat.unfurl)               |  Provide custom unfurl behavior for user-posted URLs   |      |
| [chat.update](https://api.slack.com/methods/chat.update)               |                   Updates a message.                   |      |
