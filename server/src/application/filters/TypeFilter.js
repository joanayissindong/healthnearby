class TypeFilter {
    constructor(type) {
        this.type = type;
    }

    apply(facilities) {
        if (!this.type) return facilities;
        return facilities.filter(
            f => f.type.toString() === this.type
        );
    }
}

module.exports = TypeFilter;