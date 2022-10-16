import express from "express";
import { router } from "./routes";

const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(router);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  app.use(cors());
  next();
});
app.get("/hello", (request, response) =>
  response.status(200).send("Olá, mundo")
);

app.listen(4003, () => console.log("Servidor está rodando na porta 4003"));
