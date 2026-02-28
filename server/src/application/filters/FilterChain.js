const CityFilter = require('./CityFilter');
const TypeFilter = require('./TypeFilter');
const PaymentFilter = require('./PaymentFilter');
const OnDutyFilter = require('./OnDutyFilter');

class FilterChain {
    constructor(filters) {
        this.filters = filters;
    }

    apply(facilities) {
        return this.filters.reduce(
            (result, filter) => filter.apply(result),
            facilities
        );
    }

    static buildFrom({ city, type, mtn_momo, orange_money, on_duty }) {
        return new FilterChain([
            new CityFilter(city),
            new TypeFilter(type),
            new PaymentFilter({ mtn_momo, orange_money}),
            new OnDutyFilter(on_duty),
        ]);
    }
}

module.exports = FilterChain;