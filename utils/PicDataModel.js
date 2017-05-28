/**
 * Incognito App Server Application 
 * Author: Cathode -Team Navigator- (HyunWoo Kim, npr05324@gmail.com)
 * Date: 2017-05-21
 * Description: Node.JS Web Application Server For Incognito App
 * 
 *
 */

var crypto = require('crypto');

var PicData = function(picFileName,picTitle,emotionData, currentDateTime){

    var shasum = crypto.createHash('sha1');
    

    this.picFileName = picFileName;
    this.emotionData = emotionData;
    this.picTitle = picTitle;
    this.currentDateTime = currentDateTime;
    shasum.update(this.picTitle+this.picFileName+this.currentDateTime);
    this.picKEY = shasum.digest('hex');
}

PicData.prototype.currentDateTime = '';
PicData.prototype.picFileName = '';
PicData.prototype.picTitle = '';
PicData.prototype.emotionData = '';
PicData.prototype.picKEY = '';

PicData.prototype.getEmotionData = function(){
    return this.emotionData;
}

PicData.prototype.getPicFileName = function(){
    return this.picFileName;
}

PicData.prototype.getPicTitle = function(){
    return this.picTitle;
}

PicData.prototype.getPicKey = function(){
    return this.picKEY;
}

PicData.prototype.getPicTime = function(){
    return this.currentDateTime;
}

module.exports = PicData;
