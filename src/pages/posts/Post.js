import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
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
    upload,
    profile_id, 
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
      // console.log(err);
    }
  };

  return (
    <Container className={styles.Card}>
      <Row className={styles.TitleRow}>
        <Col xs={12} md={8}>
          <div className={styles.CardTitle}> 
          <Link to={`/posts/${id}`} className={styles.Link}>{title}</Link></div>
          <div><Link to={`/profiles/${profile_id}`} className={styles.Link}>{owner}</Link></div> 
        </Col>
        <Col className="d-flex align-top">
          {is_owner && (
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
          <a href={upload} target="_blank" rel="noreferrer" ><Button className={styles.Button}>Open file</Button></a>
        </Col>
      </Row>
    </Container>
  );
};

export default Post;
