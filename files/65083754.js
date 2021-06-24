const express = require('express');
const app = express();
app.use(express.json()) 

app.post('/clicked', (req, res) => {
  console.log(req.a);
  console.log(req.b);
  console.log(req.body);
  res.sendStatus(201);
});
