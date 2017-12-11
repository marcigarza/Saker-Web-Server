var socket = io.connect('https://saker.herokuapp.com/', { 'forceNew': true });

var id_radon_value_module_1 = "u686";
var id_co2_value_module_1 = "u695";
var id_methane_value_module_1 = "u692";
var id_radon_value_module_2 = "u707";
var id_co2_value_module_2 = "u709";
var id_methane_value_module_2 = "u708";

var radon_value_module_1 = " "; 
var co2_value_module_1 = " ";
var methane_value_module_1 = " ";
var radon_value_module_2 = " ";
var co2_value_module_2 = " ";
var methane_value_module_2 = " ";

var bq = " bq/m3";
var ppm = " ppm";

socket.on('messages', function(data) {
  console.log("SOCKET VEN A MI!");
  console.log(data);
  render(data);
})

function render (data) {  
  var result = data;
  if (JSON.stringify(result.module_1) != undefined) {
    radon_value_module_1 = clean(JSON.stringify(result.module_1.radon));
    co2_value_module_1 = clean(JSON.stringify(result.module_1.co2));
    methane_value_module_1 = clean(JSON.stringify(result.module_1.methane));
  }
  if (JSON.stringify(result.module_2) != undefined) {
    radon_value_module_2 = clean(JSON.stringify(result.module_2.radon));
    co2_value_module_2 = clean(JSON.stringify(result.module_2.co2));
    methane_value_module_2 = clean(JSON.stringify(result.module_2.methane));
  }

  document.getElementById(id_radon_value_module_1).innerHTML = radon_value_module_1 + bq;
  document.getElementById(id_co2_value_module_1).innerHTML = co2_value_module_1 + ppm;
  document.getElementById(id_methane_value_module_1).innerHTML = methane_value_module_1 + ppm;
  document.getElementById(id_radon_value_module_2).innerHTML = radon_value_module_2 + bq;
  document.getElementById(id_co2_value_module_2).innerHTML = co2_value_module_2 + ppm;
  document.getElementById(id_methane_value_module_2).innerHTML = methane_value_module_2 + ppm;
}


function clean(data) {
  var result = data
  result = result.replace("[", " ");
  result = result.replace("]", " ");
  return result;

}