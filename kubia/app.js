const http = require('http');
const os = require('os');

console.log("Kubia server starting...");

var countRequests = 0;

var handler = function(request, response) {
  console.log("Received request from " + request.connection.remoteAddress);
  if (countRequests > 4) {
    console.log("Server returns 500 after 5 requests");
    response.writeHead(500);
    response.end("You've hit the max number of requests" + "\n");
  }
  response.writeHead(200);
  response.end("You've hit " + os.hostname() + "\n");
  countRequests++;
};

var www = http.createServer(handler);
www.listen(8080);
