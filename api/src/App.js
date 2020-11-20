const { default: Axios } = require('axios');
const express = require ('express');
const axios = require ('axios');
var path = require("path")

const app = express();

app.use(express.static(path.join(__dirname, 'build')));




// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3001'); // update to match the domain you will make the request from
//     res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE')
//     res.header('Access-Control-Allow-Headers', '*, X-Requested-With, Content-Type, Accept');
//     next();
//   });

app.get('/api/:username', (req, res)=>{
    const { username } = req.params
    console.log(username);
    axios.get(`https://bio.torre.co/api/bios/${username}`)
    .then(response => {
        console.log(response)
        res.send(response.data)    
    })
    
});
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

module.exports = app;