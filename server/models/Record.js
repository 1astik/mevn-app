"use strict";

const mongoose = require('mongoose');
const {Schema} = mongoose;

const User = new Schema({
   name:{
       type: String,
       required: true
   },
    email:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
});

module.exports = mongoose.model('User', User);