const express = require('express');

configMiddleware=function(authType){
    return function(req,res,next){
        req.authType = authType;
    };
}

module.exports = function(authType){
    const authorizeRoutes=express.Router();
    authorizeRoutes.post('/authorize',[configMiddleware(authType)], function (req, res, next) { res.send('test') });
    authorizeRoutes.get('/getUserInfo',[configMiddleware(authType)], function (req, res, next) { res.send('test') });
    return authorizeRoutes;
}
