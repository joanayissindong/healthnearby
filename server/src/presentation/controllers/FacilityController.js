const SearchQueryDTO = require('../../application/dtos/SearchQueryDTO');

class FacilityController {
    constructor({ searchFacilityUseCase , getFacilityByIdUseCase , getAllCitiesUseCase , getAllTypesUseCase }) {
        this.searchFacilityUseCase = searchFacilityUseCase;
        this.getFacilityByIdUseCase = getFacilityByIdUseCase;
        this.getAllCitiesUseCase = getAllCitiesUseCase;
        this.getAllTypesUseCase = getAllTypesUseCase;
    }

    async search(req, res, next){
        try {
            const dto = SearchQueryDTO.fromRequest(req.query);
            const result = await this.searchFacilityUseCase.execute(dto);
            res.json({ success: true, count: result.length, data: result });
        } catch (error) { next(error); }
    }

    async getAll(req, res, next){
        try {
            const dto = SearchQueryDTO.fromRequest({});
            const result = await this.searchFacilityUseCase.execute(dto);
            res.json({ success: true, count:result.length, data: result });
        } catch (error) { next(error); }
    }

    async getById(req, res, next){
        try {
            const facility = await this.getFacilityByIdUseCase.execute(req.params.id);
            if (!facility) return res.status(404).json({ success: false, message: 'No facility found with this ID.' });
            res.json({ success: true, data: facility });
        } catch (error) { next(error); }
    }

    async getCities(req, res, next){
        try {
            const cities = await this.getAllCitiesUseCase.execute();
            res.json({ success: true, data: cities });
        } catch (error) { next(error); }
    }

    async getTypes(req, res, next){
        try {
            const types = await this.getAllTypesUseCase.execute();
            res.json({ success: true, data: types });
        } catch (error) { next(error); }
    }
}

module.exports = FacilityController;