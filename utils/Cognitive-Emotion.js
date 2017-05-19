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

exports.getCognitive = async function(fileObj,callback){
    var fileName = process.cwd() + '/' + fileObj.destination + fileObj.filename;
    var result;
    console.log(fileName);

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
            result = {'error':false, 'result': info};
            callback(result);
        }else{
            var info = JSON.parse(body);
            result = {'error':true, 'result': info};
            callback(result);
        }
    }
    console.log('Req Start!');
    request(options,sendReq);
    
    
};