import React, { Component } from 'react';
import '../Signin/Signin.css';

class Signin extends Component {
    render() {
        return (
            <div class="main">
                <div>
                    LOGIN FORM
                </div>
                <div>
                <form class="form">
                    <div>
                        <label>
                            <input  class="submit" type="text" name="name" placeholder="Email or phone number"/>
                        </label>
                    </div><br></br>
                    <div>
                        <label>
                            <input  class="submit" type="text" name="name" placeholder="Password"/>
                        </label>
                    </div><br></br>
                    <div >
                    <button class="submit" type="submit">Login</button>
                    </div><br></br>
                    <div>
                    <label>remember</label>
                    <input class="remember" type="checkbox" checked="checked" name="remember"></input>
                    Forgot password?
                    </div><br></br>
                    <div>
                        create a new account
                    </div>
                    <div>
                        (or)
                    </div>
                    
                </form>
                </div>
                
            </div>
        );
    }
}

export default Signin;