class PaymentFilter {
    constructor({ mtn_momo, orange_money }) {
        this.mtn_momo = mtn_momo;
        this.orange_money = orange_money;
    }

    apply(facilities) {
        return facilities.filter( f => {
            if (this.mtn_momo && !f.mtn_momo) return false;
            if (this.orange_money && !f.orange_money) return false;
            return true;
        });
    }
}

module.exports = PaymentFilter;