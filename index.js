var timesyncServer = require('timesync/server');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var PORT = 8081;

var app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/timesync', function(req, res) {
    res.json(Date.now());
});

const server = app.listen(process.env.PORT || PORT);