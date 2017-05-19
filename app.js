/**
 * Incognito App Server Application 
 * Author: Cathode -Team Navigator- (HyunWoo Kim, npr05324@gmail.com)
 * Date: 2017-05-17
 * Description: Node.JS Web Application Server For Incognito App
 * 
 *
 */

var express = require('express');
var app = express();
var routes = require('./routers/route');

app.use('/api',routes);




app.listen(3000,function(){
    console.log("Incognito Web Application Server is Listening on Port 3000");
});