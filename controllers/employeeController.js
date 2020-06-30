const express = require('express');
// in order to be able to use console.log in the browser
var util = require('util');
// import model object that's an instance that already has a connection with the DB
const empModel = require('../models/employee.model');
console.log("EmployeeModel", empModel);
var router = express.Router();


router.get('/', function(req, res) {
    // render addOrEdit.hbs
    res.render("employee/addOrEdit", {
        viewTitle: "Insert Employee"
    })
}); 

router.post('/', (req, res)=>{
    console.log(req.body);
});

module.exports = router; 