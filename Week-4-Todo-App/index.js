
const express = require('express');

const app = express();

//route handlers
app.get('/', function (req, res){
  res.send("<b>Hello World!</b>");
});
app.post('/', function (req, res){
  res.send('Hello World from the post endpoint!');
});
app.get('/asd', function (req, res) {
  res.send('Hello from the ASD endpoint!');
});

app.listen(3000) //whiich port do you want to listen on
