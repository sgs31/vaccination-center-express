const {body} = require('express-validator');

exports.createVaccineSchema = [
    body('band')
    .exists().bail()
    .notEmpty().bail(),
    body('amount')
    .exists().bail()
    .notEmpty().bail(),
    body('lotnumber')
    .exists().bail()
    .notEmpty().bail()
]