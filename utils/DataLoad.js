/**
 * Incognito App Server Application 
 * Author: Cathode -Team Navigator- (HyunWoo Kim, npr05324@gmail.com)
 * Date: 2017-05-28
 * Description: Node.JS Web Application Server For Incognito App
 */

const getDBConnection = require('./DataBaseConnection');
const Promise = require('bluebird');

const sql = 'SELECT * FROM `appdata` WHERE `data_key`= ?'

exports.loadFromDB = (id) => Promise.using(getDBConnection(), (connection) => {
    return connection
        .query(sql, [id])
        .then(boxing)
});

function boxing (rows) {
    return (typeof rows[0] === 'undefined')
        ? { code: 0, data: 'NO_DATA' }
        : { code: 1, data: JSON.parse(rows[0].data_res) };
}
