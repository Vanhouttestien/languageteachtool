import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import  Row  from "react-bootstrap/Row";
import { fetchMoreData } from "../utils/utils";
import InfiniteScroll from "react-infinite-scroll-component";
import { axiosReq } from "../api/axiosDefault";
import Post from "../pages/posts/Post";
import Asset from "./Asset";
import { useCurrentUser } from "../contexts/CurrentUserContext";


function FilterPosts() {
  const [posts, setPosts] = useState({ results: [] });
  const currentUser = useCurrentUser();

  const [filterData, setFilterData] = useState({
    query: "",
    language: "",
    age: "",
    level: "",
  });

  const { query, language, age, level } = filterData;
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(
          `posts/?search=${query}&age=${age}&level=${level}&language=${language}&owner=`
        );
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };
    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filterData, currentUser]);

  return (
    <Container className="">
      <Form onSubmit={(event) => event.preventDefault()} className="bg-dark p-5">
        <Form.Group as={Row}>
          <Form.Label>
            <i className="fa-solid fa-magnifying-glass"></i> 
          </Form.Label>
          <Col className="pr-0">
            <Form.Control
            className="w-75"
              value={query}
              onChange={(event) => {
                setFilterData({
                  ...filterData,
                  [event.target.name]: event.target.value,
                });
              }}
              name="query"
              type="text"
              placeholder=" Search"
            />
          </Col>
      </Form.Group>
        <Form.Group as={Row}> 
          <Form.Label>
           <i className="fa-solid fa-filter"></i> 
          </Form.Label>
          <Col className="pr-0">
            <Form.Control
            className="w-75"
              as="select"
              name="language"
              value={language}
              onChange={(event) => {
                setFilterData({
                  ...filterData,
                  [event.target.name]: event.target.value,
                });
              }}
            >
              <option value="">Select a language</option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="Swedish">Swedish</option>
              <option value="Dutch">Dutch</option>
              <option value="Portuguese">Portuguese</option>
              <option value="Mandarin">Mandarin</option>
              <option value="Hindi">Hindi</option>
              <option value="Chinese">Chinese</option>
              <option value="Japanese">Japanese</option>
              <option value="Korean">Korean</option>
              <option value="Russian">Russian</option>
            </Form.Control>
          </Col>
          </Form.Group>

          <Form.Group as={Row}> 
          <Form.Label>
          <i className="fa-solid fa-filter"></i>
          </Form.Label>
          <Col className="pr-0">
            <Form.Control
            className="w-75"
              as="select"
              name="age"
              value={age}
              onChange={(event) => {
                setFilterData({
                  ...filterData,
                  [event.target.name]: event.target.value,
                });
              }}
            >
              <option value="">Select an age group</option>
              <option value="4-7">4-7</option>
              <option value="7-11">7-11</option>
              <option value="11-13">11-13</option>
              <option value="14-17">14-17</option>
              <option value="18+">18+</option>
            </Form.Control>
          </Col> 
          </Form.Group>

          <Form.Group as={Row}> 
          <Form.Label>
          <i className="fa-solid fa-filter"></i> 
          </Form.Label>
          <Col className="pr-0">
            <Form.Control
            className="w-75"
              as="select"
              name="level"
              value={level}
              onChange={(event) => {
                setFilterData({
                  ...filterData,
                  [event.target.name]: event.target.value,
                });
              }}
            >
              <option value="">Select a level</option>
              <option value="beginners">beginners</option>
              <option value="intermediate">intermediate</option>
              <option value="advanced">advanced</option>
            </Form.Control>
          </Col>
        </Form.Group>
      </Form>
      <hr className="border-light"/>
      {hasLoaded ? (
        <>
          {posts.results.length ? (
            <InfiniteScroll
              children={posts.results.map((post) => (
                <Post key={post.id} {...post} setPosts={setPosts} />
              ))}
              dataLength={posts.results.length}
              hasMore={!!posts.next}
              next={() => fetchMoreData(posts, setPosts)}
            />
          ) : (
            <p>No results</p>
          )}
        </>
      ) : (
        <Container>
          <Asset spinner />
        </Container>
      )}
    </Container>
  );
}

export default FilterPosts;
