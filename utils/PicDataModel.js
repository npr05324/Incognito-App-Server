/**
 * Incognito App Server Application 
 * Author: Cathode -Team Navigator- (HyunWoo Kim, npr05324@gmail.com)
 * Date: 2017-05-21
 * Description: Node.JS Web Application Server For Incognito App
 * 
 *
 */

var crypto = require(crypto);

var PicData = function(picFileName,picTitle,emotionData, currentDateTime){
    this.picFileName = picFileName;
    this.emotionData = emotionData;
    this.picTitle = picTitle;
}


PicData.prototype.picFileName = '';
PicData.prototype.picTitle = '';
PicData.prototype.emotionData = '';
PicData.prototype.picKEY = '';

PicData.prototype.getEmotioData = function(){
    return this.emotionData;
}

PicData.prototype.getPicFileName = function(){
    return this.picFileName;
}

PicData.prototype.getPicTitle = function(){
    return this.picTitle;
}

PicData.prototype.getPicKey = function(){
    var shasum = crypto.createHash('sha1');
    shasum.update(this.getPicTitle+this.getPicFileName+this.currentDateTime);

    return shasum.didest('hex');
}

module.exports = PicData;
