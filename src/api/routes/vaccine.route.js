const router = require('express').Router();

const {getAllVaccines} = require('../../controllers/vaccine.controller');

router.get('/', getAllVaccines);

module.export = router