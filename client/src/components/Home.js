import React from 'react';
import Navbar from './Navbar';

import './Home.css';

const Home = () =>{
    return (
        <div>
           <Navbar/>
           <div className="homediv">
           <h1><span>Muscle</span> <img src="https://brandslogos.com/wp-content/uploads/thumbs/golds-gym-logo-vector.svg" width="150px"></img><span>Up</span></h1>
          
           
           </div>
        </div>
    )
}

export default Home;