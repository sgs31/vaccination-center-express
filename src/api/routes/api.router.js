const router = require('express').Router();
const users = require('./users.route')

router.use('/user', users)

module.exports = router;