const express = require('express');
const authorizeRoutes = require('./authorize.router');

const authRoutes = express.Router();


//public auth routes to retrieve a jwt
authRoutes.post('/token', function (req, res, next) { res.send('test') });
authRoutes.post('/register', function (req, res, next) { res.send('test') });
authRoutes.use('/client', authorizeRoutes('client'));
authRoutes.use('/api', authorizeRoutes('api'));

module.exports = authRoutes;
