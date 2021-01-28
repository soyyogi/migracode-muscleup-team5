import logo from './logo.svg';
import './App.css';
import React,{ useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./login.js";


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/login" component={Login} />
        
        <li>
          <Link to="/Login">Blog</Link>
        </li>

      </Router>
    </div>
  );
}

export default App;
