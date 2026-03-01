const Facility = require('../entities/Facility');
const OpeningHours = require('../value-objects/OpeningHours');
const { City } = require('../value-objects/City');
const { FacilityType } = require('../value-objects/FacilityType');
const PhoneNumber = require('../value-objects/PhoneNumber');

class FacilityFactory {
    static fromRow(row) {
        return new Facility({
            id: row.id,
            name: row.name,
            type: new FacilityType(row.type),
            city: new City(row.city),
            district: row.district,
            address: row.address,
            phone: new PhoneNumber(row.phone),
            hours: new OpeningHours({
                weekdays: row.hours_weekdays,
                saturday: row.hours_saturday,
                sunday: row.hours_sunday,
                is_24h: row.is_24h,
                is_on_duty: row.is_on_duty,
            }),
            services: row.services ? row.services.filter(Boolean) : [],
            payment: {
                cash: row.payment_cash,
                mtn_momo: row.payment_mtn_momo,
                orange_money: row.payment_orange_money,
                insurance: row.payment_insurance,
            },
            coordinates: {
                lat: row.latitude,
                lng: row.longitude,
            },
        });
    }
}

module.exports = FacilityFactory;