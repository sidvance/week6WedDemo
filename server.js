const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.static(`${__dirname}/public`))
app.use(cors())

app.listen(4000,
   () => console.log(`server running on 4000`)
)

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '66cba9217ae74a898faac56859176010',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.get('/api/catName', (req, res) => { 
   try { 
      getCatName()} 
      catch(theseHands){
            rollbar.log(theseHands)
      }
   })