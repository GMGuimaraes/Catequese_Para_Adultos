const { Connection } = require("pg")

const pg = require['pg']

const client = new pg.client({
    user:  'postgres',
    host: 'localhost',
    database: 'catequese',
    password: '1234',
    port: 5432,
})

Connection.connect((error) =>{
    if(error) throw error;
    console.log(`Conectado ao Banco de Dados`)
});

module.exports = client