var http = require("http");


console.log("Starting....");
var server = http.createServer(function(req, resp){
    console.log("Received request: " + req.url);
    resp.writeHead(200, {"Content-type": "text/plain"});
    resp.end("Hello World!")
});


server.listen(8000, "localhost", function(){
    console.log("Listening at port 8000.....");
})