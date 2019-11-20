import React, { Component } from 'react';
import '../Signup/Signup.css';

class Signup extends Component {
  render() {
    return (
      <div class="main">
        <div className="content">
          SIGNUP FORM
                </div>
        <div class="div1">
          <label>
            <input class="submit" type="text" name="name" placeholder="Firstname" />
          </label>

        </div><br></br>
        <div>
          <label>
            <input class="submit" type="text" name="name" placeholder="Lastname" />
          </label>
        </div><br></br>
        <div>
          <label>
            <input class="submit" type="text" name="name" placeholder="vandhu04@gmail" />
          </label>
        </div> <br></br>
        <div>
          <label>
            <input class="submit" type="text" name="name" placeholder="please enter a phone" />
          </label>
        </div> <br></br>
        <div>
          <label>
            <input class="submit" type="text" name="name" placeholder="password" />
          </label>
        </div> <br></br>
        <div>
          <label>
            <input class="submit" type="text" name="name" placeholder="conform password" />
          </label>
        </div> <br></br>
        <div>
          <label className="name">I agree to <span className="name"><b>Terms</b></span>and<span><b>conditions</b></span></label>
          <input class="remember" type="checkbox" name="remember"></input>
        </div><br></br>
        <div>
          <button class="signup" type="submit">Signup</button>
        </div><br></br>
        <div >
                    <a className="clickme" href='/signin'>Click here to signin</a>
        </div>
        
      </div>
    );
  }
}

export default Signup;