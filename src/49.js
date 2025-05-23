// This is an example of how to create a simple Node.js application.
// You can replace this with your own logic and data.

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(3000);
