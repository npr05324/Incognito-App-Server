/**
 * Incognito App Server Application 
 * Author: Cathode -Team Navigator- (HyunWoo Kim, npr05324@gmail.com)
 * Date: 2017-05-17
 * Description: Node.JS Web Application Server For Incognito App
 */

const fs = require('fs');
const request = require('request');
const PicDataModel = require('./PicDataModel');

const dateTime = require('node-datetime');
const dt = dateTime.create();

exports.getCognitive = (fileObj, picTitle, callback) => {
    console.log(fileObj);

    const fileName = `${ process.cwd() }/uploads/${ fileObj }`;

    const options = {
        method: 'POST',
        url: 'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize',
        headers: {
            'Content-Type': 'application/octet-stream',
            'Ocp-Apim-Subscription-Key': process.env.COGNITIVE_KEY
        },
        body: fs.readFileSync(fileName)
    };

    request(options, (error, response, body) => {
        const info = JSON.parse(body);
        const emotionData = new PicDataModel(fileObj, picTitle, info, dt.now());
        const result = (!error && response.statusCode === 200)
            ? { error: false, result: emotionData }
            : { error: true, result: info };

        return callback(result);
    });
};
