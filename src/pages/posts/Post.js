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
  Row,
  Tooltip,
} from "react-bootstrap";
import { axiosRes } from "../../api/axiosDefault";
import { Link, useHistory } from "react-router-dom";
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
    upload,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = async () => {
    history.push(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className={styles.Card}>
      <Row className={styles.TitleRow}>
        <Col xs={12} md={8}>
          <div className={styles.CardTitle}>{title}</div>
          <div><Link to={`/profiles/${id}/`}>{owner}</Link></div>
        </Col>
        <Col xs={6} md={4} className="d-flex align-top">
          {is_owner && postPage && (
            <MoreDropdown handleEdit={handleEdit} handleDelete={handleDelete} />
          )}
        </Col>
      </Row>
      <Row className={styles.Description}>
        <Col xs={5}><span className={styles.DescriptionItems}>description:</span> 
        <br></br>{description}</Col>
        <Col xs={5}>
          <Container>
            <Row >
              <span className={styles.DescriptionItems}>Language: </span> {language}
            </Row>
            <Row><span className={styles.DescriptionItems}>Age group:</span> {age}</Row>
            <Row><span className={styles.DescriptionItems}>Level:</span> {level}</Row>
            <Row><span className={styles.DescriptionItems}>created at:</span> {created_at}</Row>
            <Row><span className={styles.DescriptionItems}>Last update:</span> {updated_at}</Row>
          </Container>
        </Col>
        <Col className="d-flex align-middle">
          <a href={upload}><Button className={styles.Button}>See download</Button></a>
        </Col>
      </Row>
    </Container>
  );
};

export default Post;
