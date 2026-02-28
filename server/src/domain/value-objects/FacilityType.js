const ALLOWED_TYPES = ['hospital', 'clinic', 'pharmacy', 'laboratory', 'health_center'];

class FacilityType {
    constructor(value) {
        if (!ALLOWED_TYPES.includes(value)) {
            throw new Error(`Invalid facility type: ${value}`);
        }

        this.value = value;
        Object.freeze(this);
    }

    toString() {
        return this.value;
    }
}

module.exports = { FacilityType, ALLOWED_TYPES };