var express = require('express');
var timesyncServer = require('timesync/server');

var port = 8081;
var app = express();
app.listen(port);
console.log('Server listening at http://localhost:' + port);

app.get('/', express.static(__dirname));

app.use('/timesync', timesyncServer.requestHandler);