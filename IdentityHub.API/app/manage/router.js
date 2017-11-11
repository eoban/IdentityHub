const express = require('express');

const manageRoutes = express.Router();


//public auth routes to retrieve a jwt
manageRoutes.get('/test', function (req, res, next) { res.send('test') });

module.exports = manageRoutes;
