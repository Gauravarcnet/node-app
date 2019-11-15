const express = require('express')
const app = express()

// Responds with "hello  world" for request that hit our root

app.get('/', function(req,res) {
   res.send(`hello world`)

}) 


// listen to port number 4000

app.listen(process.env.Port || 4005)
module.exports = app
