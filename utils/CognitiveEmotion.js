/**
 * Incognito App Server Application 
 * Author: Cathode -Team Navigator- (HyunWoo Kim, npr05324@gmail.com)
 * Date: 2017-05-17
 * Description: Node.JS Web Application Server For Incognito App
 * 
 *
 */

var fs = require('fs');
var request = require('request');
var PicDataModel = require('./PicDataModel');

var dateTime = require('node-datetime');
var dt = dateTime.create();

exports.getCognitive = function(fileObj, picTitle, callback){
    var fileName = process.cwd() + '/' + 'uploads/' + fileObj;
    var result;
    console.log(fileObj);

    var options = {
        method: 'POST',
        url: 'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize',
        headers: {
            'Content-Type' : 'application/octet-stream',
            'Ocp-Apim-Subscription-Key' : process.env.COGNITIVE_KEY
        },
        body: fs.readFileSync(fileName)
    };
    
    function sendReq(error, response, body) {
        if (!error && response.statusCode == 200) {

            var info = JSON.parse(body);
            var emotionData = new PicDataModel(fileObj, picTitle, info, dt.now());

            result = {error:false, result: emotionData};
            callback(result);
        }else{
            var info = JSON.parse(body);
            result = {error:true, result: info};
            callback(result);
        }
    }
    request(options,sendReq);
    
    
};