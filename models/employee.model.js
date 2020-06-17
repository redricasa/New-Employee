const mongoose = require('mongoose');
// create employee schema
var empSchema = new mongoose.Schema({
    fullname: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: Number
    }, 
    city: {
        type: String
    }
})