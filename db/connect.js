import { Client } from 'pg'
 
const db = new Client({
  user: 'dbuser',
  host: 'localhost',
  database: 'todo',
  password: 'todo',
  port: 5000,
})
 
await db.connect()
 
module.exports = db; 