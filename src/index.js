const express = require('express')
require('dotenv').config()

const app = express()

app.get('/', (req, res) => {
    let data = {
        "message": "Hello world!"
    }
    
    res.json(data)
  })
  
  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
  })