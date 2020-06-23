const mongoose = require('mongoose');
// connect to local database in MsSql workbench using mongoose
//mongoose is noSQL client library for MongoDB which has it's own protocols
// connects to noSql client- Robo 3T
mongoose.connect('mongodb://localhost:27017/EmployeeDB',
    { useNewUrlParser: true },
    // when an error object is returned, desplay error
    (err) => 
    { 
        if (!err) { console.log('MongoDB connection succeeded.')}
        //... desplay error
        else { console.log('Error in DB connection : '+ err )}
    }
);




