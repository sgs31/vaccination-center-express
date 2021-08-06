const {body} = require('express-validator');

exports.createUserSchema = [
    body('dni')
    .exists().bail()
    .notEmpty().bail(),
    body('procedureNumber')
    .exists().bail()
    .notEmpty().bail(),
    body('role')
    .exists().bail()
    .notEmpty().bail()
]