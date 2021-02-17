var express = require('express')
var app = express()
var path = require('path');
var port = 3000
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))


app.use(express.static(__dirname + '/compiled'))
app.use(express.static(__dirname + '/node_modules'))


app.get('/', (req, res) => {
  // console.log('this is working')
  res.end()
})
app.post('/account', (req, res) => {
  console.log('account')

  // res.send('ajax request made')
  // console.log('data -> ', req.body)
  res.end()
})

app.post('/address', (req, res) => {
  console.log('address')

  // res.send('ajax request made')
  // console.log('data -> ', req.body[0])
  res.end()
})

app.post('/payment', (req, res) => {
  console.log('payment')

  // res.send('ajax request made')
  console.log('data -> ', req.body)
  res.end()
})

app.listen(port, () => {
  console.log(`server is running on ${port}`)
})