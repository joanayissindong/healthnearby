const FacilityResponseDTO = require('../dtos/FacilityResponseDTO');

class FacilityMapper {
    static toResponseDTO(facility) {
        return new FacilityResponseDTO(facility)
    }
}

module.exports = FacilityMapper;