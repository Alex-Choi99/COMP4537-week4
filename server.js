const http = require('http');

http.createServer(function (req, res) {
    console.log("The server received a request");
    res.writeHead(200, {
        "Content-Type": "text/html",
        "Access-Control-Allow-Origin": "*"
    });
    //my current ip
    console.log(req.socket.remoteAddress);
    res.end("Hello <b>World!</b>skbidi");
});

Server.listen(8000, '0.0.0.0', () => {
    console.log('Server is running at http://0.0.0.0:8000');
});
