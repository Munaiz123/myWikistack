const express = require('express');
const morgan = require('morgan')
const layout = require('./views/layout') // requring layout view

const userRouter = require('./routes/user'); // creating routes via express
const wikiRouter = require('./routes/wiki');


const app = express(); // creating an instance of the express library which will help us to talk to the database
const {db} = require('./models') // activating file that connects to the database



app.use(morgan('dev'))
app.use(express.static('public'));
app.use(express.urlencoded({extended:false})) // allows JS to understand the .json files the server sends back.

//middleware
app.get('/', (request, response, next)=>{
  response.send(
  layout('')
  )
})


app.use('/wiki', wikiRouter); //plugging in our routers into app.js
app.use('/user', userRouter);

// authenticates that the database is connected
db.authenticate().then(()=>{
  console.log('DB connected.')
})


const syncDB = async ()=>{
  try{
    // await db.sync()
    await db.sync({force:true})

    // db.sync is an async function so
    // it needs to be in a function that is 'labled' as async.
    // also, 'force:true' DROPS everything in the database and starts
    //fresh
  } catch(error){
    console.log('error')
  }

  const port = 3000; // creates a port where can list for all incoming requests

  app.listen(3000, () => {
    console.log(`Listening on ${port}`);
  });
}


syncDB(); // calling the async function from above to sync database
//          as well as listen for requests.
