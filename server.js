var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/src', {index: 'index.html'}));
app.use('/assets', express.static(__dirname + '/assets'));


app.listen(3000, function () {
    console.log('Listening on port 3000');
});
