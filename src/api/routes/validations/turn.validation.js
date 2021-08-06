const { body } = require('express-validator');

exports.createTurnSchema = [
    body('turndate')
    .exists().bail()
    .notEmpty().bail(),
    body('vaccine')
    .exists().bail()
    .notEmpty().bail()
]