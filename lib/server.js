import express from "express";
import config from "./config";
import serverRender from "renderers/Server";
import { data } from "./testData";

const app = express();

app.use(express.static("./public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const initialContent = serverRender();
  res.render("../lib/views/ejs/index", { initialContent });
});

app.get("/data", (req, res) => {
  res.send(data);
});

app.listen(config.port, () => {
  console.info(`Running on ${config.port}`);
});
