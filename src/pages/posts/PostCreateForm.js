import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefault";

const PostCreateForm = () => {
  const [errors, setErrors] = useState({});
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    upload: "",
  });

  const { title, description, upload } = postData;

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
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>upload file</Form.Label>
        <Form.File id="upload" ref={uploadInput} onChange={handleChangeUpload} />
      </Form.Group>
      {errors.upload?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
      <Form.Group>
        <Form.Label>Document Title</Form.Label>
        <Form.Control
          type="title"
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
          placeholder="Description"
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
      {/* <Form.Group controlId="language">
        <Form.Label>Select Norm Type</Form.Label>
        <Form.Control
          as="select"
          value={type}
          onChange={e => {
            console.log("e.target.value", e.target.value);
            setType(e.target.value);
          }}
        >
          <option value="DICTUM">Dictamen</option>
          <option value="CONSTANCY">Constancia</option>
          <option value="COMPLEMENT">Complemento</option>
        </Form.Control>
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default PostCreateForm;
