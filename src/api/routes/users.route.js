const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({message: 'hola mundo'}).status(200);
});

module.exports = router;