import React, { Component } from 'react';
import Useroutput from '../Useroutput/Useroutput';

class Userinput extends Component {
  state = {
    person: [{ name: 'vandhu', age: '22' },{name: 'chandhu', age: '24'}],
    person1:[{ name: 'vandhu1', age: '221' },{name: 'chandhu1', age: '241'},{name: 'nivu1', age: '241'}]
  }
  onHandler = () => {
    console.log('clicked');
    this.setState({
      person: [{ name: 'harshitha', age: '25' },{name:"bindhu" , age:'23'}],
      person1:[{ name: 'vandhu2', age: '222' },{name: 'chandhu2', age: '242'},{name: 'nivu2', age: '242'}]
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.onHandler}>click here</button>
    <p>hi {this.state.person[0].name} my age is{this.state.person[0].age}</p>
    <p>hello{this.state.person[1].name}my age is{this.state.person[1].age}</p>
        <input className="submit" type="text" name="name" placeholder="Email or phone number" /><br/>
        <input className="submit" type="text" name="name" placeholder="adress" /><br/>
        <input className="submit" type="text" name="name" placeholder="password" /><br/>



        <Useroutput name={this.state.person1[0].name} age={this.state.person1[0].age} />
        <Useroutput name={this.state.person1[1].name} age={this.state.person1[1].age} />
        <Useroutput name={this.state.person1[2].name} age={this.state.person1[2].age} />
      
      </div>

    );
  }
}

export default Userinput;
