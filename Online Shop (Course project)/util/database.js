const mysql = require('mysql2');


const config = {
    host: 'localhost',
    user: 'artem',
    database: 'node-complete',
    password: '12345678'
};

const pool = mysql.createPool(config);

module.exports = pool.promise();