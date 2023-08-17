
//importing required modules
const express = require('express');
const fs = require('fs');
const path = require('path');

//creating the Express App 
const app = express();
const PORT = process.env.PORT || 3000;   // set to the value of environment 

//Middleware to handle JSON 
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Serve static files (HTML, CSS, JS) 
app.use(express.static('public')); 

require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

app.listen(PORT, () => {
    console.log('Server is running on por ${PORT}');
});