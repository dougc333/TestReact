const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
//const config = require('./config')
//const contacts = require('./contacts')


const app = express()
app.get('/',(req,res)=>{
  res.send('asdfasdfasdfasdf')
})

const server = app.listen('3333');


process.on('SIGTERM',()=>{
  server.close(()=>{
    console.log("term")
  })
})

