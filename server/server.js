"use strict";

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require( "body-parser" );
const bluebird = require( "bluebird" );
const path = require('path');
const config = require('./config/config');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/users', require('./routes/record'));
app.use('/', express.static(path.join(__dirname, '../dist')));


const startServer = () => {
    app.listen( config.server.PORT );
    console.log( 'START SERVER' );
};
const connectDB = () => {
    mongoose.Promise= bluebird.Promise;
    mongoose.connect( config.dbPath, config.dbOption );
    console.log( 'Database started' );

    return mongoose.connection;
};
connectDB()
    .on( 'error', console.log )
    .on( 'disconnected', connectDB )
    .on( 'open', startServer );


