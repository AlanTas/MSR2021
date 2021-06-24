const express = require('express')
const bodyParser = require("body-parser");
const fs = require('fs')
const app = express()
const port = 3000

app.use(bodyParser.text());
app.post('/', (req, res) => {
  
fs.writeFileSync( "file.csv", req.body, "utf8" )
res.send("success")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// Example with a full-fledged request
const postRequest = {
    url: 'http://localhost:3000/',
    method: 'POST',

    body: {
        mode: 'raw',
        raw: data
    }
};
pm.sendRequest(postRequest, (error, response) => {
    //console.log(error ? error : response.json());
});
