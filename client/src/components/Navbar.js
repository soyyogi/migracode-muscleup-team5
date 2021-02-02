import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';


const Navbar = () =>{
    return (
        <div>
             <div className="nav">
      <div className="container">
         <Link to="/"> <div className="addedlogo">
        <img src="https://brandslogos.com/wp-content/uploads/thumbs/golds-gym-logo-vector.svg" width="70px"></img>
        <h1 className="logo">MuscleUp</h1>
        </div></Link>
        <ul>
          <li><Link to="/"><p  className="current">Home</p></Link></li>
          <li><Link to="/login"><p>Login</p></Link></li>
          <li><p >About</p></li>
          <li><p >Services</p></li>
          <li><p>Contact</p></li>
        </ul>
      </div>
    </div>
        </div>
    )
}




export default Navbar;

