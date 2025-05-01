See: [https://core.telegram.org/api/links](https://core.telegram.org/api/links)

## Mini app
### To open a channel and navigate to a specific post from the mini app
```js
const channel_id = '-100123456789'.replace('-100', '')
const post_id = '1'//to first post
const post_id = '9999999'//to last post

const url = `https://t.me/c/${channel_id}/${post_id}`;
window.Telegram.WebApp.openTelegramLink(url);		
```
NOTE:
1. Make sure that the post with the specified id really exists.
2. The first message (id == 1) may be removed. Double-check the ID of the first post if you want to navigate to it.
3. To open the last post, set the ID to `9999999`.



### To open a bot
```js
const bot_username = '@BotFather'.replace('@','');			
const url = `https://t.me/${bot_username}`;
window.Telegram.WebApp.openTelegramLink(url);	
```

You can use
```js
const url = `https://t.me/${bot_username}?start`;
```
To open a bot and auto-send `/start`


### To open a group
For Private:
```js
const inviteLink = 'https://t.me/+UaaXXaaaXXXaX';				
window.Telegram.WebApp.openTelegramLink(inviteLink);	
```

For Public:
```js
// Use an invite link
const inviteLink = 'https://t.me/+UaaXXaaaXXXaX';				
window.Telegram.WebApp.openTelegramLink(inviteLink);
```

```js
// OR id
const group_id = '-100123456789'.replace('-100', '')	
const post_id = '9999999'//to last post

const url = `https://t.me/c/${group_id}/${post_id}`;
window.Telegram.WebApp.openTelegramLink(url);		
```

### To open a private chat
By the username:
```js
const username = '@username'.replace('@','');			
const url = `https://t.me/${username}`;
window.Telegram.WebApp.openTelegramLink(url);	
```

By the phone number:
```js
const phone_number = '+123456789'
const url = `https://t.me/${phone_number}`;
window.Telegram.WebApp.openTelegramLink(url);	
```


### To open a share link(Forward dialog)
```js
const text = 'Text'
const startapp = 'start'
const url = `https://google.com?startapp=${startapp}`
window.Telegram.WebApp.openTelegramLink(`https://t.me/share/url?url=${url}text=${text}`);	
```
