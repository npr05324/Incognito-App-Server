/**
 * Incognito App Server Application 
 * Author: Cathode -Team Navigator- (HyunWoo Kim, npr05324@gmail.com)
 * Date: 2017-05-26
 * Description: Node.JS Web Application Server For Incognito App
 * 
 *
 */
var mysql = require('promise-mysql');

var pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME
});

function getDBConnection(){
    return pool.getConnection().disposer(function(connection){
        return pool.releaseConnection(connection);
    });
}

module.exports = getDBConnection;
