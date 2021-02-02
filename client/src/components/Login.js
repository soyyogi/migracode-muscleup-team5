import React from 'react';
import Navbar from './Navbar'
import {Link} from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div>
            <Navbar/>
            <div className="main">
                <div className="forcolor">
        <form className="box" action="index.html" method="POST">
            <div className="hia">
            <img src="https://brandslogos.com/wp-content/uploads/thumbs/golds-gym-logo-vector.svg" alt="instagram" width="150"></img>
            <input type="text" name="" placeholder="Username, or Email"></input>
            <input type="password" name="" placeholder="Password"></input>
            <button className="loginbutton">Login</button>
            </div>

            <h6><span>OR</span></h6>
            
        <div className="boxttom">
            <button className="logfb" width="50px">Log in with facebook</button>
            <a href="https://instagram.com" className="small">Forgot password?</a>

            
            <p>Don't have an account? <Link to="signup"><a className="signup">Sign up</a></Link></p>
        </div>
        </form>
        
        
        
        </div>
       
    </div>
        </div>
    )
}

export default Login;