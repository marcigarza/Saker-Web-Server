var socket = io.connect('https://saker.herokuapp.com/', { 'forceNew': true });
var myVar = setInterval(addMessage, 1000);

var radon_value_module_1 = " ";
var co2_value_module_1 = " ";
var methane_value_module_1 = " ";
var radon_value_module_2 = " ";
var co2_value_module_2 = " ";
var methane_value_module_2 = " ";

socket.on('messages', function(data) {
  console.log(data);
  render(data);
})

function render (data) {
  var post = querystring.parse(data);
  var parseString = require('xml2js').parseString;
  var xml = data;
  parseString(xml, function (err, result) {
    //result is a JSON with all the data. {module_x {radon : [n],}}
    if (JSON.stringify(result.module_1) != undefined) {
      radon_value_module_1 = JSON.stringify(result.module_1.radon);
      co2_value_module_1 = JSON.stringify(result.module_1.co2);
      methane_value_module_1 = JSON.stringify(result.module_1.methane);
    }

    if (JSON.stringify(result.module_2) != undefined) {
      radon_value_module_2 = JSON.stringify(result.module_2.radon);
      co2_value_module_2 = JSON.stringify(result.module_2.co2);
      methane_value_module_2 = JSON.stringify(result.module_2.methane);

    }
  });

  document.getElementById("radon_value_module_1").innerHTML = radon_value_module_1;
  document.getElementById("co2_value_module_1").innerHTML = co2_value_module_1;
  document.getElementById("methane_value_module_1").innerHTML = methane_value_module_1;
  document.getElementById("radon_value_module_2").innerHTML = radon_value_module_2;
  document.getElementById("co2_value_module_2").innerHTML = co2_value_module_2;
  document.getElementById("methane_value_module_2").innerHTML = methane_value_module_2;
}
