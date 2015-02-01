var connect = require('connect');
var port=8080;
connect.createServer(
    connect.static(__dirname)
).listen(port);

console.log("Listening on " + port);