const express = require('express');
const app = express();

var port = '5000'
var parseData = require('./client/app.js').parseData
var tablefyData = require('./client/app.js').tablefyData
var formTemplate = require('./client/app.js').formTemplate
// var router = express.Router();
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static('client'))

app.listen(port, () => {
  console.log(`listening to ${port}`)
})
app.get("/", (req, res) => {
  console.log('req -> ', 'working' )

  res.end();
});
app.get("/upload_json", (req, res) => {
  console.log('get("/upload_json"')


  res.end();
});

app.post("/upload_json", (req, res) => {

var parsed = parseData(req.body.jsonData)

var template = formTemplate

console.log(' req.body -> ', req.body)

if (parsed) {
  template += `${tablefyData(parsed)}</div>`
  res.send(template)
} else {
  template += ' no JSON data</div>'
  res.send(template)
}


  // console.log('response -> ', res)


// perform the parse data function

// save the parsed data in a variable
//

// console.log(res)



// res.redirect('/')


// res.sendFile(__dirname + '/secondIndex.html')

// perform

});





var htmlForm = `<h1 id = 'working' >Post JSON below</h1>
                <form action="/upload_json" name="jsonText" method="post">
                <textarea id="jsonData" class="text" cols="86" rows ="20" name="jsonData"></textarea>
                <input id = 'button' type="submit" value="translate" class="submitButton">
                </form>`


