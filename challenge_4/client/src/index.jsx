import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game.jsx';

var element = <h2> hello world </h2>

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // column 1
      C1R1 : '',
      C1R2 : '',
      C1R3 : '',
      C1R4 : '',
      C1R5 : '',
      C1R6 : '',
      // column 2
      C2R1 : '',
      C2R2 : '',
      C2R3 : '',
      C2R4 : '',
      C2R5 : '',
      C2R6 : '',
      // column 3
      C3R1 : '',
      C3R2 : '',
      C3R3 : '',
      C3R4 : '',
      C3R5 : '',
      C3R6 : '',
      // column 4
      C4R1 : '',
      C4R2 : '',
      C4R3 : '',
      C4R4 : '',
      C4R5 : '',
      C4R6 : '',
      // column 5
      C5R1 : '',
      C5R2 : '',
      C5R3 : '',
      C5R4 : '',
      C5R5 : '',
      C5R6 : '',
      // column 6
      C6R1 : '',
      C6R2 : '',
      C6R3 : '',
      C6R4 : '',
      C6R5 : '',
      C6R6 : '',
      player1Turn: true,
      player2Turn: false,
      player1Won: false,
      player2Won: false
    } // state
  } // constructor

  getTopOfColumn(col) {
    var lastCoordinate;
     for ( var i = 6; i > 0; i--) {
       if (!this.state[`${col}R${i}`]) {
        lastCoordinate = `${col}R${i}`
        break;
       }
     }
     return lastCoordinate ? lastCoordinate: null
    }

  addToColumn(e) {
    e.preventDefault();
    var col = e.target.className
    var top = this.getTopOfColumn(col)
    if (this.state.player1Turn) {
      if (top) {
        var pos = top.toString()
        console.log('top -> ', top)
        console.log('pos -> ', pos)
        this.state[top] = 'x'
        this.setState({player1Turn : !this.state.player1Turn})
        this.setState({player2Turn : !this.state.player2Turn})
      }
      console.log('column full play again')
    } else {
      if (top) {
        this.state[top] = 'o'
        this.setState({player1Turn : !this.state.player1Turn})
        this.setState({player2Turn : !this.state.player2Turn})
      }
      console.log('column full play again')
    }
    this.horizontalCollision()
  }



  horizontalCollision() {
    var collision = false;
    var x = 0
    var o = 0
    for (var col = 1; col < 8; col++) {
      for (var row = 1; row < 7; row ++) {
        var pos = `C${col}R${row}`
        console.log('pos -> ', pos)
        if (this.state[pos] === 'X') { x += 1}
        if (this.state[pos] === 'O') { y += 1}
      }
      if (x >= 4) {
        collision = true
        this.setState({player1Won : true})
        console.log('player1Won!')

      }
      if (o >= 4) {
        collision = true
        this.setState({player2Won : true})
        console.log('player2Won!')
      }
      x = 0
      o = 0
    }
    console.log('collision? -> ', collision)
    return collision
  }
  verticalCollision() {
    var collision = false;

    // iterate over columns to get al C


    // iterate over row in col1


  }
  diagonalCollision() {
    var collision = false;



    return collision
  }

  render() {
    return (
     <Game
     data = {this.state}
     submit = {this.addToColumn.bind(this)}
     />
    )
  }
}
var root = document.getElementById('root')
ReactDOM.render(<App/>,root)
