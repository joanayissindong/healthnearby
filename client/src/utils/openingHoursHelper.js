export function isOpenNow(hours) {
    if (!hours) return false;
    if (hours.is_24h || hours.is_on_duty) return true;
    return hours.is_open_now;
}

export function getStatusLabel(hours) {
    return isOpenNow(hours) ? 'Open now' : 'Close';
}