
var parseData = (jsonData) => {
  if (!jsonData) { return }
  if (jsonData[0] !== '{') return
  console.log('parseData is working')
  var newData = JSON.parse(jsonData)
  var data = { col : [], row : []}
  for (var key in newData) { if (key !== 'children') { data.col.push(key) } }
  var recurse = (parent) => {
    data.row.push([])
    for ( var key in parent ) { if (key !== 'children') { data.row[data.row.length-1].push(parent[key]) }}
    if(parent.children.length > 0) { for (var child of parent.children) { recurse(child)} }
  }
  recurse(newData)
  return data

}

var tablefyData = (data) => {
  console.log('data -> ', data)
  var template = ` <table><thead><tr>`
    for ( var col of data.col) { template += `<th>${col}</th>` }
  template += `</tr> </thead <tbody>`
  for ( var row of data.row) {
    template += `<tr>`
    for ( var data of row) { template += `<td>${data}</td>` }
    template += `</tr>`
  }
  template += `</tbody> </table>`
  console.log('template -> ', template)
  return template
}

var formTemplate =
`
  <h1 id = 'working' >Post JSON below</h1>
  <form action="/upload_json" name="jsonText" method="post">
      <textarea id="jsonData" class="text" cols="86" rows ="20" name="jsonData"></textarea>
     <input id = 'button' type="submit" value="translate" class="submitButton">
  </form>
  <div id = 'afterData'>`


module.exports = {
  parseData : parseData,
  tablefyData: tablefyData,
  formTemplate : formTemplate
}
// module.exports = tablefyData
