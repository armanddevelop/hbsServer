"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const hbs_1 = __importDefault(require("hbs"));
require("dotenv/config");
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.set("view engine", "hbs");
//middleware static content
app.use(express_1.default.static("public"));
const useHandleBars = (req, res) => {
    res.render("home", {
        name: "Patches",
        title: "Curso de node",
    });
};
hbs_1.default.registerPartials(__dirname + "/views/partials");
app.get("/", useHandleBars);
app.get("/generic", (req, res) => {
    res.render("generic", {
        name: "Generic",
        title: "Curso de node",
    });
});
app.get("/elements", (req, res) => {
    res.render("elements", {
        name: "Elements",
        title: "Curso de node",
    });
});
app.get("*", (req, res) => {
    res.sendFile(__dirname + "/public/404.html");
});
app.listen(PORT, () => {
    console.log(`app listen in the http://localhost:${PORT}/`);
});
//# sourceMappingURL=app.js.map