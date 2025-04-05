import dotenv from 'dotenv';
dotenv.config();

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
// Secret header. Just put any string if you do not check it on your server.
// @see https://core.telegram.org/bots/api#setwebhook
const X_TELEGRAM_BOT_API_SECRET_TOKEN = process.env.X_TELEGRAM_BOT_API_SECRET_TOKEN;

const API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`;
const webhookEndpoint = `http://localhost:5173/my-webhook`;// your endpoint
const allowed_updates = ['message', 'poll_answer', 'callback_query'];
const timeout = 1000;// fetch messages once per second.
let offset = 0;

// @see https://core.telegram.org/bots/api#getupdates
async function getUpdates() {
    let updates = ''
    if (allowed_updates.length) {
        updates = `&allowed_updates=${allowed_updates.join(',')}`
    }
    const url = `${API_URL}/getUpdates?offset=${offset}${updates}`

    const response = await fetch(url);
    const data = await response.json();
    if (data.ok) {
        for (const update of data.result) {
            console.log("#Update ID", update.update_id);
            offset = update.update_id + 1;

            /**
             * In case of an unsuccessful request
             * (a request with response HTTP status code different from 2XY),
             * we will repeat the request and give up after a reasonable amount of attempts. 
             */
            let attempts = 5;
            while (attempts > 0) {
                const result = await fetch(webhookEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Telegram-Bot-Api-Secret-Token': X_TELEGRAM_BOT_API_SECRET_TOKEN
                    },
                    body: JSON.stringify(update)
                })

                if (result.status >= 200 && result.status < 300) {
                    break;
                }
                --attempts;
            }
        }
    } else {
        console.error('Error', data);
        //IGNORE: 'Conflict: terminated by other getUpdates request; make sure that only one bot instance is running'
    }
}

fetch(`${API_URL}/deleteWebhook`).then(() => {
    setInterval(getUpdates, timeout);
});
