import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";

import styles from "../../styles/PostsPage.module.css";

import { Button, Jumbotron, Row } from "react-bootstrap";
import FilterPosts from "../../components/FilterPosts";

function PostsPage({ message, filter = "" }) {
  
  return (
    <Container className="">
      <Jumbotron className={styles.Jumbotron}>
        <h1>Find Teaching materials</h1>
        <p>
          We have teaching materials in different languages and for different age and levels.
        </p>
        <p>
        Didn't find what your looking for? New materials are added every day! 
        </p>
        <hr />
      </Jumbotron>
      <FilterPosts/>
    </Container>
  );
}

export default PostsPage;
