const express = require('express');
const morgan = require('morgan')
const layout = require('./views/layout')
const app = express();

app.use(morgan('dev'))
app.use(express.static('public'));
app.use(express.urlencoded({extended:false})) // allows JS to understand the .json files the server sends back.

//middleware
app.get('/', (request, response, next)=>{
  response.send(
  layout('')
  )
})

const port = 3000;
app.listen(3000,()=>{
  console.log(` Listening on ${port}`)
})
