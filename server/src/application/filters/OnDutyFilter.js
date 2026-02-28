class OnDutyFilter {
    constructor(on_duty) {
        this.on_duty = on_duty;
    }

    apply(facilities) {
        if (!this.on_duty) return facilities;
        return facilities.filter(
            f => f.hours.is_on_duty || f.hours.is_24h        );
    }
}

module.exports = OnDutyFilter;