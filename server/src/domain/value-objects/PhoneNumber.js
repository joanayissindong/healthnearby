class PhoneNumber {
    constructor(value) {
        if (!value) {
            this.value = null;
            return;
        }

        const cleaned = value.replace(/\s+/g, '');
        if (!/^\+?[0-9]{8,15}$/.test(cleaned)) {
            throw new Error(`Invalid phone number: ${value}`);
        }
        this.value = cleaned;
        Object.freeze(this);
    }

    toString() {
        return this.value;
    }
}

module.exports = PhoneNumber;