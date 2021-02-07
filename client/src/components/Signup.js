
import React , {useState} from 'react';
import './Signup';
import './Signup.css';
import Navbar from './Navbar';
import Gymlogo from '../gymlogo.svg'
import {Redirect, Route, Link, useHistory } from 'react-router-dom'

const Signup = () => {

    let history = useHistory();

    const [inputList, setInputList] = useState(<h1 id="maybe"> no message </h1>);

    const [loginCredentials, setLoginCredentials] = useState({
        name: "",
        email : "",
        password: "",
        loggedIn : false
    })

    const handleFunction  =(e)=>{
        setLoginCredentials({...loginCredentials , [e.target.name] : e.target.value})

    }

    function submitForm(e){
        e.preventDefault();

        const {email , password} = loginCredentials;

        console.log(loginCredentials)

        const sendmethod = {
            method: 'POST', 
            body: JSON.stringify(loginCredentials),
            headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        }
        fetch("http://localhost:5000/sign",sendmethod)
        .then((res) => res.json())
        .then((message) => checkLogin(message))

        console.log("welcomeded")
    }

    function checkLogin(m){

        if (m.loggedin ) {
            setInputList(<h1> loggeado </h1>);

            setTimeout(function(){ 
                history.push('/')
            }, 1000);

        }else{
            setInputList(<h1> not logged yet </h1>);
        }

    }    

    return (
        <div>
        <Navbar/>

        <div className="main">
            <div className="forcolor">
            
            <form className="box" onSubmit={submitForm}>
                <div className="hia">
                <Link to="/"><img src={Gymlogo} alt="instagram" width="150"></img></Link>

                    <input type="text" name="name" value={loginCredentials.name} onChange={handleFunction} placeholder="Username"></input>
                    <input type="text" name="email" value={loginCredentials.email} onChange={handleFunction} placeholder="Email"></input>
                    <input type="password" name="password" value={loginCredentials.password} onChange={handleFunction} placeholder="Password"></input>

                    <button className="loginbutton">Signup</button>
                    {inputList}
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