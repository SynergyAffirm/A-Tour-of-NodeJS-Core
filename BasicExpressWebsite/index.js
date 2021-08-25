const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const server = express();

server.set(
    "views",
    path.join(__dirname, "views")
);

server.set('view engine', 'ejs');

server.get('/about', function(req, res) {  
    res.render('About');});

server.get('/', function(req, res) {  
    res.render('Home');});

server.get('/about', function(req, res) {  
    res.render('Theme');});

server.get('/', function(req, res) {  
    res.render('Section');});

server.get('/about', function(req, res) {  
    res.render('Products');});

server.get('/', function(req, res) {  
    res.render('Market');});
    
server.get('*', function(req, res) {
    res.render('Error')
});

server.listen(PORT, () => 
   console.log(`Server Started On ${PORT}`));
