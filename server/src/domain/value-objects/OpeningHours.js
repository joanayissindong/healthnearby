class OpeningHours {
    constructor({ weekdays, saturday, sunday, is_24h, is_on_duty }) {
        this.weekdays = weekdays;
        this.saturday = saturday;
        this.sunday = sunday;
        this.is_24h = is_24h;
        this.is_on_duty = is_on_duty;
        Object.freeze(this);
    }

    isOpenNow() {
        if (this.is_24h || this.is_on_duty) return true;

        const now = new Date();
        const day = now.getDay();
        const time = now.getHours() * 60 + now.getMinutes();
        const range = day === 0 ? this.sunday : day === 6 ? this.saturday : this.weekdays;

        if (!range || range.toLowerCase().includes('emergency')) return false;

        const [open, close] = range.split('-').map(t => {
            const[h, m] = t.trim().split(':').map(Number);
            return h * 60 + m;
        });
        return time >= open && time < close;
    }
}

module.exports = OpeningHours;