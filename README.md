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

#TODO

Mocking http request for testing.
