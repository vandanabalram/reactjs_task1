import React, { Component } from 'react';

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    debugger;
    console.log('vandanabalram');
  }
  componentDidMount() {
    debugger;
    console.log('after willmount');
  }
  componentWillMount() {
    debugger;
    console.log(' willmount');
  }
  render() {
    return (
      <div>
        <h1>this is life cycle component</h1>
        <h1>willmount</h1>
      </div>
    );
  }
}

export default Lifecycle;