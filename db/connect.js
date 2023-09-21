const { Pool } = require('pg')
 
const db = new Pool({
  user: 'dbuser',
  host: 'localhost',
  database: 'todo',
  password: 'todo',
  port: 5432,
})
 
db.connect()
 
module.exports = db; 