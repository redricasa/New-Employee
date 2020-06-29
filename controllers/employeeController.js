const express = require('express');
// in order to be able to use console.log in the browser
var util = require('util');
// import model object that's an instance that already has a connection with the DB
const empModel = require('../models/employee.model');
console.log("EmployeeModel", empModel);
var router = express.Router();
router.post('/', (req, res)=>{
    // var newEmpl= empModel(
    //     {"fullname": "name",
    //     "email": "emailfkajsdlkfj",
    //     "mobile": 349850293845, 
    //     "city": "alksdjflak"
    // });
    // newEmpl.save();
    res.send();
});
// fetch employees from database
// router.get( '/', (req, res) => {
    // get all documents
    // var cursor= empModel.find({});
    // traversed through cursor object to get the schema
    // console.log("_____", cursor.schema.obj);
    // TODO: get the res to send documents from EmployeeDB collection to localhost:3000/employee
    // res.send(cursor);
    // asynchronous function
    // cursor.then (function(documents){
    //     console.log("DOCUMENTS", documents);
    //     res.send(documents);
    //     console.log("DOCUMENTS", documents);
    // });   
// });
router.get('/', function(req, res) {
    // render addOrEdit.hbs
    res.render("employee/addOrEdit", {
        viewTitle: "Insert Employee"
    })
});  
module.exports = router; 