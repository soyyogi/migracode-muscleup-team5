
import React from 'react';
import './Signup';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';

const Signup = () => {
    return (
        <div>
        <Navbar/>
        <div className="main">
            <div className="forcolor">
    <form className="box" action="index.html" method="POST">
        <div className="hia">
        <img src="https://brandslogos.com/wp-content/uploads/thumbs/golds-gym-logo-vector.svg" alt="instagram" width="150"></img>
        <input type="text" name="" placeholder="Username"></input>
        <input type="text" name="" placeholder="Email"></input>
        <input type="password" name="" placeholder="Password"></input>
        <button className="loginbutton">Signup</button>
        </div>

        <h6><span>OR</span></h6>
        
        <div className="boxttom">
        <button className="logfb" width="50px">Sign up with Facebook</button>
        <Link to="login"><p className="login">Login</p></Link>
        </div>
       

        
    </form>
    
    
    
    </div>
   
</div>
    </div>
    )
}

export default Signup;