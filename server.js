var http = require('http')
var fs = require('fs')
console.log(http)
console.log(fs)
console.log('hello from the server.js file ')

var websocket = require('websocket').server

console.log("websocket output is : " + websocket)

// establish port for websocket
var port = 1234

// http.createServer(function(req, res) {
//   console.log(req)
//   console.log(res)
//   console.log("server listening on port:")
// })
var http_server = http.createServer(function(req, res){
  // res.write();

}).listen('2099');
