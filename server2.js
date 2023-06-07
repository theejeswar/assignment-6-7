let fs = require("fs");
let http = require("http");

let processor = function (req, res) {
    let web = "http.//home.html";
    let app1 = web.indexOf("home.html");
    let app2 = web.indexOf("index.html");
    var url = req.url;
    if (app1 > 0) {
        fs.readFile("./home.html", "utf-8", function (err, data) {
            if (data) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    } else if (app2 > 0) {
        fs.readFile("./index.html", "utf-8", function (err, data) {
            if (data) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    } else {
        res.setHeader("Content-Type", "text/plain");
        res.end("Invalid request");
    }
}

let server = http.createServer(processor);
server.listen(8080, function () {
    console.log("Server is listening on port 8080");
});