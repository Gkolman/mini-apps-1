
// row 1
var r1c1 = document.getElementById('R1C1')
var r1c2 = document.getElementById('R1C2')
var r1c3 = document.getElementById('R1C3')

// row 2
var r2c1 = document.getElementById('R2C1')
var r2c2 = document.getElementById('R2C2')
var r2c3 = document.getElementById('R2C3')

// row 3
var r3c1 = document.getElementById('R3C1')
var r3c2 = document.getElementById('R3C2')
var r3c3 = document.getElementById('R3C3')

var plays = 0

var player1 = {
  name: 'player one',
  mark: 'X'
};
var player2 = {
  name: 'player two',
  mark: 'O'
}
var player1Turn = true;
var player1Wins = false;
var player2Wins = false;


    // listens for player log in data
    document.getElementById('login').addEventListener('submit', (e) => {
      e.preventDefault();
      var player1Name = document.getElementById('player1Name').value;
      var player2Name = document.getElementById('player2Name').value;
      console.log(player1Name)
      console.log(player2Name)
      if (player1Name) { player1.name = player1Name }
      if (player2Name) { player2.name = player2Name }
      document.getElementById('playerTurn').innerHTML = `it is ${player1.name}'s turn`
      document.getElementById('login').remove();
      player1Turn = true
      document.getElementById('tic-tac-toe').style.visibility = 'visible';
    })


window.getData = (d) => {
  var text = d.innerHTML;
  console.log(d.attributes)
  var classs = d.getAttribute('class');
  var id = d.getAttribute('id');
  if (!text) {
    plays += 1
    if (player1Turn) {
      // player1  turn
      d.innerHTML = 'X'
      player1Turn = !player1Turn
      // player 1 settings
      isXConflict()
      if (player1Wins === true) {
        setTimeout( () => {
          alert(`${player1.name} has won`)
          clearBoard()
        }, 200)
      }
      document.getElementById('playerTurn').innerHTML = `it is ${player2.name}'s turn`
    } else {
      // player2 turn
      d.innerHTML = 'O'
      player1Turn = !player1Turn
      isOConflict()
      if (player2Wins) {
        setTimeout( () => {
          alert(`${player2.name} has won`)
          clearBoard()
        }, 200)
      }
      document.getElementById('playerTurn').innerHTML = `it is ${player1.name}'s turn`
      }
  if (plays === 9 && player1Wins === false && player2Wins === false) {clearBoard()}
  } else {
    alert('not an empty spot!')
  }
}

var isXConflict = function() {
  // row conflict
  if (r1c1.innerHTML === 'X' && r1c2.innerHTML === 'X' && r1c3.innerHTML === 'X') {player1Wins = true}
  if (r2c1.innerHTML === 'X' && r2c2.innerHTML === 'X' && r2c3.innerHTML === 'X') {player1Wins = true}
  if (r3c1.innerHTML === 'X' && r3c2.innerHTML === 'X' && r3c3.innerHTML === 'X') {player1Wins = true}
  // column conflict
  if (r1c1.innerHTML === 'X' && r2c1.innerHTML === 'X' && r3c1.innerHTML === 'X') {player1Wins = true}
  if (r1c2.innerHTML === 'X' && r2c2.innerHTML === 'X' && r3c2.innerHTML === 'X') {player1Wins = true}
  if (r1c3.innerHTML === 'X' && r2c3.innerHTML === 'X' && r3c3.innerHTML === 'X') {player1Wins = true}
  // diagonal conflict
  if (r1c1.innerHTML === 'X' && r2c2.innerHTML === 'X' && r3c3.innerHTML === 'X') {player1Wins = true}
  if (r1c3.innerHTML === 'X' && r2c2.innerHTML === 'X' && r3c1.innerHTML === 'X') {player1Wins = true}
}
 var isOConflict = function() {
  if (r1c1.innerHTML === 'O' && r1c2.innerHTML === 'O' && r1c3.innerHTML === 'O') {player2Wins = true}
  if (r2c1.innerHTML === 'O' && r2c2.innerHTML === 'O' && r2c3.innerHTML === 'O') {player2Wins = true}
  if (r3c1.innerHTML === 'O' && r3c2.innerHTML === 'O' && r3c3.innerHTML === 'O') {player2Wins = true}
  // column conflict
  if (r1c1.innerHTML === 'O' && r2c1.innerHTML === 'O' && r3c1.innerHTML === 'O') {player2Wins = true}
  if (r1c2.innerHTML === 'O' && r2c2.innerHTML === 'O' && r3c2.innerHTML === 'O') {player2Wins = true}
  if (r1c3.innerHTML === 'O' && r2c3.innerHTML === 'O' && r3c3.innerHTML === 'O') {player2Wins = true}
  // diagonal conflict
  if (r1c1.innerHTML === 'O' && r2c2.innerHTML === 'O' && r3c3.innerHTML === 'O') {player2Wins = true}
  if (r1c3.innerHTML === 'O' && r2c2.innerHTML === 'O' && r3c1.innerHTML === 'O') {player2Wins = true}
}

window.clearBoard = () => {
  var row1 = document.getElementsByClassName('row1')
  var row2 = document.getElementsByClassName('row2')
  var row3 = document.getElementsByClassName('row3')
  var rows = [row1,row2,row3]
  if (plays === 9 && !player1Wins && !player2Wins) { setTimeout( () => {
    alert('try again!')
} ,700) }
  document.getElementById('playerTurn').innerHTML = `it is ${player1.name}'s turn`
  plays = 0;
  for ( var row of rows) {
    for (var col of row) {
      col.innerHTML = ''
    }
  }
  player1Turn = true;
  player1Wins = false;
  player2Wins = false;
}

