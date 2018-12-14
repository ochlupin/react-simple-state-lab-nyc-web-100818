import React, { Component } from "react";
import Cell from './Cell.js';

export default class Matrix extends Component {

  genRow  = vals => (
    vals.map(val => <Cell value={val} />)
  )
  
  genMatrix = () =>
    this.props.values.map(rowVals => (
      <div className="row">{this.genRow(rowVals)}</div>
    ));

  render() {
    return <div id="matrix">{this.genMatrix()}</div>;
  }

}

Matrix.defaultProps = {
  // sets the default value for Matrix component props
  values : (()=>{
    // row is set to equal the default value of one row in our matrix
    const row = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    // then we call on a new Array constructor to generate 10 default rows
    return (new Array(10).fill(row))
  })()
}