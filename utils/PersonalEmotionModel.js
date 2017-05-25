/**
 * Incognito App Server Application 
 * Author: Cathode -Team Navigator- (HyunWoo Kim, npr05324@gmail.com)
 * Date: 2017-05-21
 * Description: Node.JS Web Application Server For Incognito App
 * 
 *
 */

var PersonalEmotionModel = function(singleEmotionData){
    this.singleEmotionData = singleEmotionData;
    this.jsonData = JSON.parse(singleEmotionData);

}

PersonalEmotionModel.prototype.singleEmotionData = '';
PersonalEmotionModel.prototype.jsonData;

PersonalEmotionModel.prototype.getJSONObj = function(){
    return this.jsonData;
}





module.exports = PersonalEmotionModel;