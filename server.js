require('./models/db');

const express = require('express');

const employeeController = require('./controllers/employeeController');

var app = express();
// application server(gate keeper) listening on an open port 3000
app.listen(3000, () => {
    console.log('Express server started at port : 3000')
});
// http://localhost:3000/employee
app.use('/employee', employeeController);

