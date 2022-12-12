import React from "react";
import Container from "react-bootstrap/Container";
import styles from "../../styles/PostsPage.module.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import FilterPosts from "../../components/FilterPosts";

function PostsPage() {
  return (
    <Container className="">
      <Jumbotron className={styles.Jumbotron}>
        <h1 className="d-flex justify-content-center mt-5 p-2">Find Teaching materials</h1>
        <p className="d-flex justify-content-center">
          We have teaching materials in different languages and for different
          ages and levels.
        </p>

      </Jumbotron>
      <FilterPosts />
    </Container>
  );
}

export default PostsPage;
