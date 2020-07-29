const express = require('express');
// in order to be able to use console.log in the browser
var util = require('util');
// import model object that's an instance that already has a connection with the DB
const empModel = require('../models/employee.model');
console.log("EmployeeModel", empModel);
var router = express.Router();
const mongoose = require('mongoose');
const employeeModel = require('../models/employee.model');
const Employee = mongoose.model('employee')

router.get('/', function(req, res) {
    // render addOrEdit.hbs
    res.render("employee/addOrEdit", {
        viewTitle: "Insert Employee"
    })
}); 

router.post('/', (req, res)=>{
    insertRecord(req, res);
});
// gets the db scema from employee.model and sets it to what's in the request body of the form 
function insertRecord(req, res){
    var emp = new Employee();
    emp.fullname = req.body.fullname;
    emp.email = req.body.email;
    emp.mobile = req.body.mobile;
    emp.city = req.body.city;
    emp.save((err, doc)=> {
        if(!err){
            res.redirect('employee/list');
        }else{ 
            if(err.name == ValidationError){
                handleValidationError(err, req.body);
            }else{
            console.log('Error during record insertion: ' + err)
            };
        }
    })
};

router.get('/list', (req, res) => {
    res.json('from list');
});

function handleValidationError(err){
    for(field in err.errors)
    {
        switch (err.errors[field].path){
            case 'FullName': 
                body['FullNameError'] = err.errors[field].message;
                break;
            case 'email':
                body['emailError']= err.errors[field].message;
                break;
            default:
                break;
        }
    }
}
module.exports = router; 