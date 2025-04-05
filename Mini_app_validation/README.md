## Problem
You have to validate the data from the mini app to ensure it is from the user and not from a hacker.<br>
Read more:<br>
https://core.telegram.org/bots/webapps#validating-data-received-via-the-mini-app

## solution
On each request from our mini app (webpage), we add a header with [initData](https://core.telegram.org/bots/webapps#initializing-mini-apps) and then validate it on the server, similar to how we validate a JWT token

## Files 
`index.js` - contains an example.
`client.js` - contains an example with request.