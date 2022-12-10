import React, { useEffect } from "react";
import { Navbar, Nav, Badge } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const addPostIcon = (
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/posts/create"
    >
      Share material
    </NavLink>
  );
  const loggedInIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/findmaterial"
      >
        Find materials
      </NavLink>
      {currentUser && addPostIcon}
      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        Sign out
      </NavLink>
      <NavLink className={styles.Welcome} to={`/profiles/${currentUser?.pk}/`}>
        <Badge variant="secondary">{currentUser?.username}</Badge>
      </NavLink>
    </>
  );
  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        Sign in
      </NavLink>

      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signup"
      >
        Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar
      expanded={expanded}
      className={styles.NavBar}
      bg="dark"
      variant="dark"
      expand="md"
      fixed="top"
    >
      <NavLink to="/">
        <Navbar.Brand>
          The teachers Lounge
        </Navbar.Brand>
      </NavLink>
      <Navbar.Toggle ref={ref} aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
      <Navbar.Collapse
        
        id="basic-navbar-nav"
      >
        <Nav className="ml-auto text-left">
          <NavLink
            exact
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/"
          >
            Home
          </NavLink>
          {currentUser ? loggedInIcons : loggedOutIcons}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
