const Sequelize = require('sequelize');

const db = new Sequelize('product_schema', 'root', 'abc@123', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = db;
