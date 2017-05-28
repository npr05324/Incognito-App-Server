/**
 * Incognito App Server Application 
 * Author: Cathode -Team Navigator- (HyunWoo Kim, npr05324@gmail.com)
 * Date: 2017-05-26
 * Description: Node.JS Web Application Server For Incognito App
 * 
 *
 */

var getDBConnection = require('./DataBaseConnection');
var Promise = require("bluebird");

exports.uploadToDB = function(data){
   
    var sql = 'INSERT INTO `appdata` (data_key, data_res, timestamp) VALUES(?,?,?)'
    
    return Promise.using(getDBConnection(), function(connection){
        return connection.query(sql ,[data.getPicKey(), JSON.stringify(data) ,data.getPicTime()]).
        then(function(rows){
            return {'code':1,'data':data};
        });
    });
}