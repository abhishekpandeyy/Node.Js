
//! The Built-in URL Module
// The URL module splits up a web address into readable parts.
// To include the URL module, use the require() method:

// var url=require('url')

// Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties:

                    // let address='https://www.w3schools.com/nodejs/nodejs_url.asp'

                    // var urlObj=url.parse(address,true);

                    // console.log(urlObj.hostname);

//!  Node.js File Server

// Now we know how to parse the query string, and in the previous chapter we learned how to make Node.js behave as a file server. Let us combine the two, and 
// **serve the file requested by the client.
// Create two html files and save them in the same folder as your node.js files.
var url=require('url');
var fs=require('fs');
var http=require('http');
http.createServer((req,res)=>{

    var q=url.parse(req.url,true);
    var fileName="."+q.pathname;
    fs.readFile(fileName,(err,data)=>{
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'});
            console.log("error->",fileName);
            return res.end("404 Not found");
        }
        
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        
    })
}).listen(3000);
