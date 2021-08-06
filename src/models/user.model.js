const {connection, Sequelize} = require('./db');

const User = (sequelize, type) =>{
    return sequelize.define('user', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dni:{
            type: type.INTEGER,
            unique:true,
            allowNull:false
        },
        procedureNumber: {
            type: type.STRING,
            unique: true,
            allowNull:false
        },
        gender: {
            type: type.STRING,
            allowNull: false
        },
        firstDose:{
            type: type.BOOLEAN,
        },
        secondDose:{
            type: type.BOOLEAN
        },
        role: {
            type: type.STRING,
            allowNull: false
        }
    })
}

const UserDAO = User(connection, Sequelize);
module.exports = {UserDAO}