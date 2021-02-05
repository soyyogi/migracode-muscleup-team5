import React from 'react';
import Navbar from './Navbar';
import Gymlogo from '../gymlogo.svg'
import {Link} from 'react-router-dom';
import './Home.css';

const Home = () =>{
    return (
        <div>
           <Navbar/>
           <div className="homediv">
           <h1><span >Muscle</span> <img src={Gymlogo} width="150px"></img><span >Up</span></h1>
          
           
           </div>

          <Link to="/login"> <button className="und">Login</button></Link>
        </div>
    )
}

export default Home;