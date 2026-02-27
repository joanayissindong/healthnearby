const ALLOWED_CITIES = ['Douala', 'Yaoundé'];

class City {
    constructor(value) {
        if (!ALLOWED_CITIES.includes(value)) {
            throw new Error(`Invalid city ${value}`);
        }
        this.value = value;
        Object.freeze(this);
    }

    toString() {
        return this.value;
    }
}

module.exports = { City, ALLOWED_CITIES };