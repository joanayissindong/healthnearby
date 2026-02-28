const FilterChain = require('../filters/FilterChain');
const FacilityMapper = require('../mappers/FacilityMapper');

class SearchFacilitiesUseCase {
    constructor(facilityRepository) {
        this.facilityRepository = facilityRepository;
    }

    async execute (searchQueryDTO) {
        const facilities = await this.facilityRepository.search(searchQueryDTO);
        return facilities.map(FacilityMapper.toResponseDTO);
    }
}

module.exports = SearchFacilitiesUseCase;