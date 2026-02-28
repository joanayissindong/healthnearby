class CityFilter {
    constructor(city) {
        this.city = city;
    }

    apply(facilities) {
        if (!this.city) return facilities;
        return facilities.filter(
            f => f.city.toString().toLowerCase() === this.city.toLowerCase()
        );
    }
}

module.exports = CityFilter;