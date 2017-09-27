/**
 * Incognito App Server Application 
 * Author: Cathode -Team Navigator- (HyunWoo Kim, npr05324@gmail.com)
 * Date: 2017-05-26
 * Description: Node.JS Web Application Server For Incognito App
 */

const mysql = require('promise-mysql');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME
});

module.exports = function getDBConnection () {
    return pool
        .getConnection()
        .disposer((connection) => pool.releaseConnection(connection));
};
