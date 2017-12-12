var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);
var body;

var querystring = require('querystring');


var PORT = process.env.PORT || 8000;

app.use(bodyParser.xml());

app.use(express.static(__dirname + '/public'));


var message_1 = { module_1:  { radon: [ '00.00' ],   co2: [ '00.00' ], methane: [ '00.00' ] } };
var message_2 = { module_2:  { radon: [ '00.00' ],   co2: [ '00.00' ], methane: [ '00.00' ] } };

io.on('connection', function(socket) {
  console.log('Alguien se ha conectado con Sockets');
  socket.emit('messages', message_1);
  socket.emit('messages', message_2);
});

app.post('/', function (req, res) {
  console.log("POST VEN A MI!");
  console.log(req.body);
  if (JSON.stringify(req.body.module_1) != undefined) message_1 = req.body;
  else if (JSON.stringify(req.body.module_2) != undefined) message_2 = req.body;

  body = req.body;
  io.sockets.emit('messages', body);

  /*
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
  */

  res.send('POST RECEIVED');
  /*
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('POST RECEIVED\n');
  */
});

server.listen(PORT, function() {
  console.log("Servidor corriendo en https://saker.herokuapp.com/");
});
