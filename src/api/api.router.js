const router = require('express').Router();
const users = require('./routes/user.route');
const turns = require('./routes/turn.route');
const vaccines = require('./routes/vaccine.route');

router.use('/users', users);
router.use('./turns', turns);
router.use('/vaccines', vaccines);

module.exports = router