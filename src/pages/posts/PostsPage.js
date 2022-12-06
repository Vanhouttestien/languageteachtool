import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import Post from "./Post";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router";

import NoResults from "../../assets/no-results.png";
import { axiosReq } from "../../api/axiosDefault";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import { Button, Jumbotron, Row } from "react-bootstrap";

function PostsPage({ message, filter = "" }) {
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}search=${query}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000);
    return () => clearTimeout(timer);
  }, [filter, query, pathname]);

  return (
    <Container className="">
      <Jumbotron className={styles.Jumbotron}>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
      <Form onSubmit={(event) => event.preventDefault()}>
        <span>
          <i className="fa-solid fa-magnifying-glass" />
        </span>
        <Form.Control
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          type="text"
          placeholder="Search Post"
        />
      </Form>
      {hasLoaded ? (
        <>
          {posts.results.length ? (
            <InfiniteScroll
              children={posts.results.map((post) => (
                <Post key={post.id} {...post} setPosts={setPosts} />
              ))}
              dataLength={posts.results.length}
              loader={<Asset spinner />}
              hasMore={!!posts.next}
              next={() => fetchMoreData(posts, setPosts)}
            />
          ) : (
            <Container h={100}>
              <Asset src={NoResults} message={message} />
            </Container>
          )}
        </>
      ) : (
        <Container className={appStyles.Content}>
          <Asset spinner />
        </Container>
      )}
    </Container>
  );
}

export default PostsPage;
