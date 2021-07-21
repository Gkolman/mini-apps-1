const express = require('express');
const app = express();
const fs = require('fs');


var port = '5000'
var { parseData, tablefyData, formTemplate} = require('./client/app.js')
// var router = express.Router();
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static('client'))

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

app.listen(port, () => {
  console.log(`app is running on http://localhost:${port}`)
})
app.get("/", (req, res) => {
  console.log('req -> ', 'working' )

  res.end();
});
app.get("/upload_json", (req, res) => {
  console.log('get("/upload_json"')
  // res.sendFile(__dirname './client/index.html');
  res.end()
});

app.post("/uploadText", (req, res) => {
  var parsed = parseData(req.body.jsonData)
  if (parsed) {
    var parsedData =  formTemplate + `${tablefyData(parsed)}</div>`
    res.send(parsedData)
  } else {
    var parsedData =  formTemplate + 'no JSON data</div>'
    res.send(parsedData)
  }
});

app.post('/uploadFile', upload.single('avatar'), function (req, res, next) {
  fs.readFile(req.file.path, 'utf8' , (err, data) => {
    if (err) {console.error(err);return}
    var parsed = parseData(data)
    if (parsed) {
      var parsedData = formTemplate + `${tablefyData(parsed)}</div>`
      res.send(parsedData)
    } else {
      var parsedData = formTemplate + 'no JSON data</div>'
      res.send(parsedData)
    }
  });
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})








var htmlForm = `<h1 id = 'working' >Post JSON below</h1>
                <form action="/upload_json" name="jsonText" method="post">
                <textarea id="jsonData" class="text" cols="86" rows ="20" name="jsonData"></textarea>
                <input id = 'button' type="submit" value="translate" class="submitButton">
                </form>`


