var express = require('express');
var app = express();
var port = 3000;

var path = require('path')

app.use(express.static(path.resolve(__dirname + '/client/dist')))


app.get('/',(req,res) => {
  console.log('server connection is valid')
  res.send('working')
})

app.listen(port,() => {
  console.log(`server is running on ${port}`)
})

