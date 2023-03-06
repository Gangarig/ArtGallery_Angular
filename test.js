const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
  console.log("received request", req);
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.writeHead(200);
  res.end("success");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
