import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <Navbar sticky="top" bg="light">
      <Navbar.Brand>Timbr</Navbar.Brand>
      <Navbar.Collapse>
        <Link to="/">Home</Link> 
        <Link to="/mytrees">My Trees</Link>
        <Link to="/alltrees">All Trees</Link>
        <Link to="/profile">Profile</Link>
        <Link to="login">Log In</Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
