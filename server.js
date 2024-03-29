var http = require("http");
var fs = require("fs");

var config = JSON.parse(fs.readFileSync("config.json"));


console.log("Starting....");
var server = http.createServer(function(req, resp){
    console.log("Received request: " + req.url);
    fs.readFile("./route/" + req.url, function(err, data){
        if(err){
            resp.writeHead(400, {"Content-type": "text/plain"});
            resp.end("Sorry, the page was not found!");
        }
        else{
            resp.writeHead(200, {"Content-type": "text/html"});
            resp.end(data);
        }
    })
});


server.listen(config.port, config.host, function(){
    console.log("Listening at port " + config.port + ".........");
})