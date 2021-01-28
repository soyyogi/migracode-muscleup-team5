import React , {useState} from 'react';
//import Header from './Header';
import {Redirect} from 'react-router-dom'

//import auth from './Auth';
//import { useHistory } from 'react-router-dom';
// const history = useHistory();

// const handleLoging =(e) => {

//     e.preventDefault();
//     auth.login(()=>{
//         history.push("/AdminTable");
//     });
    
//     console.log(auth.authenticated)
// }

const Login = (props) => {
    

    const [loginCredentials, setLoginCredentials] = useState({
        email : "",
        password: "",
        loggedIn : false
    })

    const handleFunction  =(e)=>{
        setLoginCredentials({...loginCredentials , [e.target.name] : e.target.value})
        console.log("we change the said name with said value")
    }

    const checkLogin  =(m)=>{
        console.log(m);
        if (m.loggedin) {
            console.log(m.username);
            loginCredentials.loggedIn = true;
            return <Redirect to="/" />
        }
        else {
            console.log("invalid username or password");
            return (
                <p>invalid username or password</p>
        );
        } 
    }
    
    const submitForm = (e) =>{
        console.log("tryin to post")

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
        fetch("http://localhost:5000/auth",sendmethod)
        .then((res) => res.json())
        .then((message) => checkLogin(message))

        console.log("acabo fetch");
        //if (email === "a@ton.com" && password === "b") {

        //    console.log(email, password);
        //    localStorage.setItem("token","aketeloneto");
        //    setLoginCredentials({...loginCredentials , loggedIn : true});
        //}
    }

    if (loginCredentials.loggedIn) {
        
        return <Redirect to="/AdminTable" />
    }
    else{

        return (
            <div>
            <div className="container-form">
                <h1>Login</h1>
                <h2>Setting up the information </h2>


                <form onSubmit ={submitForm} > 
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={loginCredentials.email} onChange={handleFunction}/>

                    <label htmlFor="password">Wachtwoord</label>
                    <input type="password" name="password" value={loginCredentials.password} onChange={handleFunction}/>

                    <button type="submit" className="big-button">Login</button>
                </form>
            </div>
        </div>
    );
}
}

export default Login;
