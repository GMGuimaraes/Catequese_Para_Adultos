const express = require('express')

const app = express()

app.use(express.json())

app.get("/health", (req, res) => {
    return res.json("up");
});

app.listen(3000, () => {
    console.log('Server started on port 3000!');
  });

//import postgres from 'postgres'

//const sql = postgres({})

//export default sql