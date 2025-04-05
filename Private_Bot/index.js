/**
 * Eliminate access for unauthorized users in the development environment.
 * NOTE If webhookWall return false, consider responding with a status of 200,
 * as we want to limit access and not trigger webhook resubmission.
 * @returns true if the wall passed.
 */
export function webhookWall(token, update) {
    const allowedIds = env.ALLOWED_TELEGRAM_IDS?.split(',') || [];

    if (dev) {
        if (update?.message?.chat) {
            const id = String(update.message.chat.id);
            if (allowedIds.findIndex(x => x === id) === -1) {
                sendMessage(token, id, "⛔️ Access forbidden ⛔️")              
                return false;
            }
        } else {          
            return false;
        }
    }

    return true;
}