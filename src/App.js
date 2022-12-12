import React from 'react';
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefault";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import { useSetCurrentUser } from "./contexts/CurrentUserContext";
import PostEditForm from "./pages/posts/PostEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";

import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import HomePage from "./pages/Home/HomePage";
import NotFound from "./components/NotFound";

function App() {
  const currentUser = useSetCurrentUser();

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route
            exact
            path="/findmaterial"
            render={() => <PostsPage message="No results found." />}
          />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/posts/create" render={() => <PostCreateForm />} />
          <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
          <Route exact path="/posts/:id" render={() => <PostPage />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm/>}
          />
          <Route path render={() => <NotFound/>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
