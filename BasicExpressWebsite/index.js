const express = require('express');
const sendMail = require('./Nodemailer/nodemailer');
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

    
server.get('/email', function(req, res) {
      console.log('Data:', req.body);
      sendMail(name, email, subject, text, function(err, data) {
        if (err) {
            res.status(500).json({ message: 'Internal Error' });
        } else {
            res.status({ message: 'Email sent!!!' });
        }
    });
    //   res.json({message: 'Message received!'})
});


server.listen(PORT, () => 
   console.log(`Server Started On ${PORT}`));
