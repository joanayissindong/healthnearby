const FacilityMapper = require('../mappers/FacilityMapper');

class GetFacilityByIdUseCase {
    constructor(facilityRepository) {
        this.facilityRepository = facilityRepository;
    }

    async execute(id) {
        const facility = await this.facilityRepository.findById(id);
        if (!facility) return null;
        return FacilityMapper.toResponseDTO(facility);
    }
}

module.exports = GetFacilityByIdUseCase;