import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signin from './Components/Signin/Signin';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Signup from './Components/Signup/Signup';
import Lifecycle from './Components/Lifecycle/Lifecycle';


function App() {
  return (
    <div className="App">
      <Router>
        <switch>
          <Route exact path ='/' component={Lifecycle}></Route>
          <Route exact path ='/signup' component={Signup}></Route>
          <Route exact path ='/signin' component={Signin}></Route>
        
        </switch>

      </Router>
      
    </div>
  );
}

export default App;
