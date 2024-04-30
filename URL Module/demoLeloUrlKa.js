
//! The Built-in URL Module
// The URL module splits up a web address into readable parts.
// To include the URL module, use the require() method:

// var url=require('url')

// Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties:

                    // let address='https://www.w3schools.com/nodejs/nodejs_url.asp'

                    // var urlObj=url.parse(address,true);

                    // console.log(urlObj.hostname);

//!  Node.js File Server
var url=require('url')
var fs=require('fs')
var http=require('http')
http.createServer((req,res)=>{


})