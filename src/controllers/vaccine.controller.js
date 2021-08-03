const {VaccineDAO} = require('../models/vaccine.model')

const getAllVacinnes = (req, res, next) =>{
    let vaccines = VaccineDAO.findAll();
    res.send(vaccines)
}

module.exports = {
    getAllVacinnes
}