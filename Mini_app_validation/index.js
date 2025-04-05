import crypto from 'crypto';

/**
 * @param {string} botToken telegram bot token.
 * @param {string} initData - user data injected by telegram to the window.Telegram.WebApp
 * @param {number} ttl - The time in seconds after the data becomes invalid.
 * @returns {boolean} Whether data is valid.
 */
export function verifyMiniapp(token, initData, ttl = 24 * 60 * 60) {
    const urlParams = new URLSearchParams(initData);
    const date = urlParams.get('auth_date');
    if (!date || (Date.now() / 1000 - Number(date) > ttl)) {
        return false;
    }

    const hash = urlParams.get('hash');
    urlParams.delete('hash');
    urlParams.sort();

    let dataCheckString = '';
    for (const [key, value] of urlParams.entries()) {
        dataCheckString += `${key}=${value}\n`;
    }

    dataCheckString = dataCheckString.slice(0, -1);

    const secretKey = crypto.createHmac('sha256', "WebAppData")
        .update(token).digest();

    const checkHash = crypto.createHmac('sha256', secretKey)
        .update(decodeURI(dataCheckString)).digest('hex');

    return hash == checkHash;
}
