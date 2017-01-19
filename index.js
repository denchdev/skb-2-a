var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

function sum(a=0, b=0) {
  return (+a)+(+b);
}

app.get('/', function (req, res) {  
  res.send(''+sum(req.query.a, req.query.b)); 
});

app.listen(3002, function () {
  console.log('Example app listening on port 3002!');
});
