const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();
const NODE_ENV = process.env.NODE_ENV;

const switcherDb = () => {
    if(!NODE_ENV){
        throw new Error('unspecified work enviroment')
    }
    else if(NODE_ENV == 'development'){
            connection = new Sequelize(
            process.env.DB_DATABASE,
            process.env.DB_USER,
            process.env.DB_PASS, {
                host: process.env.HOST,
                dialect: process.env.DB_DIALECT
            })
            console.log('INITILIAZE DEVELOPMENT DB')
            return connection;
    }
    else{
        throw new Error('Work enviroment not found!')
    }
}


var connection = switcherDb();
console.log(`INIT PERSISTENCE ON NODE_ENV: ${NODE_ENV}`);

connection.sync({force:false}).then(() =>{
    console.log('synchronized tables')
})

module.exports = {
    connection, Sequelize
}