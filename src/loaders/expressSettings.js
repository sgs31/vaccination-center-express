const express = require('express')
const cors = require('cors')
const apiRouter = require('../api/api.router');

module.exports = function(app){
    app.use(cors());
    app.options('*', cors());
    app.use(require('morgan')('dev'));
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.use('/api', apiRouter);
}