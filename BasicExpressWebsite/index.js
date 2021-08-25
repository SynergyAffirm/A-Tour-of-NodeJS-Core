
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const server = express();

server.set(
    "views",
    path.join(__dirname, "views")
  );

server.set('view engine', 'ejs');

server.get('/about', function(req, res) {  res.render('about');});
server.get('/', function(req, res) {  res.render('Home');});

server.listen(PORT, () => console.log(`Server Started On ${PORT}`));
