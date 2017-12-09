
var http = require('http');
var querystring = require('querystring');
var postData = querystring.stringify({
    msg: '<root>Hello xml2js!</root>'
});

var body = '<module_2><radon>000000</radon><co2>11111111</co2><methane>2222222</methane></module_2>';

var options = {
    hostname: 'jagjordi.xyz',
    port: 8080,
    method: 'POST',
    headers: {
        'Content-Type': 'text/xml',
        'Content-Length': Buffer.byteLength(body)
    }
};

var req = http.request(options, function (res) {
    console.log('STATUS:', res.statusCode);
    console.log('HEADERS:', JSON.stringify(res.headers));

    res.setEncoding('utf8');

    res.on('data', function (chunk) {
        console.log('BODY:', chunk);
    });

    res.on('end', function () {
        console.log('No more data in response.');
    });
});
console.log('Request enviat');
req.on('error', function (e) {
    console.log('Problem with request:', e.message);
});
console.log('enviant request');

req.write(body);

req.end();
