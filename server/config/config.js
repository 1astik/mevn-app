"use strict";

module.exports = {
    dbPath: 'mongodb://localhost:27017/test',
    dbOption: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    },
    server: {
        PORT: process.env.PORT || 3001
    }
};