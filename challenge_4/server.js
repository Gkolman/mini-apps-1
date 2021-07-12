var express = require('express');
var app = express();
var port = 3000;

var $ = require('jquery')

console.log('jquerry ->', $)

var path = require('path')

app.use(express.static(path.resolve(__dirname + '/client/dist')))


app.get('/',(req,res) => {
  console.log('server connection is valid')
  res.send('working')
})

app.get('/pint',(req,res) => {

  $.ajax({
    type: 'GET',
    url: '/',
    success: () => {
      console.log('successfull ajax request')
      res.end('ajax succesful')
  },
    error: (err) => {
      console.log('err - >', err)
      res.end('ajax failed')
    }
  })


  console.log('get /pint')
})


app.listen(port,() => {
  console.log(`server is running on ${port}`)
})

