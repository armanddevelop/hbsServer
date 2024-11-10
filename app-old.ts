import http from "http";

const port = 8080;
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "application/json" });
  const person = {
    name: "patches",
    address: "av paseo de los patios",
  };
  res.write(JSON.stringify(person));
  res.end();
});

server.listen(port);

console.log("listen in the port ", port);
