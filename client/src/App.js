import React from 'react';

import './App.css';
import ProductScreen from './Components/ProductScreen';
import ProductsScreen from './Components/ProductsScreen'
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
//import { BrowserRouter , Link } from "react-router-dom";
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
