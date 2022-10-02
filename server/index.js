const express = require('express')
const cadastroCatequizandoRoutes = require("./cadastroCatequizando.routes")
const app = express()
const cors = require('cors')

app.use(cors());

app.use(express.json());
app.use(cadastroCatequizandoRoutes);

app.get("/health", (req, res) => {
    return res.json("up");
});

//enviar variáveis do front para o back
app.post('/createCatequizando', (req, res) => {
  const name = req.body.name

  //db.query('INSERT INTO) //enviar os dados para o db
})

//app.get('/Catequizandos', (req, res) =>{})

//const db
app.listen(3001, () => {
    console.log('Server started on port 3001!');
  });

//import postgres from 'postgres'

//const sql = postgres({})

//export default sql