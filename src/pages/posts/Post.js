import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import {
  Card,
  ListGroup,
  ListGroupItem,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { axiosRes } from "../../api/axiosDefault";

const Post = (props) => {
  const {
    owner,
    title,
    description,
    id,
    language,
    age,
    level,
    created_at,
    postPage,
    saved_post_count,
    saved_post_id,
    setPosts,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  // const handleSavePost = async () => {
  //   try {
  //     const { data } = await axiosRes.post("/savedposts/", { post: id });
  //     setPosts((prevPosts) => ({
  //       ...prevPosts,
  //       results: prevPosts.results.map((post) => {
  //         return post.id === id
  //           ? {
  //               ...post,
  //               save_post_count: post.save_post_count + 1,
  //               save_post_id: data.id,
  //             }
  //           : post;
  //       }),
  //     }));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const handleUnSavePost = async () => {
  //   try {
  //     await axiosRes.delete(`/savedposts/${saved_post_id}/`);
  //     setPosts((prevPosts) => ({
  //       ...prevPosts,
  //       results: prevPosts.results.map((post) => {
  //         return post.id === id
  //           ? { ...post, saved_post_count: post.save_post_count - 1, saved_post_id: null }
  //           : post;
  //       }),
  //     }));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>
          <span>{title}</span>
          <span>{owner}</span>
          {/* <span className={styles.PostBar}>
            {is_owner ? (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>You can't like your own post!</Tooltip>}
              >
                <i className="fa-solid fa-floppy-disk" />
              </OverlayTrigger>
            ) : saved_post_id ? (
              <span onClick={handleUnSavePost}>
                <i className={`fa-solid fa-floppy-disk ${styles.Save}`} />
              </span>
            ) : currentUser ? (
              <span onClick={handleSavePost}>
                <i
                  className={`fa-solid fa-floppy-disk ${styles.SaveOutline}`}
                />
              </span>
            ) : (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Log in to like posts!</Tooltip>}
              >
                <i className="fa-solid fa-floppy-disk" />
              </OverlayTrigger>
            )}
            {saved_post_count}
          </span>
          {is_owner && postPage && "..."} */}
        </Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Language: {language}</ListGroupItem>
        <ListGroupItem>Age group: {age}</ListGroupItem>
        <ListGroupItem>Level: {level}</ListGroupItem>
        <ListGroupItem>Created at: {created_at}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Post;
