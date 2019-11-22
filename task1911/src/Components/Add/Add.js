import React, { Component } from 'react';

class Add extends Component {
  state = {
    Users: [
      { value: 10 },
    ],
    Users1: [
      { value: 10 },

    ],
    Users2: [
      { value: 10 },

    ],
  }

  add = () => {
    const newState = this.state.Users.map((User) => {
      const tempUser = User;
      tempUser.value += 5;
      return tempUser;
    })
    console.log(newState);
    this.setState({ newState });
  }
  sub = () => {
    const newState1 = this.state.Users1.map((User1) => {
      const tempUser1 = User1;
      tempUser1.value -= 5;
      return tempUser1;
    })
    console.log(newState1);
    this.setState({ newState1 });
  }



  mul = () => {
    const newState2 = this.state.Users2.map((User2) => {
      const tempUser2 = User2;
      tempUser2.value *= 5;
      return tempUser2;
    })
    console.log(newState2);
    this.setState({ newState2 });
  }
  render() {
    return (
      <div>
        <div>
          <button onClick={this.add}>add</button>
          <br />

          {
            this.state.Users.map((User) => (
              <div>value={User.value} </div>
            ))
          }
        </div><br></br>

        <div>
          <button onClick={this.sub}>sub</button>
          <br />

          {
            this.state.Users1.map((User1) => (
              <div>value={User1.value}</div>
            ))
          }
        </div><br></br>
        <div>
          <button onClick={this.mul}>Multiply</button>
          <br />

          {
            this.state.Users2.map((User2) => (
              <div>value={User2.value}</div>
            ))
          }
        </div>
      </div>
    )
  }
}



export default Add;