const mongoose = require('mongoose');
// create employee schema
var empSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: 'This field is required.'
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
});
// custom regex to validate email
empSchema.path('email').validate((val)=> {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid email. Please enter an email.')
 
module.exports = mongoose.model('employee', empSchema);