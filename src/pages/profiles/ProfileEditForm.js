import React, { useEffect } from "react";
import { useState } from "react";
import {
  Form,
  Button,
  Alert,
  Jumbotron,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefault";
import styles from "../../styles/PostCreateForm.module.css";

function ProfileEditForm() {
  const [errors, setErrors] = useState({});
  const [profileData, setProfileData] = useState({
    owner: "",
    occupation: "",
    language: "",
    language2: "",
    language3: "",
    about_me: "",
  });

  const { occupation, language, language2, language3, about_me } = profileData;

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/profiles/${id}/`);
        const { owner, occupation, language, language2, language3, about_me, is_owner } = data;
        is_owner
          ? setProfileData({ owner, occupation, language, language2, language3, about_me })
          : history.push("/");
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [history, id]);

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("language", language);
    formData.append("language2", language2);
    formData.append("language3", language3);
    formData.append("occupation", occupation);
    formData.append("about_me", about_me);

    try {
      console.log(formData);
      await axiosReq.put(`/profiles/${id}/`, formData);
      history.push(`/profiles/${id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <>
<Form className={styles.Form} onSubmit={handleSubmit}>
      <Jumbotron className={styles.Jumbotron}>
        <Container>
          <h1>Edit your profile</h1>
        </Container>
      </Jumbotron>
        <Form.Group>
          <Form.Label>occupation</Form.Label>
          <Form.Control
            type="text"
            placeholder="Occupation"
            name="occupation"
            value={occupation}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.occupation?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

<Form.Group>
          <Form.Label>About me</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            placeholder="Add something about yourself"
            name="about_me"
            value={about_me}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.occupation?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}


        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Select a language:</Form.Label>
              <Form.Control
                as="select"
                name="language"
                value={language}
                onChange={handleChange}
              >
                <option value="None">None</option>
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
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Add a language:</Form.Label>
              <Form.Control
                as="select"
                name="language2"
                value={language2}
                onChange={handleChange}
              >
                <option value="None">None</option>
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
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Select a language:</Form.Label>
              <Form.Control
                as="select"
                name="language3"
                value={language3}
                onChange={handleChange}
              >
                <option value="None">None</option>
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
            </Form.Group>
          </Col>
        </Row>
        <Button variant="success" type="submit">
          Submit
        </Button>
    </Form>

      profile
      <Link to="/profiles/:id/edit/password">
        <Button>change password</Button>
      </Link>
    </>
  );
}

export default ProfileEditForm;
