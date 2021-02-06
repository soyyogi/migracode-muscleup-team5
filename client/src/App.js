import React from 'react';

import './App.css';
<<<<<<< HEAD
import React,{ useState } from "react";
import './App.css';
=======
import ProductScreen from './components/ProductScreen';
import ProductsScreen from './components/ProductsScreen'
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from "./Components/Header";

>>>>>>> b78eaf2af03ed5a268038e3795ff82ced65b96c8
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
<<<<<<< HEAD
import Login from "./login.js";
=======
>>>>>>> b78eaf2af03ed5a268038e3795ff82ced65b96c8


function App(props) {
  
  return (
    <Router>
    <div className="App">
<<<<<<< HEAD
      <Router>
        <Route path="/login" component={Login} />
        
        <li>
          <Link to="/Login">Blog</Link>
        </li>

      </Router>
=======
    <Header/>
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
        path='/'
        exact >
        <Home/>  
        </Route>
        <Route
        path="/productscreen">
          <ProductScreen/>
        </Route>
        <Route path="/product/:id" component={ProductScreen}/>
        <Route path="/productsscreen">
        <ProductsScreen/>
        </Route>
      </Switch>
    
>>>>>>> b78eaf2af03ed5a268038e3795ff82ced65b96c8
    </div>
    </Router>
  );
}

export default App;
