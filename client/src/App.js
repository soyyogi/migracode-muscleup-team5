import React from 'react';

import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
     
      <Switch>
        <Route 
          path='/login'>
          <Login/>  
        </Route>
        <Route
          path='/signup'>
          <Signup/>
        </Route>
        <Route
        path='/'>
        <Home/>  
        </Route>
      </Switch>
    
    </div>
    </Router>
  );
}

export default App;
