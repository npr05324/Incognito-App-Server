/**
 * Incognito App Server Application 
 * Author: Cathode -Team Navigator- (HyunWoo Kim, npr05324@gmail.com)
 * Date: 2017-05-21
 * Description: Node.JS Web Application Server For Incognito App
 */

module.exports = class PersonalEmotionModel {
    constructor (singleEmotionData) {
        this.__singleEmotionData = singleEmotionData;
        this.__jsonData = JSON.parse(singleEmotionData);
    }

    get singleEmotionData () {
        return this.__singleEmotionData || '';
    }

    set singleEmotionData (singleEmotionData) {
        this.__singleEmotionData = singleEmotionData;
    }

    getJSONObj () {
        return this.__jsonData;
    }
}
