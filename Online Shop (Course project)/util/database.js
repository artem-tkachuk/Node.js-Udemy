const Sequelize = require('sequelize');

const config = {
    dialect: 'mysql',
    host: 'localhost'
};

const sequelize = new Sequelize('node-complete', 'artem', '12345678', config);

module.exports = sequelize;

/*
const mysql = require('mysql2');


const config = {
    host: 'localhost',
    user: 'artem',
    database: 'node-complete',
    password: '12345678'
};

const pool = mysql.createPool(config);

module.exports = pool.promise();*/
