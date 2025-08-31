
const express = require('express');

const app = express();

//route handlers
app.get('/', function (req, res){
  res.send("<p>Hello World from port 3002!</p>");
});
app.post('/', function (req, res){
  res.send('Hello World from the post endpoint!');
});
app.get('/asd', function (req, res) {
  res.send('Hello from the ASD endpoint!');
});

app.listen(3002) //whiich port do you want to listen on
