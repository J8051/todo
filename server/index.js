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


app.post("/api/add", (req, res) => {
  const text = req.body.text;
  return db.query("INSERT INTO todos (name) VALUES ($1);",[text])
    .then((results) => {
    return res.json(results.rows);
    });
});

app.put("/api/edit", (req, res) => {
  const text = req.body.text;
  const id = req.body.id;
  return db.query("UPDATE todos SET name = $1 WHERE id=$2 ;",[text,id])
    .then((results) => {
    return res.json(results.rows);
    });
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
