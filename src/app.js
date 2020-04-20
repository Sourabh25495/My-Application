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
<<<<<<< HEAD
=======
  withRouter,
>>>>>>> a08f187c160b87d138652534256852319a2683cb
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

<<<<<<< HEAD
=======
//export default withRouter(App)

>>>>>>> a08f187c160b87d138652534256852319a2683cb
ReactDOM.render(<App />, document.getElementById("index"));
