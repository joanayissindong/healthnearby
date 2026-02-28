class SearchQueryDTO {
    constructor({ city, type, mtn_momo, orange_money, on_duty }) {
        this.city = city || null;
        this.type = type || null;
        this.mtn_momo = mtn_momo === 'true' || mtn_momo === true;
        this.orange_money = orange_money === 'true' || orange_money === true;
        this.on_duty = on_duty === 'true' || on_duty === true;
    }

    static fromRequest(query) {
        return new SearchQueryDTO(query);
    }
}

module.exports = SearchQueryDTO;