const sequelize = require('sequelize');
const {connection, Sequelize} = require('./db');

const Turn = (sequelize, type) => {
    return sequelize.define('turn',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        turnDate: {
            type: type.DATE
        },
        vaccine:{
            type: type.STRING,
            allowNull: false
        },
        turnDone:{
            type: type.BOOLEAN
        }
    })
}

const TurnDAO = Turn(connection, Sequelize);
module.exports = {TurnDAO}