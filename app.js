/**
 * Incognito App Server Application 
 * Author: Cathode -Team Navigator- (HyunWoo Kim, npr05324@gmail.com)
 * Date: 2017-05-17
 * Description: Node.JS Web Application Server For Incognito App
 */

const app = require('express')();
const routes = require('./routers/Route');

app.use('/api', routes);

const port = 3000;
const message = `Incognito Web Application Server is Listening on Port ${ port }`;

app.listen(port, () => console.log(message));
