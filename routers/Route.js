/**
 * Incognito App Server Application 
 * Author: Cathode -Team Navigator- (HyunWoo Kim, npr05324@gmail.com)
 * Date: 2017-05-17
 * Description: Node.JS Web Application Server For Incognito App
 * 
 *
 */

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var multer  = require('multer')
//var upload = multer({ dest: 'uploads/' })
var fs = require('fs');
var crypto = require('crypto');
var dateTime = require('node-datetime');
var dt = dateTime.create();
var CognitoAPI = require('../utils/CognitiveEmotion'); 
var uploadDB = require('../utils/DataInsert');
var loadDB = require('../utils/DataLoad');
router.use(bodyParser.raw({limit: '50mb',type: 'application/*'}));
router.use(bodyParser.json());




router.post('/',function(req, res){
    function sendRes(result){
        if(!result['error']){
            //console.log(result['result']);
            //console.log();

            uploadDB.uploadToDB(result['result'])
            .then(function(result){
                res.json(result);
            }).catch(function(error){
                res.json({'code':0,'data':error});
            });


        }else{
            res.json({'code' : 2, 'data' : 'ERROR'});
        }
        
        
    }
    var shasum = crypto.createHash('sha1');
    shasum.update(req.body+dt.now());

    var filename = shasum.digest('hex');
    
    console.log(filename);
    fs.writeFileSync('./uploads/'+filename, req.body);

    var fileObj = filename;
    CognitoAPI.getCognitive(fileObj, req.query.title, sendRes);
});

router.get('/:id',function(req, res){
    var data_id = req.params.id;

    loadDB.loadFromDB(data_id)
            .then(function(result){
                res.json(result);
            }).catch(function(error){
                res.json({'code':0,'data':error});
            });


});

router.use('/image',express.static('uploads'));



module.exports = router;
