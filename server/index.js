const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.get('/', (req,res) => { 
res.send("Hello World!")
})

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
}); 