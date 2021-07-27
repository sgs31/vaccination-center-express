const router = require('express').Router();
const users = require('./routes/users.route')

router.use('/user', users);

module.exports = router;