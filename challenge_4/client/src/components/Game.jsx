import React from 'react';

const Game = (props) => {

  const createButtons = () =>{
    var columns=[]
    for (var i = 1; i < 8; i++) {
      columns.push(<td
        style={{padding:'10px', textAlign: 'center'}}
      ><button className={`C${i}`}  type = "submit" onClick= {props.submit} > drop </button></td>)
    }
    return (<tr className = 'tr'>{columns}</tr>)
  }

  const createTable = () =>{
    var rows = []
    for (var r = 1; r < 7; r++) {
      var row = []
      for (var c = 1; c < 8; c++) {
        var column =  (<td
          id={`C${c}R${r}`}
          style={{padding:'10px'}}
          className = 'td'
          >{props.data[`C${c}R${r}`]}</td>)
        row.push(column)
      }
      rows.push(<tr className='tr'>{row}</tr>)
    }
    return (
      <table className ="table">
        <thead>{createButtons()}</thead>
        <tbody>{rows}</tbody>
      </table>
      )
  }
  return (createTable())
}
export default Game
