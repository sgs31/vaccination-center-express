const {UserDAO} = require('../models/user.model')

const getAllUsers = async (req, res, next) => {
    let userList = await UserDAO.findAll()
    res.send(userList)
}

module.exports = {
    getAllUsers
}