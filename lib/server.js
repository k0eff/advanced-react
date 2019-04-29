import express from "express";
import config from "./config";
import serverRender from "renderers/Server";

const app = express();

app.use(express.static("./public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const initialContent = serverRender();
  res.render("../lib/views/ejs/index", { initialContent });
});

app.listen(config.port, function listenHandler() {
  console.info(`Running on ${config.port}`);
});
