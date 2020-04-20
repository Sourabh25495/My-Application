import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import PortfolioApplication from "./PortfolioApplication";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Routes from "./Routes";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div>
      <Router>
        <Routes />
        <PortfolioApplication />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("index"));
