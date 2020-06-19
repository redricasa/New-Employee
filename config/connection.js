//connect to mysql with root password in keys.js
require("dotenv").config();
var dbpass = process.env.MYSQL;
var mysql = require('mysql');

var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: dbpass,
        database: "EmployeeDB"
});
console.log("connected to local mysql workbench!")

module.exports = connection;