var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var body;

var querystring = require('querystring');


var PORT = process.env.PORT || 8000;


app.use(express.static(__dirname + '/public'));


io.on('connection', function(socket) {
  console.log('Alguien se ha conectado con Sockets');
});

app.post('/', function (req, res) {
  console.log("POST VEN A MI!")
  req.on('data', function (data) {
     body = querystring.parse(data);
     console.log("Enviando SOCKET con body:");
     console.log(body);
     io.sockets.emit('messages', body);
  });

  req.on('end', function () {
    console.log("Enviando SOCKET");
    io.sockets.emit('messages', body);
  });

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});

server.listen(PORT, function() {
  console.log("Servidor corriendo en https://saker.herokuapp.com/");
});
