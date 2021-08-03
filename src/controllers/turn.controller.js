const {TurnDAO} = require('../models/turn.model');

const getAllTurns = async (req, res, next) => {
    let turnList = await TurnDAO.findAll();
    res.send(turnList)
}

module.exports = {
    getAllTurns
}
