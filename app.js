var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var psList = require('ps-list');
var app = express();

app.use(express.static("js"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/view/index.html");
});

app.post("/on", (req, res) => {
  psList().then(data => {
    //console.log(data);
    //=> [{pid: 3213, name: 'node', cmd: 'node test.js', cpu: '0.1'}, ...]
    res.send(data)
  });

});

var server = app.listen(4200, function() {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})