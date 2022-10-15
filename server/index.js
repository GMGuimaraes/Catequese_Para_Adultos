const express = require("express");
const cadastroCatequizandoRoutes = require("./src/controllers/cadastroCatequizando");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const routes = require("./routes");
const { response } = require("express");
app.use(cors());

app.use(express.json());
app.use(cadastroCatequizandoRoutes);
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/health", (req, res) => {
  return res.json("up");
});

app.use("/api", routes);

app.listen(3001, () => {
  console.log("Server started on port 3001!");
});
//enviar variáveis do front para o back
//app.post('/createCatequizando', (req, res) => {
/// const name = req.body.name

//db.query('INSERT INTO) //enviar os dados para o db
//})

//app.get('/Catequizandos', (req, res) =>{})

//const db

//import postgres from 'postgres'

//const sql = postgres({})

//export default sql
