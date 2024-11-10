"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const port = 8080;
const server = http_1.default.createServer((req, res) => {
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
//# sourceMappingURL=app-old.js.map