const express = require("express");
const router = express.Router();

const {User} = require('../models')
const {Page} = require("../models") // allows us to add a new row to
// a database table.

const {addPage} = require('../views');//this page renders @ /wiki/add


// Because this is a router file, all the routers are assumed
//to start from '/wiki'

router.get('/add', (request, response)=>{
  response.send(addPage())
})


router.get('/', (request, response)=>{
  response.redirect('/')
})



// a POST request will occur via an HTML form.
// a post request will 'kick in' when we push the submit button
// on the router.get('/add') page.
// POST path must be consistent with the HTML form action

router.post('/', async (request, response, next) =>{
  const page = new Page({
    title: title,
    content : content
  })
  try{
    await page.save();
    response.redirect('/')
  } catch (error) {
    next(error)
  }

  // const user = new User({
  //   name: author,
  //   email: email
  // })

})

module.exports = router;
