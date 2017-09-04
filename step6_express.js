//npm install express --save
const express = require('express')
const app = express()
var path = require('path');

// viewed at http://localhost:8080
app.get('/entry', function(req, res) {
    res.sendFile(path.join(__dirname + '/sample.html'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/home.html'));
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

/*
var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);*/
