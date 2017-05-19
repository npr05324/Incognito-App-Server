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
var upload = multer({ dest: 'uploads/' })
 
var CognitoAPI = require('../utils/Cognitive-Emotion'); 

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());






router.post('/',upload.single('image'),function(req, res){
    function sendRes(result){
        res.json(result);
    }
    CognitoAPI.getCognitive(req.file,sendRes);
});

router.get('/:id',function(req, res){
    var data_id = req.params.id;
});



module.exports = router;