
//importing required modules
const express = require('express');
const fs = require('fs');
const path = require('path')

//creating the Express App 
const app = express();
const PORT = process.env.PORT || 3000;   // set to the value of environment 

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public')); 