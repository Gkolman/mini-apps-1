import React from 'react';

var Game = (props) => {
//
  console.log('props in game ->', props)
  return (
    <table className ="table">
      <thead>
      <tr className = 'tr'>
        <td> <button className = "C1" type = "submit" onClick= {props.submit} > drop </button> </td>
        <td> <button className = "C2" type = "submit" onClick= {props.submit} > drop </button> </td>
        <td> <button className = "C3" type = "submit" onClick= {props.submit} > drop </button> </td>
        <td> <button className = "C4" type = "submit" onClick= {props.submit} > drop </button> </td>
        <td> <button className = "C5" type = "submit" onClick= {props.submit} > drop </button> </td>
        <td> <button className = "C6" type = "submit" onClick= {props.submit} > drop </button> </td>
        <td> <button className = "C7" type = "submit" onClick= {props.submit} > drop </button> </td>
      </tr>
      </thead>
      <tbody>
      <tr className = 'tr'>
        <td className = 'td'> {props.data.C1R1} </td>
        <td className = 'td'> {props.data.C2R1} </td>
        <td className = 'td'> {props.data.C3R1} </td>
        <td className = 'td'> {props.data.C4R1} </td>
        <td className = 'td'> {props.data.C5R1} </td>
        <td className = 'td'> {props.data.C6R1} </td>
        <td className = 'td'> {props.data.C7R1} </td>
      </tr>
      <tr className = 'tr'>
        <td className = 'td'> {props.data.C1R2} </td>
        <td className = 'td'> {props.data.C2R2} </td>
        <td className = 'td'> {props.data.C3R2} </td>
        <td className = 'td'> {props.data.C4R2} </td>
        <td className = 'td'> {props.data.C5R2} </td>
        <td className = 'td'> {props.data.C6R2} </td>
        <td className = 'td'> {props.data.C7R2} </td>

      </tr>
      <tr className = 'tr'>
        <td className = 'td'> {props.data.C1R3} </td>
        <td className = 'td'> {props.data.C2R3} </td>
        <td className = 'td'> {props.data.C3R3} </td>
        <td className = 'td'> {props.data.C4R3} </td>
        <td className = 'td'> {props.data.C5R3} </td>
        <td className = 'td'> {props.data.C6R3} </td>
        <td className = 'td'> {props.data.C7R3} </td>
      </tr>
      <tr className = 'tr'>
        <td className = 'td'> {props.data.C1R4} </td>
        <td className = 'td'> {props.data.C2R4} </td>
        <td className = 'td'> {props.data.C3R4} </td>
        <td className = 'td'> {props.data.C4R4} </td>
        <td className = 'td'> {props.data.C5R4} </td>
        <td className = 'td'> {props.data.C6R4} </td>
        <td className = 'td'> {props.data.C7R4} </td>

      </tr>
      <tr className = 'tr'>
        <td className = 'td'> {props.data.C1R5} </td>
        <td className = 'td'> {props.data.C2R5} </td>
        <td className = 'td'> {props.data.C3R5} </td>
        <td className = 'td'> {props.data.C4R5} </td>
        <td className = 'td'> {props.data.C5R5} </td>
        <td className = 'td'> {props.data.C6R5} </td>
        <td className = 'td'> {props.data.C7R5} </td>

      </tr>
      <tr className = 'tr'>
        <td className = 'td'> {props.data.C1R6} </td>
        <td className = 'td'> {props.data.C2R6} </td>
        <td className = 'td'> {props.data.C3R6} </td>
        <td className = 'td'> {props.data.C4R6} </td>
        <td className = 'td'> {props.data.C5R6} </td>
        <td className = 'td'> {props.data.C6R6} </td>
        <td className = 'td'> {props.data.C7R6} </td>
      </tr>
      </tbody>
    </table>
  )
}
export default Game
