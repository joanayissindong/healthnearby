class IFacilityRepository {
    async findAll()       { throw new Error('Not implemented'); }
    async findById(id)    { throw new Error('Not implemented'); }
    async search(filters) { throw new Error('Not implemented'); }
    async findAllCities() { throw new Error('Not implemented'); }
    async findAllTypes()  { throw new Error('Not implemented'); }
}

module.exports = IFacilityRepository;