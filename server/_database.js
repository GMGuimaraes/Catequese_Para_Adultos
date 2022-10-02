const pg = require['pg']

const client = new pg.client({
    user:  'postgres',
    host: 'localhost',
    database: 'catequese',
    password: '1234',
    port: 5432,
})

module.exports = client