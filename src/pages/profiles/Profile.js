import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/Profile.module.css";
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
import { axiosReq, axiosRes } from "../../api/axiosDefault";
import { useHistory } from "react-router-dom";
import { MoreDropdown } from "../../components/MoreDropDown";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ProfilePage from "./ProfilePage";

function Profile() {
  const { id } = useParams();
  const [profileData, setProfileData] = useState({
    owner: "",
    language: "",
    language2: "",
    language3: "",
    occupation: "",
    about_me: "",
  });

  const { owner, language, language2, language3, occupation, about_me } =
    profileData;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data: profile } = await axiosReq.get(`/profiles/${id}`);
        setProfileData(profile);
        console.log(profile);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProfile();
  }, [id]);

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = async () => {
    history.push(`/profiles/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/profiles/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container className="row vh-100">
        <Card
          className="card bg-light mb- col-sm-12 my-auto justify-content-center align-items-center "
          style={{ width: "18rem" }}
        >
          <Card.Body>





            <span className="float-right">
              {" "}
              {is_owner && ProfilePage && (
                <MoreDropdown
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              )}
            </span>
            <Card.Title>
              <h2>{owner}</h2>{" "}
            </Card.Title>
            <hr />
            <Card.Text>
              <Container>
                <Row>
                  <Col>
                    <img
                      src="https://res.cloudinary.com/ds6jpxpzy/image/upload/v1670678336/school-307641_1280_bw6po4.png"
                      className="img-thumbnail"
                      alt=""
                    />
                  </Col>
                  <Col className={styles.Textcard}>
                    <div>about me: {about_me}</div>
                    <div>
                      language(s):
                      {language === "None" ? " " : language}
                      {language2 === "None" ? " " : language2}
                      {language3 === "None" ? " " : language3}{" "}
                    </div>
                    <div>occupation: {occupation}</div>
                  </Col>
                </Row>
              </Container>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Profile;
