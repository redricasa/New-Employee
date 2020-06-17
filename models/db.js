const mongoose = require('mongoose');
// connect to local database in MsSql workbench using mongoose
mongoose.connect('mongodb://localhost:3306/EmployeeDB',
    { useNewUrlParser: true },
    // when an error object is returned, desplay error
    (err) => 
    { 
        if (!err) { console.log('MongoDB connection succeeded.')}
        //... desplay error
        else { console.log('Error in DB connection : '+ err )}
    });



