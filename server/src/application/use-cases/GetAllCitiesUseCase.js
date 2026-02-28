class GetAllCitiesUseCase {
    constructor(facilityRepository) {
        this.facilityRepository = facilityRepository;
    }

    async execute() {
        return this.facilityRepository.findAllCities();
    }
}

module.exports = GetAllCitiesUseCase;