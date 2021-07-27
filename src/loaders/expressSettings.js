const express = require('express')
const cors = require('cors')
const apiRouter = require('../api/api.router');

module.exports = function(app){
    
    app.get('/status', (req, res) => {res.status(200).end();});
    app.head('/status', (req, res) => {res.status(200).end();});
    app.enable('trust proxy');

    app.use(cors());
    app.options('*', cors());
    app.use(require('morgan')('dev'));
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.use('/api', apiRouter);
}