import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefault";

function PostEditForm() {
  const [errors, setErrors] = useState({});
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    upload: "",
    language:"",
    age: "",
    level:"",
  });
 
  const { title, description, upload, language, age, level } = postData;

  const uploadInput = useRef(null);
  const history = useHistory();
  const {id} = useParams();

  useEffect(()=> {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/${id}/`);
        const {title, description, upload, language, age, level, is_owner} = data;

        is_owner ? setPostData({title, description, upload, language, age, level}) : history.push("/")
      } catch (err) {
            console.log(err);
          }
        };
    
        handleMount();
      }, [history, id]);

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

    if(uploadInput?.current?.files[0]){
    formData.append("upload", uploadInput.current.files[0]);
    }

    try {
        await axiosReq.put(`/posts/${id}/`, formData);
        history.push(`/posts/${id}`);
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
        <Form.File id="upload" onChange={handleChangeUpload} ref={uploadInput} />
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
      <Form.Group>
        <Form.Label>Select a language</Form.Label>
        <Form.Control
          as="select"
          name="language"
          value={language}
          onChange={handleChange}
        >
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
          <option value="swedish">Swedish</option>
          <option value="dutch">Dutch</option>
          <option value="portuguese">Portuguese</option>
          <option value="mandarin">Mandarin</option>
          <option value="hindi">Hindi</option>
          <option value="chinese">Chinese</option>
          <option value="japanese">Japanese</option>
          <option value="korean">Korean</option>
          <option value="russian">Russian</option>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Select a age</Form.Label>
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
      
      <Form.Group>
        <Form.Label>Select a level</Form.Label>
        <Form.Control
          as="select"
          name="level"
          value={level}
          onChange={handleChange}
        >
          <option value="beginners">beginners</option>
          <option value="intermediate">intermediate</option>
          <option value="1advanced">advanced</option>
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default PostEditForm;
