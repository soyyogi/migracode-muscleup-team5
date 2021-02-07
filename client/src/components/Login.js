import React from 'react';
import Navbar from './Navbar'
import Gymlogo from '../gymlogo.svg'
import {Link} from 'react-router-dom';
import './Login.css';

const Login = () => {

    function test(){
        console.log("is this working")

        let book ={
            BookId:1,
            Title: "coolBook",
            Author: "Me"
        }

        const sendmethod = {
            method: 'POST', 
            body: JSON.stringify(book),
            headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        }
        fetch("http://localhost:5000/auth",sendmethod)
        .then((res) => res.json())
        .then((message) => console.log(message))
    }




    return (
        <div>
            <Navbar/>
            <div className="main">
                <div className="forcolor">
        <form className="box" action="index.html" method="POST">
            <div className="hia">
           <Link to="/"><img src={Gymlogo} alt="instagram" width="150"></img></Link>
            <input type="text" name="" placeholder="Username, or Email"></input>
            <input type="password" name="" placeholder="Password"></input>
            <button className="loginbutton">Login</button>
            </div>

            <h6><span>OR</span></h6>
            
        <div className="boxttom">
            <button className="logfb" width="50px">Log in with facebook</button>
            <a href="https://instagram.com" className="small">Forgot password?</a>

            
            <p>Don't have an account? <Link to="signup">
                <button onClick={test} className="signup">Sign up</ button>
            </Link></p>
        </div>
        </form>
        
        
        
        </div>
       
    </div>
        </div>
    )
}

export default Login;