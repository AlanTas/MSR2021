const fetch = require('node-fetch');
var FormData = require('form-data');
let fs = require('fs');
let file = fs.createReadStream('C:/Users/marco/Pictures/programming/Cattura.png');
var formData = new FormData();
formData.append('file', file );
formData.append('email', 'test@test.com' );

// @ts-ignore
fetch('https://srv-store6.gofile.io/uploadFile', {
    method: 'POST',
    body: formData
})
.then(function(res) {
    return res.json();
}).then(function(json) {
    console.log(json);
});
