const FilterChain = require('../filters/FilterChain');
const FacilityMapper = require('../mappers/FacilityMapper');

class SearchFacilitiesUseCase {
    constructor(facilityRepository) {
        this.facilityRepository = facilityRepository;
    }

    async execute (searchQueryDTO) {
        const facilities = await this.facilityRepository.search(searchQueryDTO);
        const chain = FilterChain.buildFrom(searchQueryDTO);
        const filtered = chain.apply(facilities);
        return filtered.map(FacilityMapper.toResponseDTO);
    }
}

module.exports = SearchFacilitiesUseCase;