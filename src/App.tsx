import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect
} from "react-router-dom";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import Home from "./pages/home/Home";
import logo from "./logo.svg";
import Project from "./pages/projectPage/Project";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";

export default function App() {
return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src="./logo.svg" width="30" height="30" alt=""></img>
        <a className="navbar-brand" href="#">Site</a>
          <ul  className="navbar-nav mr-auto">
            <li className="nav-item active">
              < Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item active">
              <Link to="/registration" className="nav-link">Registration</Link>
            </li>
          </ul>
        </nav>

        
        <Switch>
          <Route exact path="/" render={() =>{ return <Redirect to="/login"/>}}/>
          <Route exact path="/registration">
            <Registration />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/project">
            <Project />
          </Route>
          <Route exact path="/page1">
            <Page1 />
          </Route>
          <Route exact path="/page2">
            <Page2 />
          </Route>
          <Route exact path="/page3">
            <Page3 />
          </Route>
          <Route exact path="/page4">
            <Page4 />
          </Route>
          <Route exact path="/page5">
            <Page5 />
          </Route>
          <Route exact path="/page6">
            <Page6 />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
  );
}