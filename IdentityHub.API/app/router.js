const express = require('express');
const authRoutes = require('./auth/router'),
    manageRoutes = require('./manage/router');

module.exports = function (app) {
    // Initializing route groups
    const apiRoutes = express.Router()

    //set up sub routing
    apiRoutes.use('/auth', authRoutes);
    apiRoutes.use('/manage',manageRoutes);

    app.use('/api', apiRoutes);
};
