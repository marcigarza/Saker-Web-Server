var myVar = setInterval(Timer, 500);

//var socket = io.connect('http://localhost:8080', { 'forceNew': true });
/*
setTimeout(function(){
   window.location.reload(1);
}, 1000);
*/
function Timer(data) {
    //var d = new Date();
    //document.getElementById("demo").innerHTML = d.toLocaleTimeString();
    document.getElementById("radon_value_module_1").innerHTML = radon_value_module_1;
    document.getElementById("co2_value_module_1").innerHTML = co2_value_module_1;
    document.getElementById("methane_value_module_1").innerHTML = methane_value_module_1;
    document.getElementById("radon_value_module_2").innerHTML = radon_value_module_2;
    document.getElementById("co2_value_module_2").innerHTML = co2_value_module_2;
    document.getElementById("methane_value_module_2").innerHTML = methane_value_module_2;


}
