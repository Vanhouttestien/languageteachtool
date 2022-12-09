import React, { useEffect, useRef, useState } from "react";
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
import { axiosReq, axiosRes } from "../../api/axiosDefault";
import { useHistory } from "react-router-dom";
import { MoreDropdown } from "../../components/MoreDropDown";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ProfilePage from "./ProfilePage";
import { rest } from "msw";

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

  // function languages(language, language2, language3) {
  //   {language == "None" && " "} 
  //   {language2 == "None" && " "} 
  //   {language3 == "None" && " "} 
  //   return language, language2, language3
  // }

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
    <Container>
      <div>
       <h1>Profile page</h1>
       {is_owner && ProfilePage && (
            <MoreDropdown handleEdit={handleEdit} handleDelete={handleDelete} />
          )}
       <h2>{owner}</h2>
      </div>
      <div>language: 
        {language === "None"? " " : language}
        {language2 === "None"?  " " : language2}
        {language3 === "None"?  " " : language3} </div>
      <div>occupation: {occupation}</div>
      <div>about me: {about_me}</div>
    </Container>
    //  <post {...post.results[0]} setPosts={setPost} postPage />
  );
}

export default Profile;
