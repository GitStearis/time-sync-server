var timesyncServer = require('timesync/server');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var PORT = 8081;

var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use('/timesync', timesyncServer.requestHandler);

app.post('/timesync', function(req, res) {
    var data = {
        id: (req.body && 'id' in req.body) ? req.body.id : null,
        result: Date.now()
    };
    res.json(data);
});

app.get('/timesync', function(req, res) {
    res.json(Date.now());
});

app.listen(PORT);
console.log('Server listening at http://localhost:' + PORT);