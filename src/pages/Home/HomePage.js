import React from "react";
import { Button, Container, Jumbotron } from "react-bootstrap";
import styles from "../../styles/Home.module.css";

const HomePage = () => {
  return (
    <>
    <Jumbotron className={styles.Jumbotron}>
      <div className={styles.Center}>
        <h1 >The Teaching Lounge</h1>
        <p>
          Find teaching materials from all over the world in 20 different languages. 
        </p>
        <p>
          And share your own materials to imporve world wide access. 
        </p>
      
        <p>
          <Button bsStyle="primary">Find materials</Button>
        </p>
      </div>
    </Jumbotron>
    </>

  );
};

export default HomePage;
