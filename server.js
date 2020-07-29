require('./models/db');

const express = require('express');
const path = require('path');
const exphbs= require('express-handlebars');
const employeeController = require('./controllers/employeeController');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
// convert to JSON
app.use(bodyParser.json());
app.set('Views', path.join(__dirname, '/Views/'));
app.engine('hbs', exphbs({ 
    extname: 'hbs', 
    defaultLayout: 'mainLayout', 
    layoutsDir: __dirname + '/Views/Layouts/' }));
app.set('view engine', 'hbs');
// application server(gate keeper) listening on an open port 3000
app.listen(3000, () => {
    console.log('Express server started at port : 3000') 
});
// http://localhost:3000/employee 
app.use('/employee', employeeController);

