import React, { Component } from 'react';
import '../Signin/Signin.css';
import images from '../profile.jpeg';
import { SocialIcon } from 'react-social-icons';

class Signin extends Component {
  render() {
    return (
      <div class="main">

        <div className="login">
          SIGNIN FORM
         </div>
        <img className="img" src={images} />
        <div>
          <form className="form">
            <div>
              <label>
                <input className="submit" type="text" name="name" placeholder="Email or phone number" />
              </label>
            </div><br></br>
            <div>
              <label>
                <input className="submit" type="text" name="name" placeholder="Password" />
              </label>
            </div><br></br>
            <div >
              <button className="submitt" type="submit">Login</button>
            </div><br></br><br></br>
            <div>
            <input class="remember" type="checkbox" name="remember"></input>

              <span className="remember">remember</span>
              <span className="forget">Forgot password?</span>
                    </div><br></br>
            <div className="account">
              create a new account
                    </div>
            <div  className="account">
              (or)
                    </div>
            <div className="icon">
              <SocialIcon className="icons" url="http://twitter.com/jaketrent" />
              <SocialIcon className="icons" url="http://facebook.com/jaketrent" />
              <SocialIcon className="icons" url="http://google.com/jaketrent" />
            </div>

          </form>
        </div>

      </div>
    );
  }
}

export default Signin;