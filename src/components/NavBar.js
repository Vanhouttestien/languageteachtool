import React from 'react'
import {Navbar, Container, Nav} from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return(
    <Navbar className={styles.NavBar} bg="primary" variant="dark" expand="md" fixed='top'>
      <NavLink to="/"><Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand></NavLink>   
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto text-left">
                  <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/">Home</NavLink>
                  <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signin">Sign in</NavLink>
                  <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signup">Sign up</NavLink>  
                </Nav>
            </Navbar.Collapse>
    </Navbar>
  )
};

export default NavBar