/**
 * Incognito App Server Application 
 * Author: Cathode -Team Navigator- (HyunWoo Kim, npr05324@gmail.com)
 * Date: 2017-05-26
 * Description: Node.JS Web Application Server For Incognito App
 */

const getDBConnection = require('./DataBaseConnection');
const Promise = require('bluebird');

const sql = 'INSERT INTO `appdata` (data_key, data_res, timestamp) VALUES(?,?,?)';

exports.uploadToDB = (data) => Promise.using(getDBConnection(), (connection) => {
    const picKey = data.getPicKey();
    const picData = JSON.stringify(data);
    const picTime = data.getPicTime();

    return connection
        .query(sql, [picKey, picData, picTime])
        .then((rows) => { code: 1, data });
});
