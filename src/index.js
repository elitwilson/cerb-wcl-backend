const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    let data = {
        "message": "Hello world!"
    }

    res.json(data)
  })
  
  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
  })

  app.get('/gettoken', function(req, res) {
    let uri = 'https://www.warcraftlogs.com/oauth/token'

    axios({
        method: 'post',
        url: uri,
        data: {
            'client_id': process.env.CLIENT_ID,
            'client_secret': process.env.CLIENT_SECRET,
            'grant_type': 'client_credentials'
        }
    })
    .then(function (response) {
        console.log('Obtained access token.')
        json = {
            'token': response.data.access_token
        }
        res.json(json)
    })
    .catch(function (error) {
        console.log(error)
    });
})