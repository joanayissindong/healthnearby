const express = require('express');
const router = express.Router();

const PostgresFacilityRepository = require('../../infrastructure/repositories/PostgresFacilityRepository');
const SearchFacilitiesUseCase = require('../../application/use-cases/SearchFacilitiesUseCase');
const GetFacilityByIdUseCase = require('../../application/use-cases/GetFacilityByIdUseCase');
const GetAllCitiesUseCase = require('../../application/use-cases/GetAllCitiesUseCase');
const GetAllTypesUseCase = require('../../application/use-cases/GetAllTypesUseCase');
const FacilityController = require('../controllers/FacilityController');

// Injection des dépendances
const repository = new PostgresFacilityRepository();
const controller = new FacilityController({
    searchFacilityUseCase: new SearchFacilitiesUseCase(repository),
    getFacilityByIdUseCase: new GetFacilityByIdUseCase(repository),
    getAllCitiesUseCase: new GetAllCitiesUseCase(repository),
    getAllTypesUseCase: new GetAllTypesUseCase(repository),
});

router.get('/', (req,res,next) => controller.getAll(req, res, next));
router.get('/search', (req,res,next) => controller.search(req, res, next));
router.get('/meta/cities', (req, res, next) => controller.getCities(req, res, next));
router.get('/meta/types', (req, res, next) => controller.getTypes(req, res, next));
router.get('/:id', (req, res, next) => controller.getById(req, res, next));

module.exports = router;