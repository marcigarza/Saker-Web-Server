var express = require('express');
var app = express();
//var server = require('http').Server(app);
//var io = require('socket.io')(server);

var querystring = require('querystring');


var PORT = process.env.PORT || 8000;


app.use(express.static(__dirname + '/public'));
console.log("post received");
var body;
app.post('/', function (req, res) {
  req.on('data', function (data) {
    body += data;
  });

  req.on('end', function () {
    var post = querystring.parse(body);
    var parseString = require('xml2js').parseString;
    var xml = body;
    parseString(xml, function (err, result) {
      //result is a JSON with all the data. {module_x {radon : [n],}}
      var dot = ";";
      var endl = "\n";
      if (JSON.stringify(result.module_1) != undefined) {
        var aux1 = "var radon_value_module_1 = ";
        var aux2 = "var co2_value_module_1 = ";
        var aux3 = "var methane_value_module_1 = ";
        var txt1 = JSON.stringify(result.module_1.radon);
        var txt2 = JSON.stringify(result.module_1.co2);
        var txt3 = JSON.stringify(result.module_1.methane);
        var msg = aux1 + txt1 + dot + endl + aux2 + txt2+ dot + endl + aux3 + txt3 + dot;

        fs.writeFile("/home/marc/Escritorio/PROYECTOS/CBI/WEB_CBI/module1.js", msg, function(err) {
          if(err) {
            return console.log(err);
          }
        });
      }

      if (JSON.stringify(result.module_2) != undefined) {
        aux1 = "var radon_value_module_2 = ";
        aux2 = "var co2_value_module_2 = ";
        aux3 = "var methane_value_module_2 = ";
        txt1 = JSON.stringify(result.module_2.radon);
        txt2 = JSON.stringify(result.module_2.co2);
        txt3 = JSON.stringify(result.module_2.methane);
        msg = aux1 + txt1 + dot +endl + aux2 + txt2+ dot +endl+ aux3 + txt3 + dot;
        fs.writeFile("/home/marc/Escritorio/PROYECTOS/CBI/WEB_CBI/module2.js", msg, function(err) {
          if(err) {
            return console.log(err);
          }
        });
      }
      console.log("The file was saved!");
    });
  });
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});


app.listen(PORT, function() {
  console.log('Express Listening on port ' + PORT);
});
