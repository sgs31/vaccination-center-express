const router = require('express').Router();

const {getAllTurns} = require('../../controllers/turn.controller');

router.get('/', getAllTurns);

module.export = router