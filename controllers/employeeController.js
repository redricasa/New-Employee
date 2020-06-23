const express = require('express');
// import model object that's an instance that already has a connection with the DB
const empModel = require('../models/employee.model');
console.log("EmployeeModel", empModel);
var router = express.Router();
// fetch employees from database
router.get( '/', (req, res) => {
    // get all documents
    var cursor= empModel.find({});
    // asynchronous function
    cursor.then (function(documents){
        console.log("DOCUMENTS", documents);
        res.send(documents)
    });   
});
router.post('/', (req, res)=>{
    var newEmpl= empModel({"fullname": "name",
    "email": "emailfkajsdlkfj",
    "mobile": 349850293845, 
    "city": "alksdjflak"
    });
    newEmpl.save();
    res.send();
});

module.exports = router; 