import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import ProductsScreen from "./Screens/ProductsScreen";
import ProductScreen from "./Screens/ProductScreen";


function App(props) {
  
  return (
    <BrowserRouter>
    <div>
    <Header/>
    

    </div>
    <Route path="/product/:id" component={ProductScreen}/>
    <Route path="/" exact={true} component={ProductsScreen}/>
    </BrowserRouter>
  
  )}

export default App;
