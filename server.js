var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var PORT = process.env.PORT || 8000;


app.use(express.static(__dirname + '/public'));


io.on('connection', function(socket) {
  console.log('Alguien se ha conectado con Sockets');
});

app.post('/', function (req, res) {
  req.on('data', function (data) {
     var body = data;
  });

  req.on('end', function () {
    io.sockets.emit('messages', body);
  });

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});

server.listen(PORT, function() {
  console.log("Servidor corriendo en https://saker.herokuapp.com/");
});
