var http = require('http');
var fs = require('fs');

port = 3000;
require("http")
  .createServer((request, response) => {
    if (request.url === "/") {
      response.setHeader("Content-type", "text/html");
      response.setHeader("Access-Control-Allow-Origin", "*");
      response.statusCode = 200;
      response.end(require("fs").readFileSync("index.html", "utf8"));
    }
    else if (request.url.match(".css$")) {
      const cssPath = path.join(__dirname, request.url);
      const fileStream = fs.createReadStream(cssPath, "UTF-8");
      response.writeHead(200, { "Content-Type": "text/css" });
      fileStream.pipe(response);
    }
  })
  .listen(port);


// const PORT = 8080;

// fs.readFile('./index.html', function(err, html) {
//     if (err) throw err;
//     http.createServer(function(req, res) {
//         res.writeHeader(200, {"Content-Type": "text/html"});
//         res.write(html);
//         res.end();
//     }).listen(PORT);
// });