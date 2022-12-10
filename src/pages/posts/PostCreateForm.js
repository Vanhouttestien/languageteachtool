import React from "react";
import { useRef } from "react";
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
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefault";
import styles from "../../styles/PostCreateForm.module.css";

function PostCreateForm() {
  const [errors, setErrors] = useState({});
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    upload: "",
    language: "",
    age: "",
    level: "",
  });

  const { title, description, upload, language, age, level } = postData;

  const uploadInput = useRef(null);
  const history = useHistory();

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeUpload = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(upload);
      setPostData({
        ...postData,
        upload: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("language", language);
    formData.append("age", age);
    formData.append("level", level);
    formData.append("upload", uploadInput.current.files[0]);

    try {
      const { data } = await axiosReq.post("/posts/", formData);
      history.push(`/posts/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Form className={styles.Form} onSubmit={handleSubmit}>
      <Jumbotron className={styles.Jumbotron}>
        <Container>
          <h1>Share</h1>
          <p>Share your teaching materials</p> 
          <p>
            Add a file and share your language teaching materials with others.
          </p>
          <hr />
          
        </Container>
      </Jumbotron>
      <Container className={styles.Formitems}>
        <Form.Group>
          <Form.Label>Document Title</Form.Label>
          <Form.Control
            type="type"
            placeholder="Enter a title"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.title?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            placeholder="Add a description"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.description?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <Form.Group>
          <Form.Label className="d-none">upload file</Form.Label>
          <Form.File
            did="upload"
            onChange={handleChangeUpload}
            ref={uploadInput}
          />
        </Form.Group>
        {errors.upload?.map((message, idx) => (
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
            {errors.language?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Select a age:</Form.Label>
              <Form.Control
                as="select"
                name="age"
                value={age}
                onChange={handleChange}
              >
                <option value="4-7">4-7</option>
                <option value="7-11">7-11</option>
                <option value="11-13">11-13</option>
                <option value="14-17">14-17</option>
                <option value="18+">18+</option>
              </Form.Control>
            </Form.Group>
            {errors.age?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
            </Alert>
        ))}
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Select a level:</Form.Label>
              <Form.Control
                as="select"
                name="level"
                value={level}
                onChange={handleChange}
              >
                <option value="Beginners">beginners</option>
                <option value="Intermediate">intermediate</option>
                <option value="Advanced">advanced</option>
              </Form.Control>
            </Form.Group>
            {errors.level?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
            </Alert>
        ))}
          </Col>
        </Row>
        <Button variant="success" type="submit">
          Submit
        </Button>
        {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
      </Container>
    </Form>
  );
}

export default PostCreateForm;
