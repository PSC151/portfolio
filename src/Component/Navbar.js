import React from "react";
import {Navbar, Nav, NavLink} from "react-bootstrap";
import {Link} from "react-router-dom";

function MainNavbar(){
    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand><Link to="/" > Paul Chana </Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavLink><Link to="/" >About</Link></NavLink>
      <NavLink><Link to="/portfolio" >Portfolio</Link></NavLink>
      <NavLink><Link to="/contact" >Contact</Link></NavLink>
     
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}




export default MainNavbar;