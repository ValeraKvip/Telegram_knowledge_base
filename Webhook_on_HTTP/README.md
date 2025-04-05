## Telegram webhook running on HTTP - localhost
The Telegram Bot API webhook requires an HTTPS (TLS) connection, which poses a problem for development in a local environment.


## Bad solution
You can use tunneling apps like ngrok for this purpose. However, it’s inconvenient, they can actually read your messages and require you to download their app on the host machine.
Additionally, they might slow down the network. Last but not least, it requires payment if you choose one of the paid plans.


## Good solution
We will use long polling and the [getUpdates](https://core.telegram.org/bots/api#getupdates) method to fetch new messages,
and then simulate a webhook by sending a POST request to our webhook endpoint.
*With zero third-party dependencies or suspicious apps on your machine.*👍


### Files
`.env.example` Contains an example of environment variables. Copy and paste it into your `.env` file.

`index.js` contains a Node.js server that will do the trick.<br>
You can copy and paste it into the root of your project, fill in the app variables (preferably from a `.env` file), and run it during development.


Run:
```
node index.js
```
