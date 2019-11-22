import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Userinput from './Components/Userinput/Userinput';
// import Signin from './Components/Signin/Signin';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Add from './Components/Add/Add';
// import Lifecycle from './Components/Lifecycle/Lifecycle';
// import Signup from './Components/Signup/Signup';
// import Lifecycle from './Components/Lifecycle/Lifecycle';


function App() {
  return (
    <div className="App">
       <Router>
        <switch>

            <Route exact path ='/' component={Add}></Route>
          {/* <Route exact path ='/' component={Userinput}></Route> */}
          {/* <Route exact path ='/signup' component={Signup}></Route>
          <Route exact path ='/signin' component={Signin}></Route> */}
        
        </switch>

      </Router> 
     
      
    </div>
  );
}

export default App;
