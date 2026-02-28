class GetAllTypesUseCase {
    constructor(facilityRepository) {
        this.facilityRepository = facilityRepository;
    }

    async execute() {
        return this.facilityRepository.findAllTypes();
    }
}

module.exports = GetAllTypesUseCase;