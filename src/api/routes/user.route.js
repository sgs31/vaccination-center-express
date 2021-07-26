const router = require('express').Router();
module.exports = (app) => {
    app.use('/user', router);
    router.get('/', (req, res) => {
        res.json({message: 'Entro con exito hasta aca'})
    })
}