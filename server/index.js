const express = require("express");
const app = express();
const db = require("../db/connect");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api", (req, res) => {
  return db.query("SELECT * FROM todos;")
    .then((results) => {
    return res.json(results.rows);
  });
});

app.delete("/api/:id",(req, res) => {
  const id = req.params.id; 
  return db.query("DELETE FROM todos WHERE id = $1;",[id])
    .then((results) => {
    return res.json(results.rows);
  });
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
