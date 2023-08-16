const express = require('express');
const path = require('path');

//HTML routes
//defines a route for handling GET requests to the /notes URL
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/notes.html'));
});

//defines a catch-all route for handling any GET request
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/index.html'));
});