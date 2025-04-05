async function sendRequest(url, data) {
    const request = await fetch(url, {
        headers: {
            Authorization: `tma ${window.Telegram.WebApp.initData}`
        },
        method: "POST",// or GET or ....
        body: JSON.stringify(data)
    });
}
// The "tma " is here so you can quickly check that the header is of a valid type.
// Remember to remove it on the server before validating the data:
/** 
    const header = request.headers.get('authorization');
    if (!header || !header.startsWith('tma ')) {
        //respond error
    }

    const data = auth.substring(4);
    verifyMiniapp(token, data, ttl);
*/