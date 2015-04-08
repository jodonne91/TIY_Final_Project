var express = require('express');
var path = require('path');

var app = express();

var bodyParser = require('body-parser');
var multer = require('multer'); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());

app.use(express.static(path.join(__dirname, 'public')));
app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

var users = []
app.get('/users', function(req, res){
	res.json(users)
})

app.post('/users', function(req, res){
	var data = req.body
	users.push(data)
	res.sendStatus(200)
})

module.exports = app;