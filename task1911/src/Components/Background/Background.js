import React, { Component } from 'react';
import Button from './Button';

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.changeColor = this.changeColor.bind(this);
    this.state = {
      color: 'red'
    };
  }
  changeColor() {
    this.setState((prevState, props) => ({
      color: prevState.color === 'red' ? 'blue' : 'red'
    }));
  }
  render() {
    return (
      <div style={{ height: '200px', width: '200px', backgroundColor: this.state.color }}>
        <Button clickHandler={this.changeColor} currentColor={this.state.color}></Button>
      </div>
    )
  }
}
export default Background;






