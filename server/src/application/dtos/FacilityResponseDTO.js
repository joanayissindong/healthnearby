class FacilityResponseDTO {
    constructor(facility) {
        this.id = facility.id;
        this.name = facility.name;
        this.type = facility.type.toString();
        this.city = facility.city.toString();
        this.district = facility.district;
        this.address = facility.address;
        this.phone = facility.phone.toString();
        this.hours = {
            weekdays: facility.hours.weekdays,
            saturday: facility.hours.saturday,
            sunday: facility.hours.sunday,
            is_24h: facility.hours.is_24h,
            is_on_duty: facility.hours.is_on_duty,
            is_open_now: facility.isOpenNow(),
        };
        this.services = facility.services;
        this.payment = facility.payment;
        this.coordinates = facility.coordinates;
    }
}

module.exports = FacilityResponseDTO;