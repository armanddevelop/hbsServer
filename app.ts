import express from "express";
import hbs from "hbs";
import "dotenv/config";
const app = express();
const PORT = process.env.PORT;

app.set("view engine", "hbs");
//middleware static content
app.use(express.static("public"));
const useHandleBars = (req, res) => {
  res.render("home", {
    name: "Patches",
    title: "Curso de node",
  });
};
hbs.registerPartials(__dirname + "/views/partials");

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
