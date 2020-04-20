import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Profile from "./pages/Profile";

// const ROOT_PATH = 'sk'
const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Profile} />
      {/* <Route path="/education" component={<div>Hi</div>} /> */}
      {/* <Route path="/work-exp">Work Exp</Route>
      <Route path="/projects">Personal projects</Route> */}
    </Switch>
  );
};

export default Routes;
