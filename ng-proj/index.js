var express = require('express');
const axios = require('axios')
var path = require('path'); 
const fs = require('fs');
var app = require('express')();
var http = require('http').Server(app);
var port = process.env.PORT || 3002;

app.use(express.static(path.join(__dirname, './public/')));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
}); 
  

http.listen(port, function () {
    console.log('listening on *:' + port);
}); 


