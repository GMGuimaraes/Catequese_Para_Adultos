import express from "express";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);

app.get("/hello", (request, response) =>
  response.status(200).send("Olá, mundo")
);

app.listen(4003, () => console.log("Servidor está rodando na porta 4003"));
