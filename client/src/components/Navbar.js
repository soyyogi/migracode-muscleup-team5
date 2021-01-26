import React from 'react';
import Nav from 'react-bootstrap/Nav';

// import './Navbar.css'

const Navbar = () => {
  
    return(
      <Nav className="justify-content-center navBar" activeKey="/home" >
        <Nav.Item>
          <Nav.Link href="/home" className="navItem text-dark">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/" className="navItem text-dark">Products</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/" className="navItem text-dark">Best Sellers</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/" className="navItem text-dark">Sign In</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/" className="navItem text-dark">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/" className="navItem text-dark">Contact</Nav.Link>
        </Nav.Item>
    </Nav>
    )
}

export default Navbar;

//When you click on a link created with react-router-hash-link it will scroll to the element on the page with the id that matches the #hash-fragment in the link.