const {connection, Sequelize} = require('./db');

const Vaccine = (sequelize, type) => {
    return sequelize.define('vaccines', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        band:{
            type: type.STRING,
            allowNull: false
        },
        amount:{
            type: type.INTEGER.UNSIGNED,
            allowNull: false
        },
        lotNumber:{
            type: type.INTEGER.UNSIGNED,
            allowNull: false
        }  
    })
}

const VaccineDAO = Vaccine(connection, Sequelize);
module.exports = {VaccineDAO}