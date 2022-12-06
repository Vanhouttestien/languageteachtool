import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import {
  Button,
  Card,
  CardDeck,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { axiosRes } from "../../api/axiosDefault";
import { useHistory } from "react-router-dom";
import { MoreDropdown } from "../../components/MoreDropDown";

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
    updated_at,
    postPage,
    saved_post_count,
    saved_post_id,
    setPosts,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = async () => {
    history.push("/posts/${id}/edit");
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

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
      <Card className={styles.Card}>
        <Card.Body>
          <Card.Title>
            <span>{title} </span>
            <span>{owner}</span>
            <span>
              {is_owner && postPage && (
                <MoreDropdown
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              )}{" "}
            </span>
            <Card.Subtitle className="mb-2 text-muted">{updated_at}</Card.Subtitle>
            
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
          </span> */}
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
          <Button>See details</Button>
        </Card.Body>
      </Card>
  );
};

export default Post;
