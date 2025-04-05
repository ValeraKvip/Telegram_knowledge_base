## Problem
During development, you test your app on localhost, but the Telegram mini app requires HTTPS.
If you provide HTTP, it will respond with: `Please send me a valid url. https is required.`


## Bad solution
You can use tunneling apps like ngrok for this purpose. However, it’s inconvenient, they can actually read your messages and require you to download their app on the host machine.
Additionally, they might slow down the network. Last but not least, it requires payment if you choose one of the paid plans.


## Good solution
We will use a free "short url" service. For example:<br>
https://www.shorturl.at/<br>

Put your localhost URL there, and then send the shortened URL to BotFather.<br>
Done! You have a perfectly working mini app on localhost.