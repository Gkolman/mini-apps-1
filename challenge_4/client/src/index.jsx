import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game.jsx';


var element = <h2> hello world </h2>

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // column 1
      C1R1 : '.',
      C1R2 : '.',
      C1R3 : '.',
      C1R4 : '.',
      C1R5 : '.',
      C1R6 : '.',
      player1Turn: true,
      player2Turn: false,
      player1Won: false,
      player2Won: false
    } // state
    this.resetGame = this.resetGame.bind(this)
    this.initGame = this.initGame.bind(this)
    this.detectCollision = this.detectCollision.bind(this)
    this.getPiecePositions = this.getPiecePositions.bind(this)





  } // constructor


  componentDidMount() {
    this.initGame()
  }
  initGame() {
    this.setState({player1Turn: true})
    this.setState({player2Turn: false})
    this.setState({player1Won: false})
    this.setState({player2Won: false})
    console.log('initializing gmae ')
    for (var row = 1; row<7; row++) {
      for (var col = 1; col < 8; col++){
        var position = `C${col}R${row}`
        this.setState({
          [`C${col}R${row}`]: '.'
        })
        document.getElementById(`C${col}R${row}`).style.backgroundColor = ''
      }
    }
  }

  getTopOfColumn(col) {
    console.log('col ->', col)
    var lastCoordinate;
      for ( var i = 6; i > 0; i--) {
        if (!this.state[`${col}R${i}`] || this.state[`${col}R${i}`] === '.') {
          lastCoordinate = `${col}R${i}`
          break;
        }
      }
      return lastCoordinate ? lastCoordinate: null
    }
  resetGame(){
    for (var i=1; i<7;i++) {this.state[`C1R${i}`] = '.'}
    for (var row = 1; row < 7; row++) {
      for (var col =2; col < 8; col++) {
        this.state[`C${col}R${row}`] === '.'
      }
    }
  }

  addToColumn(e) {
    e.preventDefault();
    var col = e.target.className
    var top = this.getTopOfColumn(col)
    if (this.state.player1Turn) {
      if (top) {
        var pos = top.toString()
        console.log('pos -> ', pos)
        this.state[top] = 'X'
        this.setState({player1Turn : !this.state.player1Turn})
        this.setState({player2Turn : !this.state.player2Turn})
      } else {console.log('column try again')}
    } else {
      if (top) {
        console.log('pos -> ', pos)
        this.state[top] = 'O'
        this.setState({player1Turn : !this.state.player1Turn})
        this.setState({player2Turn : !this.state.player2Turn})
      } else {console.log('column full try again')}

    }
    // get the coordinates;
    var collision = this.isCollision(this.getPiecePositions())
    if(collision[0]){
      var winner = collision[0]
      var coordinates = collision[1]
      for (var coordinate of coordinates) {
        var element = document.getElementById(coordinate)
        element.style.backgroundColor = "purple";
      }

      if (winner==='player1'){this.setState({player1Won: true})}
      else {this.setState({player2Won: true})}
    }
  }
  getPiecePositions() {
    var matrix = []
    for (var r  = 1; r < 7; r++){
      var row = []
      for (var c = 1; c < 8; c++) {row.push(this.state[`C${c}R${r}`])};matrix.push(row)};return matrix
  }

  detectCollision(matrix,r,c) {
  r-=1; c-=1
  //   console.log('r',r,'c',c)
    // check for horizontal collision
    var horizontalvalues = []
    var horizontalCoordninates = []
    for (var i = c+1; i > c - 3; i--) {horizontalvalues.push(matrix[r][i]);horizontalCoordninates.push(`C${i+1}R${r+1}`)}
    var xHorizontalCollision = horizontalvalues.reduce((acc, cv) => {if(cv === "X") {acc +=1};return acc}, 0) > 3 ? true: false
    var oHorizontalCollision = horizontalvalues.reduce((acc, cv) => {if(cv === 'O'){acc +=1};return acc}, 0) > 3 ? true: false

    if(xHorizontalCollision) return ['player1', horizontalCoordninates]
    else if(oHorizontalCollision) return ['player2', horizontalCoordninates]
    // check for vertical collision
    var verticalValues = []
    var verticalCoordninates = []
    for (var i = r+1; i > r - 3; i--) {
      if (!matrix[i]) continue
      verticalValues.push(matrix[i][c]);verticalCoordninates.push(`C${c+1}R${i+1}`)}
    var xVerticalCollision = verticalValues.reduce((acc, cv) => {if(cv === "X") {acc +=1};return acc}, 0) > 3 ? true: false
    var oVerticalCollision = verticalValues.reduce((acc, cv) => {if(cv === 'O'){acc +=1};return acc}, 0) > 3 ? true: false

    if(xVerticalCollision) return ['player1', verticalCoordninates]
    else if(oVerticalCollision) return ['player2', verticalCoordninates]

    let lrul1,lrdr1,lrdr2
    let current = matrix[r][c]
    if (matrix[r-1]) {lrul1 = matrix[r-1][c-1]}
    if (matrix[r+1]) {lrdr1 = matrix[r+1][c+1]}
    if (matrix[r+2]) {lrdr2 = matrix[r+2][c+2]}

    // check for left to right downward diagonal collision
    var lrDiagonalValues = [current,lrul1,lrdr1,lrdr2]
    var lrDiagonalCoordninates = [`C${c+1}R${r+1}`,`C${c}R${r}`,`C${r+2}R${c+2}`,`C${r+3}R${c+3}`]
    var lrxDiagonalCollision = lrDiagonalValues.reduce((acc, cv) => {if(cv === "X") {acc +=1};return acc}, 0) > 3 ? true: false
    var lroDiagonalCollision = lrDiagonalValues.reduce((acc, cv) => {if(cv === 'O') {acc +=1};return acc}, 0) > 3 ? true: false

    if(lrxDiagonalCollision) return ['player1', lrDiagonalCoordninates]
    else if(lroDiagonalCollision) return ['player2', lrDiagonalCoordninates]

    let rlur1,rldl1,rldl2
    if (matrix[r-1]) {rlur1 = matrix[r-1][c+1]}
    if (matrix[r+1]) {rldl1 = matrix[r+1][c-1]}
    if (matrix[r+2]) {rldl2 = matrix[r+2][c-2]}

    // check for right to left downward diagonal collision
    var rlDiagonalValues = [current,rlur1,rldl1,rldl2]
    var rlDiagonalCoordninates = [`C${c+1}R${r+1}`,`C${c+2}R${r}`,`C${c}R${r+2}`,`C${-1}R${r+3}`]
    var rlxDiagonalCollision = rlDiagonalValues.reduce((acc, cv) => {if(cv === "X") {acc +=1};return acc}, 0) > 3 ? true: false
    var rloDiagonalCollision = rlDiagonalValues.reduce((acc, cv) => {if(cv === 'O') {acc +=1};return acc}, 0) > 3 ? true: false

    if(rlxDiagonalCollision) return ['player1', rlDiagonalCoordninates]
    else if(rloDiagonalCollision) return ['player2', rlDiagonalCoordninates]

    return false
  }
  isCollision(matrix) {
    for (var row = 1; row < matrix.length+1; row++) {
      for (var col = 1; col < matrix.length+1; col++)  {
        var collision = this.detectCollision(matrix,row,col)
        if (collision) return collision
      }
    }
    return false
  }

  render() {
  if (this.state.player1Won) {
    return (
      <div className = "App">
        <Game
        data = {this.state}
        submit = {this.addToColumn.bind(this)}
        />
        <div className="winningHeader"> player 1 has won</div>
        <a href="#" class="myButton" onClick={() => {this.initGame()}}>restart?</a>
    </div>
    )
  }
  if (this.state.player2Won) {

    return (
      <div className = "App">
        <Game
        data = {this.state}
        submit = {this.addToColumn.bind(this)}
        />
        <h1 className="winningHeader"> player 2 has won </h1>
        <a href="#" class="myButton" onClick={() => {this.initGame()}}>restart?</a>
    </div>
    )
  } else {
      return (
      <div className = "App" style={{
        }}>
      <Game
      data = {this.state}
      submit = {this.addToColumn.bind(this)}
      />
      <div className="winningHeader"> it is player {
        this.state.player1Turn ? 1: 2}'s turn </div>
        <a href="#" class="myButton" onClick={() => {this.initGame()}}>restart?</a>

      </div>
      )
    }
  }
}
var root = document.getElementById('root')
ReactDOM.render(<App/>,root)

export default App