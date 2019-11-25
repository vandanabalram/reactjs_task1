import React, { Component } from 'react';
class Add extends Component {
  state = {
    value1: 10,
    value2: 10,
    value3: 10
  }

  subtraction = () => {
    if (this.state.value1 > 0) {
      this.setState({
        value1: this.state.value1 - 5
      })
    }
  }
  addition = () => {
    this.setState({
      value2: this.state.value2 + 5
    })
  }
  multiplication = () => {
    this.setState({
      value3: this.state.value3 * 5
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.subtraction}>subraction</button>
        <div>{this.state.value1}</div>
        <button onClick={this.addition}>addition</button>
        <div>{this.state.value2}</div>
        <button onClick={this.multiplication}>multiplication</button>
        <div>{this.state.value3}</div>
      </div>
    );
  }
}
export default Add;






