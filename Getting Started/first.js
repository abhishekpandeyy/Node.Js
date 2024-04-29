
var http = require('http');

http.createServer(function(request,response){

    response.writeHead(404,{'Content-Type':'text/plain'});
    response.write('Hello World');
    response.end();
}).listen(3500);


