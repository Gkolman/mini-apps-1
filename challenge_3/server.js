var express = require('express')
var app = express()
var path = require('path');
var port = 3000
var bodyParser = require('body-parser')

var dbHelpers = require('./database.js')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(__dirname + '/compiled'))
app.use(express.static(__dirname + '/node_modules'))
// app.use(express.static(__dirname + '/database.js'))

var isLoggedIn = false
var _username = ''

app.get('/', (req, res) => {
  // console.log('this is working')
  res.end()
})
app.post('/account', (req, res) => {
  var username = req.body['data[username]']
  var password = req.body['data[password]']
  var email = req.body['data[email]']
  if (!username){res.end()}
  dbHelpers.addUser(username,password,email)
  .then(() => {
    _username = username
    console.log('user has been saved!')
    res.send('success')
  })
  .catch((err) => {
    _username = username
    res.end()
  })
})

app.post('/address', (req, res) => {

  var str = req.body['data[street]']
  var sui = req.body['data[suite]']
  var cit = req.body['data[city]']
  var sta = req.body['data[state]']
  var zip = req.body['data[zip]']
  var ph = req.body['data[phone]']
  console.log('here -> ', _username)

  dbHelpers.updateUserAddress(_username,str,sui,cit,sta,zip,ph)
  .then(() => {
    console.log('address has been updated')
    res.send('success')
  })
  .catch((err) => {
    res.end()
  })
// res.end()
})

app.post('/payment', (req, res) => {

  var cc = req.body['data[ccNumber]']
  var expr = req.body['data[expr]']
  var cvv = req.body['data[cvv]']
  var zip = req.body['data[billing]']

  dbHelpers.updateUserPayment(_username,cc,expr,cvv,zip)
  .then(() => {
    console.log('Payment has been updated')
    res.send('success')
  })
  .catch((err) => {
    res.end()
  })
})

app.listen(port, () => {
  console.log(`app is running on http://localhost:${port}/`)
})