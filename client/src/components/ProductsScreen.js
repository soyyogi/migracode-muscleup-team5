import React from "react";
import Navbar from './Navbar';
import { BrowserRouter, Route, Link } from "react-router-dom";
import products from "./Products.json";

function ProductsScreen(props) {
  return ( <div>
    <Navbar/>
        <ul className="products"> {products.map(product =>
      <li>
      <div className="product">
      <Link to={"/product/" + product._id}><img class = "product-image" src={product.image} alt="product"/></Link>
      <div className= "product-name-container">
      <div className="product-name">{product.name}</div>
      <div className="product-category"> ({product.category})</div>
      </div> 
      <div className="product-brand">{product.brand}</div>
      <div className="product-rating">{product.rating} Stars ({product.numReviews}) </div>
      <div className="product-price">${product.price}</div>
      </div> 
      </li>
      )}
    </ul> 
  </div>);
}

export default ProductsScreen;
