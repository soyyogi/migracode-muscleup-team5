import React from "react";
import categories from "../data/Categories.json";

function Header(props) {
  return (
    <div className="grid-container">
    
    <header className="header">
    
    <div className= "brand">
        <a href="/">Muscleup.com</a>
    </div>

    <div className= "header-links">
        <a href="cart.html">Cart</a>
        <a href="sigin.html">Sign in</a>
    </div>
</header>

<ul className="header-list-categories"> {categories.map(category =>
      <li className="categories-links">
      <div>{category.name}</div>
      </li>
      )}
    </ul>


</div>
  )  
};

export default Header;