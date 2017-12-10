var socket = io.connect('https://saker.herokuapp.com/', { 'forceNew': true });


var radon_value_module_1 = " ";
var co2_value_module_1 = " ";
var methane_value_module_1 = " ";
var radon_value_module_2 = " ";
var co2_value_module_2 = " ";
var methane_value_module_2 = " ";

socket.on('messages', function(data) {
  console.log("SOCKET VEN A MI!");
  console.log(data);
  render(data);
})

function render (data) {
  console.log("PRINT de XML despues del QueryString");
  console.log(data);
  var parser = new DOMParser();
  var xml = parser.parseFromString(data, "text/xml");
  console.log(data);
  var result = xmlToJson(xml);
  //result is a JSON with all the data. {module_x {radon : [n],}}
  console.log("PRINT de JSON despues del ParseString");
  console.log(result);
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

  document.getElementById("radon_value_module_1").innerHTML = radon_value_module_1;
  document.getElementById("co2_value_module_1").innerHTML = co2_value_module_1;
  document.getElementById("methane_value_module_1").innerHTML = methane_value_module_1;
  document.getElementById("radon_value_module_2").innerHTML = radon_value_module_2;
  document.getElementById("co2_value_module_2").innerHTML = co2_value_module_2;
  document.getElementById("methane_value_module_2").innerHTML = methane_value_module_2;
}


function xmlToJson( xml ) {

  // Create the return object
  var obj = {};

  if ( xml.nodeType == 1 ) { // element
    // do attributes
    if ( xml.attributes.length > 0 ) {
    obj["@attributes"] = {};
      for ( var j = 0; j < xml.attributes.length; j++ ) {
        var attribute = xml.attributes.item( j );
        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if ( xml.nodeType == 3 ) { // text
    obj = xml.nodeValue;
  }

  // do children
  if ( xml.hasChildNodes() ) {
    for( var i = 0; i < xml.childNodes.length; i++ ) {
      var item = xml.childNodes.item(i);
      var nodeName = item.nodeName;
      if ( typeof(obj[nodeName] ) == "undefined" ) {
        obj[nodeName] = xmlToJson( item );
      } else {
        if ( typeof( obj[nodeName].push ) == "undefined" ) {
          var old = obj[nodeName];
          obj[nodeName] = [];
          obj[nodeName].push( old );
        }
        obj[nodeName].push( xmlToJson( item ) );
      }
    }
  }
  return obj;
};
