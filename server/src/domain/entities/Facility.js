class Facility {
    constructor({ id, name, type, city, district, address, phone, hours, services, payment, coordinates }) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.city = city;
        this.district = district;
        this.address = address;
        this.phone = phone;
        this.hours = hours;
        this.services = services;
        this.payment = payment;
        this.coordinates = coordinates;
    }

    isOpenNow() {
        return this.hours.isOpenNow();
    }

    acceptsMobileMoney() {
        return this.payment.mtn_momo || this.payment.orange_money;
    }
}

module.exports = Facility;