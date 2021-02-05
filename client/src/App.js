import React from 'react';

import './App.css';
import ProductScreen from './components/ProductScreen';
import ProductsScreen from './components/ProductsScreen'
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from "./Components/Header";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App(props) {
  
  return (
    <Router>
    <div className="App">
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
    
    </div>
    </Router>
  );
}

export default App;
