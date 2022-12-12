import React from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Home.module.css";

const HomePage = () => {
  const currentUser = useCurrentUser();
  const loggedIn = (
    <>
      <p>
        <Link to="/findmaterial">
          <Button variant="primary">Find materials</Button>
        </Link>
      </p>
    </>
  );



  const loggedOut = (
    <>
      <p>
        To find and share materials you need to be loggedin. Loggin or create an
        account
      </p>
      <Link to="/signin">
        <Button variant="primary" className="m-5 px-2">
          {" "}
          Sign in
        </Button>
      </Link>

      <Link to="/signup">
        <Button variant="primary" className="m-2">
          {" "}
          Sign up
        </Button>
      </Link>
    </>
  );
  return (
    <>
      <Jumbotron className={styles.Jumbotron}>
        <div className={styles.Center}>
          <h1>The Teachers Lounge</h1>
          <p>
            Find teaching materials from all over the world in 20 different
            languages.
          </p>
          <p>And share your own materials to improve world wide access.</p>
          {currentUser ? loggedIn : loggedOut}
        </div>
      </Jumbotron>
    </>
  );
};

export default HomePage;
