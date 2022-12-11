import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { useCurrentUser } from "../contexts/CurrentUserContext";

export const useRedirect = (userAuthStatus) => {
  const history = useHistory();
  const currentUser = useCurrentUser();



  useEffect(() => {
    const handleMount = async () => {
      try {
        await axios.post("/dj-rest-auth/token/refresh/");
        // if user is logged in, the code below will run
        if (userAuthStatus === "loggedIn" && currentUser) {
          const {data } =  await axios.post("/dj-rest-auth/token/refresh/"); 
          console.log(data);
          history.push("/");
        }
      } catch (err) { 
        // if user is not logged in, the code below will run
        if (userAuthStatus === "loggedOut") {
          history.push("/");
        }
      }
    };

    handleMount();
  }, [history, userAuthStatus]);
};