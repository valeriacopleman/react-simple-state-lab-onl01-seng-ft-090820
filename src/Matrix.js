import React, { Component } from 'react';

export default class Matrix extends Component {
  
  genRow = (vals) => {
    //return vals.map(val => <div className="cell"></div>) // replace me and render a cell component instead!
    return (
    <div className="matrix">
      {this.props.vals()}
    </div>
    )
  }
  
  genMatrix = () => {
    return this.props.values.map(rowVals => <Cell value={val} />)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}
