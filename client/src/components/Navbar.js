import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import Gymlogo from '../gymlogo.svg'


const Navbar = () =>{
    return (
        <div>
             <div className="nav">
      <div className="container">
         <Link to="/"> <div className="addedlogo">
        <img src={Gymlogo} width="70px"></img>
        <h1 className="logo">MuscleUp</h1>
        </div></Link>
        <ul>
          <li><Link to="/"><p  className="current">Home</p></Link></li>
          <li><Link to="/login"><p>Login</p></Link></li>
          <li><Link to="/productsscreen"><p >Products</p></Link></li>
          <li><p >About</p></li> 
          <li><p>Contact</p></li>
        </ul>
      </div>
    </div>
        </div>
    )
}




export default Navbar;

