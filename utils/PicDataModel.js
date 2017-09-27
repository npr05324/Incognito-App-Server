/**
 * Incognito App Server Application 
 * Author: Cathode -Team Navigator- (HyunWoo Kim, npr05324@gmail.com)
 * Date: 2017-05-21
 * Description: Node.JS Web Application Server For Incognito App
 */

const sizeOf = require('image-size');
const crypto = require('crypto');
const shasum = crypto.createHash('sha1');

module.exports = class PicData {
    constructor (picFileName, picTitle, emotionData, currentDateTime) {
        const { width, height } = sizeOf(`${ process.cwd() }/uploads/${ picFileName }`);

        this.imageSize = { width, height };
        this.picFileName = picFileName;
        this.picTitle = picTitle;
        this.emotionData = emotionData;
        this.currentDateTime = currentDateTime;

        const key = picTitle + picFileName + currentDateTime;
        shasum.update(key);

        this.picKEY = shasum.digest('hex');
    }

    getEmotionData () {
        return this.emotionData;
    }

    getPicFileName () {
        return this.picFileName;
    }

    getPicTitle () {
        return this.picTitle;
    }

    getPicKey () {
        return this.picKEY;
    }

    getPicTime () {
        return this.currentDateTime;
    }

    getImageWidth () {
        return this.imageSize.width;
    }

    getImageHeight () {
        return this.imageSize.height;
    }
}
