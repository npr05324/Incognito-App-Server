/**
 * Incognito App Server Application 
 * Author: Cathode -Team Navigator- (HyunWoo Kim, npr05324@gmail.com)
 * Date: 2017-05-17
 * Description: Node.JS Web Application Server For Incognito App
 */

const router = require('express').Router();

const bodyParser = require('body-parser');
const fs = require('fs');
const dt = require('node-datetime').create();
const shasum = require('crypto').createHash('sha1');

const CognitoAPI = require('../utils/CognitiveEmotion'); 
const uploadDB = require('../utils/DataInsert');
const loadDB = require('../utils/DataLoad');

router.use(bodyParser.raw({ limit: '50mb', type: 'application/*' }));
router.use(bodyParser.json());

router.post('/', (req, res) => {
    shasum.update(req.body + dt.now());

    const filename = shasum.digest('hex');
    console.log(filename);
    fs.writeFileSync(`./uploads/${ filename }`, req.body);

    const fileObj = filename;
    CognitoAPI.getCognitive(fileObj, req.query.title, (result) => {
        res.setHeader('charset', 'utf-8');

        if (result.error) {
            return res.json({ code: 2, data: 'ERROR' })
        }

        //console.log(result.result);
        //console.log();

        uploadDB
            .uploadToDB(result.result)
            .then((result) => res.json(result))
            .catch((error) => res.json({ code: 0, data: error }));
    });
});

router.get('/:id', (req, res) =>{
    const data_id = req.params.id;

    res.setHeader('charset', 'utf-8');

    loadDB
        .loadFromDB(data_id)
        .then((result) => res.json(result))
        .catch((error) => res.json({ code: 0, data: error }));
});

router.use('/image', express.static('uploads'));

module.exports = router;
