import React from "react";
import { Switch, Route } from "react-router-dom";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const Router = ({setRightButtonText}) => {
  return (
    
      <Switch>
        <Route exact path="/">
          <LoginPage setRightButtonText={setRightButtonText}/>
        </Route>
        <Route exact path="/signup">
          <SignUpPage setRightButtonText={setRightButtonText} />
        </Route>
        <Route exact path="/feed">
          <FeedPage />
        </Route>
        <Route exact path="/post/:id">
          <PostPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    
  );
};
export default Router