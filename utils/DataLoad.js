/**
 * Incognito App Server Application 
 * Author: Cathode -Team Navigator- (HyunWoo Kim, npr05324@gmail.com)
 * Date: 2017-05-28
 * Description: Node.JS Web Application Server For Incognito App
 * 
 *
 */

var getDBConnection = require('./DataBaseConnection');
var Promise = require("bluebird");

exports.loadFromDB = function(id){
   
    var sql = 'SELECT * FROM `appdata` WHERE `data_key`= ?'
    
    return Promise.using(getDBConnection(), function(connection){
        return connection.query(sql ,[id]).
        then(function(rows){
            if(typeof rows[0] != 'undefined'){
                return {'code':1,'data':JSON.parse(rows[0]['data_res'])};
            }else{
                return {'code':0,'data':"NO_DATA"};
            }
            
        });
    });
}